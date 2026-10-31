// Usage: node scripts/grounding.mjs <new-slug> [source-slug]
// Emits a self-contained review pack for the new question: each StudyPoint with
// its cited verse texts (from vendored scripture.ts) and the passage focus ranges.
// The reviewer reads this pack + the relevant questions.ts region and verifies
// quote accuracy and grounding without needing shell access.
import {
  canonicalBook as canonical,
  loadQuestionBlocks,
  loadScripture,
  parseRef,
  verseKeys,
} from "./lib/source.mjs";

const { verses, chapters } = loadScripture();

const target = process.argv[2];
const found = loadQuestionBlocks().find((b) => b.slug === target)?.body ?? null;
if (!found) {
  console.error("slug not found:", target);
  process.exit(1);
}

const get = (re) => { const m = found.match(re); return m ? m[1] : null; };
const refs = (re) => { const m = found.match(re); return m && m[1].trim() ? [...m[1].matchAll(/(?:"([^"]+)")/g)].map((s) => s[1]) : []; };

const refText = (ref) => {
  const parsed = parseRef(ref);
  if (!parsed) return "UNPARSEABLE";
  return verseKeys(parsed)
    .map((key) => `[${key}] ${verses.get(key) ?? "MISSING"}`)
    .join("\n");
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
    out += `- ${book} ${chapter} "${title}" focus ${focus ?? "whole chapter"} — chapter exists: ${chapters.has(key) ? "yes" : "MISSING"}\n`;
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