import "server-only";
import { verses as defaultVerses, questions, graphVerseRefs } from "@/data/server";
import { getCategory } from "@/data";
import { parseRef, verseKeys } from "@/data/ref";
import type { Question } from "@/data/types";
import type { TranslationCode } from "@/lib/translation-shared";

/**
 * Search over the vendored World English Bible and over the study questions.
 * Pure data logic: safe to run on the server (build/request) or client.
 *
 * Finding = relevance:
 *  - Common English words ("how", "can", "I", "the") are ignored, so a
 *    natural-language query like "how can I know God's will" still matches
 *    a study about "the will of God".
 *  - Question hits are ranked: exact title matches first, then summaries,
 *    categories, study points, passages.
 *  - Scripture hits float the verses the studies actually cite and the
 *    cross-reference hubs to the top, instead of raw book order.
 */

interface Entry {
  ref: string;
  haystack: string;
}

/**
 * One translation's search index.
 *
 * The haystacks are kept per verse (a single joined string was measured here
 * and lost: it becomes a two-byte string because some verses carry curly
 * quotes, so scanning it costs about twice per byte). Instead, `byChar` is a
 * necessary-condition prefilter: a verse that contains a query necessarily
 * contains each of the query's characters, so we only run `includes` over the
 * verses that contain the query's rarest character. On a free-text query that
 * is a few hundred verses instead of 31,000.
 */
interface VerseIndex {
  entries: Entry[];
  /** bucket -> entry indexes (ascending), one bucket per [0-9a-z] character */
  byChar: Int32Array[];
  /** every entry index, ascending; used when a query has no indexed character */
  all: Int32Array;
}

const BUCKETS = 36; // 0-9 then a-z

/** Bucket for a lowercased char code, or -1 when it is not indexed. */
function bucketOf(code: number): number {
  if (code >= 48 && code <= 57) return code - 48; // 0-9
  if (code >= 97 && code <= 122) return 10 + code - 97; // a-z
  return -1;
}

// Indexes per translation, cached
const indexes: Map<TranslationCode, VerseIndex> = new Map();

const NO_ENTRIES = new Int32Array(0);

function buildIndex(translation: TranslationCode = "web"): VerseIndex {
  const cached = indexes.get(translation);
  if (cached) return cached;
  const verses = translation === "web" ? defaultVerses : getTranslationVerses(translation);
  const keys = Object.keys(verses);
  const entries: Entry[] = new Array(keys.length);
  const lists: number[][] = Array.from({ length: BUCKETS }, () => []);
  const seen = new Uint8Array(BUCKETS);
  const touched: number[] = [];

  for (let i = 0; i < keys.length; i++) {
    const ref = keys[i];
    const haystack = `${ref} ${verses[ref]}`.toLowerCase();
    entries[i] = { ref, haystack };
    for (let j = 0; j < haystack.length; j++) {
      const b = bucketOf(haystack.charCodeAt(j));
      if (b >= 0 && !seen[b]) {
        seen[b] = 1;
        touched.push(b);
      }
    }
    for (const b of touched) lists[b].push(i);
    for (const b of touched) seen[b] = 0;
    touched.length = 0;
  }

  const all = new Int32Array(keys.length);
  for (let i = 0; i < keys.length; i++) all[i] = i;

  const index: VerseIndex = {
    entries,
    byChar: lists.map((l) => Int32Array.from(l)),
    all,
  };
  indexes.set(translation, index);
  return index;
}

/**
 * The shortest bucket list among the query's characters, i.e. the fewest verses
 * that could possibly contain it. Empty when a query character occurs in no
 * verse at all (so the query cannot match); `all` when it has no indexed
 * character to filter on.
 */
function candidates(index: VerseIndex, query: string): Int32Array {
  let best: Int32Array | null = null;
  const tested = new Uint8Array(BUCKETS);
  for (let i = 0; i < query.length; i++) {
    const b = bucketOf(query.charCodeAt(i));
    if (b < 0 || tested[b]) continue;
    tested[b] = 1;
    const list = index.byChar[b];
    if (!list.length) return NO_ENTRIES;
    if (!best || list.length < best.length) best = list;
  }
  return best ?? index.all;
}

/** Get verses for a specific translation. */
function getTranslationVerses(translation: TranslationCode): Record<string, string> {
  // Dynamic import to avoid shipping all translations to the client
  if (translation === "kjv") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { verses } = require("@/data/scripture-kjv");
    return verses;
  }
  return defaultVerses;
}

