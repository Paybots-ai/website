Underlined segmented navigation for app-bar sections and in-page section switches. Active tab is link-blue with a 2px underline. Controlled via `value` / `onChange`.

```jsx
<Tabs value={tab} onChange={setTab}
  tabs={[{id:"ledger",label:"Ledger"},{id:"analytics",label:"Analytics"},{id:"disputes",label:"Disputes",badge:2}]} />
```

Accepts bare strings too: `tabs={["All","Approved","Rejected"]}`.
