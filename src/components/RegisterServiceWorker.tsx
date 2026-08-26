"use client";

import { useEffect } from "react";

/**
 * Registers the service worker (public/sw.js) in production builds only.
 * In dev the SW would serve stale chunks and fight hot reload, so it is
 * never installed there.
 */
export default function RegisterServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Registration failures (e.g. insecure origin) must never
        // break the app itself.
      });
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
