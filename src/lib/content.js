/**
 * Contenu du site et URLs d'images (Unsplash, libres de droits).
 * Remplacer ces URLs par des assets hébergés sur le site (par ex. Cloudinary,
 * Vercel Blob) pour un contrôle total et de meilleures performances LCP.
 */

export const BRAND = {
  name: 'Chaudrel',
  tagline: 'Rénovation',
  founded: 2009,
  email: 'Info@chaudrel.be',
  phones: [
    { name: 'Alberto', number: '+32 477 27 31 18', tel: '+32477273118' },
    { name: 'Matteo', number: '+32 493 97 25 17', tel: '+32493972517' },
  ],
  zone: 'Bruxelles & Périphérie',
  socials: {
    instagram: 'https://www.instagram.com/chaudrel_renovation/',
    facebook: 'https://www.facebook.com/profile.php?id=61574019493337',
    youtube: 'https://www.youtube.com/@chaudrelrenovations',
    tiktok: 'https://www.tiktok.com/@chaudrelrenovations',
  },
};

// Logo officiel Chaudrel (fichier dans /public, versionné dans Git).
// Chemin absolu servi par Vite depuis le dossier public/.
export const LOGO = '/chaudrel-logo.webp';

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  beforeAfter: [
    {
      id: 'allee',
      label: 'Allée Extérieure',
      type: 'Asphalte Premium',
      location: 'Uccle, Bruxelles',
      before:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'cuisine',
      label: 'Cuisine Moderne',
      type: 'Marbre & Bois Massif',
      location: 'Ixelles, Bruxelles',
      before:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'terrasse',
      label: 'Terrasse & Jardin',
      type: 'Pierre Naturelle',
      location: 'Woluwe-Saint-Pierre',
      before:
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
      after:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  services: [
    {
      id: 'cuisine',
      title: 'Cuisine',
      subtitle: "L'Art Culinaire",
      description:
        "Rénovation de cuisine haut de gamme à Bruxelles — plans de travail en marbre de Carrare, façades en bois massif, îlot central sur mesure. Chaudrel conçoit des cuisines fonctionnelles et élégantes qui valorisent votre bien immobilier.",
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'salle-de-bain',
      title: 'Salle de Bain',
      subtitle: 'Sanctuaire Privé',
      description:
        "Rénovation complète de salle de bain à Bruxelles et périphérie — douche italienne, baignoire îlot, carrelage grand format en pierre naturelle, robinetterie premium. Un espace spa sur mesure pour votre quotidien.",
      image:
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'jardin',
      title: 'Jardin & Extérieur',
      subtitle: "Paysage d'Exception",
      description:
        "Aménagement paysager et rénovation d'extérieur en région bruxelloise — terrasse en pierre bleue belge, allée drainante, éclairage basse tension et espaces de vie outdoor clé en main. Expertise locale depuis 2009.",
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'toiture',
      title: 'Toiture',
      subtitle: 'Protection & Noblesse',
      description:
        "Rénovation de toiture à Bruxelles — pose d'ardoise naturelle, zinc à joint debout, membrane EPDM, isolation thermique conforme aux normes PEB. Devis gratuit, garantie décennale, intervention rapide.",
      image:
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'piscine',
      title: 'Piscine',
      subtitle: 'Oasis Privée',
      description:
        "Construction et rénovation de piscine privée à Bruxelles — piscine à débordement, liner sur mesure, pompe à chaleur, carrelage mosaïque ou pierre naturelle. Intégration paysagère soignée pour une valeur ajoutée durable.",
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  portfolio: [
    {
      title: 'Résidence Uccle',
      type: 'Rénovation Complète',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      span: 'lg:col-span-2',
      aspect: 'aspect-[3/2]',
    },
    {
      title: 'Villa Tervuren — Intérieur',
      type: 'Architecture Intérieure',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
      span: '',
      aspect: 'aspect-[4/5]',
    },
    {
      title: 'Terrasse Woluwe',
      type: 'Aménagement Extérieur',
      image:
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
      span: '',
      aspect: 'aspect-[4/5]',
    },
    {
      title: 'Cuisine Ixelles',
      type: 'Cuisine Sur Mesure',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
      span: 'lg:col-span-2',
      aspect: 'aspect-[3/2]',
    },
  ],
  story: '/story-before-after.webp',
};