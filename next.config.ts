import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow the dev server to be reached from other devices on the LAN.
     Next blocks non-localhost hosts in dev by default. Add any origin
     (or map a steady hostname to your machine's IP) that should be allowed. */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3100",
    "http://192.168.1.149:3000",
    "http://192.168.1.149:3100",
  ],
};

export default nextConfig;
