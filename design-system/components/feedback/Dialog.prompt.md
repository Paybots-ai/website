Centered modal over a dark scrim; floats with shadow and rounds at 12px. Backdrop click, Escape, and the ✕ all call `onClose`. Pair the footer with `Button`s.

```jsx
<Dialog open={open} title="Freeze this card?" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="reject" onClick={freeze}>Freeze</Button></>}>
  Paybots will reject new purchases on ···· 8810 until you unfreeze it.
</Dialog>
```
