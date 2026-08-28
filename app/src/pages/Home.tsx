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
      {/* No dollar amounts anywhere on the site (owner request 2026-08-28):
          "flat pricing" language only, in descriptions and visible copy. */}
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
