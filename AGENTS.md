<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Glory — project guide for agents

Glory is a **question-driven Scripture study** web app. Instead of linear
reading plans, the learner comes with a question, reads whole chapters, and
lets the Scripture itself raise the next question. Every answer is grounded in
exact verses.

Current shape: **321 studies across 22 trails**, a **1,094-edge cross-reference
graph** over **478 verses**, and the whole Bible vendored twice (WEB and KJV)
for offline reading. It is a PWA with a service worker, a pre-generated audio
catalog, and it deploys to Vercel.

## Commands

```bash
npm run dev          # local dev (localhost:3000)
npm run dev:lan      # dev on LAN, port 3100
npm run build        # verify:quotes + verify:graph + audio:check + next build
npm run start        # production serve
npm run start:lan    # production serve on LAN, port 3100
npm run lint         # eslint
npx tsc --noEmit     # typecheck (catches duplicate connection keys, which
                     # only `next build` would otherwise report)
npm test             # vitest: lib + data-layer tests (tests/*.test.ts)

npm run verify:quotes   # every hand-written quotation against the WEB (in build)
npm run verify:graph    # edges, orphans, dead ends, stale `planned` (in build)
npm run audio:check     # every playable chunk is in the catalog (in build)
npm run verify:bible    # re-fetch the WEB and diff the vendored copy (network;
                        # also checks that every ref in src/ resolves)

npm run audio:manifest     # emit the audio catalog the app speaks
npm run audio:generate     # synthesize it with local Kokoro (needs ffmpeg)
npm run audio:generate:qwen  # alternative TTS backend (.venv, scripts/*.py)
npm run export:book        # manuscript export
npm run export:social      # build a queue of Instagram drafts (see social/README.md)
npm run export:social:cards  # draw those drafts as 1080x1350 PNGs (needs fonts/)

node scripts/fetch-bible.mjs     # re-vendor WEB into src/data/scripture.ts
node scripts/generate-icons.mjs  # regenerate brand icons
```

Adding a dependency needs npm 11 (`npx npm@11 i <pkg>`): npm 10.9.8 fails with
`Cannot read properties of null (reading 'edgesOut')` in arborist's peer-set
build, whatever the flag. It still *consumes* the committed lockfile fine, so
`npm ci` and `npm install` on a clean tree are unaffected.

CI (`.github/workflows/ci.yml`) runs lint, `tsc --noEmit`, `npm test`, and the
three verifiers on every push and pull request. Keep it green.

## Architecture

Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 + React 19.

### Routes (`src/app/`)

| Route | What it is |
| --- | --- |
| `/` | home: search, today's verse, continue-your-journey, trails |
| `/questions` | the study index (static, no searchParams; `?trail=` is a redirect in `next.config.ts`) |
| `/questions/[slug]` | the study page: passages, points, raises, journey breadcrumb |
| `/questions/[slug]/print` | print/PDF view with the focused chapters inline |
| `/trails/[slug]` | one trail's ordered studies |
| `/bible`, `/bible/[slug]` | the whole-Bible reader (1,189 prerendered chapters) |
| `/verses` | hub of the verse graph: one card per book |
| `/verses/book/[book]` | the graph's verses in one book, with edge counts |
| `/verses/[ref]` | one verse hub: its text, studies that cite it, cross-references |
| `/connections`, `/connections/[slug]` | the cross-reference explorer (force-directed map) |
| `/memorize` | browser-local spaced-repetition review room |
| `/search` | search shell; results come from `/api/search` |
| `/random` | route handler that redirects to a surprise study |
| `/about-translation` | translation and sourcing notes |
| `/offline` | PWA fallback |

Route handlers: `/api/search` (rate limited, `revalidate = 60`), `/api/passage`
(verse text for the review room), `/api/chapter` (one chapter, both readings,
for the expandable reader), `/api/graph` (`force-static` payload for the
explorer). Metadata routes: `sitemap.ts`, `robots.ts`, `manifest.ts`, the
opengraph-image routes, `apple-icon.png`, `icon.svg`.

PWA: `public/sw.js` (cache version bump when the shell changes) registered by
`RegisterServiceWorker` in production only.

### Components (`src/components/`)

Layout/global: `Nav`, `Footer`, `ThemeToggle`, `TranslationToggle`,
`SpeechPlayer`, `RegisterServiceWorker`, `JourneyBreadcrumb`, `JourneyHomeCard`.

Study surfaces: `ChapterReader` (expandable full chapter, fetches its text from
`/api/chapter` on first open), `VerseCard`, `VerseText`, `VerseConnections`,
`QuestionCard`, `QuestionsIndex`, `StudyListen`, `StudyFollowAlong`,
`VisitChain`, `VisitListen`, `HoldAllButton`, `ShareButton`, `AutoPrint`.

