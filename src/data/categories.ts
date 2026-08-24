import type { Category } from "./types";

/**
 * Categories double as trails: each one is a journey of questions
 * through the essential truths about God and our relationship with Him.
 */
export const categories: Category[] = [
  {
    slug: "gospel",
    title: "The Gospel",
    tagline:
      "The good news from first to last: the gospel itself, and the grace, justification, faith, and repentance that make it up.",
    order: 1,
    entry: ["what-is-the-gospel"],
  },
  {
    slug: "god-the-father",
    title: "God the Father",
    tagline:
      "Who is God the Father, and what is our relationship with Him? Jesus came to reveal the Father and to bring us home to Him.",
    order: 2,
    entry: ["who-is-the-father"],
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
    slug: "holy-spirit",
    title: "The Holy Spirit",
    tagline:
      "Who is He, how does He work, and how do we receive Him? Begin where Scripture begins: with the Spirit of God.",
    order: 4,
    entry: ["who-is-the-holy-spirit"],
  },
  {
    slug: "our-walk",
    title: "Our Walk with Him",
    tagline:
      "How we come to know Him and what the life He gives looks like: new birth, assurance, and following Him when we fail.",
    order: 5,
    entry: ["what-does-it-mean-to-be-born-again"],
  },
  {
    slug: "suffering-will",
    title: "Suffering & God's Will",
    tagline:
      "The hardest questions and the comfort of Scripture: why there is evil, whether God is in control, and how we know His will.",
    order: 6,
    entry: ["why-does-god-allow-suffering"],
  },
  {
    slug: "prayer",
    title: "Prayer",
    tagline:
      "Talking with the Father through Christ: how to pray, what the Lord's Prayer teaches, and whether He truly hears us.",
    order: 7,
    entry: ["how-do-i-pray"],
  },
  {
    slug: "word-of-god",
    title: "The Word of God",
    tagline:
      "Why we can trust the Bible, how to read it, and why the whole Book is about Jesus.",
    order: 8,
    entry: ["can-i-trust-the-bible"],
  },
  {
    slug: "church",
    title: "The Church",
    tagline:
      "The body of Christ and its two great signs: why we need the church, and what baptism and the Lord's Supper mean.",
    order: 9,
    entry: ["why-do-i-need-the-church"],
  },
  {
    slug: "our-hope",
    title: "Our Hope",
    tagline:
      "Where this is all going: what happens when we die, the return of Christ, the resurrection, and the new creation.",
    order: 10,
    entry: ["what-happens-when-i-die"],
  },
  {
    slug: "who-we-are",
    title: "Who We Are",
    tagline:
      "What it means to be made in God's image, what sin is, and the conflict of flesh and Spirit within us.",
    order: 11,
    entry: ["what-does-it-mean-to-be-made-in-gods-image"],
  },
  {
    slug: "unseen-realm",
    title: "The Unseen Realm",
    tagline:
      "The spiritual world around us: who Satan is, what angels do, and how we fight spiritual warfare.",
    order: 12,
    entry: ["who-is-satan"],
  },
  {
    slug: "story-of-scripture",
    title: "The Story of Scripture",
    tagline:
      "One unfolding story: creation, fall, Abraham, Exodus, kings and exile, and the promised Son who brings it all to its goal.",
    order: 13,
    entry: ["what-is-the-bibles-big-story"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
