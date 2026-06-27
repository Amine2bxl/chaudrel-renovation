/**
 * web-vitals — rapport minimal des Core Web Vitals vers la console.
 * En prod, brancher analytics (Plausible, Logfire, Vercel Analytics...).
 *
 * Métriques capturées (les plus impactantes pour SEO/UX) :
 *   - LCP  (Largest Contentful Paint)  — doit être < 2.5s
 *   - INP  (Interaction to Next Paint) — doit être < 200ms
 *   - CLS  (Cumulative Layout Shift)    — doit être < 0.1
 *   - FCP  (First Contentful Paint)    — signal d'amélioration
 *   - TTFB (Time to First Byte)        — santé du serveur
 *
 * Stratégie : on n'importe pas la lib web-vitals (lourde), on utilise
 * directement les APIs natives PerformanceObserver. ~0 KB.
 */

const METRIC_THRESHOLDS = {
  lcp: { good: 2500, poor: 4000 },
  inp: { good: 200, poor: 500 },
  cls: { good: 0.1, poor: 0.25 },
  fcp: { good: 1800, poor: 3000 },
  ttfb: { good: 800, poor: 1800 },
};

function rate(name, value) {
  const t = METRIC_THRESHOLDS[name];
  if (!t || value === undefined) return 'unknown';
  if (value <= t.good) return 'good';
  if (value <= t.poor) return 'needs-improvement';
  return 'poor';
}

function report(name, value) {
  if (value === undefined || value === null) return;
  // Log formaté, facile à grep / brancher sur analytics
  // eslint-disable-next-line no-console
  console.info(
    `[WebVitals] ${name.toUpperCase()}=${value.toFixed ? value.toFixed(2) : value} (${rate(name, value)})`
  );
}

function observeLCP() {
  if (!('PerformanceObserver' in window)) return;
  try {
    const obs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) report('lcp', last.startTime);
    });
    obs.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch { /* LCP not yet observable */ }
}

function observeCLS() {
  if (!('PerformanceObserver' in window)) return;
  try {
    let cls = 0;
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) cls += entry.value;
      }
      report('cls', cls);
    });
    obs.observe({ type: 'layout-shift', buffered: true });
  } catch { /* not yet observable */ }
}

function observeINP() {
  if (!('PerformanceObserver' in window)) return;
  try {
    const obs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) report('inp', last.duration);
    });
    obs.observe({ type: 'event', buffered: true, durationThreshold: 16 });
  } catch { /* not yet observable */ }
}

function observeFCP() {
  if (!('PerformanceObserver' in window)) return;
  try {
    const obs = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find((e) => e.name === 'first-contentful-paint');
      if (fcp) report('fcp', fcp.startTime);
    });
    obs.observe({ type: 'paint', buffered: true });
  } catch { /* not yet observable */ }
}

function reportTTFB() {
  try {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav) report('ttfb', nav.responseStart - nav.requestStart);
  } catch { /* not yet observable */ }
}

export function initWebVitals() {
  if (typeof window === 'undefined') return;
  // TTFB et FCP : mesures immédiates
  reportTTFB();
  observeFCP();
  // LCP / CLS : observers passifs
  observeLCP();
  observeCLS();
  // INP : nécessite interaction
  observeINP();
}
