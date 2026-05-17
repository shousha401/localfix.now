import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

export default function WebsiteFixes() {
  return (
    <>
      <RouteSeo
        title="Fast Website Fixes & Refresh in Fresno | LocalFix"
        description="Broken contact forms, slow pages, mobile issues, outdated design — we fix Fresno business websites fast. Same-week turnarounds on most repairs. Flat prices starting at $499."
        canonical="https://localfix.now/website-fixes"
      />
      <ServiceHero
        eyebrow="WEBSITE FIXES — SAME-WEEK TURNAROUND"
        headline="Fast fixes for"
        headlineAccent="broken websites."
        subheadline="Slow load times, broken contact forms, mobile issues, outdated design — we fix Fresno business websites in days, not months. Flat prices starting at $499."
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
