#!/usr/bin/env node
/**
 * Renders the reviewed social drafts into 1080x1350 PNG cards.
 *
 * The drafts in social/posts are the input, not the data files, so what gets
 * drawn is exactly what a human read and approved. Each card is drawn with the
 * app's own faces (fonts/ holds the ttf copies, because neither fontconfig nor
 * resvg can read a woff2) and the app's own palette (the tokens in
 * src/app/globals.css), so a card looks like a page that walked off the site.
 *
 * Sharp's text input is Pango, which is the reason for the shape of this file:
 * one text block per composite layer, measured after rendering, then positioned
 * by arithmetic. That is also what makes auto-fitting possible, since a block
 * reports its own height and a too-long verse can drop a size and try again.
 *
 * Safety: every verse is re-read from the vendored WEB and compared against the
 * draft's front matter before anything is drawn, so a card cannot publish text
 * the app does not hold.
 *
 * Usage:
 *   node scripts/render-social-cards.mjs           render every draft
 *   node scripts/render-social-cards.mjs --only 007 render one draft
 *
 * Cards are always redrawn: a draft is reviewed, then rendered, and a stale PNG
 * on disk is worse than a wasted second.
 */
import { mkdir, readFile, readdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import { verses } from "../src/data/scripture.ts";
import { connections } from "../src/data/connections.ts";
import { joinPassage, parseRef } from "../src/data/ref.ts";
import { SITE_URL } from "../src/lib/site.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const postDir = resolve(root, "social/posts");
const cardDir = resolve(root, "social/cards");

// ---- the palette, straight from src/app/globals.css -------------------------

const PARCHMENT = "#fbf7ee";
const CREAM = "#f4ecdc";
const INK = "#26241d";
const INK_SOFT = "#625e51";
const INK_FAINT = "#6f6856";
const GOLD = "#a07c2e";
const GOLD_SOFT = "#cdb77e";
const LINE = "#e6ddc9";

// ---- the geometry -----------------------------------------------------------

const W = 1080;
const H = 1350;
const INSET = 56;
const CONTENT_W = 860;
const LEFT = (W - CONTENT_W) / 2;

/** Vertical rooms, as `[top, bottom]`. Each text block is centred in its room. */
const ROOM_LABEL = [236, 300];
const ROOM_VERSE = [320, 1080];
/** Slide 3 and 4 centre a two-part group (body plus its footnote), so the gap
 *  stays constant while the group as a whole keeps to the optical centre. */
const ROOM_GROUP = [390, 1150];
// Kept inside the central 1080 square, because a feed thumbnail may crop the
// 4:5 card to a square and the counter should not be the thing that vanishes.
const COUNTER_Y = 1180;

// ---- the faces --------------------------------------------------------------

const FONT_DIR = resolve(root, "fonts");
const FACES = {
  serif: resolve(FONT_DIR, "Fraunces-Regular.ttf"),
  serifItalic: resolve(FONT_DIR, "Fraunces-Italic.ttf"),
  sans: resolve(FONT_DIR, "Inter-Regular.ttf"),
};

// ---- text layers ------------------------------------------------------------

/** Pango markup swallows these three characters, so a verse containing an
 *  ampersand would otherwise render as garbage or nothing at all. */
const escapeMarkup = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * One text block, drawn transparent so it can be composited onto the card.
 * `width` is the wrap width; Pango centres within it, and the block comes back
 * cropped to its widest line, so callers must centre using the returned width.
 */
async function textBlock(text, { face, family, size, color, tracking = 0, align = "centre" }) {
  const markup =
    `<span foreground="${color}"${tracking ? ` letter_spacing="${tracking}"` : ""}>` +
    `${escapeMarkup(text)}</span>`;
  const { data, info } = await sharp({
    text: {
      text: markup,
      font: `${family} ${size}`,
      fontfile: face,
      width: CONTENT_W,
      align,
      rgba: true,
      dpi: 72,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height, size };
}

/**
 * The largest size in `sizes` whose block still fits `maxHeight`. Type that
 * overflows is worse than type that is smaller, so this refuses to return an
 * overflowing block: if nothing fits, the smallest size wins and the caller is
 * told, because a card with clipped scripture must never ship quietly.
 */
async function fit(text, options, sizes, maxHeight) {
  let block = null;
  for (const size of sizes) {
    block = await textBlock(text, { ...options, size });
    if (block.height <= maxHeight) return block;
  }
  block.overflow = true;
  return block;
}

// ---- composition ------------------------------------------------------------

/** The cream card, its hairline, and nothing else. */
function frame() {
  return sharp(
    Buffer.from(
      `<svg width="${W}" height="${H}">` +
        `<rect width="${W}" height="${H}" fill="${PARCHMENT}"/>` +
        `<rect x="${INSET}" y="${INSET}" width="${W - INSET * 2}" height="${H - INSET * 2}" fill="${CREAM}" rx="6"/>` +
        `<rect x="${INSET + 0.5}" y="${INSET + 0.5}" width="${W - INSET * 2 - 1}" height="${H - INSET * 2 - 1}" fill="none" stroke="${LINE}" stroke-width="1" rx="6"/>` +
        `</svg>`
    )
  );
}

/** Centre a block horizontally in the content column. */
const centredLeft = (block) => Math.round(LEFT + (CONTENT_W - block.width) / 2);

/** Centre a block vertically in a room. */
const roomTop = (block, [top, bottom]) => Math.round(top + (bottom - top - block.height) / 2);

const counter = (n) =>
  textBlock(`${n} / 4`, {
    face: FACES.sans,
    family: "Inter",
    size: 15,
    color: INK_FAINT,
    tracking: 3400,
  });

/** The label with a short gold rule under it, shared by all four slides. */
async function header(text) {
  const block = await textBlock(text.toUpperCase(), {
    face: FACES.sans,
    family: "Inter",
    size: 19,
    color: GOLD,
    tracking: 4200,
  });
  const rule = await sharp({
    create: { width: 40, height: 2, channels: 4, background: GOLD_SOFT },
  })
    .png()
    .toBuffer();
  return {
    block,
    rule,
    layers: [
      { input: block.data, left: centredLeft(block), top: ROOM_LABEL[0] },
      { input: rule, left: Math.round(W / 2 - 20), top: ROOM_LABEL[0] + block.height + 30 },
    ],
  };
}

/**
 * On a card, a verse that opens mid-sentence reads as a typo. The repository's
 * quoting rule already allows capitalisation at the edges (verify-quotes
 * normalises case), so the drawn card lifts the first letter while the draft
 * keeps the verse exactly as the WEB has it.
 */
const displayText = (text) => (/^[a-z]/.test(text) ? text[0].toUpperCase() + text.slice(1) : text);

// ---- the four slides --------------------------------------------------------

async function slideVerse(post, { ref, text, n }) {
  const head = await header(ref);
  const verse = await fit(
    displayText(text),
    { face: FACES.serifItalic, family: "Fraunces Italic", color: INK },
    [74, 68, 62, 56, 50, 45, 40, 36, 32],
    ROOM_VERSE[1] - ROOM_VERSE[0]
  );
  const foot = await counter(n);

  const layers = [
    ...head.layers,
    { input: verse.data, left: centredLeft(verse), top: roomTop(verse, ROOM_VERSE) },
    { input: foot.data, left: centredLeft(foot), top: COUNTER_Y },
  ];
  return { pipeline: frame().composite(layers), overflow: verse.overflow, sizes: [verse.size] };
}

/**
 * The pair line, in the same order as the verse slides. The draft records that
 * order in `first`, and the cover has to agree with the two slides behind it or
 * it advertises a sequence the swipe does not show.
 */
const orderedPair = (post) =>
  post.first === "to" ? `${post.to}  ·  ${post.from}` : `${post.from}  ·  ${post.to}`;

async function slideConnection(post) {
  const head = await header(post.kindLabel);
  const note = await fit(
    displayText(post.note),
    { face: FACES.serif, family: "Fraunces", color: INK },
    [58, 52, 46, 42, 38, 34, 30, 27],
    ROOM_GROUP[1] - ROOM_GROUP[0] - 120
  );
  const pair = await textBlock(orderedPair(post), {
    face: FACES.sans,
    family: "Inter",
    size: 17,
    color: INK_FAINT,
    tracking: 1200,
  });
  const foot = await counter(3);

  const gap = 104;
  const groupTop = Math.round(
    (ROOM_GROUP[0] + ROOM_GROUP[1] - (note.height + gap + pair.height)) / 2
  );
  const layers = [
    ...head.layers,
    { input: note.data, left: centredLeft(note), top: groupTop },
    { input: pair.data, left: centredLeft(pair), top: groupTop + note.height + gap },
    { input: foot.data, left: centredLeft(foot), top: COUNTER_Y },
  ];
  return { pipeline: frame().composite(layers), overflow: note.overflow, sizes: [note.size] };
}

/**
 * The cover in claim-first mode: the kind of connection, the claim itself, and
 * the pair it rests on. Same geometry as the old slide 3, because it is the same
 * block of text; only its position in the carousel changed.
 */
async function slideClaim(post) {
  const head = await header(post.kindLabel);
  const claim = await fit(
    displayText(post.note),
    { face: FACES.serif, family: "Fraunces", color: INK },
    [62, 56, 50, 46, 42, 38, 34, 30, 27],
    ROOM_GROUP[1] - ROOM_GROUP[0] - 120
  );
  const pair = await textBlock(orderedPair(post), {
    face: FACES.sans,
    family: "Inter",
    size: 17,
    color: INK_FAINT,
    tracking: 1200,
  });
  const foot = await counter(1);

  const gap = 104;
  const groupTop = Math.round(
    (ROOM_GROUP[0] + ROOM_GROUP[1] - (claim.height + gap + pair.height)) / 2
  );
  const layers = [
    ...head.layers,
    { input: claim.data, left: centredLeft(claim), top: groupTop },
    { input: pair.data, left: centredLeft(pair), top: groupTop + claim.height + gap },
    { input: foot.data, left: centredLeft(foot), top: COUNTER_Y },
  ];
  return { pipeline: frame().composite(layers), overflow: claim.overflow, sizes: [claim.size] };
}

/** The bare host, not the study's deep path: the bio link lands on the front
 *  page, so printing a long path on the card would promise a destination the
 *  reader cannot reach by tapping anything. Guarded the same way layout.tsx
 *  guards its metadataBase, so a typo in SITE_URL cannot kill a render. */
function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return "glorystudy.com";
  }
}
const HOST = hostOf(SITE_URL);

async function slideStudy(post) {
  const head = await header("Keep reading");
  const question = await fit(
    post.question ?? "Read the whole chapter",
    { face: FACES.serifItalic, family: "Fraunces Italic", color: INK },
    [68, 62, 56, 50, 45, 40, 36],
    ROOM_GROUP[1] - ROOM_GROUP[0] - 140
  );
  const url = await textBlock(HOST, {
    face: FACES.sans,
    family: "Inter",
    size: 22,
    color: INK_SOFT,
    tracking: 300,
  });
  const foot = await counter(4);

  // Unlike slide 3, the two parts here are not a group: the question sits in the
  // optical centre and the url anchors the foot, the way a colophon would.
  const urlTop = 1050;
  const layers = [
    ...head.layers,
    {
      input: question.data,
      left: centredLeft(question),
      top: roomTop(question, [ROOM_GROUP[0], urlTop - 70]),
    },
    { input: url.data, left: centredLeft(url), top: urlTop },
    { input: foot.data, left: centredLeft(foot), top: COUNTER_Y },
  ];
  return {
    pipeline: frame().composite(layers),
    overflow: question.overflow,
    sizes: [question.size],
  };
}

// ---- reading the drafts -----------------------------------------------------

function parseFront(raw) {
  const block = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!block) return null;
  try {
    return JSON.parse(block[1]);
  } catch {
    return null;
  }
}

