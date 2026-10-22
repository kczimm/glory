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
 *   node scripts/export-social.mjs --check        verify committed posts against the WEB
 *   node scripts/export-social.mjs --mark 001 002 record posts as published
 *   node scripts/export-social.mjs --force        regenerate even if posts exist
 *
 * Exit codes: 0 = ok, 1 = --check found drift or a copy violation.
 */
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { connections } from "../src/data/connections.ts";
import { connectionKindLabel } from "../src/data/connections.ts";
import { questions } from "../src/data/questions.ts";
import { verses } from "../src/data/scripture.ts";
import { joinPassage, parseRef } from "../src/data/ref.ts";
import { SITE_URL } from "../src/lib/site.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "social");
const postDir = resolve(outDir, "posts");
const statePath = resolve(outDir, "state.json");

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

      const flags = [];
      if (DEICTIC.test(edge.note)) flags.push("note needs a rewrite for a standalone card");
      if (source.length > VERSE_TOO_LONG) flags.push(`source verse is ${source.length} chars`);
      if (target.length > VERSE_TOO_LONG) flags.push(`target verse is ${target.length} chars`);
      if (edge.note.length > NOTE_TOO_LONG) flags.push(`note is ${edge.note.length} chars`);
      if (sourceFragment) flags.push("source verse starts or ends mid-quote");
      if (targetFragment) flags.push("target verse starts or ends mid-quote");

      rows.push({
        from,
        target: edge.target,
        kind: edge.kind,
        note: edge.note,
        source,
        targetText: target,
        score,
        flags,
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
  const usedSources = new Set();
  const usedTargets = new Set();
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
      if (excluded.has(row.ref)) reason = "excluded";
      else if (usedPairs.has(pairKey(row))) reason = "pair already used";
      else if (usedSources.has(row.from)) reason = "this verse already leads a post";
      else if (usedTargets.has(row.target)) reason = "that target verse already appeared";
      else if (within(recentKinds, row.kind, 4) >= 2)
        reason = `kind budget: 2 ${row.kind} edges in the last 4`;
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
      usedSources.add(row.from);
      usedTargets.add(row.target);
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

function renderPost(row, id) {
  const label = connectionKindLabel[row.kind];
  const url = row.study ? `${SITE_URL}/questions/${row.study.slug}` : SITE_URL;

  const caption = [
    cite(row.from, row.source),
    "",
    row.note,
    "",
    row.study ? `Read the study: ${row.study.question}` : "",
    row.study ? url : "",
    "",
    HASHTAGS,
  ]
    .filter((line, i, all) => !(line === "" && all[i - 1] === ""))
    .join("\n");

  const alt = [
    `Verse one, ${row.from}. ${row.source}`,
    `Verse two, ${row.target}. ${row.targetText}`,
    `Connection. ${row.note}`,
  ].join(" ");

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
    // Drift check: --check re-renders these from the vendored WEB and from
    // connections.ts, then compares.
    text: { from: row.source, to: row.targetText },
    note: row.note,
  };

  const md = `---
${JSON.stringify(front, null, 2)}
---

# ${id} · ${row.from} to ${row.target}

**${label}** (\`${row.kind}\`) · score ${row.score.toFixed(1)}${
    row.flags.length ? ` · FLAGS: ${row.flags.join("; ")}` : ""
  }

## Slide 1, the hook

${row.from}

> ${row.source}

<sub>${row.source.length} chars</sub>

## Slide 2, the verse it connects to

${row.target}

> ${row.targetText}

<sub>${row.targetText.length} chars</sub>

## Slide 3, the connection

**${label}**

${row.note}

<sub>${row.note.length} chars</sub>

## Slide 4, keep reading

${row.study ? `> ${row.study.question}` : "> Read the whole chapter"}

${row.study ? `${url}` : SITE_URL}

## Caption

\`\`\`
${caption}
\`\`\`

## Alt text

\`\`\`
${alt}
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
    "Generated by `node scripts/export-social.mjs`. Every verse and every note in",
    "these posts comes from the app's own verified content: nothing here was",
    "written by a model. Delete a draft you do not want, then run with `--mark`",
    "to record what shipped so the next queue moves on.",
    "",
    `| # | source | target | kind | score | study | flags |`,
    `| --- | --- | --- | --- | --- | --- | --- |`,
  ];
  for (const { front } of posts) {
    const study = front.study ? front.study : "-";
    lines.push(
      `| ${front.id} | ${front.from} | ${front.to} | ${front.kind} | ${front.score} | ${study} | ${
        front.flags.length ? front.flags.join("; ") : ""
      } |`
    );
  }
  lines.push("");
  return lines.join("\n");
}

// ---- state ------------------------------------------------------------------

async function readState() {
  try {
    return JSON.parse(await readFile(statePath, "utf8"));
  } catch {
    return { version: 1, posted: [], excluded: [] };
  }
}

async function writeState(state) {
  await mkdir(outDir, { recursive: true });
  await writeFile(statePath, JSON.stringify(state, null, 2) + "\n");
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
  let files = [];
  try {
    files = (await readdir(postDir)).filter((f) => f.endsWith(".md"));
  } catch {
    console.log("No social/posts yet. Run the generator first.");
    return 0;
  }

  const problems = [];
  const seen = new Map();

  for (const file of files.sort()) {
    const raw = await readFile(resolve(postDir, file), "utf8");
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
    const found = [];
    for (const id of ids) {
      const file = (await readdir(postDir).catch(() => [])).find((f) => f.startsWith(id));
      if (!file) {
        console.log(`No post starting with "${id}".`);
        continue;
      }
      const raw = await readFile(resolve(postDir, file), "utf8");
      const front = parseFront(raw);
      if (!front) {
        console.log(`${file} has malformed front matter, skipping.`);
        continue;
      }
      state.posted.push({ id: front.id, pair: front.pair, from: front.from, to: front.to });
      found.push(front.id);
    }
    await writeState(state);
    console.log(`Recorded ${found.length} published post(s): ${found.join(", ") || "none"}`);
    return;
  }

  const count = Number(value("--count", 30));
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
  // the new ones under colliding ids. Clear the drafts, keep what already
  // shipped, and let --check still police the published set.
  const shipped = new Set((state.posted ?? []).map((p) => p.pair));
  const stale = [];
  for (const file of (await readdir(postDir)).filter((f) => f.endsWith(".md"))) {
    const raw = await readFile(resolve(postDir, file), "utf8");
    const front = parseFront(raw);
    if (!front || shipped.has(front.pair)) continue;
    stale.push(file);
  }
  if (stale.length > 0)
    await Promise.all(stale.map((f) => rm(resolve(postDir, f), { force: true })));

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

await main();
