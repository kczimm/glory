// Scratch: renders candidate logos side-by-side for review (then decide).
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const STAR = "M90 36 L112.3 67.7 L144 90 L112.3 112.3 L90 144 L67.7 112.3 L36 90 L67.7 67.7 Z";
const SPARK_1 = "M131 41.5 L134.1 52.1 L138.5 49 L134.1 45.9 L131 56.5 L127.9 45.9 L123.5 49 L127.9 52.1 Z";
const SPARK_2 = "M49 123.5 L52.1 134.1 L56.5 131 L52.1 127.9 L49 138.5 L45.9 127.9 L41.5 131 L45.9 134.1 Z";

function defs() {
  return `
  <radialGradient id="bg" cx="50%" cy="34%" r="88%">
    <stop offset="0%" stop-color="#fffef8"/>
    <stop offset="55%" stop-color="#fbf7ee"/>
    <stop offset="100%" stop-color="#efe4cb"/>
  </radialGradient>
  <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
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
  </linearGradient>`;
}

function bg() {
  return `<rect width="180" height="180" fill="url(#bg)"/>`;
}
function border() {
  return `<rect x="1.5" y="1.5" width="177" height="177" fill="none" stroke="#e6dbc0" stroke-width="2.5" opacity="0.85"/>`;
}
function rings() {
  return `
  <circle cx="90" cy="96" r="72" fill="none" stroke="url(#ring)" stroke-width="2" opacity="0.5"/>
  <circle cx="90" cy="96" r="62" fill="none" stroke="#e6ddc9" stroke-width="1.5" opacity="0.9"/>`;
}
function sparkles() {
  return `<path d="${SPARK_1}" fill="#c9a951" opacity="0.7"/><path d="${SPARK_2}" fill="#c9a951" opacity="0.5"/>`;
}

// Cross as two rounded rects (same gold fill -> reads as one cross)
function crossRect() {
  return `
  <rect x="56" y="85" width="68" height="22" rx="11" fill="url(#gold)" stroke="#6f5420" stroke-width="2"/>
  <rect x="79" y="44" width="22" height="104" rx="11" fill="url(#gold)" stroke="#6f5420" stroke-width="2"/>`;
}

// Cross as a single chiseled path (round inner corners), plus gloss
const CROSS_PATH =
  "M90 46 C98 46 98 68 98 84 C116 84 132 88 132 96 C132 104 116 108 98 108 C98 124 96 146 90 146 C84 146 82 124 82 108 C64 108 48 104 48 96 C48 88 64 84 82 84 C82 68 82 46 90 46 Z";

function crossChiseled() {
  return `<path d="${CROSS_PATH}" fill="url(#gold)" stroke="#6f5420" stroke-width="2" stroke-linejoin="round"/>`;
}

// Radiant rays behind cross (glory) - faint gold, clipped to circle
function rays() {
  const lines = [];
  for (let a = 0; a < 360; a += 30) {
    const rad = (a * Math.PI) / 180;
    const x1 = 90 + Math.cos(rad) * 28;
    const y1 = 96 + Math.sin(rad) * 28;
    const x2 = 90 + Math.cos(rad) * 78;
    const y2 = 96 + Math.sin(rad) * 78;
    lines.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#c9a951" stroke-width="3" opacity="0.5"/>`);
  }
  return lines.join("\n");
}

const CURRENT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${defs()}
${bg()}${border()}
  <circle cx="90" cy="90" r="70" fill="none" stroke="url(#ring)" stroke-width="2" opacity="0.5"/>
  <circle cx="90" cy="90" r="60" fill="none" stroke="#e6ddc9" stroke-width="1.5" opacity="0.9"/>
  <g clip-path="url(#c)"><path d="${STAR}" fill="url(#gold)" stroke="#6f5420" stroke-width="2" stroke-linejoin="round"/><rect width="180" height="180" fill="url(#gloss)"/></g>
  <path d="${SPARK_1}" fill="#c9a951" opacity="0.75"/><path d="${SPARK_2}" fill="#c9a951" opacity="0.55"/>
</svg>`;

const A_CLASSIC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${defs()}
${bg()}${border()}${rings()}${sparkles()}
  ${crossRect()}
</svg>`;

const B_RADIANT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${defs()}
${bg()}${border()}
  <clipPath id="halo"><circle cx="90" cy="96" r="74"/></clipPath>
  <g clip-path="url(#halo)" opacity="0.8">${rays()}</g>
  ${sparkles()}
  ${crossChiseled()}
</svg>`;

const C_HALO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">${defs()}
${bg()}${border()}
  <circle cx="90" cy="96" r="66" fill="none" stroke="url(#ring)" stroke-width="4" opacity="0.7"/>
  <circle cx="90" cy="96" r="58" fill="none" stroke="#e6ddc9" stroke-width="1.5" opacity="0.8"/>
  ${crossRect()}
</svg>`;

const candidates = [
  ["CURRENT", CURRENT],
  ["A. Classic Cross", A_CLASSIC],
  ["B. Radiant Cross", B_RADIANT],
  ["C. Cross in Halo", C_HALO],
];

(async () => {
  const cell = 220;
  const pad = 26;
  const labelH = 40;
  const W = candidates.length * (cell + pad) + pad;
  const H = cell + labelH + 2 * pad;
  const background = { width: W, height: H, channels: 4, background: "#3a3830" };
  const comp = [];
  candidates.forEach(([label, svg], i) => {
    const left = pad + i * (cell + pad);
    const top = pad;
    comp.push({ input: sharp(Buffer.from(svg)).resize(cell, cell).png().toBuffer(), left, top });
    comp.push({ input: labelText(label, cell, pad), left, top });
  });
  const inputs = await Promise.all(
    comp.map(async (c) => ({ input: await c.input, left: c.left, top: c.top }))
  );
  await sharp({ create: background })
    .composite(inputs)
    .png()
    .toFile("/tmp/glory-logo-preview.png");
  console.log("wrote /tmp/glory-logo-preview.png", W + "x" + H);
  // also write a big single of each for close inspection
  for (const [label, svg] of candidates) {
    const safe = label.replace(/[^A-Za-z]/g, "");
    await sharp(Buffer.from(svg)).resize(360, 360).png().toFile(`/tmp/glory-${safe}.png`);
  }
  console.log("wrote individual 360px previews to /tmp/glory-*.png");
})();

function labelText(label, cell, pad) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${cell}" height="44">
  <text x="${cell / 2}" y="16" font-family="Helvetica, Arial, sans-serif" font-size="15" fill="#e9dfc4" text-anchor="middle">${label}</text>
  </svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}
