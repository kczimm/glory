import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Fresh module instance per test so the internal cache doesn't leak state.
async function loadJourney() {
  const mod = await import("../src/lib/journey");
  return mod;
}

describe("journey store (no localStorage)", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", undefined);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("starts empty and survives a missing localStorage", async () => {
    const journey = await loadJourney();
    expect(journey.getSnapshot()).toEqual([]);
    journey.recordVisit("john-3");
    // write() fails silently without localStorage; the in-memory trail still works
    expect(journey.getSnapshot().map((e) => e.slug)).toEqual(["john-3"]);
  });
});

describe("journey store (with localStorage)", () => {
  let store: Record<string, string>;

  beforeEach(() => {
    vi.resetModules();
    store = {};
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("records visits most-recent-first and dedupes slugs", async () => {
    const journey = await loadJourney();
    journey.recordVisit("a");
    journey.recordVisit("b");
    journey.recordVisit("a");
    expect(journey.getSnapshot().map((e) => e.slug)).toEqual(["b", "a"]);
  });

  it("persists to localStorage and reloads on first read", async () => {
    const journey = await loadJourney();
    journey.recordVisit("a");
    expect(JSON.parse(store["glory:journey"])).toEqual([
      { slug: "a", at: expect.any(Number) },
    ]);

    // A second module instance reads what was persisted.
    vi.resetModules();
    const fresh = await loadJourney();
    expect(fresh.getSnapshot().map((e) => e.slug)).toEqual(["a"]);
  });

  it("ignores corrupted or wrong-shaped stored data", async () => {
    store["glory:journey"] = "not json at all";
    const journey = await loadJourney();
    expect(journey.getSnapshot()).toEqual([]);

    vi.resetModules();
    store["glory:journey"] = JSON.stringify([
      { slug: "good", at: 1 },
      "garbage",
      null,
      { noSlug: true },
      42,
    ]);
    const fresh = await loadJourney();
    expect(fresh.getSnapshot()).toEqual([{ slug: "good", at: 1 }]);
  });

  it("caps the trail length", async () => {
    const journey = await loadJourney();
    for (let i = 0; i < 70; i++) journey.recordVisit(`q-${i}`);
    const snap = journey.getSnapshot();
    expect(snap.length).toBeLessThanOrEqual(60);
    expect(snap[snap.length - 1].slug).toBe("q-69");
  });

  it("clears completely", async () => {
    const journey = await loadJourney();
    journey.recordVisit("a");
    journey.clearJourney();
    expect(journey.getSnapshot()).toEqual([]);
    expect(store["glory:journey"]).toBeUndefined();
  });
});
