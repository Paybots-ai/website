/* Append-only audit log — every underwriting decision logged as a discrete event
   the moment it happens. Mirrors paybots/surfaces/ui/audit.html. */
window.PB_AUDIT = [
  { seq: 1042, ts: "2026-06-09 14:22:07", event: "decision.issued", decision: "approve", actor: "evaluator", purchase: "uw_8f3a2c91", detail: "auto_approve · seal issued" },
  { seq: 1041, ts: "2026-06-09 14:22:06", event: "seal.signed", decision: null, actor: "signer", purchase: "uw_8f3a2c91", detail: "ES256 · kid pb_2026_06 · sha256:9c1f…" },
  { seq: 1040, ts: "2026-06-09 14:22:05", event: "checkout.received", decision: null, actor: "gateway", purchase: "uw_8f3a2c91", detail: "Magnum Opus → Threadline · $1,284.00 · UCP" },
  { seq: 1039, ts: "2026-06-09 13:31:55", event: "decision.issued", decision: "reject", actor: "evaluator", purchase: "uw_2c9a6f13", detail: "reject · item_mismatch" },
  { seq: 1038, ts: "2026-06-09 13:31:54", event: "intent.checked", decision: null, actor: "evaluator", purchase: "uw_2c9a6f13", detail: "48-port requested, 24-port in cart" },
  { seq: 1037, ts: "2026-06-09 13:31:53", event: "checkout.received", decision: null, actor: "gateway", purchase: "uw_2c9a6f13", detail: "bpjl → Boltworth · $4,920.00 · Stripe" },
  { seq: 1036, ts: "2026-06-09 12:58:20", event: "decision.issued", decision: "reject", actor: "evaluator", purchase: "uw_9b2e7c55", detail: "reject · bad_substitution" },
  { seq: 1035, ts: "2026-06-09 12:05:11", event: "decision.issued", decision: "approve", actor: "evaluator", purchase: "uw_a14d8e22", detail: "auto_approve · seal issued" },
  { seq: 1034, ts: "2026-06-09 12:05:10", event: "rules.loaded", decision: null, actor: "system", purchase: "uw_a14d8e22", detail: "Default card · v7 · per-purchase $500" },
  { seq: 1033, ts: "2026-06-09 11:39:02", event: "decision.issued", decision: "approve", actor: "evaluator", purchase: "uw_3d5f9a08", detail: "auto_approve · seal issued" },
  { seq: 1032, ts: "2026-06-09 10:58:44", event: "decision.issued", decision: "reject", actor: "evaluator", purchase: "uw_7f1c0d62", detail: "reject · duplicate_order" },
  { seq: 1031, ts: "2026-06-09 10:58:43", event: "dispute.opened", decision: null, actor: "buyer", purchase: "uw_7f1c0d62", detail: "dsp_4468 · duplicate delivery claimed" },
  { seq: 1030, ts: "2026-06-09 09:14:00", event: "jwks.rotated", decision: null, actor: "system", purchase: "—", detail: "Signing key rotated · kid pb_2026_06" },
];
