type Offer = {
  /** Flat price in USD, e.g. "595". Must mirror visible on-page copy. */
  price: string;
  /** What the price buys, e.g. "Custom one-page website...". */
  description: string;
};

type Props = {
  /** schema.org Service.serviceType, e.g. "Web Design". */
  serviceType: string;
  /** Human-readable service name, e.g. "Custom Website Design". */
  name: string;
  /** One-sentence description of the service. */
  description: string;
  /** The page's canonical URL, e.g. "https://localfix.now/fresno-web-design". */
  url: string;
  /** Breadcrumb label for this page, e.g. "Fresno Web Design". */
  breadcrumbName: string;
  /** Optional flat-price offer. Only pass when the price is stated in the
   *  page's visible copy (Google requires schema to reflect on-page content). */
  offer?: Offer;
};

/**
 * Per-service-page structured data. Emits a page-specific Service node (linked
 * to the shared LocalBusiness via @id) plus a Home -> page BreadcrumbList.
 *
 * Co-located in the component (like Faq.tsx) so it only renders on the service
 * pages — not site-wide — and so the prerender picks it up inside #root.
 */
export default function ServiceSchema({ serviceType, name, description, url, breadcrumbName, offer }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        serviceType,
        name,
        description,
        url,
        provider: { '@id': 'https://localfix.now/#business' },
        // Same list as the ProfessionalService in index.html — kept in
        // parity with the Google Business Profile service areas.
        areaServed: [
          { '@type': 'City', name: 'Fresno' },
          { '@type': 'City', name: 'Clovis' },
          { '@type': 'City', name: 'Madera' },
          { '@type': 'City', name: 'Sanger' },
          { '@type': 'City', name: 'Selma' },
          { '@type': 'City', name: 'Visalia' },
          { '@type': 'City', name: 'Kerman' },
          { '@type': 'City', name: 'Hanford' },
          { '@type': 'AdministrativeArea', name: 'Central Valley, California' },
          { '@type': 'AdministrativeArea', name: 'California' },
        ],
        ...(offer && {
          offers: {
            '@type': 'Offer',
            price: offer.price,
            priceCurrency: 'USD',
            description: offer.description,
            url,
          },
        }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://localfix.now/' },
          { '@type': 'ListItem', position: 2, name: breadcrumbName, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
