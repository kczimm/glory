# Social drafts

Every file in `posts/` is a draft for a four-slide carousel. Once a draft has
been published, `--mark` records its pair in `state.json` and moves the file to
`posted/`, so the next queue can reuse the numbers without ever offering the
same edge twice. Not one word in a draft was written by a model:

| slide | what it shows | source |
| --- | --- | --- |
| 1 | the note, stated as a claim, and the pair it rests on | `src/data/connections.ts` |
| 2 | the earlier verse, WEB text | `src/data/scripture.ts` |
| 3 | the verse that quotes or fulfils it | `src/data/scripture.ts` |
| 4 | the study that raises the question | `src/data/questions.ts` |

The cover leads with the claim because slide 1 is the only slide most people
see. `COVER = "verse"` at the top of `scripts/export-social.mjs` restores the
original order, where slide 1 was a verse and the note came third; the two are
worth comparing over ten posts rather than argued about.

The editorial rules and the trap list live in
`.agents/skills/glory-social/SKILL.md`. Read that before changing either script.

That is deliberate. The account's whole claim is "this verse is doing that
verse, and here is how," which is the one thing in the app nobody else has, and
it is already written, already reviewed, and already enforced by
`npm run verify:quotes`. Generating commentary with a model would put a
misquote in front of an audience with no verifier in the way.

## Commands

```bash
npm run export:social                     # build a 30 post queue
npm run export:social -- --count 14       # two weeks
npm run export:social -- --dry-run        # print the queue, write nothing
npm run export:social -- --why "John 8:58"   # why an edge did or did not make it
npm run export:social -- --check          # verify committed drafts against the sources
npm run export:social -- --mark 001 002   # record what published
npm run export:social -- --force          # regenerate the drafts
npm run export:social:cards               # draw the PNGs for every draft
npm run export:social:cards -- --only 007 # draw one
```

The flags need the `--` because npm would otherwise eat them.

## The workflow

1. Generate the drafts.
2. Read `queue.md`. Anything the `flags` column mentions gets a human look
   first. A flagged post is not broken, it just cannot be checked mechanically.
   The usual case is a verse whose speech quotes open in the neighbouring verse,
   so the card would show a dangling quote mark.
3. Delete the drafts you do not want. Retype nothing, and do not "fix" a verse
   by hand: `--check` compares every draft against the vendored WEB and against
   `connections.ts`, and an edit to a draft is invisible to the site.
4. Render the cards, post them, then `--mark` the ids so the next queue moves
   past them. Marking archives the draft and records the pair, so an edge cannot
   come back in either direction.
5. If a note really does need rewriting for a card, rewrite it in
   `src/data/connections.ts` so the study page gets the improvement too, then
   regenerate.

## The cards

`scripts/render-social-cards.mjs` draws 1080x1350 PNGs into `social/cards/<id>/`,
numbered 1 to 4. They are gitignored: they are cheap to redraw and expensive to
keep in a repository. What ships in git is the drafts and the fonts.

The cards use the app's own palette, read by hand from `src/app/globals.css`, and
the app's own faces from `fonts/` (that directory explains why the ttf copies
exist and how to refresh them). Type is auto-fitted per slide: the renderer tries
a descending list of sizes and takes the first that fits its room, then says so
loudly if even the smallest one overflows, because a clipped verse is the one
failure a quotation card must not have.

Before drawing, the renderer re-reads both verses from the vendored WEB and
compares them against the draft. Drift is refused, not rendered.

One presentational liberty: a verse that opens mid-sentence has its first letter
capitalised on the card, since otherwise it reads as a typo. The draft keeps the
text exactly as the WEB has it, and the repository's quoting rule already allows
capitalisation at the edges.

## No urls in captions

Instagram captions have never carried clickable links, for any account. A url
pasted there is a dead string nobody taps and nobody retypes, so captions end
with the study question and "Link in bio." Slide 4 names the bare host for the
same reason: the bio link lands on the front page, so promising a deep path on
the card would name a destination the reader cannot reach. The deep link stays
in the draft, under `## Slide 4`, where it is useful to you and invisible to
them. Stories are the exception, since they have a link sticker; that is where a
direct study link can actually be tapped.

If a card ever looks wrong in a way this file does not explain, look at
`ROOM_*` and the size lists at the top of the renderer. There is no other layout
logic than those numbers.

## What the ranking means

Score, in order of effect: the kind of edge (a quotation or a fulfilled
prophecy hooks better than a shared theme), whether both verses fit a card
without shrinking to 8pt, whether the note lands in one glance, whether a study
cites both ends so slide 4 goes somewhere real, and whether a verse reads whole
rather than as a fragment lifted mid-sentence.

The scheduler then refuses to repeat a pair, to reuse a verse, to run the same
kind twice in any four posts, or to post from the same book within three. It
restarts the scan after every pick, so a strong edge that lost its slot to a
diversity budget comes back at the next opening instead of vanishing.

1094 edges qualify, so a daily post is three years of material before anything
has to be written fresh.

## One gotcha

Drafts are built from the working tree, so an uncommitted study can appear in a
queue and slide 4 would link to a page that is not deployed yet. If you are
mid-edit on `questions.ts`, deploy before you post anything from that batch.
