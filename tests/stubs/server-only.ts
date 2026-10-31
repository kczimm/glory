/**
 * Under vitest there is no server/client module boundary, but src/lib/search.ts
 * imports the `server-only` marker, whose default export throws on import. This
 * empty module stands in for the marker so server-side search can be tested
 * directly. It must never be used to import server-only code into the app.
 */
export {};
