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
import { workflowAutomation as content } from '../content/services';

export default function WorkflowAutomation() {
  return (
    <>
      <RouteSeo
        title="Workflow Automation for Fresno Small Business | LocalFix"
        description="Custom workflow automation for Fresno & Central Valley small businesses — booking, inquiry routing, dashboards & integrations. Save 5–15 hours a week."
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
        eyebrow="WORKFLOW AUTOMATION — FRESNO & CENTRAL VALLEY"
        headline="Automate the"
        headlineAccent="busywork."
        subheadline="Custom booking systems, customer inquiry automation, internal dashboards, and integrations built for Fresno small businesses. Save 5–15 hours a week."
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
