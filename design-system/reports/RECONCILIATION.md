# Reconciliation Report — paybots.io live site vs. Paybots design-system tokens

**Scope:** `/Users/chrislee/Desktop/dev/website/styles.css` (the live, deployed stylesheet) reconciled against the token manifest at `/Users/chrislee/Desktop/dev/website/design-system/_ds_manifest.json` (tokens defined in `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`).
**Date:** 2026-06-24
**Findings:** 124 total — 35 tokenizable-exact, 27 drift-close, 62 off-spec-no-token.

> Note: every finding is in `styles.css`. The HTML/JS files (`index.html`, `nav.js`, `adoption-terminal.js`, `demo/`, `for-consumers/`, `for-merchants/`, `privacy/`, `terms/`) reconciled clean — all visual styling is centralized in `styles.css`, which is good news for migration.

---

## 1. Verdict

The live site is **conceptually aligned but mechanically disconnected** from the token system. It does not import any token file; instead `styles.css` opens with a parallel local variable block (lines 2–34) that re-derives the brand by hand. The encouraging signal is that **35 of 124 values (28%) are exact matches** to existing tokens — the palette ground (`#F5F3EF`, `#FFFFFF`, `#1A1A1F`, `#5C5C66`, `#E4E0D8`), the radius (`12px`), and almost the entire spacing scale (`8/12/16/24/32/48px`) were copied verbatim. So the design *intent* matches; the site is a faithful hand-build of the same system. The problems are the other 72%: **27 drift-close values (22%)** where a literal disagrees with its token — including the three things that matter most for brand identity (the primary indigo accent, the decision red/amber/green semantic spine, and the heading typeface) — and **62 off-spec values (50%)** that have no token at all, dominated by a large fluid/off-scale typography family and dozens of off-4px-grid spacing one-offs. **Adherence read: medium-low.** The site reads as on-brand to the eye but is a fork, not a consumer, of the system: it cannot inherit a token change, the primary accent is the wrong indigo, and the typography contradicts the "one heading font" rule. A token import plus a mechanical alias pass would close the gap to high adherence quickly because the foundation values already line up.

---

## 2. Drift by category

Category totals: `color: 28 · typography: 41 · spacing: 38 · radius: 4 · shadow: 6 · motion: 4 · other: 3`.

### Color (28)
- **Matches:** The neutral/surface ground is exact — `--bg`=`#F5F3EF` (`--pb-page`), `--bg-muted`=`#EBE9E4` (`--pb-surface-hover`), `--surface`=`#FFFFFF` (`--pb-surface`), `--text-primary`=`#1A1A1F` (`--pb-ink`), `--text-secondary`=`#5C5C66` (`--pb-ink-2`), `--border-on-surface`=`#E4E0D8` (`--pb-border`), `--accent-light`=`#EEEBFF` (`--pb-blue-soft`), `--accent-dark`=`#4338CA` (`--pb-brand-deep`/`--pb-link`). Terminal fills `#1A1A1F` (621) and `#F5F3EF` text (639) also land on tokens.
- **Drifts (brand-critical):** `--accent` `#5B4FE8` vs `--pb-blue` `#4F46E5` (line 10) — the primary action color is the wrong indigo and it propagates everywhere (logo, dots, links, focus). The entire **decision semantic spine is brighter than spec**: `--agent-green` `#16A34A` vs `#15803D` (13), `--agent-amber` `#D97706` vs `#B45309` (14), `--agent-red` `#DC2626` vs `#B91C1C` (15), and again as hardcoded decorative dots `#22C55E`/`#F59E0B`/`#EF4444` (299–301) and a raw-rgba red tint `rgba(239,68,68,.12)` (354) instead of `--pb-red-bg`. `--text-muted` `#8A8A94` (9) is lighter than `--pb-ink-faint` `#6E6E78` and likely fails 4.5:1 on white — the token was deliberately darkened for contrast, so this is a real a11y regression. Translucent surfaces are built from tokenized base colors at raw alpha (`rgba(245,243,239,.92)` nav 90, `.55` overlay 837; border `rgba(228,224,216,.7)` 59/796).
- **Off-spec (no token):** `--bg-warm` `#EEEBE5` (4) and `--bg-deep` `#E8E5DE` (5) are warm-paper surface bands with no equivalent surface token. Dark-terminal colors `#9CA3AF` (643, cool gray, ramp is warm), `#86EFAC` (647, light-green-on-dark) have no token — a genuine dark-context gap.

