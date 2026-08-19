// Usage: node scripts/grounding.mjs <new-slug> [source-slug]
// Emits a self-contained review pack for the new question: each StudyPoint with
// its cited verse texts (from vendored scripture.ts) and the passage focus ranges.
// The reviewer reads this pack + the relevant questions.ts region and verifies
// quote accuracy and grounding without needing shell access.
import { readFileSync } from "node:fs";

const questionsSrc = readFileSync("src/data/questions.ts", "utf8");
const scriptureSrc = readFileSync("src/data/scripture.ts", "utf8");

const verses = {};
for (const m of scriptureSrc.matchAll(/^\s{2}"([^"]+)": "((?:[^"\\]|\\.)*)",$/gm)) verses[m[1]] = m[2];
const chapters = {};
for (const m of scriptureSrc.matchAll(/^\s{2}"([^"]+)": \[/gm)) chapters[m[1]] = true;
const BOOK_ALIASES = { Psalm: "Psalms" };
const canonical = (b) => BOOK_ALIASES[b] ?? b;

const target = process.argv[2];
const blocks = questionsSrc.split(/slug: "/).slice(1);
let found = null;
for (const b of blocks) {
  const slug = b.slice(0, b.indexOf('"'));
  if (slug === target) { found = b; break; }
}
if (!found) { console.error("slug not found:", target); process.exit(1); }

const get = (re) => { const m = found.match(re); return m ? m[1] : null; };
const refs = (re) => { const m = found.match(re); return m && m[1].trim() ? [...m[1].matchAll(/(?:"([^"]+)")/g)].map((s) => s[1]) : []; };

const refText = (ref) => {
  const m = ref.match(/^(.*?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return "UNPARSEABLE";
  const book = canonical(m[1]);
  const c = +m[2];
  const parts = [];
  for (let v = +m[3]; v <= +(m[4] ?? m[3]); v++) {
    const k = `${book} ${c}:${v}`;
    parts.push(`[${k}] ${verses[k] ?? "MISSING"}`);
  }
  return parts.join("\n");
};

let out = `# Grounding pack for question: ${target}\n\n`;
out += `Question: ${get(/question: "([^"]+)"/)}\n`;
out += `Summary: ${get(/summary:\s*(?:"([\s\S]*?)",\n\s*passages|"([^"]*)")/) ?? ""}\n\n`;
out += "## Passages\n";
const pm = found.match(/passages: \[([\s\S]*?)\n\s*\],/);
if (pm) {
  const pblocks = pm[1].split(/},\s*{/);
  for (const p of pblocks) {
    const book = p.match(/book: "([^"]+)"/)?.[1];
    const chapter = p.match(/chapter: (\d+)/)?.[1];
    const title = p.match(/title: "([^"]+)"/)?.[1];
    const focus = p.match(/focus: "([^"]+)"/)?.[1];
    const key = canonical(book) + " " + chapter;
    out += `- ${book} ${chapter} "${title}" focus ${focus ?? "whole chapter"} — chapter exists: ${chapters[key] === true ? "yes" : "MISSING"}\n`;
  }
}
out += "\n## Study points\n";
const pointBlocks = found.split(/heading: "/).slice(1);
for (const pb of pointBlocks) {
  const heading = pb.slice(0, pb.indexOf('"'));
  const body = pb.match(/body:\s*(?:"([\s\S]*?)",\s*\n\s*verses|"([\s\S]*?)"\n\s*verses)/) ?? pb.match(/body:\s*"([\s\S]*?)"\n\s*verses/);
  const bodyText = body ? (body[1] ?? body[2]).trim() : "(body not extracted)";
  const onlyVerses = (pb.match(/verses: \[([^\]]*)\]/)?.[1] ?? "");
  const vRefs = [...onlyVerses.matchAll(/"([^"]+)"/g)].map((s) => s[1]);
  out += `### ${heading}\nBODY: ${bodyText}\nCITED: ${vRefs.join(", ")}\n`;
  for (const v of vRefs) out += "  " + refText(v) + "\n";
  out += "\n";
}
out += "## keyVerses\n";
for (const k of refs(/keyVerses: \[([^\]]*)\]/)) out += "  " + refText(k) + "\n";

const dir = process.env.GLORY_WORKDIR ?? ".";
void dir;
const path = `scripts/packs/${target}.md`;
import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("scripts/packs", { recursive: true });
writeFileSync(path, out);
console.log("wrote", path, out.length, "bytes");