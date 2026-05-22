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

// The SSR bundle (and the public assets Vite copies alongside it) is only
// needed during prerendering. Remove it so it is not deployed publicly.
await rm(join(DIST, 'server'), { recursive: true, force: true });

if (errors.length) {
  console.error(`\n${errors.length} route(s) failed to prerender.`);
  process.exit(1);
}

console.log(`\nPrerendered ${ROUTES.length} routes.`);
