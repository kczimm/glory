#!/usr/bin/env node
/**
 * Turns the knowledge graph into a reviewable queue of social posts.
 *
 * The point of this script is that it writes NOTHING. Every word it emits was
 * written by a human, reviewed in the app, and already covered by
 * `npm run verify:quotes`:
 *
 *   slide 1 / 2  the vendored WEB text of two verses        (src/data/scripture.ts)
 *   slide 3      the connection note, the pedagogy          (src/data/connections.ts)
 *   slide 4      a question the study already raises        (src/data/questions.ts)
 *
 * The one cross-reference edge nobody else on the platform has is the content:
 * "this verse is doing that verse, and here is how." No model is asked to write
 * scripture commentary, so no caption can smuggle in a paraphrase, a
 * mistranslation, or a fabrication.
 *
 * Ranking picks edges that read well as a standalone card: short enough verses,
 * a note that lands in one screenful, and a study that actually cites both ends
 * (so the call to action lands somewhere real). A greedy scheduler then keeps
 * the feed from running eight "quotes" edges in a row, or three posts from
 * Hebrews back to back.
 *
 * Usage:
 *   node scripts/export-social.mjs                build the queue (default 30 posts)
 *   node scripts/export-social.mjs --count 14     build a two-week queue
 *   node scripts/export-social.mjs --dry-run      print the queue, write nothing
 *   node scripts/export-social.mjs --why "John 3:3"  why an edge did or did not make it
 *   node scripts/export-social.mjs --check        verify committed posts against the WEB
 *   node scripts/export-social.mjs --mark 001 002 record posts as published
 *   node scripts/export-social.mjs --force        regenerate even if posts exist
 *
 * Exit codes: 0 = ok, 1 = --check found drift or a copy violation.
 */
