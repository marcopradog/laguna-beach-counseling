# DESIGN_SYSTEM.md

The visual contract: the design concept, color, type, spacing, radii, shadows, components, textures, and the Forbidden Patterns list. The Forbidden Patterns section is the anti-slop standard and is mirrored into `.claude/CLAUDE.md`.

Source: the "Navigating Life's Waves" design system (Circulation Studio brand proposal, v2, May 2026) and LBC brand guidelines v1.0. Colors and tokens verified against the production CSS. Every component described here exists in the approved homepage mockup; this is a buildable system, not a moodboard.

Note on a source conflict: an older LBC brand PDF (Loriann Oberlin / La Ventana Gris) listed the typefaces as Noto Serif and Manjari. The design proposal replaced that pairing (it "renders inconsistently and lacks editorial gravitas") and the finalized system uses DM Serif Display and Manrope. DM Serif Display + Manrope is authoritative.

---

## The concept: "Navigating Life's Waves"

A coastal editorial system that makes 30 years of Pepperdine-trained clinical experience feel as warm and accessible as the practice already is in person. Not clinical. Not generic. Unmistakably Laguna. Four principles govern every decision:

1. Coastal, not clinical. Sand-warm backgrounds, navy depth, sea-foam softness. Every surface signals "you're in good hands, by the ocean," never "you're in a waiting room."
2. Editorial gravitas. The serif does the emotional work (headlines, names, pull quotes, the tagline). The sans does the functional work (body, UI, forms). Never blur the line: the serif is the voice, the sans is the work.
3. Whitespace as credential. Confident practices don't crowd their pages; templates do. Generous space says "we know what we're doing, we don't need to convince you with density." This is also how the "not a therapy factory" feeling gets built visually.
4. Pills, not rectangles. Buttons and badges use a 999px radius, echoing the life ring in the logo. The system has exactly three radii (see below).

---

## Color tokens (the locked palette)

Define as Tailwind v4 `@theme` tokens (no `tailwind.config.js`).

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#003657` | Primary. Headers, nav, logo field, depth-and-authority surfaces |
| `--navy-deep` | `#002745` | Darker navy for gradients and footers |
| `--navy-darkest` | `#001a2e` | Deepest navy accent |
| `--sea-foam` | `#98c5d8` | Sky and ocean-foam. Soft section backgrounds, calming surfaces |
| `--sun` (gold) | `#dfa108` | Warmth and hope. CTAs and the tagline lockup ONLY. Rationed |
| `--sun-deep` | `#c48d05` | Gold hover / pressed |
| `--sun-light` | `#f5c845` | Light gold accent |
| `--water` (teal) | `#28a0c9` | Water and action. Links and interactive elements |
| `--water-deep` | `#1a6480` | Teal hover / deeper links |
| `--sand` (off-white) | `#f0f0f0` | Neutral page background |
| `--sand-warm` | `#faf6ec` | Warmer sand for editorial sections. Carries the paper-grain texture. Warmed from `#faf8f3` in the adopted v1.0 guidelines |
| `--paper` | `#ffffff` | Cards and content surfaces |
| `--ink` | `#1a2332` | Body text (near-black navy) |
| `--ink-soft` | `#485363` | Secondary text |
| `--ink-faint` | `#6b7785` | Muted labels and captions |
| `--border` | `rgba(0,54,87,0.14)` | Standard hairline border |
| `--border-soft` | `rgba(0,54,87,0.06)` | Soft border on cards |
| `--green` | `#2f7d4f` | Success states only |

### The on-page color ratio (target proportions)

Navy 70 percent, Sand 20 percent, Sea Foam 5 percent, Water 3 percent, Gold 2 percent. Gold stays under 2 percent of any surface: only on CTAs and the tagline lockup. This ratio is the fastest way to check whether a page feels on-brand.

### The gold rule (firm brand constraint)

One gold CTA per visible viewport, maximum. Gold is the door: the page's single most important action. If two golds compete in one screen, the design is wrong. Everything else uses navy, teal, sea-foam, and the neutrals.

Contrast: all text clears WCAG 2.2 AA (4.5:1 normal, 3:1 large). Gold on white fails for body text, so gold is for fills and accents, never paragraph text. Navy on sand and ink on paper are the safe text pairings.

---

## Typography

Two typefaces, no exceptions without written authorization.

- Display / headings: DM Serif Display (Google Fonts). This is "Option 1, Editorial," the chosen pairing (two others, Fraunces + Inter and Lora + IBM Plex, were presented and not selected). Handles every emotional moment: headlines, names, pull quotes, the tagline.
- Body / UI: Manrope (Google Fonts). Body, form labels, button text, navigation.

