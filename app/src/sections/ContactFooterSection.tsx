import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactFooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (leftRef.current) {
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (rightRef.current) {
      gsap.to(rightRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Contact form submitted:', data);
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    background: '#FAF7F2',
    border: '1px solid #E2DDD6',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '0.9375rem',
    color: '#2A2A2A',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: '#FAF7F2',
        padding: 'clamp(4rem, 8vh, 6rem) 24px 3rem',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Two-column layout */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left column */}
          <div
            ref={leftRef}
            className="opacity-0"
            style={{ transform: 'translateX(-30px)' }}
          >
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: '#0F2A44',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              Ready when you are.
            </h2>
            <p
              className="mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#6B7B8D',
                maxWidth: '400px',
                lineHeight: 1.6,
              }}
            >
              No pressure, no sales pitch. Just a quick chat about how automation and AI can save you time and grow your revenue.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <a
                href="sms:+15593898850"
                className="flex items-center gap-3 transition-colors hover:text-[#E5742B]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  color: '#0F2A44',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={20} strokeWidth={1.5} color="#E5742B" />
                Text us: (559) 389-8850
              </a>
              <a
                href="mailto:hello@localfix.now"
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  color: '#E5742B',
                  textDecoration: 'none',
                }}
              >
                <Mail size={20} strokeWidth={1.5} color="#E5742B" />
                hello@localfix.now
              </a>
              <div
                className="flex items-center gap-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  color: '#6B7B8D',
                }}
              >
                <Clock size={20} strokeWidth={1.5} color="#6B7B8D" />
                Mon–Fri, 9am–6pm PST
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div
            ref={rightRef}
            className="opacity-0"
            style={{ transform: 'translateX(30px)' }}
          >
            {submitted ? (
              <div
                className="rounded-xl p-8 text-center"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 32px rgba(15, 42, 68, 0.08)',
                }}
              >
                <svg className="mx-auto mb-4" width="56" height="56" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#E5742B" opacity="0.15" />
                  <path d="M16 24L21 29L32 18" stroke="#E5742B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#0F2A44',
                  }}
                >
                  Got it, we'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl p-8"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 32px rgba(15, 42, 68, 0.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: '#0F2A44',
                    marginBottom: '0.5rem',
                  }}
                >
                  Send us a message
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E5742B';
                    e.target.style.boxShadow = '0 0 0 3px rgba(229, 116, 43, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2DDD6';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E5742B';
                    e.target.style.boxShadow = '0 0 0 3px rgba(229, 116, 43, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2DDD6';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <textarea
                  name="message"
                  placeholder="What do you need help with?"
                  required
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E5742B';
                    e.target.style.boxShadow = '0 0 0 3px rgba(229, 116, 43, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2DDD6';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="submit"
                  className="w-full font-medium text-white transition-all duration-200 hover:-translate-y-px"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: '#0F2A44',
                    padding: '14px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = '#1A3D5C';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = '#0F2A44';
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: '#E2DDD6' }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              color: '#6B7B8D',
            }}
          >
            &copy; 2026 LocalFix. Built in Fresno.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[#E5742B]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#6B7B8D',
                textDecoration: 'none',
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[#E5742B]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#6B7B8D',
                textDecoration: 'none',
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