/** The vendored WEB text for a ref, or null. Same lookup the app uses. */
function verseText(ref) {
  const parsed = parseRef(ref);
  return parsed ? joinPassage((key) => verses[key], parsed) : null;
}

/**
 * Refuse to draw a draft that has drifted from its sources. A card is a
 * quotation with no context around it, so it is the last place that should ever
 * show text the app cannot back up.
 *
 * The note is checked here as well as in `--check`, because slide 1 is now the
 * note: the one sentence the account is built on is the last thing that should
 * be able to change without anyone noticing.
 */
function verify(post, file) {
  const problems = [];

  // Required fields, checked before use: a draft with a missing ref would
  // otherwise throw a TypeError out of parseRef and abort the whole run.
  for (const field of ["id", "from", "to", "kindLabel", "note", "cover", "first"]) {
    if (typeof post[field] !== "string" || post[field] === "") problems.push(`no usable "${field}"`);
  }
  if (typeof post.text?.from !== "string") problems.push('no usable "text.from"');
  if (typeof post.text?.to !== "string") problems.push('no usable "text.to"');
  if (problems.length > 0) return problems.map((p) => `${file}: ${p}`);

  const actualFrom = verseText(post.from);
  const actualTo = verseText(post.to);
  if (!actualFrom) problems.push(`${post.from} does not resolve`);
  else if (actualFrom !== post.text.from) problems.push(`${post.from} drifted from the vendored WEB`);
  if (!actualTo) problems.push(`${post.to} does not resolve`);
  else if (actualTo !== post.text.to) problems.push(`${post.to} drifted from the vendored WEB`);

  const planted = (connections[post.from] ?? []).find((e) => e.target === post.to)?.note;
  if (planted === undefined) problems.push(`${post.from} -> ${post.to} is no longer an edge`);
  else if (planted !== post.note)
    problems.push(`note differs from connections.ts, so the cover would say something the app does not`);

  return problems.map((p) => `${file}: ${p}`);
}

