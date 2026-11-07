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
  const readInstead = page.getByRole("link", { name: "John 14", exact: true }).first();
  await expect(readInstead).toBeVisible();
  await expect(readInstead).toHaveAttribute("href", "/bible/john-14");

  await context.close();
});
