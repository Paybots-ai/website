Transient confirmation that floats above the UI (shadowed) with a decision-colored left accent. Use for "Payment captured", "Rule saved", or an error.

```jsx
<Toast tone="success" title="Payment capture succeeded" message="uw_8f3a2c91 sealed." onClose={dismiss} />
<Toast tone="error" title="Backend offline" message="Retry in a moment." />
```

Tones: `success` (green) · `error` (red) · `info` (blue).
