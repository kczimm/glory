"use client";

import { useEffect } from "react";

/**
 * Root-level error boundary: catches errors thrown by the root layout
 * itself, which `app/error.tsx` (by design) cannot see. Must render its own
 * <html> and <body>.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "28rem", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 500 }}>Something went wrong</h1>
          <p style={{ marginTop: "0.75rem", color: "#555" }}>
            Glory failed to start. Please try again.
          </p>
          {error.digest && (
            <p style={{ marginTop: "0.5rem", fontSize: "0.7rem", color: "#999" }}>
              Ref: {error.digest}
            </p>
          )}
          <button type="button" onClick={retry} style={{ marginTop: "1.5rem", cursor: "pointer" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
