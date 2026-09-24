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
    slug: 'shoushatv',
    title: 'ShoushaTV',
    fullTitle: 'ShoushaTV — TV & Mobile App',
    tags: ['TV App', 'Mobile App', 'Video Player', 'Private Beta'],
    description:
      'A full 10-foot TV app built for the remote — D-pad navigation, EPG program guide, favorites, watch history, and catch-up TV, with a video layer that recovers cleanly on flaky connections.',
    techStack: 'React Native (Expo) · ExoPlayer · Android TV / Fire TV · iOS (TestFlight beta)',
    images: [
      {
        src: '/projects/shoushatv-home.png',
        alt: 'ShoushaTV home screen with D-pad-focused content rails on a television',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shoushatv-guide.png',
        alt: 'ShoushaTV EPG program guide grid built from XMLTV data',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shoushatv-player.png',
        alt: 'ShoushaTV video player with playback controls on TV hardware',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A television app built for the remote, not the mouse — a full 10-foot interface with live program guide, favorites, watch history, and catch-up TV. It ships completely empty: the app bundles no content and plays only from stream credentials the user enters.',
      built: [
        'D-pad-first 10-foot navigation',
        'EPG / XMLTV program guide',
        'Favorites, watch history, and catch-up TV',
        'ExoPlayer-based video layer',
        'Stream-recovery state machine for flaky connections',
        'Performance tuning for low-cost TV hardware',
        'One React Native (Expo) codebase for TV and mobile',
      ],
      value: [
        'Runs on Android TV and Fire TV by direct install',
        'iOS beta in TestFlight with a small beta group',
        'In daily use on my own TV',
        'Reconnects cleanly when a connection drops',
        'Designed and built end-to-end by one developer',
      ],
      privacy:
        'ShoushaTV ships empty by design — it bundles no content and plays only from stream credentials the user provides.',
    },
  },
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
    liveUrl: 'https://www.alhambraofficialguide.com/en',
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
    liveUrl: 'https://kingscwd.org',
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
    slug: 'avila-infrastructure',
    title: 'Avila Infrastructure & Contracting',
    fullTitle: 'Avila Infrastructure & Contracting — Utility & Electrical Contractor Website',
    tags: ['Website', 'Local Business', 'Lead Capture', 'Local SEO'],
    description:
      'Website for an owner-operated utility and electrical contractor in Lemoore, CA — with an estimate-request form that emails every new lead straight to the owner.',
    techStack: 'HTML · CSS · JavaScript · Vercel Serverless Functions · Resend',
    images: [
      {
        src: '/projects/avila-home.jpg',
        alt: 'Avila Infrastructure & Contracting homepage hero with call and estimate buttons',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/avila-services.jpg',
        alt: 'Avila services section — infrastructure, ag solutions, utility installation, and electrical',
        fit: 'cover',
        position: 'center top',
      },
      {
        src: '/projects/avila-contact.jpg',
        alt: 'Avila contact section with the Request an Estimate form',
        fit: 'cover',
        position: 'center top',
      },
    ],
    liveUrl: 'https://avilainfrastructure.com',
    detailUrl: null,
    isPrivate: false,
    lightFrame: true,
    details: {
      summary:
        'A fast single-page website for an owner-operated utility and electrical contractor in Lemoore, CA — built to turn Central Valley searches into phone calls and estimate requests.',
      built: [
        'Bold “business card” brand design with a blueprint-grid motif',
        'Services, Why Avila, service area, and FAQ sections',
        'Click-to-call buttons throughout the page',
        'Estimate-request form with a spam honeypot',
        'Serverless lead handler that emails the owner and auto-replies to the customer',
        'Contractor, service, and FAQ structured data for search',
        'Fully responsive static site on Vercel — no build step',
      ],
      value: [
        'Customers can call or request an estimate from any device',
        'Every web lead lands in the owner’s inbox, ready to reply to',
        'Customers get an instant confirmation that their request arrived',
        'Search-ready for utility and electrical work across 10 Central Valley cities',
      ],
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
    liveUrl: 'https://www.piratagoods.com',
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
    liveUrl: 'https://www.refinedstitchery.co.uk',
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
  {
    slug: 'the-meat-up-online-ordering',
    title: 'The Meat Up — Online Ordering',
    fullTitle: 'The Meat Up — Online Pickup Ordering',
    tags: ['Web App', 'Online Ordering', 'Payments', 'Launching'],
    description:
      'Pickup ordering for The Meat Up, a two-location butcher shop — customers order cuts by the pound and pay only for the real weight, and the counter tablet calls out every new order.',
    techStack: 'React · TypeScript · Vite · Tailwind · Node.js · Express · PostgreSQL · Square · Railway',
    images: [
      {
        src: '/projects/meatup-order-menu.png',
        alt: 'The Meat Up ordering menu on a phone with house sausage and ready-to-grill packs, prices, and a cart bar',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/meatup-order-checkout.png',
        alt: 'Checkout on a phone with a hand-cut ribeye by the pound, a pickup time, the estimated total, and the maximum that can be charged',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/meatup-order-queue.png',
        alt: 'Counter order queue with a new-order alert, a customer cancel request for a manager, and orders grouped by pickup time',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'An online pickup-ordering app for a butcher shop, where most of what sells is cut and weighed to order — so the app holds a safe maximum on the card and charges the real weight once the butcher cuts it.',
      built: [
        'Menu with meat by the pound, thickness choices, and time-of-day menus for breakfast, hot food, and deli',
        'Pickup in 15-minute slots with capacity limits, prep lead time, and holiday closures',
        'Card hold for the estimate plus a buffer, then a charge at the real weight — never above the maximum shown',
        'Square for pricing, tax, and card and Apple Pay payments, so card numbers never touch the app',
        'Counter queue that chimes, reads each new order aloud, and repeats until someone taps “Got it”',
        'Cancel flow: instant before the cut, a manager request after — and the counter hears every one',
        'Guest checkout with no passwords, plus role- and store-based staff access',
        '570 automated tests on a real database, and a 500-order load test with zero failed requests',
        'Encrypted nightly off-site backups with a tested restore',
      ],
      value: [
        'Customers order ahead instead of calling the counter',
        'Cut-to-order meat is paid at the real weight, with no surprise charges',
        'No new order or cancellation gets missed at a busy counter',
        'Managers pause ordering or change the menu without a developer',
      ],
      privacy:
        'Screenshots come from a test copy with demo prices and fictional customers and staff — no real orders or payments.',
    },
  },
  {
    slug: 'staff-scheduling-tips-app',
    title: 'The Meat Up — Staff App',
    fullTitle: 'The Meat Up — Staff Scheduling & Tips App',
    tags: ['Web App', 'Mobile-First', 'Scheduling', 'Client Project'],
    description:
      'The staff app for The Meat Up, a two-location butcher shop — week-grid schedules, shift covers and trades, and an hours-weighted tip-pool calculator, replacing a spreadsheet and group texts.',
    techStack: 'React · TypeScript · Vite · Tailwind · Node.js · Express · SQLite · Railway',
    images: [
      {
        src: '/projects/meatup-staff-schedule.png',
        alt: 'The Meat Up manager week grid with shifts grouped by counter, butcher, and cashier, unpaid breaks, weekly hours, and daily coverage bars',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/meatup-staff-tips.png',
        alt: 'Locked Saturday tip day with the cash and card pool split by hours across seven staff, down to the cent, and a payroll CSV export',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/meatup-staff-employee.png',
        alt: 'Employee home screen on a phone with today’s shift, the week’s schedule, and a claimed cover waiting for a manager',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'The scheduling and tip-sheet app The Meat Up runs on at both of its stores — managers build and publish the week, and staff check shifts and pick up covers from their phones.',
      built: [
        'Week-grid scheduler with coverage bars, copy-last-week, and publish',
        'Hours that exclude unpaid breaks, matching the shop’s old spreadsheet',
        'Hours-weighted tip-pool engine with penny-exact splits (1,000-case test)',
        'Locked tip days with version history and a payroll CSV export',
        'Cover and trade board that only offers shifts a person can actually work',
        'Schedule emails on publish, with later edits batched into one summary per person',
        'Installable mobile app for staff: next shift, week, team, tips, and covers',
        'Role-based access, invite links, CSRF-protected sessions, and an owner activity log',
        'Encrypted nightly backups and 358 automated tests in CI',
      ],
      value: [
        'In live use at both locations',
        'Replaced a spreadsheet schedule and covers arranged over group text',
        'The owner adds staff and publishes schedules without a developer',
        'Staff see their shifts and request covers from their phones',
      ],
      privacy:
        'Screenshots come from a demo copy with The Meat Up’s real branding and stores, but fictional staff and demo data.',
    },
  },
  {
    slug: 'breadcrumb-field-sales-app',
    title: 'Breadcrumb',
    fullTitle: 'Breadcrumb — Field Sales App for a Foodservice Distributor',
    tags: ['Mobile App', 'Field Sales', 'Maps', 'Pre-Pilot'],
    description:
      'A mobile-first field-sales app for a distributor’s sales reps — an account map, a live team feed, check-ins that work offline, and alerts for accounts that are slipping.',
    techStack: 'React · Vite · Node.js · Express · SQLite · Leaflet · Server-Sent Events · IndexedDB',
    images: [
      {
        src: '/projects/breadcrumb-map.png',
        alt: 'Breadcrumb account map with visit-recency pins and an open account sheet',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/breadcrumb-feed.png',
        alt: 'Breadcrumb live team feed with check-ins, notes, and replies on a phone',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/breadcrumb-today.png',
        alt: 'Breadcrumb Today screen with a rep’s visit plan and follow-ups on a phone',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'An in-house field-sales app that puts thousands of customer accounts on a map, shows reps each account’s order history before they walk in, and keeps the whole team’s visits in one live feed.',
      built: [
        'Clustered account map colored by how recently each account was visited',
        'Account sheet with usual order, spend trend, open orders, and payment habits',
        'Live team feed for check-ins, notes, calls, and @mentions',
        'Offline check-in outbox that survives lost signal and retries safely',
        'Alert engine for lapsed accounts, lost items, and declining spend',
        'Visit plans, follow-ups, and visit-frequency targets',
        'New-opening leads from state liquor-license data',
        'Read-only nightly sync from the ERP and warehouse systems',
        '1,400+ automated tests plus a five-device screenshot check',
      ],
      value: [
        'Reps see an account’s history and alerts before they walk in',
        'Every visit is visible to the team, so two reps don’t work the same account unknowingly',
        'Surfaces lapsed accounts that no existing report showed',
        'Keeps rep traffic off the shared ERP and warehouse systems',
      ],
      privacy:
        'Built for an internal sales team and preparing for its pilot. Screenshots use a fictional dataset — no real customers, reps, or sales figures.',
    },
  },
  {
    slug: 'snapbox-qc-photo-hub',
    title: 'SnapBox',
    fullTitle: 'SnapBox — QC Photo Hub for the Production Floor',
    tags: ['Internal Tool', 'Tablets', 'Quality Control', 'Real-Time'],
    description:
      'A quality-check photo hub for a food plant — each production line’s tablet snaps a photo and a note, and supervisors approve it or send feedback from one live board.',
    techStack: 'Node.js · Express · SQLite · Server-Sent Events · JavaScript · PM2',
    images: [
      {
        src: '/projects/snapbox-hub.png',
        alt: 'SnapBox supervisor board with QC photo posts in columns by area and line, each with a status, a note, feedback, and approve and decline buttons',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/snapbox-tablet.png',
        alt: 'Line tablet with a photo of a case on a check scale, a note, a send button, and supervisor feedback on this shift’s posts',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/snapbox-history.png',
        alt: 'SnapBox history for a past day with date, area, line, and status filters, a count of approved and declined checks, and a grid of QC photos with notes and decline reasons',
        fit: 'contain',
        position: 'center top',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'Replaces “text the photo to someone” with one screen the whole floor shares: lines post their quality checks as they happen, and supervisors answer them live.',
      built: [
        'Line tablets that take a photo with the rear camera, add a note, and post in one tap',
        'Live supervisor board by area and line, updated instantly over Server-Sent Events',
        'Approve, decline with a reason, or send feedback that pops up on that line’s tablet',
        'Each tablet only ever sees its own line’s posts and feedback',
        'PIN-gated supervisor actions that the device remembers',
        'Nothing is erased: delete archives, and a history page filters any past day and restores posts',
        'Photos shrunk in the browser before upload, so tablets on weak Wi-Fi still post fast',
        '70 automated tests covering every endpoint, run on every push',
      ],
      value: [
        'Ended QC photos texted to one person’s phone',
        'Every supervisor sees every line’s checks on one screen',
        'Feedback reaches the line in seconds, not at the end of the shift',
        'A searchable photo record of every check',
      ],
      privacy:
        'Shown with generic area names, invented QC notes, and rendered demo photos — no real products, labels, or company details.',
    },
  },
  {
    slug: 'shousha-hub-launchpad-fleet-monitor',
    title: 'Shousha-Hub',
    fullTitle: 'Shousha-Hub — Company Launchpad & Fleet Monitor',
    tags: ['Internal Platform', 'Monitoring', '3D', 'Dashboard'],
    description:
      'One front door to every internal tool a company runs — live status on every card, a watchtower that catches a tool going sick before anyone calls, and a 3D control room drawn from real health data.',
    techStack: 'Node.js · Express · Three.js · JavaScript · JSON storage · PM2',
    images: [
      {
        src: '/projects/shousha-hub-launchpad.png',
        alt: 'Shousha-Hub launchpad with a 3D control-room band above eight tool cards showing online, issue, and offline status with latency',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shousha-hub-ops.png',
        alt: 'Watchtower fleet dashboard with up, degraded, and down counts, two open incidents, and every tool’s database, backup, and data-pull checks',
        fit: 'contain',
        position: 'center top',
      },
      {
        src: '/projects/shousha-hub-diorama.png',
        alt: 'Close-up of the 3D control room: kiosk screens with live latency sparklines, the developer at a red kiosk, and the monitor, repair, and deploy agents',
        fit: 'cover',
        position: 'center center',
      },
    ],
    liveUrl: null,
    detailUrl: null,
    isPrivate: true,
    details: {
      summary:
        'A launchpad that puts every internal tool one click away, with a built-in fleet monitor that knows the difference between a tool that’s down and one that’s up but quietly failing.',
      built: [
        'Launchpad with search and category filters for every internal tool',
        'Live status on each card from a TCP or health-check probe, with latency',
        'Watchtower monitor: read-only checks every minute, sorting each tool into up, degraded, or down',
        'Degraded catches the quiet failures — a dead database, a stale backup, or a data pull that stopped',
        'Incident tracking with one alert email after five minutes, reminders, and a recovery notice',
        '3D control room in Three.js where each kiosk shows its tool’s real status and latency history',
        'Runs fully offline on plant PCs, and scales its 3D down on weak hardware',
        'Ideas & Help inbox with a PIN-gated admin and CSV export',
      ],
      value: [
        'Staff stop hunting for bookmarks and IP addresses',
        'Problems surface before someone on the floor reports them',
        'One email to one person when an outage lasts — no alert spam',
        'Staff ideas and bug reports land in one inbox',
      ],
      privacy:
        'Shown with a fictional tool list and demo monitoring data — no real hosts, systems, or company details.',
    },
  },
];

/** Display order for the full portfolio on /work. */
const projectOrder = [
  // Staged — fully written above but hidden until its screenshots are added to
  // public/projects/ (see SCREENSHOTS-TODO.md). Uncomment the slug to publish
  // it as the FIRST card, and remove its ShippedTool card from `shippedTools`.
  // 'shoushatv',
  'kings-county-water-district',
  'avila-infrastructure',
  'shoushabox-production-system',
  'the-meat-up-online-ordering',
  'staff-scheduling-tips-app',
  'pirata-goods',
  'formulation-batch-builder',
  'sanad-legal-ai-platform',
  'refined-stitchery',
  'delivery-verification-system',
  'breadcrumb-field-sales-app',
  'snapbox-qc-photo-hub',
  'shousha-hub-launchpad-fleet-monitor',
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
    title: 'ShoushaTV — TV & Mobile App',
    blurb:
      'A full 10-foot television app built for the remote: D-pad navigation, EPG/XMLTV program guide, favorites, watch history, and catch-up TV — with an ExoPlayer video layer and a stream-recovery state machine tuned for low-cost TV hardware. Ships completely empty: no bundled content, plays only from credentials the user enters. On Android TV and Fire TV by direct install, with an iOS beta in TestFlight.',
    techStack: 'React Native (Expo) · ExoPlayer · Android TV / Fire TV · iOS (TestFlight beta)',
    status: 'Private beta',
  },
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
    title: 'Warehouse Location Feed',
    blurb:
      'Type a bin code and see exactly what sits on that rack right now — items, cases, fresh/frozen/tempering state and how long each pallet has been in it, with scannable barcodes. Every shift opens on a Today board that spells each job out down to which pallet is in which bin, and still shouts about yesterday’s work nobody ticked off.',
    techStack: 'Node.js · Express · read-only warehouse API · role-based login',
  },
  {
    title: 'Break & Lunch Compliance Tracker',
    blurb:
      'Watches up to four break and lunch windows per worker and nudges the site manager the moment one is due. A missed break becomes a meal-break compliance record, managers get a 5 PM summary email, and a live per-site board shows every break green, yellow, or red — built to switch to payroll clock punches without changing the board.',
    techStack: 'Node.js · Express · node-cron · email alerts',
  },
  {
    title: 'Custom WordPress Theme',
    blurb:
      'A full brand redesign built from scratch — sticky navigation, video hero, hover cards, and a fully responsive layout matched to the client’s spec.',
    techStack: 'WordPress · PHP · JavaScript · CSS',
  },
];

/** Everything shipped: full showcase projects (including staged) + text-only tools. */
export const totalShippedCount = projects.length + shippedTools.length - 2; // Ask JD + ShoushaTV counted once (staged, with interim text cards)
