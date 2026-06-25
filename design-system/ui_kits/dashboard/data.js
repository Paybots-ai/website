/* Seed underwriting records for the Paybots audit dashboard UI kit.
   Two agent businesses → their merchants. Two decisions: approve / reject. */
window.PB_DATA = {
  businesses: [
    { id: "", label: "All businesses" },
    { id: "magnum", label: "Magnum Opus · clothing" },
    { id: "bpjl", label: "bpjl · procurement" },
  ],
  records: [
    {
      id: "uw_6e0b4471",
      ts: "2026-06-09 14:22",
      business: "magnum", businessLabel: "Magnum Opus", merchant: "Threadline", rail: "UCP",
      amount: 96.0, decision: "approve", score: 0.93,
      reason: "Single item, matches the request and sits within the spending rules.",
      reasonCodes: ["formation_ok", "execution_ok"],
      items: [{ name: "Selvedge denim — Indigo, 32", qty: 1, price: 96.0 }],
      transcript: [
        { role: "user", content: "Get me the indigo selvedge jeans in a 32." },
        { role: "agent", content: "Indigo selvedge, 32. $96. Done." },
      ],
    },
    {
      id: "uw_2c9a6f13",
      ts: "2026-06-09 13:31",
      business: "bpjl", businessLabel: "bpjl", merchant: "Boltworth", rail: "Stripe",
      amount: 4920.0, decision: "reject", score: 0.18,
      reason: "Agent selected a 24-port switch; the user explicitly asked for 48-port. Wrong item.",
      reasonCodes: ["item_mismatch"],
      items: [{ name: "Boltworth BX-24 managed switch (24-port)", qty: 4, price: 1230.0 }],
      transcript: [
        { role: "user", content: "Order four 48-port managed switches for the new rack." },
        { role: "agent", content: "Ordering 4× Boltworth BX-24 managed switches, $1,230 each." },
      ],
    },
    {
      id: "uw_9b2e7c55",
      ts: "2026-06-09 12:58",
      business: "magnum", businessLabel: "Magnum Opus", merchant: "Threadline", rail: "UCP",
      amount: 312.0, decision: "reject", score: 0.21,
      reason: "Agent substituted a different color and cut after the chosen item sold out — outside the user's stated policy.",
      reasonCodes: ["item_mismatch", "bad_substitution"],
      items: [{ name: "Wool topcoat — Camel, L", qty: 1, price: 312.0 }],
      transcript: [
        { role: "user", content: "The charcoal wool topcoat in medium — only that one." },
        { role: "agent", content: "Charcoal medium sold out; ordered the camel in large instead." },
      ],
    },
    {
      id: "uw_a14d8e22",
      ts: "2026-06-09 12:05",
      business: "magnum", businessLabel: "Magnum Opus", merchant: "Threadline", rail: "UCP",
      amount: 148.0, decision: "approve", score: 0.95,
      reason: "Exact item requested, in stock, within budget.",
      reasonCodes: ["formation_ok", "execution_ok"],
      items: [{ name: "Merino crew sweater — Slate, M", qty: 1, price: 148.0 }],
      transcript: [
        { role: "user", content: "Slate merino crew, medium." },
        { role: "agent", content: "Slate merino crew, M, $148. Booking it." },
      ],
    },
    {
      id: "uw_3d5f9a08",
      ts: "2026-06-09 11:39",
      business: "bpjl", businessLabel: "bpjl", merchant: "Boltworth", rail: "Stripe",
      amount: 1035.0, decision: "approve", score: 0.88,
      reason: "Reorder matches the prior approved SKU and quantity, price unchanged.",
      reasonCodes: ["formation_ok", "execution_ok"],
      items: [{ name: "Standing desk frame — Black", qty: 5, price: 207.0 }],
      transcript: [
        { role: "user", content: "Reorder 5 of the black standing desk frames." },
        { role: "agent", content: "5× black standing desk frame at $207. Total $1,035." },
      ],
    },
    {
      id: "uw_7f1c0d62",
      ts: "2026-06-09 10:58",
      business: "bpjl", businessLabel: "bpjl", merchant: "Boltworth", rail: "Stripe",
      amount: 880.0, decision: "reject", score: 0.24,
      reason: "Duplicate of an order placed 6 minutes earlier for the same SKU and quantity.",
      reasonCodes: ["duplicate_order"],
      items: [{ name: "USB-C dock — 11-port", qty: 8, price: 110.0 }],
      transcript: [
        { role: "user", content: "Did the dock order go through? Order them if not." },
        { role: "agent", content: "Placing 8× USB-C dock at $110." },
      ],
    },
  ],
};