### Typography (41) — the largest and weakest category
- **Matches:** Eyebrow stack is solid — `11px` (`--pb-text-eyebrow`, lines 221/288/371/440/492…), `0.06em` tracking (`--pb-tracking-eyebrow`, 223/494), weight `500` (`--pb-weight-medium`, 222/537). Static sizes that hit the scale: `14px` (`--pb-text-body`), `13px` (`--pb-text-sm`), `12px` (`--pb-text-xs`), `16px`/`24px` (`--pb-text-h3`/`-h1`), leading `1.2` (`--pb-leading-tight`).
- **Drifts:** `--font-display` `'Plus Jakarta Sans'` (33) **directly contradicts the system** — the brand uses ONE heading font (DM Sans, `--pb-font-display`). `--font-sans` (32) and `--font-mono` (34) keep the right primary face but drop fallbacks (`system-ui`, `SF Mono`/`Menlo`). Body leading `1.6`/`1.65`/`1.45` recur widely (47/469/335 + many) above `--pb-leading-normal` `1.5`.
- **Off-spec (no token) — two clusters:**
  1. **Fluid/large display:** `clamp(44px,6vw,60px)` (250), `clamp(32px,4.5vw,48px)` (257), `clamp(28px,4vw,40px)` (451), `clamp(32px,4.5vw,44px)` (690) all exceed the scale top (`--pb-text-display` 34px). The static scale has **no fluid tokens and no token above 34px**.
  2. **Off-scale static sizes:** `15px`, `17px`, `18px`, `20px`, `22px`, `28px`, `32px`, `10px` recur across cards, leads, and legal pages — a whole intermediate set the 8-step scale doesn't cover.
  - Plus negative display tracking (`-0.02em`/`-0.03em`, 252/259/453/505/599/693) and tight display leading (`1.05`/`1.1`, 251/258/692) — no negative-tracking or display-tight-leading tokens exist.

### Spacing (38)
- **Matches:** The local `--space-*` ladder is the token scale copied verbatim — `8/12/16/24/32/48px` all map cleanly to `--pb-space-2…7` (lines 22–27, 30, 31), and the desktop `--gutter` `32px`=`--pb-space-6`. Several mobile overrides (1143/1144/1145) also land on tokens.
- **Drifts:** `--max-width` `1120px` vs `--pb-page-max` `1024px` (20) — the page is 96px wider than spec. The gutter (`32px`/`--pb-space-6`) is itself off the *semantic* `--pb-page-gutter` (`24px`/`--pb-space-5`).
- **Off-spec (no token) — pervasive:** A long tail of off-4px-grid values: `10px` (219/144/159/527/1020), `14px` (122/1005/885), `28px` (122/987), `20px` (144/1012/1141), `6px` (880/1021), `2px` (630), `44px` (976), `56px`/`80px` section rhythm (28/29/142). Plus content-measure max-widths (`520/560/640/720/420/440/480px`, e.g. 212) and component dimensions (`--nav-height` 64px line 19, terminal `min-height` 300/260px) that are legitimately not spacing-rhythm but have no home in the token set.

### Radius (4)
- **Match:** `--radius` `12px` = `--pb-radius` (17).
- **Drift:** pill `999px` vs `--pb-radius-pill` `9999px` (123, recurs 230/1053) — visually identical at these sizes but a literal mismatch.
- **Off-spec:** `--radius-lg` `20px` (18) exceeds the scale top (`--pb-radius` 12px) — used on `.surface`, `.agent-console`, demo player; and `6px` chip radius (343) sits below the floor (`--pb-radius-sm` 8px).

### Shadow (6)
- **Drifts:** The hairline shadow `0 2px 16px rgba(26,26,31,.04)` (61/798) mirrors layer-one of `--pb-shadow` but at `.04` (token `.06`) and drops the second layer. Card-hover `0 8px 28px …,.08` (557/591) matches `--pb-elevate-float` geometry but at `.08` (token `.10`) and drops layer two. Focus ring `0 0 0 3px var(--accent-light)` (898) is 3px tinted vs the system 2px solid `--pb-shadow-focus`/`--pb-ring` — **width and color both wrong**.
- **Off-spec:** Bespoke hover/float shadows `0 6px 20px …,.12` (140) and `0 8px 40px …,.12` (852) — right ink color, geometry not in the system's two-level elevation model.

