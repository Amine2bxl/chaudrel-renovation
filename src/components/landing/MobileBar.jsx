import { Phone, Mail } from 'lucide-react';
import { BRAND } from '@/lib/content';

/**
 * MobileBar — barre d'actions rapides affichée UNIQUEMENT sur mobile et tablette.
 * Cachée sur PC via `hidden lg:flex` côté parent et `lg:hidden` ici.
 *
 *  - Téléphone (appel direct)
 *  - Email (mailto)
 *  - 2 contacts Chaudrel au choix (le premier est mis en avant)
 *
 * La barre est collée sous la Navbar pour rester visible au scroll.
 */
export default function MobileBar() {
  return (
    <div
      className="lg:hidden fixed top-16 left-0 right-0 z-40 pointer-events-none"
      aria-hidden="false"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 flex items-center justify-end gap-2 py-2 pointer-events-auto">
        <a
          href={`tel:${BRAND.phones[0].tel}`}
          aria-label={`Appeler ${BRAND.phones[0].name}`}
          className="flex items-center gap-1.5 h-9 px-3 rounded-full bg-brand-gold text-white text-[11px] font-semibold tracking-wide shadow-md shadow-brand-gold/25 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Appeler</span>
        </a>
        <a
          href={`mailto:${BRAND.email}`}
          aria-label="Envoyer un email"
          className="flex items-center gap-1.5 h-9 px-3 rounded-full bg-white text-brand-ink text-[11px] font-semibold tracking-wide border border-brand-gold/30 shadow-sm active:scale-95 transition-transform"
        >
          <Mail className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
