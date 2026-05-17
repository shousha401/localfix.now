import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

export default function WorkflowAutomation() {
  return (
    <>
      <RouteSeo
        title="Workflow Automation for Fresno Small Businesses | LocalFix"
        description="Stop the manual busywork. We build custom workflow automation, booking systems, customer inquiry routing, and internal dashboards for Fresno and Central Valley businesses. Save 5–15 hours every week."
        canonical="https://localfix.now/workflow-automation"
      />
      <ServiceHero
        eyebrow="WORKFLOW AUTOMATION — FRESNO & CENTRAL VALLEY"
        headline="Automate the"
        headlineAccent="busywork."
        subheadline="Custom booking systems, customer inquiry automation, internal dashboards, and integrations built for Fresno small businesses. Save 5–15 hours a week."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <ProblemSection />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <ContactFooterSection />
    </>
  );
}
