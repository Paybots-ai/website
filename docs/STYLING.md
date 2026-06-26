# Styling & design tokens

## Layers

The single stylesheet (`src/assets/css/styles.css`) is built on three layers:

1. **Design-system tokens** — `src/design-system/tokens/*.css` define the
   `--pb-*` custom properties. These are **vendored** (read-only copies) from
   the Paybots Design System project; see `src/design-system/README.md` for
   provenance and re-sync. They are the source of truth for brand color,
   type, spacing, and a11y primitives.
2. **Site aliases** — the `:root` block maps the `--pb-*` tokens onto the
   shorter `--*` names the site CSS uses (`--accent: var(--pb-blue)`,
   `--space-md: var(--pb-space-4)`, etc.). This is the migration bridge that
   lets the site consume the design system without a global find-replace.
3. **Site-local tokens** — values with no design-system equivalent, grouped
   and documented at the end of the `:root` block (see below).

## Site-local tokens — what's tokenized vs. inline

Reused or theme-significant values are named tokens in `:root`:

- `--bg-warm`, `--bg-deep` — content-band backgrounds.
- `--max-width` (1120px) — **intentional** override of `--pb-page-max` (1024px).
- `--radius-lg`, `--nav-height`, `--space-section`.
- `--surface-border`, `--shadow-surface`, `--shadow-float` — the card/panel
  surface treatment, deliberately tuned **lighter** than `--pb-shadow` /
  `--pb-elevate-float`, so kept local rather than aliased.
- `--terminal-*` — the adoption terminal's dark palette, intentionally dark
  regardless of page theme.

Deliberately left inline (single-use; a token would add indirection without a
second consumer):

- Hero/page-hero fluid type — `clamp(...)` sizes are display-only and used once each.
- One-off backdrop scrims — `rgba(245, 243, 239, α)` on the nav and demo overlay,
  each with a context-specific alpha.
- `#fff` button text.

This is the resolution of the former "Phase 3" token-migration backlog: reused
values are tokenized; single-use values stay inline on purpose.

## Adherence / drift

- The `--pb-*` tokens here must stay byte-identical to the design-system repo.
  As of the last sync they match `../paybots-design-system/tokens/`.
- Token authoring, validation, and CI adherence (`scripts/validate.mjs`) live in
  the **design-system repo**, not here — this repo is a read-only consumer. If a
  CSS-lint guard is ever wanted here, add stylelint with a "no raw hex outside
  `:root`" rule; it was judged low-value for a single stylesheet.

## History

The original migration audit (`AUDIT.md` / `RECONCILIATION.md` / `MIGRATION.md`)
from the 2026-06-24 design review was never committed to either repo and is not
recoverable. Its actionable outcome — consume the token layer, fix brand/a11y
drift, tokenize reused values — is complete and captured above.
