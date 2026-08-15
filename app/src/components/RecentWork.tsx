import { Link } from 'react-router-dom';
import ProjectShowcase from './ProjectShowcase';
import { featuredProjects, totalShippedCount } from '../content/projects';

/** Featured-work section for the homepage and /about — a hand-picked subset
 *  of the portfolio. The full collection lives on /work. */
export default function RecentWork() {
  return (
    <section id="work" className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div style={{ maxWidth: '720px' }}>
          <span
            className="block"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#5F6F80',
            }}
          >
            RECENT WORK
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.35rem, 5vw, 3.25rem)',
              color: '#0F2A44',
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
              maxWidth: '760px',
            }}
          >
            Real projects. Real screens. Real business use.
          </h2>

          <p
            className="mt-5"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1.0625rem',
              color: '#2A2A2A',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            A look at websites, dashboards, AI tools, and internal systems I’ve built — not just mockups or templates.
          </p>
        </div>

        <ProjectShowcase projects={featuredProjects} />

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            to="/work"
            className="inline-flex min-h-12 items-center rounded-lg px-7 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#E5742B',
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '1rem',
            }}
          >
            See all {totalShippedCount} projects →
          </Link>

          <p
            className="text-center"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              fontSize: '0.9375rem',
              color: '#544D44',
            }}
          >
            Some work is private or under NDA, but I can show more during a call.
          </p>
        </div>
      </div>
    </section>
  );
}
