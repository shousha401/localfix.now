import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: 'The Refresh',
    price: '$499',
    note: 'one-time',
    description: 'Perfect for existing sites that need a facelift',
    bullets: ['Mobile-responsive update', 'Speed optimization', 'Contact form fix', 'SEO basics'],
    featured: false,
  },
  {
    name: 'The Build',
    price: '$1,499',
    note: 'one-time',
    description: 'A complete, custom-built website',
    bullets: ['Up to 5 pages', 'Custom design', 'Mobile + tablet optimized', 'Google Business setup'],
    featured: true,
  },
  {
    name: 'The Growth',
    price: '$999',
    note: 'one-time',
    description: 'Add power to your existing site',
    bullets: ['Online booking system', 'Quote request forms', 'Lead capture setup', 'Analytics dashboard'],
    featured: false,
  },
];

export default function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (headerRef.current) {
      gsap.to(headerRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (cardsRef.current) {
      gsap.to(cardsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="packages"
      style={{
        background: '#0F2A44',
        padding: 'clamp(5rem, 12vh, 9rem) 24px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <span
            className="block opacity-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#E5742B',
              transform: 'translateY(30px)',
            }}
          >
            PRICING
          </span>
          <h2
            className="mt-4 opacity-0"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              color: '#FAF7F2',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              transform: 'translateY(30px)',
            }}
          >
            Simple pricing, no surprises.
          </h2>
          <p
            className="mx-auto mt-3 max-w-md opacity-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'rgba(250, 247, 242, 0.7)',
              transform: 'translateY(30px)',
            }}
          >
            One flat fee per project. No monthly retainers, no hidden costs.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="mt-14 grid gap-6 md:grid-cols-3"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative opacity-0"
              style={{
                background: pkg.featured ? 'rgba(229, 116, 43, 0.08)' : 'rgba(250, 247, 242, 0.06)',
                border: pkg.featured ? '2px solid #E5742B' : '1px solid rgba(250, 247, 242, 0.12)',
                borderRadius: '16px',
                padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1.5rem, 3vw, 2rem)',
                transform: 'translateY(50px)',
                scrollSnapAlign: 'center',
              }}
            >
              {/* Badge */}
              {pkg.featured && (
                <span
                  className="absolute -top-3 right-6"
                  style={{
                    background: '#E5742B',
                    color: '#FAF7F2',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  color: '#FAF7F2',
                }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2">
                <span
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    color: '#FAF7F2',
                  }}
                >
                  {pkg.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: 'rgba(250, 247, 242, 0.5)',
                  }}
                >
                  {pkg.note}
                </span>
              </div>

              {/* Description */}
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: 'rgba(250, 247, 242, 0.65)',
                }}
              >
                {pkg.description}
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ borderTop: '1px solid rgba(250, 247, 242, 0.12)' }}
              />

              {/* Bullets */}
              <ul className="space-y-0">
                {pkg.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3" style={{ lineHeight: 2.2 }}>
                    <Check size={16} strokeWidth={2.5} color="#E5742B" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: 'rgba(250, 247, 242, 0.8)',
                      }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="mt-6 w-full font-medium transition-all duration-200 hover:-translate-y-px"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: pkg.featured ? '#E5742B' : 'transparent',
                  border: pkg.featured ? '2px solid #E5742B' : '2px solid rgba(250, 247, 242, 0.3)',
                  color: '#FAF7F2',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = '#E5742B';
                  (e.target as HTMLElement).style.borderColor = '#E5742B';
                }}
                onMouseLeave={(e) => {
                  if (!pkg.featured) {
                    (e.target as HTMLElement).style.background = 'transparent';
                    (e.target as HTMLElement).style.borderColor = 'rgba(250, 247, 242, 0.3)';
                  }
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
