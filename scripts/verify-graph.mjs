#!/usr/bin/env node
/**
 * Verifies the structural health of the question graph in src/data/questions.ts.
 *
 * The pedagogy lives in the edges: every study should be reachable through the
 * "Scripture raises the next question" flow, and every edge should resolve.
 * This script enforces that mechanically so a forgotten reciprocal edge cannot
 * silently orphan a study:
 *
 *  1. Every slug is unique.
 *  2. Every ref in raises[] / followsFrom[] resolves to an existing slug
 *     (planned[] holds question TITLES, checked separately).
 *  3. No study raises itself.
 *  4. No unreachable studies: every study must appear in at least one other
 *     study's raises[] list UNLESS it is a trail head (empty followsFrom[]),
 *     discoverable from the home and /questions pages. A study that declares
 *     followsFrom[] is mid-journey by its own claim, so the parent it names
 *     must actually raise it.
 *  5. No dead ends: every study has at least one raises[] or planned[] entry,
 *     so the journey never stops.
 *  6. No stale planned: a planned[] title that already matches an existing
 *     study's question should have become a raises[] slug instead.
 *
 * Exit codes: 0 = graph healthy, 1 = violations found.
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(resolve(root, "src/data/questions.ts"), "utf8");

// ---- parse each study block --------------------------------------------------
// Blocks start at "    slug: ..." and run until the next one.
const blocks = src
 .split(/\n    slug:/)
 .slice(1)
 .map((b) => "    slug:" + b);

const list = (block, key) =>
 block
  .match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "s"))?.[1]
  ?.match(/"([^"]+)"/g)
  ?.map((s) => s.slice(1, -1)) ?? [];

const studies = blocks.map((b) => ({
 slug: b.match(/slug:\s*"([^"]+)"/)?.[1] ?? "",
 question: b.match(/\n    question:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "",
 raises: list(b, "raises"),
 followsFrom: list(b, "followsFrom"),
 planned: list(b, "planned"),
}));

if (studies.some((s) => !s.slug)) {
 console.error("verify:graph: could not parse a slug in every study block");
 process.exit(1);
}

const errors = [];
const fail = (msg) => errors.push(msg);

const slugs = studies.map((s) => s.slug);
const slugSet = new Set(slugs);

// 1. unique slugs
for (const [slug, count] of slugs.reduce(
 (m, s) => m.set(s, (m.get(s) ?? 0) + 1),
 new Map(),
)) {
 if (count > 1) fail(`duplicate slug: ${slug} (appears ${count} times)`);
}

// 2. edges resolve + 3. no self-edges
for (const s of studies) {
 for (const key of ["raises", "followsFrom"]) {
  for (const target of s[key]) {
   if (!slugSet.has(target))
    fail(`${s.slug}: ${key} -> "${target}" does not match any study slug`);
   if (target === s.slug) fail(`${s.slug}: ${key} includes itself`);
  }
 }
}

// 4. no unreachable studies: mid-journey studies (declared followsFrom)
// must be raised by someone; empty-followsFrom studies are trail heads
const raisedBy = new Map(slugs.map((s) => [s, []]));
for (const s of studies)
 for (const target of s.raises) raisedBy.get(target)?.push(s.slug);
for (const s of studies) {
 if (s.followsFrom.length > 0 && raisedBy.get(s.slug).length === 0)
  fail(
   `unreachable: no study raises "${s.slug}" though it declares followsFrom [${s.followsFrom.join(", ")}]; add it to the raises[] of one of those studies`,
  );
}

// 5. no dead ends: every study raises or plans something
for (const s of studies) {
 if (s.raises.length === 0 && s.planned.length === 0)
  fail(`dead end: "${s.slug}" has empty raises[] and planned[]`);
}

// 6. no stale planned: a planned title that already exists as a study
const questionTitles = new Set(studies.map((s) => s.question.toLowerCase()));
for (const s of studies) {
 for (const title of s.planned) {
  if (questionTitles.has(title.toLowerCase()))
   fail(
    `stale planned: "${s.slug}" plans "${title}" but that study already exists; link it via raises[] instead`,
   );
 }
}

if (errors.length) {
 console.error(`verify:graph: ${errors.length} problem(s) found:\n`);
 for (const e of errors) console.error(`  - ${e}`);
 process.exit(1);
}
console.log(
 `verify:graph: OK (${studies.length} studies, all edges resolve, no orphans, no dead ends)`,
);
