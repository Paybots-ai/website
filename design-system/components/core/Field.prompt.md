Bordered input with a small uppercase label inside the box (Google-style filled field). Draws a blue focus ring. Use for forms like the spending-rules editor.

```jsx
<Field label="Per-purchase cap" prefix="$" value={cap} onChange={...} hint="null = account default" />
<Field size="sm" label="Code" value={code} onChange={...} />
```

Sizes: `sm` / `md` / `lg`.
