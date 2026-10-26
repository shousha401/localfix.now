import { Link, useParams } from 'react-router-dom';
import { Image } from '../components/ProjectShowcase';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';
import NotFound from './NotFound';
import { caseStudies, getCaseStudy } from '../content/caseStudies';

const inter = "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" as const;
const serif = "'Newsreader', Georgia, 'Times New Roman', serif" as const;

const sectionHeading = {
  fontFamily: inter,
  fontWeight: 700,
  fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
  color: 'var(--lf-ink)',
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
} as const;

const bodyText = {
  fontFamily: inter,
  fontSize: '1.0625rem',
  color: 'var(--lf-body)',
  lineHeight: 1.75,
} as const;

/** /work/:slug — one client case study. Unknown slugs render the 404 page
 *  (and are not prerendered, so Vercel serves them with a real 404). */
export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return <NotFound />;
  }

  const { project } = study;
  const url = `https://localfix.now/work/${study.slug}`;
  const [hero, ...gallery] = project.images;
  const built =
    study.built ?? (Array.isArray(project.details.built) ? project.details.built : [project.details.built]);
  const lightFrame = project.lightFrame ?? project.slug === 'alhambra-guide-platform';
  const frameBackground = lightFrame ? 'bg-lf-surface' : 'bg-lf-ink-surface';
  const moreStudies = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  // Home -> My Work -> this case study, matching the breadcrumb pattern on
  // /work and the service pages.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://localfix.now/' },
      { '@type': 'ListItem', position: 2, name: 'My Work', item: 'https://localfix.now/work' },
      { '@type': 'ListItem', position: 3, name: study.client, item: url },
    ],
  };

  const facts = [
    { label: 'Client', value: study.client },
    { label: 'Location', value: study.location },
    { label: 'Industry', value: study.industry },
    { label: 'Project', value: study.projectType },
    { label: 'Year', value: study.year },
  ];

  return (
    <>
      <RouteSeo title={study.seo.title} description={study.seo.description} canonical={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section
        className="relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, var(--lf-surface) 0%, var(--lf-surface-2) 100%)' }}
      >
        <div
          className="relative z-10 mx-auto px-6"
          style={{ maxWidth: '900px', paddingTop: 'calc(64px + 3.5rem)', paddingBottom: '3rem' }}
        >
          <nav aria-label="Breadcrumb" style={{ fontFamily: inter, fontSize: '0.875rem', color: 'var(--lf-muted)' }}>
            <Link to="/work" className="transition-colors hover:text-lf-accent">
              My Work
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{study.client}</span>
          </nav>

          <span
            className="mt-8 block"
            style={{
              fontFamily: inter,
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--lf-muted)',
            }}
          >
            CASE STUDY · {study.location}
          </span>

          <h1
            className="mt-4"
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              lineHeight: 1.06,
              color: 'var(--lf-ink)',
              letterSpacing: '-0.02em',
            }}
          >
            {study.headline}
          </h1>

          <p className="mt-6" style={{ ...bodyText, fontSize: '1.125rem', maxWidth: '720px' }}>
            {study.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                style={{
                  fontFamily: inter,
                  background: 'var(--lf-accent)',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                }}
              >
                Visit the live site
              </a>
            )}
            <Link
              to="/#review-form"
              className="w-full text-center font-medium transition-all duration-200 hover:bg-lf-ink-btn hover:text-lf-on-ink sm:w-auto"
              style={{
                fontFamily: inter,
                border: '2px solid var(--lf-ink)',
                color: 'var(--lf-ink)',
                padding: '12px 26px',
                borderRadius: '10px',
                fontSize: '1rem',
              }}
            >
              Get a Free Review
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--lf-surface)' }}>
        <div className="mx-auto px-6 pb-4" style={{ maxWidth: '1100px' }}>
          <div className={`overflow-hidden rounded-2xl p-2 ${frameBackground}`} style={{ border: '1px solid var(--lf-line)' }}>
            <div className="aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={1200}
                height={720}
                priority
                sizes="(min-width: 1100px) 1100px, 100vw"
                className={`h-full w-full ${hero.fit === 'cover' ? 'object-cover' : 'object-contain'}`}
                style={{ objectPosition: hero.position ?? 'center top' }}
              />
            </div>
          </div>

          {study.stats.length > 0 && (
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-lf-card p-6"
                  style={{ border: '1px solid var(--lf-line)' }}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span
                      className="block"
                      style={{
                        fontFamily: serif,
                        fontWeight: 700,
                        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                        color: 'var(--lf-accent)',
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="mt-2 block"
                      style={{ fontFamily: inter, fontSize: '0.9375rem', color: 'var(--lf-body-2)', lineHeight: 1.5 }}
                    >
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: 'var(--lf-surface)' }}>
        <div className="mx-auto grid gap-12 px-6 lg:grid-cols-[1fr_320px]" style={{ maxWidth: '1100px' }}>
          <div className="space-y-12">
            <div>
              <h2 style={sectionHeading}>The challenge</h2>
              <p className="mt-4" style={bodyText}>
                {study.challenge}
              </p>
            </div>

            <div>
              <h2 style={sectionHeading}>What I built</h2>
              {study.solution && (
                <p className="mt-4" style={bodyText}>
                  {study.solution}
                </p>
              )}
              <ul className="mt-4 space-y-2" style={{ ...bodyText, fontSize: '1rem' }}>
                {built.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" style={{ color: 'var(--lf-accent)' }}>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={sectionHeading}>The results</h2>
              <ul className="mt-4 space-y-2" style={{ ...bodyText, fontSize: '1rem' }}>
                {study.results.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" style={{ color: 'var(--lf-accent)' }}>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {study.next && (
                <p className="mt-6" style={{ ...bodyText, fontSize: '1rem', color: 'var(--lf-body-2)' }}>
                  {study.next}
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-lf-card p-6" style={{ border: '1px solid var(--lf-line)' }}>
              <h2 style={{ fontFamily: inter, fontWeight: 700, fontSize: '1.0625rem', color: 'var(--lf-ink)' }}>
                Project facts
              </h2>
              <dl className="mt-4 space-y-3" style={{ fontFamily: inter, fontSize: '0.9375rem' }}>
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt style={{ color: 'var(--lf-muted)', fontSize: '0.8125rem' }}>{fact.label}</dt>
                    <dd style={{ color: 'var(--lf-ink)' }}>{fact.value}</dd>
                  </div>
                ))}
                <div>
                  <dt style={{ color: 'var(--lf-muted)', fontSize: '0.8125rem' }}>Built with</dt>
                  <dd style={{ color: 'var(--lf-ink)', lineHeight: 1.55 }}>{project.techStack}</dd>
                </div>
                {project.liveUrl && (
                  <div>
                    <dt style={{ color: 'var(--lf-muted)', fontSize: '0.8125rem' }}>Live site</dt>
                    <dd>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all transition-colors hover:text-lf-accent"
                        style={{ color: 'var(--lf-accent-deep)' }}
                      >
                        {project.liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="rounded-2xl bg-lf-card p-6" style={{ border: '1px solid var(--lf-line)' }}>
              <h2 style={{ fontFamily: inter, fontWeight: 700, fontSize: '1.0625rem', color: 'var(--lf-ink)' }}>
                Related services
              </h2>
              <ul className="mt-3 space-y-2" style={{ fontFamily: inter, fontSize: '0.9375rem' }}>
                {study.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="transition-colors hover:text-lf-accent"
                      style={{ color: 'var(--lf-accent-deep)' }}
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="pb-16 md:pb-20" style={{ background: 'var(--lf-surface)' }}>
          <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
            <h2 style={sectionHeading}>Screenshots</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {gallery.map((image) => (
                <figure
                  key={image.src}
                  className={`overflow-hidden rounded-2xl p-2 ${frameBackground}`}
                  style={{ border: '1px solid var(--lf-line)' }}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      sizes="(min-width: 768px) 550px, 100vw"
                      className={`h-full w-full ${image.fit === 'cover' ? 'object-cover' : 'object-contain'}`}
                      style={{ objectPosition: image.position ?? 'center top' }}
                    />
                  </div>
                  <figcaption
                    className="px-2 pb-1 pt-3"
                    style={{ fontFamily: inter, fontSize: '0.875rem', color: 'var(--lf-on-ink-dim)', lineHeight: 1.5 }}
                  >
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
            {project.details.privacy && (
              <p className="mt-6" style={{ fontFamily: inter, fontSize: '0.8125rem', color: 'var(--lf-muted)' }}>
                {project.details.privacy}
              </p>
            )}
          </div>
        </section>
      )}

      <section className="py-16 md:py-20" style={{ background: 'var(--lf-card)' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1100px' }}>
          <h2 style={sectionHeading}>More case studies</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {moreStudies.map((item) => (
              <Link
                key={item.slug}
                to={`/work/${item.slug}`}
                className="flex flex-col rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                style={{ background: 'var(--lf-surface)', border: '1px solid var(--lf-line)' }}
              >
                <span
                  style={{
                    fontFamily: inter,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--lf-accent-deep)',
                  }}
                >
                  {item.location.toUpperCase()}
                </span>
                <span
                  className="mt-2"
                  style={{ fontFamily: inter, fontWeight: 700, fontSize: '1.125rem', color: 'var(--lf-ink)', lineHeight: 1.3 }}
                >
                  {item.client}
                </span>
                <span
                  className="mt-2"
                  style={{ fontFamily: inter, fontSize: '0.9375rem', color: 'var(--lf-body-2)', lineHeight: 1.6 }}
                >
                  {item.headline}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8" style={{ fontFamily: inter, fontSize: '0.9375rem' }}>
            <Link to="/work" className="transition-colors hover:text-lf-accent" style={{ color: 'var(--lf-accent-deep)' }}>
              See all my work →
            </Link>
          </p>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
}
