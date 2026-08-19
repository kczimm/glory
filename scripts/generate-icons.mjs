// Generates the Glory brand icons from one SVG source:
//   - src/app/apple-icon.png   (180x180, iOS home screen, auto-linked by Next)
//   - public/icons/icon-192.png / icon-512.png (web app manifest)
//   - src/app/icon.svg         (rounded, browser tab)
//   - src/app/favicon.ico      (classic fallback, 16/32/48 embedded PNGs)
//
// Run: node scripts/generate-icons.mjs
// The design lives in the SVG strings below; the 180x180 layout is the
// source of truth and every other size is derived from it.

import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// ---- Design (180x180, full-bleed square; iOS applies its own mask) ----
// A gold disc medallion with a parchment Latin cross "punched out" of it
// (seal / host look).

// The medallion: a parchment Latin cross is "punched out" of a gold disc
// (negative space), framed like a seal / host. The crossbar sits ABOVE the
// vertical's midpoint (long bottom arm) so it reads as a Latin cross, not a
// "+". Same fill, no stroke, so the union is seamless with no junction lines.
//   horizontal arm  x 53..127, y 79..101  (74 wide x 22 tall, center y 90)
//   vertical member x 79..101, y 48..148  (22 wide x 100 tall, center y 98)
const CROSS = `
  <g filter="url(#shadow)">
    <rect x="53" y="79" width="74" height="22" rx="11" fill="#fbf7ee"/>
    <rect x="79" y="48" width="22" height="100" rx="11" fill="#fbf7ee"/>
  </g>`;

// The 180x180 mark WITHOUT the full-bleed background (so a rounded variant
// can supply its own backdrop). Shared by both variants.
const MARK = `
  <defs>
    <radialGradient id="bg" cx="50%" cy="34%" r="88%">
      <stop offset="0%" stop-color="#fffef8"/>
      <stop offset="55%" stop-color="#fbf7ee"/>
      <stop offset="100%" stop-color="#efe4cb"/>
    </radialGradient>
    <radialGradient id="goldr" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#d8b255"/>
      <stop offset="55%" stop-color="#ba8f34"/>
      <stop offset="100%" stop-color="#966f26"/>
    </radialGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3a2f14" flood-opacity="0.18"/>
    </filter>
  </defs>
  <circle cx="90" cy="90" r="62" fill="url(#goldr)"/>
  <circle cx="90" cy="90" r="62" fill="none" stroke="#7d5f21" stroke-width="2" opacity="0.4"/>
  <circle cx="90" cy="90" r="56" fill="none" stroke="#fff" stroke-width="1" opacity="0.08"/>
  ${CROSS}
`;

const SVG_180 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="url(#bg)"/>
  <rect x="1.5" y="1.5" width="177" height="177" fill="none" stroke="#e6dbc0" stroke-width="2.5" opacity="0.85"/>
${MARK}
</svg>
`;

// Rounded-corner variant for the browser tab (favicon). Same mark, scaled
// down to 64 and set on a rounded parchment tile.
function roundedSvg() {
  const scale = 64 / 180;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#fbf7ee"/>
  <g transform="scale(${scale.toFixed(6)})">
${MARK}
  </g>
</svg>
`;
}

// ---- Rendering ----

async function renderPng(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

// ---- ICO container (Vista+ style: PNG-compressed entries) ----

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);
  let offset = 6 + 16 * count;
  const entries = [];
  for (const [i, png] of pngBuffers.entries()) {
    const size = [16, 32, 48][i] ?? 256;
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += png.length;
    entries.push(entry);
  }
  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

// ---- Write everything ----

async function main() {
  const sizes = {
    "src/app/apple-icon.png": 180,
    "public/icons/icon-192.png": 192,
    "public/icons/icon-512.png": 512,
  };
  const pngs = {};
  for (const [rel, size] of Object.entries(sizes)) {
    const buf = await renderPng(SVG_180, size);
    const abs = resolve(ROOT, rel);
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, buf);
    pngs[size] = buf;
    console.log(`wrote ${rel} (${size}x${size})`);
  }

  const tabSvg = roundedSvg();
  writeFileSync(resolve(ROOT, "src/app/icon.svg"), tabSvg);
  console.log("wrote src/app/icon.svg");

  // Classic favicon.ico from 16/32/48 renders of the rounded variant.
  const ico = buildIco([
    await renderPng(tabSvg, 16),
    await renderPng(tabSvg, 32),
    await renderPng(tabSvg, 48),
  ]);
  writeFileSync(resolve(ROOT, "src/app/favicon.ico"), ico);
  console.log(`wrote src/app/favicon.ico (${ico.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
