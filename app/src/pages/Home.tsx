import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import RecentWork from '../components/RecentWork';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import PricingBlock from '../components/PricingBlock';
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
      <RouteSeo
        title="Fresno Web Designer, Automation & AI | LocalFix"
        description="Fresno web designer & automation shop for small businesses. Custom one-page websites $595 flat — domain, email, hosting & local SEO included."
        canonical="https://localfix.now/"
      />
      <HeroSection onScrollTo={scrollToSection} />
      <RecentWork />
      <Testimonials />
      <HowItWorks />
      <PricingBlock />
      <AboutBlock />
      <Faq />
      <ContactFooterSection />
    </>
  );
}