// ---- main -------------------------------------------------------------------

async function main() {
  const argv = process.argv.slice(2);
  const only = argv.includes("--only") ? argv[argv.indexOf("--only") + 1] : null;

  let files = [];
  try {
    files = (await readdir(postDir)).filter((f) => f.endsWith(".md")).sort();
  } catch {
    console.log("No social/posts yet. Run `npm run export:social` first.");
    process.exit(1);
  }

  if (only) files = files.filter((f) => f.startsWith(only));
  if (files.length === 0) {
    console.log(only ? `No draft starting with "${only}".` : "No drafts to render.");
    process.exit(1);
  }

  await mkdir(cardDir, { recursive: true });

  const problems = [];
  const written = [];
  let overflowed = 0;

  for (const file of files) {
    const raw = await readFile(resolve(postDir, file), "utf8");
    const post = parseFront(raw);
    if (!post) {
      problems.push(`${file}: malformed front matter`);
      continue;
    }

    const drift = verify(post, file);
    if (drift.length > 0) {
      problems.push(...drift);
      continue;
    }

    const outDir = resolve(cardDir, post.id);
    await mkdir(outDir, { recursive: true });

    // The draft decides, and the renderer obeys: `first` names which end of the
    // edge leads, `cover` names what slide 1 shows. Neither is recomputed here,
    // so what got reviewed is what gets drawn.
    const firstRef = post.first === "to" ? post.to : post.from;
    const firstText = post.first === "to" ? post.text.to : post.text.from;
    const secondRef = post.first === "to" ? post.from : post.to;
    const secondText = post.first === "to" ? post.text.from : post.text.to;

    const sheets =
      post.cover === "claim"
        ? [
            await slideClaim(post),
            await slideVerse(post, { ref: firstRef, text: firstText, n: 2 }),
            await slideVerse(post, { ref: secondRef, text: secondText, n: 3 }),
            await slideStudy(post),
          ]
        : [
            await slideVerse(post, { ref: firstRef, text: firstText, n: 1 }),
            await slideVerse(post, { ref: secondRef, text: secondText, n: 2 }),
            await slideConnection(post),
            await slideStudy(post),
          ];

    for (const [i, sheet] of sheets.entries()) {
      if (sheet.overflow) overflowed += 1;
      await sheet.pipeline.png({ compressionLevel: 9 }).toFile(resolve(outDir, `${i + 1}.png`));
    }
    written.push(post.id);
  }

  if (problems.length > 0) {
    for (const p of problems) console.log(`SKIP ${p}`);
  }

  // A full run owns the directory: folders left behind by a draft that was
  // deleted or renumbered would look like posts that still exist. Only when the
  // run was clean, though, so a drift error never deletes good cards.
  if (!only && problems.length === 0) {
    const keep = new Set(written);
    for (const entry of await readdir(cardDir)) {
      if (!keep.has(entry)) await rm(resolve(cardDir, entry), { recursive: true, force: true });
    }
  }

  console.log(`Rendered ${written.length} posts to social/cards (${written.join(", ")}).`);
  if (overflowed > 0) {
    console.log(
      `${overflowed} text block(s) did not fit even at the smallest size. Those cards are clipped: shorten the text or split the slide.`
    );
  }
  if (problems.length > 0) process.exit(1);
}

await main();
