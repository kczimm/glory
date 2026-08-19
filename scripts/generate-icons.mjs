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

const STAR = "M90 36 L112.3 67.7 L144 90 L112.3 112.3 L90 144 L67.7 112.3 L36 90 L67.7 67.7 Z";
const SPARK_1 = "M131 41.5 L134.1 52.1 L138.5 49 L134.1 45.9 L131 56.5 L127.9 45.9 L123.5 49 L127.9 52.1 Z";
const SPARK_2 = "M49 123.5 L52.1 134.1 L56.5 131 L52.1 127.9 L49 138.5 L45.9 127.9 L41.5 131 L45.9 134.1 Z";

// The 180x180 mark WITHOUT the full-bleed background (so a rounded variant
// can supply its own backdrop). Shared by both variants.
const MARK = `
  <defs>
    <radialGradient id="bg" cx="50%" cy="34%" r="88%">
      <stop offset="0%" stop-color="#fffef8"/>
      <stop offset="55%" stop-color="#fbf7ee"/>
      <stop offset="100%" stop-color="#efe4cb"/>
    </radialGradient>
    <linearGradient id="star" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c69c3f"/>
      <stop offset="100%" stop-color="#8a6625"/>
    </linearGradient>
    <linearGradient id="gloss" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#dcc78f"/>
      <stop offset="100%" stop-color="#b2944c"/>
    </linearGradient>
    <clipPath id="starclip"><path d="${STAR}"/></clipPath>
  </defs>
  <circle cx="90" cy="90" r="70" fill="none" stroke="url(#ring)" stroke-width="2" opacity="0.5"/>
  <circle cx="90" cy="90" r="60" fill="none" stroke="#e6ddc9" stroke-width="1.5" opacity="0.9"/>
  <g clip-path="url(#starclip)">
    <path d="${STAR}" fill="url(#star)" stroke="#6f5420" stroke-width="2" stroke-linejoin="round"/>
    <rect width="180" height="180" fill="url(#gloss)"/>
  </g>
  <path d="${SPARK_1}" fill="#c9a951" opacity="0.75"/>
  <path d="${SPARK_2}" fill="#c9a951" opacity="0.55"/>
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
