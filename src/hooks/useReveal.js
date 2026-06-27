import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll-reveal: toggles `visible` on the returned ref when it
 * intersects the viewport. Honors `prefers-reduced-motion` by revealing
 * immediately. Falls back to visible=true when IntersectionObserver is missing.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}