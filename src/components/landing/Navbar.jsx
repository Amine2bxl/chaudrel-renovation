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

function Brand({ compact = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 group min-w-0">
      <div
        className={`${
          compact ? 'h-9 w-9' : 'h-11 w-11'
        } rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/40 flex items-center justify-center flex-shrink-0`}
      >
        <img
          src={LOGO}
          alt={`${BRAND.name} ${BRAND.tagline}`}
          className="h-full w-full object-contain"
          width="44"
          height="44"
        />
      </div>
      <span className="flex flex-col leading-none min-w-0">
        <span className="font-display tracking-[0.1em] font-semibold text-brand-ink text-lg lg:text-xl truncate">
          {BRAND.name.toUpperCase()}
        </span>
        <span className="text-[9px] tracking-[0.2em] uppercase text-brand-gold font-medium mt-0.5 truncate">
          {BRAND.tagline}
        </span>
      </span>
    </a>
  );
}

/** PC : CTA consultation (pastille premium). */
function DesktopCTA() {
  return (
    <a
      href="#contact"
      className="px-5 py-2.5 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-brand-goldLight transition-all duration-300 shadow-lg shadow-brand-gold/25 hover:shadow-brand-gold/40 whitespace-nowrap"
    >
      Consultation gratuite
    </a>
  );
}

/** Bouton téléphone outline (équilibre visuel avec le CTA rempli). */
function DesktopPhone() {
  return (
    <a
      href={`tel:${BRAND.phones[1].tel}`}
      aria-label={`Appeler ${BRAND.phones[1].name}`}
      className="flex items-center gap-2 px-4 py-2.5 bg-white text-brand-ink text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full border border-brand-gold/40 hover:bg-brand-gold/10 hover:border-brand-gold/70 transition-all duration-300 whitespace-nowrap"
    >
      <Phone className="w-4 h-4 text-brand-gold" aria-hidden="true" />
      <span>Appeler</span>
    </a>
  );
}

export default function Navbar() {
  const { open: mobileOpen, close: closeMenu } = useMenu();

  return (
    <>
      {/* === PC (lg+) : grille 3 colonnes VRAIMENT symétrique ===
          col 1 : Brand (largeur naturelle)
          col 2 : nav centrée mathématiquement (justify-self: center)
          col 3 : Phone + CTA (justify-self: end)
          → la nav est centrée sur l'axe du viewport, pas décalée par la largeur du Brand/CTA. */}
      <header
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-gold/20 shadow-[0_2px_24px_-12px_rgba(140,118,78,0.25)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] gap-6">
            {/* Col 1 — Brand à gauche */}
            <div className="flex items-center justify-start min-w-0">
              <Brand />
            </div>

            {/* Col 2 — Nav centrée mathématiquement */}
            <nav
              className="flex items-center gap-1 justify-self-center"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 text-brand-ink/70 hover:text-brand-gold after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 after:h-px after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-6"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Col 3 — Phone + CTA à droite */}
            <div className="flex items-center justify-end gap-3 justify-self-end">
              <DesktopPhone />
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
          <div className="flex items-center justify-between px-4 h-14 border-b border-brand-gold/20 bg-gradient-to-r from-brand-cream/40 via-white to-white flex-shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-9 w-9 rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/40 flex items-center justify-center flex-shrink-0">
                <img src={LOGO} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col leading-none min-w-0">
                <span className="font-display text-[15px] tracking-[0.1em] font-semibold text-brand-ink truncate">
                  {BRAND.name.toUpperCase()}
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-brand-gold font-medium mt-0.5 truncate">
                  {BRAND.tagline}
                </span>
              </div>
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