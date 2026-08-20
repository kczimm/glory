// Sanity check for src/lib/search.ts ranking against the real content.
import { searchQuestions, searchScripture } from "../src/lib/search.ts";

const cases = [
  "how can I know God's will", // natural language, stopwords + apostrophe
  "who is the holy spirit",    // exact question wording
  "Who is Jesus?",
  "born again",
  "grace",
  "eternal life",
  "pray",
  "the",                       // stopwords only
  "sin",
  "gods",                      // plural stem
  "rapture",
];

const MUST_MATCH = new Set(["sin", "gods", "grace", "eternal life", "pray"]);

let failures = 0;
for (const term of cases) {
  const qs = searchQuestions(term, 5);
  const vs = searchScripture(term, 3);
  console.log(`\n“${term}”`);
  for (const [i, q] of qs.entries()) {
    console.log(`  ${i + 1}. ${q.question}  [${q.category}]`);
  }
  if (!qs.length && MUST_MATCH.has(term)) {
    console.error(`FAIL: “${term}” should match at least one study`);
    failures++;
  }
  const refs = vs.map((v) => v.ref).join(", ");
  console.log(`  verses: ${refs || "none"}`);
}

// Strong expectations (these are the app's actual content, so no drift):
const expect = [
  ["how can I know God's will", "How do I know God's will?", 0],
  ["who is the holy spirit", "Who is the Holy Spirit?", 0],
  ["Who is Jesus?", "Who is Jesus?", 0],
  ["born again", "What does it mean to be born again?", 0],
];
for (const [term, expectTitle, pos] of expect) {
  const got = searchQuestions(term, 5).map((q) => q.question);
  if (got[pos] !== expectTitle) {
    console.error(`EXPECT FAILED: “${term}” → expected ${expectTitle} at #${pos + 1}, got ${got.slice(0, 3).join(" | ")}`);
    failures++;
  }
}

// "grace": the two grace-titled studies should outrank incidental matches.
const grace = searchQuestions("grace", 12).map((q) => q.question);
if (!grace.includes("What is grace?")) {
  console.error(`EXPECT FAILED: “grace” should surface “What is grace?” in top 12; got ${grace.slice(0, 4).join(" | ")}`);
  failures++;
}

// Known verse first: John 3:16 is a key verse in the studies.
const j316 = searchScripture("God so loved the world", 5).map((v) => v.ref);
if (!j316.includes("John 3:16")) {
  console.error(`EXPECT FAILED: “God so loved the world” should surface John 3:16; got ${j316.join(", ")}`);
  failures++;
}

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);