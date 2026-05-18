import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.16, 1, 0.3, 1)' } });

    tl.to(overlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
      .to(subRef.current, { opacity: 1, duration: 0.8 }, 0.6)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .to(trustRef.current, { opacity: 1, duration: 0.8 }, 1.0);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at center, #FAF7F2 0%, #F0EBE3 100%)',
      }}
    >
      <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: '720px', paddingTop: '64px' }}>
        {/* Overline */}
        <span
          ref={overlineRef}
          className="block opacity-0"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#544D44',
            transform: 'translateY(20px)',
          }}
        >
          WEBSITES & AUTOMATION — FRESNO & REMOTE ACROSS CALIFORNIA
        </span>

        <h1
          ref={headlineRef}
          className="mt-6 opacity-0"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            color: '#0F2A44',
            letterSpacing: '-0.02em',
            transform: 'translateY(30px)',
          }}
        >
          <span style={{ color: '#0F2A44' }}>Better websites.</span>{' '}
          <span style={{ color: '#E5742B' }}>Less busywork.</span>
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6 opacity-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            color: '#2A2A2A',
            maxWidth: '600px',
            lineHeight: 1.6,
          }}
        >
          We build, fix, and automate websites for Fresno-based local businesses and small businesses across California. Flat prices, two-week turnarounds, and one person who answers the phone.
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ transform: 'translateY(15px)' }}
        >
          <a
            href="/contact#review"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                onScrollTo('contact');
              }
            }}
            className="w-full text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: '#E5742B',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#D46620';
              (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(229, 116, 43, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#E5742B';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Get a Free Website Review
          </a>
          <a
            href="sms:+15593898850"
            className="w-full text-center font-medium transition-all duration-200 hover:bg-[#0F2A44] hover:text-[#FAF7F2] sm:w-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: 'transparent',
              border: '2px solid #0F2A44',
              color: '#0F2A44',
              padding: '12px 30px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          >
            Text us — (559) 389-8850
          </a>
        </div>

        <p
          ref={trustRef}
          className="mt-8 opacity-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            color: '#544D44',
          }}
        >
          Serving Fresno, the Central Valley, and small businesses across California — remote-friendly.
        </p>
      </div>
    </section>
  );
}