Browsing: `SearchBox`, `SearchPage`, `ConnectionGraph`, `DailyCard`,
`RandomLink`, `MemorizeButton`, `MemorizeNavLink`, `VisitChain`.

### The data layer is split in two: never mix them

- **`src/data/index.ts` is the client-safe barrel.** It re-exports only small,
  dependency-free modules: `categories`, `connections` + `getConnections` +
  `connectionKindLabel`, `parseRef` + `verseSlug`, and types. Client
  components import from here.
- **`src/data/server.ts` is marked `server-only`** and holds everything that
  touches the vendored Bible or the study corpus: `getVerseText`,
  `getPassageText`, `getChapter`, `getChapterPair`, `getChapterFocus`,
  `getChapterFocusPair`, `getChapterCount`, `bibleBooks`, the question
  lookups (`getQuestion`, `questionsByCategory`, `resolveQuestions`,
  `categoryOf`, `trailOf`, `questionTitles`, teasers), the graph payloads
  (`graphVerseTexts`, `graphUsages`, `citedVersesBySlug`), and the prebuilt
  speech queues (`studyListenData`, `visitListenData`, `visitChainData`).
- **`src/lib/search.ts` is `server-only`** too: it scans all 31k verses.
- `src/data/books.ts` is the canon: `BIBLE_BOOKS`, `bookSlug`, `bookFromSlug`,
  `chapterSlug`. **Never hardcode a book list.** The `/verses` index used to
  carry its own copy with "Song of Solomon" where the data says "Song of
  Songs", and every Song of Songs verse was silently dropped from the page.
- `src/data/ref.ts`: `parseRef` (canonicalizes the `Psalm` → `Psalms` alias),
  `canonicalBook`, `verseSlug` (`John 3:16` → `john-3.16`), `verseKeys`.
- `src/data/verseIndex.ts`: `graphVerseRefs`, `questionsUsing`,
  `incomingConnections`, `refFromSlug`. Note that `graphVerseRefs()` returns
  refs **as authored**, so group them through `parseRef` rather than by string
  prefix when you need canonical book names.

### Payload rules

Prerendered pages ship their content twice (markup plus the inline RSC flight
payload), and React DOM plus the client chunk set is a fixed cost. So the
convention is: **do not hand a client component data it may never need.** The
study page's heaviest page was 440 KB of HTML, 74% of it flight data, because
chapter text and prebuilt audio queues travelled as props.

- Chapter text goes through `/api/chapter`, fetched by `ChapterReader` when the
  chapter is opened (or chained into by the player), cached per chapter by
  `src/lib/chapter.ts`.
- Verse text for client-local state goes through `/api/passage`
  (`MAX_REFS_PER_REQUEST` in `src/lib/passage.ts` is the contract; batch with
  `chunkRefs`).
- Graph data goes through `/api/graph` (`force-static`, computed once per
  deployment).
- Sound queues are built server side (`studyListenData` and friends) because
  they need verse text, and `ListenButton` accepts either `items` or a
  `prepare()` resolver when the queue only exists after a fetch.

### Rendering

Most routes are prerendered (`generateStaticParams`); `revalidate` is set per
route. Anything reading `searchParams` in a page turns it into a dynamic
render, which is why the `?trail=` deep link is a redirect in `next.config.ts`.
In Next 16, `params` and `searchParams` are **Promises**: `await params`.

- **LAN dev gotcha**: if the dev server serves pages but clicks/interactivity
  do nothing on a phone, it is Next's dev-only cross-origin guard. Requests
  come with the phone's Host header, and `allowedDevOrigins` in
  `next.config.ts` must list that host as a **bare hostname** (no scheme/port,
  e.g. `192.168.1.149`). Check the server log for "Blocked cross-origin
  request" — it means exactly this. `npm run start:lan` (production) has no
  such guard.

## Data model (`src/data/types.ts`)

- **Question** — the learner's step: `question`, `category`, `summary`,
  `passages[]`, `points[]`, `keyVerses[]`, `raises[]`, `followsFrom[]`,
  `related[]`, `planned[]`, `order`.
- **Passage** — a whole chapter to read: `book`, `chapter`, `title`, `lookFor`, optional `focus` range.
- **StudyPoint** — a teaching point: `heading`, `body`, `verses[]` (the grounding).

### The pedagogy is in the edges

- `raises` → question slugs this study **naturally causes the reader to ask**.
  This is the engine of the app — the Scripture-raises-next-question flow
  rendered in the gold "As you read, you may wonder…" panel.
- `followsFrom` → the inverse (what led here).
- `planned` → future questions this study raises that we haven't written yet. Rendered as an invitation to take the question to a church or small group (never "Coming soon"); write it later and it becomes a `raises` link.

When adding content, keep every study point **grounded in specific verses**,
and wire `raises`/`followsFrom` so journeys continue organically.

