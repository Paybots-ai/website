# Paybots Design System

The brand and UI system for **Paybots** — a B2B2C agentic-commerce **underwriting** layer. When an AI agent is about to buy something on a consumer's behalf, Paybots reads the purchase conversation, decides whether the agent is buying *what was actually asked for* (against the consumer's spending rules), and answers **approve / reject**. On approve it issues an offline-verifiable **seal** — a signed attestation that rides along with the order. Paybots never touches the money. The goal is to show through design that we are trustworthy, that we do our homework, and that we are intuitive. it should make sense to the user on what is happeing and that the agents work was checked.

This design system captures the visual language of Paybots' own operator-facing software (the read-only **audit dashboard**) and the underwriting-decision surfaces that appear inside the agent businesses it serves.

> The two underwriting decisions — **approve / reject** — are the spine of the whole system. They map 1:1 to two semantic colors (green / red) and recur as verdict badges, status pills, ledger rows, and decision-detail panels everywhere.

---

## Sources

Everything here was derived from a single attached codebase. Store these references in case a reader has access:

- **Codebase:** `paybots-demo/` (read-only mount). Key surfaces explored:
  - `paybots/surfaces/ui/` — the Paybots audit dashboard (ledger, audit log, disputes, demo controls). `assets/style.css` + `assets/shell.js` are the canonical chrome.
  - `businesses/_shared/shared-ui-components/gf-theme.css` — the shared token + app-bar source ("Google-Flights skin") that every surface builds on. **This file is the root of the real design tokens.**
  - `businesses/_shared/storefront-common/assets/` — shared storefront CSS/JS (`style-base.css`, `components.css`), and `result-ui.js` — the approve/reject result + seal + transcript rendering.
  - `businesses/magnum-opus/`, `businesses/bpjl/` — the agent-business storefronts (themed as third-party brands, *not* Paybots brand).
- **Brand collateral (text):** `gtm/pitch.md` (full 12-slide pitch + voice), `gtm/product-definition.md` (canonical product copy), `gtm/paybots-pitch-deck.pptx`, `gtm/paybots-onepager.pdf`. All product copy below traces to these.

### A note on what is "Paybots brand" vs. not

The demo deliberately skins its agent storefronts (Magnum Opus fashion, bpjl procurement) to look like independent third-party products. Those are the *businesses'* brands, not Paybots'. **Paybots' own brand** is the audit dashboard + the signed underwriting field: the bold-italic-**P** mark, the deep brand blue, the Roboto / JetBrains Mono pairing, and the calm operator-software tone documented here.

---

## CONTENT FUNDAMENTALS

Paybots writes in two registers, and the system keeps them distinct.

**1. Product UI copy — plain, exact, operator-grade.** Sentence case everywhere (never Title Case headings). Short and literal. It names the decision and the reason, nothing more. Examples from the dashboard:

- Page title: *"Underwriting ledger"* — sub: *"Every decision Paybots stood behind — approved or rejected — across the agent businesses. Read-only."*
- Filter chips: *All · Approved · Rejected.*
- Reject heading: *"Why Paybots rejected this"* (declarative, owns the verdict).
- Status microcopy: *"Backend online" / "Backend offline" / "Payment capture succeeded."*

**Casing & terms.** The two decisions surface to consumers as **Approved / Rejected** and internally as `approve` / `reject` (evaluator enum `auto_approve` / `reject`). Reason codes are mono, snake_case, e.g. `item_mismatch`, `bad_substitution`, `duplicate_order`. Amounts, IDs, and codes are always monospace.

**Voice.** Second person to the operator ("Toggle what each page shows"), third person about the system ("Paybots observes the ledger; it never gates a purchase"). The system is never coy about being read-only or advisory — it states its own boundaries.

**2. GTM / narrative copy — sharp, declarative, confident.** The pitch voice leads with a question and answers it bluntly: *"Who pays when the agent buys the wrong thing?"* → *"Today's answer is nobody."* Sentences are dense but never padded; claims trace to evidence. Signature line: *"Signifyd made fraud survivable with a guarantee. Paybots does that for agent error."* Use this register for decks and marketing, never inside the operator UI.

**No emoji** in product UI or brand voice. (The codebase uses emoji only as throwaway vertical markers in internal docs — ✈️ 👕 🧾 — never in shipped UI.) **No exclamation points.** Em dashes and colons carry the rhythm.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Calm, trustworthy, warm. A warm-paper canvas, white surfaces, hairline warm-gray borders, one confident indigo accent, and two decision colors. It should read as *infrastructure you'd trust with money* — editorial, not a cold dashboard.

**Color.** One primary indigo (`#4F46E5`) for actions and links; a deeper `#4338CA` for hover/links and the reversed wordmark. A warm-neutral ink ramp (`#1A1A1F → #5C5C66 → #6E6E78`, lines `#E4E0D8`) on a single warm-paper ground (`#F5F3EF`) — no alternating section tints; rhythm comes from whitespace and white cards. Two semantic colors do real work — **green `#15803D` = approve, red `#B91C1C` = reject** — each with a tinted background (`#E7F5EC / #FBEAEA`). Amber `#B45309` is kept only for non-decision system status (a "working" pulse), never a verdict. No gradients.

**Type.** DM Sans for everything — UI text and headings (one heading font, no separate display face); headings are **Semibold (600)**. IBM Plex Mono for amounts, IDs, reason codes, and terminals — reserved for live machine values, never eyebrows or labels. Base size 14px.

