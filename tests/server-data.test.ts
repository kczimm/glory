import { beforeAll, describe, expect, it, vi } from "vitest";
import * as kjv from "../src/data/scripture-kjv";
import {
  getChapter,
  getChapterCount,
  getChapterFocus,
  getChapterFocusPair,
  getChapterPair,
  getPassageText,
  getVerseText,
  graphVerseRefs,
  setKJVLoader,
} from "../src/data/server";
import { loadChapter, parseChapterParams } from "../src/lib/chapter";
import { canonicalRef, parseRef, verseSlug } from "../src/data/ref";
import { refFromSlug, incomingConnections } from "../src/data/verseIndex";
import { graphUsages, graphVerseTexts, optionQueues, visitChainData } from "../src/data/server";
import { loadOptionQueues } from "../src/lib/optionQueues";
import { connections, getConnections } from "../src/data/connections";
import { edgesOf } from "../src/lib/graph";
import { questions } from "../src/data/questions";

/**
 * The data layer that every page and both reading APIs sit on.
 *
 * These lookups had no direct tests because the KJV translation was reached
 * with a CommonJS `require`, which vitest cannot resolve for a TypeScript
 * module. `setKJVLoader` is the seam that makes the module reachable here; the
 * production path is unchanged.
 */
beforeAll(() => {
  setKJVLoader(() => kjv);
});

describe("verse and passage lookups", () => {
  it("resolves a verse in the WEB", () => {
    expect(getVerseText("John 3:16", "web")).toContain("God so loved");
  });

  it("resolves the Psalm alias the studies write", () => {
    expect(getVerseText("Psalm 23:1", "web")).toContain("my shepherd");
  });

  it("joins a range into one passage of text", () => {
    const passage = getPassageText("John 3:16-17", "web") ?? "";
    expect(passage).toContain("God so loved");
    // Verbatim from the vendored WEB (John 3:17), not from memory.
    expect(passage).toContain("should be saved through him");
  });

  it("returns null for a reference that does not exist", () => {
    expect(getVerseText("John 99:1", "web")).toBeNull();
    expect(getChapter("John", 999, "web")).toBeNull();
  });

  it("reads a whole chapter from the WEB", () => {
    const chapter = getChapter("John", 11, "web");
    expect(chapter?.[0].n).toBe(1);
    expect(chapter?.map((v) => v.text).join(" ")).toContain("Lazarus");
  });

  it("counts the chapters of a book", () => {
    expect(getChapterCount("Psalms", "web")).toBe(150);
    expect(getChapterCount("John", "web")).toBe(21);
    expect(getChapterCount("Narnia", "web")).toBe(0);
  });
});

describe("both readings", () => {
  it("pairs WEB and KJV verse by verse", () => {
    const pair = getChapterPair("John", 3);
    expect(pair?.length).toBeGreaterThan(0);
    const v16 = pair?.find((v) => v.n === 16);
    expect(v16?.web).toContain("God so loved");
    expect(v16?.kjv).toContain("God so loved");
    // The two translations are genuinely different texts.
    expect(v16?.web).not.toBe(v16?.kjv);
  });

  it("reads the KJV directly", () => {
    expect(getVerseText("John 3:16", "kjv")).toContain("only begotten");
  });

  it("filters a chapter to its focus range, both readings", () => {
    const focused = getChapterFocusPair("John", 3, "16-17");
    expect(focused?.map((v) => v.n)).toEqual([16, 17]);
    expect(focused?.[0].web).toBeTruthy();
    expect(focused?.[0].kjv).toBeTruthy();
  });

  it("returns the whole chapter when there is no focus", () => {
    const all = getChapterFocusPair("John", 3);
    expect(all?.length).toBe(getChapter("John", 3, "web")?.length);
  });

  it("reads the WEB focus without the KJV module", () => {
    const focused = getChapterFocus("John", 3, "16", "web");
    expect(focused?.map((v) => v.n)).toEqual([16]);
  });
});

