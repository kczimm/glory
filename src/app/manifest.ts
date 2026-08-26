import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glory: A question-driven study of Scripture",
    short_name: "Glory",
    description:
      "Come with a question. Leave with Scripture. A topical, question-driven Bible study of who God is and our relationship with Him, grounded in the Word of God.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ee",
    theme_color: "#a07c2e",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}