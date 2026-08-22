#!/usr/bin/env python3
"""
Local SOTA audio generation for Glory, using Qwen3-TTS via MLX (Apple Silicon).

This is a drop-in alternative to scripts/generate-audio.mjs (Kokoro). It reads
the same content-addressed catalog (audio-manifest.json) produced by
`npm run audio:manifest` and writes the SAME layout the app already expects:

    audio-out/v1/{slug}/{sha1(text)}.m4a

so the output directory is directly syncable to the object store, and the app
only needs NEXT_PUBLIC_AUDIO_VOICE pointed at {slug}.

Two voice modes:

  base   (default) Zero-shot voice cloning from a reference wav.
          Pass --ref-audio path/to/reader.wav --ref-text "exact transcript".
          The model is mlx-community/Qwen3-TTS-12Hz-1.7B-Base-8bit.

  custom Fixed named voices (no reference needed). Pass --speaker Vivian (or
          Ryan). Use the CustomVoice model:
          mlx-community/Qwen3-TTS-12Hz-1.7B-CustomVoice-8bit.

Usage:
  # clone a reader you like from a reference recording
  python3 scripts/generate-audio-qwen.py \
      --mode base --ref-audio voices/reader.wav --ref-text "exact words spoken" \
      --slug qwen3-1.7b-base

  # or use a built-in named voice
  python3 scripts/generate-audio-qwen.py --mode custom --speaker Vivian \
      --slug qwen3-1.7b-custom

  # one-off: text in, narration out
  python3 scripts/generate-audio-qwen.py --text "In the beginning was the Word." \
      --mode base --ref-audio voices/reader.wav --ref-text "..." --output out.m4a

Filters mirror the Kokoro script: --only, --key, --limit, --force.

Dependencies:  pip install mlx-audio soundfile   (and a system ffmpeg)
First run downloads the model weights (a few GB) into the MLX cache.
"""

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys

PRONUNCIATION = {
    "Aenon": "AY-non",
    "Bethsaida": "beth-SAY-ih-duh",
    "Capernaum": "kuh-PUR-nay-um",
    "Cephas": "SEE-fas",
    "Corinthians": "kuh-RIN-thee-unz",
    "Euodia": "yoo-OH-dee-uh",
    "Herodias": "heh-ROH-dee-us",
    "Jehoshaphat": "jee-HOH-shuh-fat",
    "Magog": "MAY-gog",
    "Melchizedek": "mel-KIZ-eh-dek",
    "Nebuchadnezzar": "neb-uh-kud-NEZ-er",
    "Proselyte": "PROSS-uh-lyte",
    "Rehoboam": "ree-hoh-BOH-am",
    "Salome": "suh-LOH-mee",
    "Siloam": "sye-LOW-am",
    "Syntyche": "SIN-tih-kee",
    "tetrarch": "TEH-trark",
    "Zerubbabel": "zuh-RUB-uh-bel",
}


def clean_for_speech(text):
    for name, pron in PRONUNCIATION.items():
        text = text.replace(name, pron)
    return text


def sha1_hex(text):
    return hashlib.sha1(text.encode("utf-8")).hexdigest()


