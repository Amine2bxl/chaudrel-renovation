import Navbar from '@/components/landing/Navbar';
import MobileBar from '@/components/landing/MobileBar';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import BeforeAfter from '@/components/landing/BeforeAfter';
import Story from '@/components/landing/Story';
import Benefits from '@/components/landing/Benefits';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <MobileBar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Story />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}