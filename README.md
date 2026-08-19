# Glory ✦

A question-driven study of the Word of God.

**Come with a question. Leave with Scripture.**

Instead of linear reading plans, Glory is a journey of questions: you ask what
you genuinely want to know — *who is Jesus? who is the Holy Spirit? how am I
saved?* — and Glory sends you into the Word itself. Every answer is grounded in
specific verses, with whole chapters to read. And what you read raises the next
question, so the study continues naturally, Scripture leading you deeper into
the knowledge of God.

## How it works

1. **Come with a question** — ask anything about God, Jesus, or your own soul.
2. **Read the Scripture** — whole chapters, with study points grounded in exact
   verses (World English Bible, public domain).
3. **Let the Word lead** — each question lists the questions its Scripture
   naturally raises. Follow them.

## Tech

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Scripture text: [World English Bible](https://ebible.org/web/) (public domain)
  via [bible-api.com](https://bible-api.com), bundled statically
- Content lives in `src/data/` as typed data files

## Adding a question

1. Add study content to `src/data/questions.ts` — a `Question` entry with
   passages (whole chapters to read), points (each with verse references),
   key verses, and `raises` (the questions it naturally leads to).
2. Tell the "as you read" engine where it leads: put question slugs in
   `raises`, and future ones in `planned`.
3. Fetch the scripture text for any new references:

   ```bash
   node scripts/fetch-scripture.mjs
   ```

The fetch script scans every file in `src/` for verse references
(e.g. `"John 14:16-17"`) and chapter references in passage objects, fetches the
exact WEB text, validates that everything resolves, and regenerates
`src/data/scripture.ts`.

## Development

```bash
npm run dev        # local dev server
npm run build      # production build
npm run lint       # eslint
```

Scripture quotations are from the World English Bible (public domain), used by
permission. Study with the Bereans: *"searching the Scriptures daily to see
whether these things were so"* (Acts 17:11).