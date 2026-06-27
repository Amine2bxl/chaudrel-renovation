import { useEffect } from 'react';

/**
 * NoZoomGuard — bloque le pinch-zoom, le double-tap zoom et le wheel-zoom
 * sur les appareils tactiles et desktop. Préserve le scroll vertical.
 *
 * Stratégie (plusieurs couches, nécessaire car aucun mécanisme n'est infaillible) :
 *   1. CSS — touch-action: manipulation (autorise pan + tap, bloque pinch/double-tap zoom)
 *   2. event.preventDefault sur les gesturestart / touchmove à 2 doigts
 *   3. event.preventDefault sur le double-tap
 *   4. event.preventDefault sur ctrl+wheel (zoom desktop)
 *   5. viewport meta déjà fixée via index.html (max-scale=1)
 *
 * Pourquoi c'est important pour l'efficacité :
 *   - Empêche l'utilisateur de "zoomer pour cliquer" accidentellement
 *   - Élimine le risque de se perdre dans une page zoomée
 *   - Garde une UX stable et rapide sur mobile
 *   - Réduit les erreurs de hit-test (CTA manqués)
 *
 * @example
 *   // Placer une seule fois au top de App
 *   <NoZoomGuard />
 */
export default function NoZoomGuard() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // --- 1. Bloque pinch (gesture event, Safari/Chrome mobile) ---
    const onGestureStart = (e) => e.preventDefault();
    const onGestureChange = (e) => e.preventDefault();
    const onGestureEnd = (e) => e.preventDefault();

    // --- 2. Bloque double-tap zoom (touches multiples rapides) ---
    let lastTouchEnd = 0;
    const onTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) e.preventDefault();
      lastTouchEnd = now;
    };

    // --- 3. Bloque pinch tactile en interceptant touchmove à 2 doigts ---
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 1) e.preventDefault();
    };

    // --- 4. Bloque ctrl+wheel / cmd+wheel zoom sur desktop ---
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
    };

    // --- 5. Bloque les touches Ctrl/Cmd +/-/= (zoom clavier) ---
    const onKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
      ) {
        e.preventDefault();
      }
    };

    // Passive:false est OBLIGATOIRE pour pouvoir preventDefault sur touchmove/wheel
    document.addEventListener('gesturestart', onGestureStart, { passive: false });
    document.addEventListener('gesturechange', onGestureChange, { passive: false });
    document.addEventListener('gestureend', onGestureEnd, { passive: false });
    document.addEventListener('touchend', onTouchEnd, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('keydown', onKeyDown, { passive: false });

    return () => {
      document.removeEventListener('gesturestart', onGestureStart);
      document.removeEventListener('gesturechange', onGestureChange);
      document.removeEventListener('gestureend', onGestureEnd);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('wheel', onWheel);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}