For the full authoring procedure and the list of traps that only fail late
(quote-verifier thresholds, trail-order uniqueness, duplicate connection keys,
the audio side effects of editing `raises`), see
`.agents/skills/glory-study/SKILL.md`.

### The knowledge graph

Beyond questions, Glory has **typed cross-reference edges between verses**
(the "biblical pedagogy" layer). They live in `src/data/connections.ts`,
keyed by verse ref:

```ts
connections = {
  "John 8:58": [
    { target: "Exodus 3:14", kind: "quotes", note: "Jesus takes the name God revealed in the burning bush — 'I AM WHO I AM' — as His own." },
    // ...
  ],
}
```

- `Connection = { target, kind, note }`. `kind` is one of `quotes | promise |
  fulfilled | pattern | parallel | theme | contrast` (see `types.ts`).
- The `note` is the pedagogy — one sentence explaining HOW the verses relate.
- `getConnections(ref)` returns the edges; `VerseConnections` renders them as
the "✦ Cross-references" disclosure inside every `VerseCard`.
- Because the **whole Bible is vendored**, every `target` resolves to text —
there is no missing-verse problem. Add edges freely.

## Verse references

- Use canonical refs: `"John 14:16-17"`, `"John 3:16"`. The `Psalm` alias is
  tolerated in content and canonicalized on read, but prefer `Psalms`.
- Scripture text lives in `src/data/scripture.ts` (WEB) and
  `src/data/scripture-kjv.ts` (KJV) — **generated**, do not hand-edit. To
  refresh/repair the WEB, run `node scripts/fetch-bible.mjs` (66 books from
  getbible.net), which also validates that every ref used in `src/` resolves.
- The KJV module is loaded lazily and reached through a CommonJS `require`
  inside `src/data/server.ts`, because a static import would parse ~9 MB into
  every server start. That require cannot resolve a TypeScript module under
  vitest, so tests install the module with `setKJVLoader` (see
  `tests/server-data.test.ts`). Use the seam rather than adding another
  `require`.

### Quoting scripture (absolute rule)

Any string presented inside quotation marks in `questions.ts` or
`connections.ts` that is meant as scripture MUST match the WEB word-for-word.
This is enforced mechanically:

- `npm run verify:quotes` (`scripts/verify-quotes.mjs`) extracts every quoted
  span from both files, splits it on ellipses, and requires each fragment to
  appear verbatim in a single WEB verse or a run of consecutive verses. Spans
  that nearly match but not exactly are reported with a word-level diff.
- It runs as part of `npm run build`, so a misquote cannot ship.
- Intentional non-scripture quoted phrases (our own rhetorical questions,
  creed lines, labels, extraction artifacts) go in
  `scripts/quote-allowlist.json`, keyed by the normalized span with a reason.
  Keep that list small and honest; never allowlist an actual misquote.
- When writing new content, do NOT quote from memory: paste from the vendored
  WEB, then adjust capitalization at the edges if needed (normalization is
  case-insensitive). If you must omit words mid-quote, use an ellipsis (…).
- The check only sees text **inside quotation marks**. Scripture rendered in
  `body`/`summary` prose with no quote marks is unverified, and it has drifted
  in the past: memory-written renderings silently borrowed wording from other
  translations ("in remembrance of me" for the WEB's "in memory of me", "holy
  conduct" for "holy living", "this world" for "this age", "into heaven" for
  "into the sky"). **Wrap any verse you render in quotation marks** so the
  verifier enforces it. `lookFor` and `title` on a passage stay free paraphrase:
  they are reading guidance, not quotation.
- A few getbible.net upstream verses contain glued words ("Hadeswill",
  "windblows"); quotes of those verses are allowlisted rather than altered.
- The same rule applies to tests: assert on strings you copied from
  `scripture.ts`, not on what you remember the verse to say.

### The journey record

A browser-local trail of the questions a reader has walked (the "✦ Your
journey" breadcrumb on each study page, and the "Continue your journey" card
on the home page).

- `src/lib/journey.ts` is a `useSyncExternalStore` over `localStorage`
  (`glory:journey`). `subscribe` / `getSnapshot` / `getServerSnapshot` are
  passed to `useSyncExternalStore`; `recordVisit(slug)` and `clearJourney()`
  mutate and notify.
- `JourneyBreadcrumb` records each question visit and renders the sequence;
  `JourneyHomeCard` offers "pick up where you left off". Key the breadcrumb by
  `slug` so it remounts (and records) on each stop.
- Kept browser-only: SSR snapshot is empty, so there's no hydration mismatch.

The review room (`/memorize`, `src/lib/memory.ts`) is the same idea: cards in
`localStorage`, validated field by field on read, verse text fetched in
batches from `/api/passage`.

### Audio

