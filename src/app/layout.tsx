import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RegisterServiceWorker from "@/components/RegisterServiceWorker";
import SpeechPlayer from "@/components/SpeechPlayer";
import { SITE_URL } from "@/lib/site";

/** metadataBase wants a URL instance. SITE_URL is a build-time literal, so
 *  this cannot fail today; the guard keeps a future typo in that literal from
 *  throwing at import time and taking the whole build down. */
function siteBase(): URL {
  try {
    return new URL(SITE_URL);
  } catch {
    return new URL("https://glorystudy.com");
  }
}

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteBase(),
  applicationName: "Glory",
  title: {
    default: "Glory: A question-driven study of Scripture",
    template: "%s · Glory",
  },
  description:
    "Come with a question. Leave with Scripture. A topical, question-driven Bible study of who God is and our relationship with Him, grounded in the Word of God.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Glory",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Pre-paint: theme and translation.
            Both are user preferences that must be applied before the first
            paint to avoid a flash. They are read here, in the browser, rather
            than during rendering on the server, because a server render that
            depends on a cookie or a query parameter cannot be cached. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("glory:theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.dataset.theme="dark"}var v=new URLSearchParams(window.location.search).get("version");if(v!=="kjv"&&v!=="web"){try{v=localStorage.getItem("glory:translation")}catch(e){v=null}if(v!=="kjv"&&v!=="web"){var m=document.cookie.match(/(?:^|; )glory:translation=([^;]*)/);v=m?decodeURIComponent(m[1]):null}}if(v==="kjv"){document.documentElement.dataset.translation="kjv"}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeechPlayer />
        <RegisterServiceWorker />
        {/* Web Analytics. The only visitor measurement the site has: the CDN
            request log carries no client identity, so page views and the
            daily-reset visitor hash are how readers get counted at all.
            Cookie-free and count-only. Vercel's bot filtering is User-Agent
            based, and a client that runs no JavaScript never loads the script,
            so the counts stay close to real readers. */}
        <Analytics />
      </body>
    </html>
  );
}
