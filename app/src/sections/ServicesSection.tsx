import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Workflow, Brain, Monitor, MapPin, CalendarCheck, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect your apps and automate repetitive tasks — invoicing, follow-ups, data entry. Reclaim 10+ hours every week.',
  },
  {
    icon: Brain,
    title: 'AI for Your Business',
    description: 'Smart chatbots, AI email replies, automated scheduling, and intelligent lead qualification that works 24/7.',
  },
  {
    icon: Monitor,
    title: 'New Websites',
    description: 'Clean, conversion-focused websites built from scratch — with automation and AI integrations baked right in.',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Booking & Forms',
    description: 'Online booking, instant quote requests, and lead capture that feeds directly into your workflow — no manual data entry.',
  },
  {
    icon: MapPin,
    title: 'Google Business',
    description: 'Optimize your Google Business Profile and automate review responses so locals find you and keep coming back.',
  },
  {
    icon: Search,
    title: 'Local SEO',
    description: 'Get found by people searching for your services in Fresno and the Central Valley — more calls, more customers.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Header animation
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

    // Grid cards animation
    if (gridRef.current) {
      gsap.to(gridRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(5rem, 12vh, 9rem) 24px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div ref={headerRef}>
          <span
            className="block opacity-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#E5742B',
              transform: 'translateY(20px)',
            }}
          >
            WHAT WE DO
          </span>
          <h2
            className="mt-4 opacity-0"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#0F2A44',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              maxWidth: '580px',
              transform: 'translateY(20px)',
            }}
          >
            Websites, automation, and AI — built for local businesses.
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group cursor-default opacity-0 transition-all duration-300 ease-out hover:-translate-y-1"
              style={{
                background: '#FAF7F2',
                border: '1px solid #E2DDD6',
                borderRadius: '12px',
                padding: '2rem',
                transform: 'translateY(40px)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = '#E5742B';
                el.style.boxShadow = '0 8px 24px rgba(15, 42, 68, 0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = '#E2DDD6';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center"
                style={{
                  background: '#0F2A44',
                  borderRadius: '10px',
                }}
              >
                <service.icon size={24} strokeWidth={1.5} color="#FAF7F2" />
              </div>

              {/* Title */}
              <h3
                className="mt-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: '#0F2A44',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#6B7B8D',
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
