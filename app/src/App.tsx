import { lazy, Suspense, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FresnoWebDesign from './pages/FresnoWebDesign';
import WorkflowAutomation from './pages/WorkflowAutomation';
import AiChatbot from './pages/AiChatbot';
import WebsiteFixes from './pages/WebsiteFixes';
import About from './pages/About';

const GooeyCanvas = lazy(() => import('./components/GooeyCanvas'));

function AppShell() {
  const scrollSpeedRef = useRef(0);
  const location = useLocation();

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

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

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

      <Navbar />

      <main className="relative z-10">
        <Outlet context={{ scrollToSection }} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/fresno-web-design" element={<FresnoWebDesign />} />
        <Route path="/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/ai-chatbot" element={<AiChatbot />} />
        <Route path="/website-fixes" element={<WebsiteFixes />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
