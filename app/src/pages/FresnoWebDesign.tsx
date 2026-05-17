import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

export default function FresnoWebDesign() {
  return (
    <>
      <RouteSeo
        title="Fresno Web Design & Website Developer | LocalFix"
        description="Custom websites for Fresno small businesses — restaurants, salons, contractors, clinics, and service providers. Mobile-friendly, fast, and built in 1–2 weeks. Flat-price web design serving Fresno, Clovis, Madera, and the Central Valley."
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
      <ContactFooterSection />
    </>
  );
}