describe("chapter requests", () => {
  it("canonicalizes the book and parses the chapter", () => {
    expect(parseChapterParams("Psalm", "23")).toEqual({
      ok: true,
      book: "Psalms",
      chapter: 23,
    });
    expect(parseChapterParams("1 Samuel", "3")).toEqual({
      ok: true,
      book: "1 Samuel",
      chapter: 3,
    });
  });

  it("rejects a missing or unknown book", () => {
    expect(parseChapterParams("", "1").ok).toBe(false);
    expect(parseChapterParams(null, "1").ok).toBe(false);
    expect(parseChapterParams("Narnia", "1").ok).toBe(false);
  });

  it("rejects chapter numbers outside the canon's bounds", () => {
    for (const bad of ["0", "-1", "abc", "1.5", "201", ""]) {
      expect(parseChapterParams("John", bad).ok, bad).toBe(false);
    }
    expect(parseChapterParams("John", "21").ok).toBe(true);
  });
});

describe("loadChapter", () => {
  it("fetches a chapter once and reuses it", async () => {
    const calls: string[] = [];
    vi.stubGlobal("fetch", async (url: string) => {
      calls.push(String(url));
      return {
        ok: true,
        json: async () => ({ verses: [{ n: 1, web: "In the beginning", kjv: "In the beginning" }] }),
      };
    });

    const first = await loadChapter("Genesis", 1);
    const second = await loadChapter("Genesis", 1);

    expect(first?.[0].web).toBe("In the beginning");
    expect(second).toBe(first);
    expect(calls).toHaveLength(1);
    expect(calls[0]).toContain("book=Genesis");
    expect(calls[0]).toContain("chapter=1");
    vi.unstubAllGlobals();
  });

  it("does not cache a failure, so a reader can retry", async () => {
    let attempt = 0;
    vi.stubGlobal("fetch", async () => {
      attempt += 1;
      if (attempt === 1) return { ok: false, json: async () => null };
      return { ok: true, json: async () => ({ verses: [{ n: 1, web: "text", kjv: null }] }) };
    });

    expect(await loadChapter("Genesis", 2)).toBeNull();
    expect(await loadChapter("Genesis", 2)).not.toBeNull();
    expect(attempt).toBe(2);
    vi.unstubAllGlobals();
  });
});

describe("option queues", () => {
  const withPassages = questions.find((q) => q.passages.length > 0)!;

  it("builds the first chapter and the study queue for one slug", () => {
    const queues = optionQueues(withPassages.slug);
    expect(queues?.label).toBe(withPassages.question);
    expect(queues?.study.sourceId).toBe(`study:${withPassages.slug}`);
    expect(queues?.firstChapter?.sourceId).toBe(
      `chapter:${withPassages.passages[0].book} ${withPassages.passages[0].chapter}`,
    );
    expect(queues?.study.items.length).toBeGreaterThan(0);
  });

  it("cues the study entry the way the chain does", () => {
    const queues = optionQueues(withPassages.slug);
    expect(queues?.study.items[0]).toMatchObject({
      id: "cue",
      text: "And now, the study.",
    });
  });

  it("returns null for a study that does not exist", () => {
    expect(optionQueues("no-such-study")).toBeNull();
  });

  it("ships only slugs and labels in the page payload", () => {
    // The queues are fetched on pick (see /api/queue); putting them back here
    // would serialize several whole studies into every study page again.
    const chain = visitChainData(withPassages);
    for (const option of chain.options) {
      expect(Object.keys(option).sort()).toEqual(["label", "slug"]);
    }
    expect(chain.segments.map((s) => s.sourceId)).toContain(
      `study:${withPassages.slug}`,
    );
  });
});

