import { Link } from 'react-router-dom';

/**
 * The $595 flat-price package. Rendered on the homepage and
 * /fresno-web-design so the price exists in visible, prerendered copy —
 * the page-level Offer schema (ServiceSchema) mirrors this on-page content.
 *
 * Wording is owner-approved: flat price, no duration or renewal terms for
 * hosting/domain/email anywhere.
 */
export default function PricingBlock() {
  return (
    <section id="pricing" className="relative py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="mx-auto px-6 text-center" style={{ maxWidth: '720px' }}>
        <span
          className="block"
          style={{
            fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#544D44',
          }}
        >
          SIMPLE PRICING
        </span>

        <h2
          className="mt-4"
          style={{
            fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#0F2A44',
            letterSpacing: '-0.01em',
            lineHeight: 1.12,
          }}
        >
          <span style={{ color: '#E5742B' }}>$595 flat.</span> Custom one-page website.
        </h2>

        <p
          className="mx-auto mt-5"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '1.0625rem',
            color: '#2A2A2A',
            lineHeight: 1.7,
            maxWidth: '600px',
          }}
        >
          Includes domain, business email, hosting, and SSL setup, plus local SEO. No hourly
          billing, no surprises. Multi-page sites quoted flat, up front.
        </p>
        {/* TODO(owner): renewal/term wording for hosting/domain/email goes here
            (or stays in the proposal) — supply final language before adding any
            duration claims. */}

        <div className="mt-8">
          <Link
            to="/#review-form"
            className="inline-flex items-center text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              background: '#E5742B',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          >
            Get a Free Website Review
          </Link>
        </div>
      </div>
    </section>
  );
}
