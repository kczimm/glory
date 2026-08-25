/**
 * Canonical book list and URL slugs for the whole-Bible reader (/bible).
 * Dependency-free so any route can import it without pulling in the
 * vendored Scripture. Book spellings match the keys of `chapters` in
 * src/data/scripture.ts exactly ("Song of Songs", "Psalms").
 */
export const BIBLE_BOOKS = [
  "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
  "1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
  "Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs",
  "Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
  "Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah",
  "Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians",
  "2 Corinthians","Galatians","Ephesians","Philippians","Colossians",
  "1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon",
  "Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation",
] as const;

/** URL-safe slug for a book: "1 Samuel" -> "1-samuel". */
export function bookSlug(book: string): string {
  return book.trim().toLowerCase().replace(/\s+/g, "-");
}

/** URL slug for a chapter: "John 3" -> "john-3". */
export function chapterSlug(book: string, chapter: number): string {
  return `${bookSlug(book)}-${chapter}`;
}

const booksBySlug = new Map(BIBLE_BOOKS.map((b) => [bookSlug(b), b]));

/** Reverse: "john" -> "John", "1-samuel" -> "1 Samuel". Undefined if unknown. */
export function bookFromSlug(slug: string): string | undefined {
  return booksBySlug.get(slug.toLowerCase());
}
