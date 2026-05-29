import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const ROUTES = [
  '/',
  '/fresno-web-design',
  '/workflow-automation',
  '/ai-chatbot',
  '/website-fixes',
  '/about',
  '/thank-you',
];

const SITE_ORIGIN = 'https://localfix.now';

// Indexable routes for the sitemap (excludes the noindex /thank-you and 404
// pages). Regenerated on every build so <lastmod> never goes stale.
const SITEMAP_URLS = [
  { path: '/', priority: '1.0' },
  { path: '/fresno-web-design', priority: '0.9' },
  { path: '/workflow-automation', priority: '0.9' },
  { path: '/ai-chatbot', priority: '0.9' },
  { path: '/website-fixes', priority: '0.9' },
  { path: '/about', priority: '0.7' },
];

const template = await readFile(join(DIST, 'index.html'), 'utf-8');

// Import the SSR bundle produced by `vite build --ssr`
const { render } = await import(pathToFileURL(join(DIST, 'server', 'entry-server.js')).href);

const errors = [];

for (const route of ROUTES) {
  try {
    const { html, head } = render(route);

    let output = template;

    if (head) {
      output = output.replace('</head>', `    ${head}\n  </head>`);
    }

    output = output.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outputPath =
      route === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.slice(1), 'index.html');

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, output);
    console.log(`  prerendered ${route} -> ${outputPath.replace(DIST, 'dist')}`);
  } catch (err) {
    errors.push({ route, error: String(err) });
    console.error(`  FAILED ${route}: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// Prerender the catch-all 404 page to dist/404.html. Vercel serves this
// automatically (with a real 404 status) for any path that has no matching
// file, so unknown URLs are no longer soft-200 copies of the homepage.
try {
  const { html, head } = render('/__not-found__');
  let output = template;
  if (head) {
    output = output.replace('</head>', `    ${head}\n  </head>`);
  }
  output = output.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  await writeFile(join(DIST, '404.html'), output);
  console.log('  prerendered 404 -> dist/404.html');
} catch (err) {
  errors.push({ route: '404', error: String(err) });
  console.error(`  FAILED 404: ${err instanceof Error ? err.message : String(err)}`);
}

// Generate sitemap.xml with a fresh lastmod so it never goes stale.
const lastmod = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  SITEMAP_URLS.map(
    ({ path, priority }) =>
      `  <url>\n` +
      `    <loc>${SITE_ORIGIN}${path}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`
  ).join('\n') +
  `\n</urlset>\n`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap);
console.log(`  generated sitemap.xml (${SITEMAP_URLS.length} urls, lastmod ${lastmod})`);

// The SSR bundle (and the public assets Vite copies alongside it) is only
// needed during prerendering. Remove it so it is not deployed publicly.
await rm(join(DIST, 'server'), { recursive: true, force: true });

if (errors.length) {
  console.error(`\n${errors.length} route(s) failed to prerender.`);
  process.exit(1);
}

console.log(`\nPrerendered ${ROUTES.length} routes.`);
