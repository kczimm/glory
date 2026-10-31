// Usage: node scripts/reflookup.mjs "Psalm 51:11" "John 3:16-17" ...
// Prints each ref's vendored WEB text so I can verify existence and wording.
import { loadScripture, parseRef, verseKeys } from "./lib/source.mjs";

const { verses } = loadScripture();

for (const raw of process.argv.slice(2)) {
  const parsed = parseRef(raw);
  if (!parsed) {
    console.log(raw, "=> UNPARSEABLE");
    continue;
  }
  console.log(
    verseKeys(parsed)
      .map((key) => `  ${key}: ${verses.get(key) ?? "MISSING"}`)
      .join("\n"),
  );
}
