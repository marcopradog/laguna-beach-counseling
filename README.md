# Laguna Beach Counseling

Professional counseling services website built following the Circulation Studio Web Build Master Roadmap.

## Project Status

**Current Phase:** Phase 1 - Discovery and Intake

This repository has been scaffolded with the standard file structure. The build will proceed through the following phases:

1. Discovery and Intake
2. Strategy and Structure
3. Brand and Design
4. Repo and Foundation
5. Build
6. Technical SEO and Structured Data
7. Performance and Assets
8. Testing and QA
9. Launch
10. Post-Launch and Ongoing

## Documentation

All project documentation is in the root directory:

- **ARCHITECTURE.md** - Technical structure and stack
- **DESIGN_SYSTEM.md** - Brand colors, typography, components, and forbidden patterns
- **DEPLOYMENT.md** - Cloudflare Pages configuration and deployment process
- **SITE_ARCHITECTURE.md** - Sitemap, URLs, keywords, and content strategy
- **SCHEMA.md** - Structured data specifications
- **voice-tone.md** - Brand voice guidelines (if applicable)

## Agent Instructions

The `.claude/` directory contains instructions for AI agents:

- **CLAUDE.md** - Rules for Claude Code and Chad
- **AUDIT_AGENT.md** - Quarterly audit playbook
- **README.md** - Guide to agent documentation

## Stack

- **Static Site Generator:** Eleventy v3
- **CSS:** Tailwind v4
- **Hosting:** Cloudflare Pages
- **CDN:** Bunny CDN

## Development

```bash
# Install dependencies
npm install

# Development server
npm start

# Production build
npm run build
```

## Build Standards

- No em dashes anywhere
- Accessibility built in from the start (WCAG 2.2 AA)
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Agent-readable: semantic HTML, clean structure, proper schema
- Brand-compliant: follows DESIGN_SYSTEM.md constraints

## Project Structure

```
laguna-beach-counseling/
├── eleventy.config.js
├── package.json
├── .nvmrc
├── ARCHITECTURE.md
├── DESIGN_SYSTEM.md
├── DEPLOYMENT.md
├── SITE_ARCHITECTURE.md
├── SCHEMA.md
├── voice-tone.md
├── .claude/
│   ├── CLAUDE.md
│   ├── AUDIT_AGENT.md
│   └── README.md
└── src/
    ├── _data/
    │   └── site.json
    ├── _includes/
    │   ├── layouts/
    │   └── components/
    ├── css/
    │   ├── main.css
    │   ├── base/
    │   ├── components/
    │   └── pages/
    ├── js/
    ├── index.njk
    ├── 404.njk
    ├── _headers
    ├── _redirects
    └── site.webmanifest
```

The production build is written to `public/` (gitignored). See ARCHITECTURE.md for the full technical map.

## Notes

- Favicon files (favicon.ico, favicon.svg, apple-touch-icon.png) will be added in Phase 7; the base layout already references them
- Eleventy and Tailwind configuration are set up (Eleventy v3 + Tailwind v4 @theme, Tailwind CLI build)
- Page content is built in a later phase; index.njk is a foundation placeholder

## Reference

This build follows the conventions documented in the Web Build Master Roadmap maintained by Circulation Studio.
