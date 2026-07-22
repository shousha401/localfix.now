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
      {/* No price in this description: the pricing block now lives only on
          /fresno-web-design, so a "$595" snippet here would land visitors on a
          page that never states it. That page's description carries the price
          and backs it with visible copy plus Offer schema. */}
      <RouteSeo
        title="Fresno Web Designer, Automation & AI | LocalFix"
        description="Fresno web designer & automation shop for small businesses. Custom one-page websites with domain, business email, hosting & local SEO included. Flat pricing."
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
