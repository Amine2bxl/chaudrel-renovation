import { useEffect } from 'react';

/**
 * Lock body scroll while `active` is true (mobile menu, lightbox, etc.).
 * Uses a refcount so multiple consumers compose safely.
 */
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);
}