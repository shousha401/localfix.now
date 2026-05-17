const scopeItems = [
  {
    value: '10–21 days',
    label: 'average project from first call to launch',
  },
  {
    value: '$499–$3,499',
    label: 'flat-price range, no hourly billing',
  },
  {
    value: '30 days',
    label: 'free fixes after every launch',
  },
];

export default function ScopeStrip() {
  return (
    <section className="relative py-12 md:py-16" style={{ background: '#0F2A44', color: '#FAF7F2' }}>
      <div className="mx-auto px-6 text-center" style={{ maxWidth: '1000px' }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#FAF7F2',
          }}
        >
          Every LocalFix project at a glance.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {scopeItems.map((item) => (
            <div key={item.value}>
              <p
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#E5742B',
                  lineHeight: 1.05,
                }}
              >
                {item.value}
              </p>
              <p
                className="mt-3 mx-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#FAF7F2',
                  lineHeight: 1.5,
                  maxWidth: '220px',
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
