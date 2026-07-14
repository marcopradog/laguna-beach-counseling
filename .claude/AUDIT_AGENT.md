# Audit Agent Playbook

**Project:** Laguna Beach Counseling
**Last updated:** 2026-07-13
**For:** Chad (autonomous quarterly audit agent)

## Purpose

This playbook guides Chad's quarterly automated audit of the site. It catches technical drift, performance regression, accessibility issues, and ensures ongoing compliance with project standards. Chad reads this when it reviews the site, makes edits on a branch following the repo's rules, and opens a pull request. It never merges its own work.

The build's job is to make the site optimizable overnight. This file is the checklist for keeping it healthy after launch.

## Audit Frequency

Run quarterly (every 3 months) or on-demand when triggered.

## The Hard Guardrails (never automatic, ever)

These require a human and are never changed by the audit agent on its own:

- **Legal, pricing, and any clinical or outcome claim.** Never auto-edited.
- **HIPAA-sensitive content.** Never publish anything that could identify a client. No testimonials without written authorization.
- **Modality claims.** Never add Gottman Method, EFT, EMDR, IFS, or Imago as a practice or practitioner claim (see CLIENT_FACTS.md).
- **Statistics.** Never publish an unverified figure or anything on the "Do not publish" list in CONTENT_EVIDENCE.md.
- **Copy rewrites** only if the client opted into AI-assisted content (LBC has), but the guardrails above still bind.

### The approve-card flow

The pull request plus the Cloudflare preview is the approval card. Connor approves SEO edits (title, meta, schema, alt text). Steve approves anything heavier. Legal, pricing, and claims are never automatic.

## Audit Checklist

### 1. Documentation Drift Check

**Goal:** Ensure code matches documented architecture

```bash
# Check if actual file structure matches ARCHITECTURE.md
# Flag any new directories or files not documented
# Flag any missing documented files
```

- [ ] File structure matches ARCHITECTURE.md
- [ ] No undocumented directories or major files
- [ ] All documented files exist
- [ ] Update ARCHITECTURE.md if legitimate changes found

### 2. Dependency Audit

**Goal:** Keep dependencies current and secure

```bash
npm audit
npm outdated
```

- [ ] Run `npm audit` and address critical/high vulnerabilities
- [ ] Check for minor version bumps (safe to auto-PR)
- [ ] Flag major version updates (Eleventy, Tailwind) for Marco review (never automatic)
- [ ] Remove unused dependencies

### 3. Performance Regression Check

**Goal:** Ensure Core Web Vitals remain within targets

Use Cloudflare Speed Observatory and/or Lighthouse:

- [ ] LCP < 2.5s (75th percentile)
- [ ] INP < 200ms (75th percentile), watch this one specifically; it is the most-failed vital and pure JS architecture
- [ ] CLS < 0.1 (75th percentile)
- [ ] Lighthouse scores against the budget in DEPLOYMENT.md (Perf 90+, A11y 95+, Best Practices 95+, SEO 100)
- [ ] Total page weight trend (flag if increasing significantly)
- [ ] Image optimization check (any images > 300KB?)

### 4. Accessibility Audit

**Goal:** Maintain WCAG 2.2 AA compliance

Automated checks (axe, Lighthouse, or Pa11y):

```bash
# Run automated accessibility testing
# Check for common issues
```

- [ ] All images have alt text (meaningful) or empty alt (decorative)
- [ ] Heading hierarchy correct (one H1, then H2, H3, no skipping)
- [ ] Form fields have labels
- [ ] Color contrast meets 4.5:1 (normal) and 3:1 (large text)
- [ ] Focus states visible on interactive elements
- [ ] Keyboard navigation works
- [ ] `prefers-reduced-motion` respected
- [ ] No accessibility-overlay widget has crept back in

### 5. SEO and Structured Data Check

**Goal:** Prevent schema regression and maintain SEO and answer-engine health

```bash
# Validate all schema blocks
# Check for meta tag completeness
```

- [ ] All pages have unique title tags and meta descriptions
- [ ] All pages have canonical tags
- [ ] sitemap.xml is current and accessible, matching the live page set
- [ ] robots.txt is correct
- [ ] llms.txt is still current with the live page set (see AEO.md)
- [ ] All JSON-LD schema blocks validate at validator.schema.org
- [ ] FAQPage schema matches visible content exactly
- [ ] `aggregateRating` never ships with placeholder or fabricated values
- [ ] Open Graph tags present and correct
- [ ] hreflang tags correct (if bilingual)
- [ ] Search Console review: pages with impressions but few clicks want a better title or meta; pages catching questions want FAQ schema; page-two pages want a content pass. Beach Therapy and the anxiety panic/phobia cluster are the standing high-opportunity targets (see the SEO baseline in SITE_ARCHITECTURE.md)
- [ ] Citation share: track AI-referred traffic and citations over time, not just rankings (a reporting concern, noted for awareness)

