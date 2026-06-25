Pill-radius action button in the Paybots blue; use for any primary or secondary action, and `approve`/`reject` for the two operator decision actions.

```jsx
<Button variant="primary">Save rule</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="approve" iconLeft="✓">Approve</Button>
<Button variant="reject" iconLeft="✕">Reject</Button>
```

Variants: `primary` (blue fill), `ghost` (white, strong border), `neutral` (gray fill, borderless), `approve` (green fill), `reject` (white with red text/border). Sizes: `sm` / `md` / `lg`. Never use more than one `primary` per view.
