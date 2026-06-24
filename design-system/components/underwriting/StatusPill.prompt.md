Tinted rounded status label for a decision. Accepts canonical decisions or product synonyms and maps them to the right color + default label.

```jsx
<StatusPill status="approve" />            {/* → "Approved", green */}
<StatusPill status="reject">Rejected · item_mismatch</StatusPill>
<StatusPill status="working" />            {/* → amber, non-decision in-progress */}
```

Pass `dot={false}` to drop the leading dot, or `size="sm"` for a compact pill. Use in tables, list rows, and detail headers.
