import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Alhambra Official Guide',
    tag: 'Public Website · Bilingual',
    image: 'https://placehold.co/1200x700/0F2A44/FAF7F2?text=Alhambra+Guide+Homepage',
    description:
      'A bilingual (English / Spanish) tourism platform with a custom admin dashboard. Visitors browse attractions, plan visits, and access local information; staff manage all content from a private admin panel — no developer needed for updates.',
    tech: 'Next.js · TypeScript · Tailwind · Supabase',
    href: 'https://alhambraofficialguide.com',
    featured: true,
  },
  {
    title: 'Delivery Verification System',
    tag: 'Mobile App · Internal Tool',
    image: 'https://placehold.co/600x500/0F2A44/FAF7F2?text=Delivery+App',
    description:
      'A mobile delivery verification app used daily by 48 drivers, with a manager dashboard for routing and oversight. Offline-first design with automatic nightly sync.',
    tech: 'React Native · Node.js · PostgreSQL',
  },
  {
    title: 'Operations Dashboard',
    tag: 'Workflow Dashboard · Automation',
    image: 'https://placehold.co/600x500/0F2A44/FAF7F2?text=Operations+Dashboard',
    description:
      'An internal monitoring dashboard tracking supplies and alerts across 5 sites, with automated email notifications and SLA tracking — replacing a manual spreadsheet process.',
    tech: 'Node.js · Express · SQLite · Chart.js',
  },
];

export default function RecentWork() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div style={{ maxWidth: '720px' }}>
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
            RECENT WORK
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
            Real production software. Not just brochure sites.
          </h2>

          <p
            className="mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              color: '#2A2A2A',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            Some of what we've shipped — used every day by real businesses, drivers, and customers across the Central Valley and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md ${
                project.featured ? 'md:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ border: '1px solid #E2DDD6' }}
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot placeholder`}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                    project.featured ? 'h-64 md:h-80 lg:h-[360px]' : 'h-56 lg:h-48'
                  }`}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <span
                  className="inline-flex w-fit items-center rounded-full px-3 py-1"
                  style={{
                    background: 'rgba(229, 116, 43, 0.10)',
                    color: '#E5742B',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.tag}
                </span>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: '1.5rem',
                      color: '#0F2A44',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit Alhambra Official Guide"
                      className="mt-1 shrink-0 transition-colors hover:text-[#E5742B]"
                      style={{ color: '#0F2A44' }}
                    >
                      <ExternalLink size={20} strokeWidth={1.75} />
                    </a>
                  )}
                </div>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    color: '#2A2A2A',
                    lineHeight: 1.65,
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-auto pt-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    color: '#6B7B8D',
                    lineHeight: 1.5,
                  }}
                >
                  {project.tech}
                </p>
              </div>
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
          Most of our work is under NDA. Happy to show more on a call.
        </p>
      </div>
    </section>
  );
}
