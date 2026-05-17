import { useState, type ImgHTMLAttributes } from 'react';

type ProjectImage = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

type Project = {
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
  details: {
    summary?: string;
    built: string | string[];
    value: string | string[];
    privacy?: string;
  };
};

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

function Image({ priority, loading, decoding, ...props }: ImageProps) {
  return (
    <img
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding={priority ? 'sync' : decoding ?? 'async'}
      {...props}
    />
  );
}

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
];

const projectOrder = [
  'shoushabox-production-system',
  'sanad-legal-ai-platform',
  'delivery-verification-system',
  'alhambra-guide-platform',
  'operations-hub-internal-it-operations-platform',
];

const orderedProjects = projectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

function imageFitClass(image: ProjectImage) {
  return image.fit === 'cover' ? 'object-cover' : 'object-contain';
}

function ScreenshotGallery({
  project,
  priority = false,
  onOpenDetails,
  maxThumbnails,
  featured = false,
}: {
  project: Project;
  priority?: boolean;
  onOpenDetails?: () => void;
  maxThumbnails?: number;
  featured?: boolean;
}) {
  const [hero, ...thumbnails] = project.images;
  const visibleThumbnails = typeof maxThumbnails === 'number' ? thumbnails.slice(0, maxThumbnails) : thumbnails;
  const isAlhambra = project.slug === 'alhambra-guide-platform';
  const frameBackground = isAlhambra ? 'bg-[#FAF7F2]' : 'bg-[#0F2A44]';
  const thumbnailBackground = isAlhambra ? 'bg-white' : 'bg-[#122F4B]';

  return (
    <div className={frameBackground}>
      <button
        type="button"
        onClick={onOpenDetails}
        className={`block w-full overflow-hidden rounded-t-2xl p-2 text-left ${frameBackground} ${
          featured ? 'aspect-[16/10] sm:aspect-[16/8]' : 'aspect-[16/11] sm:aspect-[16/10]'
        }`}
        aria-label={`Open details for ${project.title}`}
      >
        <Image
          src={hero.src}
          alt={hero.alt}
          width={1200}
          height={720}
          priority={priority}
          className={`h-full w-full rounded-xl ${imageFitClass(hero)} transition-all duration-300 hover:opacity-95`}
          style={{ objectPosition: hero.position ?? 'center top' }}
        />
      </button>

      <div className="grid grid-cols-2 gap-2 p-2 pt-0">
        {visibleThumbnails.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={onOpenDetails}
            className={`aspect-[4/3] overflow-hidden rounded-lg p-1.5 text-left ${thumbnailBackground}`}
            aria-label={`Open details for ${project.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={450}
              className={`h-full w-full rounded-md ${imageFitClass(image)} transition-all duration-200 hover:opacity-90`}
              style={{ objectPosition: image.position ?? 'center top' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function RecentWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-20 md:py-28" style={{ background: '#FAF7F2' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div style={{ maxWidth: '720px' }}>
          <span
            className="block"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#5F6F80',
            }}
          >
            RECENT WORK
          </span>

          <h2
            className="mt-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.35rem, 5vw, 3.25rem)',
              color: '#0F2A44',
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
              maxWidth: '760px',
            }}
          >
            Real projects. Real screens. Real business use.
          </h2>

          <p
            className="mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              color: '#2A2A2A',
              lineHeight: 1.7,
              maxWidth: '640px',
            }}
          >
            A look at websites, dashboards, mobile apps, AI tools, and internal systems we’ve built — not just mockups or templates.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {orderedProjects.map((project, projectIndex) => (
            <article
              key={project.slug}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md ${
                projectIndex === 0 ? 'md:col-span-2' : ''
              }`}
              style={{ border: '1px solid #E2DDD6' }}
            >
              <ScreenshotGallery
                project={project}
                priority={projectIndex === 0}
                onOpenDetails={() => setSelectedProject(project)}
                maxThumbnails={2}
                featured={projectIndex === 0}
              />

              <div className={`flex flex-1 flex-col p-6 ${projectIndex === 0 ? 'md:p-8' : 'md:p-7'}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-3 py-1"
                      style={{
                        background: 'rgba(229, 116, 43, 0.10)',
                        color: '#C76024',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        letterSpacing: '0',
                        lineHeight: 1.35,
                        boxShadow: 'inset 0 0 0 1px rgba(229, 116, 43, 0.14)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="mt-5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize:
                      projectIndex === 0 ? 'clamp(1.85rem, 3vw, 2.25rem)' : 'clamp(1.45rem, 2vw, 1.75rem)',
                    color: '#0F2A44',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.16,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    color: '#425061',
                    lineHeight: 1.72,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {project.description}
                </p>

                <p
                  className="mt-auto pt-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#5F6F80',
                    lineHeight: 1.6,
                  }}
                >
                  {project.techStack}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px"
                      style={{
                        background: '#E5742B',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      View Project
                    </a>
                  )}

                  {project.isPrivate && (
                    <span
                      className="inline-flex min-h-10 items-center rounded-lg px-4 py-2 text-sm font-medium"
                      style={{
                        background: '#FAF7F2',
                        color: '#544D44',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Private Project
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-10 items-center rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-px hover:text-[#E5742B]"
                    style={{
                      borderColor: '#E2DDD6',
                      color: '#0F2A44',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#544D44',
          }}
        >
          Some work is private or under NDA, but we can show more during a call.
        </p>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F2A44]/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            style={{ border: '1px solid #E2DDD6' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b p-6" style={{ borderColor: '#E2DDD6' }}>
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#C76024',
                  }}
                >
                  Project Details
                </p>
                <h3
                  id="project-detail-title"
                  className="mt-2"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 600,
                    fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
                    color: '#0F2A44',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.1,
                  }}
                >
                  {selectedProject.fullTitle ?? selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl leading-none transition-colors hover:bg-[#FAF7F2]"
                aria-label="Close project details"
                style={{ color: '#0F2A44' }}
              >
                ×
              </button>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <ScreenshotGallery project={selectedProject} />
              </div>

              <div className="space-y-6">
                {selectedProject.details.summary && (
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        color: '#0F2A44',
                      }}
                    >
                      Summary
                    </h4>
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#2A2A2A',
                        lineHeight: 1.65,
                      }}
                    >
                      {selectedProject.details.summary}
                    </p>
                  </div>
                )}

                <div>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      color: '#0F2A44',
                    }}
                  >
                    What we built
                  </h4>
                  {Array.isArray(selectedProject.details.built) ? (
                    <ul
                      className="mt-2 space-y-1.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#2A2A2A',
                        lineHeight: 1.55,
                      }}
                    >
                      {selectedProject.details.built.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#2A2A2A',
                        lineHeight: 1.65,
                      }}
                    >
                      {selectedProject.details.built}
                    </p>
                  )}
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      color: '#0F2A44',
                    }}
                  >
                    Business impact
                  </h4>
                  {Array.isArray(selectedProject.details.value) ? (
                    <ul
                      className="mt-2 space-y-1.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#2A2A2A',
                        lineHeight: 1.55,
                      }}
                    >
                      {selectedProject.details.value.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className="mt-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        color: '#2A2A2A',
                        lineHeight: 1.65,
                      }}
                    >
                      {selectedProject.details.value}
                    </p>
                  )}
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      color: '#0F2A44',
                    }}
                  >
                    Tools used
                  </h4>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: '#5F6F80',
                      lineHeight: 1.6,
                    }}
                  >
                    {selectedProject.techStack}
                  </p>
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px"
                    style={{
                      background: '#E5742B',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    View Project
                  </a>
                )}

                {selectedProject.details.privacy && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8125rem',
                      color: '#544D44',
                      lineHeight: 1.6,
                    }}
                  >
                    {selectedProject.details.privacy}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
