#!/usr/bin/env node
/**
 * Verifies every hand-written scripture quotation against the vendored WEB.
 *
 * Unlike the corpus spot-check in verify-bible.mjs (which only asks "does this
 * string appear SOMEWHERE in the Bible"), this script ATTRIBUTES each quoted
 * span to the verse references cited around it and compares word by word:
 *
 *  1. Parse src/data/scripture.ts into verses + per-chapter token flows.
 *  2. Extract quoted spans (curly/straight quotes, >= 5 words) from the two
 *     hand-written content files: src/data/questions.ts and src/data/connections.ts.
 *     For each span, collect the refs cited in its own block (verses[] /
 *     keyVerses[] arrays for questions; key + targets for connections) plus the
 *     full text of cited passage chapters.
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
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SIM_FAIL = 0.75;

// ---- load allowlist ----------------------------------------------------------
let allowlist = {};
try {
  allowlist = JSON.parse(readFileSync(resolve(root, "scripts/quote-allowlist.json"), "utf8"));
} catch {
  /* no allowlist yet */
}

// ---- parse scripture ---------------------------------------------------------
const file = readFileSync(resolve(root, "src/data/scripture.ts"), "utf8");
const STR = '"(?:[^"\\\\]|\\\\.)*"';
const versesStart = file.indexOf("export const verses");
const chaptersStart = file.indexOf("export const chapters");
const versesBlock = file.slice(versesStart, chaptersStart);
const verses = new Map();
for (const m of versesBlock.matchAll(new RegExp(`^  (${STR}): (${STR}),$`, "gm")))
  verses.set(JSON.parse(m[1]), JSON.parse(m[2]));

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
function globalCandidates(frag) {
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
      if (sim >= 0.45) scored.set(v, sim);
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

/** Best fuzzy attribution for a fragment among given verse keys. */
function bestMatch(frag, candidateRefs) {
  const f = tokens(frag);
  let best = null;
  for (const ref of [...candidateRefs, ...globalCandidates(frag)]) {
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
  const re =
    /\u0001([^\u0001\n]{6,}?)\u0001|\u201C([^\u201D\n]{6,}?)\u201D|(?<![\p{L}\p{N}])'([^'\n]{6,}?)'(?![\p{L}\p{N}])/gu;
  const out = [];
  for (const m of s.matchAll(re)) out.push(m[1] ?? m[2] ?? m[3]);
  return out;
}
const isCodeShaped = (span) =>
  /[\p{L}\d]-[\p{L}\d]|[\[\]{}<>=|\\/+*#%^~`_@]|https?:|\p{L}:\p{L}|\p{L}:\d/u.test(span);

const REF_IN_ARRAY = /"((?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?)"|\{ book: "([^"]+)", chapter: (\d+)/g;
function expandRef(ref) {
  const m = ref.match(/^(.*?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return [];
  const book = m[1] === "Psalm" ? "Psalms" : m[1];
  const out = [];
  for (let v = +m[3]; v <= +(m[4] ?? m[3]); v++) {
    const k = `${book} ${m[2]}:${v}`;
    if (verses.has(k)) out.push(k);
  }
  return out;
}
function expandChapter(book, ch) {
  const b = book === "Psalm" ? "Psalms" : book;
  const out = [];
  for (const [k] of verses)
    if (k.startsWith(`${b} ${ch}:`)) out.push(k);
  return out;
}

function collectQuestions() {
  const src = readFileSync(resolve(root, "src/data/questions.ts"), "utf8");
  const checks = [];
  const blocks = src.split(/slug: "/).slice(1);
  for (const b of blocks) {
    const slug = b.slice(0, b.indexOf('"'));
    const refs = new Set();
    for (const m of b.matchAll(REF_IN_ARRAY)) {
      if (m[1]) expandRef(m[1]).forEach((k) => refs.add(k));
      else if (m[2]) expandChapter(m[2], +m[3]).forEach((k) => refs.add(k));
    }
    for (const span of quotedSpans(b)) {
      if (isCodeShaped(span)) continue;
      checks.push({ span, where: slug, refs });
    }
  }
  return checks;
}

function collectConnections() {
  const src = readFileSync(resolve(root, "src/data/connections.ts"), "utf8");
  const checks = [];
  // split at top-level keys: lines starting with  "Book C:V": [
  const entries = [...src.matchAll(/^  "((?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?)": \[/gm)];
  for (let e = 0; e < entries.length; e++) {
    const keyRef = entries[e][1];
    const body = src.slice(entries[e].index, entries[e + 1]?.index ?? src.length);
    const refs = new Set(expandRef(keyRef));
    for (const m of body.matchAll(/c\("([^"]+)"/g)) expandRef(m[1]).forEach((k) => refs.add(k));
    for (const span of quotedSpans(body)) {
      if (isCodeShaped(span)) continue;
      checks.push({ span, where: `connections:${keyRef}`, refs });
    }
  }
  return checks;
}

// ---- run ----------------------------------------------------------------------
const checks = [...collectQuestions(), ...collectConnections()];
console.log(`checking ${checks.length} quoted spans against ${verses.size} vendored WEB verses`);

const problems = [];
let passedExact = 0;
const seen = new Set();

for (const { span, where, refs } of checks) {
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
    const hit = findVerbatim(frag);
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
      const bm = bestMatch(m.frag, refs);
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
