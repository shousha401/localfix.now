import { useEffect, useRef, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import QuickStartForm from './sections/QuickStartForm';
import ProblemSection from './sections/ProblemSection';
import ServicesSection from './sections/ServicesSection';
import ContactFooterSection from './sections/ContactFooterSection';

const GooeyCanvas = lazy(() => import('./components/GooeyCanvas'));

export default function App() {
  const scrollSpeedRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', (e: { velocity: number }) => {
      scrollSpeedRef.current = e.velocity / window.innerHeight;
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="relative">
      <Suspense fallback={null}>
        <GooeyCanvas scrollSpeedRef={scrollSpeedRef} />
      </Suspense>

      <Navbar onScrollTo={scrollToSection} />

      <main className="relative z-10">
        <HeroSection onScrollTo={scrollToSection} />
        <QuickStartForm />
        <ProblemSection />
        <ServicesSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
