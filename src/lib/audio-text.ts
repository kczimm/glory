/**
 * Shared text shaping for the audio feature, kept dependency-free so the
 * app and the offline generation pipeline (scripts/audio-manifest.mjs) use
 * byte-identical logic. The pipeline hashes and chunks the exact same
 * strings the app speaks, so file names can never drift from playback.
 *
 * Plain .ts (no JSX, no runtime deps) so both Next and Node 22.6+ can load
 * it: the pipeline imports it directly with type stripping.
 */

export interface AudioChunk {
  id: string;
  label: string;
  text: string;
}

export interface AudioTextVerse {
  n: number;
  text: string;
}

export interface AudioTextPoint {
  heading: string;
  body: string;
  verses: string[];
}

export interface AudioTextStudy {
  slug: string;
  question: string;
  summary: string;
  points: AudioTextPoint[];
}

// ---- normalization and chunking -------------------------------------------

/** Collapse whitespace runs and trim, matching what the app speaks. */
export function normalizeText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

// Chunk at a generous ceiling so an ordinary verse is one whole file; only
// genuinely long single sentences get split (at a clause boundary).
const CHUNK_MAX = 220;

/** Split text into sentence-sized chunks for utterance-length safety. */
export function chunkText(text: string): string[] {
  const clean = normalizeText(text);
  if (!clean) return [];
  if (clean.length <= CHUNK_MAX) return [clean];
  // Split on sentence breaks; absorb the surrounding quotes (including curly
  // quotes) into the sentence so the closing quote is never orphaned.
  const sentences = clean.match(/[^.!?]+[.!?]+["')\]]\u201D\u2019]*\s*|[^.!?]+$/g) ?? [clean];
  const parts: string[] = [];
  let current = "";
  for (const raw of sentences) {
    const piece = raw.trim();
    if (!piece) continue;
    const candidate = current ? `${current} ${piece}` : piece;
    if (candidate.length > CHUNK_MAX && current) {
      parts.push(current);
      current = piece;
    } else {
      current = candidate;
    }
  }
  if (current) parts.push(current);
  return parts.flatMap((p) => (p.length > CHUNK_MAX ? splitLong(p) : [p]));
}

/**
 * Split a single piece longer than the cap at clause boundaries (commas,
 * semicolons, colons) so the break lands on a natural pause; fall back to a
 * word splice only if there is no punctuation at all. An ordinary verse ends
 * up as one file because it fits under CHUNK_MAX.
 */
function splitLong(text: string): string[] {
  const out: string[] = [];
  let rest = text.trim();
  while (rest.length > CHUNK_MAX) {
    const cut = findClauseCut(rest, CHUNK_MAX);
    if (cut < 0) break;
    out.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trimStart();
  }
  if (rest.length) out.push(rest.trim());
  return out.flatMap((s) => (s.length > CHUNK_MAX ? hardSplit(s) : [s]));
}

/** Index just after the last clause separator within the first `max` chars. */
function findClauseCut(text: string, max: number): number {
  const window = text.slice(0, max);
  let idx = -1;
  for (let i = 0; i < window.length; i++) {
    const ch = window[i];
    if (ch === "," || ch === ";" || ch === ":") idx = i + 1;
  }
  return idx;
}

/** Last resort: splice on word boundaries. */
function hardSplit(text: string): string[] {
  const out: string[] = [];
  let current = "";
  for (const word of text.split(" ")) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > CHUNK_MAX && current) {
      out.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) out.push(current);
  return out;
}

/** Format a verse ref for the ear: "John chapter 3, verse 16". */
export function speechRef(ref: string): string {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return ref;
  const book = m[1];
  const chapter = Number(m[2]);
  const start = Number(m[3]);
  const end = Number(m[4] ?? m[3]);
  return start === end
    ? `${book} chapter ${chapter}, verse ${start}`
    : `${book} chapter ${chapter}, verses ${start} through ${end}`;
}

// ---- verse slicing ---------------------------------------------------------

/** content book name -> canonical scripture key */
const BOOK_ALIASES: Record<string, string> = {
  Psalm: "Psalms",
};

export function canonicalBook(book: string): string {
  return BOOK_ALIASES[book] ?? book;
}

/** Keep only verses within an optional focus range like "5-15" or "16". */
export function filterFocus(
  verses: AudioTextVerse[],
  focus: string | undefined
): AudioTextVerse[] {
  if (!focus) return verses;
  const m = focus.match(/^(\d+)(?:-(\d+))?$/);
  if (!m) return verses;
  const start = Number(m[1]);
  const end = Number(m[2] ?? m[1]);
  return verses.filter((v) => v.n >= start && v.n <= end);
}

// ---- queue builders (must mirror the components exactly) -------------------

/**
 * The chapter reading queue: an intro line, then each verse (or its
 * sentence chunks). Mirrors ChapterReader.
 */
export function chapterItems(
  book: string,
  chapter: number,
  verses: AudioTextVerse[]
): AudioChunk[] {
  const out: AudioChunk[] = [
    { id: "intro", label: `${book} ${chapter}`, text: `${book} chapter ${chapter}.` },
  ];
  for (const v of verses) {
    const ref = `${book} ${chapter}:${v.n}`;
    chunkText(v.text).forEach((text, k) => {
      out.push({ id: k === 0 ? ref : `${ref}|${k + 1}`, label: ref, text });
    });
  }
  return out;
}

/**
 * The study listening queue: the question, summary, then each point with
 * its body and grounding verses (spoken as "John chapter 3, verse 16. ...").
 * Mirrors StudyListen. `verseText` resolves a ref like getPassageText.
 */
export function studyItems(
  question: AudioTextStudy,
  verseText: (ref: string) => string | null
): AudioChunk[] {
  const out: AudioChunk[] = [
    { id: "q", label: "The question", text: question.question },
    { id: "s", label: "In short", text: question.summary },
  ];
  question.points.forEach((p, i) => {
    const prefix = `p${i}`;
    out.push({ id: `${prefix}h`, label: p.heading, text: p.heading });
    chunkText(p.body).forEach((text, k) => {
      out.push({
        id: k === 0 ? `${prefix}b` : `${prefix}b|${k + 1}`,
        label: p.heading,
        text,
      });
    });
    p.verses.forEach((ref) => {
      const text = verseText(ref);
      if (!text) return;
      chunkText(text).forEach((t, k) => {
        out.push({
          id: k === 0 ? ref : `${ref}|${k + 1}`,
          label: ref,
          text: k === 0 ? `${speechRef(ref)}. ${t}` : t,
        });
      });
    });
  });
  return out;
}

// ---- hashing ---------------------------------------------------------------

const hashCache = new Map<string, string>();

function rotl32(x: number, n: number): number {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function hex32(x: number): string {
  return (x >>> 0).toString(16).padStart(8, "0");
}

/**
 * Lowercase hex SHA-1 (RFC 3174), pure JS so it is synchronous (the first
 * play() must land inside the user's tap on iOS) and identical in every
 * context, including plain-http LAN dev where crypto.subtle does not exist.
 * Node's crypto sha1 produces the same bytes for the generation pipeline.
 */
export function sha1Hex(text: string): string {
  const cached = hashCache.get(text);
  if (cached) return cached;

  const bytes = new TextEncoder().encode(text);
  const blockCount = Math.ceil((bytes.length + 9) / 64);
  const padded = new Uint8Array(blockCount * 64);
  padded.set(bytes);
  padded[bytes.length] = 0x80; // append 0x80, zeros, then the bit length
  const dv = new DataView(padded.buffer);
  const bits = bytes.length * 8;
  dv.setUint32(padded.length - 8, Math.floor(bits / 0x100000000) >>> 0, false);
  dv.setUint32(padded.length - 4, bits >>> 0, false);

  let h0 = 0x67452301;
  let h1 = 0xefcdab89;
  let h2 = 0x98badcfe;
  let h3 = 0x10325476;
  let h4 = 0xc3d2e1f0;
  const w = new Int32Array(80);

  for (let i = 0; i < padded.length; i += 64) {
    for (let t = 0; t < 16; t++) w[t] = dv.getInt32(i + t * 4, false);
    for (let t = 16; t < 80; t++) {
      w[t] = rotl32(w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16], 1);
    }
    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    for (let t = 0; t < 80; t++) {
      const f =
        t < 20
          ? (b & c) | (~b & d)
          : t < 40
            ? b ^ c ^ d
            : t < 60
              ? (b & c) | (b & d) | (c & d)
              : b ^ c ^ d;
      const k = t < 20 ? 0x5a827999 : t < 40 ? 0x6ed9eba1 : t < 60 ? 0x8f1bbcdc : 0xca62c1d6;
      const tmp = (rotl32(a, 5) + f + e + k + w[t]) | 0;
      e = d;
      d = c;
      c = rotl32(b, 30);
      b = a;
      a = tmp;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
  }

  const hex = hex32(h0) + hex32(h1) + hex32(h2) + hex32(h3) + hex32(h4);
  hashCache.set(text, hex);
  return hex;
}