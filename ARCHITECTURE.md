# Architecture

**Project:** Laguna Beach Counseling
**Last updated:** 2026-07-13

## Purpose

This document is the technical map for the Laguna Beach Counseling website. It records the actual scaffold as built and references the other documentation files rather than duplicating them.

## Stack

- **Static site generator:** Eleventy v3 (ESM config, `eleventy.config.js`)
- **Templating:** Nunjucks (`.njk`), components as includes in `src/_includes/`
- **CSS:** Tailwind v4 with `@theme` tokens, no `tailwind.config.js`. Compiled by the Tailwind CLI, not through Eleventy.
- **JavaScript:** minimal vanilla JS, passthrough-copied and deferred
- **Hosting:** Cloudflare Pages
- **CDN (assets):** Bunny CDN for logo, photography, and video

## Build pipeline

CSS and HTML are built by two separate tools, wired together in `package.json`:

- `npm run build:css` compiles `src/css/main.css` to `public/css/main.css` (minified) with the Tailwind CLI.
- `npm run build` runs `build:css`, then `eleventy` (which writes HTML and passthrough assets into `public/`).
- `npm start` runs both watchers together via `concurrently`: Tailwind in `--watch` and the Eleventy dev server.

There is no Vite step. For a content site with minimal JavaScript, the Tailwind CLI plus Eleventy is the smaller, more reliable pipeline.

## Output

- **Build output directory:** `public/` (gitignored). Cloudflare Pages serves this directory.
- Eleventy control files (`_headers`, `_redirects`) and `site.webmanifest` are passthrough-copied to the output root. `src/js/` copies to `/js/`, and `src/images/` (when added) copies to `/images/`.

## File structure

```
laguna-beach-counseling/
├── eleventy.config.js       # Eleventy v3 config (input src, output public)
├── package.json             # scripts + devDeps (Eleventy, Tailwind CLI, concurrently)
├── .nvmrc                   # Node 20 (Cloudflare target)
├── src/
│   ├── _data/
│   │   └── site.json        # business facts, single source for markup (from CLIENT_FACTS.md)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk     # HTML shell: head, header, main, footer
│   │   └── components/
│   │       ├── header.njk           # sticky nav + accessible mobile menu
│   │       ├── footer.njk           # NAP, out-of-network line, sameAs, support-resources
│   │       └── support-resources.njk # reusable crisis-resources block
│   ├── css/
│   │   ├── main.css         # Tailwind entry + imports
│   │   ├── base/
│   │   │   ├── theme.css        # @theme design tokens
│   │   │   └── typography.css   # base element styles, reduced-motion guard
│   │   ├── components/
│   │   │   └── site.css        # header, footer, buttons, support-resources
│   │   └── pages/          # page-specific CSS (added per page later)
│   ├── js/
│   │   └── menu.js         # mobile menu toggle
│   ├── index.njk          # foundation placeholder (real homepage built later)
│   ├── 404.njk            # custom 404 (permalink /404.html)
│   ├── _headers           # Cloudflare security + caching headers
│   ├── _redirects         # migration 301s (populated in the launch phase)
│   └── site.webmanifest
└── .claude/               # agent instruction files
```

## Data-driven facts (never hardcode business facts in markup)

All NAP, positioning, booking, `sameAs`, and crisis-resource values live in `src/_data/site.json` and are referenced in templates as `site.*`. Copy or schema must trace to CLIENT_FACTS.md.

Intentionally omitted from `site.json` pending client confirmation (do not read these gaps as oversights):

- **Business hours** (the site-vs-Yelp discrepancy in CLIENT_FACTS.md is unresolved; hold `openingHoursSpecification` too).
- **Geo coordinates** (CONFIRM the authoritative figure from the GBP/Maps embed).
- **aggregateRating** (no real review totals yet; fabricated ratings are a violation).

## Documentation references

- **Design system:** DESIGN_SYSTEM.md for colors, typography, spacing, components, and forbidden patterns
- **Deployment and budget:** DEPLOYMENT.md for Cloudflare config, headers, redirects, Node version, and the performance budget
- **Site structure:** SITE_ARCHITECTURE.md for sitemap, URLs, keyword mapping, and internal linking
- **Structured data:** SCHEMA.md for JSON-LD schema types per page template
- **Answer engine:** AEO.md for the llms.txt spec
- **Facts and evidence:** CLIENT_FACTS.md (business truth) and CONTENT_EVIDENCE.md (citable stats)
- **Brand voice:** voice-tone.md for copy generation

## Build commands

```bash
npm install          # install dependencies
npm run build        # production build (CSS then Eleventy) into public/
npm start            # dev servers (Tailwind watch + Eleventy serve)
```

## Deployment

Frontend deploys automatically via Cloudflare Pages on push to main. See DEPLOYMENT.md for the full configuration.

## Conventions

- URLs: lowercase, hyphenated, no accents in slugs
- Commits: surgical, never `git add -A`
- No em dashes anywhere in code, comments, or content
- Accessibility built in from the start (WCAG 2.2 AA): semantic landmarks, one H1 per page, visible focus, keyboard-operable menu, `prefers-reduced-motion` respected
- Icons are inline SVG only; no external icon CDNs or icon libraries

## Agent files

Claude Code and Chad (the autonomous agent) read `.claude/CLAUDE.md` for standards, brand limits, and constraints. The quarterly audit playbook is in `.claude/AUDIT_AGENT.md`.
