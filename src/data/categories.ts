import type { Category } from "./types";

/**
 * Categories double as trails: each one is a journey of questions
 * through the essential truths about God and our relationship with Him.
 */
export const categories: Category[] = [
  {
    slug: "god-the-father",
    title: "God the Father",
    tagline:
      "Who is God the Father, and what is our relationship with Him? Jesus came to reveal the Father and to bring us home to Him.",
    order: 1,
    entry: ["who-is-the-father"],
  },
  {
    slug: "holy-spirit",
    title: "The Holy Spirit",
    tagline:
      "Who is He, how does He work, and how do we receive Him? Begin where Scripture begins: with the Spirit of God.",
    order: 2,
    entry: ["who-is-the-holy-spirit"],
  },
  {
    slug: "jesus-christ",
    title: "Jesus Christ",
    tagline:
      "Who is Jesus, why did He come, and how are we saved through Him? The most essential questions of the faith.",
    order: 3,
    entry: ["who-is-jesus"],
  },
  {
    slug: "our-walk",
    title: "Our Walk with Him",
    tagline:
      "How we come to know Him and what the life He gives looks like: new birth, assurance, and following Him when we fail.",
    order: 4,
    entry: ["what-does-it-mean-to-be-born-again"],
  },
  {
    slug: "gospel",
    title: "The Gospel",
    tagline:
      "The good news from first to last: the gospel itself, and the grace, justification, faith, and repentance that make it up.",
    order: 5,
    entry: ["what-is-the-gospel"],
  },
  {
    slug: "suffering-will",
    title: "Suffering & God's Will",
    tagline:
      "The hardest questions and the comfort of Scripture: why there is evil, whether God is in control, and how we know His will.",
    order: 6,
    entry: ["why-does-god-allow-suffering"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
