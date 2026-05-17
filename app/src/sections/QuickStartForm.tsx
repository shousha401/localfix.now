import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function QuickStartForm() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    <div className="relative z-10 mx-auto px-6" style={{ maxWidth: '600px', marginTop: '-60px' }}>
      <div
        ref={cardRef}
        className="opacity-0"
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 4px 32px rgba(15, 42, 68, 0.08)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          transform: 'translateY(40px)',
        }}
      >
        <h3
          className="text-center"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: '1.5rem',
            color: '#0F2A44',
          }}
        >
          Get started in 30 seconds
        </h3>
        <p
          className="mt-2 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#544D44',
          }}
        >
          Tell us about your business and we'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-lg p-6 text-center" style={{ background: '#FAF7F2' }}>
            <svg className="mx-auto mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#E5742B" opacity="0.15" />
              <path d="M16 24L21 29L32 18" stroke="#E5742B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: '1.125rem',
                color: '#0F2A44',
              }}
            >
              Got it, we'll reply within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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
              type="text"
              name="businessName"
              placeholder="Business name"
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
              type="tel"
              name="phone"
              placeholder="Phone number"
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
            <select
              name="service"
              required
              defaultValue=""
              style={{
                ...inputStyle,
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7B8D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '40px',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#E5742B';
                e.target.style.boxShadow = '0 0 0 3px rgba(229, 116, 43, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E2DDD6';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option value="" disabled>
                What do you need?
              </option>
              <option value="Workflow Automation">Workflow Automation</option>
              <option value="AI Integration">AI Integration</option>
              <option value="New Website">New Website</option>
              <option value="Smart Booking/Forms">Smart Booking & Forms</option>
              <option value="Google Business">Google Business</option>
              <option value="Local SEO">Local SEO</option>
              <option value="Something Else">Something Else</option>
            </select>
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
  );
}
