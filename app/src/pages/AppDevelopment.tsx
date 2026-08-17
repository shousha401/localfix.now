import ServiceHero from '../components/ServiceHero';
import ProblemSection from '../sections/ProblemSection';
import ServiceDetails from '../components/ServiceDetails';
import HowItWorks from '../components/HowItWorks';
import RecentWork from '../components/RecentWork';
import AboutBlock from '../components/AboutBlock';
import Faq from '../components/Faq';
import ServiceSchema from '../components/ServiceSchema';
import ContactFooterSection from '../sections/ContactFooterSection';
import RouteSeo from './RouteSeo';
import { Link } from 'react-router-dom';
import { appDevelopment as content } from '../content/services';

const inter = "'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif" as const;

/** Proof-of-work band: ShoushaTV, the TV app that backs this page's claims.
 *  Ships fully visible (no animation) like ServiceHero, so the prerendered
 *  HTML is never hidden for crawlers or no-JS visitors. */
function ShoushaTvProof() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1120px' }}>
        <span
          className="block"
          style={{
            fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#E5742B',
          }}
        >
          PROOF, NOT PROMISES
        </span>

        <h2
          className="mt-4"
          style={{
            fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            color: '#0F2A44',
            letterSpacing: '-0.01em',
            lineHeight: 1.12,
            maxWidth: '720px',
          }}
        >
          ShoushaTV — a full television app, built end-to-end
        </h2>

        <div
          className="mt-8 rounded-2xl p-7 md:p-10"
          style={{ background: '#0F2A44' }}
        >
          <p
            style={{
              fontFamily: inter,
              fontSize: '1.0625rem',
              color: '#FAF7F2',
              lineHeight: 1.75,
              maxWidth: '760px',
            }}
          >
            A 10-foot television app built for the remote, not the mouse: D-pad-first
            navigation, an EPG/XMLTV program guide, favorites, watch history, and catch-up
            TV. It ships completely empty — the app bundles no content and plays only from
            stream credentials the user enters.
          </p>
          <p
            className="mt-5"
            style={{
              fontFamily: inter,
              fontSize: '1.0625rem',
              color: '#FAF7F2',
              lineHeight: 1.75,
              maxWidth: '760px',
            }}
          >
            Under the surface: an ExoPlayer-based video layer with a stream-recovery state
            machine that reconnects cleanly on flaky connections, tuned for low-cost TV
            hardware. Built end-to-end with React Native and Expo; running on Android TV and
            Fire TV by direct install, with an iOS beta in TestFlight — on my own TV daily
            and in the hands of a small beta group.
          </p>
          <p
            className="mt-6"
            style={{
              fontFamily: "'Space Mono', 'Courier New', ui-monospace, monospace",
              fontSize: '0.8125rem',
              color: '#9FB2C4',
              letterSpacing: '0.02em',
            }}
          >
            React Native (Expo) · ExoPlayer · Android TV / Fire TV · iOS (TestFlight beta)
          </p>
        </div>

        <p
          className="mt-6"
          style={{ fontFamily: inter, fontSize: '1rem', color: '#2A2A2A', lineHeight: 1.7 }}
        >
          <Link
            to="/work"
            className="font-medium transition-colors hover:text-[#D46620]"
            style={{ color: '#E5742B' }}
          >
            See the rest of my work →
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function AppDevelopment() {
  return (
    <>
      <RouteSeo
        title="Fresno App Developer — Android, iOS & TV Apps | LocalFix"
        description="Fresno app developer building cross-platform Android, iOS & TV apps for small businesses. Built end-to-end, tested on real hardware, flat project pricing."
        canonical={content.url}
      />
      <ServiceSchema
        serviceType={content.schema.serviceType}
        name={content.schema.name}
        description={content.schema.description}
        url={content.url}
        breadcrumbName={content.schema.breadcrumbName}
      />
      <ServiceHero
        eyebrow="APP DEVELOPMENT — FRESNO & CENTRAL VALLEY"
        headline="App Development in Fresno —"
        headlineAccent="Android, iOS & TV Apps"
        subheadline="Cross-platform apps built with React Native and Expo — for phones, tablets, and TVs. One Fresno developer, end to end: interface, video layer, offline behavior, and error recovery, tested on real hardware."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text me - (559) 389-8850"
      />
      <ProblemSection {...content.problem} stat={null} />
      <ServiceDetails {...content.details} />
      <ShoushaTvProof />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <Faq items={content.faqs} />
      <ContactFooterSection />
    </>
  );
}
