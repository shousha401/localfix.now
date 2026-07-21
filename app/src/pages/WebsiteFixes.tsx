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
import { websiteFixes as content } from '../content/services';

export default function WebsiteFixes() {
  return (
    <>
      <RouteSeo
        title="Fast Website Fixes for Fresno Businesses | LocalFix"
        description="Fast website fixes for Fresno & Central Valley small businesses — broken forms, slow pages, mobile issues & outdated design. Flat pricing, quick turnaround."
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
        eyebrow="WEBSITE FIXES — FRESNO & CENTRAL VALLEY, SAME-WEEK TURNAROUND"
        headline="Fast website fixes for"
        headlineAccent="Fresno businesses."
        subheadline="Slow load times, broken contact forms, mobile issues, outdated design — we fix Fresno business websites in days, not months. Flat prices agreed before work starts."
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
