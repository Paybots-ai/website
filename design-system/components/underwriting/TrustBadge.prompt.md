The consumer-facing "Underwritten by Paybots" trust badge — what a partner shows *its* end users to say "you never carry the risk." Ten treatments via one `variant` prop; pick by surface.

```jsx
<TrustBadge variant="pill-soft" />                 {/* checkout / cart line */}
<TrustBadge variant="ghost" />                     {/* site footer */}
<TrustBadge variant="seal" />                       {/* product page / hero stamp */}
<TrustBadge variant="card" subline="You never carry the risk." /> {/* trust section */}
```

Variants: `pill-soft` (default), `solid`, `outline`, `ghost`, `seal`, `shield`, `lock`, `verified`, `mono`, `card`. The "P" mark is drawn inline, so the badge is self-contained — no image dependency. `shield`/`card` show the `subline`; the rest use `label` only.
