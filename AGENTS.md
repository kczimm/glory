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

## Commands

```bash
npm run dev          # local dev (localhost:3000)
npm run dev:lan      # dev on LAN, port 3100 (already running on this machine)
npm run build        # production build
npm run start        # production serve
npm run start:lan    # production serve on LAN, port 3100
npm run lint         # eslint
node scripts/fetch-bible.mjs   # re-vendor the full WEB into src/data/scripture.ts
```

## Architecture

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

- `src/app/` — pages: `/` (home), `/questions`, `/questions/[slug]` (study page)
- `src/components/` — UI: `Nav`, `Footer`, `VerseCard`, `ChapterReader`, `QuestionCard`, `SearchBox`
- `src/data/` — the content layer (typed, the heart of the app)
- `scripts/fetch-bible.mjs` — vendors the full WEB Bible offline

In Next 16, route `params` is a **Promise** — `await params` before reading it.

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
- `planned` → future questions (shown as "Coming soon" so a trail never dead-ends).

When adding content, keep every study point **grounded in specific verses**,
and wire `raises`/`followsFrom` so journeys continue organically.

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

- Use canonical refs: `"John 14:16-17"`, `"John 3:16"`.
- Scripture text lives in `src/data/scripture.ts` (World English Bible, public
domain) — **generated**, do not hand-edit. The **full Bible** is vendored
offline (~31k verses); every reference anywhere in the app resolves with no
network call. To refresh/repair it, run `node scripts/fetch-bible.mjs`
(66 books from getbible.net), which also validates that every ref used in
`src/` resolves.
- Lookups in `src/data/index.ts`: `getVerseText`, `getPassageText`, `getChapter`,
  `getChapterFocus`.
- Book alias: `Psalm` → `Psalms` (handled in `canonicalBook`).

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

## Design system

- Tailwind v4 tokens in `@theme` (`globals.css`): `parchment` bg, `cream`,
  `ink`, `ink-soft`, `ink-faint`, `gold`/`gold-deep`/`gold-soft`/`gold-wash`, `line`.
- Fonts: **Fraunces** (`font-display`, headings + scripture quotes, italic look)
  and **Inter** (`font-sans`).
- `VerseCard` renders a scripture callout. Its prop is **`verse`**, *not* `ref` —
  `ref` is a React reserved prop and breaks Server Components.
- `ChapterReader` is a client component (collapsible full-chapter reader,
  highlights the `focus` range).

## Before you finish

`npm run lint` and `npm run build` must both pass.