**Spacing & layout.** 4px base scale (4/8/12/16/24/32/48/64). Page content sits in a 1024px max-width column with a 24px gutter; the app bar spans full width. Tables and lists dominate — this is a ledger product.

**Backgrounds.** A single warm-paper ground (`#F5F3EF`) on every page with white (`#FFFFFF`) cards and panels floating on it — no alternating section bands. No textures or gradients. (The agent storefronts the system serves bring their own imagery; that belongs to the businesses, not to Paybots.)

**Component standards.** Every primitive derives from the tokens — no hard-coded sizes or hexes. Interactive controls (`Button`, `Chip`, `Toggle`, `Tabs`, `PaymentCard`, `Field`) share one `size` scale and one 2px focus ring (`--pb-ring`). Elevation has exactly two levels: `--pb-elevate-flat` (default container — border, no shadow) and `--pb-elevate-float` (toasts, menus, dialogs only). See the **Component standards** card for the full grid.

**Borders, cards & shadows.** The default container is a **flat white card: 1px `#E4E0D8` border, 12px radius, no shadow** — one radius everywhere (small controls 8px, pills fully round). Soft warm shadows (`0 2px 16px rgba(26,26,31,.06)`) are reserved for things that genuinely float — toasts, menus, dialogs.

**Hover / press / focus.** Hover = a one-step-darker fill (primary indigo `#4F46E5 → #4338CA`; neutral buttons darken one warm step); links go to `#4338CA` and underline. Press deepens once more (`#3A2FB0`). Focus = a 2px indigo ring (`box-shadow: 0 0 0 2px #4F46E5`) — never a browser default outline. No scale/shrink on press, no bounce.

**Motion.** Quiet and short: 120–150ms, ease `cubic-bezier(0.2,0,0,1)`. Fades and color transitions only. One exception — a soft `pulse` opacity loop on a "busy" status dot. No slide-ins, no spring. motion should be snappy

**Transparency & blur.** Minimal — the fixed nav uses a paper-tinted backdrop blur; otherwise surfaces are opaque. Selected/active states use the tinted indigo `#EEEBFF` fill rather than opacity.

**Numerics.** Tabular figures (`font-variant-numeric: tabular-nums`) on every amount and version number so ledgers align.

---

## ICONOGRAPHY

**The codebase ships almost no raster/SVG icon set** — it leans on Unicode glyphs and CSS shapes, which keeps the operator UI light. The system follows suit:

- **Brand mark:** the **“Paybots” wordmark** — DM Sans bold, with **“bots” set in the indigo accent** (`#4F46E5`). This is the primary logo (`assets/paybots-logo.svg`). A **bold-italic “P”** reversed out of an indigo (`#4338CA`) rounded square (`assets/paybots-mark.svg`, 64×64) is the compact **app icon / favicon**, used as the small glyph in “Underwritten by Paybots” checkout embeds.
- **Status & affordances use Unicode glyphs**, not an icon font: `▸` for disclosure arrows, `→` in footers/links, a CSS-drawn dot (`●`) for status, `✓`/`✕` for approve/reject. Keep these — do not introduce a heavy icon library.
- **Decision dots:** a small filled circle colored by decision (green = approve, red = reject; amber only for a non-decision “working” state) is the recurring status atom.
- **If you genuinely need line icons** (e.g. in a richer UI kit), substitute **Lucide** (rounded, friendly — matches the warm brand) at \~20–24px, `#5C5C66`. *Flag this as a substitution: the source has no icon set, so any line icons are an addition, not a recreation.*
- **No emoji** in shipped UI. No decorative illustration.

Paybots' own surfaces use no imagery; any photography belongs to the agent storefronts the system serves, not to the Paybots brand.

---

## INDEX / MANIFEST

Root files:

- `styles.css` — global entry point (`@import` manifest). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `paybots-logo.svg` (primary **Paybots** wordmark) + `paybots-mark.svg` (the indigo P-square app icon).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry point.

Foundation specimen cards (Design System tab): see the `guidelines/` and `tokens/` `.html` cards — colors, decision scale, type, mono, spacing, radius, shadow, brand.

**Templates** (`templates/` — one-click starting points for consuming projects):
- `decision-result/` — consumer approve/reject result with checks, verdict, and seal.
- `underwriting-ledger/` — operator dashboard app bar + decisions table.
- `agent-checkout/` — the Paybots checkout embed inside a partner agent chat.

Components (`components/`): see each directory's card.
- **core/** — Button, Card, Chip, Field, Toggle.
- **underwriting/** — VerdictBadge, StatusPill, DecisionDot, **TrustBadge** (the consumer-facing "Underwritten by Paybots" acquisition lever — 10 variants).
- **feedback/** — Toast, Dialog.
- **navigation/** — Tabs.
- **commerce/** — PaymentCard.

UI kits (`ui_kits/`):

- `ui_kits/dashboard/` — the Paybots **audit dashboard** (ledger, decision detail,
  analytics, audit log, disputes, settings).
- `ui_kits/decision/` — the consumer-facing **underwriting result** (approve/reject
  + seal + transcript), as it appears inside an agent storefront.
- `ui_kits/gauntlet/` — the **Agent Gauntlet** (connect an agent; see it run before/after the Paybots seal).
- `ui_kits/website/` — the **paybots.io** marketing site (home, for-consumers, for-merchants, legal).

Note: partner-storefront kits (third-party brands that embed Paybots) are intentionally
not part of this design system — it is Paybots-brand only.

See each kit's `README.md` for screen inventory.
