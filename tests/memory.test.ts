import { describe, expect, it, vi } from "vitest";

/**
 * The memory store is browser-only (localStorage at module scope cache), so
 * each test seeds storage, resets the module registry, and imports it fresh.
 */
async function freshStore(seed?: unknown) {
  const store = new Map<string, string>();
  if (seed !== undefined) store.set("glory:memory", JSON.stringify(seed));
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => void store.set(key, value),
    removeItem: (key: string) => void store.delete(key),
  });
  vi.resetModules();
  return import("../src/lib/memory");
}

describe("memory cards", () => {
  it("repairs a legacy card that lost its schedule instead of writing NaN", async () => {
    const memory = await freshStore([
      { ref: "John 3:16", due: 1_700_000_000_000 }, // no interval/ease/reps
    ]);
    const [card] = memory.getSnapshot();
    expect(card.ref).toBe("John 3:16");
    expect(card.interval).toBe(0);
    expect(card.ease).toBe(2.5);
    expect(card.reps).toBe(0);

    memory.gradeVerse("John 3:16", 2);
    const [graded] = memory.getSnapshot();
    expect(Number.isFinite(graded.due)).toBe(true);
    expect(Number.isNaN(graded.due)).toBe(false);
    // A held card must come due again: NaN would make it wait forever.
    expect(graded.due).toBeGreaterThan(Date.now());
    expect(memory.dueCards(Date.now() + 2 * 86_400_000)).toHaveLength(1);
  });

  it("drops entries that cannot be a card at all", async () => {
    const memory = await freshStore([
      "not a card",
      null,
      { ref: "" },
      { ref: "   " },
      { due: 1 },
      { ref: "Psalm 23:1", due: 1, interval: 1, ease: 2.5, reps: 1 },
    ]);
    expect(memory.getSnapshot().map((c) => c.ref)).toEqual(["Psalm 23:1"]);
  });

  it("keeps the schedule of a well-formed card untouched", async () => {
    const memory = await freshStore([
      {
        ref: "Psalm 23:1",
        addedAt: 1000,
        due: 2000,
        interval: 7,
        ease: 2.6,
        reps: 3,
      },
    ]);
    expect(memory.getSnapshot()[0]).toEqual({
      ref: "Psalm 23:1",
      addedAt: 1000,
      due: 2000,
      interval: 7,
      ease: 2.6,
      reps: 3,
    });
  });
});
