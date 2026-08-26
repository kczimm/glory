#!/usr/bin/env node
/**
 * Export Glory studies as book-ready Markdown.
 *
 * The studies in src/data/questions.ts stay the single source of truth;
 * this script renders them into a linear manuscript. Re-run after any
 * content change.
 *
 * Usage:
 *   node scripts/export-book.mjs              -> manuscripts/glory-manuscript.md (every study)
 *   node scripts/export-book.mjs --sample     -> manuscripts/sample.md (four representative studies)
 *   node scripts/export-book.mjs --out FILE   -> write to FILE instead of the default
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { questions } from "../src/data/questions.ts";
import { categories } from "../src/data/categories.ts";
import { verses } from "../src/data/scripture.ts";
import { parseRef } from "../src/data/ref.ts";

// ---------------------------------------------------------------------------
// Ordering: chapters are numbered across the whole volume, category by
// category (categories in `order`, studies within a category by `order`),
// so cross-references ("see chapter 21") are stable regardless of subset.
// ---------------------------------------------------------------------------

const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

const ordered = [];
for (const cat of sortedCategories) {
  const inCat = questions.filter((q) => q.category === cat.slug).sort((a, b) => a.order - b.order);
  for (const q of inCat) ordered.push({ q, cat });
}
const chapterOf = new Map(ordered.map(({ q }, i) => [q.slug, i + 1]));

// ---------------------------------------------------------------------------
// Scripture resolution against the vendored WEB.
// ---------------------------------------------------------------------------

function passageText(ref) {
  const p = parseRef(ref);
  if (!p) return null;
  const parts = [];
  for (let v = p.from; v <= p.to; v++) {
    const t = verses[`${p.book} ${p.chapter}:${v}`];
    if (t == null) return null;
    parts.push(t);
  }
  return parts.join(" ");
}

/** Blockquote of WEB text with its reference beneath (no dash, per copy style). */
function verseQuote(ref) {
  const text = passageText(ref);
  if (!text) return `> [unresolved reference: ${ref}]`;
  return `> ${text}\n>\n> *${ref}*`;
}

// ---------------------------------------------------------------------------
// Rendering.
// ---------------------------------------------------------------------------

function chapterLabel(slug) {
  const n = chapterOf.get(slug);
  return n ? `chapter ${n}` : null;
}

function studyMarkdown({ q, cat }) {
  const out = [];
  const n = chapterOf.get(q.slug);
  out.push(`## Chapter ${n}. ${q.question}`);
  out.push("");
  out.push(`*${cat.title}*`);
  out.push("");

  // Lead: the summary as an epigraph-style opening.
  out.push(`**${q.summary}**`);
  out.push("");

  // Reading assignment: whole chapters first, teaching second.
  out.push("### Before you read");
  out.push("");
  for (const p of q.passages) {
    const focusNote = p.focus ? `, paying closest attention to verses ${p.focus}` : "";
    out.push(`Read **${p.book} ${p.chapter}**${focusNote}, on the lookout for: *${p.lookFor}*`);
    out.push("");
  }

  // The teaching.
  out.push("### The study");
  out.push("");
  for (const pt of q.points) {
    out.push(`#### ${pt.heading}`);
    out.push("");
    out.push(pt.body);
    out.push("");
    for (const ref of pt.verses) {
      out.push(verseQuote(ref));
      out.push("");
    }
  }

  // Verses to keep.
  if (q.keyVerses.length > 0) {
    out.push("### Key verses");
    out.push("");
    for (const ref of q.keyVerses) {
      out.push(verseQuote(ref));
      out.push("");
    }
  }

  // The engine: what the reading itself raises next.
  if (q.raises.length > 0 || q.planned.length > 0) {
    out.push("### As you read, you may wonder");
    out.push("");
    for (const slug of q.raises) {
      const target = questions.find((x) => x.slug === slug);
      if (!target) continue;
      const label = chapterLabel(slug);
      out.push(`- *${target.question}*${label ? `, taken up in ${label}` : ""}`);
    }
    if (q.planned.length > 0) {
      if (q.raises.length > 0) out.push("");
      out.push(
        "These questions are left open on purpose. Carry them into your own reading, or take them to a church or small group, and see what the Scriptures say."
      );
      out.push("");
      for (const planned of q.planned) {
        out.push(`- *${planned}*`);
      }
    }
    out.push("");
  }

  return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

function frontMatter() {
  return [
    "# Glory",
    "",
    "### A question-driven journey through Scripture",
    "",
    "> Every answer grounded in exact verses. Read whole chapters, let the",
    "> Scripture itself raise the next question, and follow where it leads.",
    "",
    "Scripture quotations are from the World English Bible (public domain).",
    "",
    "[Front matter: an introduction, and how to use this book.]",
    "",
  ].join("\n");
}

function toc() {
  const lines = ["## Contents", ""];
  for (const cat of sortedCategories) {
    const inCat = ordered.filter(({ cat: c }) => c.slug === cat.slug);
    if (inCat.length === 0) continue;
    lines.push(`**${cat.title}**`);
    lines.push("");
    for (const { q } of inCat) {
      lines.push(`${chapterOf.get(q.slug)}. ${q.question}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Entry point.
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const outFile = resolve(
  args.includes("--out") ? args[args.indexOf("--out") + 1]
  : args.includes("--sample") ? "manuscripts/sample.md"
  : "manuscripts/glory-manuscript.md"
);

let doc;
let studyCount = ordered.length;
if (args.includes("--sample")) {
  // A representative spread: one entry point, one narrative, one mid-journey
  // hub, one step that follows from it. Numbering matches the full volume.
  const sampleSlugs = [
    "what-is-the-gospel",
    "what-went-wrong-in-eden",
    "how-can-i-be-saved",
    "what-does-it-mean-to-be-born-again",
  ];
  const picked = sampleSlugs.map((slug) => ordered.find(({ q }) => q.slug === slug)).filter(Boolean);
  studyCount = picked.length;
  doc =
    frontMatter() +
    toc().replace(/^## Contents$/, "*(Chapter numbers below match the full volume; only four studies are rendered here.)*\n\n## Contents") +
    "\n---\n\n" +
    picked.map(studyMarkdown).join("\n---\n\n");
} else {
  let currentCat = null;
  const parts = [];
  for (const item of ordered) {
    if (item.cat.slug !== currentCat) {
      currentCat = item.cat.slug;
      parts.push(`\n---\n\n# Part: ${item.cat.title}\n\n*${item.cat.tagline}*\n`);
    }
    parts.push(studyMarkdown(item));
  }
  doc = frontMatter() + toc() + parts.join("\n");
}

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, doc, "utf8");

const unresolved = [...doc.matchAll(/\[unresolved reference: ([^\]]+)\]/g)].map((m) => m[1]);
console.log(`Wrote ${outFile}`);
console.log(
  `${studyCount} studies, ` +
    `${doc.split(/\s+/).length.toLocaleString()} words`
);
if (unresolved.length > 0) {
  console.error(`WARNING: ${unresolved.length} unresolved references:`);
  for (const r of new Set(unresolved)) console.error(`  - ${r}`);
  process.exitCode = 1;
}
