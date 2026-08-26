import { cookies } from "next/headers";
import type { TranslationCode } from "./translation";

/**
 * Server-side translation resolver.
 *
 * On the server, we can't access localStorage directly. Instead:
 * 1. Check the `glory:translation` cookie (set by the client when they change)
 * 2. Default to "web"
 *
 * For URL-based version selection, components should check searchParams
 * and override this server-side default.
 */

const COOKIE_KEY = "glory:translation";
const VALID_CODES: Set<string> = new Set(["web", "kjv"]);

/** Get the translation code from the cookie, falling back to "web". */
export async function getServerTranslation(): Promise<TranslationCode> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(COOKIE_KEY)?.value;
  if (stored && VALID_CODES.has(stored)) return stored as TranslationCode;
  return "web";
}

/**
 * Resolve translation from request search params (URL override wins).
 * Use this in server components that have access to searchParams.
 */
export async function resolveServerTranslation(
  searchParams?: Record<string, string | string[] | undefined>
): Promise<TranslationCode> {
  const urlVersion = searchParams?.version;
  const code = typeof urlVersion === "string" ? urlVersion : undefined;
  if (code && VALID_CODES.has(code)) return code as TranslationCode;
  return getServerTranslation();
}
