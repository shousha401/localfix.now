import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Stat = { text: string; source: string };

type Props = {
  overline?: string;
  headline?: string;
  body?: string;
  /** The highlighted stat box. Pass `null` to hide it on pages where it
   *  doesn't apply. Defaults to the automation stat shown on the home page. */
  stat?: Stat | null;
};

const DEFAULT_BODY =
  "Most local business owners spend hours every week on repetitive tasks — answering the same questions, scheduling appointments, chasing leads, updating spreadsheets. All while big companies use AI and automation to run circles around them. It doesn't have to be that way.";

const DEFAULT_STAT: Stat = {
  text: 'Local businesses lose 20+ hours per week to tasks that could be fully automated',
  source: 'McKinsey Global Institute',
};

export default function ProblemSection({
  overline = 'SOUNDS FAMILIAR?',
  headline = "You're working harder than you need to.",
  body = DEFAULT_BODY,
  stat = DEFAULT_STAT,
}: Props = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = [overlineRef.current, headlineRef.current, bodyRef.current, statRef.current].filter(
      Boolean
    );
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
      id="problems"
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
            fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#E5742B',
            transform: 'translateY(30px)',
          }}
        >
          {overline}
        </span>

        <h2
          ref={headlineRef}
          className="mt-5 opacity-0"
          style={{
            fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
            fontWeight: 600,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#0F2A44',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            transform: 'translateY(30px)',
          }}
        >
          {headline}
        </h2>

        <p
          ref={bodyRef}
          className="mx-auto mt-5 opacity-0"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '1.0625rem',
            color: '#2A2A2A',
            lineHeight: 1.7,
            maxWidth: '600px',
            transform: 'translateY(30px)',
          }}
        >
          {body}
        </p>

        {stat && (
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
                fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#0F2A44',
              }}
            >
              {stat.text}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '0.75rem',
                color: '#544D44',
              }}
            >
              {stat.source}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