export interface VerseHit {
  ref: string;
  text: string;
}

/** Words that carry no search meaning; filtered from multi-word queries. */
const STOPWORDS = new Set([
  "a", "about", "am", "an", "and", "are", "as", "at", "be", "because",
  "been", "but", "by", "can", "could", "did", "do", "does", "for", "from",
  "had", "has", "have", "he", "her", "his", "how", "i", "if", "in", "into",
  "is", "it", "its", "me", "my", "no", "not", "of", "on", "or", "our",
  "out", "over", "she", "so", "that", "the", "their", "them", "there",
  "these", "they", "this", "to", "was", "we", "what", "when", "where",
  "which", "who", "why", "will", "with", "would", "you", "your",
]);

/** Reduce a word to a common root so singular/plural and verb forms match. */
function stem(w: string): string {
  const s = w.toLowerCase().replace(/['']s$/, "");
  if (s.endsWith("ies") && s.length > 4) return s.slice(0, -3) + "y";
  if (s.endsWith("es") && s.length > 3) return s.slice(0, -2);
  if (s.endsWith("s") && s.length > 3) return s.slice(0, -1);
  return s;
}

interface QueryParts {
  /** raw words with stopwords removed, for exact-phrase checks */
  rawWords: string[];
  /** e.g. "know gods will" (stopwords stripped, unstemmed) */
  rawPhrase: string;
  /** stemmed, deduplicated words for token matching */
  words: string[];
}

function queryParts(term: string): QueryParts {
  const rawWords = term
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
  return {
    rawWords,
    rawPhrase: rawWords.join(" "),
    words: [...new Set(rawWords.map(stem))],
  };
}

// ---- questions ------------------------------------------------------------

/**
 * A pre-tokenized search surface per field, so every keystroke reuses the
 * same work instead of re-splitting all 120 studies.
 */
interface FieldSurface {
  low: string;
  tokens: Set<string>;
}

interface QuestionSurface {
  q: Question;
  question: FieldSurface;
  summary: FieldSurface;
  category: FieldSurface;
  points: FieldSurface;
  passages: FieldSurface;
}

const FIELD_WEIGHTS: { name: keyof Omit<QuestionSurface, "q">; weight: number }[] = [
  { name: "question", weight: 90 },
  { name: "summary", weight: 35 },
  { name: "category", weight: 25 },
  { name: "points", weight: 20 },
  { name: "passages", weight: 15 },
];

let surfaceCache: QuestionSurface[] | null = null;

function buildSurfaces(): QuestionSurface[] {
  if (surfaceCache) return surfaceCache;
  surfaceCache = questions.map((q) => {
    const cat = getCategory(q.category);
    const surface = (text: string): FieldSurface => {
      const low = text.toLowerCase();
      return { low, tokens: new Set(low.split(/\W+/).filter(Boolean).map(stem)) };
    };
    return {
      q,
      question: surface(q.question),
      summary: surface(q.summary),
      category: surface(`${cat?.title ?? ""} ${cat?.tagline ?? ""}`),
      points: surface(
        q.points.flatMap((p) => [p.heading, p.body]).join(" ")
      ),
      passages: surface(
        q.passages.flatMap((p) => [p.title, p.lookFor]).join(" ")
      ),
    };
  });
  return surfaceCache;
}

const RX_CACHE = new Map<string, RegExp>();
function wordBoundary(word: string): RegExp {
  let rx = RX_CACHE.get(word);
  if (!rx) {
    rx = new RegExp(
      `(^|\\W)${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=\\W|$)`,
      "i"
    );
    RX_CACHE.set(word, rx);
  }
  return rx;
}

/**
 * Does this word match the field? Stem tokens first (so "sins" meets "sin"),
 * then exact substring for longer words, then word-boundary for short words
 * (so "sin" does not match "sincere").
 */
function wordHits(word: string, f: FieldSurface): boolean {
  if (f.tokens.has(word)) return true;
  if (word.length > 3) return f.low.includes(word);
  if (word.length === 3) return wordBoundary(word).test(f.low);
  return false;
}

/** How many query words hit this field (0..words.length). */
function fieldHits(words: string[], f: FieldSurface): number {
  let n = 0;
  for (const w of words) if (wordHits(w, f)) n++;
  return n;
}

/**
 * Search questions by title, summary, category, study points, and passages.
 * Ranked: exact question wording first, then where the words hit and how many
 * of them hit. Common words are already stripped, so queries stay natural.
 */
