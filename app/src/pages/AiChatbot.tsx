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
import { aiChatbot as content } from '../content/services';

export default function AiChatbot() {
  return (
    <>
      <RouteSeo
        title="AI Chatbot for Fresno Small Business | LocalFix"
        description="Custom AI chatbots for Fresno & Central Valley small businesses, trained on your business — answer customers 24/7 and capture leads after hours."
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
        eyebrow="AI FOR LOCAL BUSINESS — FRESNO & CENTRAL VALLEY"
        headline="AI that knows"
        headlineAccent="your business."
        subheadline="Custom AI chatbots and FAQ assistants for Fresno local businesses. Trained on your actual business — not generic answers. Answer customer questions 24/7."
        primaryCtaText="Get a Free Review"
        secondaryCtaText="Text us - (559) 389-8850"
      />
      <ProblemSection {...content.problem} stat={null} />
      <ServiceDetails {...content.details} />
      <HowItWorks />
      <RecentWork />
      <AboutBlock />
      <Faq items={content.faqs} />
      <ContactFooterSection />
    </>
  );
}
