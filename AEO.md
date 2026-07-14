# AEO.md

The answer-engine spec: how the site is made legible to AI answer engines (ChatGPT, Perplexity, Google AI surfaces) and agents. This is the mechanical half of AEO; the strategy half lives in SCHEMA.md (structured data), CONTENT_EVIDENCE.md (citable facts), and SITE_ARCHITECTURE.md (entity establishment and FAQ approach).

Framing from the roadmap: the structured knowledge layer is the most valuable thing the site produces, because it feeds every AI surface and map, not just the page. But llms.txt specifically is agent infrastructure, not an SEO lever. Ship it and measure nothing from it.

## llms.txt (build this, populate at launch)

- A single curated `llms.txt` file at the site root. One file, hand-curated, not generated per page.
- Do NOT generate per-page `.md` mirror files. They create duplicate-content risk and have no proven benefit. This is an explicit roadmap ban.
- Status as of mid-2026: AI search crawlers still mostly skip the file and Google says it is not a ranking signal, but Chrome Lighthouse now audits for its presence under Agentic Browsing, IDE and task agents fetch it routinely, and Shopify pushed it to every store by default. Ship it as infrastructure.
- What goes in it: a short plain-language description of the practice (who it is, what it offers, where), the key pages with a one-line description each (the service and specialty pages, About, Beach Therapy, fees, contact, get-started), the canonical contact and booking info, and the out-of-network posture. Pull all facts from CLIENT_FACTS.md. Keep it current with the sitemap.
- Timing: the file references finished pages, so it is populated near launch once the pages and their URLs exist. Write it after the sitemap is built, not before. (Reminder to Steve: this is the deferred item; do not let it slip past launch.)

## What this site does NOT need

- No `agents.md`. That file is for sites where an agent can act (booking, ordering, commerce). This site does not transact: booking is an external Calendly embed, there are no payments, and no PHI touches the repo. Skip it.
- No `/.well-known/` UCP or ACP agent-commerce manifests. Same reason. The roadmap rule is "no signpost without a working endpoint," and there is no transaction endpoint here. Publishing one would get the business dropped from agent results, so do not.

## AEO content principles (apply as pages are built)

- Answer-shaped content. Where a page answers a real question ("what is Beach Therapy," "do you take insurance," "what is a first session like"), state the answer plainly and early, in a self-contained paragraph an engine can lift. The FAQ page and the FAQ sections on service pages are the primary vehicle.
- FAQPage schema must match the visible FAQ exactly (see SCHEMA.md). Mismatched schema is a penalty risk and undermines citation.
- Entity clarity. Consistent NAP everywhere and a complete `sameAs` set (see SITE_ARCHITECTURE.md and SCHEMA.md) are what let an engine confirm the business is real and decide to cite it. Kay's authenticity (30 years in this community, Susi Q, NRMFT, Pepperdine) is the entity signal a competitor cannot fake; encode it as structured data, not just prose.
- Citable facts. When a page uses a statistic, it should be accurate and attributable (see CONTENT_EVIDENCE.md). Engines cite sources; vague or wrong numbers do not get cited and erode trust.
- Semantic, clean HTML. One H1, ordered headings, real lists and tables, no content trapped in scripts. This is the same discipline as accessibility, and it is what makes a page machine-readable.

## The measurement note

AI-referred traffic is small in volume but growing and tends to convert well. Over time, reporting should show citation share, not just ranking position. That is a Velu/Chad reporting concern, not a build task, but it is why the structured layer matters more each year.
