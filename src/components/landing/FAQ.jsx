import Reveal from '@/lib/reveal';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Quels types de rénovations réalisez-vous ?',
    a: "Nous intervenons sur tous types de rénovations intérieures et extérieures : cuisines, salles de bain, toitures, jardins, terrasses, piscines, façades et rénovations complètes.",
  },
  {
    q: 'Proposez-vous des devis gratuits ?',
    a: "Oui, consultation gratuite et sans engagement. Nous nous déplaçons chez vous, évaluons votre projet et vous fournissons un devis détaillé et personnalisé.",
  },
  {
    q: 'Quels matériaux utilisez-vous ?',
    a: "Exclusivement des matériaux haut de gamme — marbre, pierre naturelle, ardoise, bois massif, cuivre, laiton. La qualité et la durabilité sont nos priorités absolues.",
  },
  {
    q: 'Quelle est votre zone d\u2019intervention ?',
    a: "Nous intervenons partout en Belgique — Bruxelles, Anvers, Gand, Liège, Namur, Charleroi et toute la périphérie. Aucune limite géographique pour vos projets.",
  },
  {
    q: 'Combien de temps dure une rénovation ?',
    a: "Une cuisine prend 3 à 6 semaines, une rénovation complète 2 à 4 mois. Nous établissons un planning précis dès le départ et respectons nos délais.",
  },
  {
    q: 'Comment se passe le suivi de chantier ?',
    a: "Un interlocuteur dédié gère votre projet de A à Z. Vous êtes informé à chaque étape, aucune décision n'est prise sans votre accord. Zéro surprise.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-10 md:py-14 lg:py-32 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-5 lg:px-10">
        <Reveal className="text-center mb-6 lg:mb-14">
          <p className="text-[11px] tracking-[0.25em] uppercase text-brand-gold font-semibold mb-3">
            Questions Fréquentes
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-brand-ink leading-tight">
            Tout Ce Que Vous
            <br />
            <span className="italic text-brand-gold">Devez Savoir</span>
          </h2>
        </Reveal>

        <Reveal from="fade" className="bg-white rounded-3xl border border-brand-gold/10 overflow-hidden shadow-sm divide-y divide-brand-gold/10">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group px-6 py-5 hover:bg-brand-cream/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-body text-[15px] font-medium text-brand-ink hover:text-brand-gold transition-colors">
                <span>{faq.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="w-5 h-5 text-brand-gold/70 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                />
              </summary>
              <p className="mt-3 text-[14px] text-brand-ink/55 font-light leading-[1.8]">
                {faq.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}