import { useOutletContext } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import RecentWork from '../components/RecentWork';
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
        title="LocalFix — Fresno Web Design, Workflow Automation & AI for Local Business"
        description="Affordable websites, fast fixes, and workflow automation for local businesses in Fresno and the Central Valley. Flat prices, two-week turnarounds, real production software."
        canonical="https://localfix.now/"
      />
      <HeroSection onScrollTo={scrollToSection} />
      <RecentWork />
      <HowItWorks />
      <AboutBlock />
      <ContactFooterSection />
    </>
  );
}
