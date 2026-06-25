import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { BRAND, LOGO } from '@/lib/content';
import { useMenu } from '@/lib/menu-context';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Notre Histoire', href: '#story' },
  { label: 'Avis Clients', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

function Brand({ scrolled }) {
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
        <span
          className={`font-display text-lg lg:text-xl tracking-[0.1em] font-semibold transition-colors duration-300 ${
            scrolled ? 'text-brand-ink' : 'text-white'
          }`}
        >
          {BRAND.name.toUpperCase()}
        </span>
        <span className="text-[9px] tracking-[0.2em] uppercase text-brand-gold font-medium">
          {BRAND.tagline}
        </span>
      </span>
    </a>
  );
}

/** PC : CTA consultation. Mobile/tablette : appel direct dans la navbar du haut. */
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
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const { open: mobileOpen, close: closeMenu } = useMenu();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < 60 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -64 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-12 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-brand-gold/10 shadow-sm'
            : 'bg-white/70 backdrop-blur-md border-b border-brand-gold/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10">
          <div className="flex items-center justify-between h-14 lg:h-[72px]">
            <Brand scrolled={scrolled} />

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-brand-gold/10 hover:text-brand-gold ${
                    scrolled ? 'text-brand-ink/70' : 'text-white/75'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <DesktopCTA />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Feuille de menu mobile/tablette — déclenchée depuis MobileBar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="main-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col"
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
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-2xl font-light text-brand-ink py-4 border-b border-gray-100 hover:text-brand-gold transition-colors duration-200 block"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="font-display text-2xl font-light text-brand-gold py-4 block"
              >
                Contact
              </motion.a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
