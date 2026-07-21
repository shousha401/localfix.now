// Generates WebP versions of the project screenshots in public/projects/,
// plus a 640px-wide "-640w.webp" variant of each for srcset (most display
// slots are ≤640px, so mobile never needs the full-size file).
// Run with `npm run optimize:images` whenever you add or change a screenshot.
// The .webp files are committed and served via <picture> (see RecentWork.tsx
// and AboutBlock.tsx), with the original PNG/JPEG as the fallback.
//
// Existing outputs are skipped so re-runs don't churn committed bytes; pass
// --force to regenerate everything (e.g. after replacing a source image).
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', 'public', 'projects');
const QUALITY = 80;
const VARIANT_WIDTH = 640;
const force = process.argv.includes('--force');

const files = await readdir(DIR);
const sources = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

let generated = 0;
let savedBytes = 0;

for (const file of sources) {
  const input = join(DIR, file);
  const stem = basename(file, extname(file));

  const fullOutput = join(DIR, `${stem}.webp`);
  if (force || !existsSync(fullOutput)) {
    await sharp(input).webp({ quality: QUALITY }).toFile(fullOutput);
    const before = (await stat(input)).size;
    const after = (await stat(fullOutput)).size;
    savedBytes += before - after;
    console.log(
      `  ${file} -> ${basename(fullOutput)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
    );
    generated++;
  }

  // Every source gets a -640w variant (withoutEnlargement keeps already-small
  // images as-is) so the srcset in RecentWork.tsx/AboutBlock.tsx never
  // references a missing file.
  const variantOutput = join(DIR, `${stem}-${VARIANT_WIDTH}w.webp`);
  if (force || !existsSync(variantOutput)) {
    await sharp(input)
      .resize({ width: VARIANT_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(variantOutput);
    const size = (await stat(variantOutput)).size;
    console.log(`  ${file} -> ${basename(variantOutput)}  ${(size / 1024).toFixed(0)}KB`);
    generated++;
  }
}

console.log(`\nGenerated ${generated} WebP files. Saved ~${(savedBytes / 1024).toFixed(0)}KB vs originals.`);
