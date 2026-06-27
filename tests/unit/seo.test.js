import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(__dirname, '../..');

describe('SEO & métadonnées', () => {
  let html;
  beforeAll(() => {
    const indexPath = resolve(root, 'index.html');
    if (!existsSync(indexPath)) return;
    html = readFileSync(indexPath, 'utf-8');
  });

  it('index.html existe', () => {
    expect(existsSync(resolve(root, 'index.html'))).toBe(true);
  });

  it('a un title < 70 caractères', () => {
    const m = html.match(/<title>([^<]+)<\/title>/);
    expect(m).toBeTruthy();
    expect(m[1].length).toBeLessThanOrEqual(70);
  });

  it('a une meta description', () => {
    expect(html).toMatch(/<meta\s+name="description"\s+content="[^"]+"/);
  });

  it('a une canonical', () => {
    expect(html).toMatch(/<link\s+rel="canonical"/);
  });

  it('a Open Graph complet (title, description, image, url)', () => {
    expect(html).toMatch(/og:title/);
    expect(html).toMatch(/og:description/);
    expect(html).toMatch(/og:image/);
    expect(html).toMatch(/og:url/);
  });

  it('a Twitter Card', () => {
    expect(html).toMatch(/twitter:card/);
  });

  it('a JSON-LD LocalBusiness OU FAQPage', () => {
    expect(html).toMatch(/application\/ld\+json/);
    expect(html).toMatch(/schema\.org/);
  });

  it('précharge une image LCP', () => {
    expect(html).toMatch(/<link[^>]+rel="preload"[^>]+as="image"/);
  });

  it('a un theme-color pour mobile', () => {
    expect(html).toMatch(/<meta\s+name="theme-color"/);
  });

  it('a un manifest PWA', () => {
    expect(html).toMatch(/<link\s+rel="manifest"/);
  });
});

describe('Fichiers SEO publics', () => {
  it('robots.txt existe', () => {
    expect(existsSync(resolve(root, 'public/robots.txt'))).toBe(true);
  });

  it('sitemap.xml existe', () => {
    expect(existsSync(resolve(root, 'public/sitemap.xml'))).toBe(true);
  });

  it('manifest.webmanifest existe', () => {
    expect(existsSync(resolve(root, 'public/manifest.webmanifest'))).toBe(true);
  });

  it('og-image existe', () => {
    const exists = ['og-image.jpg', 'og-image.png', 'og-image.webp'].some(
      (n) => existsSync(resolve(root, 'public', n))
    );
    expect(exists).toBe(true);
  });
});
