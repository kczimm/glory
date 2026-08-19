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
node scripts/fetch-scripture.mjs   # regenerates src/data/scripture.ts
```

## Architecture

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

- `src/app/` — pages: `/` (home), `/questions`, `/questions/[slug]` (study page)
- `src/components/` — UI: `Nav`, `Footer`, `VerseCard`, `ChapterReader`, `QuestionCard`, `SearchBox`
- `src/data/` — the content layer (typed, the heart of the app)
- `scripts/fetch-scripture.mjs` — fetches WEB Bible text

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

## Verse references

- Use canonical refs: `"John 14:16-17"`, `"John 3:16"`.
- Scripture text lives in `src/data/scripture.ts` (World English Bible, public
domain) — **generated**, do not hand-edit. Edit content/UI, then run
`node scripts/fetch-scripture.mjs`; it scans every file under `src/` for refs
and chapter references, fetches exact text, validates that everything resolves,
and rewrites the file.
- Lookups in `src/data/index.ts`: `getVerseText`, `getPassageText`, `getChapter`.
- Book alias: `Psalm` → `Psalms` (handled in `canonicalBook`).

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
