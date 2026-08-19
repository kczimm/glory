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
function obj(o, indent) {
  const pad = " ".repeat(indent);
  const pad2 = " ".repeat(indent + 2);
  const lines = [];
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (typeof v === "string") {
      lines.push(`${pad2}${k}: ${JSON.stringify(v)},`);
    } else if (Array.isArray(v) && v.length > 0 && typeof v[0] === "object") {
      // array of objects (passages, points) -> multiline
      lines.push(`${pad2}${k}: [`);
      for (let i = 0; i < v.length; i++) {
        lines.push(obj(v[i], indent + 2).join("\n"));
        lines[lines.length - 1] += (i < v.length - 1) ? "," : "";
      }
      lines.push(`${pad2}],`);
    } else if (Array.isArray(v)) {
      lines.push(`${pad2}${k}: [${v.map(e => JSON.stringify(e)).join(", ")}],`);
    } else {
      lines.push(`${pad2}${k}: ${JSON.stringify(v)},`);
    }
  }
  return lines;
}

const bodyLines = obj(q, 0);
const block = "  {\n" + bodyLines.join("\n") + "\n  },";
writeFileSync(path, head + ",\n" + block + "\n];\n");
console.log("appended", q.slug);
