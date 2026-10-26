import { Link } from 'react-router-dom';
import RouteSeo from './RouteSeo';

export default function ThankYou() {
  return (
    <>
      <RouteSeo
        title="Thank You | LocalFix"
        description="Your LocalFix request was received. I'll be in touch within 24 hours."
        canonical="https://localfix.now/thank-you"
        noindex
      />

      <section
        className="flex min-h-screen items-center justify-center px-6"
        style={{
          background: 'radial-gradient(ellipse at center, var(--lf-surface) 0%, var(--lf-surface-2) 100%)',
          paddingTop: '64px',
        }}
      >
        {/*
          ============================================================
          GOOGLE ADS CONVERSION TAG GOES HERE
          ============================================================
          When you set up Google Ads, you'll get a conversion ID and label.
          Fire the Google-provided snippet from a useEffect in this component
          (or add the gtag script tag to index.html) so it runs on page load.

          Reference: https://support.google.com/google-ads/answer/6095821
          ============================================================
        */}
        <div className="mx-auto text-center" style={{ maxWidth: '760px' }}>
          <h1
            style={{
              fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              color: 'var(--lf-ink)',
            }}
          >
            Thanks — your request was sent.
          </h1>
          <p
            className="mx-auto mt-6"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1.125rem',
              color: 'var(--lf-body)',
              maxWidth: '620px',
              lineHeight: 1.6,
            }}
          >
            I'll review your message and get back to you within 24 hours — usually same day.
            For anything urgent, text or call (559) 389-8850.
          </p>
          {/* Google review prompt — shows after form submission when satisfaction is fresh */}
          <div
            className="mx-auto mt-10 rounded-2xl px-8 py-6"
            style={{
              maxWidth: '540px',
              background: 'var(--lf-card)',
              border: '1px solid var(--lf-line)',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--lf-ink)',
              }}
            >
              Happy with the service so far?
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '0.9375rem',
                color: 'var(--lf-muted)',
                lineHeight: 1.6,
              }}
            >
              A quick Google review helps other Fresno businesses find me — and it takes about 30 seconds.
            </p>
            <a
              href="https://g.page/r/CXXJ44jnjdv3EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                background: 'var(--lf-accent)',
                padding: '10px 20px',
                fontSize: '0.9375rem',
              }}
            >
              Leave a Google Review
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="w-full text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                background: 'var(--lf-accent)',
                padding: '14px 32px',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'var(--lf-accent-hover)';
                (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(var(--lf-accent-rgb), 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'var(--lf-accent)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Back to Home →
            </Link>
            <Link
              to="/fresno-web-design"
              className="w-full text-center font-medium transition-all duration-200 hover:bg-lf-ink-btn hover:text-lf-on-ink sm:w-auto"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                background: 'transparent',
                border: '2px solid var(--lf-ink)',
                color: 'var(--lf-ink)',
                padding: '12px 30px',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
            >
              See My Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
