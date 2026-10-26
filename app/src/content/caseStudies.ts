import { orderedProjects, type Project } from './projects';

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  /** URL slug under /work, e.g. "kings-county-water-district". */
  slug: string;
  /** The `projects` entry this case study expands on (images, stack, links). */
  projectSlug: string;
  client: string;
  location: string;
  industry: string;
  projectType: string;
  year: string;
  seo: {
    /** Keep under ~60 characters including the "| LocalFix" suffix. */
    title: string;
    /** Keep under ~155 characters. */
    description: string;
  };
  headline: string;
  intro: string;
  challenge: string;
  /** Optional lead-in above the project's "What I built" bullets. */
  solution?: string;
  stats: CaseStudyStat[];
  results: string[];
  /** Optional closing note, e.g. what is being built next. */
  next?: string;
  related: { label: string; href: string }[];
};

/** Client case studies at /work/:slug. Facts here were confirmed by the client
 *  owner (Eslam) on 2026-10-26 — only add results the client can stand behind.
 *  Internal company tools never get a case study (they can't be named). */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'kings-county-water-district',
    projectSlug: 'kings-county-water-district',
    client: 'Kings County Water District',
    location: 'Hanford, CA',
    industry: 'Public water agency',
    projectType: 'Full website rebuild',
    year: '2026',
    seo: {
      title: 'Kings County Water District Website — Hanford, CA | LocalFix',
      description:
        'How I rebuilt Kings County Water District’s early-2000s site into a fast, bilingual website — traffic is up and every board document is a tap away.',
    },
    headline: 'A modern, bilingual website for Kings County Water District',
    intro:
      'Kings County Water District manages and protects groundwater for landowners and communities across Kings County from its office in Hanford, CA. I rebuilt its early-2000s website into a fast, accessible site in English and Spanish.',
    challenge:
      'The district’s old site was built in Adobe Muse in the early 2000s. It was slow, awkward on a phone, English-only, and the documents residents and landowners actually come for — board agendas, minutes, and policies — were hard to find.',
    solution:
      'I rebuilt it from scratch as a modern React site, with every page available in both English and Spanish:',
    stats: [
      { value: 'EN · ES', label: 'every page bilingual' },
      { value: '5 pages', label: 'rebuilt from an early-2000s site' },
      { value: 'Traffic up', label: 'significantly since launch' },
    ],
    results: [
      'Website traffic increased significantly after launch',
      'Residents and landowners can open every agenda, set of minutes, and policy document on any device',
      'People can find what they need and reach the district directly from the site',
      'Full English and Spanish versions for the communities the district serves',
    ],
    related: [
      { label: 'Fresno web design', href: '/fresno-web-design' },
      { label: 'Website fixes & redesigns', href: '/website-fixes' },
    ],
  },
  {
    slug: 'avila-infrastructure',
    projectSlug: 'avila-infrastructure',
    client: 'Avila Infrastructure & Contracting',
    location: 'Lemoore, CA',
    industry: 'Electrical & utility contractor',
    projectType: 'First website',
    year: '2026',
    seo: {
      title: 'Avila Contractor Website — Lemoore, CA | LocalFix',
      description:
        'A first website for Avila Infrastructure & Contracting in Lemoore, CA — click-to-call, an estimate form that emails the owner, and local search setup.',
    },
    headline: 'A first website that turns searches into estimate requests',
    intro:
      'Avila Infrastructure & Contracting is an owner-operated electrical and utility contractor in Lemoore, CA. They had never had a website, so I built their first one — designed to turn Central Valley searches into phone calls and estimate requests.',
    challenge:
      'With no website, Avila was invisible to anyone searching online for an electrician or utility contractor. New customers could only find them by word of mouth, and there was no simple way to ask for an estimate.',
    stats: [
      { value: '1st', label: 'website for the business' },
      { value: '10', label: 'Central Valley cities covered' },
      { value: '24/7', label: 'estimate requests to the owner’s inbox' },
    ],
    results: [
      'Customers can call or request an estimate from any device',
      'Every web lead lands in the owner’s inbox, ready to reply to',
      'Customers get an instant confirmation that their request arrived',
      'Search-ready for utility and electrical work across 10 Central Valley cities',
    ],
    related: [{ label: 'Fresno web design', href: '/fresno-web-design' }],
  },
  {
    slug: 'bullard-knights-softball',
    projectSlug: 'bullard-knights-softball',
    client: 'Bullard Knights Softball',
    location: 'Fresno, CA',
    industry: 'High school athletics',
    projectType: 'First website',
    year: '2026',
    seo: {
      title: 'Bullard Knights Softball Website — Fresno, CA | LocalFix',
      description:
        'The first official website for Bullard High School softball in Fresno — 180+ visitors in its first five days, with schedules, scores, and events in a tap.',
    },
    headline: 'The first official website for Bullard High School softball',
    intro:
      'Bullard Knights Softball is the Bullard High School softball program in Fresno, CA. The program had never had a website — now families and fans can follow the team and see when and where the next game is in a couple of taps.',
    challenge:
      'Game times, locations, and events were scattered across flyers and group chats. Families had no single place to check the schedule, follow results, find the youth program, or see what was coming up next.',
    stats: [
      { value: '180+', label: 'visitors in the first 5 days' },
      { value: '1st', label: 'website for the program' },
      { value: '2 taps', label: 'to the next game’s time and place' },
    ],
    results: [
      'More than 180 visitors in the first five days after launch',
      'Families and fans can follow the team, see scores, and come out to games',
      'When and where the next game is takes a couple of taps on a phone',
      'Event details are real text, not just a flyer image — readable, searchable, and accessible',
      'New events are added as one small content file, with no redesign needed',
    ],
    related: [{ label: 'Fresno web design', href: '/fresno-web-design' }],
  },
  {
    slug: 'the-meat-up',
    projectSlug: 'staff-scheduling-tips-app',
    client: 'The Meat Up',
    location: 'Fresno, CA',
    industry: 'Butcher shop',
    projectType: 'Custom staff app',
    year: '2026',
    seo: {
      title: 'The Meat Up Staff Scheduling App — Fresno, CA | LocalFix',
      description:
        'A custom staff app for The Meat Up, a two-store Fresno butcher shop — schedules, availability, shift trades, and tip splits on every employee’s phone.',
    },
    headline: 'A scheduling and tips app for a two-store Fresno butcher shop',
    intro:
      'The Meat Up is a family-owned butcher shop in Northwest Fresno, with a second store at The Row at Heritage Grove. I built the staff app both stores run on — schedules, availability, shift trades, and tips in one place.',
    challenge:
      'Schedules lived in a spreadsheet, and covers and trades were sorted out over group texts. Changes were easy to miss, and splitting the tip pool by hours meant doing the math by hand.',
    solution: 'I built a mobile-first web app that managers and staff use every day:',
    stats: [
      { value: '2', label: 'stores running on it' },
      { value: '358', label: 'automated tests' },
      { value: 'Live', label: 'in daily use by managers and staff' },
    ],
    results: [
      'In live use at both locations',
      'Staff check schedules, change their availability, and trade shifts from their phones',
      'Replaced a spreadsheet schedule and covers arranged over group text',
      'The owner adds staff and publishes schedules without a developer',
      'Working great — managers and staff are happy with it',
    ],
    next: 'Next up for The Meat Up: online pickup ordering, now in development.',
    related: [
      { label: 'Workflow automation', href: '/workflow-automation' },
      { label: 'App development', href: '/app-development' },
    ],
  },
  {
    slug: 'pirata-goods',
    projectSlug: 'pirata-goods',
    client: 'Pirata Goods',
    location: 'Cairo, Egypt',
    industry: 'Leather goods e-commerce',
    projectType: 'Store takeover & rebuild',
    year: '2026',
    seo: {
      title: 'Pirata Goods Online Store Turnaround | LocalFix',
      description:
        'Pirata Goods went from zero orders in six months to 10–15 customers a month after I took over the store and fixed its shop and SEO — with no ad spend.',
    },
    headline: 'From zero orders in six months to 10–15 customers a month',
    intro:
      'Pirata Goods sells handcrafted, full-grain leather goods made in Cairo. When I took over the online store, it hadn’t taken a single order in six months. After fixing the shop and its SEO, it now brings in 10–15 customers a month — without spending anything on marketing.',
    challenge:
      'The store had gone six months without one order. Turning it around meant two things: getting the store found in search, and rebuilding the shop so a visit could actually become an order.',
    solution: 'I rebuilt the store as one Next.js app — a storefront for customers and an admin for the owner:',
    stats: [
      { value: '0', label: 'orders in the 6 months before' },
      { value: '10–15', label: 'customers a month now' },
      { value: 'No ads', label: 'all growth is organic' },
    ],
    results: [
      'From zero orders in six months to 10–15 customers a month',
      'Growth came from search and a working shop, with no paid marketing',
      'The owner manages the whole catalogue without a developer',
      'Customers browse and order on any device, with prices validated server-side at checkout',
    ],
    related: [
      { label: 'Website fixes & SEO', href: '/website-fixes' },
      { label: 'Web design', href: '/fresno-web-design' },
    ],
  },
  {
    slug: 'refined-stitchery',
    projectSlug: 'refined-stitchery',
    client: 'Refined Stitchery',
    location: 'Kent, UK',
    industry: 'Embroidery & personalisation',
    projectType: 'E-commerce website',
    year: '2026',
    seo: {
      title: 'Refined Stitchery E-Commerce Website | LocalFix',
      description:
        'An online storefront for Refined Stitchery in Kent, UK — embroidery, printing, and alterations with Stripe card payments and an owner-run product admin.',
    },
    headline: 'An online storefront for a Kent embroidery and alterations business',
    intro:
      'Refined Stitchery is an embroidery, custom printing, alterations, and workwear business in Kent, UK. I built their storefront with Stripe card payments and an admin portal the owner runs without a developer.',
    challenge:
      'The business offers a wide range of services, from embroidery and printing to alterations and workwear. It needed one site that explains all of them clearly, lets customers buy products online, and keeps the catalogue easy for the owner to update.',
    stats: [
      { value: 'Stripe', label: 'card payments live' },
      { value: 'Owner-run', label: 'products and photos' },
      { value: 'UK', label: 'client, built from Fresno' },
    ],
    results: [
      'Card payments are live through Stripe',
      'The site is doing well, with strong traffic since launch',
      'The owner updates products and photos without touching code',
      'Customers browse every service and order online',
    ],
    related: [{ label: 'Web design', href: '/fresno-web-design' }],
  },
  {
    slug: 'alhambra-guide-platform',
    projectSlug: 'alhambra-guide-platform',
    client: 'Alhambra Official Guide',
    location: 'Granada, Spain',
    industry: 'Tourism',
    projectType: 'Bilingual website',
    year: '2026',
    seo: {
      title: 'Alhambra Official Guide Bilingual Website | LocalFix',
      description:
        'A bilingual English/Spanish tour website for an official Alhambra guide in Granada — tour pages, availability, and inquiries that work on any phone.',
    },
    headline: 'A bilingual tour website for an official Alhambra guide',
    intro:
      'Alhambra Official Guide offers expert-guided tours of Granada’s UNESCO World Heritage site. I built a fast English and Spanish website where visitors can browse tours, check availability, and get in touch from any device.',
    challenge:
      'Visitors come from all over the world, most of them on a phone. They need clear tour information, availability, and a simple way to ask questions — in their own language.',
    stats: [
      { value: 'EN · ES', label: 'every page bilingual' },
      { value: 'Mobile-first', label: 'for visitors on the go' },
    ],
    results: [
      'Visitors browse tour information clearly on desktop and mobile',
      'The inquiry and availability flow works in English or Spanish',
    ],
    related: [{ label: 'Web design', href: '/fresno-web-design' }],
  },
];

export function getCaseStudy(slug: string | undefined): (CaseStudy & { project: Project }) | null {
  const study = caseStudies.find((item) => item.slug === slug);
  const project = study && orderedProjects.find((item) => item.slug === study.projectSlug);
  return study && project ? { ...study, project } : null;
}
