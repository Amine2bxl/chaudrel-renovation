import { useEffect } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';
import { BRAND } from '@/lib/content';
import { useMenu } from '@/lib/menu-context';

/**
 * MobileBar — barre d'actions rapides affichée UNIQUEMENT sur mobile et tablette.
 * Cachée sur PC (lg:hidden).
 *
 * Contient, de gauche à droite, symétriquement :
 *  - 2 boutons d'action (Appeler + Email)
 *  - 1 bouton hamburger qui ouvre le menu principal
 *
 * Verrouille le scroll du body quand le menu est ouvert.
 */
export default function MobileBar() {
  const { open, setOpen } = useMenu();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [open]);

  return (
    <div
      className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-brand-gold/15 shadow-sm"
      role="toolbar"
      aria-label="Actions rapides"
    >
      <div className="max-w-screen-sm mx-auto px-3 flex items-center justify-between gap-2 h-12">
        <a
          href={`tel:${BRAND.phones[0].tel}`}
          aria-label={`Appeler ${BRAND.phones[0].name}`}
          className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-full bg-brand-gold text-white text-[12px] font-semibold tracking-wide shadow-md shadow-brand-gold/25 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Appeler</span>
        </a>
        <a
          href={`mailto:${BRAND.email}`}
          aria-label="Envoyer un email"
          className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-full bg-brand-cream text-brand-ink text-[12px] font-semibold tracking-wide border border-brand-gold/30 active:scale-95 transition-transform"
        >
          <Mail className="w-4 h-4 text-brand-gold" aria-hidden="true" />
          <span>Email</span>
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="main-mobile-menu"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-ink text-white active:scale-95 transition-transform"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
