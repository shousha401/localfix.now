export type FaqItem = {
  question: string;
  answer: string;
};

// Single source of truth: the visible accordion and the FAQPage JSON-LD are
// both generated from the same array, so the structured data always matches
// the on-page content (a Google requirement for FAQ markup). Service pages
// pass their own `items` so each page's FAQ is unique to that service.
const defaultFaqs: FaqItem[] = [
  {
    question: 'How fast can you build a new website?',
    answer:
      'Most new websites launch in 10-14 days from the kickoff call. Refresh projects ship in 7-10 days. Same-week turnaround on small fixes.',
  },
  {
    question: 'Do you serve businesses outside Fresno?',
    answer:
      'Yes. LocalFix serves businesses across the entire Central Valley including Clovis, Madera, Sanger, Selma, Visalia, Kerman, and Hanford. We also work with clients anywhere in California.',
  },
  {
    question: 'What is workflow automation and do I need it?',
    answer:
      'Workflow automation replaces manual tasks like answering common questions, booking appointments, routing customer inquiries, and tracking orders. If your team spends multiple hours each week on repetitive tasks, automation can save 5-15 hours a week.',
  },
  {
    question: 'Can you build an AI chatbot for my business?',
    answer:
      'Yes. We build custom AI chatbots trained on your specific business — not generic ChatGPT wrappers. They handle FAQs, capture leads, and route customers to the right place 24/7.',
  },
];

type Props = {
  /** Service pages pass their own questions; defaults to the shared set. */
  items?: FaqItem[];
  heading?: string;
};

export default function Faq({ items = defaultFaqs, heading = 'Frequently asked questions' }: Props = {}) {
  const faqs = items;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto px-6" style={{ maxWidth: '780px' }}>
        <div className="text-center">
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
            FAQ
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
            {heading}
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl"
              style={{ background: '#FFFFFF', border: '1px solid #E2DDD6' }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: '#0F2A44',
                }}
              >
                {faq.question}
                <svg
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E5742B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p
                className="px-6 pb-5"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                  fontSize: '1rem',
                  color: '#425061',
                  lineHeight: 1.7,
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
