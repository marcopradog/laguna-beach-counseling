// Content hash of the compiled stylesheet, used to version the /css/main.css
// URL in base.njk (?v=<hash>). This is what makes the immutable one-year
// Cache-Control on /css/* safe: any change to the CSS produces a new URL, so
// browsers can cache each version forever without ever serving stale styles.
// Works because "npm run build" compiles the CSS before Eleventy runs (see
// package.json: build:css runs first). In dev, on the very first boot the
// file may not exist yet, so we fall back to a timestamp; the dev server
// always serves fresh CSS bytes regardless, so the value is cosmetic there.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

export default function () {
  try {
    const css = readFileSync("public/css/main.css");
    return createHash("md5").update(css).digest("hex").slice(0, 10);
  } catch {
    return String(Date.now());
  }
}
