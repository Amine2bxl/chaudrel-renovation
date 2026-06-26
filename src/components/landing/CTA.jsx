import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/content';
import Reveal from '@/lib/reveal';

export default function CTA() {
  return (
    <section id="contact" className="py-14 md:py-20 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <div
            className="reveal reveal-left"
            data-reveal="opacity: 0; y: 24px"
            data-reveal-end="opacity: 1; y: 0px"
            data-reveal-once="true"
            data-reveal-margin="-60px"
            data-reveal-duration="0.7"
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-brand-gold font-semibold mb-4">
              Démarrer Votre Projet
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-5">
              Prêt à Transformer
              <br />
              <span className="italic text-brand-goldLight">Votre Espace ?</span>
            </h2>
            <p className="text-[15px] text-white/45 font-light leading-[1.8] mb-6 max-w-sm">
              Consultation gratuite et sans engagement. Nous nous déplaçons chez vous pour évaluer votre projet et vous accompagner de A à Z.
            </p>

            <div className="space-y-3">
              {BRAND.phones.map(({ name, number, tel }) => (
                <a
                  key={name}
                  href={`tel:${tel}`}
                  className="flex items-center gap-4 group p-4 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-brand-gold/30 rounded-2xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">{name}</p>
                    <p className="text-white font-light mt-0.5">{number}</p>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-white/20 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300"
                    aria-hidden="true"
                  />
                </a>
              ))}

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 group p-4 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-brand-gold/30 rounded-2xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">Email</p>
                  <p className="text-white font-light mt-0.5">{BRAND.email}</p>
                </div>
                <ArrowRight
                  className="w-4 h-4 text-white/20 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300"
                  aria-hidden="true"
                />
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/8 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-medium">Zone d'intervention</p>
                  <p className="text-white font-light mt-0.5">{BRAND.zone}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal reveal-left"
            data-reveal="opacity: 0; y: 24px"
            data-reveal-end="opacity: 1; y: 0px"
            data-reveal-once="true"
            data-reveal-margin="-60px"
            data-reveal-delay="0.15"
            data-reveal-duration="0.7"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const PROJECT_TYPES = [
  { value: '', label: 'Sélectionnez' },
  { value: 'Cuisine', label: 'Cuisine' },
  { value: 'Salle de Bain', label: 'Salle de Bain' },
  { value: 'Jardin & Extérieur', label: 'Jardin & Extérieur' },
  { value: 'Toiture', label: 'Toiture' },
  { value: 'Piscine', label: 'Piscine' },
  { value: 'Rénovation Complète', label: 'Rénovation Complète' },
  { value: 'Autre', label: 'Autre' },
];

const PROPERTY_TYPES = [
  { value: '', label: 'Sélectionnez' },
  { value: 'Appartement', label: 'Appartement' },
  { value: 'Maison', label: 'Maison' },
  { value: 'Villa', label: 'Villa' },
  { value: 'Loft', label: 'Loft' },
  { value: 'Commerce / Bureau', label: 'Commerce / Bureau' },
  { value: 'Autre', label: 'Autre' },
];

const inputClass =
  'w-full bg-[#1C1C1C] border border-white/12 rounded-xl px-4 py-3 text-white text-[14px] font-light placeholder:text-white/20 outline-none focus:border-brand-gold/50 transition-all duration-200';
const labelClass =
  'block text-[10px] tracking-[0.18em] uppercase text-white/40 font-medium mb-2';

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const prenom = fd.get('prenom');
    const nom = fd.get('nom');
    const email = fd.get('email');
    const telephone = fd.get('telephone');
    const codePostal = fd.get('code_postal');
    const ville = fd.get('ville');
    const typeBien = fd.get('type_bien');
    const projet = fd.get('projet');
    const message = fd.get('message');

    const subject = `Demande de devis — ${projet || 'Projet'} — ${prenom} ${nom}`;
    const body =
      `Nom : ${prenom} ${nom}\n` +
      `Email : ${email}\n` +
      `Téléphone : ${telephone}\n` +
      `Localisation : ${codePostal} ${ville}\n` +
      `Type de bien : ${typeBien}\n` +
      `Type de projet : ${projet}\n\n` +
      `Message :\n${message}`;

    // Ouvre le client mail de l'utilisateur avec un message pré-rempli.
    // Pas de backend, pas de service tiers, pas de tracking.
    window.location.href =
      `mailto:${BRAND.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center h-full text-center min-h-[280px] sm:min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6" aria-hidden="true">
          <span className="text-3xl text-brand-gold">✓</span>
        </div>
        <p className="font-display text-2xl font-light text-white mb-3">Merci !</p>
        <p className="text-white/45 font-light text-sm max-w-xs">
          Votre client mail vient de s'ouvrir avec votre demande pré-remplie. Si rien ne s'est passé, contactez-nous directement à{' '}
          <a href={`mailto:${BRAND.email}`} className="text-brand-goldLight underline">
            {BRAND.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-5"
      noValidate
    >
      {/* Grille interne 2 col (md+) — garantit une symétrie parfaite sur tablette et PC.
          Mobile (grid-cols-1) empile proprement. Les blocs uniques traversent 2 col. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Paire 1 : identité */}
        <div className="md:col-span-1">
          <label htmlFor="prenom" className={labelClass}>Prénom</label>
          <input id="prenom" name="prenom" type="text" required placeholder="Votre prénom" className={inputClass} />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="nom" className={labelClass}>Nom</label>
          <input id="nom" name="nom" type="text" required placeholder="Votre nom" className={inputClass} />
        </div>

        {/* Paire 2 : contact */}
        <div className="md:col-span-1">
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required placeholder="votre@email.com" className={inputClass} />
        </div>
        <div className="md:col-span-1">
          <label htmlFor="telephone" className={labelClass}>Téléphone</label>
          <input id="telephone" name="telephone" type="tel" placeholder="+32 ..." className={inputClass} />
        </div>

        {/* Localisation : titre de section, traverse les 2 colonnes */}
        <fieldset className="md:col-span-2 space-y-4 sm:space-y-5 p-4 sm:p-5 bg-white/[0.03] border border-white/8 rounded-2xl">
          <legend className="px-2 text-[10px] tracking-[0.18em] uppercase text-brand-goldLight/80 font-semibold">
            Localisation
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="code_postal" className={labelClass}>Code postal</label>
              <input
                id="code_postal"
                name="code_postal"
                type="text"
                inputMode="numeric"
                maxLength="10"
                placeholder="1050"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="ville" className={labelClass}>Ville</label>
              <input
                id="ville"
                name="ville"
                type="text"
                placeholder="Ixelles"
                className={inputClass}
              />
            </div>

            {/* Sélecteur type de bien : à l'intérieur du fieldset, occupe la moitié droite pour rester symétrique */}
            <div className="md:col-span-2">
              <label htmlFor="type_bien" className={labelClass}>Type de bien</label>
              <select
                id="type_bien"
                name="type_bien"
                defaultValue=""
                className={`${inputClass} appearance-none`}
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#1C1C1C] text-white">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Type de projet : pleine largeur (2 col) */}
        <div className="md:col-span-2">
          <label htmlFor="projet" className={labelClass}>Type de projet</label>
          <select id="projet" name="projet" required defaultValue="" className={`${inputClass} appearance-none`}>
            {PROJECT_TYPES.map((p) => (
              <option key={p.value} value={p.value} className="bg-[#1C1C1C] text-white">
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message : pleine largeur (2 col) */}
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClass}>Votre projet</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Décrivez votre vision..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Bouton : pleine largeur (2 col) */}
        <button
          type="submit"
          className="md:col-span-2 w-full py-3.5 sm:py-4 bg-brand-gold hover:bg-brand-goldLight text-white text-[13px] tracking-[0.15em] uppercase font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-brand-gold/20"
        >
          Envoyer ma demande →
        </button>

        <p className="md:col-span-2 text-center text-[11px] text-white/25">
          Consultation gratuite · Réponse sous 24h · Sans engagement
        </p>
      </div>
    </form>
  );
}