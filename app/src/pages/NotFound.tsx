import { Link } from 'react-router-dom';
import RouteSeo from './RouteSeo';

export default function NotFound() {
  return (
    <>
      <RouteSeo
        title="Page Not Found | LocalFix"
        description="The page you're looking for doesn't exist. Head back to LocalFix for Fresno web design, website fixes, workflow automation, and AI."
        canonical="https://localfix.now/404"
        noindex
      />

      <section
        className="flex min-h-screen items-center justify-center px-6"
        style={{
          background: 'radial-gradient(ellipse at center, #FAF7F2 0%, #F0EBE3 100%)',
          paddingTop: '64px',
        }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
          <span
            style={{
              fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#E5742B',
            }}
          >
            ERROR 404
          </span>
          <h1
            className="mt-5"
            style={{
              fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1.05,
              color: '#0F2A44',
              letterSpacing: '-0.02em',
            }}
          >
            This page wandered off.
          </h1>
          <p
            className="mx-auto mt-6"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1.125rem',
              color: '#2A2A2A',
              maxWidth: '560px',
              lineHeight: 1.6,
            }}
          >
            The page you're looking for doesn't exist or has moved. Try one of these instead, or
            text us at (559) 389-8850 and we'll point you the right way.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
                className="font-medium transition-colors hover:text-[#E5742B]"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.9375rem',
                  color: '#0F2A44',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                background: '#E5742B',
                padding: '14px 32px',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
