import { ImageResponse } from "next/og";
import { refFromSlug, getPassageText } from "@/data";
import { SITE_NAME } from "@/lib/site";

export const alt = "Verse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Generated on demand: the /verses graph has ~1,800 hubs, so we don't
// prerender an image per verse at build time.
export const dynamic = "force-dynamic";

const C = {
  parchment: "#fbf7ee",
  ink: "#26241d",
  inkSoft: "#625e51",
  inkFaint: "#6f6856",
  goldDeep: "#7d5f21",
  line: "#e6ddc9",
};

export default async function Image({ params }: { params: Promise<{ ref: string }> }) {
  const { ref } = await params;
  const verse = refFromSlug(ref);
  const text = verse ? getPassageText(verse) : null;

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
            {SITE_NAME} · Verse
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            gap: "24px",
          }}
        >
          <div style={{ fontSize: "54px", fontWeight: 700, color: C.goldDeep, letterSpacing: "0.02em" }}>
            {verse ?? "Scripture"}
          </div>
          <div style={{ fontSize: "38px", color: C.ink, lineHeight: 1.4, maxHeight: "300px", overflow: "hidden" }}>
            {text ?? "The Word of God, read in the World English Bible."}
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
          <span style={{ fontSize: "20px", color: C.inkFaint }}>glory-six.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
