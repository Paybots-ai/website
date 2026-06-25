/* Aggregate metrics for the Paybots analytics screen.
   Numbers are illustrative and consistent with the loss-model framing
   (16–25% loss ratios vs the 40–60% insurance norm, ~3% fee). */
window.PB_ANALYTICS = {
  window: "Last 30 days",
  kpis: [
    { label: "Decisions", value: "4,820", sub: "+12% vs prior 30 days" },
    { label: "Approve rate", value: "86.0%", sub: "4,143 approved", tone: "approve" },
    { label: "Reject rate", value: "14.0%", sub: "677 rejected", tone: "reject" },
    { label: "Sealed GMV", value: "$1.24M", sub: "underwritten volume" },
    { label: "Covered loss ratio", value: "18%", sub: "vs 40–60% norm" },
  ],
  byBusiness: [
    { name: "Magnum Opus", vertical: "clothing", decisions: 3120, approve: 0.88, gmv: "$612K", loss: "16%", fee: "3.0%" },
    { name: "bpjl", vertical: "procurement", decisions: 1700, approve: 0.82, gmv: "$628K", loss: "21%", fee: "2.2%" },
  ],
  reasons: [
    { code: "item_mismatch", pct: 41 },
    { code: "bad_substitution", pct: 22 },
    { code: "out_of_policy", pct: 15 },
    { code: "duplicate_order", pct: 13 },
    { code: "price_drift", pct: 9 },
  ],
};
