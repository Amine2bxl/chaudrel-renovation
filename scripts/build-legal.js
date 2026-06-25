// Build des pages légales (politique de confidentialité, mentions légales).
// Stratégie : SSR les composants React via renderToString, puis injecte le HTML
// dans dist/legal/<page>.html avec le même template (CSS, meta tags) que index.html.
//
// Usage : node scripts/build-legal.js  (lancé après `vite build && prerender`)
//
// Pourquoi ce nouveau build :
//   - Avant : pages HTML statiques avec contenu en dur dans public/legal/.
//     → Difficile à maintenir, design déconnecté de la DA du site.
//   - Maintenant : composants React partagés (LegalPage, PrivacyPolicy, LegalNotice).
//     → Même palette, même typographie, même design system que le reste du site.

import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdtempSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { execSync } from 'node:child_process';
import esbuild from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

function fail(msg) {
  console.error(`[legal-build] ${msg}`);
  process.exit(1);
}

function findCssHref(html) {
  const m = html.match(/href="(\/assets\/index-[^"]+\.css)"/);
  return m ? m[1] : null;
}

function buildPage({ entryPath, pageTitle, pageDescription, canonicalPath, baseHref, indexTemplate }) {
  // Bundle SSR pour cette page légale
  const ssrEntry = `
import React from 'react';
import { renderToString } from 'react-dom/server';
import Page from ${JSON.stringify(entryPath)};
const html = renderToString(React.createElement(Page));
process.stdout.write('___SSR_OUT_START___' + html + '___SSR_OUT_END___');
`;

  const result = esbuild.buildSync({
    stdin: { contents: ssrEntry, resolveDir: root, loader: 'jsx' },
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: 'es2020',
    jsx: 'automatic',
    alias: { '@': resolve(root, './src') },
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'silent',
    write: false,
  });

  const tmpDir = mkdtempSync(join(tmpdir(), 'ssr-legal-'));
  const bundlePath = join(tmpDir, 'ssr.cjs');
  writeFileSync(bundlePath, result.outputFiles[0].text);

  let stdout;
  try {
    stdout = execSync(`node "${bundlePath}"`, {
      cwd: root,
      encoding: 'utf8',
      env: { ...process.env, NODE_ENV: 'production' },
    });
  } catch (e) {
    fail(`SSR exec failed pour ${pageTitle}:\n${e.stderr || e.message}`);
  } finally {
    try { unlinkSync(bundlePath); } catch {}
  }

  const m = stdout.match(/___SSR_OUT_START___([\s\S]*)___SSR_OUT_END___/);
  if (!m) fail(`Pattern SSR introuvable pour ${pageTitle}.`);
  const renderedHtml = m[1];

  // Utilise le template index.html ORIGINAL (avant prerender), pas celui avec SSR injecté
  let template = indexTemplate;
  const cssHref = findCssHref(template) || '/assets/index.css';

  // Adapte le head et injecte le HTML rendu
  template = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${pageTitle}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${pageDescription}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="https://chaudrel.be${canonicalPath}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${pageTitle}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${pageDescription}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="https://chaudrel.be${canonicalPath}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${pageTitle}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${pageDescription}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace(/<div id="root"[^>]*>[\s\S]*?<\/div>/, `<div id="root" data-ssr>${renderedHtml}</div>`)
    .replace(/<script type="module" src="[^"]*"><\/script>/, '')
    .replace(/(href|src)="\//g, `$1="${baseHref}`);

  return template;
}

function main() {
  const indexPath = resolve(distDir, 'index.html');
  if (!existsSync(indexPath)) fail('dist/index.html introuvable. Lance `vite build` avant.');

  // ⚠️ Le prerender a injecté le SSR dans dist/index.html. On a besoin de la version
  // ORIGINALE (sans SSR) pour partir d'un template propre. On la reconstitue depuis
  // le index.html source + le CSS compilé.
  const sourceIndexPath = resolve(root, 'index.html');
  const cssFile = readFileSync(indexPath, 'utf8').match(/href="(\/assets\/index-[^"]+\.css)"/)?.[1];

  let template = readFileSync(sourceIndexPath, 'utf8');
  if (cssFile) {
    template = template.replace(
      /<link rel="stylesheet" href="[^"]*" \/>/,
      `<link rel="stylesheet" href="${cssFile}" />`
    );
  }

  const pages = [
    {
      entryPath: resolve(root, 'src/components/landing/PrivacyPolicy.jsx'),
      pageTitle: 'Politique de confidentialité — Chaudrel',
      pageDescription: 'Comment Chaudrel Rénovation protège vos données personnelles : collecte, finalités, droits RGPD, cookies et hébergement.',
      canonicalPath: '/legal/politique-confidentialite.html',
      output: 'legal/politique-confidentialite.html',
    },
    {
      entryPath: resolve(root, 'src/components/landing/LegalNotice.jsx'),
      pageTitle: 'Mentions légales — Chaudrel',
      pageDescription: "Identité de l'éditeur, hébergeur, propriété intellectuelle et droit applicable pour le site chaudrel.be.",
      canonicalPath: '/legal/mentions-legales.html',
      output: 'legal/mentions-legales.html',
    },
  ];

  for (const page of pages) {
    const html = buildPage({ ...page, baseHref: '../', indexTemplate: template });
    const outPath = resolve(distDir, page.output);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
    const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
    console.log(`[legal-build] ${page.output} — ${html.length} chars, ~${words} mots`);
  }
  console.log('[legal-build] OK');
}

main();