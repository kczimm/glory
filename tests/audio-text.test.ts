import { describe, expect, it } from "vitest";
import {
  chapterItems,
  chunkText,
  filterFocus,
  normalizeText,
  sha1Hex,
  speechRef,
  studyItems,
  visitIntroItems,
} from "../src/lib/audio-text";
import type { AudioTextStudy } from "../src/lib/audio-text";

/**
 * The queue builders: the pure half of the audio stack.
 *
 * The player (speech.ts) and the file manifest both depend on these being
 * exactly right, and the file name of every chunk is the hash of its text, so
 * a change in here silently invalidates the pre-generated catalog. Before
 * this file none of it had a test. These assert behaviour (order, labels,
 * ids, chunk bounds), not a frozen catalog dump, so adding content does not
 * force an update.
 */
const study: AudioTextStudy = {
  slug: "a-study",
  question: "What is the question?",
  summary: "A short summary.",
  points: [
    {
      heading: "First point",
      body: "The body of the first point.",
      verses: ["John 3:16", "John 3:17"],
    },
    {
      heading: "Second point",
      body: "",
      verses: ["John 3:99"],
    },
  ],
  raises: ["next-question"],
  planned: [],
};

const texts: Record<string, string> = {
  "John 3:16": "For God so loved the world.",
  "John 3:17": "For God didn't send his Son into the world to judge the world.",
};

const verseText = (ref: string) => texts[ref] ?? null;

describe("normalizeText", () => {
  it("straightens curly quotes and collapses whitespace", () => {
    expect(normalizeText("  “Hi”\n\n  there ‘friend’  ")).toBe("\"Hi\" there 'friend'");
  });

  it("returns an empty string for whitespace only", () => {
    expect(normalizeText(" \n\t ")).toBe("");
  });
});

describe("chunkText", () => {
  it("returns nothing for empty text", () => {
    expect(chunkText("")).toEqual([]);
    expect(chunkText("   ")).toEqual([]);
  });

  it("keeps a short verse whole", () => {
    expect(chunkText("For God so loved the world.")).toEqual([
      "For God so loved the world.",
    ]);
  });

  it("splits long text on sentence boundaries without losing words", () => {
    const sentence = "This is a sentence about the Word of God that is long enough to matter.";
    const long = Array.from({ length: 8 }, () => sentence).join(" ");
    const chunks = chunkText(long);
    expect(chunks.length).toBeGreaterThan(1);
    for (const chunk of chunks) {
      expect(chunk.length).toBeGreaterThan(0);
      expect(chunk).not.toMatch(/\s{2,}/);
    }
    // Nothing is dropped: every sentence survives exactly once.
    expect(chunks.join(" ").match(/This is a sentence about the Word of God/g)).toHaveLength(8);
  });
});

describe("sha1Hex", () => {
  it("matches the known vectors the file naming depends on", () => {
    expect(sha1Hex("")).toBe("da39a3ee5e6b4b0d3255bfef95601890afd80709");
    expect(sha1Hex("abc")).toBe("a9993e364706816aba3e25717850c26c9cd0d89d");
  });

  it("is stable and content-addressed", () => {
    const text = "For God so loved the world.";
    expect(sha1Hex(text)).toBe(sha1Hex(text));
    expect(sha1Hex(text)).not.toBe(sha1Hex(`${text} `));
  });
});

describe("chapterItems", () => {
  const verses = [
    { n: 1, text: "In the beginning was the Word." },
    { n: 2, text: "The same was in the beginning with God." },
  ];

  it("starts with the spoken chapter heading", () => {
    const items = chapterItems("John", 1, verses);
    expect(items[0]).toEqual({
      id: "intro",
      label: "John 1",
      text: "John chapter 1.",
    });
  });

  it("addresses every chunk by verse ref, with unique ids", () => {
    const items = chapterItems("John", 1, verses);
    const ids = items.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.slice(1)).toEqual(["John 1:1", "John 1:2"]);
    expect(items[1].label).toBe("John 1:1");
    expect(items[1].text).toBe("In the beginning was the Word.");
  });

  it("suffixes continuation chunks of one verse", () => {
    const long = `${"A sentence about the Word. ".repeat(20)}`.trim();
    const items = chapterItems("Psalms", 119, [{ n: 105, text: long }]);
    const ref = "Psalms 119:105";
    expect(items[1].id).toBe(ref);
    expect(items[2]?.id).toBe(`${ref}|2`);
    expect(items.slice(1).map((i) => i.label)).toEqual(
      items.slice(1).map(() => ref),
    );
  });

  it("still yields the heading when a chapter has no text", () => {
    expect(chapterItems("John", 1, [])).toHaveLength(1);
  });
});

