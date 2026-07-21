import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { hasSpaNavigated } from '../lib/navigation-state';

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

  // The markup ships visible (no opacity-0 / transform initial states) so the
  // prerendered HTML is never hidden for crawlers, no-JS visitors, or LCP.
  // gsap.from() applies the pre-animation state at runtime only, and
  // useLayoutEffect runs before paint so users never see a flash of the
  // resting state first.
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // On a slow initial load the prerendered hero has been visible for a
    // while by the time this runs — replaying the entrance would yank
    // readable content away and push LCP back to the animation's end.
    // Only play it when JS was ready near first paint (fast loads) or on
    // SPA navigations (where mount and paint happen together).
    if (!hasSpaNavigated() && performance.now() > 1500) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.16, 1, 0.3, 1)' } });
      tl.from(overlineRef.current, { opacity: 0, y: 20, duration: 0.8 }, 0.2)
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.8 }, 0.4)
        .from(subRef.current, { opacity: 0, duration: 0.8 }, 0.6)
        .from(ctaRef.current, { opacity: 0, y: 15, duration: 0.8 }, 0.8)
        .from(trustRef.current, { opacity: 0, duration: 0.8 }, 1.0);
    }, sectionRef);

    return () => ctx.revert();
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
          className="block"
          style={{
            fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#544D44',
          }}
        >
          WEBSITES & AUTOMATION — FRESNO & REMOTE ACROSS CALIFORNIA
        </span>

        <h1
          ref={headlineRef}
          className="mt-6"
          style={{
            fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            color: '#0F2A44',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#0F2A44' }}>Better websites for Fresno businesses.</span>{' '}
          <span style={{ color: '#E5742B' }}>Less busywork.</span>
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '1.125rem',
            color: '#2A2A2A',
            maxWidth: '600px',
            lineHeight: 1.6,
          }}
        >
          We're a Fresno web designer and automation shop — we build, fix, and automate websites for local businesses across California. Flat prices, two-week turnarounds, and one person who answers the phone.
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                onScrollTo('contact');
              }
            }}
            className="w-full text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
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
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
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
          className="mt-8"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
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
