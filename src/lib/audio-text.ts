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
  /** page element id to scroll/highlight while this chunk is read (study listen) */
  targetId?: string;
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
  /** question slugs this study raises; spoken in the outro */
  raises?: string[];
  /** future questions not yet written; the outro invites them to church */
  planned?: string[];
}

export interface StudyItemsOptions {
  /** spoken line before the points, e.g. when chaining in from the chapters */
  cue?: string;
  /** page element id the outro scrolls to (the "you may wonder" panel) */
  outroTargetId?: string;
  /** resolves a raises slug to its question title for the outro */
  resolveTitle?: (slug: string) => string | null;
  /** up to 3 question titles for the hands-free "keep going" menu */
  menu?: string[];
}

// ---- normalization and chunking -------------------------------------------

/** Collapse whitespace runs and trim, matching what the app speaks. */
export function normalizeText(text: string): string {
  return text
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Chunk at a generous ceiling so an ordinary verse is one whole file; only
// genuinely long single sentences get split (at a clause boundary).
const CHUNK_MAX = 220;

/** Split text into sentence-sized chunks for utterance-length safety. */
export function chunkText(text: string): string[] {
  const clean = normalizeText(text);
  if (!clean) return [];
  if (clean.length <= CHUNK_MAX) return [clean];
  // Split on sentence breaks; absorb trailing quotes so the closing quote is
  // never orphaned into its own chunk. Curly quotes were already normalized
  // to straight ones by normalizeText, so a plain quote class suffices.
  const sentences = clean.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [clean];
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
  // Absorb any quote marks right after the separator ("…them,\" says"): the
  // next chunk starts cleanly and the pieces reassemble the source exactly.
  if (idx > -1) {
    while (idx < text.length && (text[idx] === '"' || text[idx] === "'")) idx += 1;
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
 * The study listening queue: optionally a cue, then each point with its body
 * and grounding verses (spoken as "John chapter 3, verse 16. ..."), then the
 * outro, which poses the questions the study raises. Starts at the first
 * point, not the question/summary at the top of the page. Every item carries
 * a targetId pointing at the region of the page being read, so the reader can
 * scroll/highlight it as it goes. `verseText` resolves a ref like
 * getPassageText. Mirrors StudyListen (and VisitChain's chain entry).
 */
export function studyItems(
  question: AudioTextStudy,
  verseText: (ref: string) => string | null,
  opts?: StudyItemsOptions
): AudioChunk[] {
  const out: AudioChunk[] = [];
  if (opts?.cue) {
    out.push({ id: "cue", targetId: "sp-0", label: "The study", text: opts.cue });
  }
  question.points.forEach((p, i) => {
    const prefix = `p${i}`;
    out.push({ id: `${prefix}h`, targetId: `sp-${i}`, label: p.heading, text: p.heading });
    chunkText(p.body).forEach((text, k) => {
      out.push({
        id: k === 0 ? `${prefix}b` : `${prefix}b|${k + 1}`,
        targetId: `sp-${i}-b`,
        label: p.heading,
        text,
      });
    });
    p.verses.forEach((ref, j) => {
      const text = verseText(ref);
      if (!text) return;
      const targetId = `sp-${i}-v-${j}`;
      chunkText(text).forEach((t, k) => {
        out.push({
          id: k === 0 ? ref : `${ref}|${k + 1}`,
          targetId,
          label: ref,
          text: k === 0 ? `${speechRef(ref)}. ${t}` : t,
        });
      });
    });
  });

  // The outro: pose the questions Scripture just raised, so the listener is
  // handed the next step instead of silence. Planned questions are read as
  // wonders, then the whole question is invited to church / small group.
  const titles = (question.raises ?? [])
    .map((slug) => opts?.resolveTitle?.(slug) ?? null)
    .filter((t): t is string => Boolean(t));
  const planned = question.planned ?? [];
  if (titles.length > 0 || planned.length > 0) {
    const targetId = opts?.outroTargetId;
    out.push({
      id: "outro",
      targetId,
      label: "You may wonder…",
      text:
        titles.length > 0
          ? "That completes this study. As you read it, you may now wonder:"
          : "That completes this study.",
    });
    titles.forEach((title, i) => {
      out.push({ id: `outro-${i}`, targetId, label: title, text: title });
    });
    planned.forEach((title, i) => {
      out.push({
        id: `outro-p-${i}`,
        targetId,
        label: title,
        text: `You may also wonder: ${title}.`,
      });
    });
    if (planned.length > 0) {
      out.push({
        id: "outro-closing",
        targetId,
        label: "Take it to church",
        text: "We haven't written these yet. Take your question to your church or small group: the Word answers it wherever it is asked.",
      });
    }
  }

  // The hands-free menu: name the listening options so a busy listener can
  // answer "keep going / one / two / three / stop" without touching the
  // phone. Only included when the app decides to support it (see reply.ts);
  // browsers without recognition simply omit this chunk and end gracefully.
  const menuChunk = speechMenuItem(opts?.menu ?? [], opts?.outroTargetId);
  if (menuChunk) out.push(menuChunk);
  return out;
}

/**
 * The single spoken chunk that names the hands-free "keep going" options, or
 * null when the menu is empty. Shared with the server-side queue builders so
 * prebuilt and inline queues stay byte-identical.
 */
export function speechMenuItem(menu: string[], targetId?: string): AudioChunk | null {
  if (menu.length === 0) return null;
  const text =
    menu.length === 1
      ? "To keep going, say continue. If we don't hear you, this ends here."
      : menu.length === 2
        ? `To keep going, say one for ${menu[0]}, or two for ${menu[1]}. If we don't hear you, this ends here.`
        : `To keep going, say one for ${menu[0]}, two for ${menu[1]}, or three for ${menu[2]}. If we don't hear you, this ends here.`;
  return { id: "outro-menu", targetId, label: "Keep going?", text };
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