The player (`src/lib/speech.ts`) speaks pre-generated files when they exist and
falls back to the device's speech synthesis. `src/lib/audio-text.ts` turns a
study or chapter into chunks, and the file name of a chunk is the SHA-1 of its
text (`/v1/{voice}/{sha1}.m4a`, see `.env.example`), which is why editing a
study changes the audio catalog: run `npm run audio:manifest`, generate, sync
to R2 (`scripts/sync-r2.mjs`), and `npm run audio:check` verifies every
playable chunk has a file.

### Measuring readers

`<Analytics />` from `@vercel/analytics` is mounted in `src/app/layout.tsx`.
It is the only visitor measurement the site has: the CDN request log that
Vercel exposes carries no client identity (no IP, no session id), and the
Firewall traffic view reports top lists rather than a visitor count. So page
views and the daily-reset visitor hash (`Visitors` in the dashboard, which is
what "daily readers" means) come from here.

- Count-only and cookie-free; a client that runs no JavaScript never loads the
  script, which is most of what the WAF challenges.
- Hobby includes 50,000 events a month with a one-month reporting window,
  pooled across every project on the team. Custom events are Pro-only.

### Search

`src/lib/search.ts` searches the **whole vendored Bible** plus the studies —
case-insensitive phrase matching (lazy-built lowercase index over
`scripture.ts`, cached). It is `server-only`, and `/api/search` is the only
caller: the browser sends a query, the server scans its own index, and
identical queries are CDN-cached for 60s.

- `SearchBox` (home, nav) and `SearchPage` (`/search`) both go through
  `src/lib/useSearch.ts`, which debounces, aborts stale requests, refetches
  when the translation changes, and reports `idle | loading | ready | error`.
- The response carries `before` / `match` / `after` snippets (`src/lib/snippet.ts`).
- Deep-links into `/verses/[ref]` and `/questions/[slug]`.

### Public API shape

- `/api/search?q=&verses=&studies=&version=` → `{ verses, questions, translation }`
- `/api/passage?refs=a|b|c` → `{ [ref]: { web, kjv } }`, capped by `MAX_REFS_PER_REQUEST`
- `/api/chapter?book=&chapter=` → `{ book, chapter, verses: [{ n, web, kjv }] }`
- `/api/graph` → `{ texts, usages, cited }` (`force-static`)

All three dynamic handlers rate limit per client IP (`src/lib/rateLimit.ts`,
in-memory, per instance: a cost control, not a hard security boundary).

## Design system

- Tailwind v4 tokens in `@theme` (`globals.css`): `parchment` bg, `cream`,
  `ink`, `ink-soft`, `ink-faint`, `gold`/`gold-deep`/`gold-soft`/`gold-wash`, `line`.
- Fonts: **Fraunces** (`font-display`, headings + scripture quotes, italic look)
  and **Inter** (`font-sans`).
- `VerseCard` renders a scripture callout. Its prop is **`verse`**, *not* `ref` —
  `ref` is a React reserved prop and breaks Server Components.
- `ChapterReader` is a client component (collapsible full-chapter reader,
  highlights the `focus` range, fetches its text on first open).

## Tests

`npm test` runs vitest over `tests/*.test.ts` (node environment; `@/` is
aliased and `server-only` is stubbed in `vitest.config.ts`).

- Covered: `ref` parsing and slugs, focus ranges, snippets, the passage batching
  contract, search ranking, the journey store, the review-room store, and
  `src/data/server.ts` lookups (verse, passage, chapter, both readings, focus,
  chapter counts, the KJV loader seam, `loadChapter` caching).
- Not covered: the audio subsystem (`speech.ts`, `audio-text.ts`,
  `audioFiles.ts`) and the components. The audio stack is the largest untested
  surface and the most stateful; be careful there, and prefer adding a test
  over a visual check.
- Content invariants are not in vitest; they are the verifier scripts, which is
  where content rules belong.

## Copy style

- **Never use em dashes (—) in site copy.** Prefer commas, colons, semicolons,
  or a sentence restructure. This is an absolute rule, with no exceptions: the
  previous `— John 1:1` citation pattern under verse cards was swept out too, so
  verse references now render with no dash (see `VerseCard`).
- Run `grep -rn "—" src --include="*.ts" --include="*.tsx" | grep -vE 'scripture(-kjv)?\.ts'`
  before finishing to confirm the copy is clean.
- Em dashes inside `src/data/scripture.ts` and `src/data/scripture-kjv.ts` are
  the translations' own punctuation (generated files, quoted text, not our
  copy). Leave them alone.

## Before you finish

All four must pass:

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

`npm run build` runs `verify:quotes`, `verify:graph`, and `audio:check` first,
so a content or wiring mistake fails there rather than in production. If you
touched `src/data/questions.ts`, `src/data/connections.ts`, or anything the
audio queues are built from, expect the verifiers to be the thing that tells
you what you broke.
