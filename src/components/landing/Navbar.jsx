import { useEffect, useState } from 'react';
import { Phone, X, Mail } from 'lucide-react';
import { BRAND, LOGO } from '@/lib/content';
import { useMenu } from '@/lib/menu-context';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Notre Histoire', href: '#story' },
  { label: 'Avis Clients', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <div className="h-11 w-11 rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/30 flex items-center justify-center">
        <img
          src={LOGO}
          alt={`${BRAND.name} ${BRAND.tagline}`}
          className="h-full w-full object-contain"
          width="44"
          height="44"
        />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-display tracking-[0.1em] font-semibold text-brand-ink text-lg lg:text-xl">
          {BRAND.name.toUpperCase()}
        </span>
        <span className="text-[9px] tracking-[0.2em] uppercase text-brand-gold font-medium">
          {BRAND.tagline}
        </span>
      </span>
    </a>
  );
}

/** PC : CTA consultation. */
function DesktopCTA() {
  return (
    <a
      href="#contact"
      className="px-5 py-2.5 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-[#5E4F34] transition-all duration-300 shadow-lg shadow-brand-gold/20"
    >
      Consultation gratuite
    </a>
  );
}

export default function Navbar() {
  const { open: mobileOpen, close: closeMenu } = useMenu();

  return (
    <>
      {/* PC : navbar fixe, toujours visible, centrée verticalement, pas d'espace transparent au-dessus. */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] gap-3">
            {/* Gauche : Brand */}
            <div className="flex items-center justify-start">
              <Brand />
            </div>

            {/* Centre : navigation principale */}
            <nav
              className="flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 text-brand-ink/70 hover:bg-brand-gold/10 hover:text-brand-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Droite : CTA */}
            <div className="flex items-center justify-end gap-3">
              <a
                href={`tel:${BRAND.phones[1].tel}`}
                aria-label={`Appeler ${BRAND.phones[1].name}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-brand-ink text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full border border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/60 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                <span>Appeler</span>
              </a>
              <DesktopCTA />
            </div>
          </div>
        </div>
      </header>

      {/* Feuille de menu mobile/tablette — animation CSS pure (zéro framer-motion).
          Layout symétrique : header compact (logo + fermer) / grille 2 col / footer 3 boutons carrés identiques. */}
      {mobileOpen && (
        <div
          id="main-mobile-menu"
          className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col mm-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* Header compact — pas d'espace transparent au-dessus */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-9 w-9 rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/30 flex items-center justify-center flex-shrink-0">
                <img src={LOGO} alt="" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-base tracking-wide text-brand-ink font-semibold truncate">
                {BRAND.name.toUpperCase()}
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-ink text-white active:scale-95 transition-transform flex-shrink-0"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Liens : grille 2 colonnes symétrique */}
          <nav
            className="flex-1 overflow-y-auto px-4 py-6"
            aria-label="Navigation mobile"
          >
            <div className="grid grid-cols-2 gap-3">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="mm-link flex items-center justify-center text-center min-h-[64px] px-3 py-3 bg-brand-cream/40 hover:bg-brand-gold/10 border border-brand-gold/15 hover:border-brand-gold/40 rounded-2xl font-display text-base font-light text-brand-ink hover:text-brand-gold transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                style={{ animationDelay: `${NAV_LINKS.length * 40}ms` }}
                className="mm-link col-span-2 flex items-center justify-center text-center min-h-[64px] px-3 py-3 bg-brand-gold text-white hover:bg-brand-goldLight rounded-2xl font-display text-base font-medium tracking-wide transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Footer : 3 actions rapides en grille symétrique (boutons carrés identiques) */}
          <div className="px-4 pb-6 pt-4 border-t border-gray-100 flex-shrink-0">
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`tel:${BRAND.phones[1].tel}`}
                className="flex flex-col items-center justify-center gap-1.5 min-h-[72px] py-2 bg-brand-cream/40 border border-brand-gold/20 rounded-2xl hover:bg-brand-gold/10 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 text-brand-gold" aria-hidden="true" />
                <span className="text-[10px] tracking-[0.12em] uppercase font-semibold text-brand-ink">Appeler</span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex flex-col items-center justify-center gap-1.5 min-h-[72px] py-2 bg-brand-cream/40 border border-brand-gold/20 rounded-2xl hover:bg-brand-gold/10 active:scale-95 transition-all"
              >
                <Mail className="w-5 h-5 text-brand-gold" aria-hidden="true" />
                <span className="text-[10px] tracking-[0.12em] uppercase font-semibold text-brand-ink">Email</span>
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex flex-col items-center justify-center gap-1.5 min-h-[72px] py-2 bg-brand-gold text-white rounded-2xl hover:bg-brand-goldLight active:scale-95 transition-all"
              >
                <X className="w-5 h-5 hidden" aria-hidden="true" />
                <span className="w-5 h-5 flex items-center justify-center text-lg font-semibold leading-none" aria-hidden="true">→</span>
                <span className="text-[10px] tracking-[0.12em] uppercase font-semibold">Devis</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}