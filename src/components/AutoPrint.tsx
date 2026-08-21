"use client";

import { useEffect } from "react";

/** Open the browser print dialog once the handout has rendered. */
export default function AutoPrint() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 300);
    return () => clearTimeout(t);
  }, []);
  return null;
}
