import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4321;

const ROUTES = [
  '/',
  '/fresno-web-design',
  '/workflow-automation',
  '/ai-chatbot',
  '/website-fixes',
  '/about',
  '/thank-you',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.map': 'application/json; charset=utf-8',
};

// Read template ONCE so per-route writes don't pollute subsequent prerenders.
const TEMPLATE = await readFile(join(DIST, 'index.html'), 'utf-8');

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let filePath = join(DIST, decodeURIComponent(url.pathname));

    if (existsSync(filePath)) {
      const s = await stat(filePath);
      if (s.isDirectory()) filePath = join(filePath, 'index.html');
    }

    // Serve real static assets from disk, but always serve the in-memory
    // template for HTML routes so we never read a partially-rewritten file.
    const ext = extname(filePath);
    const isHtmlPath = ext === '' || ext === '.html';

    if (!isHtmlPath && existsSync(filePath) && (await stat(filePath)).isFile()) {
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      res.end(await readFile(filePath));
      return;
    }

    res.setHeader('Content-Type', MIME['.html']);
    res.end(TEMPLATE);
  } catch (err) {
    res.statusCode = 500;
    res.end(String(err));
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`Prerender server listening on http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const errors = [];

try {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60_000,
      });

      // Wait for Helmet to inject the per-route <title>.
      await page
        .waitForFunction(() => document.querySelector('title') !== null, {
          timeout: 15_000,
        })
        .catch(() => {});

      // Let GSAP intro animations settle so captured inline styles match
      // the final visible state and React can hydrate without re-animating.
      await new Promise((r) => setTimeout(r, 2000));

      const html = await page.content();

      const outputPath =
        route === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route.slice(1), 'index.html');

      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, html);
      console.log(`  prerendered ${route} -> ${outputPath.replace(DIST, 'dist')}`);
    } catch (err) {
      errors.push({ route, error: err });
      console.error(`  FAILED ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
  server.close();
}

if (errors.length) {
  console.error(`\n${errors.length} route(s) failed to prerender.`);
  process.exit(1);
}

console.log(`\nPrerendered ${ROUTES.length} routes.`);