describe("studyItems", () => {
  it("reads heading, body, and grounding verses in order", () => {
    const items = studyItems(study, verseText);
    // No resolveTitle, so there is no outro: the study ends at its last point
    // rather than reading a "you may wonder" line with no questions in it.
    expect(items.map((i) => i.id)).toEqual([
      "p0h",
      "p0b",
      "John 3:16",
      "John 3:17",
      "p1h",
    ]);
  });

  it("labels each region with the element the follow-along scrolls to", () => {
    const items = studyItems(study, verseText);
    expect(items.find((i) => i.id === "p0h")).toMatchObject({
      targetId: "sp-0",
      label: "First point",
    });
    expect(items.find((i) => i.id === "p0b")?.targetId).toBe("sp-0-b");
    expect(items.find((i) => i.id === "John 3:16")?.targetId).toBe("sp-0-v-0");
  });

  it("announces the reference before the verse text", () => {
    const items = studyItems(study, verseText);
    expect(items.find((i) => i.id === "John 3:16")?.text).toBe(
      `${speechRef("John 3:16")}. For God so loved the world.`,
    );
  });

  it("skips verses the resolver cannot reach", () => {
    const items = studyItems(study, verseText);
    expect(items.some((i) => i.id === "John 3:99")).toBe(false);
  });

  it("adds the chaining cue only when asked", () => {
    expect(studyItems(study, verseText).some((i) => i.id === "cue")).toBe(false);
    const cued = studyItems(study, verseText, { cue: "And now, the study." });
    expect(cued[0]).toMatchObject({ id: "cue", text: "And now, the study." });
  });

  it("routes the outro at the raises panel and names the questions it raises", () => {
    const items = studyItems(study, verseText, {
      outroTargetId: "raises",
      resolveTitle: (slug) => (slug === "next-question" ? "What comes next?" : null),
    });
    const outro = items.find((i) => i.id === "outro");
    expect(outro?.targetId).toBe("raises");
    expect(items.some((i) => i.text.includes("What comes next?"))).toBe(true);
  });

  it("never emits an empty chunk", () => {
    for (const chunk of studyItems(study, verseText, { cue: "Cue." })) {
      expect(chunk.text.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("visitIntroItems", () => {
  it("opens with the question, then the summary", () => {
    const items = visitIntroItems({
      slug: "a-study",
      question: "What is the question?",
      summary: "A short summary.",
    });
    expect(items[0]).toMatchObject({ id: "q", targetId: "q-question" });
    expect(items[0].text).toContain("What is the question?");
    expect(items[1]).toMatchObject({ id: "summary", targetId: "q-summary" });
    expect(items[1].text).toBe("A short summary.");
  });
});

describe("filterFocus", () => {
  const verses = [14, 15, 16, 17, 18].map((n) => ({ n, text: `verse ${n}` }));

  it("keeps only the focus range", () => {
    expect(filterFocus(verses, "16-17").map((v) => v.n)).toEqual([16, 17]);
  });

  it("keeps everything when there is no focus", () => {
    expect(filterFocus(verses, undefined).map((v) => v.n)).toEqual([14, 15, 16, 17, 18]);
  });

  it("keeps everything when the focus cannot be parsed", () => {
    // A focus the parser rejects must not silently drop the reading.
    expect(filterFocus(verses, "later").map((v) => v.n)).toEqual([14, 15, 16, 17, 18]);
  });
});