The pairing is intentional: serif gravitas plus humanist sans warmth, the visual echo of the brand voice.

### The italic cut

DM Serif Display italic is dramatic. Reserve it for the single most loaded phrase inside a headline (for example, "There's a way *through this*"), plus names, pull quotes, and the tagline. Never set an entire headline in italic; always pair it with the upright cut for contrast.

### Type scale (sized up 25 percent for the older-skewing audience)

Base font size is 18px, not the usual 16px, because the audience skews older and affluent and readability is a feature.

| Role | Size | Notes |
|---|---|---|
| H1 / Hero | 48 to 80px | Serif, letter-spacing about -0.025em, line-height about 1.05 |
| H2 / Section | 36 to 56px | Serif, letter-spacing about -0.022em |
| H3 / Card | 26 to 32px | Serif, letter-spacing about -0.018em |
| Lead | 22px / 1.6 | Sans, intro paragraphs |
| Body | 18px / 1.7 | Sans |
| Eyebrow | 13px, 0.2em tracking | Sans, uppercase, gold, above section titles |
| UI label | 14 to 16px | Sans, weight 600 |

Manrope weights in use: 300, 400, 500, 600, 700. DM Serif Display ships regular and italic only, which is enough.

Font loading (performance): preconnect to `fonts.gstatic.com`, `font-display: swap`, subset where possible, keep total font payload under 30KB. Do not load weights the design does not use.

---

## Spacing, radii, and shadows

### Radii (exactly three, do not invent more)

- Pills: 999px. Buttons and badges (the life-ring echo).
- Cards: 16 to 22px.
- Inputs: 8px.

### Spacing

