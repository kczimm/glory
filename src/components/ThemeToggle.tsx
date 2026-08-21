"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

// Keep the toggle in sync with other tabs and with OS theme changes
// (only when the user has not picked a theme explicitly).
let wired = false;

function wireExternalSync() {
  if (wired || typeof window === "undefined") return;
  wired = true;
  try {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", (e) => {
      try {
        if (!localStorage.getItem("glory:theme")) {
          apply(e.matches ? "dark" : "light");
          notify();
        }
      } catch {}
    });
  } catch {}
  window.addEventListener("storage", (e) => {
    if (e.key === "glory:theme") {
      apply(e.newValue === "dark" ? "dark" : "light");
      notify();
    }
  });
}

function subscribe(listener: () => void) {
  wireExternalSync();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): "light" | "dark" {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

// Keep in sync with the no-flash script in src/app/layout.tsx:
// light is the absence of data-theme, dark sets it to "dark".
function apply(theme: "light" | "dark") {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    delete document.documentElement.dataset.theme;
  }
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("glory:theme", next);
    } catch {}
    listeners.forEach((l) => l());
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="p-1.5 text-ink-soft transition-colors hover:text-gold"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
        </svg>
      )}
    </button>
  );
}
