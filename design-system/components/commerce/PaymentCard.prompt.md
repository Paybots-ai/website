A saved-card chip: brand mark, masked last-4 in mono, optional expiry, and a freeze/selected state. Use in wallet lists and checkout card pickers.

```jsx
<PaymentCard brand="visa" label="Travel card" last4="4921" exp="08/27" selected onSelect={pick} />
<PaymentCard brand="mastercard" label="Procurement card" last4="8810" status="frozen" />
```

`selected` draws the blue tinted treatment; `status="frozen"` dims it and shows a Frozen pill.
