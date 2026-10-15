import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old "Story of Scripture" trail became five canonical trails.
  // Send legacy links to the first of them.
  async redirects() {
    return [
      {
        source: "/trails/story-of-scripture",
        destination: "/trails/in-the-beginning",
        permanent: true,
      },
      /* Legacy deep link: /questions?trail=<slug> became /trails/<slug>.
         Handled at the routing layer rather than inside the page, because
         reading searchParams in the page is what made the questions index
         render on every request instead of being a static prerender. */
      {
        source: "/questions",
        has: [{ type: "query", key: "trail", value: "(?<trail>.+)" }],
        destination: "/trails/:trail",
        permanent: true,
      },
    ];
  },
  /* Allow the dev server to be reached from other devices on the LAN.
     Next blocks non-localhost hosts in dev by default. Entries are
     HOSTNAMES only (no scheme, no port) — e.g. '192.168.0.42'.
     If your machine's DHCP-assigned IP changes, update it here (a
     static/reserved IP in the router avoids this). Production
     `npm run start:lan` does not have this dev-only restriction. */
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;