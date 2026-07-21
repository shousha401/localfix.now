import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

// Single source of truth for every prerendered route. `sitemap: null` keeps a
// route out of sitemap.xml (noindex pages). `lastmod` is the date the page's
// CONTENT last changed — update it by hand when you change a page's copy,
// schema, or layout. It is deliberately NOT the build date: re-stamping every
// deploy teaches Google to distrust the signal.
//
// App.tsx's <Route> table is still defined separately (it maps paths to
// components); the render loop below fails the build if a route listed here
// is missing there, so the two cannot silently drift.
const ROUTES = [
  { path: '/', sitemap: { priority: '1.0', lastmod: '2026-07-19' } },
  { path: '/fresno-web-design', sitemap: { priority: '0.9', lastmod: '2026-07-19' } },
  { path: '/workflow-automation', sitemap: { priority: '0.9', lastmod: '2026-07-19' } },
  { path: '/ai-chatbot', sitemap: { priority: '0.9', lastmod: '2026-07-19' } },
  { path: '/website-fixes', sitemap: { priority: '0.9', lastmod: '2026-07-19' } },
  { path: '/about', sitemap: { priority: '0.7', lastmod: '2026-07-19' } },
  { path: '/thank-you', sitemap: null },
];

const SITE_ORIGIN = 'https://localfix.now';

// Marker unique to the NotFound page. If a route listed above renders it,
// the route exists here but not in App.tsx — a drift that would silently
// ship a 404 for a real URL.
const NOT_FOUND_MARKER = 'This page wandered off.';

const template = await readFile(join(DIST, 'index.html'), 'utf-8');

// Import the SSR bundle produced by `vite build --ssr`
const { render } = await import(pathToFileURL(join(DIST, 'server', 'entry-server.js')).href);

const errors = [];

for (const { path: route } of ROUTES) {
  try {
    const { html, head } = render(route);

    if (html.includes(NOT_FOUND_MARKER)) {
      throw new Error(
        `route renders the 404 page — it is listed in scripts/prerender.mjs but has no matching <Route> in src/App.tsx`
      );
    }

    // Every /projects/ image the markup references (including the -640w.webp
    // srcset variants derived in RecentWork.tsx) must exist in dist —
    // optimize:images is a manual step, so catch a missing variant here
    // instead of shipping a broken srcset.
    for (const [, imgPath] of html.matchAll(/["' ](\/projects\/[^"'\s,]+\.(?:webp|png|jpe?g))/g)) {
      if (!existsSync(join(DIST, imgPath.slice(1)))) {
        throw new Error(
          `${imgPath} is referenced by ${route} but missing from dist — run \`npm run optimize:images\` and commit the output`
        );
      }
    }

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

// Generate sitemap.xml from the same route table. <lastmod> is each route's
// hand-maintained content-change date (see ROUTES above), not the build date.
const sitemapRoutes = ROUTES.filter((r) => r.sitemap);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemapRoutes.map(
    ({ path, sitemap: { priority, lastmod } }) =>
      `  <url>\n` +
      `    <loc>${SITE_ORIGIN}${path}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`
  ).join('\n') +
  `\n</urlset>\n`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap);
console.log(`  generated sitemap.xml (${sitemapRoutes.length} urls)`);

// The SSR bundle (and the public assets Vite copies alongside it) is only
// needed during prerendering. Remove it so it is not deployed publicly.
await rm(join(DIST, 'server'), { recursive: true, force: true });

if (errors.length) {
  console.error(`\n${errors.length} route(s) failed to prerender.`);
  process.exit(1);
}

console.log(`\nPrerendered ${ROUTES.length} routes.`);
