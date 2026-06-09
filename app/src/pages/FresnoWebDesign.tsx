import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import ServiceDetails from '../components/ServiceDetails';
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
        description="Fresno web designer building fast, mobile-friendly custom websites for small businesses in Fresno, Clovis, Madera & the Central Valley. Built in 1–2 weeks."
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
        headline="Custom websites for"
        headlineAccent="Fresno businesses."
        subheadline="Mobile-friendly websites built for Fresno restaurants, salons, contractors, clinics, and service providers. Flat prices. Two-week turnarounds. Serving Fresno, Clovis, Madera, Visalia, and the Central Valley."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <ProblemSection {...content.problem} stat={null} />
      <ServiceDetails {...content.details} />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <Faq items={content.faqs} />
      <ContactFooterSection />
    </>
  );
}
