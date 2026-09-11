import ProjectShowcase from '../components/ProjectShowcase';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';
import { orderedProjects, shippedTools, totalShippedCount } from '../content/projects';

const inter = "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" as const;

// Page-level structured data: a Home -> Work breadcrumb, matching the
// pattern About and the service pages use.
const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://localfix.now/' },
    { '@type': 'ListItem', position: 2, name: 'My Work', item: 'https://localfix.now/work' },
  ],
};

const stats = [
  { value: `${totalShippedCount}`, label: 'systems shipped' },
  { value: `${orderedProjects.filter((project) => project.liveUrl).length}`, label: 'live public websites' },
  { value: 'EN · ES', label: 'bilingual builds' },
  { value: 'Web · Mobile · AI', label: 'in production' },
];

export default function Work() {
  return (
    <>
      <RouteSeo
        title="My Work — Web Design & Software Portfolio | LocalFix"
        description="Browse the LocalFix portfolio — business websites, e-commerce stores, internal dashboards, mobile apps & AI tools built in Fresno, with real screenshots from production."
        canonical="https://localfix.now/work"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      {/* Compact hero — unlike the service pages, the work should be visible
          within the first scroll, so no full-viewport intro here. */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, #FAF7F2 0%, #F0EBE3 100%)' }}
      >
        <div
          className="relative z-10 mx-auto px-6 text-center"
          style={{ maxWidth: '780px', paddingTop: 'calc(64px + 4.5rem)', paddingBottom: '3.5rem' }}
        >
          <span
            className="block"
            style={{
              fontFamily: inter,
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#544D44',
            }}
          >
            MY WORK
          </span>

          <h1
            className="mt-6"
            style={{
              fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
              lineHeight: 1.05,
              color: '#0F2A44',
              letterSpacing: '-0.02em',
            }}
          >
            <span>Every project here runs</span>{' '}
            <span style={{ color: '#E5742B' }}>a real business.</span>
          </h1>

          <p
            className="mx-auto mt-6"
            style={{
              fontFamily: inter,
              fontSize: '1.125rem',
              color: '#2A2A2A',
              maxWidth: '640px',
              lineHeight: 1.65,
            }}
          >
            Websites, online stores, internal dashboards, mobile apps, and AI tools — captured
            straight from production, not from mockups.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {stats.map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-baseline gap-2 rounded-full bg-white px-4 py-2"
                style={{ border: '1px solid #E2DDD6' }}
              >
                <span
                  style={{
                    fontFamily: inter,
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: '#0F2A44',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: inter,
                    fontSize: '0.8125rem',
                    color: '#5F6F80',
                  }}
                >
                  {stat.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full portfolio grid */}
      <section className="relative pb-20 pt-4 md:pb-24" style={{ background: '#FAF7F2' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <ProjectShowcase projects={orderedProjects} />
        </div>
      </section>

      {/* Shipped tools without company-safe screenshots */}
      <section className="relative py-20 md:py-24" style={{ background: '#FFFFFF' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div style={{ maxWidth: '720px' }}>
            <span
              className="block"
              style={{
                fontFamily: inter,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#5F6F80',
              }}
            >
              ALSO IN PRODUCTION
            </span>

            <h2
              className="mt-4"
              style={{
                fontFamily: inter,
                fontWeight: 700,
                fontSize: 'clamp(1.85rem, 4vw, 2.5rem)',
                color: '#0F2A44',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
              }}
            >
              More systems I’ve shipped
            </h2>

            <p
              className="mt-4"
              style={{
                fontFamily: inter,
                fontSize: '1.0625rem',
                color: '#2A2A2A',
                lineHeight: 1.7,
                maxWidth: '640px',
              }}
            >
              Tools running inside businesses today that I can’t screenshot without exposing
              company data — happy to walk through any of them on a call.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {shippedTools.map((tool) => (
              <article
                key={tool.title}
                className="flex flex-col rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md md:p-7"
                style={{ background: '#FAF7F2', border: '1px solid #E2DDD6' }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3
                    style={{
                      fontFamily: inter,
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#0F2A44',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                    }}
                  >
                    {tool.title}
                  </h3>
                  {tool.status && (
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1"
                      style={{
                        background: 'rgba(229, 116, 43, 0.10)',
                        color: '#C76024',
                        fontFamily: inter,
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        boxShadow: 'inset 0 0 0 1px rgba(229, 116, 43, 0.14)',
                      }}
                    >
                      {tool.status}
                    </span>
                  )}
                </div>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: inter,
                    fontSize: '0.9375rem',
                    color: '#425061',
                    lineHeight: 1.7,
                  }}
                >
                  {tool.blurb}
                </p>

                <p
                  className="mt-auto pt-5"
                  style={{
                    fontFamily: inter,
                    fontSize: '0.875rem',
                    color: '#5F6F80',
                    lineHeight: 1.6,
                  }}
                >
                  {tool.techStack}
                </p>
              </article>
            ))}
          </div>

          <p
            className="mt-10 text-center"
            style={{
              fontFamily: inter,
              fontSize: '0.9375rem',
              color: '#544D44',
            }}
          >
            Some work is private or under NDA, but I can show more during a call.
          </p>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
}
