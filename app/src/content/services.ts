import type { FaqItem } from '../components/Faq';
import type { ServiceDetailsContent } from '../components/ServiceDetails';

/**
 * Unique, per-service page content. Keeping it here (rather than inline in each
 * page) keeps the page components thin and makes it obvious that every service
 * page ships its own distinct copy, FAQs, and schema — the fix for the four
 * service pages previously sharing one near-identical body.
 */
export type ServiceContent = {
  /** Canonical URL — shared by RouteSeo and the per-page Service/Breadcrumb schema. */
  url: string;
  problem: { overline: string; headline: string; body: string };
  details: ServiceDetailsContent;
  faqs: FaqItem[];
  schema: {
    serviceType: string;
    name: string;
    description: string;
    breadcrumbName: string;
  };
};

export const fresnoWebDesign: ServiceContent = {
  url: 'https://localfix.now/fresno-web-design',
  problem: {
    overline: 'SOUND LIKE YOUR SITE?',
    headline: 'Your site looks fine on a laptop and falls apart on a phone.',
    body: `Most of your customers find you on their phone, then leave because the menu won't tap, the photos crawl, and your number is buried three scrolls down. Maybe you're stuck inside a template that fights you every time you change a price. Meanwhile the call you wanted goes to the competitor whose site just worked. A good-looking page isn't enough if nobody can use it from the parking lot.`,
  },
  details: {
    eyebrow: 'WHAT YOU GET',
    h2: 'Fresno web design built to turn visitors into calls',
    intro: [
      `LocalFix builds custom websites for Fresno-area businesses — not a stock template you have to wrestle into shape. I design every page around the one thing that matters to you: getting the phone to ring and the calendar to fill. That means a layout where your number, hours, and booking button are the first things a visitor sees, copy that speaks to your actual customers, and a structure built by hand instead of dragged out of a page-builder. Restaurant, salon, contractor, clinic — your site should look like your business, not like everyone else's.`,
      `Speed and phones come first, because that's where your customers are. I build pages that load fast on a cell signal and stay readable one-thumbed, so nobody bounces before they reach your form. Pricing is flat and agreed up front: one fixed number based on how many pages and features you need, in writing before any work starts. New builds launch in 10 to 14 days, refreshes in 7 to 10. When it's done, the domain, the logins, and the whole thing belong to you. You work with me directly the entire way — no account managers, no handoffs.`,
    ],
    whatsIncludedTitle: "What's included",
    whatsIncluded: [
      {
        title: 'A custom-built layout',
        description:
          'Designed by hand around your business and your customers — not a recycled template you have to fight to edit.',
      },
      {
        title: 'Fast, mobile-first pages',
        description:
          'Built to load quickly on a phone and a cell signal, with tap-friendly buttons and your hours and number up top.',
      },
      {
        title: 'Calls and bookings front and center',
        description:
          'Click-to-call, contact forms, and booking links placed where visitors actually see them, so interest turns into action.',
      },
      {
        title: 'Domain and email setup',
        description:
          'I configure your domain, connect your forms, and get business email working — no loose ends to chase down.',
      },
      {
        title: 'You own everything',
        description:
          'The domain, the logins, and the site are yours from day one. No lock-in, no holding your website hostage.',
      },
      {
        title: 'One revision round plus 30 days of free fixes',
        description:
          'A preview link to review before launch, one round of changes included, and a month of free fixes after you go live.',
      },
    ],
    whoItsForTitle: "Who it's for",
    whoItsFor: `Local businesses around Fresno and Clovis, out to Madera and Visalia, and across the wider Central Valley — restaurants, salons, contractors, clinics, and service providers — who need a website that earns calls and bookings instead of just sitting there. It fits whether you're launching your first real site or finally replacing one that looks dated and breaks on phones.`,
  },
  faqs: [
    {
      question: 'How much does Fresno web design cost?',
      answer:
        "Every project is quoted as one flat price based on how many pages and features you need — never hourly billing. You'll see the full price in writing after a free review, before you pay anything.",
    },
    {
      question: 'How long until my new website is live?',
      answer:
        'New custom sites launch in 10 to 14 days from the kickoff call, and refreshes go live in 7 to 10 days. Small fixes can often turn around the same week.',
    },
    {
      question: 'Will my site actually work well on phones?',
      answer:
        'Yes. Every site is built mobile-first, so it loads fast on a cell signal and is easy to use one-handed, with your number, hours, and booking button placed where visitors see them right away.',
    },
    {
      question: 'Do you build custom sites or use templates?',
      answer:
        'Custom. I design each site by hand around your business instead of forcing you into a stock template, so it looks like you and stays easy to update without fighting a page-builder.',
    },
    {
      question: 'Do I own my website and domain?',
      answer:
        'Completely. The domain, the logins, and the finished site belong to you from day one — no lock-in and no holding your website hostage. You also get one revision round and 30 days of free fixes after launch.',
    },
    {
      question: 'Do you only work with businesses in Fresno?',
      answer:
        "No. I'm based in Fresno and work throughout Clovis, Madera, Visalia, Hanford, Selma, Reedley, and the wider Central Valley — and with clients anywhere in California.",
    },
  ],
  schema: {
    serviceType: 'Web Design',
    name: 'Custom Website Design',
    description:
      'Custom, mobile-first website design for Fresno-area local businesses, built to turn phone visitors into calls and bookings, with flat up-front pricing.',
    breadcrumbName: 'Fresno Web Design',
  },
};

