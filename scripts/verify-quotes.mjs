#!/usr/bin/env node
/**
 * Verifies every hand-written scripture quotation against the vendored WEB.
 *
 * Unlike the corpus spot-check in verify-bible.mjs (which only asks "does this
 * string appear SOMEWHERE in the Bible"), this script ATTRIBUTES each quoted
 * span to the verse references cited around it and compares word by word:
 *
 *  1. Parse src/data/scripture.ts into verses + per-chapter token flows.
 *  2. Extract quoted spans (curly/straight quotes, >= 5 words) from the
 *     hand-written content files: src/data/questions.ts and src/data/connections.ts.
 *     For each span, collect the refs cited in its own block (verses[] /
 *     keyVerses[] arrays for questions; key + targets for connections) plus the
 *     full text of cited passage chapters.
 *     The same extraction runs over the component and page copy
 *     (src/components/**, src/app/**): those files carry hand-written scripture
 *     too, and that is exactly where the footer's and the search page's
 *     misquotes lived. They cite no refs of their own, so their spans are
 *     attributed by searching the whole Bible, which is stricter in practice:
 *     a near-match anywhere is reported as a misquote.
 *  3. Each span is split on ellipses into fragments. A fragment passes when it
 *     appears VERBATIM (after normalization) inside a single WEB verse or a run
 *     of consecutive verses in one chapter.
 *  4. Fragments with no verbatim match are aligned (token-level LCS) against
 *     the best-matching cited verses and classified:
 *       - similarity >= SIM_FAIL  -> MISQUOTE (hard error)
 *       - otherwise               -> UNATTRIBUTED (not found near the citations;
 *                                    hard error unless allowlisted)
 *
 * Intentional non-scripture phrases (rhetorical questions, labels) go in
 * scripts/quote-allowlist.json as { "<normalized span>": "reason" }.
 *
 * Exit codes: 0 = all quotations verified, 1 = misquote or unattributed span.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import {
  expandChapter,
  expandRef,
  fail,
  loadQuestionBlocks,
  loadScripture,
  readSource,
  root,
} from "./lib/source.mjs";

const SIM_FAIL = 0.75;

// ---- load allowlist ----------------------------------------------------------
let allowlist = {};
try {
  allowlist = JSON.parse(readSource("scripts/quote-allowlist.json"));
} catch {
  /* no allowlist yet */
}

// ---- parse scripture ---------------------------------------------------------
const { verses } = loadScripture();

