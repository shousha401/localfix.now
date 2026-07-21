import { type CSSProperties, type FormEvent, useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactFooterSection() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Markup ships visible; gsap.from applies the pre-animation state at
  // runtime only, so the prerendered contact info is never hidden for
  // crawlers or no-JS visitors.
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          opacity: 0,
          x: -30,
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
        gsap.from(rightRef.current, {
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      business: formData.get('business'),
      contact: formData.get('contact'),
      need: formData.get('need'),
      message: formData.get('message'),
      honeypot: formData.get('company-website'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      if (data.ok === true) {
        navigate('/thank-you');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or text us at (559) 389-8850.');
    }
  }

  const inputStyle: CSSProperties = {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
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

  const labelStyle: CSSProperties = {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: '#0F2A44',
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
          <div ref={leftRef}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
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
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '1rem',
                color: '#544D44',
                maxWidth: '400px',
                lineHeight: 1.6,
              }}
            >
              Send a message and we’ll take a look at your website, workflow, or idea.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <a
                href="sms:+15593898850"
                className="flex items-center gap-3 transition-colors hover:text-[#E5742B]"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
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
                href="mailto:help@localfix.now"
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '1rem',
                  color: '#E5742B',
                  textDecoration: 'none',
                }}
              >
                <Mail size={20} strokeWidth={1.5} color="#E5742B" />
                help@localfix.now
              </a>
              <div
                className="flex items-center gap-3"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.875rem',
                  color: '#544D44',
                }}
              >
                <Clock size={20} strokeWidth={1.5} color="#544D44" />
                Mon–Fri, 9am–6pm PST
              </div>
              <a
                href="https://share.google/B7M1F0JFeexef85S9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.875rem',
                  color: '#0F2A44',
                  background: '#FAF7F2',
                  border: '1px solid #E2DDD6',
                  padding: '8px 14px',
                  width: 'fit-content',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="#E5742B" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Leave us a Google review
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div ref={rightRef}>
            {status === 'success' ? (
              <div
                className="rounded-xl px-8 py-12 text-center"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 32px rgba(15, 42, 68, 0.08)',
                }}
              >
                <p
                  className="mb-3 text-xl font-medium text-brand-navy"
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  }}
                >
                  Got it. We'll get back to you within 24 hours — usually same day.
                </p>
                <p
                  className="text-brand-warmgray"
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  }}
                >
                  For anything urgent, text us at (559) 389-8850.
                </p>
              </div>
            ) : (
              <form
                id="review-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl p-8"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 32px rgba(15, 42, 68, 0.08)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
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
                  name="company-website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-10000px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }}
                />
                <label style={labelStyle} htmlFor="contact-name">
                  Name *
                </label>
                <input
                  id="contact-name"
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
                <label style={labelStyle} htmlFor="contact-business">
                  Business Name (optional)
                </label>
                <input
                  id="contact-business"
                  type="text"
                  name="business"
                  placeholder="Business name"
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
                <label style={labelStyle} htmlFor="contact-info">
                  Email or Phone *
                </label>
                <input
                  id="contact-info"
                  type="text"
                  name="contact"
                  placeholder="Phone or email"
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
                <label style={labelStyle} htmlFor="contact-need">
                  What do you need help with? (optional)
                </label>
                <select
                  id="contact-need"
                  name="need"
                  defaultValue=""
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#E5742B';
                    e.target.style.boxShadow = '0 0 0 3px rgba(229, 116, 43, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2DDD6';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">
                    What do you need help with?
                  </option>
                  <option>I need a new website</option>
                  <option>I want to fix or refresh my current website</option>
                  <option>I want to automate something (booking, inquiries, etc.)</option>
                  <option>I'm not sure — just want a free review</option>
                  <option>Something else</option>
                </select>
                <label style={labelStyle} htmlFor="contact-message">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us what you need help with"
                  required
                  minLength={10}
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
                {errorMessage && (
                  <p className="mb-3 text-sm text-red-600" role="alert">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full font-medium text-white transition-all duration-200 hover:-translate-y-px"
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                    background: '#0F2A44',
                    opacity: status === 'submitting' ? 0.75 : 1,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
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
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <footer
          className="mt-16 border-t pt-8"
          style={{ borderColor: '#E2DDD6' }}
        >
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {[
              { label: 'Home', to: '/' },
              { label: 'Fresno Web Design', to: '/fresno-web-design' },
              { label: 'Workflow Automation', to: '/workflow-automation' },
              { label: 'AI Chatbot', to: '/ai-chatbot' },
              { label: 'Website Fixes', to: '/website-fixes' },
              { label: 'About', to: '/about' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-[#E5742B]"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.875rem',
                  color: '#0F2A44',
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* NAP block. Name and phone must match the Google Business Profile
              character-for-character ("LocalFix.now" / "(559)389-8850") — do
              not reformat them. */}
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '0.875rem',
              color: '#0F2A44',
            }}
          >
            <span style={{ fontWeight: 600 }}>LocalFix.now</span>
            <span aria-hidden="true">·</span>
            <a href="tel:+15593898850" className="transition-colors hover:text-[#E5742B]">
              (559)389-8850
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://maps.google.com/?cid=17860024772841425269"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#E5742B]"
            >
              Find us on Google
            </a>
          </div>
          <p
            className="mt-2 text-center"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '0.8125rem',
              color: '#544D44',
            }}
          >
            Serving Fresno, Clovis, Madera, Sanger, Selma, Visalia, Kerman &amp; Hanford, CA — the
            Central Valley.
          </p>
          <p
            className="mt-4 text-center"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '0.8125rem',
              color: '#544D44',
            }}
          >
            &copy; 2026 LocalFix. Built in Fresno, California. Serving the Central Valley &amp; small businesses across California.
          </p>
        </footer>
      </div>
    </section>
  );
}
