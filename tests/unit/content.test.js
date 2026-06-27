import { describe, it, expect } from 'vitest';
import { BRAND, IMAGES, unsplashUrl, unsplashSrcset } from '@/lib/content';

describe('BRAND', () => {
  it('contient les champs requis', () => {
    expect(BRAND).toHaveProperty('name');
    expect(BRAND).toHaveProperty('tagline');
    expect(BRAND).toHaveProperty('email');
    expect(BRAND).toHaveProperty('phones');
  });

  it('a un email non vide', () => {
    expect(BRAND.email).toMatch(/^.+@.+\..+$/);
  });

  it('a au moins un téléphone au format E.164', () => {
    expect(BRAND.phones.length).toBeGreaterThan(0);
    BRAND.phones.forEach((p) => {
      expect(p.tel).toMatch(/^\+\d{10,15}$/);
      expect(p.number).toBeTruthy();
      expect(p.name).toBeTruthy();
    });
  });

  it('chaque réseau social est une URL valide', () => {
    Object.values(BRAND.socials).forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });
});

describe('unsplashUrl', () => {
  it('ajoute une largeur', () => {
    const url = unsplashUrl('https://images.unsplash.com/photo-123', 800);
    expect(url).toContain('w=800');
    expect(url).toContain('images.unsplash.com/photo-123');
  });

  it('retourne url tel quel si non-unsplash', () => {
    expect(unsplashUrl('photo.jpg')).toBe('photo.jpg');
  });

  it('largeur par défaut = 1080', () => {
    const url = unsplashUrl('https://images.unsplash.com/photo-123');
    expect(url).toContain('w=1080');
  });
});

describe('unsplashSrcset', () => {
  it('retourne un srcset avec plusieurs largeurs', () => {
    const url = 'https://images.unsplash.com/photo-123';
    const srcset = unsplashSrcset(url);
    expect(typeof srcset).toBe('string');
    expect(srcset).toMatch(/480w/);
    expect(srcset).toMatch(/1920w/);
    expect(srcset).toContain('images.unsplash.com/photo-123');
  });

  it('retourne undefined si URL non-unsplash', () => {
    expect(unsplashSrcset('https://example.com/photo.jpg')).toBeUndefined();
    expect(unsplashSrcset('')).toBeUndefined();
  });
});

describe('IMAGES', () => {
  it('contient une image hero', () => {
    expect(IMAGES.hero).toMatch(/^https:\/\/images\.unsplash\.com\//);
  });

  it('contient au moins une entrée beforeAfter', () => {
    expect(IMAGES.beforeAfter.length).toBeGreaterThan(0);
    IMAGES.beforeAfter.forEach((ba) => {
      expect(ba).toHaveProperty('before');
      expect(ba).toHaveProperty('after');
      expect(ba.before).toMatch(/^https:\/\//);
    });
  });

  it('contient au moins une entrée portfolio', () => {
    expect(IMAGES.portfolio.length).toBeGreaterThan(0);
  });
});