# Reference voices for Qwen3-TTS cloning

Drop a short, clean recording of the reader you want here, then point the
generator at it:

```
python3 scripts/generate-audio-qwen.py \
    --mode base --ref-audio voices/reader.wav \
    --ref-text "exact words spoken in the clip" \
    --slug qwen3-1.7b-base
```

## Where to get a reference clip

- **LibriVox** (librivox.org) — public-domain audiobook readings. Grab a
  steady ~10s slice from a reader you like. Best for a calm, devotional tone.
- **Common Voice** (commonvoice.mozilla.org) — CC0 clips by thousands of
  speakers, filterable by accent/age/gender.
- **HuggingFace** — e.g. the Qwen3-TTS example references, or
  `microsoft/azure-tts-sample-voices`.
- **Record your own** — a quiet 5-10s clip, no music/echo, is ideal for a
  consistent house voice.

## Rules for a good clone

- The clip must be clean speech: no background music, minimal room echo.
- `--ref-text` must be the EXACT transcript of the clip, or quality degrades.
- ~5-15s works best; a sentence close in pace/tone to your target narration
  (calm, even-paced Scripture reading) gives the most natural results.

## Built-in named voices (no reference needed)

Use `--mode custom --speaker <name>` with the CustomVoice model instead.
English speakers include `Vivian`, `Ryan`, `Aiden`. List all with
`python3 scripts/generate-audio-qwen.py --model mlx-community/Qwen3-TTS-12Hz-1.7B-CustomVoice-8bit --list-speakers`.
