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
  // The Story of Scripture: a canonical walk from Genesis to Christ.
  // These trails are ordered; read them in sequence for the whole sweep
  // of the Bible's narrative. New Testament story trails (the Gospels,
  // Acts, the letters in their setting, Revelation) are planned as this
  // arc fills in; until then the doctrinal trails above carry those eras.
  {
    slug: "in-the-beginning",
    title: "In the Beginning",
    tagline:
      "Creation, fall, flood, and Babel: a world made very good, a rebellion that broke it, and the first promise of rescue. Genesis 1 through 11.",
    order: 13,
    entry: ["what-is-the-bibles-big-story"],
  },
  {
    slug: "the-fathers",
    title: "The Fathers",
    tagline:
      "God calls one family to carry one promise: Abraham, Isaac, Jacob, and Joseph, through whom blessing reaches every family on earth. Genesis 12 through 50.",
    order: 14,
    entry: ["why-did-god-call-abraham"],
  },
  {
    slug: "exodus-and-covenant",
    title: "Exodus & Covenant",
    tagline:
      "Out of Egypt, through the sea, to Sinai: redemption by blood, a covenant at the mountain, and life with a holy God among His people. Exodus through Deuteronomy.",
    order: 15,
    entry: ["what-does-the-exodus-show-us-about-god"],
  },
  {
    slug: "land-and-throne",
    title: "The Land & the Throne",
    tagline:
      "The land won, the throne established: Jericho, the judges, Ruth, and David, whose greater Son was promised a kingdom without end. Joshua through 2 Chronicles.",
    order: 16,
    entry: ["why-did-israel-keep-drifting-into-idolatry"],
  },
  {
    slug: "prophets-and-exile",
    title: "Prophets & Exile",
    tagline:
      "Prophets confront kings, Assyria and Babylon loom, Jerusalem falls, and God promises a new covenant: the long road that arrives at the Messiah. 1 Kings through Malachi.",
    order: 17,
    entry: ["why-did-god-send-his-people-into-exile"],
  },
  {
    slug: "anxiety-peace",
    title: "Anxiety & Peace",
    tagline:
      "When worry will not let go: what Jesus says to the anxious, the peace that guards heart and mind, and the Father who cares for you.",
    order: 18,
    entry: ["why-am-i-so-anxious"],
  },
  {
    slug: "grief-loss",
    title: "Grief & Loss",
    tagline:
      "When someone you love is gone: permission to mourn, the God who weeps with you, and the resurrection that gives grief a horizon.",
    order: 19,
    entry: ["why-does-death-hurt-so-much"],
  },
  {
    slug: "worship",
    title: "Worship",
    tagline:
      "What worship actually is: answering God with your whole self, in spirit and truth, until the day every nation sings one song.",
    order: 20,
    entry: ["what-is-worship"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