import { access, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { connections } from "../src/data/connections.ts";
import { connectionKindLabel } from "../src/data/connections.ts";
import { questions } from "../src/data/questions.ts";
import { BIBLE_BOOKS } from "../src/data/books.ts";
import { verses } from "../src/data/scripture.ts";
import { joinPassage, parseRef } from "../src/data/ref.ts";
import { SITE_URL } from "../src/lib/site.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "social");
const postDir = resolve(outDir, "posts");
/** Where a draft goes once it has been published, so a regenerated queue can
 *  reuse the numbers without colliding with the record of what already ran. */
const archiveDir = resolve(outDir, "posted");
const statePath = resolve(outDir, "state.json");

/** Does the path exist? Used to refuse overwriting an archived draft. */
const exists = (path) =>
  access(path).then(
    () => true,
    () => false
  );

// ---- knobs ------------------------------------------------------------------

/** A card has to hold the verse without shrinking below legible type. */
const VERSE_FITS = 190;
const VERSE_TOO_LONG = 260;
/** A note has to be readable in one glance on slide 3. */
const NOTE_FITS = 150;
const NOTE_TOO_LONG = 190;

/** Not all edges are equal as a hook. Quotation and fulfilment surprise people;
 *  "same theme" is the filler of the graph, so it has to be genuinely good to
 *  outrank a weak quotes edge. */
const KIND_WEIGHT = {
  quotes: 5,
  fulfilled: 4,
  promise: 3,
  pattern: 2,
  contrast: 1.5,
  parallel: 1,
  theme: 0.5,
};

/** A note written for the study page can lean on the page around it ("the
 *  closing line", "the previous chapter"). On a standalone card those words have
 *  no referent, so flag for a human. Bare "above" and "below" are deliberately
 *  absent: "the name above every name" and "the birth from above" are theology,
 *  not navigation, and flagging them taught us nothing but noise. */
const DEICTIC =
  /\b(?:the (?:closing line|previous (?:chapter|verse)|next verse|verse (?:above|below)|passage (?:above|below)|preceding verse|following verse|line (?:above|below))|as (?:noted|said) (?:above|below)|see (?:above|below))\b/i;

/** Fixed blocks. Tune here, not in the generated files. */
const HASHTAGS = "#BibleStudy #Scripture #BibleVerse #ChristianFaith #GloryStudy";

// ---- data access ------------------------------------------------------------

const lookup = (key) => verses[key];

/** The exact WEB text for a ref, or null when it does not resolve. */
function verseText(ref) {
  const parsed = parseRef(ref);
  return parsed ? joinPassage(lookup, parsed) : null;
}

const bookOf = (ref) => parseRef(ref)?.book ?? ref;

/** Which studies cite each ref, and which refs are a study's key verses. */
function buildCitationIndex() {
  const citedBy = new Map();
  const keyVerses = new Set();
  const push = (ref, q) => {
    const list = citedBy.get(ref) ?? [];
    if (!list.includes(q)) list.push(q);
    citedBy.set(ref, list);
  };
  for (const q of questions) {
    for (const ref of q.keyVerses) {
      keyVerses.add(ref);
      push(ref, q);
    }
    for (const point of q.points) for (const ref of point.verses) push(ref, q);
  }
  return { citedBy, keyVerses };
}

const { citedBy, keyVerses } = buildCitationIndex();

/**
 * What slide 1 shows.
 *
 * `claim` leads with the connection note: the one sentence in the whole app
 * that nobody else on the platform has, stated before the reader has to swipe
 * for it. The cost is that the cover stops being a verse, so the grid reads as
 * claims in our voice rather than scripture in the Bible's. `verse` is the
 * original order, kept because the two are worth comparing over ten posts.
 */
const COVER = "claim";

/**
 * A note written for slide 3 assumes the reader has already met the verse. On a
 * cover it points at something that is not there yet: "this faith", "this
 * sentence", "The argument rests on". Those get flagged, not silently used.
 */
const POINTS_BACK =
  /\b(?:this|these|that)\s+(?:faith|sentence|word|verse|passage|argument|point|claim|promise|line|psalm|oracle|prophecy|account)\b|\bthe (?:argument|point|claim) (?:rests|lies|is)\b/i;

/**
 * A note that is a noun phrase reads as a caption, not a claim:
 *
 *   The psalm that asks for the betrayer's days to be few and for another to take his office.
 *
 * The verb lives inside the relative clause, so a naive "has a verb" test passes
 * it. This pattern is the shape those notes take. It flags for review rather than
 * scoring down, because it is a prompt to read the cover, not a verdict.
 */
const HEADLESS = /^The \w+ that \b/i;

/** Canonical book order, used to show the earlier verse first. */
const BOOK_ORDER = new Map(BIBLE_BOOKS.map((name, i) => [name, i]));

const canonIndex = (ref) => {
  const book = parseRef(ref)?.book;
  return book !== undefined && BOOK_ORDER.has(book) ? BOOK_ORDER.get(book) : Number.MAX_SAFE_INTEGER;
};

/**
 * Which end of the edge leads the two verse slides. Canonical order is not
 * chronology, but it puts the psalm before Hebrews and Isaiah before 1 Peter,
 * which is the direction the reveal should run: the original, then the echo.
 *
 * Within one book it falls through to chapter and then verse, so two verses of
 * Psalm 13 cannot be shown later-first while the draft claims canonical order.
 */
function earlierFirst(from, target) {
  const a = parseRef(from);
  const b = parseRef(target);
  if (!a || !b) return "from";
  const key = (p) => [canonIndex(p.book), p.chapter, p.from];
  const [ka, kb] = [key(a), key(b)];
  for (let i = 0; i < ka.length; i++) {
    if (ka[i] !== kb[i]) return ka[i] < kb[i] ? "from" : "to";
  }
  return "from";
}

// ---- candidates -------------------------------------------------------------

/**
 * True when a verse opens or closes speech that lives in a neighbouring verse,
 * so the card would show a dangling quote mark. Not an error, just a verse that
 * reads as a fragment once it is lifted out of its chapter.
 */
function midSpeech(verse) {
  return (
    (verse.match(/\u201c/g) ?? []).length !== (verse.match(/\u201d/g) ?? []).length
  );
}

/** One post per directed edge that resolves to real text on both ends. */
function candidates() {
  const rows = [];
  for (const [from, edges] of Object.entries(connections)) {
    for (const edge of edges) {
      const source = verseText(from);
      const target = verseText(edge.target);
      if (!source || !target) continue;

      const sourceFragment = midSpeech(source);
      const targetFragment = midSpeech(target);

      let score = KIND_WEIGHT[edge.kind] ?? 0;
      if (source.length <= VERSE_FITS && target.length <= VERSE_FITS) score += 2;
      if (source.length > VERSE_TOO_LONG || target.length > VERSE_TOO_LONG) score -= 3;
      if (edge.note.length <= NOTE_FITS) score += 1.5;
      if (edge.note.length > NOTE_TOO_LONG) score -= 1;
      if (citedBy.has(from)) score += 1;
      if (citedBy.has(edge.target)) score += 1;
      if (keyVerses.has(from)) score += 1;
      // A verse that reads whole beats a fragment at the same kind and fit.
      if (sourceFragment) score -= 1.5;
      if (targetFragment) score -= 1;

      // In claim-first mode the note is the cover, so a note that points at text
      // it was supposed to introduce cannot carry one.
      const pointsBack = POINTS_BACK.test(edge.note);
      if (COVER === "claim" && pointsBack) score -= 3;

      const flags = [];
      if (DEICTIC.test(edge.note)) flags.push("note needs a rewrite for a standalone card");
      if (COVER === "claim" && pointsBack)
        flags.push("note points back at text the cover has not shown");
      if (source.length > VERSE_TOO_LONG) flags.push(`source verse is ${source.length} chars`);
      if (target.length > VERSE_TOO_LONG) flags.push(`target verse is ${target.length} chars`);
      if (edge.note.length > NOTE_TOO_LONG) flags.push(`note is ${edge.note.length} chars`);
      if (sourceFragment) flags.push("source verse starts or ends mid-quote");
      if (targetFragment) flags.push("target verse starts or ends mid-quote");
      if (COVER === "claim" && HEADLESS.test(edge.note))
        flags.push("cover may be a noun phrase, read it as a sentence");

      rows.push({
        from,
        target: edge.target,
        kind: edge.kind,
        note: edge.note,
        source,
        targetText: target,
        score,
        flags,
        cover: COVER,
        first: earlierFirst(from, edge.target),
        study: studyFor(from, edge.target),
      });
    }
  }
  // Stable: equal scores fall back to the pair key so runs are reproducible.
  return rows.sort((a, b) => b.score - a.score || pairKey(a).localeCompare(pairKey(b)));
}

const pairKey = (row) => [row.from, row.target].sort().join(" -> ");

/** The study a reader should land on: the one that treats the source verse as a
 *  key verse if there is one, otherwise any study citing either end. */
function studyFor(from, target) {
  const citingSource = citedBy.get(from) ?? [];
  const preferred = citingSource.find((q) => q.keyVerses.includes(from));
  if (preferred) return preferred;
  if (citingSource.length > 0) return citingSource[0];
  return (citedBy.get(target) ?? [])[0] ?? null;
}

// ---- scheduling -------------------------------------------------------------

/**
 * Greedy selection over the ranked list, with the constraints a person would
 * apply by eye: do not repeat a pair, do not post the same verse twice, do not
 * run the same kind or the same book in a cluster.
 */
/**
 * Greedy selection over the ranked list, with the constraints a person would
 * apply by eye: do not repeat a pair, do not post the same verse twice, do not
 * run the same kind or the same book in a cluster.
 *
 * `explain`, when set to a verse or pair, records why that candidate lost its
 * slot, so "why is John 8:58 not in the queue" has an answer other than a shrug.
 */
function schedule(ranked, { count, posted, excluded, explain }) {
  const chosen = [];
  const usedPairs = new Set(posted.map((p) => p.pair));
  /** Every verse already used on either end. One set, not two role-specific
   *  ones: a reader who saw Luke 23:43 as a target last week should not meet it
   *  as a source this week. */
  const usedVerses = new Set();
  const recentKinds = [];
  const recentBooks = [];
  const notes = [];

  const within = (list, value, window) => list.slice(-window).filter((x) => x === value).length;
  const isTarget = (row) =>
    explain && (row.from === explain || row.target === explain || pairKey(row).includes(explain));

  // Restart the scan after every pick, so the strongest still-eligible edge wins
  // each slot. A single forward pass would burn a strong edge for good whenever
  // the diversity window happened to be full on the one slot it was reached.
  const logged = new Set();
  while (chosen.length < count) {
    let picked = false;
    for (const row of ranked) {
      let reason = null;
      if (excluded.has(row.from) || excluded.has(row.target)) reason = "excluded";
      else if (usedPairs.has(pairKey(row))) reason = "pair already used";
      else if (usedVerses.has(row.from) || usedVerses.has(row.target))
        reason = "a verse in this pair already appeared";
      else if (within(recentKinds, row.kind, 4) >= 2)
        reason = `kind budget: 3 ${row.kind} edges in the last 4`;
      else if (within(recentBooks, bookOf(row.from), 3) >= 1)
        reason = `book budget: ${bookOf(row.from)} in the last 3`;

      if (reason) {
        const key = `${chosen.length}|${row.from}|${row.target}`;
        if (isTarget(row) && !logged.has(key)) {
          logged.add(key);
          notes.push({ id: String(chosen.length + 1).padStart(3, "0"), reason, score: row.score });
        }
        continue;
      }

      chosen.push(row);
      usedPairs.add(pairKey(row));
      usedVerses.add(row.from);
      usedVerses.add(row.target);
      recentKinds.push(row.kind);
      recentBooks.push(bookOf(row.from));
      picked = true;
      break;
    }
    if (!picked) break;
  }

  chosen.notes = notes;
  return chosen;
}

// ---- rendering --------------------------------------------------------------

const slugOf = (ref) => ref.toLowerCase().replace(/\s+/g, "-").replace(/:/g, ".");
const postSlug = (row) => `${slugOf(row.from)}--${slugOf(row.target)}`;

/** The verse, then its reference on the next line. Deliberately no quote marks of
 *  our own: the WEB already quotes speech internally, wrapping that again reads
 *  as a stutter, and adding punctuation we did not earn is the first step toward
 *  a caption that misrepresents the text. */
const cite = (ref, text) => `${text}\n${ref}`;

/** The bare host the card and the caption name.
 *  Guarded the same way layout.tsx guards its metadataBase, so a typo in
 *  SITE_URL cannot kill a generation run. */
function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return "glorystudy.com";
  }
}
const HOST = hostOf(SITE_URL);

