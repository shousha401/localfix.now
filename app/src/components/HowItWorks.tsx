const steps = [
  {
    number: '1',
    title: 'Free Website Review',
    description:
      "Send us your current site or describe what you need. Within 48 hours, you get a short video walkthrough — what's working, what's broken, and the highest-impact fixes. No pitch.",
  },
  {
    number: '2',
    title: 'Scoped Proposal',
    description:
      "If you want to move forward, we send a one-page proposal: exactly what we'll build, the flat price, and the delivery date. No hourly billing, no surprise charges.",
  },
  {
    number: '3',
    title: 'Build in 1–2 Weeks',
    description:
      'We build the site, set up forms, configure your domain and email, and send you a preview link. You get one round of revisions included.',
  },
  {
    number: '4',
    title: 'Launch & 30-Day Support',
    description:
      'We push the site live, hand over every login and account, and stay on call for 30 days of free fixes. Optional monthly maintenance after that.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '720px' }}>
          <span
            className="block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#6B7B8D',
            }}
          >
            HOW IT WORKS
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "'Fraunces', serif",
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
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              color: '#2A2A2A',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            Every project follows the same four steps so you know exactly what you're getting, what it costs, and when it ships — before you pay a dollar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="transition-all duration-300 ease-out hover:-translate-y-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2DDD6',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 24px rgba(15, 42, 68, 0.04)',
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center text-white"
                style={{
                  background: '#E5742B',
                  borderRadius: '999px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                {step.number}
              </div>

              <h3
                className="mt-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: '#0F2A44',
                }}
              >
                {step.title}
              </h3>

              <p
                className="mt-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#6B7B8D',
                  lineHeight: 1.6,
                }}
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#6B7B8D',
          }}
        >
          Typical project total: 10–21 days from first call to launch.
        </p>

        <div className="mt-4 text-center">
          <a
            href="/services"
            className="text-brand-orange font-medium hover:underline inline-flex items-center gap-1"
            style={{ color: '#E5742B' }}
          >
            See all services and packages
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