export const workflowAutomation: ServiceContent = {
  url: 'https://localfix.now/workflow-automation',
  problem: {
    overline: 'THE REAL COST',
    headline: "The busywork isn't free — it's costing you the day",
    body: `It rarely feels like a crisis. It's ten minutes confirming an appointment, five copying a lead into a spreadsheet, another stretch reminding a customer about a quote. Stacked across a week, that's the number the McKinsey Global Institute points to: 20-plus hours local businesses lose to work a computer could handle. It's the reason you answer emails after dinner and can't take a real day off. The work isn't hard. It's just endless — and it scales right alongside you.`,
  },
  details: {
    eyebrow: 'WHAT AUTOMATION DOES',
    h2: 'Workflow automation that runs your back office for you',
    intro: [
      `Workflow automation is the quiet part of your business that should run without you touching it. A customer books a slot and the calendar updates, the deposit is logged, and the confirmation goes out — no copy-paste, no double-entry, no 9pm catch-up session at the kitchen table. I build that plumbing custom for each shop, because your jobs, your seasons, and your handoffs don't look like anyone else's. The goal is simple: every task a computer can do, a computer does, so your time goes back to the work only you can do.`,
      `For the last three years I built the internal tools, dashboards, and driver apps a regional food-service company relied on every single day — the systems that moved real orders and weren't allowed to fail. That's the same engineering I bring to a Central Valley business with five employees instead of five hundred. You're not getting a stack of off-the-shelf plugins bolted together and hoped for. You're getting purpose-built automation, designed around how your day actually works, by the person who answers the phone when you call.`,
    ],
    whatsIncludedTitle: "What's included",
    whatsIncluded: [
      {
        title: 'Online booking & scheduling',
        description:
          'A self-serve booking flow that fills your calendar, blocks out conflicts, and sends confirmations and reminders automatically — so the phone rings less and no-shows drop.',
      },
      {
        title: 'Inquiry capture & routing',
        description:
          'New leads from your site, email, and forms land in one place and get sorted to the right person or job type, so nothing sits unanswered for two days.',
      },
      {
        title: 'Automated follow-ups & reminders',
        description:
          'Quote follow-ups, appointment reminders, and review requests go out on a schedule you set, instead of living in your head as a thing you keep forgetting.',
      },
      {
        title: 'Custom internal dashboards',
        description:
          "A single screen that shows today's jobs, open quotes, and what's overdue — the kind of operational dashboard I spent three years building for a company that ran on them.",
      },
      {
        title: 'Connecting the tools you already use',
        description:
          'I wire together the calendar, inbox, spreadsheet, or software you already run so data flows between them automatically, instead of you keying the same thing in three times.',
      },
      {
        title: 'Launch plus 30 days of free fixes',
        description:
          'I set it up, walk you through it, and stay on for 30 days of free adjustments while your team gets used to it. Optional monthly maintenance after that.',
      },
    ],
    whoItsForTitle: "Who it's for",
    whoItsFor: `Owner-operators and small teams across the Central Valley — Fresno, Clovis, Madera, Visalia, Hanford, and beyond — who are doing the same manual steps over and over, booking, quoting, chasing, re-entering data, and have hit the ceiling on what they can grow by working more hours. If you've thought "there has to be a system for this," there is, and I build it.`,
  },
  faqs: [
    {
      question: 'What kind of tasks can you actually automate?',
      answer:
        "Anything repetitive and rule-based: online booking and scheduling, sending appointment and quote reminders, capturing and routing customer inquiries, syncing data between the tools you already use, and pulling your daily numbers into one dashboard. If you're doing the same steps the same way every time, it can usually be automated.",
    },
    {
      question: 'How much time will this really save me?',
      answer:
        'Most local businesses lose 20-plus hours a week to automatable tasks, per the McKinsey Global Institute, and well-built automation typically wins back 5 to 15 of those hours every week. Your exact number depends on how much manual work we move off your plate, which we map out in the free review.',
    },
    {
      question: 'Do I have to replace the software I already use?',
      answer:
        'No. A big part of the job is connecting the calendar, inbox, spreadsheet, or tools you already run so they pass information to each other automatically. I add automation around your current setup rather than forcing you to start over.',
    },
    {
      question: 'How much does workflow automation cost?',
      answer:
        "Automation pricing isn't one-size-fits-all, so I don't publish a figure. After a free review of your current process, you get a flat-price quote and a delivery date up front — no hourly billing and no surprise charges.",
    },
    {
      question: "What happens after it's built and goes live?",
      answer:
        'I set everything up, walk you and your team through it, and include 30 days of free fixes so we can fine-tune it as you use it day to day. After that, monthly maintenance is optional if you want me to keep an eye on things.',
    },
    {
      question: 'Do you work with businesses outside Fresno?',
      answer:
        "Yes. I'm based in Fresno and work throughout Clovis, Madera, Visalia, Hanford, Selma, Reedley, and the wider Central Valley — and I take on clients anywhere in California.",
    },
  ],
  schema: {
    serviceType: 'Workflow Automation',
    name: 'Custom Workflow Automation',
    description:
      'Custom workflow automation for Central Valley small businesses — online booking, inquiry routing, automated follow-ups, internal dashboards, and integrations that connect the tools you already use, built and supported by one Fresno developer.',
    breadcrumbName: 'Workflow Automation',
  },
};