### Motion (4) — all off-spec
The system is opinionated: one easing (`--pb-ease` cubic-bezier(0.2,0,0,1)), two durations (`--pb-dur` 0.15s, `--pb-dur-fast` 0.12s), "no bounce." The site uses untokenized `0.2s` legs with **no `--pb-ease`** (127/160), and long ambient loops `pulse 2s` (238) and `terminal-blink 1s` (658) that the sub-second token set doesn't model.

### Other (3) — all off-spec
Backdrop/element blur radii `blur(16px)` (91), `blur(10px)` (838), `blur(6px)` (813). **No blur token exists** in the system.

---

## 3. Literal → token mapping table (safe, mechanical migration)

These are the 35 tokenizable-exact values. They can be replaced with `var(--…)` with **zero visual change** (case-insensitive hex matches noted). The cleanest approach is to redefine the local vars as token aliases (one-line change each) rather than touching every call site — see Migration plan §6, Phase 2. Where the manifest exposes a *semantic* alias, prefer it (right-most column).

| styles.css | Local var / property | Literal | Map to (raw token) | Prefer semantic alias |
|---|---|---|---|---|
| 2 | `--bg` | `#F5F3EF` | `--pb-page` | `--pb-bg` |
| 3 | `--bg-muted` | `#EBE9E4` | `--pb-surface-hover` | — |
| 6 | `--surface` | `#FFFFFF` | `--pb-surface` | `--pb-surface-card` |
| 7 | `--text-primary` | `#1A1A1F` | `--pb-ink` | `--pb-text` |
| 8 | `--text-secondary` | `#5C5C66` | `--pb-ink-2` | `--pb-text-muted` |
| 11 | `--accent-light` | `#EEEBFF` | `--pb-blue-soft` | `--pb-accent-soft` |
| 12 | `--accent-dark` | `#4338CA` | `--pb-brand-deep` | `--pb-link` / `--pb-primary-hover` |
| 16 | `--border-on-surface` | `#E4E0D8` | `--pb-border` | — |
| 17 | `--radius` | `12px` | `--pb-radius` | — |
| 19 | `--nav-height` | `64px` | `--pb-space-8` (value only; layout constant) | — |
| 21 | `--gutter` | `32px` | `--pb-space-6` | (`--pb-page-gutter` is 24px — see drift) |
| 22 | `--space-xs` | `8px` | `--pb-space-2` | `--pb-gap-inline` |
| 23 | `--space-sm` | `12px` | `--pb-space-3` | `--pb-gap-stack` |
| 24 | `--space-md` | `16px` | `--pb-space-4` | `--pb-gap-block` |
| 25 | `--space-lg` | `24px` | `--pb-space-5` | `--pb-gap-section` |
| 26 | `--space-xl` | `32px` | `--pb-space-6` | — |
| 27 | `--space-2xl` | `48px` | `--pb-space-7` | — |
| 30 | `--space-intro` | `48px` | `--pb-space-7` | — |
| 31 | `--space-stack` | `24px` | `--pb-space-5` | `--pb-gap-section` |
| 134, 1058 | button text `color` | `#fff` | `--pb-surface` | — |
| 145, 155, 742 | `font-size` | `14px` | `--pb-text-body` | — |
| 221, 288, 371, 440, 492, 340 | `font-size` | `11px` | `--pb-text-eyebrow` | — |
| 222, 537 | `font-weight` | `500` | `--pb-weight-medium` | — |
| 223, 494 | `letter-spacing` | `0.06em` | `--pb-tracking-eyebrow` | — |
| 320, 623, 877, 906, 772, 993, 1120 | `font-size` | `13px` | `--pb-text-sm` | — |
| 452, 504 | `line-height` | `1.2` | `--pb-leading-tight` | — |
| 502, 858 | `font-size` | `24px` | `--pb-text-h1` | — |
| 510, 947, 972, 1009, 1042 | `font-size` | `16px` | `--pb-text-h3` | — |
| 536, 1149 | `font-size` | `12px` | `--pb-text-xs` | — |
| 621 | terminal `background` | `#1A1A1F` | `--pb-ink` | — |
| 639 | terminal text `color` | `#F5F3EF` | `--pb-page` | — |
| 1143 | `--space-section-compact` (mobile) | `48px` | `--pb-space-7` | — |
| 1144 | `--space-intro` (mobile) | `32px` | `--pb-space-6` | — |
| 1145 | `--space-2xl` (mobile) | `32px` | `--pb-space-6` | — |

---

## 4. True drift (drift-close — bugs / brand inconsistencies)

