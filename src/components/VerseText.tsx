import { getPassageText } from "@/data/server";

/**
 * The two readings of a passage, side by side in the markup.
 *
 * CSS shows exactly one (see the `data-v` rules in globals.css), choosing by
 * `data-translation` on <html>, which the pre-paint script in the root layout
 * sets from the URL, then localStorage, then the cookie.
 *
 * Why both: asking the server to pick a translation means reading a cookie or
 * a query parameter per request, and a render that depends on either cannot be
 * cached. That is what made every page in this app cost a Function invocation
 * and a full origin transfer on every visit, crawler visits included. Shipping
 * both readings lets every page be prerendered and served from the CDN edge
 * while a reader's choice still shows on the first paint, with no flash.
 */
export function PairedText({
  web,
  kjv,
}: {
  web: string | null;
  kjv: string | null;
}) {
  return (
    <>
      <span data-v="web">{web}</span>
      {/* Fall back to the WEB reading when a verse has no KJV text. CSS hides
          the web span whenever kjv is selected, so without this a missing
          reading would render as nothing at all rather than the default. */}
      <span data-v="kjv">{kjv ?? web}</span>
    </>
  );
}

/** The two readings of one reference, looked up on the server. */
export default function VerseText({
  verse,
  fallback = null,
}: {
  verse: string;
  /** Rendered when the reference resolves to no text. */
  fallback?: React.ReactNode;
}) {
  const web = getPassageText(verse, "web");
  const kjv = getPassageText(verse, "kjv");
  if (!web && !kjv) return <>{fallback}</>;
  return <PairedText web={web} kjv={kjv} />;
}
