import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@/lib/pwa';
import { initWebVitals } from '@/lib/web-vitals';

// Le SSR (prerender) injecte le HTML dans #root pour les bots qui n'exécutent pas JS.
// On le vide avant l'hydration pour éviter les mismatches d'attributs
// (notamment framer-motion qui pose initial={{opacity:0}}).
const rootEl = document.getElementById('root');
if (rootEl?.hasAttribute('data-ssr')) {
  rootEl.innerHTML = '';
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Core Web Vitals (rapportés en console, prêt à brancher sur analytics)
if (typeof window !== 'undefined') {
  // Attend le chargement complet pour mesurer LCP correctement
  if (document.readyState === 'complete') {
    initWebVitals();
  } else {
    window.addEventListener('load', initWebVitals, { once: true });
  }
}
