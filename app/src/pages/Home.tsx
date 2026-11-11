import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import ServicesBlock from '../components/ServicesBlock';
import RecentWork from '../components/RecentWork';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import AboutBlock from '../components/AboutBlock';
import Faq from '../components/Faq';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

type OutletContext = {
  scrollToSection: (id: string) => void;
};

export default function Home() {
  const { scrollToSection } = useOutletContext<OutletContext>();

  return (
    <>
      {/* No dollar amounts anywhere on the site (owner request 2026-08-28):
          "flat pricing" language only, in descriptions and visible copy. */}
      <RouteSeo
        title="Fresno Web Design for Small Businesses | LocalFix"
        description="Web design in Fresno for small businesses. Custom websites, fixes and automation from one local developer. Flat pricing, built in 1-2 weeks, free review first."
        canonical="https://localfix.now/"
      />
      <HeroSection onScrollTo={scrollToSection} />
      <ServicesBlock />
      <RecentWork />
      <Testimonials />
      <HowItWorks />
      <AboutBlock />
      <Faq />
      <ContactFooterSection />
    </>
  );
}
