import { expect, test } from "@playwright/test";

/**
 * A study page: the chapter reader is the one surface that fetches its text
 * on demand, and it is the regression this suite was written for. Before the
 * payload work the whole chapter sat in the HTML; after it, the text must
 * arrive when the reader opens it, and must not be in the page before that.
 */
test("the chapter reader loads its text when opened", async ({ page }) => {
  await page.goto("/questions/who-is-the-holy-spirit");

  await expect(
    page.getByRole("heading", { name: "Who is the Holy Spirit?", level: 1 }),
  ).toBeVisible();

  // Collapsed: no chapter markup in the document at all.
  const reader = page.locator("#reader-chapter-John-14");
  await expect(reader).toHaveCount(0);

  const toggle = page.getByRole("button", { name: /John 14/ }).first();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");

  await expect(reader).toBeVisible();
  await expect(reader).toContainText(/let your heart be troubled/i, {
    timeout: 15_000,
  });
});

test("chapter notes arrive with the text and stay collapsed", async ({ page }) => {
  await page.goto("/questions/who-is-the-holy-spirit");

  // Notes ride the chapter fetch, so nothing about them is in the page payload
  // until the reader is opened. Asserting on the served HTML is the point: the
  // absence of a rendered node would not catch notes serialized into the RSC
  // flight data.
  expect(await page.content()).not.toContain("glōssais");

  // The marker is the only thing that ships in the page: a boolean saying
  // notes exist, so a reader knows before opening.
  const actsToggle = page.getByRole("button", { name: /Acts 2/ }).first();
  await expect(actsToggle.getByText("Notes", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /John 16/ }).first()).toContainText("Notes");

  const reader = page.locator("#reader-chapter-Acts-2").first();
  await actsToggle.click();
  await expect(reader).toContainText(/mighty works of God/i, { timeout: 15_000 });
  expect(await page.content()).toContain("glōssais");

  // The notes sit below the scrolling text, so they never get buried inside
  // the 420px window the chapter reads through.
  const notes = page.locator("#notes-reader-chapter-Acts-2");
  await expect(notes).toBeVisible();
  await expect(notes.getByText("Notes on this chapter")).toBeVisible();
  expect(await notes.getAttribute("open")).toBeNull();

  await notes.getByText("Notes on this chapter").click();
  await expect(notes).toContainText("Pentecost");
  await expect(notes).toContainText("glōssais");
});

test("the notes marker shows only where notes exist", async ({ page }) => {
  await page.goto("/questions/what-is-the-trinity");
  await expect(page.getByRole("button", { name: /Hebrews 1/ }).first().getByText("Notes", { exact: true })).toBeVisible();

  const matthew = page.getByRole("button", { name: /Matthew 28/ }).first();
  await expect(matthew).toBeVisible();
  await expect(matthew.getByText("Notes", { exact: true })).toHaveCount(0);
});

test("the study itself is server-rendered without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/questions/who-is-the-holy-spirit");

  // The study and its grounding verses do not depend on JS. (They did while a
  // root loading.tsx wrapped every page in a Suspense boundary: the content
  // arrived as a <template> that only JS unpacked, so a reader without JS sat
  // on "Turning the page…" forever.)
  await expect(
    page.getByRole("heading", { name: /What the Scripture says/i }),
  ).toBeVisible();

  // The chapter reader cannot expand without JS, so it hands the reader the
  // prerendered chapter instead of a dead button.
  // The "Notes" marker advertises a panel that needs JavaScript, so it is
  // hidden on this path rather than pointing at a surface that cannot show it.
  await expect(page.getByText("Notes", { exact: true }).first()).toBeHidden();

  const readInstead = page.getByRole("link", { name: "John 14", exact: true }).first();
  await expect(readInstead).toBeVisible();
  await expect(readInstead).toHaveAttribute("href", "/bible/john-14");

  await context.close();
});
