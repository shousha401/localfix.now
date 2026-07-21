import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import ServiceDetails from '../components/ServiceDetails';
import PricingBlock from '../components/PricingBlock';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import Faq from '../components/Faq';
import ServiceSchema from '../components/ServiceSchema';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';
import { fresnoWebDesign as content } from '../content/services';

export default function FresnoWebDesign() {
  return (
    <>
      <RouteSeo
        title="Fresno Web Designer & Website Developer | LocalFix"
        description="Fresno web designer building fast, mobile-friendly custom websites for Central Valley small businesses. One-page sites $595 flat. Built in 1–2 weeks."
        canonical={content.url}
      />
      <ServiceSchema
        serviceType={content.schema.serviceType}
        name={content.schema.name}
        description={content.schema.description}
        url={content.url}
        breadcrumbName={content.schema.breadcrumbName}
        offer={{
          price: '595',
          description:
            'Custom one-page website — includes domain, business email, hosting, and SSL setup, plus local SEO. Multi-page sites quoted flat, up front.',
        }}
      />
      <ServiceHero
        eyebrow="FRESNO WEB DESIGN"
        headline="Custom websites for"
        headlineAccent="Fresno businesses."
        subheadline="Mobile-friendly websites built for Fresno restaurants, salons, contractors, clinics, and service providers. Flat prices. Two-week turnarounds. Serving Fresno, Clovis, Madera, Visalia, and the Central Valley."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <ProblemSection {...content.problem} stat={null} />
      <ServiceDetails {...content.details} />
      <PricingBlock />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <Faq items={content.faqs} />
      <ContactFooterSection />
    </>
  );
}
