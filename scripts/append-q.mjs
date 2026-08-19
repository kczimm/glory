// Usage: node scripts/append-q.mjs <json-file>
// The JSON file contains a single question object ({ slug, ..., order }).
// It is inserted at the end of src/data/questions.ts (before the closing "];").
import { readFileSync, writeFileSync } from "node:fs";
const file = process.argv[2];
if (!file) { console.error("pass a json file"); process.exit(1); }
const q = JSON.parse(readFileSync(file, "utf8"));
const path = "src/data/questions.ts";
let s = readFileSync(path, "utf8");
const idx = s.lastIndexOf("];");
if (idx < 0) { console.error("no closing ];"); process.exit(1); }
const head = s.slice(0, idx).replace(/,\s*$/, "\n");
const jsonToTs = (o) => JSON.stringify(o, null, 2).replace(/"([^"]+)":/g, "$1:").replace(/,/g, ",");
// Build a TS object literal block
function obj(o) {
  const lines = [];
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (typeof v === "string") lines.push(`${k}: ${JSON.stringify(v)},`);
    else if (Array.isArray(v)) lines.push(`${k}: [${v.map(e => objInline(e)).join(", ")}],`);
    else lines.push(`${k}: ${objInline(v)},`);
  }
  return "{\n" + lines.map(l => "    " + l).join("\n") + "\n  }";
}
function objInline(o) {
  if (Array.isArray(o)) return "[" + o.map(e => objInline(e)).join(", ") + "]";
  if (typeof o === "object") {
    return "{ " + Object.keys(o).map(k => `${k}: ${objInline(o[k])}`).join(", ") + " }";
  }
  return JSON.stringify(o);
}
const block = "  " + obj(q) + ",";
writeFileSync(path, head + block + "\n];\n");
console.log("appended", q.slug);