export const aiChatbot: ServiceContent = {
  url: 'https://localfix.now/ai-chatbot',
  problem: {
    overline: 'SOUND FAMILIAR?',
    headline: "You're answering the same five questions all day.",
    body: `"Are you open? Do you do that? How much?" You and your team field the same handful of questions by phone and DM every single day, and the ones that come in after you close sit unanswered until morning. By then the customer has already called the next business on their list. Every missed message is a lead someone else gets to keep.`,
  },
  details: {
    eyebrow: 'WHAT YOU GET',
    h2: 'An AI chatbot trained on your actual business',
    intro: [
      `Most chatbots are a thin wrapper around generic AI that guesses at your hours and invents prices. This is the opposite. Your AI chatbot is trained on your real business information — your hours, your services, your pricing, your policies — so the answers customers get are the answers you'd give yourself. It lives on your website and works while you sleep, fielding the questions that would otherwise tie up your phone, so you get fewer interruptions and customers get instant answers instead of a voicemail.`,
      `It's also honest about what it doesn't know. When a question falls outside what it was trained on, it doesn't bluff — it hands off cleanly to you and grabs the visitor's name and number so the lead isn't lost. The result is a front desk that never closes, points people to the right service or booking link, and quietly collects after-hours inquiries you can follow up on first thing. No offshore handoffs, no template you have to fight with. I build it myself, tune it to your business, and stay accountable for how it performs.`,
    ],
    whatsIncludedTitle: "What's included",
    whatsIncluded: [
      {
        title: 'Trained on your real business',
        description:
          'Your hours, services, pricing, and policies go in, so the chatbot answers from your facts instead of generic AI guesses.',
      },
      {
        title: 'Around-the-clock customer answers',
        description:
          'Visitors get instant, accurate replies to common questions at midnight or on a Sunday — without tying up your phone.',
      },
      {
        title: 'After-hours lead capture',
        description:
          "When someone's ready to buy, it collects their name and number so you can follow up the next morning instead of losing them.",
      },
      {
        title: 'Smart routing and handoff',
        description:
          'It points people to the right service, page, or booking link, and hands off to you whenever a question goes beyond what it knows.',
      },
      {
        title: 'Installed on your website',
        description:
          "Set up as a clean chat widget on your site, configured and tested so it's ready for real customers on launch day.",
      },
      {
        title: '30 days of free fixes',
        description:
          'After launch I tune answers and fix anything that comes up for 30 days, with optional monthly upkeep after that.',
      },
    ],
    whoItsForTitle: "Who it's for",
    whoItsFor: `Local businesses in Fresno, Clovis, Visalia, and the wider Central Valley that get the same questions over and over — service shops, clinics, salons, contractors, and storefronts where the phone runs hot during the day and goes quiet, but not questionless, after close. If repetitive inquiries eat your time and after-hours leads slip away, a chatbot earns its keep.`,
  },
  faqs: [
    {
      question: 'Is this just a ChatGPT wrapper?',
      answer:
        "No. It's trained specifically on your business — your hours, services, pricing, and policies — so it answers the way you would, not with generic AI responses pulled from the internet.",
    },
    {
      question: "What happens when it doesn't know the answer?",
      answer:
        "It won't make something up. When a question falls outside what it was trained on, it hands off to you and captures the visitor's contact details so the lead doesn't get lost.",
    },
    {
      question: 'Can it capture leads after hours?',
      answer:
        "Yes, and that's a core reason to have one. When you're closed, it answers what it can and collects the visitor's name and number so you can follow up first thing the next morning.",
    },
    {
      question: 'How much does an AI chatbot cost?',
      answer:
        'Pricing depends on your business and how much it needs to handle, so you get a flat-price quote after a free review — never an hourly rate and no surprise charges.',
    },
    {
      question: 'How long does it take to build?',
      answer:
        'It starts with a free website review delivered as a short video walkthrough within 48 hours, followed by a one-page scoped proposal with a flat price and delivery date. Most builds land inside a one-to-two-week window.',
    },
    {
      question: 'Do you work with businesses outside Fresno?',
      answer:
        "Yes. I'm based in Fresno and serve Clovis, Madera, Visalia, Hanford, Selma, Reedley, and the wider Central Valley, and I work with clients anywhere in California.",
    },
  ],
  schema: {
    serviceType: 'AI Chatbot Development',
    name: 'Custom AI Chatbot',
    description:
      'Custom AI chatbots and FAQ assistants for local businesses, trained on your real hours, services, pricing, and policies to answer customer questions around the clock, capture after-hours leads, and route people to the right place.',
    breadcrumbName: 'AI Chatbot',
  },
};

