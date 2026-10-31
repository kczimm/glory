import { describe, expect, it } from "vitest";
import { graphVerseRefs, verses } from "../src/data/server";
import { parseRef, verseKeys } from "../src/data/ref";
import { searchScripture } from "../src/lib/search";

describe("searchScripture ranking", () => {
  it("floats a verse the studies cite as a range above an earlier incidental match", () => {
    // The graph cites Romans 8:38 as part of "Romans 8:38-39". Compared raw
    // against canonical verse keys that range never counted as known, so
    // 1 Corinthians 3:22 (earlier in the index) took the top spot.
    const refs = searchScripture("things present", 5).map((v) => v.ref);
    expect(refs[0]).toBe("Romans 8:38");
  });

  it("floats a verse the studies cite with the Psalm alias", () => {
    // Content writes "Psalm 23:1"; the verse index is keyed "Psalms 23:1".
    const refs = searchScripture("is my shepherd", 5).map((v) => v.ref);
    expect(refs[0]).toBe("Psalms 23:1");
  });
});

/**
 * The original implementation, kept here as the specification: scan every
 * verse's haystack in verse order, bucket hits into known/other, then take the
 * known page if it fills the limit. The optimized scanner must return exactly
 * this, for any query, including partial words, phrases, and no matches at all.
 */
function reference(term: string, limit: number): string[] {
  const t = term.trim().toLowerCase().replace(/\s+/g, " ");
  if (!t || limit <= 0) return [];
  const known = new Set<string>();
  for (const ref of graphVerseRefs()) {
    const parsed = parseRef(ref);
    if (parsed) for (const key of verseKeys(parsed)) known.add(key);
  }
  const knownHits: string[] = [];
  const otherHits: string[] = [];
  for (const ref of Object.keys(verses)) {
    if (`${ref} ${verses[ref]}`.toLowerCase().includes(t)) {
      (known.has(ref) ? knownHits : otherHits).push(ref);
    }
  }
  const pick = knownHits.length >= limit ? knownHits : [...knownHits, ...otherHits];
  return pick.slice(0, limit);
}

const QUERIES = [
  "things present",
  "is my shepherd",
  "God so loved the world",
  "born of water",
  "love",
  "the",
  "sin",
  "grace",
  "Psalm 23",
  "shepherd",
  "y",
  "a",
  "e",
  "hope",
  "  love   your   enemies ",
  "zzzznotfound",
];

describe("searchScripture hot path", () => {
  for (const q of QUERIES) {
    for (const limit of [1, 3, 8, 40]) {
      it(`matches the naive scan for "${q}" (limit ${limit})`, () => {
        const got = searchScripture(q, limit).map((v) => v.ref);
        expect(got).toEqual(reference(q, limit));
      });
    }
  }

  it("returns the verse text alongside the ref", () => {
    const [hit] = searchScripture("God so loved the world", 1);
    expect(hit.ref).toBe("John 3:16");
    expect(hit.text).toBe(verses["John 3:16"]);
  });

  it("respects an empty query and a zero limit", () => {
    expect(searchScripture("", 8)).toEqual([]);
    expect(searchScripture("   ", 8)).toEqual([]);
    expect(searchScripture("love", 0)).toEqual([]);
  });
});
