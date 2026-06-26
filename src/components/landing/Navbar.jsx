import { useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';
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
    <a href="#top" className="flex items-center gap-2.5 group">
      <div
        className={`rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/30 flex items-center justify-center transition-all duration-300 ${
          compact ? 'h-9 w-9' : 'h-11 w-11'
        }`}
      >
        <img
          src={LOGO}
          alt={`${BRAND.name} ${BRAND.tagline}`}
          className="h-full w-full object-contain"
          width="44"
          height="44"
        />
      </div>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display tracking-[0.1em] font-semibold text-brand-ink transition-all duration-300 ${
            compact ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
          }`}
        >
          {BRAND.name.toUpperCase()}
        </span>
        <span
          className={`text-[9px] tracking-[0.2em] uppercase text-brand-gold font-medium transition-all duration-200 overflow-hidden ${
            compact ? 'max-h-0 opacity-0' : 'max-h-4 opacity-100'
          }`}
        >
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
      className="ml-1 px-5 py-2.5 bg-brand-gold text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full hover:bg-[#5E4F34] transition-all duration-300 shadow-lg shadow-brand-gold/20"
    >
      Consultation gratuite
    </a>
  );
}

export default function Navbar() {
  const { open: mobileOpen, close: closeMenu } = useMenu();
  // PC only : la navbar se replie (shrink) quand on scrolle vers le bas.
  // N'a aucun effet sur la vue mobile/tablette.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-gold/15 transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14' : 'h-14 lg:h-[72px]'
            }`}
          >
            <Brand compact={scrolled} />

            <nav
              className="hidden lg:flex items-center gap-1"
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

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BRAND.phones[1].tel}`}
                aria-label={`Appeler ${BRAND.phones[1].name}`}
                className="ml-1 flex items-center gap-2 px-4 py-2.5 bg-white text-brand-ink text-[12px] tracking-[0.12em] uppercase font-semibold rounded-full border border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/60 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                <span>Appeler</span>
              </a>
              <DesktopCTA />
            </div>
          </div>
        </div>
      </header>

      {/* Feuille de menu mobile/tablette — animation CSS pure (zéro framer-motion) */}
      {mobileOpen && (
        <div
          id="main-mobile-menu"
          className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col mm-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-white p-0.5 ring-1 ring-brand-gold/30 flex items-center justify-center">
                <img src={LOGO} alt="" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-lg tracking-wide text-brand-ink font-semibold">
                {BRAND.name.toUpperCase()}
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-ink text-white active:scale-95 transition-transform"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex-1 overflow-y-auto px-6 py-6"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ animationDelay: `${i * 40}ms` }}
                className="mm-link font-display text-2xl font-light text-brand-ink py-4 border-b border-gray-100 hover:text-brand-gold transition-colors duration-200 block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              style={{ animationDelay: `${NAV_LINKS.length * 40}ms` }}
              className="mm-link font-display text-2xl font-light text-brand-gold py-4 block"
            >
              Contact
            </a>
          </nav>

          <div className="px-6 pb-8 pt-4 border-t border-gray-100 space-y-2">
            <a
              href={`tel:${BRAND.phones[0].tel}`}
              className="block text-sm text-brand-ink/60"
            >
              {BRAND.phones[0].name} — {BRAND.phones[0].number}
            </a>
            <a
              href={`tel:${BRAND.phones[1].tel}`}
              className="block text-sm text-brand-ink/60"
            >
              {BRAND.phones[1].name} — {BRAND.phones[1].number}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="block text-sm text-brand-ink/60"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}