import { lazy, Suspense } from 'react';
import { MenuProvider } from '@/lib/menu-context';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import NoZoomGuard from '@/components/ui/NoZoomGuard';

// Above the fold — chargés immédiatement
import Navbar from '@/components/layout/Navbar';
import MobileBar from '@/components/layout/MobileBar';
import Hero from '@/components/sections/Hero';

// Below the fold — lazy loading pour booster le LCP mobile
const SocialProof = lazy(() => import('@/components/sections/SocialProof'));
const Services = lazy(() => import('@/components/sections/Services'));
const Portfolio = lazy(() => import('@/components/sections/Portfolio'));
const BeforeAfter = lazy(() => import('@/components/sections/BeforeAfter'));
const Story = lazy(() => import('@/components/sections/Story'));
const Benefits = lazy(() => import('@/components/sections/Benefits'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const CTA = lazy(() => import('@/components/sections/CTA'));
const Footer = lazy(() => import('@/components/layout/Footer'));
const LegalCombined = lazy(() => import('@/components/sections/LegalCombined'));

export default function App() {
  return (
    <ErrorBoundary>
      <MenuProvider>
        {/* Bloque pinch/double-tap/wheel zoom — préserve scroll vertical */}
        <NoZoomGuard />
        <div className="min-h-screen bg-brand-cream">
          <Navbar />
          <MobileBar />
          <main>
            <Hero />
            <Suspense fallback={null}>
              <SocialProof />
              <Services />
              <Portfolio />
              <BeforeAfter />
              <Story />
              <Benefits />
              <Testimonials />
              <FAQ />
              <CTA />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
            <LegalCombined />
          </Suspense>
        </div>
      </MenuProvider>
    </ErrorBoundary>
  );
}
