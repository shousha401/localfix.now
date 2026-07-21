import ServiceHero from '../components/ServiceHero';
import AboutBlock from '../components/AboutBlock';
import RecentWork from '../components/RecentWork';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';

// Page-level structured data: the founder (referenced by @id from the
// sitewide ProfessionalService in index.html) plus a Home -> About breadcrumb,
// matching the pattern the service pages use via ServiceSchema.
const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://localfix.now/#founder',
      name: 'Eslam Shousha',
      jobTitle: 'Founder & Web Developer',
      worksFor: { '@id': 'https://localfix.now/#business' },
      image: 'https://localfix.now/projects/pic.jpeg',
      url: 'https://localfix.now/about',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://localfix.now/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://localfix.now/about' },
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <RouteSeo
        title="About LocalFix — Fresno Web Developer for Small Business"
        description="LocalFix is run by one developer in Fresno, California — production-grade websites and automation for small businesses, with no agency overhead."
        canonical="https://localfix.now/about"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
