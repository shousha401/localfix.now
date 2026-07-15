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
        background: 'radial-gradient(ellipse at center, #FAF7F2 0%, #F0EBE3 100%)',
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
            color: '#544D44',
          }}
        >
          {eyebrow}
        </span>

        <h1
          className="mt-6"
          style={{
            fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            color: '#0F2A44',
            letterSpacing: '-0.02em',
          }}
        >
          <span>{headline}</span>{' '}
          <span style={{ color: '#E5742B' }}>{headlineAccent}</span>
        </h1>

        <p
          className="mx-auto mt-6"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
            fontSize: '1.125rem',
            color: '#2A2A2A',
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
              background: '#E5742B',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          >
            {primaryCtaText}
          </Link>
          <a
            href="sms:+15593898850"
            className="w-full text-center font-medium transition-all duration-200 hover:bg-[#0F2A44] hover:text-[#FAF7F2] sm:w-auto"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              background: 'transparent',
              border: '2px solid #0F2A44',
              color: '#0F2A44',
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