def encode_to_m4a(wav_path, m4a_path):
    r = subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            wav_path,
            "-c:a",
            "aac",
            "-b:a",
            "64k",
            "-ac",
            "1",
            m4a_path,
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.PIPE,
    )
    if r.returncode != 0:
        raise RuntimeError("ffmpeg failed: " + (r.stderr or b"").decode()[-300:])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", default="audio-manifest.json")
    ap.add_argument("--out-dir", default="audio-out")
    ap.add_argument("--slug", default="qwen3-1.7b-base")
    ap.add_argument("--model", default="mlx-community/Qwen3-TTS-12Hz-1.7B-Base-8bit")
    ap.add_argument("--mode", choices=["base", "custom"], default="base")
    ap.add_argument("--ref-audio", help="reference wav for base cloning")
    ap.add_argument("--ref-text", help="exact transcript of the reference wav")
    ap.add_argument("--speaker", help="CustomVoice speaker name (e.g. Vivian, Ryan)")
    ap.add_argument("--instruct", help="CustomVoice style (e.g. 'Very warm and calm.')")
    ap.add_argument("--lang", default="english")
    ap.add_argument("--only", default="", help="substring match on hash or text")
    ap.add_argument("--key", default="", help="substring match on manifest entry key")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--text", help="one-off text (skips manifest batching)")
    ap.add_argument("--output", help="one-off output path (with --text)")
    ap.add_argument("--list-speakers", action="store_true")
    args = ap.parse_args()

    try:
        import soundfile as sf
        from mlx_audio.tts.utils import load_model
    except ImportError as e:
        print("Missing dependency. Run:  pip install mlx-audio soundfile")
        print(e)
        sys.exit(1)

    print(f"Loading Qwen3-TTS model: {args.model}")
    model = load_model(args.model)

    if args.list_speakers:
        spk = getattr(model, "supported_speakers", None)
        print(
            "Supported speakers:",
            spk if spk else "(set --model to a CustomVoice variant)",
        )
        return

    out_dir = os.path.join(args.out_dir, "v1", args.slug)
    tmp_dir = os.path.join(args.out_dir, ".tmp")
    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(tmp_dir, exist_ok=True)

    def synth(text, ref_audio=None, ref_text=None, speaker=None, instruct=None):
        spoken = clean_for_speech(text)
        if args.mode == "custom":
            results = list(
                model.generate(
                    text=spoken,
                    voice=speaker,
                    instruct=instruct or None,
                    lang_code=args.lang,
                    max_tokens=2048,
                )
            )
        else:
            results = list(
                model.generate(
                    text=spoken,
                    ref_audio=ref_audio,
                    ref_text=ref_text,
                    lang_code=args.lang,
                    max_tokens=2048,
                )
            )
        return results[0].audio, results[0].sample_rate

    # ---- one-off mode --------------------------------------------------------
    if args.text:
        out_path = args.output or os.path.join(out_dir, "single.m4a")
        wav_path = os.path.join(tmp_dir, "single.wav")
        audio, sr = synth(
            args.text,
            ref_audio=args.ref_audio,
            ref_text=args.ref_text,
            speaker=args.speaker,
            instruct=args.instruct,
        )
        sf.write(wav_path, audio, sr)
        encode_to_m4a(wav_path, out_path)
        os.remove(wav_path)
        print(f"Wrote {out_path}")
        return

    # ---- manifest batch mode ------------------------------------------------
    if args.mode == "base" and not (args.ref_audio and args.ref_text):
        print("Base mode needs --ref-audio and --ref-text.")
        sys.exit(1)
    if args.mode == "custom" and not args.speaker:
        print("Custom mode needs --speaker (try --list-speakers).")
        sys.exit(1)

    try:
        with open(args.manifest, "r", encoding="utf-8") as f:
            manifest = json.load(f)
    except Exception as e:
        print(f"Cannot read {args.manifest}. Run `npm run audio:manifest` first.")
        print(e)
        sys.exit(1)

    entries = manifest.get("entries", [])
    unique = {}
    for e in entries:
        unique.setdefault(e["hash"], e["text"])

    selected = set()
    for e in entries:
        in_only = (
            not args.only or e["hash"].startswith(args.only) or args.only in e["text"]
        )
        in_key = not args.key or args.key in e["key"]
        if in_only and in_key:
            selected.add(e["hash"])

    work = [(h, unique[h]) for h in selected if h in unique]
    if not args.force:
        work = [
            (h, t)
            for h, t in work
            if not os.path.exists(os.path.join(out_dir, f"{h}.m4a"))
        ]
    if args.limit:
        work = work[: args.limit]

    print(f"{len(unique)} unique chunks; {len(work)} to generate into {out_dir}")
    if not work:
        print("Nothing to generate.")
        return

    done = 0
    for h, text in work:
        wav_path = os.path.join(tmp_dir, f"{h}.wav")
        m4a_path = os.path.join(out_dir, f"{h}.m4a")
        try:
            audio, sr = synth(
                text,
                ref_audio=args.ref_audio,
                ref_text=args.ref_text,
                speaker=args.speaker,
                instruct=args.instruct,
            )
            sf.write(wav_path, audio, sr)
            encode_to_m4a(wav_path, m4a_path)
            os.remove(wav_path)
        except Exception as e:
            print(f"  FAILED {h}: {e}")
            sys.exit(1)
        done += 1
        if done % 25 == 0 or done == len(work):
            print(f"  [{done}/{len(work)}]")

    print(
        f"\nDone: {done} files in {out_dir}\n"
        "Point the app at this voice and sync to the bucket:\n"
        f"  NEXT_PUBLIC_AUDIO_VOICE={args.slug}\n"
        "  aws s3 sync audio-out/v1 s3://<bucket>/v1 --endpoint-url https://<acct>.r2.cloudflarestorage.com\n"
    )


if __name__ == "__main__":
    main()
