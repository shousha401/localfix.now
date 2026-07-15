export default function AboutBlock() {
  return (
    <section id="about" className="relative py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1120px' }}>
        <div className="grid items-center gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <picture className="contents">
              <source srcSet="/projects/pic.webp" type="image/webp" />
              <img
                src="/projects/pic.jpeg"
                alt="Eslam Shousha, founder of LocalFix — Fresno web developer"
                width={280}
                height={350}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full max-w-[280px] rounded-2xl object-cover object-center shadow-sm"
                style={{ border: '1px solid #E2DDD6' }}
              />
            </picture>
          </div>

          <div>
            <span
              className="block"
              style={{
                fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#6B7B8D',
              }}
            >
              WHO BUILDS YOUR SITE
            </span>

            <h2
              className="mt-4"
              style={{
                fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 2.25rem)',
                color: '#0F2A44',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                maxWidth: '620px',
              }}
            >
              Built by one person who actually answers the phone.
            </h2>

            <p
              className="mt-5"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '1.125rem',
                color: '#2A2A2A',
                lineHeight: 1.75,
                maxWidth: '540px',
              }}
            >
              Hi — LocalFix is run by one developer, not an agency. I've spent the last three years building production software for a regional food-service company: internal tools, dashboards, and mobile apps used by drivers every day. LocalFix is where I bring the same engineering to local businesses — without the agency price tag. You'll work directly with me from the first message to launch. No account managers, no offshore handoffs, no "we'll get back to you next week."
            </p>

            <p
              className="mt-6 italic"
              style={{
                fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
                fontSize: '1.25rem',
                color: '#0F2A44',
              }}
            >
              — Eslam Shousha, LocalFix
            </p>

            <div
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '0.9375rem',
                color: '#6B7B8D',
              }}
            >
              <a href="sms:+15593898850" className="transition-colors hover:text-[#E5742B]">
                (559) 389-8850
              </a>
              <span aria-hidden="true">·</span>
              <a href="mailto:help@localfix.now" className="transition-colors hover:text-[#E5742B]">
                Email: help@localfix.now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