/** Matches the card: a verse that opens mid-sentence is lifted on the image, so
 *  the alt text has to describe the same thing a sighted reader sees. */
const displayed = (text) => (/^[a-z]/.test(text) ? text[0].toUpperCase() + text.slice(1) : text);

function renderPost(row, id) {
  const label = connectionKindLabel[row.kind];
  const url = row.study ? `${SITE_URL}/questions/${row.study.slug}` : SITE_URL;
  const claimFirst = row.cover === "claim";

  // Which verse leads. `first` is decided by canonical book order, so the reveal
  // runs from the earlier writing to the one echoing it.
  const first =
    row.first === "to"
      ? { ref: row.target, text: row.targetText }
      : { ref: row.from, text: row.source };
  const second =
    row.first === "to"
      ? { ref: row.from, text: row.source }
      : { ref: row.target, text: row.targetText };

  // Instagram captions have never contained clickable links; the bio link is the
  // only one an account gets. Putting a url here would just print a dead string
  // that nobody can tap and nobody will retype, so the caption points at the bio
  // and the draft keeps the deep link for the record. Both verses are cited
  // either way, and the call to action is unconditional: a draft with no study
  // still needs somewhere to send the reader.
  const caption = [
    ...(claimFirst
      ? [row.note, "", cite(first.ref, first.text), "", cite(second.ref, second.text)]
      : [cite(first.ref, first.text), "", cite(second.ref, second.text), "", row.note]),
    "",
    row.study ? `Read the study: ${row.study.question}` : `Read more at ${HOST}.`,
    "Link in bio.",
    "",
    HASHTAGS,
  ]
    .filter((line, i, all) => !(line === "" && all[i - 1] === ""))
    .join("\n");

  // Instagram takes alt text per image, not per post, so the draft lists one
  // line per slide rather than a paragraph to be split by hand later.
  const readLine = row.study ? `Keep reading. ${row.study.question}` : `Keep reading. ${SITE_URL}`;
  const alts = claimFirst
    ? [
        `${label}. ${row.note}`,
        `${first.ref}. ${displayed(first.text)}`,
        `${second.ref}. ${displayed(second.text)}`,
        readLine,
      ]
    : [
        `${first.ref}. ${displayed(first.text)}`,
        `${second.ref}. ${displayed(second.text)}`,
        `The connection. ${row.note}`,
        readLine,
      ];

  const front = {
    id,
    pair: pairKey(row),
    from: row.from,
    to: row.target,
    kind: row.kind,
    kindLabel: label,
    study: row.study?.slug ?? null,
    question: row.study?.question ?? null,
    url: row.study ? url : null,
    score: Number(row.score.toFixed(1)),
    flags: row.flags,
    // What slide 1 shows, and which end of the edge leads the verse slides: the
    // renderer draws exactly this, so the draft stays the description of the
    // post rather than an approximation of it.
    cover: row.cover,
    first: row.first,
    // Drift check: --check re-renders these from the vendored WEB and from
    // connections.ts, then compares.
    text: { from: row.source, to: row.targetText },
    note: row.note,
  };

  const slides = claimFirst
    ? `## Slide 1, the cover

**${label}**

${row.note}

Ref pair: ${first.ref} · ${second.ref}

<sub>${row.note.length} chars</sub>

## Slide 2, first verse

${first.ref}

> ${first.text}

<sub>${first.text.length} chars</sub>

## Slide 3, second verse

${second.ref}

> ${second.text}

<sub>${second.text.length} chars</sub>`
    : `## Slide 1, the hook

${first.ref}

> ${first.text}

<sub>${first.text.length} chars</sub>

## Slide 2, the verse it connects to

${second.ref}

> ${second.text}

<sub>${second.text.length} chars</sub>

## Slide 3, the connection

**${label}**

${row.note}

<sub>${row.note.length} chars</sub>`;

  const md = `---
${JSON.stringify(front, null, 2)}
---

# ${id} · ${row.from} to ${row.target}

**${label}** (\`${row.kind}\`) · score ${row.score.toFixed(1)} · verses in canonical order${
    row.flags.length ? ` · FLAGS: ${row.flags.join("; ")}` : ""
  }

${slides}

## Slide 4, keep reading

${row.study ? `> ${row.study.question}` : "> Read the whole chapter"}

Card footer: ${HOST}
${row.study ? `Study page: ${url}` : ""}

## Caption

\`\`\`
${caption}
\`\`\`

## Alt text, one per slide

\`\`\`
1. ${alts[0]}
2. ${alts[1]}
3. ${alts[2]}
4. ${alts[3]}
\`\`\`
`;
  return { front, md };
}

