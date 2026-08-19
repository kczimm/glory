// Usage: node scripts/reflookup.mjs "Gen 1:2" "Psalm 51:11" ...
// Prints each ref's vendored WEB text so I can verify existence and wording.
import { readFileSync } from "node:fs";
const s = readFileSync("src/data/scripture.ts", "utf8");
const verses = {};
for (const m of s.matchAll(/^\s{2}"([^"]+)": "((?:[^"\\]|\\.)*)",$/gm)) verses[m[1]] = m[2];
const BOOK_ALIASES = { Psalm: "Psalms" };
const canonical = (b) => BOOK_ALIASES[b] ?? b;
for (const raw of process.argv.slice(2)) {
  const m = raw.match(/^(.*?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) { console.log(raw, "=> UNPARSEABLE"); continue; }
  const book = canonical(m[1]);
  const c = +m[2];
  const from = +m[3];
  const to = +(m[4] ?? m[3]);
  const parts = [];
  for (let v = from; v <= to; v++) {
    const key = `${book} ${c}:${v}`;
    parts.push(verses[key] !== undefined ? `  ${key}: ${verses[key]}` : `  ${key}: MISSING`);
  }
  console.log(parts.join("\n"));
}