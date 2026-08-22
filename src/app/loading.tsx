/** Instant loading state shown while a route segment streams in. */
export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6">
      <p className="font-display text-[15px] italic text-ink-faint" role="status">
        Turning the page…
      </p>
    </div>
  );
}
