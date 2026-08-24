#!/usr/bin/env node
// temp helper: print WEB verses by reference, e.g. node scripts/tmp-verse.mjs "Matthew 6:25" "Psalm 42:5"
import { readFileSync } from "node:fs";
const src = readFileSync("src/data/scripture.ts", "utf8");
const map = new Map();
for (const m of src.matchAll(/"([^"]+ \d+:\d+)":\s*"((?:[^"\\]|\\.)*)"/g)) map.set(m[1], JSON.parse(`"${m[2]}"`));
for (const ref of process.argv.slice(2)) {
  const [book, c, v] = ref.match(/^(.+?) (\d+):(\d+(?:-\d+)?)$/).slice(1);
  if (v.includes("-")) {
    const [a, b] = v.split("-").map(Number);
    for (let i = a; i <= b; i++) console.log(`${book} ${c}:${i} | ${map.get(`${book} ${c}:${i}`) ?? "MISSING"}`);
  } else console.log(`${ref} | ${map.get(ref) ?? "MISSING"}`);
}
