The verdict block for a single decision view (result page header, decision detail). Default treatment is **soft** — a tinted fill with the decision color as text and a thin colored outline, a dot, and an optional mono subtitle. `variant="solid"` or `"outline"` for other looks.

```jsx
<VerdictBadge decision="approve" subtitle="score 0.93" />
<VerdictBadge decision="reject" subtitle="item_mismatch" variant="solid" />
```

Use exactly one per decision view; for inline lists use `StatusPill` instead.
