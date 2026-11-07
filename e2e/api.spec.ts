import { expect, test } from "@playwright/test";

/**
 * The route handlers, checked the way the browser calls them. These cover the
 * contract the client code depends on (shapes, caps, error codes) and the
 * 404 behaviour that a stale render path used to turn into a 200.
 */
test("chapter API returns both readings", async ({ request }) => {
  const res = await request.get("/api/chapter?book=John&chapter=3");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.book).toBe("John");
  expect(body.chapter).toBe(3);
  expect(body.verses.length).toBeGreaterThan(30);
  const v16 = body.verses.find((v: { n: number }) => v.n === 16);
  expect(v16.web).toContain("God so loved");
  expect(v16.kjv).toContain("only begotten");
});

test("chapter API rejects bad input and missing chapters", async ({ request }) => {
  expect((await request.get("/api/chapter?book=Narnia&chapter=1")).status()).toBe(400);
  expect((await request.get("/api/chapter?book=John&chapter=99")).status()).toBe(404);
  expect((await request.get("/api/chapter?book=John")).status()).toBe(400);
});

test("queue API builds a study's speech queues", async ({ request }) => {
  const res = await request.get("/api/queue?study=who-is-the-holy-spirit");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.study.sourceId).toBe("study:who-is-the-holy-spirit");
  expect(body.study.items.length).toBeGreaterThan(10);
  expect(body.firstChapter.sourceId).toBe("chapter:John 14");
  expect((await request.get("/api/queue?study=nope")).status()).toBe(404);
});

test("search API finds verses and studies", async ({ request }) => {
  const res = await request.get("/api/search?q=shepherd&verses=3&studies=3");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.translation).toBe("web");
  expect(body.verses.length).toBeGreaterThan(0);
  expect(body.verses[0].ref).toMatch(/\d+:\d+/);
});

test("unknown pages answer 404, known pages answer 200", async ({ request }) => {
  // Enumerated routes reject anything else at the router (`dynamicParams`).
  expect((await request.get("/bible/narnia-1")).status()).toBe(404);
  expect((await request.get("/questions/no-such-study")).status()).toBe(404);
  expect((await request.get("/trails/nope")).status()).toBe(404);
  expect((await request.get("/verses/book/narnia")).status()).toBe(404);

  // The two catch-all verse routes must still render any real verse on demand
  // (search deep-links into them), and a slug that does not resolve is a 404
  // too. It used to be a 200 carrying not-found UI while a root loading.tsx
  // wrapped every page in a Suspense boundary; without that boundary the
  // status is set honestly.
  expect((await request.get("/verses/zzz-1.1")).status()).toBe(404);
  expect((await request.get("/connections/zzz-1.1")).status()).toBe(404);

  expect((await request.get("/bible/john-3")).status()).toBe(200);
  expect((await request.get("/questions/what-is-the-trinity")).status()).toBe(200);
  expect((await request.get("/trails/gospel")).status()).toBe(200);
  expect((await request.get("/verses/book/psalms")).status()).toBe(200);
  expect((await request.get("/verses/psalms-23.1")).status()).toBe(200);
  expect((await request.get("/connections/john-8.58")).status()).toBe(200);
});
