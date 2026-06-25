// Build des pages légales (politique de confidentialité, mentions légales)
// depuis public/legal/template.html vers dist/legal/*.html
//
// Pour ajouter une page légale :
//   1. Créer public/legal/ma-page.html avec ses placeholders @@BODY@@, @@TITLE@@, etc.
//   2. Ajouter une entrée dans le tableau PAGES ci-dessous.
//
// Lance automatiquement après `vite build` via package.json.

import { readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const legalDir = resolve(root, 'public/legal');
const distLegalDir = resolve(distDir, 'legal');

const PAGES = [
  {
    source: 'politique-confidentialite.html',
    out: 'politique-confidentialite.html',
    title: 'Politique de confidentialité — Chaudrel',
    description: 'Découvrez comment Chaudrel Rénovation protège vos données personnelles et respecte votre vie privée.',
    pageTitle: 'Politique de confidentialité',
    canonicalPath: 'legal/politique-confidentialite.html',
    lastUpdated: 'Juin 2026',
  },
  {
    source: 'mentions-legales.html',
    out: 'mentions-legales.html',
    title: 'Mentions légales — Chaudrel',
    description: 'Informations légales relatives à Chaudrel Rénovation : éditeur, hébergeur, propriété intellectuelle.',
    pageTitle: 'Mentions légales',
    canonicalPath: 'legal/mentions-legales.html',
    lastUpdated: 'Juin 2026',
  },
];

function fail(msg) {
  console.error(`[legal-build] ${msg}`);
  process.exit(1);
}

function main() {
  if (!existsSync(distDir)) {
    fail('dist/ introuvable. Lance `vite build` avant ce script.');
  }
  if (!existsSync(resolve(distDir, 'assets/index-'))) {
    const cssFiles = readdirSync(resolve(distDir, 'assets')).filter(f => f.endsWith('.css'));
    if (cssFiles.length === 0) fail('Aucun CSS trouvé dans dist/assets/');
  }

  const templatePath = resolve(legalDir, 'template.html');
  if (!existsSync(templatePath)) fail('public/legal/template.html introuvable.');

  const cssMatch = readdirSync(resolve(distDir, 'assets')).filter(f => f.endsWith('.css'));
  if (cssMatch.length === 0) fail('Aucun fichier CSS dans dist/assets/');
  const cssPath = `/assets/${cssMatch[0]}`;

  const template = readFileSync(templatePath, 'utf8');

  const year = new Date().getFullYear();

  // Nettoie dist/legal/ avant rebuild
  if (existsSync(distLegalDir)) {
    for (const f of readdirSync(distLegalDir)) {
      try { unlinkSync(resolve(distLegalDir, f)); } catch {}
    }
  } else {
    // mkdir
    const { mkdirSync } = require('node:fs');
    mkdirSync(distLegalDir, { recursive: true });
  }

  for (const page of PAGES) {
    const srcPath = resolve(legalDir, page.source);
    if (!existsSync(srcPath)) {
      console.warn(`[legal-build] ${page.source} absent — skip`);
      continue;
    }

    const body = readFileSync(srcPath, 'utf8');

    const subs = {
      '@@TITLE@@': page.title,
      '@@DESCRIPTION@@': page.description,
      '@@PAGE_TITLE@@': page.pageTitle,
      '@@LAST_UPDATED@@': page.lastUpdated,
      '@@BODY@@': body,
      '@@CSS_PATH@@': cssPath,
      '@@CANONICAL_PATH@@': page.canonicalPath,
      '@@BASE@@': '../',
      '@@LOGO_PATH@@': 'chaudrel-logo.jpg',
      '@@YEAR@@': String(year),
    };

    let html = template;
    for (const [key, value] of Object.entries(subs)) {
      html = html.split(key).join(value);
    }

    const outPath = resolve(distLegalDir, page.out);
    writeFileSync(outPath, html);

    const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
    console.log(`[legal-build] ${page.out} — ${html.length} chars, ~${words} mots`);
  }

  console.log('[legal-build] OK');
}

main();