These 27 disagree with an existing token. They are not safe to auto-alias — adopting the token **changes the rendered output** — so each is a decision: fix to spec (recommended for brand/a11y) or update the token if the live value is intentionally newer. Listed worst-first.

| file:line | Property | Live value | Should be (token) | Delta / impact |
|---|---|---|---|---|
| styles.css:10 | `--accent` | `#5B4FE8` | `--pb-blue` `#4F46E5` | **Brand-critical.** Wrong primary indigo; bluer/lighter. Cascades to logo, dots, links, focus. |
| styles.css:33 | `--font-display` | `'Plus Jakarta Sans'` | `--pb-font-display` (`DM Sans`) | **Brand-critical.** Introduces a second heading face; system mandates one (DM Sans). |
| styles.css:9 | `--text-muted` | `#8A8A94` | `--pb-ink-faint` `#6E6E78` | **A11y.** Lighter than the contrast-tuned token; likely fails 4.5:1 on white. |
| styles.css:13 | `--agent-green` | `#16A34A` | `--pb-green` `#15803D` | Decision-approve brighter than the contrast-tuned semantic green. |
| styles.css:14 | `--agent-amber` | `#D97706` | `--pb-amber` `#B45309` | Working/status amber brighter than spec. |
| styles.css:15 | `--agent-red` | `#DC2626` | `--pb-red` `#B91C1C` | Decision-reject brighter than spec (token tuned for white-on-fill). |
| styles.css:299 | `.dot background` | `#EF4444` | `--pb-red` `#B91C1C` | Hardcoded bright red dot, outside the color system. |
| styles.css:300 | `.dot background` | `#F59E0B` | `--pb-amber` `#B45309` | Hardcoded bright amber dot. |
| styles.css:301 | `.dot background` | `#22C55E` | `--pb-green` `#15803D` | Hardcoded bright green dot. |
| styles.css:354 | `background` | `rgba(239,68,68,.12)` | `--pb-red-bg` `#FBEAEA` | Blocked tint hand-mixed from raw red instead of the tint token. |
| styles.css:898 | focus `box-shadow` | `0 0 0 3px var(--accent-light)` | `--pb-shadow-focus` `0 0 0 2px var(--pb-blue)` | **Focus ring width AND color both drift** (3px tint vs 2px solid indigo) — accessibility/consistency. |
| styles.css:20 | `--max-width` | `1120px` | `--pb-page-max` `1024px` | Page is 96px wider than spec. |
| styles.css:61, 798 | `box-shadow` | `0 2px 16px rgba(26,26,31,.04)` | `--pb-shadow` (`.06` + 2nd layer) | Lower alpha, single layer — flatter than the default container shadow. |
| styles.css:557, 591 | hover `box-shadow` | `0 8px 28px rgba(26,26,31,.08)` | `--pb-elevate-float` (`.10` + 2nd layer) | Same geometry, lower alpha, drops 2nd layer. |
| styles.css:59, 796 | `border` | `1px solid rgba(228,224,216,.7)` | `--pb-border` `#E4E0D8` | Border token applied at 0.7 alpha as raw rgba instead of the solid token. |
| styles.css:90 | nav `background` | `rgba(245,243,239,.92)` | base `--pb-page`; no translucent token | Tokenized base, untokenized alpha. |
| styles.css:837 | overlay `background` | `rgba(245,243,239,.55)` | base `--pb-page`; no translucent token | Tokenized base, untokenized alpha. |
| styles.css:32 | `--font-sans` | `'DM Sans',-apple-system,sans-serif` | `--pb-font-sans` (adds `system-ui`) | Fallback stack drops `system-ui`. |
| styles.css:34 | `--font-mono` | `'IBM Plex Mono',ui-monospace,monospace` | `--pb-font-mono` (adds `SF Mono`,`Menlo`) | Fallback stack drops `SF Mono`/`Menlo`. |
| styles.css:47, 569, 608, 702, 743 | `line-height` | `1.6` | `--pb-leading-normal` `1.5` (no exact) | Body leading between tokens; recurs on many body rules. |
| styles.css:469, 511, 624, 948, 973, 1010, 1046 | `line-height` | `1.65` | `--pb-leading-normal` `1.5` (no exact) | Looser body leading family; no exact token. |
| styles.css:335 | `line-height` | `1.45` | between `--pb-leading-snug` `1.35` and `1.5` | No exact token. |
| styles.css:123, 230, 1053 | `border-radius` | `999px` | `--pb-radius-pill` `9999px` | Visually identical; literal mismatch only. |
| styles.css:127 | `transition` | `background .2s, transform .15s, box-shadow .2s` | `--pb-dur` `0.15s` + `--pb-ease` | `.2s` legs untokenized; no easing token applied. |

