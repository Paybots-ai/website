# Live-site token migration — 2026-06-24

The deployed `styles.css` (paybots.io) was migrated from a hand-built fork into a **consumer** of the design-system tokens. Not yet deployed — review the diff before pushing.

## What changed

**Wiring (Phase 0)** — `styles.css` now `@import`s the token layer at the top:
`/design-system/tokens/{colors,typography,spacing,a11y}.css`.

**Aliasing (Phase 1)** — the local `:root --*` block now aliases tokens instead of re-spelling hexes/px (visually identical):
`--bg,--bg-muted,--surface,--text-primary,--text-secondary,--accent-light,--accent-dark,--border-on-surface,--radius` and the whole `--space-*`/`--gutter` ladder → `var(--pb-*)`.

**Brand / a11y fixes (Phase 2)** — these change pixels (all intended):
- `--accent` `#5B4FE8` → `var(--pb-blue)` `#4F46E5` (correct primary indigo; cascades to logo, dots, links, cursor).
- `--font-display` `Plus Jakarta Sans` → `var(--pb-font-sans)` DM Sans (one heading font). Plus Jakarta also removed from the Google Fonts `<link>` in all 6 pages.
- `--text-muted` `#8A8A94` → `var(--pb-text-faint)` `#6E6E78` (passes 4.5:1).
- `--agent-green/-amber/-red` → `var(--pb-green/-amber/-red)` (AA-tuned; green/amber were darkened in the token files too).
- Console traffic-light dots `#EF4444/#F59E0B/#22C55E` → `var(--pb-red/-amber/-green)`.
- `.status-blocked` tint `rgba(239,68,68,.12)` → `var(--pb-red-bg)`.
- Form focus ring `0 0 0 3px var(--accent-light)` → `var(--pb-shadow-focus)` (2px solid indigo).

Verified: token imports resolve (HTTP 200), before/after screenshots reviewed (index + privacy), no layout breakage.

## Residual (deliberately deferred — Phase 3, needs new tokens or a design call)

Left as literals with comments; not blockers:
- **Fluid display type** — `clamp()` heroes >34px have no token (the scale tops at `--pb-text-display` 34px).
- **Off-scale type/spacing** — 15/17/18/20/22/28px sizes; 10/14/20/28px paddings; `1.6/1.65` body leading.
- **`--max-width: 1120px`** kept (token `--pb-page-max` is 1024px) — intentional width, not changed.
- **`--radius-lg: 20px`**, section rhythm `80/56px`, warm bands `--bg-warm/--bg-deep`.
- **Cosmetic alpha** — hairline borders at `.7` and soft shadows at `.04/.08` (vs solid `--pb-border` / `--pb-shadow`).
- **Blur radii**, ambient `pulse 2s` / `terminal-blink 1s` — no tokens.

Guard: wire `design-system/_adherence.oxlintrc.json` into CI to prevent regression.
