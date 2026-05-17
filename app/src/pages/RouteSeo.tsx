import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

export default function RouteSeo({ title, description, canonical }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://localfix.now/og-image.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://localfix.now/og-image.png" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Fresno, California" />
    </Helmet>
  );
}