> The shadow, border-alpha, and translucent-background drifts share one root cause: the live site **hand-mixes alpha** instead of using solid tokens. If translucent surfaces are intended, that's a system gap (§5), not just a bug.

---

## 5. System gaps (off-spec-no-token — propose new tokens)

62 values have no token. Many are legitimate one-offs (content max-widths, fixed component dimensions) that should *not* be tokenized. But several cluster into recurring patterns the token set is genuinely missing. Proposed additions, by impact:

### High value — recurring, would eliminate many findings

1. **Fluid display type scale.** The static scale stops at `--pb-text-display` 34px, but the live hero/section/CTA headings are `clamp()` ranges up to 60px (250, 257, 451, 690). Propose:
   - `--pb-text-hero: clamp(44px, 6vw, 60px)` (250)
   - `--pb-text-page-hero: clamp(32px, 4.5vw, 48px)` (257)
   - `--pb-text-section: clamp(28px, 4vw, 40px)` (451)
   - `--pb-text-cta: clamp(32px, 4.5vw, 44px)` (690)
   - Paired display leading `--pb-leading-display: 1.05` (251) and tracking `--pb-tracking-display: -0.02em` / `-0.03em` (252 + family). This single family resolves ~10 off-spec typography findings.

2. **Intermediate static type sizes.** The 8-step scale skips `15/17/18/20/22/28/32px`, which recur across cards, leads, and legal pages (124, 468, 265, 596, 603, 930, 1077…). Either add `--pb-text-h1-lg`/`--pb-text-body-lg` style intermediates, or formally rule them out and snap call sites to the nearest token. Decide deliberately — this is 15+ findings.

3. **Looser body leading.** `1.6`/`1.65` recur on nearly every paragraph (§4). If that's the intended reading rhythm, add `--pb-leading-relaxed: 1.65`; otherwise snap to `--pb-leading-normal` 1.5.

4. **Translucent surface + blur tokens.** Nav/overlay scrims (90, 837) and blur radii (91, 838, 813) have no tokens. Propose `--pb-surface-translucent: rgba(245,243,239,.92)`, `--pb-scrim: rgba(245,243,239,.55)`, and a blur step `--pb-blur: 16px`. Pairs naturally with the alpha-border drift in §4.

### Medium value — fills obvious scale gaps

5. **Section vertical rhythm.** `80px` (28) and `56px` (29/142) drive section spacing but sit above `--pb-space-8` 64px. Propose `--pb-space-9: 64px`→`80px` extension or a semantic `--pb-section-y: 80px` / `--pb-section-y-compact: 56px`.

6. **Large radius.** `--radius-lg` 20px (18) is used on real surfaces (`.surface`, `.agent-console`, demo player) but exceeds `--pb-radius` 12px. Propose `--pb-radius-lg: 20px` (or align surfaces to 12px if the spec is firm — the spacing.css comment says radius "tops out at 12px," so this is a deliberate-decision point).

7. **Layout/component constants.** `--nav-height` 64px (19), page max `1120px` (20 — currently a drift from 1024), terminal `min-height` 300/260px (619/1149). These are component dimensions; propose a small `--pb-nav-height` / reconcile `--pb-page-max` rather than leaving them inline.

8. **Ambient motion + extra durations.** `pulse 2s` (238) and `terminal-blink 1s` (658) loops, plus `0.2s` transition legs (127/160/893/1059), aren't covered by `--pb-dur` 0.15s / `--pb-dur-fast` 0.12s. Propose `--pb-dur-slow: 0.2s` and an ambient-loop convention; always pair transitions with `--pb-ease`.

### Acknowledged gaps — dark context

9. **Dark-surface text colors.** The terminal block uses `#9CA3AF` (643, cool gray) and `#86EFAC` (647, light-green-on-dark) — the warm light-mode ramp has no dark-context equivalents. If the dark terminal is a permanent surface, it needs its own token subset; otherwise document it as an intentional exception.

### Probably leave inline (do not over-tokenize)
Content measures (`520/560/640/720/420/440/480px`, e.g. 212), decorative glyph dimensions (8px dots 234/651, 6px bullet 1021, 28px step circle 987), and one-off paddings like `14px 28px` (122) are local layout, not system rhythm. Snap to the nearest `--pb-space-*` where it's truly grid spacing; otherwise leave as documented literals.

---

