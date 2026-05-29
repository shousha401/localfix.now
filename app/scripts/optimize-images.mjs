// Generates WebP versions of the project screenshots in public/projects/.
// Run with `npm run optimize:images` whenever you add or change a screenshot.
// The .webp files are committed and served via <picture> (see RecentWork.tsx
// and AboutBlock.tsx), with the original PNG/JPEG as the fallback.
import { readdir, stat } from 'node:fs/promises';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', 'public', 'projects');
const QUALITY = 80;

const files = await readdir(DIR);
const sources = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

let converted = 0;
let savedBytes = 0;

for (const file of sources) {
  const input = join(DIR, file);
  const output = join(DIR, basename(file, extname(file)) + '.webp');
  await sharp(input).webp({ quality: QUALITY }).toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  savedBytes += before - after;
  console.log(
    `  ${file} -> ${basename(output)}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  );
  converted++;
}

console.log(`\nConverted ${converted} images to WebP. Saved ~${(savedBytes / 1024).toFixed(0)}KB total.`);
