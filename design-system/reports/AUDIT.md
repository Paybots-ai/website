# Paybots Design System — Self-Adherence Audit

**Date:** 2026-06-24 · **Scope:** `tokens/`, `guidelines/`, `components/`, `templates/`, `ui_kits/` · **Findings:** 558 (12 high · 168 medium · 378 low) across 48 files

---

## 1. Verdict

**The token files are the source of truth, and they are well-structured — but the design system does not consistently consume its own tokens.** The audit found **558 violations across 48 files**, dominated by hardcoded values that duplicate or drift from tokens that already exist.

The headline numbers:

- **Spacing (251 findings, 45%)** is the single largest problem. Roughly half are "the literal equals a token but is hardcoded" (e.g. `padding:24px` instead of `var(--pb-space-5)`); the other half is genuine **off-scale drift** — values like 10px, 14px, 18px, 20px, 22px, 28px that fall *between* the 4px-scale steps and match no token at all.
- **Typography (189 findings, 34%)** is the same story: hardcoded sizes/weights that equal tokens, plus off-scale type (9px, 10px, 15px, 17px, 18px, 12.5px, 11.5px) and wrong leading values (1.4, 1.45, 1.55, 1.6).
- **Color (76)** is mostly raw hexes that exactly equal tokens — concentrated in the `templates/*.dc.html` files, which barely reference tokens at all.
- **The 12 high-severity findings are the real story** (Section 4): a token spec whose own contrast claims are false, an off-brand indigo that fails WCAG, a missing/undefined elevation token, an off-brand tan that contrasts at 1.99:1, a focus ring missing from a dialog control, and the decision palette being used for non-decisions.

**Health rating: Fair.** The foundation (tokens) is sound and internally near-consistent. The *consumption* layer — especially the demo templates and the underwriting components — has drifted far enough that the system no longer demonstrates its own rules. The most expensive items are few and fixable; the long tail is mechanical.

---

## 2. Token files

The token layer (`tokens/colors.css`) is **largely self-consistent**, with the following exceptions. Note the *most serious* token-file problems are accessibility claims, covered in Section 4.

