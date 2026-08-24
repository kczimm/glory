// Usage: node scripts/append-q.mjs <json-file>
// Inserts one Question object (from JSON) at the end of src/data/questions.ts.
import { readFileSync, writeFileSync } from "node:fs";
const file = process.argv[2];
const q = JSON.parse(readFileSync(file, "utf8"));
const path = "src/data/questions.ts";
let s = readFileSync(path, "utf8");
const idx = s.lastIndexOf("];");
const head = s.slice(0, idx).replace(/,\s*$/, "\n");

// Build a pretty TS object literal.
// Returns an array of lines representing the object wrapped in { ... }.
function obj(o, indent) {
  const pad = " ".repeat(indent);
  const lines = [`${pad}{`];
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (typeof v === "string") {
      lines.push(`${pad}  ${k}: ${JSON.stringify(v)},`);
    } else if (Array.isArray(v) && v.length > 0 && typeof v[0] === "object") {
      // array of objects (passages, points): flat ones inline, complex ones multiline
      lines.push(`${pad}  ${k}: [`);
      for (const item of v) {
        if (isFlat(item) && inlineLength(item) <= 160) {
          lines.push(`${pad}    { ${Object.entries(item).map(([ik, iv]) => `${ik}: ${JSON.stringify(iv)}`).join(", ")} },`);
        } else {
          lines.push(...obj(item, indent + 4));
          lines[lines.length - 1] += ",";
        }
      }
      lines.push(`${pad}  ],`);
    } else if (Array.isArray(v)) {
      lines.push(`${pad}  ${k}: [${v.map(e => JSON.stringify(e)).join(", ")}],`);
    } else {
      lines.push(`${pad}  ${k}: ${JSON.stringify(v)},`);
    }
  }
  lines.push(`${pad}}`);
  return lines;
}
const isFlat = (o) => Object.values(o).every((v) => typeof v !== "object" || v === null);
const inlineLength = (o) => Object.entries(o).reduce((n, [k, v]) => n + k.length + JSON.stringify(v).length + 4, 0);

const block = obj(q, 2).join("\n") + ",";
writeFileSync(path, head + ",\n" + block + "\n];\n");
console.log("appended", q.slug);
