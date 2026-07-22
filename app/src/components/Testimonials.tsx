const GOOGLE_REVIEW_LINK = 'https://share.google/B7M1F0JFeexef85S9';

type Review = {
  name: string;
  badge?: string;
  text?: string;
};

const reviews: Review[] = [
  {
    name: 'Amira Aoude',
    text: 'I am very satisfied with my experience with LocalFix. I especially appreciate that the developer is located in Fresno making it easier to keep in touch and reach out to him when needed.',
  },
  {
    name: 'Ahmed Shousha',
    badge: 'Local Guide',
    text: 'Ask for the new AI integration, will save a lot of time, great work.',
  },
  { name: 'Kevin MacNeill', badge: 'Local Guide' },
  { name: 'Maria Hernandez', badge: 'Local Guide' },
  { name: 'Dipika Parihar' },
  { name: 'Tamara Kokotovic' },
];

const textReviews = reviews.filter((r) => r.text);
const ratingOnlyReviews = reviews.filter((r) => !r.text);

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#E5742B" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28"
      style={{ background: '#FFFFFF' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="block"
              style={{
                fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#544D44',
              }}
            >
              GOOGLE REVIEWS
            </span>
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: '#0F2A44',
                letterSpacing: '-0.01em',
                lineHeight: 1.12,
              }}
            >
              What local businesses say.
            </h2>
          </div>

          {/* Aggregate rating badge */}
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: '#FAF7F2',
              border: '1px solid #E2DDD6',
              textDecoration: 'none',
            }}
            aria-label="See all 6 Google reviews"
          >
            <GoogleLogo />
            <div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#0F2A44',
                    lineHeight: 1,
                  }}
                >
                  5.0
                </span>
                <Stars size={14} />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.8125rem',
                  color: '#6B7B8D',
                  marginTop: '2px',
                }}
              >
                6 reviews on Google
              </p>
            </div>
          </a>
        </div>

        {/* Featured reviews with text */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {textReviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-2xl p-7"
              style={{
                background: '#FAF7F2',
                border: '1px solid #E2DDD6',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: '#0F2A44',
                    }}
                  >
                    {review.name}
                  </p>
                  {review.badge && (
                    <p
                      style={{
                        fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                        fontSize: '0.75rem',
                        color: '#6B7B8D',
                        marginTop: '2px',
                      }}
                    >
                      {review.badge}
                    </p>
                  )}
                </div>
                <GoogleLogo />
              </div>
              <Stars />
              <blockquote
                className="mt-4 flex-1"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '0.9375rem',
                  color: '#2A2A2A',
                  lineHeight: 1.7,
                }}
              >
                "{review.text}"
              </blockquote>
            </article>
          ))}
        </div>

        {/* Rating-only reviews */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {ratingOnlyReviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col gap-2 rounded-xl px-4 py-4"
              style={{
                background: '#FAF7F2',
                border: '1px solid #E2DDD6',
              }}
            >
              <Stars size={13} />
              <p
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: '#0F2A44',
                  lineHeight: 1.3,
                }}
              >
                {review.name}
              </p>
              {review.badge && (
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                    fontSize: '0.75rem',
                    color: '#6B7B8D',
                  }}
                >
                  {review.badge}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Google Review CTA */}
        <div
          className="mx-auto mt-10 flex flex-col items-start gap-4 rounded-2xl px-8 py-7 sm:flex-row sm:items-center sm:justify-between"
          style={{
            background: '#FAF7F2',
            border: '1px solid #E2DDD6',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: '1.25rem',
                color: '#0F2A44',
                lineHeight: 1.2,
              }}
            >
              Worked with us? Leave a Google review.
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                fontSize: '0.9375rem',
                color: '#544D44',
              }}
            >
              It takes 30 seconds and helps other Fresno businesses find us.
            </p>
          </div>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
              background: '#E5742B',
              padding: '12px 24px',
              fontSize: '0.9375rem',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#D46620';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#E5742B';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
