import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import Faq from '../components/Faq';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

export default function FresnoWebDesign() {
  return (
    <>
      <RouteSeo
        title="Fresno Web Designer & Website Developer | LocalFix"
        description="Fresno web designer building custom websites for small businesses — restaurants, salons, contractors, clinics, and service providers. Mobile-friendly, fast, built in 1–2 weeks. Serving Fresno, Clovis, Madera, and the Central Valley."
        canonical="https://localfix.now/fresno-web-design"
      />
      <ServiceHero
        eyebrow="FRESNO WEB DESIGN"
        headline="Custom websites for"
        headlineAccent="Fresno businesses."
        subheadline="Mobile-friendly websites built for Fresno restaurants, salons, contractors, clinics, and service providers. Flat prices. Two-week turnarounds. Serving Fresno, Clovis, Madera, Visalia, and the Central Valley."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <ProblemSection />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <Faq />
      <ContactFooterSection />
    </>
  );
}
