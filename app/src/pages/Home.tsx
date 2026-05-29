import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
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
      <RouteSeo
        title="LocalFix — Fresno-Based Web Design, Automation & AI for California Small Businesses"
        description="Fresno-based websites, fast fixes, and workflow automation for small businesses across California. Remote-friendly service, flat prices, two-week turnarounds, real production software."
        canonical="https://localfix.now/"
      />
      <HeroSection onScrollTo={scrollToSection} />
      <RecentWork />
      <Testimonials />
      <HowItWorks />
      <AboutBlock />
      <Faq />
      <ContactFooterSection />
    </>
  );
}