| file:line | category | value | expected | issue |
|---|---|---|---|---|
| `tokens/colors.css:18` | a11y | `--pb-ink-faint: #6E6E78` "passes 4.5:1 on white" | darken, or name the real surface | The 4.5:1 claim is scoped to **white**, but the canvas is `--pb-page` (#F5F3EF). On paper it is only 4.55:1, and on `--pb-surface-muted`/`--pb-surface-hover` wells it drops **below** 4.5:1. The "on white" framing hides that the real ground is never white. |
| `tokens/colors.css:42` | semantic | `--pb-text` / `--pb-text-muted` / `--pb-text-faint` vs `--pb-text-display`/`-h1`/`-body`… | disambiguate the namespace | `--pb-text-*` means **two unrelated things**: a text *color* in colors.css and a font *size* in typography.css. `var(--pb-text-…)` is ambiguous by name; an author reaching for a faint size could grab the faint color. |
| `tokens/colors.css:10` | color | `--pb-brand-deep`, `--pb-blue-hover`, `--pb-blue-link` all `#4338CA` | alias the latter two to `var(--pb-brand-deep)` | Three tokens hold the **identical hex** without being aliased, so changing the deep indigo means editing three places or they silently diverge. The `--pb-blue-link` "≈ 7:1" comment is also loose (actual 7.90:1). |

**Verified-clean checks (recorded so the audit shows they passed):**
- `colors.css:33` — the **amber-vs-decision separation is self-consistent**. Amber is exposed only as `--pb-status-working`, the doc comment bars it from the decision scale, and `--pb-decision-*` maps only to green/red. Consuming code (`DECISION_COLOR`, `StatusPill`, `VerdictBadge`) honors this. **Not a defect.**

> The two false-contrast claims on `colors.css:29` (`--pb-green`) and `colors.css:33` (`--pb-amber`) are **high severity** and appear in Section 4, because they are real rendered failures, not just token-file hygiene.

---

## 3. Findings by severity

### 3.1 High (12)

| file:line | category | value | expected | issue |
|---|---|---|---|---|
| `tokens/colors.css:29` | a11y | `--pb-green: #15803D` "passes as text on tint" | `~#157038` or darker | False claim. `#15803D` on `--pb-green-bg` (#E7F5EC) = **4.46:1**, below 4.5:1. StatusPill "Approved" and VerdictBadge render green text on green-bg → **real failure**. White-on-fill (5.02:1) passes; only the on-tint half is wrong. |
| `tokens/colors.css:33` | a11y | `--pb-amber: #B45309` on `--pb-amber-bg: #FBF1E1` | `~#A14908` or darker | `--pb-amber` on `--pb-amber-bg` = **4.49:1**, just under 4.5:1. StatusPill "Working" renders amber text on amber-bg → fails normal-text contrast. |
| `components/commerce/PaymentCard.jsx:56` | semantic | amber palette on the "Frozen"/revoked badge | reject family or neutral disabled | `colors.css:33/60` reserves amber for **working/pending only — NOT a decision**. Frozen/revoked is a *terminal* state, so the reserved amber/working palette is misused and reads as decision-adjacent. |
| `components/feedback/Dialog.jsx:43` | a11y | close button `border:0, background:none` with no focus style | `boxShadow: var(--pb-shadow-focus)` on `:focus-visible` | The spec mandates a uniform 2px focus ring on every interactive control. Removing the default border leaves keyboard users with **no visible focus indicator**. |
| `components/underwriting/TrustBadge.jsx:101` | shadow | `boxShadow: var(--pb-elevate-raised)` | `var(--pb-elevate-flat)` | **References a token that does not exist.** Only `--pb-elevate-flat`/`--pb-elevate-float` are defined, so the `var()` resolves to nothing and the shield silently renders with no shadow. The shield is a bordered, non-floating container → should be flat. |
| `templates/agent-checkout/AgentCheckout.dc.html:30` | color | user chat bubble `background:#6366F1` | `var(--pb-primary)` #4F46E5 | Off-brand indigo **with no token**. Brand primary is #4F46E5. Recurs on line 57 (Send button). |
| `templates/agent-checkout/AgentCheckout.dc.html:30` | a11y | `#fff` on `#6366F1` | `var(--pb-primary)` (white-on-fill 6.29:1) | White on #6366F1 = **4.47:1**, below 4.5:1. On-brand #4F46E5 gives 6.29:1. Same failure on the Send button (line 57). |
| `templates/agent-checkout/AgentCheckout.dc.html:57` | color | Send button `background:#6366F1` | `var(--pb-primary)` #4F46E5 | Primary action uses the same off-brand, off-token, sub-AA indigo. |
| `templates/decision-result/DecisionResult.dc.html:59` | color | `color:#b9a987` photo-placeholder label | on-brand ink token (≥ a darker ink) | Off-brand tan, no token. On the #F0EEE9 well it contrasts at **1.99:1**, far below 4.5:1. (Even `--pb-ink-faint` is only ~4.35:1 here, so a darker ink is required.) |
| `ui_kits/decision/ResultPage.jsx:173` | color | `color:#b9a987` | `var(--pb-ink-2)`/`--pb-ink-faint` | Off-brand tan, not in the palette. |
| `ui_kits/decision/ResultPage.jsx:173` | a11y | `#b9a987` on `var(--pb-surface-muted)` (#F0EEE9) | `--pb-ink-2` (#5C5C66) ≈ 5.7:1 | Measured **1.99:1** on the muted well for 10px "photo" text — confirmed failure. |
| `ui_kits/dashboard/DecisionDetail.jsx:59` | radius | `borderRadius: 16` chat bubble | `var(--pb-radius)` (12px) | 16px is **not a radius token**. The scale is sm 8 / 12 / pill 9999 and tops out at 12px for cards. Real drift off the scale. |

### 3.2 Medium (168)

168 medium findings exist; the representative and highest-value ones are tabled below. The remainder are off-scale spacing/type literals of the same kinds shown here (full list in the source data).

**Semantic / decision-palette misuse (highest-value mediums — also see Section 4):**

| file:line | category | value | expected | issue |
|---|---|---|---|---|
| `components/navigation/Tabs.jsx:54` | semantic | count badge `background: var(--pb-decision-reject)` | non-decision count color | A REJECT decision token used for a generic notification count. |
| `components/underwriting/TrustBadge.jsx:124` | semantic | "verified" badge fully painted in `--pb-decision-approve*` | brand/neutral surface tokens | A permanent marketing badge ("Every purchase verified") co-opts the green **decision** scale for non-decision UI. |
| `ui_kits/dashboard/AppBar.jsx:34` | semantic | `decision={online ? "approve" : "offline"}` | a system-status semantic | Backend connectivity rendered through `--pb-decision-approve` (green) conflates **system status** with a decision verdict. |
| `guidelines/variants-decision-scale.html:36` | semantic | "Blue approve" `#1a73e8` noted "on-brand" | `var(--pb-blue)` #4F46E5; drop the claim | #1a73e8 is **Google blue**, not brand indigo. The "on-brand" label is factually wrong. |
| `guidelines/variants-decision-scale.html:49` | a11y | Solid treatment hardcodes `#fff` on arbitrary mood colors | guard white-on-fill ≥4.5:1 | With Soft mood + Solid treatment, white-on-fill = **3.39:1 / 3.67:1** (conditional failure; no contrast guard). |
| `components/feedback/feedback.card.html:35` | typography | dialog `<h2>` `fontWeight:500` | `var(--pb-weight-semibold)` (600) | Heading uses the **label/button** weight, not the heading weight. (Same wrong-weight-on-heading pattern: `Dialog.jsx:42`, `DecisionResult.dc.html:20`, `Ledger.jsx:26`, `decision/ResultPage.jsx:87`, `UnderwritingLedger.dc.html:38`.) |

**Border / elevation token mismatches:**

| file:line | category | value | expected | issue |
|---|---|---|---|---|
| `components/underwriting/StatusPill.jsx:8–10` | color | borders use saturated `--pb-green`/`--pb-red`/`--pb-amber` | `--pb-*-border` tokens | The component doc says "soft bg + saturated text + **matching border**", but it uses the dark text inks as the 1px border → harsher outline than designed. |
| `components/commerce/PaymentCard.jsx:56` | color | `border:1px solid var(--pb-amber)` | `var(--pb-amber-border)` | Dark text-amber used as border instead of the paired border token. |
| `templates/underwriting-ledger/UnderwritingLedger.dc.html:59,67` | color | pill borders `#15803D` / `#B91C1C` | `--pb-green-border` / `--pb-red-border` | Saturated text hexes used as pill borders instead of the soft border tokens. |
| `guidelines/gallery.html:14` | shadow | `box-shadow: var(--pb-shadow)` on a flat bordered tile | `var(--pb-elevate-flat)` (none) | Spec: default container is flat (1px border, no shadow); shadows are for things that float. |
| `guidelines/radius-shadow.html:13` | semantic | float demo uses `var(--pb-shadow)` (back-compat alias) | `var(--pb-elevate-float)` | The "float" specimen should use the real float token. |
| `components/feedback/feedback.card.html:33` | shadow | floating dialog uses `var(--pb-shadow)` alias | `var(--pb-elevate-float)` | A modal that floats should use the float token, not the level-1 alias. |

**Off-token / off-brand color & motion:**

| file:line | category | value | expected | issue |
|---|---|---|---|---|
| `components/feedback/Dialog.jsx:18` | color | scrim `rgba(32,33,36,0.5)` (#202124) | brand ink `rgb(26,26,31)` based | Cool **Google grey** scrim, not the Paybots ink every shadow/elevation token is built from. |
| `guidelines/color-brand.html:11` · `color-status.html:11` | color | `border:1px solid rgba(0,0,0,.06)` | `var(--pb-border)` | Cool pure-black rgba hairline; the brand hairline is the warm `#E4E0D8`. |
| `components/underwriting/DecisionDot.jsx:26` · `guidelines/brand-status-atoms.html:11` | motion | `ease-in-out` | `var(--pb-ease)` cubic-bezier(0.2,0,0,1) | Off-token easing; spec says "short, eased, no bounce." |
| `components/commerce/PaymentCard.jsx:39` | radius | `borderRadius: 5` | `var(--pb-radius-sm)` (8px) | 5px is not a radius token. |

**Representative off-scale spacing & type drift (a large share of the 168):** `Button.jsx:23` (`padding:0 28px`, `fontSize:15`), `Field.jsx:10` (`fontSize:15`), `Chip.jsx:9–10` (`minHeight:28`, `padding:6px 14px`), `Card.jsx:28` (`14px 16px`), `Toast.jsx:22,40` (`14px`, `lineHeight:1.45`), `Dialog.jsx:30,34,46` (20px header/footer/body padding off-scale), `gallery.html:9` (`padding:28px`), `spacing-scale.html:9` (`gap:18px` — in the canonical scale demo), and the `.dc.html` templates throughout (15px/18px/12.5px type, 18px/20px/22px/28px spacing).

### 3.3 Low (378)

378 low findings. These are **overwhelmingly mechanical**: a raw px/number that *exactly equals* a token but bypasses the `var()`. They cluster as:

- **"Equals a token but hardcoded" spacing** — e.g. `padding:24px` → `var(--pb-space-5)`, `gap:8px` → `var(--pb-space-2)`, `gap:12px` → `var(--pb-space-3)`, `height:64px` → `var(--pb-space-8)`. Present in nearly every `guidelines/*.html`, every `*.card.html`, and most components/ui_kits.
- **"Equals a token but hardcoded" type/weight** — `font-size:11px` → `var(--pb-text-eyebrow)` (the single most common finding in the whole audit), `font-size:13px` → `var(--pb-text-sm)`, `font-size:14px` → `var(--pb-text-body)`, `font-weight:600` → `var(--pb-weight-semibold)`, `line-height:1.5` → `var(--pb-leading-normal)`.
- **Raw `#fff` for on-fill text** — `Button.jsx:29,44`, `VerdictBadge.jsx:23`, `Toast.jsx:33`, `Tabs.jsx:54`, `PaymentCard.jsx:41`, `TrustBadge.jsx` (lines 12/62/63/102/125), and the `.dc.html` templates. Equals `--pb-surface` (#ffffff) by value; note **no dedicated on-fill/inverse-text token exists** (see Recommendation 6).
- **Raw-ramp instead of semantic alias** — `color: var(--pb-ink-faint)` should be `var(--pb-text-faint)`; `var(--pb-ink-2)` should be `var(--pb-text-muted)`; `var(--pb-surface-muted)` should be `var(--pb-surface-inset)`. Seen in `PaymentCard.jsx:53`, `Dialog.jsx:43`, `Toast.jsx:43`, `theme.js:9,20,22`, `feedback.card.html:36`.
- **Hex literals equal to color tokens** — saturating the `.dc.html` templates (`#1A1A1F`=`--pb-ink`, `#5C5C66`=`--pb-ink-2`, `#E4E0D8`=`--pb-border`, `#F0EEE9`=`--pb-surface-muted`, font stacks = `--pb-font-sans`/`--pb-font-mono`).

**Files with zero findings (clean):** `guidelines/tweaks-panel.jsx`, `components/core/Toggle.jsx`.

---

## 4. Semantic & accessibility (highest-value section)

These are the findings that change behavior or break for real users, grouped by theme.

### 4.1 Contrast failures (verified, not theoretical)

| file:line | pair | measured | threshold | note |
|---|---|---|---|---|
| `tokens/colors.css:29` | `--pb-green` text on `--pb-green-bg` | **4.46:1** | 4.5:1 | StatusPill "Approved" + VerdictBadge render this. Token comment claims it passes — false for the on-tint case. |
| `tokens/colors.css:33` | `--pb-amber` text on `--pb-amber-bg` | **4.49:1** | 4.5:1 | StatusPill "Working" renders this. |
| `templates/agent-checkout/AgentCheckout.dc.html:30,57` | `#fff` on `#6366F1` | **4.47:1** | 4.5:1 | Off-brand bubble + Send button. On-brand `--pb-blue` would give 6.29:1. |
| `templates/decision-result/DecisionResult.dc.html:59` | `#b9a987` on `#F0EEE9` | **1.99:1** | 4.5:1 | Off-brand tan placeholder label. |
| `ui_kits/decision/ResultPage.jsx:173` | `#b9a987` on `--pb-surface-muted` | **1.99:1** | 4.5:1 | Same off-brand tan; 10px text. |
| `guidelines/variants-decision-scale.html:49` | `#fff` on Soft-mood fill | **3.39:1 / 3.67:1** | 4.5:1 | Conditional (Soft mood + Solid treatment); no contrast guard. |
| `tokens/colors.css:18` | `--pb-text-faint` on `--pb-page` / wells | 4.55:1 / **<4.5:1** | 4.5:1 | Barely passes on paper; fails on muted/hover wells. The "on white" comment hides the real ground. |

**Two root causes:** (1) the green/amber decision tokens are tuned **0.01–0.04 below** the threshold — a one-time darken fixes them globally; (2) off-brand hexes (#6366F1, #b9a987) bypass tokens entirely and land below AA. Darkening green to ~#157038 and amber to ~#A14908 fixes the systemic half; deleting the off-brand hexes fixes the rest.

### 4.2 Focus indicator

| file:line | issue |
|---|---|
| `components/feedback/Dialog.jsx:43` | The close (✕) button sets `border:0, background:none` and defines **no `:focus-visible` ring**. The spec mandates a uniform 2px ring (`--pb-shadow-focus`/`--pb-ring`) on every interactive control. Keyboard users get no visible focus. **(High.)** No other interactive control in the audited set was found stripping focus. |

### 4.3 Decision-palette misuse — the central semantic theme

The spec is explicit: **amber = system working/pending, NEVER a decision; green/red = the agent decision scale.** Five places violate the *intent* of that scale:

| file:line | misuse | correct token |
|---|---|---|
| `components/commerce/PaymentCard.jsx:56` | **amber on a terminal Frozen/revoked badge** (high) — amber is reserved for *in-progress* only | reject family or neutral disabled |
| `components/navigation/Tabs.jsx:54` | `--pb-decision-reject` as a **count badge** | a neutral count color |
| `components/underwriting/TrustBadge.jsx:124` | `--pb-decision-approve*` on a **permanent marketing** badge | brand/neutral surface |
| `ui_kits/dashboard/AppBar.jsx:34` | `decision="approve"` for **backend connectivity** | a system-status semantic |
| `guidelines/variants-decision-scale.html:36` | calls a **Google-blue** approve "on-brand" | `--pb-blue`; remove the false label |

The pattern: **decision colors are leaking onto non-decision UI** (counts, connectivity, marketing, frozen states). The amber-on-frozen case is the most serious because it directly contradicts the only hard rule the spec writes down. Green-for-"healthy/online" on a status dot (`UnderwritingLedger.dc.html:33`, `Ledger`) is a *defensible* convention and was downgraded — but the token should still be `var(--pb-green)`, not a raw hex.

---

## 5. Patterns (systemic — fix once, fix many)

1. **Hardcoded-but-equal-to-a-token is the dominant pattern (~half of 558).** Values like `24px`, `8px`, `12px`, `font-size:11px`, `font-weight:600`, `#fff`, `#E4E0D8` recur in nearly every file. A lint rule that flags raw px/hex matching a known token value would catch most of the low tier mechanically.

2. **Off-scale drift between the 4px steps.** `10px, 14px, 18px, 20px, 22px, 28px` (and type `15px, 17px, 18px, 12.5px, 11.5px, 9px, 10px`) appear repeatedly — these are *real* design drift, not just un-tokenized literals, because no token covers them. Worst concentration: the `.dc.html` templates, `decision/ResultPage.jsx`, and `TrustBadge.jsx`.

3. **The `.dc.html` templates ignore tokens almost entirely** (`AgentCheckout`, `DecisionResult`, `UnderwritingLedger`). They re-spell every brand hex and font stack as a literal. These three files alone account for a large share of the color findings and both off-brand-indigo contrast failures.

4. **Off-brand indigo `#6366F1` and tan `#b9a987` keep reappearing** and both fail WCAG. There is no token for either — they are foreign colors that should simply be deleted in favor of `--pb-blue`/an ink token.

5. **Raw ink-ramp variables used where the semantic alias is required.** `--pb-ink-faint`/`--pb-ink-2`/`--pb-surface-muted` are referenced directly in product code instead of `--pb-text-faint`/`--pb-text-muted`/`--pb-surface-inset`. colors.css explicitly says to use the aliases.

6. **Borders use the saturated text ink instead of the paired `-border` token** (`StatusPill.jsx:8–10`, `PaymentCard.jsx:56`, both `.dc.html` ledger pills). The system *provides* `--pb-*-border` tokens precisely for this; ignoring them yields harsher outlines than designed.

7. **`--pb-shadow` (a back-compat alias) is used where the named elevation token belongs** (`gallery.html:14`, `radius-shadow.html:13`, `feedback.card.html:33`), and one site references a **token that doesn't exist** (`TrustBadge.jsx:101` → `--pb-elevate-raised`). The two-level elevation model (flat/float) is being bypassed.

8. **Headings use `font-weight:500` (the label weight) instead of 600.** Six `<h1>/<h2>` sites (`Dialog.jsx:42`, `DecisionResult.dc.html:20`, `feedback.card.html:35`, `Ledger.jsx:26`, `decision/ResultPage.jsx:87`, `UnderwritingLedger.dc.html:38`).

9. **No on-fill/inverse-text token exists**, so every white-on-color label hardcodes `#fff`. This is a *gap in the token set*, not just author sloppiness.

---

## 6. Recommendations (prioritized)

**P0 — fix the high-severity correctness/a11y issues (12 findings, mostly one-line changes):**
1. **Darken the decision tokens** so on-tint text clears 4.5:1: `--pb-green` → ~#157038, `--pb-amber` → ~#A14908 (`colors.css:29,33`). This fixes StatusPill + VerdictBadge globally. Re-state the contrast comments with the *measured* figures and name the real surface.
2. **Delete the off-brand hexes.** Replace `#6366F1` with `var(--pb-blue)` (`AgentCheckout.dc.html:30,57`) and `#b9a987` with a sufficiently dark ink (`DecisionResult.dc.html:59`, `decision/ResultPage.jsx:173`) — all three currently fail AA.
3. **Fix `--pb-elevate-raised`** (`TrustBadge.jsx:101`) → `--pb-elevate-flat` (undefined token is silently dropping the shadow).
4. **Add a focus ring** to the Dialog close button (`Dialog.jsx:43`): `:focus-visible { box-shadow: var(--pb-shadow-focus) }`.
5. **Remove amber from the Frozen/revoked badge** (`PaymentCard.jsx:56`) — use the reject family or a neutral disabled treatment; this is the only hard-rule break.
6. **Snap the off-scale chat-bubble radius** (`DecisionDetail.jsx:59`) to `var(--pb-radius)` (12px).

**P1 — disambiguate and de-duplicate the token layer:**
7. Resolve the `--pb-text-*` color/size namespace collision (`colors.css:42`) — rename one family (e.g. type scale → `--pb-font-size-*`, or colors → `--pb-fg-*`).
8. Alias `--pb-blue-hover`/`--pb-blue-link` to `var(--pb-brand-deep)` (`colors.css:10`).
9. **Add an on-fill/inverse-text token** (e.g. `--pb-text-on-fill: #ffffff`) so the dozens of `#fff` labels have a semantic home instead of borrowing `--pb-surface`.

**P2 — stop the decision-palette leakage (semantic correctness):**
10. Introduce a neutral count/notification color and a system-status semantic, then fix `Tabs.jsx:54`, `AppBar.jsx:34`, `TrustBadge.jsx:124`. Correct the false "on-brand" label at `variants-decision-scale.html:36` and add a white-on-fill contrast guard at `:49`.
11. Switch pill/badge borders to the paired `--pb-*-border` tokens (`StatusPill.jsx:8–10`, `PaymentCard.jsx:56`, ledger templates).

**P3 — mechanical cleanup (the 378 low + the equal-to-token mediums):**
12. **Add a token-lint rule** to CI that (a) flags raw px/hex/number literals matching a known token value and (b) flags spacing/type literals that fall *off* the defined scales. This single rule addresses the majority of all 558 findings and prevents regression.
13. **Tokenize the three `.dc.html` templates** — the highest-density offenders — replacing every brand hex and font stack with `var()`.
14. Swap heading weights 500→`var(--pb-weight-semibold)` on the six heading sites; replace `ease-in-out` with `var(--pb-ease)`; replace `--pb-shadow` with `--pb-elevate-flat`/`--pb-elevate-float`; replace raw ramp vars with their semantic aliases.

**Two files are already clean** (`tweaks-panel.jsx`, `Toggle.jsx`) and can serve as the reference pattern for "fully token-driven" when fixing the rest.