const norm = (t) =>
  t.toLowerCase()
    .replace(/[\u2019\u2018]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u00a0/g, " ")
    .replace(/[["'\u0001]/g, "")
    .replace(/[\u2013\u2014]/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const tokens = (t) => norm(t).split(" ").filter(Boolean);

// One big token stream over the whole Bible, remembering which verse each
// token belongs to, so cross-verse composites ("John 1:1-2 run-ons") match.
const stream = []; // tokens
const owner = []; // parallel: verse key per token
const verseTokenStart = new Map(); // verse key -> start index in stream
for (const [ref, text] of verses) {
  verseTokenStart.set(ref, stream.length);
  for (const w of tokens(text)) {
    stream.push(w);
    owner.push(ref);
  }
}
// 5-gram index: first five words -> all start positions.
const FIVE = 5;
const gramIndex = new Map();
for (let i = 0; i + FIVE <= stream.length; i++) {
  const g = stream.slice(i, i + FIVE).join(" ");
  let list = gramIndex.get(g);
  if (!list) gramIndex.set(g, (list = []));
  list.push(i);
}
// token -> all positions, for short-fragment lookups
const tokenIndex = new Map();
for (let i = 0; i < stream.length; i++) {
  let list = tokenIndex.get(stream[i]);
  if (!list) tokenIndex.set(stream[i], (list = []));
  list.push(i);
}
// verse -> index bounds, for fuzzy scoring
const verseRange = new Map(); // verse key -> [start, end)
for (const [ref] of verses) {
  const s = verseTokenStart.get(ref);
  let e = s;
  while (e < owner.length && owner[e] === ref) e++;
  verseRange.set(ref, [s, e]);
}

/** Verbatim check: fragment tokens appear contiguously anywhere in the Bible. */
function findVerbatim(frag) {
  const f = tokens(frag);
  if (f.length < 2) return null;
  let starts;
  if (f.length >= FIVE) starts = gramIndex.get(f.slice(0, FIVE).join(" ")) ?? [];
  else {
    // anchor on the rarest token to keep the candidate set small
    const counts = f.map((w) => (tokenIndex.get(w) ?? []).length);
    const rare = counts.indexOf(Math.min(...counts));
    if (!counts[rare]) return null;
    const off = f.slice(0, rare).reduce((a, w) => a - w.length - 1, 0); // unused
    starts = (tokenIndex.get(f[rare]) ?? []).map((p) => p - rare);
    void off;
  }
  for (const i of starts) {
    let ok = true;
    for (let j = 0; j < f.length; j++)
      if (stream[i + j] !== f[j]) { ok = false; break; }
    if (ok) {
      const first = owner[i];
      const last = owner[i + f.length - 1];
      return first === last ? first : `${first}-${last.split(":")[0]}:${last.split(":")[1]}`;
    }
  }
  return null;
}

/** Best-matching verses across the WHOLE Bible, anchored on the fragment's
 *  rarest tokens; each anchor position yields a scored window. */
function globalCandidates(frag, floor = 0.45) {
  const f = tokens(frag);
  if (f.length < 4) return [];
  // rank tokens by frequency, take two rarest as anchors
  const order = [...f].sort((a, b) => (tokenIndex.get(a) ?? []).length - (tokenIndex.get(b) ?? []).length);
  const anchors = [...new Set(order.slice(0, 2))].filter((w) => (tokenIndex.get(w) ?? []).length);
  if (!anchors.length) return [];
  const scored = new Map(); // verse key -> best overlap ratio
  for (const w of anchors) {
    for (const pos of tokenIndex.get(w) ?? []) {
      const v = owner[pos];
      if (scored.has(v)) continue;
      const [s0, e0] = verseRange.get(v);
      const win = stream.slice(s0, Math.min(e0 + f.length, owner.length));
      const sim = similarity(f, win);
      if (sim >= floor) scored.set(v, sim);
    }
  }
  return [...scored.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([v]) => v);
}

// ---- token-level LCS diff (for reporting + similarity) -----------------------
function lcsTable(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Uint32Array(b.length + 1));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  return dp;
}
function diffWords(a, b) {
  const dp = lcsTable(a, b);
  const ops = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { ops.push(["=", a[i]]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push(["-", a[i++]]); }
    else { ops.push(["+", b[j++]]); }
  }
  while (i < a.length) ops.push(["-", a[i++]]);
  while (j < b.length) ops.push(["+", b[j++]]);
  return ops;
}
function similarity(a, b) {
  if (!a.length || !b.length) return 0;
  const dp = lcsTable(a, b);
  return (2 * dp[0][0]) / (a.length + b.length);
}
function renderDiff(ops) {
  const parts = [];
  let cur = null, buf = [];
  const flush = () => {
    if (buf.length) parts.push(buf.join(" "));
    buf = [];
  };
  for (const [op, w] of ops) {
    if (op !== cur) { flush(); cur = op; }
    if (op === "=") buf.push(w);
    else if (op === "-") buf.push(`[-${w}-]`);
    else buf.push(`{+${w}+}`);
  }
  flush();
  return parts.join(" ");
}

/** Best fuzzy attribution for a fragment among given verse keys.
 *  `floor` is the similarity a global candidate needs to be considered; spans
 *  from component copy have no cited refs to lean on, so they pass a lower one
 *  and get a word-level diff instead of "no similar text". */
function bestMatch(frag, candidateRefs, floor = 0.45) {
  const f = tokens(frag);
  let best = null;
  for (const ref of [...candidateRefs, ...globalCandidates(frag, floor)]) {
    const start = verseTokenStart.get(ref);
    if (start === undefined) continue;
    // window: this verse joined with the next (covers most run-ons)
    const [s0, e0] = verseRange.get(ref);
    let end = e0;
    if (end < owner.length && owner[end].split(":").slice(0, -1).join(":") === ref.split(":").slice(0, -1).join(":"))
      end = verseRange.get(owner[end])[1];
    const win = stream.slice(s0, end);
    const sim = similarity(f, win);
    if (!best || sim > best.sim) best = { sim, ref, win };
  }
  return best;
}

// ---- extract quoted spans + attributed refs ----------------------------------
function quotedSpans(content) {
  const s = content.replace(/\\"/g, "\u0001");
  const out = [];
  // Double-quoted spans (escaped \" and curly “”) are unambiguous.
  const reDouble =
    /\u0001([^\u0001\n]{6,}?)\u0001|\u201C([^\u201D\n]{6,}?)\u201D/gu;
  for (const m of s.matchAll(reDouble)) out.push(m[1] ?? m[2]);
  // Straight-single-quote spans need a scanner: an apostrophe inside a word
  // (don't, can't, let's) must not be mistaken for an opening or closing quote.
  const chars = [...s];
  const isLetterOrDigit = (c) => c !== undefined && /[\p{L}\p{N}]/u.test(c);
  const OPENER_OK = /^[([{:"\s]$/; // char allowed right before an opening '
  const CLOSER_OK = /^[)\]},.:;!?"\s]$/; // char allowed right after a closing '
  // Note: ',' and ';' are deliberately NOT opener-allowed: a closing quote
  // right after them ("...fellowship,' breaking bread...") must not reopen.
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== "'") continue;
    const prev = chars[i - 1] ?? "";
    if (isLetterOrDigit(prev)) continue; // word-internal apostrophe
    if (prev !== "" && !OPENER_OK.test(prev)) continue;
    let j = i;
    while ((j = s.indexOf("'", j + 1)) !== -1) {
      if (!CLOSER_OK.test(chars[j + 1] ?? "")) continue; // e.g. don't
      const span = s.slice(i + 1, j);
      if (span.length >= 6 && !span.includes("\n")) out.push(span);
      i = j; // resume scanning after the closer
      break;
    }
  }
  return out;
}
const isCodeShaped = (span) =>
  /[\p{L}\d]-[\p{L}\d]|[\[\]{}<>=|\\/+*#%^~`_@]|https?:|\p{L}:\p{L}|\p{L}:\d/u.test(span);

const REF_IN_ARRAY = /"((?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?)"|\{ book: "([^"]+)", chapter: (\d+)/g;

function collectQuestions() {
  const checks = [];
  for (const { slug, body } of loadQuestionBlocks()) {
    const refs = new Set();
    for (const m of body.matchAll(REF_IN_ARRAY)) {
      if (m[1]) expandRef(m[1], verses).forEach((k) => refs.add(k));
      else if (m[2]) expandChapter(m[2], +m[3], verses).forEach((k) => refs.add(k));
    }
    const spans = quotedSpans(body);
    // Quote marks but no extracted span means the extraction, not the copy,
    // changed: fail instead of quietly checking one study less.
    if (!spans.length && /\\"|\u201C/u.test(body))
      fail(`verify:quotes: ${slug} contains quote marks but no span was extracted`);
    for (const span of spans) {
      if (isCodeShaped(span)) continue;
      checks.push({ span, where: slug, refs });
    }
  }
  return checks;
}

function collectConnections() {
  const src = readSource("src/data/connections.ts");
  const checks = [];
  // split at top-level keys: lines starting with  "Book C:V": [
  const entries = [...src.matchAll(/^  "((?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?)": \[/gm)];
  for (let e = 0; e < entries.length; e++) {
    const keyRef = entries[e][1];
    const body = src.slice(entries[e].index, entries[e + 1]?.index ?? src.length);
    const refs = new Set(expandRef(keyRef, verses));
    for (const m of body.matchAll(/c\("([^"]+)"/g))
      expandRef(m[1], verses).forEach((k) => refs.add(k));
    const spans = quotedSpans(body);
    if (!spans.length && /\\"|\u201C/u.test(body))
      fail(`verify:quotes: connections ${keyRef} contains quote marks but no span was extracted`);
    for (const span of spans) {
      if (isCodeShaped(span)) continue;
      checks.push({ span, where: `connections:${keyRef}`, refs });
    }
  }
  return checks;
}

/**
 * Verbatim match in the KJV reading, as one verse or two consecutive verses.
 *
 * Component copy legitimately quotes either reading (the footer shows both),
 * and the KJV is vendored and generated just like the WEB, so a span the WEB
 * does not contain is retried here before it is reported. Built only when a
 * span actually needs it. Content files do not use this: their rule is still
 * "quotes must match the WEB word for word".
 */
let kjvNormalized = null;
function kjvCorpus() {
  if (kjvNormalized) return kjvNormalized;
  const { verses: kjv } = loadScripture("src/data/scripture-kjv.ts");
  kjvNormalized = [...kjv].map(([ref, text]) => [ref, norm(text)]);
  return kjvNormalized;
}
function findVerbatimKjv(frag) {
  const corpus = kjvCorpus();
  for (let i = 0; i < corpus.length; i++) {
    const [ref, text] = corpus[i];
    if (text.includes(frag)) return ref;
    const next = corpus[i + 1];
    if (
      next &&
      next[0].split(":")[0] === ref.split(":")[0] &&
      `${text} ${next[1]}`.includes(frag)
    )
      return `${ref}-${next[0].split(":")[1]}`;
  }
  return null;
}

/**
 * Quoted copy this file cannot see, or null when the file is fine.
 *
 * Two shapes count as quoted copy:
 *
 *  1. the shapes quotedSpans recognises (curly double quotes, escaped straight
 *     pairs inside strings): if one is present, extraction must have yielded a
 *     span, otherwise the extractor, not the copy, changed;
 *  2. `&ldquo;...&rdquo;` entities around prose. The extractor cannot see those
 *     at all, which is precisely how the footer's Acts 17:11 went unchecked
 *     before finding 2, and how a rewrite of any component quote today would
 *     drop out of coverage without a word. The rule is therefore: hand-written
 *     quotations are written with curly quote characters, so they are
 *     checked; if a file quotes prose with entities, fail and say which run.
 *
 * The 6-character minimum and the code-shape exclusion are the extractor's own,
 * so JSX such as `&ldquo;<VerseText verse={ref} />&rdquo;` and short labels such
 * as `&ldquo;Hold&rdquo;` are not mistaken for hand-written copy.
 */
function uncheckedQuotedCopy(src, spans) {
  const marked = src.replace(/\\"/g, "\u0001");
  if (!spans.length && /\u0001[^\u0001\n]{6,}\u0001|\u201C[^\u201D\n]{6,}\u201D/u.test(marked))
    return "has quote marks in a shape the extractor recognises but yielded no span";
  for (const m of src.matchAll(/&ldquo;([\s\S]*?)&rdquo;/g)) {
    const run = m[1];
    if (run.length >= 6 && !isCodeShaped(run))
      return `quotes ${JSON.stringify(run.trim().slice(0, 40))} with HTML entities, which this checker cannot read`;
  }
  return null;
}

/**
 * Quoted spans in the UI copy: components and pages render scripture by hand in
 * places (the footer's Acts 17:11, the search page's John 5:39) and there is
 * nothing structural tying a span to a ref there. They are therefore checked
 * against the whole Bible: verbatim passes (in either vendored reading, since
 * the UI shows both), a near-match is a misquote anywhere it lives, and
 * intentional non-scripture labels are allowlisted.
 */
function collectComponents() {
  const checks = [];
  for (const dir of ["src/components", "src/app"]) {
    for (const rel of readdirSync(resolve(root, dir), { recursive: true })) {
      if (!/\.(tsx?|jsx?)$/.test(rel)) continue;
      const where = `${dir}/${rel}`;
      const src = readSource(where);
      const spans = quotedSpans(src);
      // Per file, not per directory: one component losing its extractable
      // quotes must fail by name, not hide behind the others' spans.
      const unchecked = uncheckedQuotedCopy(src, spans);
      if (unchecked) fail(`verify:quotes: ${where} ${unchecked}`);
      for (const span of spans) {
        if (isCodeShaped(span)) continue;
        checks.push({ span, where, refs: new Set(), allowKjv: true });
      }
    }
  }
  return checks;
}

// ---- run ----------------------------------------------------------------------
const bySource = {
  questions: collectQuestions(),
  connections: collectConnections(),
  components: collectComponents(),
};
// A refactor of the file walk would otherwise quietly stop checking a source.
for (const [name, list] of Object.entries(bySource))
  if (list.length === 0)
    fail(`verify:quotes: no quoted spans found in ${name}; that copy is no longer being checked`);
const checks = [...bySource.questions, ...bySource.connections, ...bySource.components];
console.log(`checking ${checks.length} quoted spans against ${verses.size} vendored WEB verses`);

const problems = [];
let passedExact = 0;
const seen = new Set();

for (const { span, where, refs, allowKjv } of checks) {
  const key = norm(span);
  if (seen.has(key)) continue;
  seen.add(key);

  // split the RAW span on ellipses first (norm() would erase them), then normalize
  const fragments = span
    .split(/ ?\.\.\.? ?| ?\u2026 ?/)
    .map((f) => norm(f.replace(/^['-]+|[-']+$/g, "").trim()))
    .filter((f) => f.split(" ").length >= 3);
  if (!fragments.length) continue;

  let allVerbatim = true;
  const matches = [];
  for (const frag of fragments) {
    const hit = findVerbatim(frag) ?? (allowKjv ? findVerbatimKjv(frag) : null);
    if (hit) { matches.push({ frag, ref: hit }); passedExact++; }
    else { allVerbatim = false; matches.push({ frag, ref: null }); }
  }

  // allowlisted intentional non-quotes
  if (!allVerbatim && allowlist[key]) continue;

  if (!allVerbatim) {
    // fuzzy attribution: best cited-verse alignment across ALL fragments
    let worst = null;
    const detail = [];
    for (const m of matches) {
      if (m.ref) { detail.push(`  OK   "${m.frag}" -> ${m.ref}`); continue; }
      const bm = bestMatch(m.frag, refs, allowKjv ? 0.25 : 0.45);
      if (!bm) { detail.push(`  ???  "${m.frag}" -> no cited verse contains similar text`); continue; }
      const ops = diffWords(tokens(m.frag), bm.win);
      detail.push(`  DIFF vs ${bm.ref} (similarity ${(bm.sim * 100).toFixed(0)}%):\n       ${renderDiff(ops)}`);
      if (!worst || bm.sim < worst.sim) worst = bm;
    }
    const isMisquote = worst && worst.sim >= SIM_FAIL;
    problems.push({
      span,
      where,
      kind: isMisquote ? "MISQUOTE" : "UNATTRIBUTED",
      sim: worst ? `${(worst.sim * 100).toFixed(0)}%` : "n/a",
      detail: detail.join("\n"),
    });
  }
}

console.log(`verbatim matches: ${passedExact} fragment(s); flagged: ${problems.length}`);
for (const p of problems) {
  console.log(`\n[${p.kind}] in ${p.where} (best similarity ${p.sim})`);
  console.log(`  quote: "${p.span.length > 120 ? p.span.slice(0, 120) + "..." : p.span}"`);
  console.log(p.detail);
}
if (process.env.QUOTES_OUT) {
  const { writeFileSync } = await import("node:fs");
  writeFileSync(
    process.env.QUOTES_OUT,
    problems.map((p) => `[${p.kind}] ${p.where}\n${p.span}\n`).join("\n"),
  );
  console.log(`\nfull report written to ${process.env.QUOTES_OUT}`);
}
if (problems.length) {
  const mis = problems.filter((p) => p.kind === "MISQUOTE").length;
  console.error(`\nFAILED: ${mis} misquote(s), ${problems.length - mis} unattributed span(s).`);
  process.exit(1);
}
console.log("\nPASS: every quoted span matches the WEB verbatim.");