Generous vertical rhythm between sections (whitespace as credential). Use a consistent scale (Tailwind's 4px base is fine; document custom steps as tokens). Content max-width for reading measure on long-form pages (about 65 to 75 characters per line). Mobile-first: every component works at 375px before 1440px.

### Shadows

- `--shadow-card`: a three-layer composite (1px crisp inner, 8px close diffuse, 24px ambient bloom). Cards float on the sand rather than sticking to it. Concrete value: `0 1px 2px rgba(0,54,87,0.02), 0 8px 32px rgba(0,54,87,0.04), 0 24px 48px rgba(0,54,87,0.04)`. Hover pushes lift to translateY -3px on cards, up to -6px on feature elements.
- `--shadow-cta`: gold-tinted, for the primary CTA. `0 2px 8px rgba(0,26,46,0.08), 0 16px 40px rgba(223,161,8,0.18)`.

---

## Components

Build once as macros in the components CSS layer. Do not hardcode markup a component covers.

### Buttons (four types, one decision tree)

- `btn-accent` (gold pill): the primary conversion, exactly one per screen. Construction: solid gold base, inset highlight on the top edge, an embedded navy circle with an arrow, gold-tinted shadow underneath. Dimension without a 2010s gradient. Example label: "Book your free call."
- `btn-primary` (navy pill): high-stakes asks that are not the single gold CTA. Example: "Schedule a session."
- `btn-ghost` (outline pill): secondary actions. Example: "Meet the team."
- `btn-text` (text link with arrow): tertiary. Example: "Read Kay's story."

Decision tree: gold for the one primary conversion in view, navy for high-stakes, ghost for secondary, text for tertiary.

### Other components

- Hero (with and without background photo; the photo variant needs a navy overlay for text contrast)
- Section header (gold eyebrow with a 28px by 2px gold rule, then a serif H2)
- Service / audience card (used across the `/therapy` and `/specialties` grids; card radius, soft border, card shadow, hover lift)
- Team member card (photo, name in serif, credentials, specialties, "book with" link)
- Pull-quote block (serif, often italic, generous whitespace; for Kay's canonical lines)
- CTA band (the single gold "Get to Know Us" call to action)
- FAQ accordion (must match FAQPage schema exactly)
- Fee / rate table (out-of-network and Superbill framing)
- Footer (NAP, out-of-network positioning line, sameAs links, privacy link, and the support-resources block on crisis-adjacent contexts)
- Support-resources block (911 / 988 / Crisis Text Line / SAMHSA, warm framing; a reusable component shared by the footer and crisis-adjacent pages, see CONTENT_EVIDENCE.md)
- Sticky nav with mobile menu

---

## Textures and effects (subtle, architectural, never decorative)

These give the system tactile depth without digital flatness. None should be obvious at a glance; you would only miss them if they were gone.

- Paper grain: inline SVG fractal noise at about 4.5 percent opacity, multiply blend, applied to sand-warm sections. Absent on white and navy, where it muddies contrast.
- Sea-foam wash: soft foam tint on select surfaces.
- Scroll reveal: fade-in-up (translateY about 28px) with staggered ~120ms delays and cubic-bezier easing. Sections reveal as you arrive, never all at once, never aggressively. Must respect `prefers-reduced-motion`.
- Layered gold CTA: described under Buttons; the point is dimension through layering, never a gradient.

---

## Imagery direction

- Sunlit California coastal palette. Real Laguna landmarks: Heisler Park, Main Beach, the lifeguard towers, the coves.
- Real people walking the beach, diverse couples and individuals, soft natural light. Aspirational but not staged.
- Real photography where the brand claims local or personal authenticity. The Beach Therapy photos and intro video are already integrated on the CDN (bunny.net).
- Every image: explicit width and height, compressed under 300KB, WebP or AVIF with fallback, lazy-load below the fold, eager plus high fetchpriority plus preload for the hero.

Avoid: stock "therapy couch" tropes, dim clinical interiors, generic inland or urban imagery that breaks the coastal identity, and any AI-generated image passed off as a real photo.

Outstanding asset: the office exterior photo is still a placeholder and needs sourcing before `/contact` and the About page ship.

Video: serve `.mp4` first with `.mov` as a fallback source (the `.mp4` first ordering is what makes video play reliably across browsers). The Beach Therapy intro video is already wired this way.

Two references that live in the adopted guidelines (`LBC_Brand_Guidelines.html`, Adopted v1.0, June 2026) and should be consulted for detail: a Logo Misuse grid, and an Accessibility and Approved Text Pairings block (which color-on-color text combinations clear contrast). Pull from those before shipping logo placements or unusual text-on-color treatments.

---

## The logo

Lifeguard tower mark: vigilance, safety, presence at the water's edge. The tower is the metaphor for the therapist standing watch as clients navigate life's waves. Tagline lockup: "Navigating Life's Waves Together."

Do: place on navy, off-white, or photographic backgrounds with adequate contrast; preserve clear space equal to the tower height; pair with the tagline where space allows.
Do not: recolor the tower, stretch or distort it, place it on a busy photo without an overlay, or pair it with non-brand type.

Logo and photo assets live on the bunny.net CDN. The favicon set (favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest) is exported from the tower mark. The manifest `theme_color` and the `theme-color` meta are the navy, `#003657`.

---

## Forbidden Patterns (the anti-slop standard, mirrored into CLAUDE.md)

Banned defaults. If a generated page shows any of these, it drifted and must be corrected.

- Em dashes anywhere (site, content, docs, code comments). Use commas, periods, parentheses. Hard house rule; it overrides the older brand voice guide's "occasional em dash" note.
- Inter as a UI font (use Manrope). Noto Serif or Manjari (use DM Serif Display). Both are superseded.
- More than three corner radii. The system is pills, cards, inputs. That is it.
- Generic purple-to-blue or indigo AI gradient. Any 2010s-style gradient on the CTA (use the layered gold treatment instead).
- Default indigo / violet primary. Primary is navy `#003657`.
- More than one gold element in a single viewport. Gold over its 2 percent budget.
- Stock default icons dropped in without intent. External icon CDNs or icon libraries loaded at runtime. Icons are inline SVG only. No emojis in any deliverable.
- Emojis in professional deliverables.
- Stock "therapy couch" or dim clinical imagery. AI-generated imagery posing as real photography.
- Serif used for functional UI, or sans used for the emotional headline moment (never blur the serif-voice / sans-work line).
- Banned filler copy (full list in voice-tone.md): "transform," "unlock," "breakthrough," "holistic," "leverage," "optimize," "it's important to note," "in today's fast-paced world," "deep dive," "cutting-edge," "ever-evolving," and the easily-missed "simply."

The taste call (is this distinctive and intentional for this brand) sits with Design and is final. The mechanical tells above are checkable by anyone, including Claude Code and the audit agent.

---

## Accessibility (built in, every page)

WCAG 2.2 AA. One H1 per page, ordered headings, alt text on meaningful images and empty alt on decorative ones, keyboard-navigable with visible focus states, labels on every form field, color never the only signal, and `prefers-reduced-motion` respected on all animation (including the scroll reveal). No accessibility overlay widgets (they raise legal risk without lowering it). Note: the current TherapySites site ships an accessibility-overlay widget; do not carry it over.
