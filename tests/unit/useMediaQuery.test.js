import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

describe('useMediaQuery', () => {
  let listeners;
  let currentMatches;

  beforeEach(() => {
    listeners = [];
    currentMatches = false;
    window.matchMedia = vi.fn((query) => {
      const mql = {
        get matches() {
          return currentMatches;
        },
        media: query,
        onchange: null,
        addEventListener: (_event, cb) => listeners.push(cb),
        removeEventListener: (_event, cb) => {
          const i = listeners.indexOf(cb);
          if (i >= 0) listeners.splice(i, 1);
        },
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => true,
      };
      return mql;
    });
  });

  it('retourne false par défaut', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });

  it('met à jour le state quand le listener change', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    act(() => {
      currentMatches = true;
      listeners.forEach((cb) => cb({ matches: true }));
    });
    expect(result.current).toBe(true);
  });

  it('abonne et désabonne correctement', () => {
    const { unmount } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(listeners.length).toBe(1);
    unmount();
    expect(listeners.length).toBe(0);
  });
});