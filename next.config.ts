import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow the dev server to be reached from other devices on the LAN.
     Next blocks non-localhost hosts in dev by default. Entries are
     HOSTNAMES only (no scheme, no port) — e.g. '192.168.1.149'.
     If your machine's DHCP-assigned IP changes, update it here (a
     static/reserved IP in the router avoids this). Production
     `npm run start:lan` does not have this dev-only restriction. */
  allowedDevOrigins: [
    "192.168.1.149", // this Mac's LAN IP
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;