/** Parse a committed post's front matter, or null when the file is malformed. */
function parseFront(raw) {
  const block = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!block) return null;
  try {
    return JSON.parse(block[1]);
  } catch {
    return null;
  }
}

function renderQueue(posts) {
  const lines = [
    "# Social queue",
    "",
    "Generated by `npm run export:social`. Every verse and every cover line comes",
    "from the app's own verified content: nothing here was written by a model.",
    "Delete a draft you do not want, then run with `--mark` to record what shipped",
    "so the next queue moves on.",
    "",
    "The first column is the cover, which is what the reader sees and what the grid",
    "shows. Read that column before anything else: it is where these posts win or",
    "lose.",
    "",
    `| # | cover | verses | kind | score | flags |`,
    `| --- | --- | --- | --- | --- | --- |`,
  ];
  for (const { front } of posts) {
    const verses = `${front.from} / ${front.to}`;
    const cover = front.cover === "claim" ? front.note : `(verse) ${front.from}`;
    lines.push(
      `| ${front.id} | ${cover} | ${verses} | ${front.kind} | ${front.score} | ${
        front.flags.length ? front.flags.join("; ") : ""
      } |`
    );
  }
  lines.push("");
  return lines.join("\n");
}

// ---- state ------------------------------------------------------------------

async function readState() {
  let raw;
  try {
    raw = await readFile(statePath, "utf8");
  } catch (err) {
    // Only a missing file means "nothing published yet". A file that exists but
    // cannot be read or parsed is a corrupt ledger, and treating it as empty
    // would quietly re-offer every edge already posted.
    if (err.code === "ENOENT") return { version: 1, posted: [], excluded: [] };
    throw err;
  }
  let state;
  try {
    state = JSON.parse(raw);
  } catch {
    throw new Error(
      `${statePath} is not valid JSON. Fix it by hand rather than deleting it: ` +
        `it is the record of what has already been published.`
    );
  }
  if (!Array.isArray(state.posted)) throw new Error(`${statePath} has no posted[] array.`);
  if (!Array.isArray(state.excluded)) state.excluded = [];
  return state;
}