export const websiteFixes: ServiceContent = {
  url: 'https://localfix.now/website-fixes',
  problem: {
    overline: 'SOUNDS FAMILIAR?',
    headline: 'Your website works — except for the parts that don\'t.',
    body: `The contact form stopped emailing you weeks ago, and you only found out when a customer called annoyed. Pages take forever to load on a phone. The layout looks broken on mobile, a few links go nowhere, and the whole thing feels a little dated. None of it is worth a full rebuild — but every day it stays broken, you're quietly losing calls, forms, and trust.`,
  },
  details: {
    eyebrow: 'WHAT I FIX',
    h2: "Website fixes that don't require a full rebuild",
    intro: [
      `When something on your site breaks, you don't need a months-long project or a brand-new platform — you need it working again. LocalFix handles targeted website fixes for the problems that actually cost you customers: a contact form that quietly stops sending, pages that crawl on a phone, a layout that fell apart after an update. Repairs are scoped at one flat price agreed before work starts, with same-week turnaround on small jobs. You get one engineer who diagnoses the real issue, fixes it, and tells you plainly what was wrong — not a ticket queue.`,
      `Wherever possible, I work with the website you already have. WordPress, Squarespace, Wix, Shopify, or a hand-coded site — the goal is the same: fix what's broken without forcing you to start over. After a free review, you get a one-page proposal with a flat price and a delivery date before any work begins — no hourly meter, no surprise invoice. And every fix ships with 30 days of free follow-up fixes, so if something related surfaces after launch, it's already covered.`,
    ],
    whatsIncludedTitle: 'What I can fix',
    whatsIncluded: [
      {
        title: 'Speed and load-time repairs',
        description:
          'Oversized images, render-blocking scripts, and bloated pages slimmed down so your site loads fast on phones and slow connections.',
      },
      {
        title: 'Broken contact forms',
        description:
          'Forms that silently fail or never reach your inbox rebuilt and tested end to end, so every lead actually lands where you can see it.',
      },
      {
        title: 'Mobile and responsive fixes',
        description:
          'Layouts that break, overlap, or cut off text on phones and tablets corrected so the site looks right on every screen size.',
      },
      {
        title: 'Broken links and error pages',
        description:
          'Dead links, missing images, and pages throwing errors tracked down and repaired across your whole site.',
      },
      {
        title: 'Design refresh and cleanup',
        description:
          'Outdated styling, mismatched fonts, and cluttered pages cleaned up to look current — without rebuilding the whole site.',
      },
      {
        title: 'SEO basics',
        description:
          'Missing page titles, meta descriptions, and alt text added so search engines can read and rank your pages properly.',
      },
    ],
    whoItsForTitle: "Who it's for",
    whoItsFor: `Fresno and Central Valley business owners who already have a website that mostly works but has a few real problems dragging it down — a broken form, slow pages, a design that's aged poorly. If you're not ready to commit to a full rebuild and just want the broken parts fixed fast at a flat price, this is the lowest-commitment way to start.`,
  },
  faqs: [
    {
      question: 'How much do website fixes cost?',
      answer:
        'Every fix is quoted as one flat price. After a free review, you get a one-page proposal with a fixed price and a delivery date before any work starts — never hourly billing. The price depends on how many fixes are involved and how complex they are.',
    },
    {
      question: 'How fast can you fix my website?',
      answer:
        "Most small repairs turn around the same week. For a larger batch of fixes, you'll get an exact, flat delivery date in your proposal before any work begins, so you always know when it lands.",
    },
    {
      question: 'Do I need to rebuild my whole site to fix it?',
      answer:
        'No. The whole point of this service is fixing what\'s broken without starting over. I work with the website and platform you already have wherever possible, so you keep what works and only pay to fix what doesn\'t.',
    },
    {
      question: 'What platforms do you work with?',
      answer:
        'Whatever your site is built on, where possible — including WordPress, Squarespace, Wix, Shopify, and custom-coded sites. The free review tells you what\'s fixable on your current setup before you commit to anything.',
    },
    {
      question: "What's included after the fix is done?",
      answer:
        'Every fix comes with 30 days of free follow-up fixes after it goes live. If something related to the work surfaces in that window, it\'s covered. Optional monthly maintenance is available afterward if you\'d like ongoing support.',
    },
    {
      question: 'Do you only work with Fresno businesses?',
      answer:
        'No. LocalFix is based in Fresno and serves the whole Central Valley — Clovis, Madera, Visalia, Hanford, Selma, and Reedley — and works with clients anywhere in California, since most fixes are handled remotely.',
    },
  ],
  schema: {
    serviceType: 'Website Maintenance',
    name: 'Website Fixes & Repairs',
    description:
      'Fast, flat-price website fixes for existing small-business sites — broken contact forms, slow load times, mobile and responsive issues, outdated design, broken links, and SEO basics, with same-week turnaround on most repairs.',
    breadcrumbName: 'Website Fixes',
  },
};
