import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const publicDir = path.resolve('public');
const source = path.join(publicDir, 'favicon.svg');

const pngTargets = [
  { size: 32, file: 'favicon-32.png' },
  { size: 180, file: 'favicon-180.png' },
  { size: 192, file: 'favicon-192.png' },
  { size: 512, file: 'favicon-512.png' },
];

for (const { size, file } of pngTargets) {
  await sharp(source)
    .resize(size, size)
    .png()
    .toFile(path.join(publicDir, file));
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) => sharp(source).resize(size, size).png().toBuffer()),
);

const ico = await pngToIco(icoBuffers);
await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico);