/** Written through a temp file and renamed, so an interrupted write cannot
 *  leave the ledger half-written and unreadable. */
async function writeState(state) {
  await mkdir(outDir, { recursive: true });
  const tmp = `${statePath}.tmp`;
  await writeFile(tmp, JSON.stringify(state, null, 2) + "\n");
  await rename(tmp, statePath);
}

// ---- check ------------------------------------------------------------------

/** The note connections.ts currently holds for this directed edge. */
function currentNote(from, target) {
  return (connections[from] ?? []).find((e) => e.target === target)?.note ?? null;
}

/**
 * Re-renders every committed post and reports drift against the two sources of
 * truth. This catches the failure mode that matters: someone editing a card in
 * a hurry, "fixing" a word of the verse, or pasting in a different translation,
 * on an account that stands for exact quotations.
 *
 * A rewritten note is reported too, on purpose. If a note needs work for a card,
 * it needs the same work on the study page, so the fix belongs in
 * src/data/connections.ts where the quote verifier and the site both see it.
 */
async function check() {
  // Both the live queue and the archive: a published post was verified once, and
  // nothing stops someone editing it in place afterwards.
  const dirs = [postDir, archiveDir];
  const files = [];
  for (const dir of dirs) {
    const names = await readdir(dir).catch(() => []);
    for (const name of names) if (name.endsWith(".md")) files.push({ dir, name });
  }
  if (files.length === 0) {
    console.log("No social/posts yet. Run the generator first.");
    return 0;
  }

  const problems = [];
  const seen = new Map();

  for (const { dir, name: file } of files.sort((a, b) => a.name.localeCompare(b.name))) {
    const raw = await readFile(resolve(dir, file), "utf8");
    const front = parseFront(raw);
    if (!front) {
      problems.push(`${file}: missing or malformed front matter`);
      continue;
    }

    const actualFrom = verseText(front.from);
    const actualTo = verseText(front.to);
    if (!actualFrom) problems.push(`${file}: ${front.from} no longer resolves`);
    else if (actualFrom !== front.text?.from)
      problems.push(`${file}: ${front.from} text drifted from the vendored WEB`);
    if (!actualTo) problems.push(`${file}: ${front.to} no longer resolves`);
    else if (actualTo !== front.text?.to)
      problems.push(`${file}: ${front.to} text drifted from the vendored WEB`);

    const planted = currentNote(front.from, front.to);
    if (planted === null) problems.push(`${file}: ${front.from} -> ${front.to} is no longer an edge`);
    else if (planted !== front.note)
      problems.push(`${file}: note differs from connections.ts, move the rewrite into the data file`);

    // Our own copy must stay free of em dashes; scripture text is exempt.
    if (typeof front.note === "string" && /[\u2013\u2014]/.test(front.note))
      problems.push(`${file}: dash in the note, which is our copy`);

    if (front.pair) {
      if (seen.has(front.pair)) problems.push(`${file}: duplicate of ${seen.get(front.pair)}`);
      else seen.set(front.pair, file);
    }
  }

  if (problems.length === 0) {
    console.log(`Checked ${files.length} posts: verse text and notes match their sources.`);
    return 0;
  }
  for (const p of problems) console.log(`FAIL ${p}`);
  return 1;
}

