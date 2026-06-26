import { lazy, Suspense } from 'react';
import { MenuProvider } from '@/lib/menu-context';

// Above the fold — chargés immédiatement
import Navbar from '@/components/landing/Navbar';
import MobileBar from '@/components/landing/MobileBar';
import Hero from '@/components/landing/Hero';

// Below the fold — lazy loading pour booster le LCP mobile
const SocialProof = lazy(() => import('@/components/landing/SocialProof'));
const Services = lazy(() => import('@/components/landing/Services'));
const Portfolio = lazy(() => import('@/components/landing/Portfolio'));
const BeforeAfter = lazy(() => import('@/components/landing/BeforeAfter'));
const Story = lazy(() => import('@/components/landing/Story'));
const Benefits = lazy(() => import('@/components/landing/Benefits'));
const Testimonials = lazy(() => import('@/components/landing/Testimonials'));
const FAQ = lazy(() => import('@/components/landing/FAQ'));
const CTA = lazy(() => import('@/components/landing/CTA'));
const Footer = lazy(() => import('@/components/landing/Footer'));
const LegalCombined = lazy(() => import('@/components/landing/LegalCombined'));

export default function App() {
  return (
    <MenuProvider>
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
  );
}
