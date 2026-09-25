---
name: glory-study
description: Author or revise a Glory study, the question-driven Scripture pages in this repo. Use when adding or editing a question, its passages, study points, key verses, or its raises/followsFrom/related/planned edges in src/data/questions.ts, or the verse-level cross-references in src/data/connections.ts. Covers the quote verifier, the graph rules, trail ordering, and the effects on spoken audio.
---

# Authoring a Glory study

A study is one object in `src/data/questions.ts`, plus optional verse edges in
`src/data/connections.ts`. The pedagogy lives in the edges: `raises` is the
engine (the questions a study makes the reader ask), and `planned` holds the
questions we have not written yet.

Read `AGENTS.md` for the data model and the copy rules. This skill is the
procedure and the trap list.

## Before writing

1. Read `src/data/types.ts` for the object shape.
2. Find a study in the same category to use as a template. List slugs with
   `grep -n 'slug: "' src/data/questions.ts`, then dump one in full with
   `node scripts/grounding.mjs <slug>`, which prints its points beside the
   text of every verse they cite.
3. Confirm every slug you intend to link already exists:
   `grep -c 'slug: "the-slug"' src/data/questions.ts`
4. Copy scripture from `src/data/scripture.ts`. Never write a verse from
   memory, then trim only at the edges.

## Corpus shape (match your neighbours)

| field       | range seen | most common |
| ----------- | ---------- | ----------- |
| `passages`  | 1-6        | 4           |
| `points`    | 4-6        | 5           |
| `keyVerses` | 2-6        | 5           |
| `raises`    | 0-8        | 3-4         |

`order` is not globally unique: 305 studies share 137 numbers, so duplicating
a number across categories is normal. It must be unique **within a category**,
because the trail computes "next" with `order > question.order`
(`src/app/questions/[slug]/page.tsx`). Pick a number above the maximum already
used in that category.

The file is grouped into `// TRAIL: <name>` sections, often several
`(continued: <theme>)` blocks per category, and it is not sorted by `order`.
Add a section comment in that style rather than dropping a study in bare.

## Machine-checked rules

### Quotes: `scripts/verify-quotes.mjs`, runs in `npm run build`

Extracts quoted spans from `questions.ts` and `connections.ts` and requires
each one to be verbatim WEB text.

- Only spans of 6+ characters are read. Each span splits on ellipses (`...` or
  `…`) into fragments, and fragments under 3 words are ignored.
- A fragment passes when it appears verbatim anywhere in the Bible, compared
  case-insensitively with punctuation stripped. The `verses[]` nearby only
  decide how a failure is _labelled_: similarity of 0.75 or more to the best
  cited verse is a `MISQUOTE`, otherwise `UNATTRIBUTED`. Both fail the build.
- Use double quotes **only** for real scripture. A double-quoted phrase of your
  own gets hunted as a quotation and flagged.
- `lookFor` and passage `title` are blessed free paraphrase. Keep them
  unquoted.
- Keep apostrophes word-internal (`God's`, `doesn't`). The verifier's
  single-quote scanner can pair apostrophes across sentences and invent a
  phantom span; that is what the "extraction artifact" allowlist entries are.
- Em dashes are banned in copy and some WEB verses contain them. When quoting
  such a verse, stop before the dash or bridge it with an ellipsis:
  `"a yoke ... which neither our fathers nor we were able to bear"`.
- Spans that look code-shaped are skipped, which includes a hyphen inside a
  word, brackets, `//`, a `letter:digit` colon such as `John 3:16`, and `@`.
  Do not rely on that to smuggle a quotation past the check.

### Graph: `scripts/verify-graph.mjs`, runs in `npm run build`

- Slugs are unique, `raises`/`followsFrom` resolve, and nothing raises itself.
- No dead ends: every study needs a non-empty `raises` or `planned`.
- A study that declares `followsFrom` must actually be raised by a parent, so
  adding `followsFrom` obliges you to edit that parent's `raises`.
- No stale `planned`: a planned title matching an existing question, equal or
  contained where the contained phrase is 25+ characters, fails. The fix is to
  convert it into a `raises` edge, not to reword it.

### Content layer: `scripts/validate.mjs`, NOT in the build

Run it yourself. It checks that every verse ref and passage chapter resolves,
that all three edge arrays resolve, and that there is no em dash, no dead end,
no stale `planned`, no duplicate slug, and **no duplicate `order` within a
category**. It is the only fast script that catches the trail-order collision.

### Cross-references: `src/data/connections.ts`

- Keyed by verse, so **a second key for the same verse is a `TS1117` build
  error that no fast script catches**. Check before adding:
  `grep -n '^  "Romans 14:4": \[' src/data/connections.ts`
  Prefer merging new edges into the existing entry over opening a new key.
- Range keys such as `"Matthew 7:22-23"` are normal here.
- Every `target` must resolve to vendored text and `kind` must be one of the
  seven in `types.ts`. The `note` is one sentence of HOW the verses relate.
- Notes are quote-checked too, so write them without quotation marks.

## Procedure

```bash
# 1. edit src/data/questions.ts and, if needed, src/data/connections.ts
node scripts/validate.mjs          # refs, edges, copy, trail order
npm run verify:quotes              # every quotation against the WEB
npm run verify:graph               # edges, orphans, dead ends, stale planned
npx tsc --noEmit                   # duplicate connections keys, in seconds
node scripts/grounding.mjs <slug>  # review pack: each point beside its verses
npm run lint
npm run build                      # verify:quotes + verify:graph + audio:check + next
grep -rn "—" src --include="*.ts" --include="*.tsx" | grep -vE 'scripture(-kjv)?\.ts'
```

`node scripts/grounding.mjs <new-slug> [source-slug]` writes
`scripts/packs/<slug>.md`, which is gitignored. Read it before finishing: it
shows every study point next to the full text of the verses it cites, which is
how you catch a point whose citation does not actually say what the sentence
claims.

## Traps that cost real time

- **Duplicate `connections.ts` key** passes `verify:quotes` and
  `verify:graph` and fails only at `next build`. Run `npx tsc --noEmit` first.
- **Duplicate `order` within a category** is caught by `validate.mjs` but not
  by `npm run build`.
- **Editing a parent's `raises` changes audio.** The study outro speaks every
  `raises` title and every `planned` title (`src/lib/audio-text.ts`), so those
  arrays are spoken text and new text means new hashes.
- **`audio:check` cannot detect missing audio files.** It regenerates its own
  manifest from the same source and compares it to itself, so it verifies
  internal consistency, not bucket contents. Shipping new or edited studies
  needs `npm run audio:manifest` plus generation and sync.
- **`scripts/append-q.mjs <json-file>`** appends a JSON study as a TS literal.
  It leaves a stray comma on its own line where the previous block ended (valid
  TS, not house style) and always appends to the end of the array, outside any
  trail section. Check the diff, or insert the block with an editor next to the
  trail it belongs to.

## Copy style

- No em dashes anywhere in `src/`. Use commas, colons, semicolons, or
  restructure.
- Ground every study point in specific verses. A point without a citation is a
  sermon, not a study.
- `planned` renders as an invitation to take the question to a church or small
  group. Never write "Coming soon".
- Wire the journey both ways: write the study, then give it a parent that
  raises it and children that it raises.
