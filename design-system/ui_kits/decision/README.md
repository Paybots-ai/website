# Underwriting Result — UI kit

The consumer-facing page an agent business shows after a delegated purchase
resolves, with Paybots' verdict surfaced. Recreation of the shared result page
(`businesses/_shared/shared-ui-components/result-ui.js`), set inside a generic
agent-storefront header ("Underwritten by Paybots").

## Screens / flow

`index.html` exposes the two outcomes via a scenario picker:

- **Approve** — "Purchase approved," sealed, order on its way.
- **Reject** — "Purchase rejected" (wrong item); nothing charged, agent can retry.

Each shows Paybots' decision, the cart/order, and the consumer↔agent
conversation Paybots read to make the call.

## Files

- `index.html` — storefront header + scenario picker.
- `ResultPage.jsx` — the result layout, driven by the three scenarios.

## Composition

Uses `StatusPill`, `VerdictBadge`, and `Button` from the design system.
Note: the surrounding storefront brand (here "Magnum Opus") is the *business's* identity, not
Paybots' — only the "Underwritten by Paybots" mark and the decision UI are Paybots brand.
