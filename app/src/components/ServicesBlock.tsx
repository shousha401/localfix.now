import { Link } from 'react-router-dom';
import {
  fresnoWebDesign,
  websiteFixes,
  workflowAutomation,
  aiChatbot,
  appDevelopment,
} from '../content/services';

const inter = "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" as const;

/** Homepage Services block: one in-body link to each service page, with
 *  descriptive anchor text, so the homepage passes internal links down instead
 *  of relying on the nav dropdown and footer alone. Anchor text is fixed by
 *  seo-pass-2; the sentence under each comes from services.ts `summary`. */
const services = [
  { to: '/fresno-web-design', label: "Small business websites: what's included", summary: fresnoWebDesign.summary },
  { to: '/website-fixes', label: 'Website fixes', summary: websiteFixes.summary },
  { to: '/workflow-automation', label: 'Workflow automation', summary: workflowAutomation.summary },
  { to: '/ai-chatbot', label: 'AI chatbots', summary: aiChatbot.summary },
  { to: '/app-development', label: 'App development', summary: appDevelopment.summary },
];

export default function ServicesBlock() {
  return (
    <section id="services" className="relative py-20 md:py-28" style={{ background: 'var(--lf-card)' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1120px' }}>
        <h2
          style={{
            fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: 'var(--lf-ink)',
            letterSpacing: '-0.01em',
            lineHeight: 1.12,
          }}
        >
          Services
        </h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.to}
              className="rounded-2xl p-6"
              style={{ background: 'var(--lf-surface)', border: '1px solid var(--lf-line)' }}
            >
              <h3 style={{ fontFamily: inter, fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.35 }}>
                <Link
                  to={service.to}
                  className="transition-colors hover:text-lf-accent-hover"
                  style={{ color: 'var(--lf-accent)' }}
                >
                  {service.label}
                </Link>
              </h3>
              <p
                className="mt-3"
                style={{ fontFamily: inter, fontSize: '1rem', color: 'var(--lf-body)', lineHeight: 1.65 }}
              >
                {service.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
