# The Agent Gauntlet — UI kit

A faithful, self-contained copy of the **Agent Gauntlet** frontend from the
`paybots-evaluator` repo (`gauntlet/standalone/gauntlet.html`). It's a Paybots-branded
interactive demo: connect a buying agent, run it through real purchase conversations, and
see how it does **before and after the Paybots seal**.

## Brand note

This frontend was rebranded to the live Paybots brand (indigo accent, DM Sans, warm-paper
canvas) to match the dashboard + storefront kits.

## Files

- `index.html` — the entire app: inline tokens, styles, and JS (a build artifact from the
  evaluator's `build_standalone.py`). Self-contained — open directly. Click an agent type,
  connect, toggle the seal on/off, and inspect cases.

## Not pulled (and why)

The evaluator repo's other frontend — `dashboard/` ("Otto Review · Semantic Review
Workbook") — is an internal Vite/React eval workbench with its own Sigma-style theme
(Inter, status tones, data-driven from `data.json`). It's internal tooling, a different
visual language, and not Paybots-brand product, so it was left out. Say the word if you
want it recreated as an internal-tools reference screen.
