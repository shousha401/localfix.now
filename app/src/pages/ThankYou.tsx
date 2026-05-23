import { Link } from 'react-router-dom';
import RouteSeo from './RouteSeo';

export default function ThankYou() {
  return (
    <>
      <RouteSeo
        title="Thank You | LocalFix"
        description="Your LocalFix request was received. We'll be in touch within 24 hours."
        canonical="https://localfix.now/thank-you"
        noindex
      />

      <section
        className="flex min-h-screen items-center justify-center px-6"
        style={{
          background: 'radial-gradient(ellipse at center, #FAF7F2 0%, #F0EBE3 100%)',
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
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              color: '#0F2A44',
            }}
          >
            Thanks — your request was sent.
          </h1>
          <p
            className="mx-auto mt-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: '#2A2A2A',
              maxWidth: '620px',
              lineHeight: 1.6,
            }}
          >
            We'll review your message and get back to you within 24 hours — usually same day.
            For anything urgent, text or call (559) 389-8850.
          </p>
          {/* Google review prompt — shows after form submission when satisfaction is fresh */}
          <div
            className="mx-auto mt-10 rounded-2xl px-8 py-6"
            style={{
              maxWidth: '540px',
              background: '#FFFFFF',
              border: '1px solid #E2DDD6',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: '#0F2A44',
              }}
            >
              Happy with the service so far?
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                color: '#544D44',
                lineHeight: 1.6,
              }}
            >
              A quick Google review helps other Fresno businesses find us — and it takes about 30 seconds.
            </p>
            <a
              href="https://share.google/B7M1F0JFeexef85S9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: '#E5742B',
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
              Back to Home →
            </Link>
            <Link
              to="/fresno-web-design"
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
              See Our Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
