import { Link } from 'react-router-dom';

type Props = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
};

export default function ServiceHero({
  eyebrow,
  headline,
  headlineAccent,
  subheadline,
  primaryCtaText,
  secondaryCtaText,
}: Props) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '88vh',
        background: 'radial-gradient(ellipse at center, var(--lf-surface) 0%, var(--lf-surface-2) 100%)',
      }}
    >
      <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: '780px', paddingTop: '64px' }}>
        <span
          className="block"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--lf-muted)',
          }}
        >
          {eyebrow}
        </span>

        <h1
          className="mt-6"
          style={{
            fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            color: 'var(--lf-ink)',
            letterSpacing: '-0.02em',
          }}
        >
          <span>{headline}</span>{' '}
          <span style={{ color: 'var(--lf-accent)' }}>{headlineAccent}</span>
        </h1>

        <p
          className="mx-auto mt-6"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '1.125rem',
            color: 'var(--lf-body)',
            maxWidth: '640px',
            lineHeight: 1.65,
          }}
        >
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#review-form"
            className="w-full text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              background: 'var(--lf-accent)',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          >
            {primaryCtaText}
          </Link>
          <a
            href="sms:+15593898850"
            className="w-full text-center font-medium transition-all duration-200 hover:bg-lf-ink-btn hover:text-lf-on-ink sm:w-auto"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              background: 'transparent',
              border: '2px solid var(--lf-ink)',
              color: 'var(--lf-ink)',
              padding: '12px 30px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          >
            {secondaryCtaText}
          </a>
        </div>
      </div>
    </section>
  );
}
