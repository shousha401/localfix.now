import ServiceHero from '../components/ServiceHero';
import AboutBlock from '../components/AboutBlock';
import RecentWork from '../components/RecentWork';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

export default function About() {
  return (
    <>
      <RouteSeo
        title="About LocalFix — Fresno Web Developer for Small Business"
        description="LocalFix is run by one developer in Fresno, California — production-grade websites and automation for small businesses, with no agency overhead."
        canonical="https://localfix.now/about"
      />
      <ServiceHero
        eyebrow="ABOUT LOCALFIX"
        headline="Built by one developer"
        headlineAccent="in Fresno."
        subheadline="LocalFix brings production software experience to local businesses that need better websites, faster workflows, and direct communication."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <AboutBlock />
      <RecentWork />
      <ContactFooterSection />
    </>
  );
}
