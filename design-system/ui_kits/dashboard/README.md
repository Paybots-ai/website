# Paybots Audit Dashboard — UI kit

A faithful recreation of Paybots' read-only operator dashboard
(`paybots/surfaces/ui/` in the source codebase).

## Screens / flow

`index.html` is interactive:

1. **Underwriting ledger** — filter chips (All / Approved / Rejected) over a decisions
   table. Switch the **Business** selector in the app bar to
   scope the ledger. Click any row →
2. **Decision detail** — verdict badge, the automated decision logic
   and reason codes, line items, the consumer↔agent **conversation evidence**, and the
   signed **underwriting seal** (issued only on approve — *no seal, no coverage*).
3. **Analytics** — KPI tiles, decisions over time (approve/reject), decision mix, a
   by-business breakdown (approve rate, sealed GMV, loss ratio, fee), top rejection reasons,
   and the score distribution. Reach it from the **Analytics** nav tab.
4. **Disputes** — sealed purchases a buyer later contested, with coverage status
   (open / covered & paid / recovered / upheld). Reach it from the **Disputes** nav tab.
5. **Checkout settings** — the consumer-facing controls Paybots underwrites against,
   mirroring the storefront `CheckoutPrefs` model: purchase preferences (auto-approve,
   enrich, external checkout), site policies (always search / greylist / blacklist),
   notifications, and the per-card authorization rules. Read-only operator view.
   Reach it from the **Settings** nav tab.
6. **Audit log** — the append-only event stream: every decision, seal, dispute, and key
   rotation logged as a discrete event. Reach it from the **Audit log** nav tab.
7. **Demo controls** — the operator panel that toggles what each storefront demo shows
   (try-on, recommendations, forced reject, slow-motion underwriting, seal). Internal
   tooling. Reach it from the **Demo** nav tab.

## Files

- `index.html` — shell + router (ledger ↔ detail).
- `AppBar.jsx` — wordmark, nav, business selector, backend-status dot.
- `Ledger.jsx` — filter chips + decisions table.
- `DecisionDetail.jsx` — verdict, score, evidence, line items, seal.
- `AuditLog.jsx` — append-only event stream (decisions, seals, disputes, key rotation).
- `DemoControls.jsx` — operator demo-flag toggles (storefront + underwriting + dashboard).
- `Analytics.jsx` — KPI tiles + CSS/SVG charts (volume, mix, by-business, reasons, score).
- `Disputes.jsx` — dispute summary + table with coverage status.
- `Rules.jsx` — checkout settings: purchase-preference toggles, site policies,
  notifications, and chip-based per-card authorization rules (read-only).
- `analytics-data.js`, `disputes-rules-data.js`, `settings-data.js` — screen data.
- `data.js` — seed records across both businesses, approve & reject.

## Composition

Built from the design-system primitives: `Chip`, `StatusPill`, `VerdictBadge`,
`Card`, `Button`, `DecisionDot`. The app bar and table are kit-local
(product chrome), styled with the shared tokens.
