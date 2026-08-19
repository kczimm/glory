import type { Category } from "./types";

/**
 * Categories double as trails: each one is a journey of questions
 * through the essential truths about God and our relationship with Him.
 */
export const categories: Category[] = [
  {
    slug: "holy-spirit",
    title: "The Holy Spirit",
    tagline:
      "Who is He, how does He work, and how do we receive Him? Begin where Scripture begins — with the Spirit of God.",
    order: 1,
    entry: ["who-is-the-holy-spirit"],
  },
  {
    slug: "jesus-christ",
    title: "Jesus Christ",
    tagline:
      "Who is Jesus, why did He come, and how are we saved through Him? The most essential questions of the faith.",
    order: 2,
    entry: ["who-is-jesus"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
