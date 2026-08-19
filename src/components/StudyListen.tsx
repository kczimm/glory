"use client";

import { useMemo } from "react";
import type { Question } from "@/data/types";
import { getPassageText } from "@/data";
import { chunkText, speechRef } from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";

/**
 * "Listen to this study": the question, the short answer, then each point
 * with its body and grounding verses, read aloud. Pairs with the per-chapter
 * Listen controls: chapters are read from the chapter cards.
 */
export default function StudyListen({ question }: { question: Question }) {
  const items = useMemo<SpeechItem[]>(() => {
    const out: SpeechItem[] = [
      { id: "q", label: "The question", text: question.question },
      { id: "s", label: "In short", text: question.summary },
    ];
    question.points.forEach((p, i) => {
      const prefix = `p${i}`;
      out.push({ id: `${prefix}h`, label: p.heading, text: p.heading });
      chunkText(p.body).forEach((text, k) => {
        out.push({
          id: k === 0 ? `${prefix}b` : `${prefix}b|${k + 1}`,
          label: p.heading,
          text,
        });
      });
      p.verses.forEach((ref) => {
        const text = getPassageText(ref);
        if (!text) return;
        const chunks = chunkText(text);
        chunks.forEach((t, k) => {
          out.push({
            id: k === 0 ? ref : `${ref}|${k + 1}`,
            label: ref,
            text: k === 0 ? `${speechRef(ref)}. ${t}` : t,
          });
        });
      });
    });
    return out;
  }, [question]);

  return (
    <ListenButton
      sourceId={`study:${question.slug}`}
      items={items}
      label="Listen to this study"
    />
  );
}