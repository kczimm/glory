# Glory ✦

A question-driven study of the Word of God.

**Come with a question. Leave with Scripture.**

Instead of linear reading plans, Glory is a journey of questions: you ask what
you genuinely want to know, and Glory sends you into the Word itself. Every
answer is grounded in specific verses, with whole chapters to read. And what
you read raises the next question, so the study continues naturally, Scripture
leading you deeper into the knowledge of God.

## How it works

1. **Come with a question** — ask anything about God, Jesus, or your own soul.
2. **Read the Scripture** — whole chapters, with study points grounded in exact
   verses (World English Bible and King James Version, both public domain).
3. **Let the Word lead** — each study lists the questions its Scripture
   naturally raises. Follow them.

Everything is browsable without a study: the whole Bible, every verse that
carries a cross-reference, an interactive map of those cross-references, and
a search over all 31k verses plus the studies. It installs as a PWA and reads
offline once visited. Studies can be listened to: the audio is pre-generated,
with the device's own speech synthesis as a fallback.

## Tech

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4
- The full WEB and KJV are vendored as typed data (`src/data/scripture*.ts`,
  generated) and bundled statically: every reference resolves with no network
  call, and lookups happen on the server so the Bible never enters the browser
  bundle
- Content lives in `src/data/` as typed data files; the study corpus and the
  cross-reference graph are the heart of the app
- Deployed on Vercel; analytics is Vercel's cookie-free Web Analytics

## Pages

| Route | What it is |
| --- | --- |
| `/` | home: search, today's verse, continue-your-journey, trails |
| `/questions`, `/trails/[slug]` | the study index, one trail's ordered studies |
| `/questions/[slug]` | the study: passages, points, what it raises |
| `/bible`, `/bible/[slug]` | the whole-Bible reader (both readings) |
| `/verses`, `/verses/book/[book]`, `/verses/[ref]` | the verse graph: hubs by book, one page per verse |
| `/connections`, `/connections/[slug]` | the interactive cross-reference map |
| `/search` | search across the Bible and the studies |
| `/memorize` | a browser-local review room for the verses you are learning |
| `/random` | a surprise study |
| `/about-translation` | where the text comes from |

## Adding a study

1. Add a `Question` entry to `src/data/questions.ts`: `passages` (whole chapters
   to read), `points` (each grounded in verse references), `keyVerses`, and
   `raises` (the questions it leads to). Future questions go in `planned`.
2. Add cross-reference edges in `src/data/connections.ts` if the study opens
   one: `{ target, kind, note }`, where the note says HOW the verses relate.
3. Run `npm run verify:quotes` and `npm run verify:graph` (both run in
   `npm run build`): quotation wording must match the vendored WEB word for
   word, and every edge must resolve.

The full authoring procedure, including the traps that only fail late, is in
`.agents/skills/glory-study/SKILL.md`. `AGENTS.md` describes the architecture
for agents working in this repo.

## Commands

```bash
npm run dev            # local dev server (localhost:3000)
npm run dev:lan        # dev server on port 3100, reachable on the LAN
npm run build          # verify:quotes + verify:graph + audio:check + next build
npm run start          # production serve (start:lan for the LAN)
npm run lint           # eslint
npx tsc --noEmit       # typecheck
npm test               # vitest: data layer, search, refs, audio chunking, stores
npm run test:e2e       # browser smoke tests (needs a build first)

npm run verify:quotes    # every hand-written quotation against the WEB
npm run verify:graph     # edges, orphans, dead ends, stale planned questions
npm run audio:check      # every playable audio chunk exists in the catalog
npm run verify:bible     # re-fetch the WEB and diff it against the vendored copy

npm run audio:manifest   # emit the audio catalog
npm run audio:generate   # synthesize it locally (Kokoro, needs ffmpeg)
npm run export:social    # build a queue of Instagram drafts from the graph
npm run export:social:cards  # render those drafts as PNGs
```

CI runs lint, the typecheck, the unit tests, and the three verifiers on every
push and pull request, then a Chromium smoke run over the built app.

## Scripture

Scripture quotations are from the World English Bible (public domain), with the
King James Version offered alongside it. The reader's choice is remembered in
the browser only. The text is vendored, so the app makes no request to a Bible
API at runtime.

Study with the Bereans: *"searching the Scriptures daily to see whether these
things were so"* (Acts 17:11).
