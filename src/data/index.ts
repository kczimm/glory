import { categories, getCategory } from "./categories";
import { connections, getConnections, connectionKindLabel } from "./connections";
import { parseRef, verseSlug } from "./ref";
import type { Category, Question, Connection, ConnectionKind } from "./types";

/**
 * The client-safe data barrel: only small, static, dependency-light modules.
 * Scripture text and study lookups live in `@/data/server` (server-only), so
 * importing this barrel from a client component never ships the vendored
 * Bible or the study corpus to the browser.
 */

export { categories, getCategory };
export { connections, getConnections, connectionKindLabel };
export { parseRef, verseSlug };
export type { Category, Question, Connection, ConnectionKind };
