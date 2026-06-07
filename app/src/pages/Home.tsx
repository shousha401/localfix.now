import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import RecentWork from '../components/RecentWork';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import AboutBlock from '../components/AboutBlock';
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
        title="LocalFix — Fresno Web Designer, Automation & AI for California Small Businesses"
        description="Fresno web designer and automation shop for local small businesses across California. Fast fixes, flat prices, two-week turnarounds, and one person who answers the phone."
        canonical="https://localfix.now/"
      />
      <HeroSection onScrollTo={scrollToSection} />
      <RecentWork />
      <Testimonials />
      <HowItWorks />
      <AboutBlock />
      <ContactFooterSection />
    </>
  );
}
