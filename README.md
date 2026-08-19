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
- Scripture text: the full [World English Bible](https://ebible.org/web/)
  (public domain), vendored offline (~31k verses) and bundled statically — no
  runtime network calls
- Content lives in `src/data/` as typed data files

## Adding a question

1. Add study content to `src/data/questions.ts` — a `Question` entry with
   passages (whole chapters to read), points (each with verse references),
   key verses, and `raises` (the questions it naturally leads to).
2. Tell the "as you read" engine where it leads: put question slugs in
   `raises`, and future ones in `planned`.
3. Scripture is vendored as the **full World English Bible** (~31k verses) —
   regenerate it with:

   ```bash
   node scripts/fetch-bible.mjs
   ```

The fetch script pulls all 66 books from getbible.net once, validates that
every verse reference used in `src/` resolves, and rewrites
`src/data/scripture.ts`. Because the whole Bible is vendored, the app is fully
offline and can look up *any* verse or chapter — which is what powers the
cross-reference knowledge graph.

## Development

```bash
npm run dev        # local dev server (localhost:3000)
npm run build      # production build
npm run lint       # eslint
```

## Viewing on your network (LAN)

To view Glory from a phone/tablet on the same Wi-Fi, expose the server on
your local network:

```bash
npm run dev:lan      # dev server on port 3100, bound to 0.0.0.0
npm run start:lan    # production serve on port 3100
```

Then on any device on the same network, open `http://<your-ip>:3100`.
Find your IP with:

```bash
ipconfig getifaddr en0
```

Notes:
- Port **3100** is used because 3000 is often taken on this machine.
- Next 16 blocks non-localhost dev requests unless allowed — LAN origins are
  whitelisted in `next.config.ts` (`allowedDevOrigins`). If your machine's IP
  changes (DHCP), update it there, or set a static/reserved IP in your router.

Scripture quotations are from the World English Bible (public domain), used by
permission. Study with the Bereans: *"searching the Scriptures daily to see
whether these things were so"* (Acts 17:11).