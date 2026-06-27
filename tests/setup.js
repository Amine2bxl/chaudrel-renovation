import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement window.matchMedia by default.
// Tests that exercise responsive hooks (e.g. useMediaQuery) need it.
if (typeof window !== 'undefined' && !window.matchMedia) {
  const listeners = new WeakMap();
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => {
      const mql = {
        matches: false,
        media: query,
        onchange: null,
        addEventListener: (_event, cb) => {
          const set = listeners.get(mql) ?? new Set();
          set.add(cb);
          listeners.set(mql, set);
        },
        removeEventListener: (_event, cb) => {
          listeners.get(mql)?.delete(cb);
        },
        dispatchEvent: () => true,
      };
      return mql;
    },
  });
}

// Mock IntersectionObserver (utilisé par useReveal)
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver = IntersectionObserverMock;

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverMock;

// Stub scrollTo pour jsdom
window.scrollTo = () => {};

// Cleanup auto entre tests
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
afterEach(() => cleanup());
