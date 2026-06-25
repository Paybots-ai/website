/* Checkout settings + spending rules data — mirrors the storefront's real
   CheckoutPrefs model (site lists, notifications, purchase-preference toggles)
   plus the per-card authorization rules Paybots underwrites against. */
window.PB_SETTINGS = {
  user: "usr_demo_alice",
  toggles: [
    { key: "autoApproveSimilar", on: true, title: "Auto-approve similar purchases",
      sub: "When Paybots recognizes a repeat order you've approved before, skip the confirmation step and check out automatically.",
      onText: "Auto-approve is on — similar repeat orders go straight to Paybots checkout.",
      offText: "Auto-approve is off — you'll be asked before repeat orders are approved." },
    { key: "enrichEnabled", on: false, title: "Enrich",
      sub: "When Paybots denies a checkout, automatically apply backend guidance and retry once with the corrected cart (best on orders under $500).",
      onText: "Enrich is on — rejected checkouts self-correct and retry once.",
      offText: "Enrich is off — rejections stop at the first Paybots decision." },
    { key: "externalCheckoutEnabled", on: true, title: "External checkout",
      sub: "When off, paying outside Paybots checks out on the storefront merchant in one page instead of opening separate Stripe tabs per item.",
      onText: "External checkout is on — each item opens its own Stripe tab.",
      offText: "External checkout is off — checkout stays on the storefront merchant." },
  ],
  sitePolicies: [
    { list: "Always search", tone: "approve",
      desc: "Paybots prioritizes these merchants and may purchase without extra checks.",
      sites: [
        { domain: "magnumopus.com", label: "Magnum Opus" },
        { domain: "bpjla.com", label: "BPJLA Procurement" },
        { domain: "nordstrom.com", label: "Nordstrom" },
        { domain: "mcmaster.com", label: "McMaster-Carr" },
      ] },
    { list: "Greylist", tone: "working",
      desc: "Paybots can buy here but always asks before checkout.",
      sites: [
        { domain: "amazon.com", label: "Amazon" },
        { domain: "kayak.com", label: "Kayak" },
      ] },
    { list: "Blacklist", tone: "reject",
      desc: "Paybots will never purchase from these sites. Blocked attempts trigger an alert.",
      sites: [
        { domain: "unverified-deals.example", label: "Unverified Deals" },
      ] },
  ],
  notifications: [
    { key: "purchaseApproved", label: "Purchase approved", on: true },
    { key: "purchaseRejected", label: "Purchase rejected", on: true },
    { key: "reviewRequired", label: "Ask User holds", on: true },
    { key: "similarPurchase", label: "Similar purchase prompts", on: true },
    { key: "coverageReminder", label: "Coverage reminders", on: false },
  ],
  cardControls: [
    { id: "4921", brand: "visa", label: "Travel card", last4: "4921", exp: "08/27", frozen: false, categories: ["flights", "hotels", "cars", "experiences"] },
    { id: "2045", brand: "mastercard", label: "Default", last4: "2045", exp: "03/28", frozen: false, categories: ["apparel", "travel", "office"] },
    { id: "8810", brand: "amex", label: "Procurement card", last4: "8810", exp: "11/26", frozen: true, categories: ["networking", "furniture", "supplies"] },
  ],
  cards: [
    { label: "Default", scope: "(user, business) default", status: "active", perPurchase: "$500", daily: "$1,500", categories: ["apparel", "travel", "office"], blocked: ["electronics > $1,000"], substitution: "Same color family, else ask", version: 7 },
    { label: "Travel card", scope: "card ···· 4921", status: "active", perPurchase: "$3,000", daily: "$5,000", categories: ["flights", "hotels", "experiences"], blocked: [], substitution: "Ask before any change", version: 3 },
    { label: "Procurement card", scope: "card ···· 8810", status: "frozen", perPurchase: "$10,000", daily: "$25,000", categories: ["networking", "furniture", "supplies"], blocked: ["duplicate orders"], substitution: "Never substitute", version: 12 },
  ],
};
