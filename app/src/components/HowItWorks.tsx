const steps = [
  {
    number: '01',
    title: 'Free Website Review',
    description:
      'Send your current site or describe what you need. Within 48 hours, you get a short video walkthrough showing what’s working, what’s broken, and the highest-impact fixes.',
  },
  {
    number: '02',
    title: 'Scoped Proposal',
    description:
      'If you want to move forward, you get a one-page proposal with exactly what we’ll build, the flat price, and the delivery date. No hourly billing. No surprise charges.',
  },
  {
    number: '03',
    title: 'Build in 1–2 Weeks',
    description:
      'We build the site, set up forms, configure your domain and email, and send you a preview link. One round of revisions is included.',
  },
  {
    number: '04',
    title: 'Launch & 30-Day Support',
    description:
      'We go live, hand over your login and account details, and you get 30 days of free fixes. Optional monthly maintenance after that.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
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
            HOW IT WORKS
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
              fontWeight: 600,
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              color: '#0F2A44',
              letterSpacing: '-0.01em',
              lineHeight: 1.12,
            }}
          >
            Clear scope. Clear timeline. No surprises.
          </h2>

          <p
            className="mx-auto mt-5"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1.0625rem',
              color: '#2A2A2A',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            Every project follows the same four steps so you know what you’re getting, what it costs, and when it ships — before you pay a dollar.
          </p>
        </div>

        <div
          className="mx-auto mt-12 overflow-hidden rounded-2xl"
          style={{
            maxWidth: '980px',
            background: '#0F2A44',
            border: '1px solid rgba(250, 247, 242, 0.14)',
            boxShadow: '0 24px 70px rgba(15, 42, 68, 0.22)',
          }}
        >
          <div
            className="flex items-center justify-between gap-4 border-b px-5 py-4 md:px-6"
            style={{ borderColor: 'rgba(250, 247, 242, 0.12)' }}
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: '#E5742B' }} />
              <span className="h-3 w-3 rounded-full" style={{ background: '#F2C14E' }} />
              <span className="h-3 w-3 rounded-full" style={{ background: '#25C46B' }} />
            </div>

            <span
              style={{
                fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                fontSize: '0.75rem',
                color: 'rgba(250, 247, 242, 0.62)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              how it works
            </span>
          </div>

          <div className="p-5 md:p-8">
            <p
              style={{
                fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                fontSize: '0.875rem',
                color: '#BFE8CF',
              }}
            >
              &gt; four steps, no surprises
            </p>

            <div className="mt-6 grid gap-0 overflow-hidden rounded-xl border md:grid-cols-2" style={{ borderColor: 'rgba(250, 247, 242, 0.12)' }}>
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className="p-5 md:p-6"
                  style={{
                    borderRight: index % 2 === 0 ? '1px solid rgba(250, 247, 242, 0.12)' : undefined,
                    borderBottom: index < 2 ? '1px solid rgba(250, 247, 242, 0.12)' : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                      fontSize: '0.8125rem',
                      color: '#E5742B',
                      letterSpacing: '0.04em',
                    }}
                  >
                    STEP {step.number}
                  </span>

                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
                      fontWeight: 600,
                      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                      color: '#FAF7F2',
                      letterSpacing: '-0.005em',
                      lineHeight: 1.18,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                      fontSize: '0.95rem',
                      color: 'rgba(250, 247, 242, 0.78)',
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div
              className="mt-6 flex flex-col gap-3 rounded-xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              style={{
                background: 'rgba(250, 247, 242, 0.06)',
                border: '1px solid rgba(250, 247, 242, 0.10)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                  fontSize: '0.875rem',
                  color: '#FAF7F2',
                }}
              >
                Total: 10–21 days
              </p>

              <p
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.9375rem',
                  color: '#BFE8CF',
                  fontWeight: 500,
                }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#25C46B' }} />
                ready when you are
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
