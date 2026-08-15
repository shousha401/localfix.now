export type ProjectImage = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  fullTitle?: string;
  tags: string[];
  description: string;
  techStack: string;
  images: ProjectImage[];
  liveUrl: string | null;
  detailUrl: string | null;
  isPrivate: boolean;
  lightFrame?: boolean;
  details: {
    summary?: string;
    built: string | string[];
    value: string | string[];
    privacy?: string;
  };
};

/** Shipped tools shown as compact text cards on /work — real projects that
 *  don't have company-safe screenshots (yet). If one gains screenshots,
 *  promote it to a full `projects` entry and remove it here. */
export type ShippedTool = {
  title: string;
  blurb: string;
  techStack: string;
  status?: string;
};

const projects: Project[] = [
  {
    slug: 'alhambra-guide-platform',
    title: 'Alhambra Guide Platform',
    tags: ['Website', 'Bilingual', 'Tour Booking'],
    description:
      'Bilingual tourism website with tour pages, availability flow, mobile layout, and Spanish / English content.',
    techStack: 'Next.js · TypeScript · Tailwind · Supabase',
    images: [
      {
        src: '/projects/alhambra-home.png',
        alt: 'Alhambra Guide Platform homepage',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/alhambra-admin.png',
        alt: 'Alhambra tour detail page with booking information',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/alhambra-mobile.png',
        alt: 'Alhambra mobile responsive view',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: 'https://alhambraofficialguide.com',
    detailUrl: null,
    isPrivate: false,
    details: {
      built:
        'A bilingual tourism website built for guided tour presentation, Spanish / English content, mobile browsing, tour detail pages, and customer inquiry flow.',
      value:
        'Visitors can browse tour information clearly across desktop and mobile, then move through the inquiry and availability flow in their preferred language.',
    },
  },
  {
    slug: 'operations-hub-internal-it-operations-platform',
    title: 'Operations Hub',
    fullTitle: 'Operations Hub — Internal IT Operations Platform',
    tags: ['Internal Platform', 'IT Operations', 'Dashboard', 'Bilingual'],
    description:
      'Built a full internal IT operations platform used daily across multiple company locations.',
    techStack: 'Node.js · Express · SQLite · JavaScript · Chart.js · Internal Network Deployment',
    images: [
      {
        src: '/projects/it-tools-operationhub.png',
        alt: 'Operations Hub central internal tools dashboard',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/it-tools-home.png',
        alt: 'Operations Hub printer toner monitoring screen',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/it-tools-helpdesk.png',
        alt: 'Operations Hub IT helpdesk ticket management screen',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      built:
        'A central internal hub with 12 live tools, including printer toner monitoring across 35 printers, toner inventory by location, IT helpdesk tickets with SLA tracking, PDF translation, QR code generation, visitor analytics, raffle tools, and trivia systems.',
      value:
        'It replaced scattered spreadsheets, manual processes, and disconnected tools with one unified internal platform used across multiple company locations. V2.0 added dark and light themes, English and Spanish support, and hidden easter eggs including a secret arcade unlocked by Konami code.',
    },
  },
  {
    slug: 'shoushabox-production-system',
    title: 'ShoushaBox',
    fullTitle: 'ShoushaBox — Digital Production Management System',
    tags: ['Production System', 'Warehouse Workflow', 'Live Dashboard', 'ERP Integration'],
    description:
      'Real-time production management system that replaces paper-based production workflow with live order assignment, TV production board, label printing, verification, audit history, and automated change alerts.',
    techStack: 'React · Vite · Node.js · Express · SQLite · SQL Server · REST API',
    images: [
      {
        src: '/projects/shoushabox-orders-management.png',
        alt: 'ShoushaBox orders management interface with assignment and label printing tools',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shoushabox-live-cutter-board.png',
        alt: 'ShoushaBox live production floor board showing cutter status and order progress',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shoushabox-change-notifications.png',
        alt: 'ShoushaBox automated order change notification screen',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A real-time production workflow system that replaces paper-based order assignment with live production tracking, label printing, verification, audit history, and automated change alerts.',
      built: [
        'Orders management interface',
        'Production floor TV board',
        'Cutter assignment workflow',
        'Start / Done status tracking',
        'Label printing flow',
        'Verification and confirmation screens',
        'Audit history',
        'Automated change detection',
        'Email notification system',
        'Bilingual UI support',
        'Backend API and local operational database',
      ],
      value: [
        'Replaced scattered paper workflows',
        'Improved supervisor visibility',
        'Reduced missed order changes',
        'Created a live shared production board',
        'Added accountability through timestamps and audit logs',
        'Made daily production easier to track and verify',
      ],
      privacy:
        'This was built for an internal production workflow, so client-specific details are hidden.',
    },
  },
  {
    slug: 'delivery-verification-system',
    title: 'Delivery Verification System',
    tags: ['Mobile App', 'Logistics', 'Dashboard', 'Offline Workflow'],
    description:
      'Mobile app and manager dashboard for delivery verification. Drivers scan products at each stop, confirm deliveries, and managers track route progress, scan activity, and missing items.',
    techStack: 'React Native · Expo · Node.js · Express · SQL Server · PostgreSQL · SQLite · JWT Auth',
    images: [
      {
        src: '/projects/delivery-app-showcase.png',
        alt: 'Delivery verification mobile app showcase with route, scan, and confirmation screens',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/delivery-app-home.png',
        alt: 'Delivery verification route stop list screen',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/delivery-app-scan.png',
        alt: 'Delivery verification barcode scanning screen',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/delivery-app-confirm.png',
        alt: 'Delivery verification delivery summary and missing items screen',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A mobile delivery verification workflow that helps drivers scan products at each stop, confirm delivered items, and report missing items before completing the delivery.',
      built: [
        'Mobile driver app',
        'Barcode scanning workflow',
        'Delivery confirmation screen',
        'Offline scan and confirmation storage',
        'Backend API',
        'Manager dashboard',
        'Admin setup tools',
      ],
      value: [
        'Fewer delivery mistakes',
        'Faster stop confirmation',
        'Better route visibility for managers',
        'Less manual tracking',
        'More reliable delivery records',
      ],
      privacy:
        'This was built for an internal business workflow, so some details and company-specific information are hidden.',
    },
  },
  {
    slug: 'sanad-legal-ai-platform',
    title: 'Sanad Legal AI Platform',
    tags: ['AI Platform', 'Legal Tech', 'Arabic/English'],
    description:
      'AI-powered legal research platform with trusted document search, lawyer review, and bilingual interface.',
    techStack: 'Next.js · Python · Qdrant · BGE-M3 · BM25',
    images: [
      {
        src: '/projects/sanad-home.png',
        alt: 'Sanad legal AI platform landing page',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/sanad-int.png',
        alt: 'Sanad query interface for legal research',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/sanad-dashbored.png',
        alt: 'Sanad dashboard view',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      built:
        'A bilingual AI research interface, retrieval pipeline, document search flow, and review workspace for legal professionals.',
      value:
        'The platform keeps research grounded in trusted documents and supports Arabic and English workflows without presenting unverified answers as fact.',
    },
  },
  {
    slug: 'kings-county-water-district',
    title: 'Kings County Water District',
    fullTitle: 'Kings County Water District — Public Agency Website',
    tags: ['Website', 'Local Business', 'Bilingual', 'Accessibility'],
    description:
      'Full website rebuild for a California public water agency — replacing a dated early-2000s site with a fast, responsive, bilingual React app.',
    techStack: 'React · Vite · TypeScript · Tailwind · React Router',
    images: [
      {
        src: '/projects/kcwd-home.jpg',
        alt: 'Kings County Water District homepage hero',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/kcwd-board.jpg',
        alt: 'Board of Directors page with meeting agendas and minutes',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/kcwd-projects.jpg',
        alt: 'Recharge-basin projects page with stats and tables',
        fit: 'cover',
        position: 'center top',
      },
    ],
    liveUrl: 'https://kingscwd.vercel.app',
    detailUrl: null,
    isPrivate: false,
    lightFrame: true,
    details: {
      built:
        'A five-page responsive site — home, board of directors with a tabbed agenda and minutes archive, projects, policies, and contact — rebuilt from an early-2000s Adobe Muse site into a modern, accessible, English / Spanish React app.',
      value:
        'Residents and landowners can find board meetings, district projects, and policy documents on any device, in English or Spanish, on a site that finally loads fast and meets modern accessibility expectations.',
    },
  },
  {
    slug: 'pirata-goods',
    title: 'Pirata Goods',
    fullTitle: 'Pirata Goods — Leather Goods E-Commerce',
    tags: ['E-Commerce', 'Website', 'Admin CMS', 'Checkout'],
    description:
      'Full e-commerce site for a handcrafted leather brand — storefront, cart, cash-on-delivery checkout, and a complete admin CMS in one Next.js app.',
    techStack: 'Next.js · TypeScript · Tailwind · Vercel',
    images: [
      {
        src: '/projects/pirata-home.jpg',
        alt: 'Pirata Goods storefront homepage',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/pirata-shop.jpg',
        alt: 'Pirata Goods shop page with product grid',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/pirata-about.jpg',
        alt: 'Pirata Goods brand story page',
        fit: 'cover',
        position: 'center top',
      },
    ],
    liveUrl: 'https://pirata-goods-site.vercel.app',
    detailUrl: null,
    isPrivate: false,
    lightFrame: true,
    details: {
      summary:
        'A complete online store for a handcrafted leather brand — public storefront plus an owner-run admin CMS, built as a single Next.js app.',
      built: [
        'Storefront with home, shop, and product pages',
        'Category filters and product sorting',
        'Color-aware photo galleries with full-screen zoom',
        'Cart persisted across visits',
        'Cash-on-delivery checkout with server-side price validation',
        'Order confirmation emails',
        'Admin CMS for products and photos',
      ],
      value: [
        'Owner manages the whole catalogue without a developer',
        'Customers browse and order on any device',
        'Prices are validated server-side at checkout',
        'One codebase for storefront and admin',
      ],
    },
  },
  {
    slug: 'refined-stitchery',
    title: 'Refined Stitchery',
    fullTitle: 'Refined Stitchery — Embroidery & Personalisation Storefront',
    tags: ['E-Commerce', 'Website', 'Admin Portal', 'Stripe'],
    description:
      'Marketing and e-commerce site for a UK embroidery and personalisation business, with a shopping cart, Stripe checkout, and a password-protected admin portal.',
    techStack: 'React 19 · TypeScript · Vite · Tailwind · Vercel',
    images: [
      {
        src: '/projects/stitchery-home.jpg',
        alt: 'Refined Stitchery homepage hero',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/stitchery-mid.jpg',
        alt: 'Refined Stitchery services section',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/stitchery-lower.jpg',
        alt: 'Refined Stitchery custom products section',
        fit: 'cover',
        position: 'center top',
      },
    ],
    liveUrl: 'https://stitchery-website.vercel.app',
    detailUrl: null,
    isPrivate: false,
    lightFrame: true,
    details: {
      summary:
        'A boutique storefront for a Kent-based sewing and personalisation business — embroidery, custom printing, alterations, workwear and more — with an owner-managed product catalogue.',
      built: [
        'Responsive marketing storefront',
        'Services, who-we-serve, and FAQ pages',
        'Shopping cart',
        'Stripe checkout (activates when keys are set)',
        'Password-protected admin portal',
        'Product and photo management via serverless functions + Vercel Blob',
      ],
      value: [
        'Owner updates products and photos without touching code',
        'Customers browse services and order online',
        'Ready for card payments the moment Stripe keys are added',
      ],
    },
  },
  {
    slug: 'formulation-batch-builder',
    title: 'Formulation Batch Builder',
    fullTitle: 'Formulation Batch Builder — Live-Inventory Blend Optimizer',
    tags: ['Automation', 'Optimization', 'Live Inventory', 'Manufacturing'],
    description:
      'An optimizer that reads live warehouse inventory and computes the fewest-pallet blend to fill N batches at a target weight and lean %, with several build strategies to choose from.',
    techStack: 'Node.js · Express · REST API · Live Inventory Integration',
    images: [
      {
        src: '/projects/formulation-results.png',
        alt: 'Formulation Batch Builder result — KPIs, projection, and material pull sheet',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/formulation-methods.png',
        alt: 'Formulation Batch Builder PickForMe — every in-band build option',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/formulation-builder.png',
        alt: 'Formulation Batch Builder setup — products, batch parameters, and build methods',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A production tool that solves a real formulation problem: hit a target batch weight and lean percentage while breaking the fewest whole pallets, reading fresh inventory on every run.',
      built: [
        'Live inventory pull on every build',
        'Fewest-pallet blend solver',
        'Target weight and lean-band constraints',
        'Multiple build strategies to compare',
        'Pull sheets for the floor',
        'No stored state — every build reads fresh',
      ],
      value: [
        'Replaces manual, error-prone blend math',
        'Breaks fewer whole pallets',
        'Keeps every batch inside the lean spec',
        'Gives the floor a clear pull sheet',
      ],
      privacy:
        'This was built for an internal manufacturing workflow, so company-specific details are hidden.',
    },
  },
  {
    slug: 'ask-jd-ai-assistant',
    title: 'Ask JD',
    fullTitle: 'Ask JD — On-Prem AI Assistant for ERP & Warehouse Data',
    tags: ['AI Assistant', 'RAG', 'Natural Language', 'On-Prem'],
    description:
      'An AI assistant that answers natural-language questions about company ERP and warehouse data, running entirely on-premises.',
    techStack: 'LLM · RAG · Node.js · SQL Server · On-Prem Deployment',
    images: [
      {
        src: '/projects/askjd-chat.png',
        alt: 'Ask JD natural-language chat interface',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/askjd-answer.png',
        alt: 'Ask JD answering a data question with sources',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/askjd-dashboard.png',
        alt: 'Ask JD admin or audit view',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A natural-language assistant over the company ERP and warehouse systems — ask a question in plain English, get an answer grounded in real data, without sending anything to the cloud.',
      built: [
        'Natural-language querying of ERP and warehouse data',
        'Retrieval-augmented answers grounded in the real schema',
        'Runs fully on-premises',
        'Audit log of questions and answers',
      ],
      value: [
        'Staff get answers without writing SQL or waiting on reports',
        'Data never leaves the building',
        'Grounded answers instead of guesses',
      ],
      privacy:
        'This is an internal proof-of-concept over private company systems, so specifics are hidden.',
    },
  },
  {
    slug: 'cmp-plus-cmms',
    title: 'Cmp-Plus',
    fullTitle: 'Cmp-Plus — In-House Maintenance Management System (CMMS)',
    tags: ['Internal Platform', 'CMMS', 'Inventory', 'Work Orders'],
    description:
      'An in-house maintenance management system that replaced a commercial CMMS — work orders, parts inventory, purchasing, preventive maintenance, and role-based access.',
    techStack: 'React · Node.js · Express · SQLite · REST API',
    images: [
      {
        src: '/projects/cmpplus-assets.png',
        alt: 'Cmp-Plus asset registry — equipment by category, make, building, and status',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/cmpplus-inventory.png',
        alt: 'Cmp-Plus parts inventory with on-hand, cost, and reorder points',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/cmpplus-home.png',
        alt: 'Cmp-Plus module home — work orders, inventory, requests, PMs, assets',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A maintenance department platform built in-house to replace a paid CMMS product — owned, tweakable, and wired to the company’s own data.',
      built: [
        'Work-order lifecycle with manager approval',
        'Parts inventory with bin locations',
        'Purchasing, receiving, and an append-only stock ledger',
        'Preventive-maintenance scheduling',
        'Parts and work requests with triage',
        'Role-based access',
        'One-shot importer from the old system',
      ],
      value: [
        'Replaced a recurring commercial-software cost',
        'Fully owned and customizable in-house',
        'Accurate parts stock and costs',
        'Preventive maintenance instead of firefighting',
      ],
      privacy:
        'This was built for an internal maintenance department, so company-specific details are hidden.',
    },
  },
  {
    slug: 'digital-receiving-log',
    title: 'Digital Receiving Log',
    fullTitle: 'Digital Receiving Log — Paper Form to Audit-Ready Records',
    tags: ['Internal Tool', 'Compliance', 'Food Safety', 'PDF'],
    description:
      'A tablet/desktop app that replaces a hand-written food-safety receiving log with searchable records, live spec enforcement, and audit-ready PDFs.',
    techStack: 'Node.js · Express · SQLite · PDF Generation',
    images: [
      {
        src: '/projects/receiving-records.png',
        alt: 'Digital receiving log — searchable records with filters and dispositions',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/receiving-detail.png',
        alt: 'Digital receiving log — full record detail with lines and audit trail',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/receiving-pdf.png',
        alt: 'Generated F400-007 receiving log PDF for the audit binder',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A digital replacement for a paper receiving log that keeps the exact same data as queryable records, enforces food-safety rules as you type, and regenerates the official PDF on demand.',
      built: [
        'Structured receiving entry form',
        'Live food-safety spec enforcement',
        'Searchable, filterable records',
        'On-demand official PDF regeneration',
        'Audit-ready history',
      ],
      value: [
        'Answers questions the paper scans never could',
        'Catches spec violations at entry time',
        'Audit binder PDFs on demand',
        'No more lost or unreadable paper forms',
      ],
      privacy:
        'This was built for an internal food-safety workflow, so company-specific details are hidden.',
    },
  },
];

/** Display order for the full portfolio on /work. */
const projectOrder = [
  'kings-county-water-district',
  'shoushabox-production-system',
  'pirata-goods',
  'formulation-batch-builder',
  'sanad-legal-ai-platform',
  'refined-stitchery',
  'delivery-verification-system',
  'digital-receiving-log',
  'cmp-plus-cmms',
  'alhambra-guide-platform',
  'operations-hub-internal-it-operations-platform',
  // Staged — fully written above but hidden until its screenshots are added to
  // public/projects/ (see SCREENSHOTS-TODO.md). Uncomment the slug to publish,
  // and remove its ShippedTool card from `shippedTools` below.
  // 'ask-jd-ai-assistant',
];

/** Featured subset shown on the homepage and /about — the strongest mix of
 *  public sites, internal systems, e-commerce, AI, and automation. The first
 *  slug renders as the full-width lead card. */
const featuredOrder = [
  'kings-county-water-district',
  'shoushabox-production-system',
  'pirata-goods',
  'sanad-legal-ai-platform',
  'formulation-batch-builder',
];

function bySlugOrder(order: string[]): Project[] {
  return order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}

export const orderedProjects = bySlugOrder(projectOrder);
export const featuredProjects = bySlugOrder(featuredOrder);

/** Shipped work without company-safe screenshots — shown as text cards on /work. */
export const shippedTools: ShippedTool[] = [
  {
    title: 'Production Scheduling Report',
    blurb:
      'Tells the team what to make and how much — days ahead. Reads live inventory and open orders, factoring FIFO, partial lots, shelf life, and order risk. Checked daily by production and ownership.',
    techStack: 'Node.js · React · SQLite',
  },
  {
    title: 'Ask JD — On-Prem AI Assistant',
    blurb:
      'A natural-language assistant over ERP and warehouse data. Ask a question in plain English, get an answer grounded in real records — with a full audit log, and nothing leaving the building.',
    techStack: 'LLM · RAG · Node.js · SQL Server',
    status: 'Internal pilot',
  },
  {
    title: 'Product Value Tool',
    blurb:
      'Instant last-price lookup across two pricing tiers, so sales and purchasing always quote from the latest number instead of digging through old invoices.',
    techStack: 'Node.js · Express · SQLite',
  },
  {
    title: 'Custom WordPress Theme',
    blurb:
      'A full brand redesign built from scratch — sticky navigation, video hero, hover cards, and a fully responsive layout matched to the client’s spec.',
    techStack: 'WordPress · PHP · JavaScript · CSS',
  },
];

/** Everything shipped: full showcase projects (including staged) + text-only tools. */
export const totalShippedCount = projects.length + shippedTools.length - 1; // Ask JD counted once
