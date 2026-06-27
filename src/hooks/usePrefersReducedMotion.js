import { useEffect, useState } from 'react';

/**
 * usePrefersReducedMotion — respecte la préférence OS de l'utilisateur
 * (prefers-reduced-motion). Utilisé pour désactiver les animations lourdes
 * pour les utilisateurs sensibles au mouvement (WCAG 2.3.3).
 *
 * @returns {boolean} true si l'utilisateur préfère réduire les animations
 *
 * @example
 *   const reduced = usePrefersReducedMotion();
 *   <div className={reduced ? '' : 'animate-fade-in'} />
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
