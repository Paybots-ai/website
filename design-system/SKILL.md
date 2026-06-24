---
name: paybots-design
description: Use this skill to generate well-branded interfaces and assets for Paybots, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping Paybots' agentic-commerce underwriting surfaces (the audit dashboard and the consumer-facing approve/reject decision pages).
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick map

- `readme.md` — full design guide: product context, content & visual foundations, iconography, manifest.
- `styles.css` — link this one file to inherit all tokens & fonts.
- `tokens/` — colors, typography, spacing/radius/shadow, fonts.
- `assets/` — `paybots-mark.svg` (bullseye), `paybots-logo.svg`, `img/` (storefront photos).
- `guidelines/*.html` — foundation specimen cards (colors, type, spacing, brand).
- `components/` — React primitives: `core/` (Button, Card, Chip, Field, Toggle) and
  `underwriting/` (VerdictBadge, StatusPill, DecisionDot).
- `ui_kits/dashboard/` — the Paybots audit dashboard (ledger + decision detail).
- `ui_kits/decision/` — the consumer-facing approve/reject result page.

## The one thing to remember

The two underwriting decisions — **approve (green) / reject (red)** —
are the spine of the brand. DM Sans + IBM Plex Mono, one confident
indigo accent, white cards floating on a warm-paper canvas with hairline borders. No
gradients, no emoji, no exclamation points, sentence case.
