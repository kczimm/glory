import { ImageResponse } from "next/og";
import { getQuestion, getPassageText } from "@/data";
import { SITE_NAME } from "@/lib/site";

export const alt = "Glory study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const C = {
  parchment: "#fbf7ee",
  ink: "#26241d",
  inkSoft: "#625e51",
  inkFaint: "#6f6856",
  goldDeep: "#7d5f21",
  line: "#e6ddc9",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const q = getQuestion(slug);
  const ref = q?.keyVerses[0];
  const verseText = ref ? getPassageText(ref) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: C.parchment,
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "11px",
              backgroundColor: C.goldDeep,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: C.parchment }} />
          </div>
          <span
            style={{
              fontSize: "22px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: C.goldDeep,
              fontWeight: 600,
            }}
          >
            {SITE_NAME} study
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            gap: "28px",
          }}
        >
          <div style={{ fontSize: "60px", fontWeight: 700, color: C.ink, lineHeight: 1.08 }}>
            {q?.question ?? "A study in Scripture"}
          </div>

          {verseText && ref ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "22px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.goldDeep, fontWeight: 600 }}>
                {ref} · World English Bible
              </span>
              <div style={{ fontSize: "30px", color: C.inkSoft, lineHeight: 1.4, maxHeight: "170px", overflow: "hidden" }}>
                {verseText}
              </div>
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${C.line}`,
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "20px", color: C.inkFaint }}>Read the passages. Let the Word lead.</span>
          <span style={{ fontSize: "20px", color: C.inkFaint }}>glorystudy.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