### 6. Broken Links and Assets

**Goal:** Ensure all links and resources work

```bash
# Crawl site for broken links
# Check for missing images or assets
```

- [ ] No 404s on internal links
- [ ] No broken external links
- [ ] All images load correctly
- [ ] All scripts and stylesheets load
- [ ] High-value URLs still resolve (beach-therapy, couples, senior, discernment, the children blog post); fix any missed redirect

### 7. Security Headers Check

**Goal:** Ensure security headers remain configured

Check `src/_headers`:

- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Permissions-Policy configured
- [ ] CSP if applicable

### 8. Brand and Content Integrity

**Goal:** Prevent drift to generic defaults and keep the brand voice intact

Grep checks against Forbidden Patterns from DESIGN_SYSTEM.md:

```bash
# Check for banned fonts
grep -r "font-family.*Inter" src/

# Check for em dashes (U+2014); pattern uses the escape so this file stays em-dash-free
grep -rP "\x{2014}" src/

# Check for banned filler phrases
grep -r "transform\|unlock\|breakthrough\|leverage\|simply" src/
```

- [ ] No banned fonts (Inter, Noto Serif, Manjari)
- [ ] No em dashes anywhere (site, content, code comments)
- [ ] No banned filler phrases (see voice-tone.md)
- [ ] Colors match DESIGN_SYSTEM.md tokens; one gold CTA per viewport, gold under its 2 percent budget; inline SVG icons only
- [ ] No unauthorized design changes
- [ ] Voice mechanics on any new copy (see voice-tone.md): a question present, abstract paragraphs carry a question or metaphor, lightness, banned-word scan (especially "simply")
- [ ] The "therapy factory" test: does any surface read as high-volume or impersonal? Flag if so

### 9. Facts and Freshness

**Goal:** Keep content current and accurate

- [ ] CLIENT_FACTS.md CONFIRM items: have any been resolved and need publishing (hours, entity structure, Irene's status, per-associate modalities)?
- [ ] Roster: are departing associates (Christy, Austin) still shown when they should not be? Are replacements live?
- [ ] Statistics: re-verify any published figure against its primary source and refresh to the current year (see CONTENT_EVIDENCE.md). Prevalence, utilization, and cost numbers age fastest
- [ ] Crisis and support resources: confirm 911 / 988 / Crisis Text Line / SAMHSA are still current and present on crisis-adjacent pages and the footer
- [ ] Check for outdated dates or year references
- [ ] Verify contact information is current
- [ ] Review blog posts for relevance (if blog enabled)
- [ ] Check for expired promotions or time-sensitive content

### 10. Cloudflare Settings Audit

**Goal:** Ensure performance optimizations remain enabled

Via Cloudflare dashboard:

- [ ] Early Hints: ON
- [ ] HTTP/3: ON
- [ ] 0-RTT: ON
- [ ] Brotli: Automatic (default)
- [ ] Rocket Loader: OFF (breaks JS)
- [ ] Cache Rules configured correctly
- [ ] Tiered Cache enabled

## Audit Output Format

For each audit, Chad should generate a report:

```markdown
# Quarterly Audit Report - Laguna Beach Counseling
**Date:** [Date]
**Auditor:** Chad

## Summary
- Total checks: [X]
- Passed: [X]
- Failed: [X]
- Warnings: [X]

## Issues Found

### Critical
[List critical issues requiring immediate attention]

### Warnings
[List warnings and recommendations]

## Recommended Actions
1. [Action 1]
2. [Action 2]

## Changes Made (if auto-fix enabled)
[List any automated fixes applied]

## Pull Request
[Link to PR with proposed updates if changes need review]
```

## Auto-Fix vs. Flag for Review

**Auto-fix allowed:**
- Minor dependency updates (patch versions)
- Broken internal links (if new target is obvious)
- Missing alt text (add empty alt to decorative images)
- Formatting consistency issues

**Flag for human review (never auto-fix):**
- Major dependency updates
- Schema changes
- Content changes
- Design/brand changes
- Security header modifications
- Performance regressions requiring architecture changes
- Anything in The Hard Guardrails above (legal, pricing, claims, HIPAA, modality claims, statistics)

Title, meta, schema, and alt-text edits move fast. Anything touching copy, legal, pricing, or claims waits for the right human. When in doubt, flag rather than edit.

## Escalation

If critical issues found:
1. Create GitHub issue with "Critical" label
2. Notify Marco via configured channel
3. Include reproduction steps and recommended fix

## Notes

- This playbook evolves. Chad should propose updates via PR if better checks are discovered.
- The quarterly audit catches technical changes, not paradigm changes. A yearly human review covers strategic shifts.
