# Fonts

The two faces the app renders with, vendored so a build script can draw them
without a browser, and so the type never depends on a network fetch at render
time.

| file | family | axes | used for |
| --- | --- | --- | --- |
| `Fraunces-Regular.ttf` | Fraunces | `wght 100..900`, `opsz`, `SOFT`, `WONK` | headlines, study notes |
| `Fraunces-Italic.ttf` | Fraunces | same, italic | scripture quotations |
| `Inter-Regular.ttf` | Inter | `wght 100..900` | body text, labels, UI |

All three are the **latin subset**, which is all the app needs: the WEB text is
English and the interface is English.

## Provenance

Downloaded from Google Fonts, then decompressed from woff2 to ttf because
neither `sharp` (fontconfig) nor `resvg` can read a woff2 container.

```bash
UA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'
curl -sS -A "$UA" 'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&display=swap' -o /tmp/fraunces.css
curl -sS -A "$UA" 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' -o /tmp/inter.css
# take the `src:` url from the block whose unicode-range is U+0000-00FF (latin)
curl -sS -A "$UA" '<gstatic url>' -o /tmp/font.woff2 && woff2_decompress /tmp/font.woff2
```

`woff2_decompress` is part of Google's woff2 tools and is packaged as
`woff2_decompress` on Arch and Debian. It writes the ttf next to its input.

Checksums, so a re-vendor can be compared rather than trusted:

```
7d7e34fef4a403717fd77da4024f8db6c430947bdb5771ba444bdb52e28171be  Fraunces-Italic.ttf
d45c8ac116b994faf246947514459d1847260efbca0e9974bedb3a9251dc099c  Fraunces-Regular.ttf
cd37c6ad767f6a6a05a9831dcb413e4729b73aac15bcd81b329c23a74ba35869  Inter-Regular.ttf
```

## Licence

Both families are licensed under the SIL Open Font License 1.1, which permits
bundling and redistribution with a product. The full texts are here as
`OFL-fraunces.txt` and `OFL-inter.txt`, which is what the licence requires when
the fonts ship inside a repository.

- Fraunces: Copyright 2018 The Fraunces Project Authors
  ([undercasetype/Fraunces](https://github.com/undercasetype/Fraunces))
- Inter: Copyright 2020 The Inter Project Authors
  ([rsms/inter](https://github.com/rsms/inter))

## Who reads these

`scripts/render-social-cards.mjs` only. The website does not: it loads the same
two families through `next/font/google` in `src/app/layout.tsx`, which serves
woff2 out of the build. These ttf copies exist because a PNG cannot be drawn
from woff2.
