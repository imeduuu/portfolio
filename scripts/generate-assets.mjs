import { stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const screenshotSource = resolve(root, 'scripts', 'assets', 'cancha.png');
const screenshotOutput = resolve(root, 'public', 'projects', 'cancha.webp');
const ogOutput = resolve(root, 'public', 'og-image.png');

const ogImage = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111a2d"/>
      <stop offset="1" stop-color="#0b1020"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#80e4d0"/>
      <stop offset="1" stop-color="#9caeff"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#9caeff" stroke-opacity=".08"/>
    </pattern>
    <radialGradient id="glow">
      <stop stop-color="#80e4d0" stop-opacity=".12"/>
      <stop offset="1" stop-color="#80e4d0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <ellipse cx="985" cy="275" rx="360" ry="310" fill="url(#glow)"/>
  <path d="M72 78h48" stroke="#80e4d0" stroke-width="3"/>
  <text x="136" y="84" fill="#9aa8bf" font-family="Arial,sans-serif" font-size="16" letter-spacing="3">PORTAFOLIO · DESARROLLO DE SOFTWARE</text>
  <text x="72" y="232" fill="#eef1f8" font-family="Arial,sans-serif" font-size="66" font-weight="700" letter-spacing="-2">Eduardo</text>
  <text x="72" y="310" fill="#eef1f8" font-family="Arial,sans-serif" font-size="66" font-weight="700" letter-spacing="-2">Domínguez<tspan fill="#80e4d0">.</tspan></text>
  <text x="74" y="405" fill="#80e4d0" font-family="Arial,sans-serif" font-size="18" font-weight="600">Desarrollador full-stack · TypeScript, React, NestJS, Java</text>
  <path d="M74 493h68" stroke="url(#accent)" stroke-width="3"/>
  <text x="74" y="531" fill="#9aa8bf" font-family="Arial,sans-serif" font-size="14" letter-spacing="2">CHILE · PORTAFOLIO</text>
  <circle cx="933" cy="315" r="177" fill="#111a2d" fill-opacity=".72" stroke="#26324a" stroke-width="2"/>
  <circle cx="933" cy="315" r="148" fill="none" stroke="url(#accent)" stroke-opacity=".65" stroke-width="1.5"/>
  <circle cx="933" cy="315" r="118" fill="none" stroke="#9caeff" stroke-opacity=".2" stroke-width="1"/>
  <text x="933" y="344" text-anchor="middle" fill="url(#accent)" font-family="Arial,sans-serif" font-size="76" font-weight="700" letter-spacing="-5">ED.</text>
  <circle cx="933" cy="138" r="5" fill="#80e4d0"/>
  <circle cx="1110" cy="315" r="5" fill="#9caeff"/>
  <path d="M72 586h1056" stroke="#26324a" stroke-width="1"/>
  <text x="1128" y="611" text-anchor="end" fill="#8190a8" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">ED · 01</text>
</svg>`;

await sharp(screenshotSource)
  .webp({ quality: 86, effort: 6, smartSubsample: true })
  .toFile(screenshotOutput);

const { size } = await stat(screenshotOutput);
if (size >= 200 * 1024) {
  throw new Error(`Cancha WebP is ${size} bytes; expected less than 200 KB.`);
}

await sharp(Buffer.from(ogImage)).png({ compressionLevel: 9 }).toFile(ogOutput);

console.log(`Cancha WebP: ${size} bytes`);
console.log('Open Graph image: 1200x630 PNG');