describe("loadOptionQueues", () => {
  it("asks for the picked study and caches the answer", async () => {
    const calls: string[] = [];
    vi.stubGlobal("fetch", async (url: string) => {
      calls.push(String(url));
      return {
        ok: true,
        json: async () => ({
          slug: "picked",
          label: "Picked?",
          firstChapter: { sourceId: "chapter:John 1", items: [] },
          study: { sourceId: "study:picked", items: [] },
        }),
      };
    });

    const first = await loadOptionQueues("picked");
    const second = await loadOptionQueues("picked");
    expect(first?.study.sourceId).toBe("study:picked");
    expect(second).toBe(first);
    expect(calls).toHaveLength(1);
    expect(calls[0]).toContain("study=picked");
    vi.unstubAllGlobals();
  });
});

describe("the graph's books", () => {
  it("every graph verse parses to a canonical book", () => {
    const orphans = graphVerseRefs().filter((ref) => !parseRef(ref));
    expect(orphans).toEqual([]);
  });

  it("returns canonical refs, so one verse owns one page", () => {
    // The index used to match refs with `startsWith("Psalms ")`, so every ref
    // the studies wrote as "Psalm 23:1" vanished from /verses without any
    // check failing. Refs are canonical now, end to end.
    const refs = graphVerseRefs();
    const aliased = refs.filter((ref) => ref !== canonicalRef(ref));
    expect(aliased).toEqual([]);
    expect(refs.some((ref) => ref.startsWith("Psalms "))).toBe(true);
    expect(refs.some((ref) => ref.startsWith("Psalm "))).toBe(false);
  });

  it("has no duplicate pages for one verse", () => {
    const slugs = graphVerseRefs().map(verseSlug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives one verse one slug however it is spelled", () => {
    expect(verseSlug("Psalm 23:1")).toBe("psalms-23.1");
    expect(verseSlug("Psalms 23:1")).toBe("psalms-23.1");
    expect(verseSlug("John 3:16-17")).toBe("john-3.16-17");
    expect(canonicalRef("Psalm 23:1-3")).toBe("Psalms 23:1-3");
  });

  it("reaches the same edges from either spelling", () => {
    // A real node the content writes with the alias, e.g. "Psalm 51:4".
    const alias = Object.keys(connections).find((ref) => ref.startsWith("Psalm "));
    expect(alias).toBeTruthy();
    const canonical = canonicalRef(alias!);

    const outgoing = getConnections(alias!);
    expect(outgoing.length).toBeGreaterThan(0);
    expect(outgoing).toEqual(getConnections(canonical));
    expect(outgoing.some((e) => e.target.startsWith("Psalm "))).toBe(false);
    expect(incomingConnections(alias!)).toEqual(incomingConnections(canonical));
  });

  it("counts an edge once in the undirected view", () => {
    // Two edges touching the same pair used to be listed twice: once from the
    // outgoing scan and once from the incoming one.
    const alias = Object.keys(connections).find((ref) => ref.startsWith("Psalm "));
    const rows = edgesOf(alias!);
    const seen = new Set(rows.map((e) => `${e.source}|${e.target}|${e.kind}`));
    expect(rows.length).toBeGreaterThan(0);
    expect(seen.size).toBe(rows.length);
    expect(rows.filter((e) => e.source !== canonicalRef(e.source))).toEqual([]);
  });

  it("keys the explorer payload by canonical ref", () => {
    const texts = graphVerseTexts();
    const keys = Object.keys(texts);
    expect(keys.filter((ref) => ref !== canonicalRef(ref))).toEqual([]);
    // Every key resolves to text: the whole Bible is vendored.
    expect(keys.filter((ref) => !texts[ref].web)).toEqual([]);
    expect(Object.keys(graphUsages()).filter((ref) => ref !== canonicalRef(ref))).toEqual([]);
  });

  it("resolves a verse page for every cited and connected ref", () => {
    const refs = new Set<string>();
    for (const q of questions) {
      q.keyVerses.forEach((r) => refs.add(r));
      q.points.forEach((p) => p.verses.forEach((r) => refs.add(r)));
    }
    for (const edges of Object.values(connections))
      edges.forEach((e) => refs.add(e.target));
    const broken = [...refs].filter((r) => !refFromSlug(verseSlug(r)));
    expect(broken).toEqual([]);
  });
});