## 6. Migration plan

> **Production warning:** `styles.css` is the deployed stylesheet for **paybots.io** (live, customer-facing). Every change here is production-facing. Tokenizable-exact swaps are visually inert and safe; drift-close swaps **change pixels** and need visual review. Phase the rollout, keep each phase a separate small PR, and diff a screenshot before/after.

**Phase 0 — Wire up the tokens (no visual change).**
Import the token layer ahead of `styles.css` so `var(--pb-*)` resolves. The manifest's `globalCssPaths` order is the source of truth: `fonts.css → colors.css → typography.css → spacing.css → a11y.css → styles.css`. Add to the `<head>` of every page (`index.html`, `for-consumers/`, `for-merchants/`, `privacy/`, `terms/`, `demo/`) before the existing `styles.css` link, e.g. `<link rel="stylesheet" href="/design-system/tokens/colors.css">` (+ the others), or prepend `@import` rules to `styles.css`. Deploy this alone first and confirm zero visual diff — it only *defines* tokens, nothing consumes them yet.

**Phase 1 — Alias the local vars to tokens (mechanical, low-risk).**
This is the highest-leverage step: the local `--*` block (lines 2–34) is consumed everywhere via `var(--bg)` etc., so redefining ~20 of those lines as token aliases re-points the whole stylesheet in one edit, no call-site churn. Replace the **tokenizable-exact** rows from §3:
```css
--bg: var(--pb-bg);
--bg-muted: var(--pb-surface-hover);
--surface: var(--pb-surface-card);
--text-primary: var(--pb-text);
--text-secondary: var(--pb-text-muted);
--accent-light: var(--pb-accent-soft);
--accent-dark: var(--pb-link);
--border-on-surface: var(--pb-border);
--radius: var(--pb-radius);
--space-xs: var(--pb-space-2);  /* …through --space-2xl: var(--pb-space-7) */
Visually inert (exact matches), but now a token change propagates to the live site. Also snap the scattered literal matches (`#fff`→`var(--pb-surface)`, `11px`→`var(--pb-text-eyebrow)`, `13px`→`var(--pb-text-sm)`, etc.) — these can follow opportunistically since they're also inert.

**Phase 2 — Resolve true drift (visual review required).**
Take the §4 table as a decision log. For each, choose **fix-to-spec** (recommended for the brand/a11y items) or **update-the-token** (if the live value is the newer intent). Start with the brand-critical and a11y items — they're the point of having a system:
- `--accent: var(--pb-blue)` (fixes the primary indigo site-wide).
- `--font-display: var(--pb-font-display)` (removes Plus Jakarta Sans; restores one-heading-font rule).
- `--text-muted: var(--pb-ink-faint)` (restores contrast).
- `--agent-green/-amber/-red` → `var(--pb-green/-amber/-red)` and replace the hardcoded `#EF4444/#F59E0B/#22C55E` dots (299–301) + the `rgba(239,68,68,.12)` tint (354) with `--pb-red-bg`.
- Focus ring (898) → `var(--pb-shadow-focus)`.
- Shadows (61/798, 557/591), pill radius (123/230/1053), `--font-sans`/`--font-mono` fallbacks, `--max-width` → `var(--pb-page-max)`.
Each is a 1–2 line change; group by visual area (color pass, type pass, elevation pass) so each PR is reviewable against a screenshot.

**Phase 3 — Close system gaps (token additions, then adopt).**
Land the §5 proposals that are clearly recurring (fluid display scale, looser body leading, translucent/blur, section rhythm, large radius) in the token files first, then replace the live literals with the new `var(--pb-*)`. This is where the remaining off-spec count drops. Treat the intermediate-static-size and dark-terminal questions as explicit design decisions, not silent additions.

**Phase 4 — Guard against regression.**
An adherence linter config already exists at `/Users/chrislee/Desktop/dev/website/design-system/_adherence.oxlintrc.json`. Wire it into CI against `styles.css` so new raw hex / off-scale values fail the build, locking in the migration. Re-run this reconciliation after Phase 2 to confirm the tokenizable-exact + drift counts collapse toward zero.

**Suggested sequencing:** Phase 0 (1 PR, deploy, verify no diff) → Phase 1 (1 PR, deploy, verify no diff) → Phase 2 (2–3 small PRs by visual area, each screenshot-reviewed) → Phase 3 (token-add PRs + adoption) → Phase 4 (CI guard). Phases 0–1 alone move the site from "fork of the system" to "consumer of the system" with zero visual risk.
