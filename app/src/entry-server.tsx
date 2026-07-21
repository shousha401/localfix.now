import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { SeoContext, type SeoCollector, type SeoData } from './seo-context';

const OG_IMAGE = 'https://localfix.now/og-image.png';

/**
 * Renders a route to static HTML for build-time prerendering.
 * Returns the body markup plus a ready-to-inject <head> tag string.
 */
export function render(url: string): { html: string; head: string } {
  const collector: SeoCollector = { current: null };

  const html = renderToString(
    <SeoContext.Provider value={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </SeoContext.Provider>
  );

  return { html, head: buildHead(collector.current) };
}

function escape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead(seo: SeoData | null): string {
  if (!seo) return '';

  const title = escape(seo.title);
  const description = escape(seo.description);
  const canonical = seo.canonical ? escape(seo.canonical) : null;

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    ...(canonical ? [`<link rel="canonical" href="${canonical}" />`] : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    ...(canonical ? [`<meta property="og:url" content="${canonical}" />`] : []),
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="robots" content="${escape(seo.robots)}" />`,
    `<meta name="geo.region" content="US-CA" />`,
    `<meta name="geo.placename" content="Fresno, California" />`,
  ].join('\n    ');
}
