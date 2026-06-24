/* Disputes data for the dashboard kit.
   Disputes apply only to SEALED (approved) purchases — Paybots stands behind those. */
window.PB_DISPUTES = {
  summary: [
    { label: "Open disputes", value: "2", tone: "danger" },
    { label: "Disputed amount", value: "$1,360" },
    { label: "Disputable txns", value: "8" },
    { label: "Resolved", value: "0" },
  ],
  rows: [
    { id: "dsp_4471", ts: "2026-06-08", business: "Magnum Opus", merchant: "Threadline", amount: 312.0, seal: "uw_a14d8e22", status: "open", reason: "Buyer says the substituted coat is the wrong color." },
    { id: "dsp_4468", ts: "2026-06-07", business: "bpjl", merchant: "Boltworth", amount: 1180.0, seal: "uw_3d5f9a08", status: "open", reason: "Duplicate delivery claimed." },
    { id: "dsp_4455", ts: "2026-06-05", business: "Magnum Opus", merchant: "Threadline", amount: 148.0, seal: "uw_5b7e1d40", status: "covered", reason: "Item not as described — covered, buyer made whole." },
    { id: "dsp_4441", ts: "2026-06-03", business: "bpjl", merchant: "Boltworth", amount: 880.0, seal: "uw_7f1c0d62", status: "recovered", reason: "Returned to merchant; loss recovered." },
    { id: "dsp_4430", ts: "2026-06-01", business: "Magnum Opus", merchant: "Threadline", amount: 96.0, seal: "uw_6e0b4471", status: "upheld", reason: "Seal verified against chat — no fault, dispute closed." },
  ],
};
