type IncludedItem = {
  title: string;
  description: string;
};

export type ServiceDetailsContent = {
  eyebrow: string;
  h2: string;
  intro: string[];
  whatsIncludedTitle: string;
  whatsIncluded: IncludedItem[];
  whoItsForTitle: string;
  whoItsFor: string;
};

/**
 * Unique, per-service body content (value intro + "what's included" + "who
 * it's for"). This is the section that makes each service page substantively
 * different from the others, so it's fully prop-driven — no shared copy.
 */
export default function ServiceDetails({
  eyebrow,
  h2,
  intro,
  whatsIncludedTitle,
  whatsIncluded,
  whoItsForTitle,
  whoItsFor,
}: ServiceDetailsContent) {
  return (
    <section id="details" className="relative py-20 md:py-28" style={{ background: 'var(--lf-card)' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1120px' }}>
        <div style={{ maxWidth: '720px' }}>
          <span
            className="block"
            style={{
              fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--lf-muted)',
            }}
          >
            {eyebrow}
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--lf-ink)',
              letterSpacing: '-0.01em',
              lineHeight: 1.12,
            }}
          >
            {h2}
          </h2>

          {intro.map((paragraph, index) => (
            <p
              key={index}
              className="mt-5"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '1.0625rem',
                color: 'var(--lf-body)',
                lineHeight: 1.75,
                maxWidth: '660px',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <h3
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--lf-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            {whatsIncludedTitle}
          </h3>

          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: 'var(--lf-line)' }}>
            {whatsIncluded.map((item) => (
              <div key={item.title} className="p-6" style={{ background: 'var(--lf-surface)' }}>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ stroke: 'var(--lf-accent)' }}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: '1.0625rem',
                        color: 'var(--lf-ink)',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                        fontSize: '0.9375rem',
                        color: 'var(--lf-body-2)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-10 rounded-2xl p-6 md:p-8"
          style={{ background: 'rgba(var(--lf-tint-rgb), 0.04)', border: '1px solid var(--lf-line)', maxWidth: '760px' }}
        >
          <h3
            style={{
              fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--lf-muted)',
            }}
          >
            {whoItsForTitle}
          </h3>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1.0625rem',
              color: 'var(--lf-body)',
              lineHeight: 1.7,
            }}
          >
            {whoItsFor}
          </p>
        </div>
      </div>
    </section>
  );
}
