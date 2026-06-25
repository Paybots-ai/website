The default Paybots container: flat white, hairline border, 12px radius, no shadow. Use for every panel, list, and grouping; reserve shadows for floating UI only.

```jsx
<Card title="Automated decision logic" actions={<Button size="sm" variant="ghost">View raw</Button>}>
  <p>Approved — cart matches the authorized intent.</p>
</Card>
```

Set `padded={false}` when the body is a table or needs flush edges.
