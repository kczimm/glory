// Loader for running src/ TS directly under node: resolves the "@/" alias
// and extensionless relative imports like the bundler would.
import { pathToFileURL, fileURLToPath } from "node:url";
import { statSync } from "node:fs";
import { dirname, join } from "node:path";

function isFile(p) {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
}

function tryResolve(spec) {
  const candidates = [
    spec,
    spec + ".ts",
    spec + ".tsx",
    join(spec, "index.ts"),
    join(spec, "index.tsx"),
  ];
  for (const c of candidates) if (isFile(c)) return c;
  return null;
}

export async function resolve(specifier, context, nextResolve) {
  let base = null;
  let spec = null;
  if (specifier.startsWith("@/")) {
    base = new URL("../src/", import.meta.url);
    spec = specifier.slice(2);
  } else if (
    (specifier.startsWith("./") || specifier.startsWith("../")) &&
    !/\.[a-z0-9]+$/i.test(specifier) &&
    context.parentURL
  ) {
    base = pathToFileURL(dirname(fileURLToPath(context.parentURL)) + "/");
    spec = specifier;
  }
  if (base && spec) {
    const file = tryResolve(fileURLToPath(new URL(spec, base)));
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}