export function searchQuestions(term: string, limit = 6): Question[] {
  const { words, rawPhrase } = queryParts(term);
  if (!words.length) return [];

  const scored: { q: Question; score: number }[] = [];

  for (const s of buildSurfaces()) {
    let score = 0;
    let matchedAny = false;

    // The learner typed our exact question (words in order, punctuation/space
    // differences forgiven), e.g. "who is the holy spirit".
    const normalizedPhrase = term.toLowerCase().split(/\W+/).filter(Boolean).join(" ");
    const titlePhrase = s.question.low.split(/\W+/).filter(Boolean).join(" ");
    if (normalizedPhrase && titlePhrase === normalizedPhrase) {
      score += 250;
      matchedAny = true;
    } else if (rawPhrase && s.question.low.includes(rawPhrase)) {
      // Every meaningful word of the query appears in the question title.
      score += 200;
      matchedAny = true;
    }

    for (const f of FIELD_WEIGHTS) {
      const surface = s[f.name];
      const hits = fieldHits(words, surface);
      if (!hits) continue;
      matchedAny = true;
      const ratio = hits / words.length;
      score += f.weight * (ratio * 1.5 + (hits === words.length ? 0.5 : 0));
    }

    // All query words appear in the title: a near-title match beats
    // incidental mention in a study body.
    if (words.length >= 2 && fieldHits(words, s.question) === words.length) {
      score += 150;
    }

    if (matchedAny) scored.push({ q: s.q, score });
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.q.order - b.q.order ||
      a.q.question.length - b.q.question.length
  );
  return scored.slice(0, limit).map((s) => s.q);
}

// ---- scripture ------------------------------------------------------------

/**
 * Every verse the studies cite or the graph touches: the "known" verses.
 *
 * The graph's refs are not verse keys: they are ranges ("Acts 17:11-12") and
 * content-side aliases ("Psalm 23:1"), while the verse index is keyed by
 * canonical single verses ("Psalms 23:1"). Comparing the raw refs against
 * those keys meant a range or an aliased ref never counted as known, so most
 * study-cited verses silently failed to float to the top. Both sides are
 * normalized here, through the same parseRef/verseKeys the rest of the app
 * uses.
 */
let knownRefs: Set<string> | null = null;
function knownVerseRefs(): Set<string> {
  if (knownRefs) return knownRefs;
  knownRefs = new Set<string>();
  for (const ref of graphVerseRefs()) {
    const parsed = parseRef(ref);
    if (!parsed) continue;
    for (const key of verseKeys(parsed)) knownRefs.add(key);
  }
  return knownRefs;
}

/** Case-insensitive substring search of the whole Bible, known verses first. */
export function searchScripture(term: string, limit = 8, translation: TranslationCode = "web"): VerseHit[] {
  const t = term.trim().toLowerCase().replace(/\s+/g, " ");
  if (!t || limit <= 0) return [];
  const verses = translation === "web" ? defaultVerses : getTranslationVerses(translation);
  const index = buildIndex(translation);
  const known = knownVerseRefs();

  // Only the verses that could contain the query are scanned, in verse order,
  // and the loop stops as soon as the known bucket holds a full page (from
  // then on `pick` is knownHits alone). Common words used to walk all 31k
  // verses and collect thousands of hits only to slice them away.
  const knownHits: number[] = [];
  const otherHits: number[] = [];
  for (const i of candidates(index, t)) {
    const entry = index.entries[i];
    if (!entry.haystack.includes(t)) continue;
    if (known.has(entry.ref)) {
      knownHits.push(i);
      if (knownHits.length >= limit) break;
    } else if (otherHits.length < limit) {
      otherHits.push(i);
    }
  }

  const pick = knownHits.length >= limit ? knownHits : [...knownHits, ...otherHits];
  return pick
    .slice(0, limit)
    .map((i) => ({ ref: index.entries[i].ref, text: verses[index.entries[i].ref] }));
}

export interface SearchResults {
  verses: VerseHit[];
  questions: Question[];
}

export function searchAll(term: string, verseLimit = 8, qLimit = 6, translation: TranslationCode = "web"): SearchResults {
  const t = term.trim().toLowerCase();
  if (!t) return { verses: [], questions: [] };
  return {
    verses: searchScripture(t, verseLimit, translation),
    questions: searchQuestions(t, qLimit),
  };
}

export { snippet } from "./snippet";
export type { Snippet } from "./snippet";