// ---- main -------------------------------------------------------------------

async function main() {
  const argv = process.argv.slice(2);
  const has = (flag) => argv.includes(flag);
  const value = (flag, fallback) => {
    const i = argv.indexOf(flag);
    return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
  };

  if (has("--check")) process.exit(await check());

  const state = await readState();

  if (has("--mark")) {
    const ids = argv.slice(argv.indexOf("--mark") + 1).filter((a) => !a.startsWith("--"));
    await mkdir(archiveDir, { recursive: true });
    const found = [];
    for (const id of ids) {
      // Match the id and its separator, so `--mark 01` cannot silently claim
      // post 010 to 019. Exact ids only: the queue numbers are three digits.
      const matches = (await readdir(postDir).catch(() => [])).filter((f) => f.startsWith(`${id}-`));
      if (matches.length !== 1) {
        console.log(
          matches.length === 0
            ? `No post numbered "${id}".`
            : `"${id}" is ambiguous (${matches.join(", ")}); nothing marked.`
        );
        continue;
      }
      const file = matches[0];
      const raw = await readFile(resolve(postDir, file), "utf8");
      const front = parseFront(raw);
      if (!front) {
        console.log(`${file} has malformed front matter, skipping.`);
        continue;
      }

      // Retire the draft out of the way of the next queue. Without this, a
      // regenerated 001 collides with the published 001 and `--mark 001` has two
      // files to choose from. Refuse to overwrite an earlier archive. On a
      // collision the ledger is not touched, so the two cannot disagree.
      const destination = resolve(archiveDir, file);
      if (await exists(destination)) {
        console.log(`${file} is already archived; nothing marked.`);
        continue;
      }

      // Record, persist, then move. A crash between these leaves the worst case
      // as a draft that was archived but not recorded, which --check reports;
      // the reverse would let a post be marked twice.
      state.posted.push({ id: front.id, pair: front.pair, from: front.from, to: front.to });
      await writeState(state);
      await rename(resolve(postDir, file), destination);
      found.push(front.id);
    }
    console.log(`Recorded ${found.length} published post(s): ${found.join(", ") || "none"}`);
    return;
  }

  // Validate before anything is touched: `--count 2O` gives NaN, which makes the
  // scheduler return nothing, and --force would already have cleared the queue.
  const rawCount = value("--count", "30");
  const count = Number(rawCount);
  if (!Number.isInteger(count) || count < 1 || count > 200) {
    console.log(`--count wants a whole number from 1 to 200, got "${rawCount}".`);
    process.exit(1);
  }
  const excluded = new Set(state.excluded ?? []);
  const ranked = candidates();

  if (has("--why")) {
    const ref = value("--why", "");
    const run = schedule(ranked, { count, posted: state.posted ?? [], excluded, explain: ref });
    const rank = ranked.findIndex((r) => r.from === ref || r.target === ref || pairKey(r).includes(ref));
    const picked = run.find((r) => r.from === ref || r.target === ref || pairKey(r).includes(ref));
    if (rank < 0) {
      console.log(`No edge matches "${ref}".`);
      return;
    }
    console.log(`Rank ${rank + 1} of ${ranked.length}: ${pairKey(ranked[rank])} (score ${ranked[rank].score.toFixed(1)})`);
    console.log(picked ? `Selected as post ${String(run.indexOf(picked) + 1).padStart(3, "0")}.` : "Not selected.");
    for (const n of run.notes) console.log(`  slot ${n.id}: ${n.reason}`);
    return;
  }

  const chosen = schedule(ranked, { count, posted: state.posted ?? [], excluded });

  if (has("--dry-run")) {
    for (const [i, row] of chosen.entries()) {
      const id = String(i + 1).padStart(3, "0");
      console.log(
        `${id}  ${row.score.toFixed(1).padStart(5)}  ${row.kind.padEnd(9)}  ${row.from} -> ${row.target}${
          row.flags.length ? `  [${row.flags.join("; ")}]` : ""
        }`
      );
    }
    console.log(`\n${chosen.length} of ${ranked.length} candidate edges.`);
    return;
  }

  if (!has("--force")) {
    const existing = (await readdir(postDir).catch(() => [])).filter((f) => f.endsWith(".md"));
    if (existing.length > 0) {
      console.log(
        `${existing.length} posts already in social/posts. Use --force to regenerate, or --mark to record what shipped.`
      );
      return;
    }
  }

  await mkdir(postDir, { recursive: true });

  // A regeneration renumbers, so drafts from the last run would linger next to
  // the new ones under colliding ids. Clear the queue; published drafts have
  // already moved to the archive and are not here to lose.
  for (const file of (await readdir(postDir)).filter((f) => f.endsWith(".md")))
    await rm(resolve(postDir, file), { force: true });

  const rendered = [];
  for (const [i, row] of chosen.entries()) {
    const id = String(i + 1).padStart(3, "0");
    const post = renderPost(row, id);
    await writeFile(resolve(postDir, `${id}-${postSlug(row)}.md`), post.md);
    rendered.push({ front: post.front, row });
  }

  await writeFile(resolve(outDir, "queue.md"), renderQueue(rendered));

  const kinds = {};
  for (const r of chosen) kinds[r.kind] = (kinds[r.kind] ?? 0) + 1;
  const flagged = chosen.filter((r) => r.flags.length).length;

  console.log(`Wrote ${rendered.length} posts to social/posts and social/queue.md.`);
  console.log(`Kinds: ${Object.entries(kinds).map(([k, n]) => `${k} ${n}`).join(", ")}`);
  console.log(
    `${flagged} need a human look before posting (see FLAGS in queue.md). Review the queue, then publish and run --mark.`
  );
}

try {
  await main();
} catch (err) {
  // A corrupt ledger is the one failure worth shouting about: it is the record
  // of what has been published, and guessing at it would re-offer posted edges.
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
