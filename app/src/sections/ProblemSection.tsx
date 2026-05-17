import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = [overlineRef.current, headlineRef.current, bodyRef.current, statRef.current];
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        background: '#FAF7F2',
        padding: 'clamp(5rem, 12vh, 9rem) 24px',
      }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
        <span
          ref={overlineRef}
          className="block opacity-0"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#E5742B',
            transform: 'translateY(30px)',
          }}
        >
          SOUND FAMILIAR?
        </span>

        <h2
          ref={headlineRef}
          className="mt-5 opacity-0"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#0F2A44',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            transform: 'translateY(30px)',
          }}
        >
          You're working harder than you need to.
        </h2>

        <p
          ref={bodyRef}
          className="mx-auto mt-5 opacity-0"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            color: '#2A2A2A',
            lineHeight: 1.7,
            maxWidth: '600px',
            transform: 'translateY(30px)',
          }}
        >
          Most local business owners spend hours every week on repetitive tasks — answering the same questions, scheduling appointments, chasing leads, updating spreadsheets. All while big companies use AI and automation to run circles around them. It doesn't have to be that way.
        </p>

        <div
          ref={statRef}
          className="mx-auto mt-8 opacity-0"
          style={{
            background: 'rgba(15, 42, 68, 0.04)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            maxWidth: '480px',
            transform: 'translateY(30px)',
          }}
        >
          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: '1rem',
              color: '#0F2A44',
            }}
          >
            Local businesses lose 20+ hours per week to tasks that could be fully automated
          </p>
          <p
            className="mt-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#6B7B8D',
            }}
          >
            McKinsey Global Institute
          </p>
        </div>
      </div>
    </section>
  );
}
