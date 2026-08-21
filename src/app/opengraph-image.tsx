import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Glory: a question-driven study of Scripture";
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

export default function OpengraphImage() {
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
              color: C.parchment,
              fontSize: "24px",
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
            {SITE_NAME}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <span style={{ fontSize: "26px", color: C.inkSoft, fontWeight: 500 }}>
            A question-driven study of the Word
          </span>
          <div style={{ fontSize: "76px", fontWeight: 700, color: C.ink, marginTop: "18px", lineHeight: 1.05 }}>
            Come with a question.
          </div>
          <div style={{ fontSize: "76px", fontWeight: 700, color: C.goldDeep, marginTop: "2px", lineHeight: 1.05 }}>
            Leave with Scripture.
          </div>
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
          <span style={{ fontSize: "20px", color: C.inkFaint }}>World English Bible, public domain</span>
          <span style={{ fontSize: "20px", color: C.inkFaint }}>glorystudy.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
