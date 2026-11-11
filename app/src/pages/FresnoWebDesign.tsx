import { Link } from 'react-router-dom';
import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import ServiceDetails from '../components/ServiceDetails';
import PricingBlock from '../components/PricingBlock';
import HowItWorks from '../components/HowItWorks';
import Faq from '../components/Faq';
import ServiceSchema from '../components/ServiceSchema';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';
import { fresnoWebDesign as content } from '../content/services';

const inter = "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" as const;

// seo-pass-2: the homepage owns "Fresno web design". This page covers what a
// small business website includes, links up to the homepage with that anchor
// text, and drops the Recent Work / About blocks it used to share with /.
export default function FresnoWebDesign() {
  return (
    <>
      <RouteSeo
        title="Small Business Websites in Fresno: What's Included | LocalFix"
        description="What a LocalFix website includes: custom design, domain, business email, hosting and local SEO setup. One flat price, quoted after a free review. Live in 1-2 weeks."
        canonical={content.url}
      />
      <ServiceSchema
        serviceType={content.schema.serviceType}
        name={content.schema.name}
        description={content.schema.description}
        url={content.url}
        breadcrumbName={content.schema.breadcrumbName}
      />
      <ServiceHero
        eyebrow="FRESNO WEB DESIGN"
        headline="What's included in a"
        headlineAccent="Fresno small business website."
        subheadline="Mobile-friendly websites built for Fresno restaurants, salons, contractors, clinics, and service providers. Flat prices. Two-week turnarounds. Serving Fresno, Clovis, Madera, Visalia, and the Central Valley."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text me - (559) 389-8850"
      />
      <ProblemSection {...content.problem} stat={null} />
      <ServiceDetails {...content.details} />
      <PricingBlock />
      <HowItWorks />
      <section className="relative py-14" style={{ background: 'var(--lf-surface)' }}>
        <div
          className="mx-auto px-6 text-center"
          style={{ maxWidth: '720px', fontFamily: inter, fontSize: '1.0625rem', color: 'var(--lf-body)', lineHeight: 1.7 }}
        >
          <p>
            <Link
              to="/work"
              className="font-medium transition-colors hover:text-lf-accent-hover"
              style={{ color: 'var(--lf-accent)' }}
            >
              See the websites I've built for local businesses →
            </Link>
          </p>
          <p className="mt-3">
            Need fixes, automation, or a chatbot as well? Start with{' '}
            <Link
              to="/"
              className="font-medium transition-colors hover:text-lf-accent-hover"
              style={{ color: 'var(--lf-accent)' }}
            >
              Fresno web design
            </Link>{' '}
            for everything LocalFix does.
          </p>
        </div>
      </section>
      <Faq items={content.faqs} />
      <ContactFooterSection />
    </>
  );
}
