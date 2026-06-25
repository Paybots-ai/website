/* @ds-bundle: {"format":3,"namespace":"PaybotsDesignSystem_e75ed6","components":[{"name":"PaymentCard","sourcePath":"components/commerce/PaymentCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"DecisionDot","sourcePath":"components/underwriting/DecisionDot.jsx"},{"name":"DECISION_COLOR","sourcePath":"components/underwriting/DecisionDot.jsx"},{"name":"StatusPill","sourcePath":"components/underwriting/StatusPill.jsx"},{"name":"TrustBadge","sourcePath":"components/underwriting/TrustBadge.jsx"},{"name":"VerdictBadge","sourcePath":"components/underwriting/VerdictBadge.jsx"}],"sourceHashes":{"components/commerce/PaymentCard.jsx":"b841ef3c5ada","components/core/Button.jsx":"d4ead35309b9","components/core/Card.jsx":"43cab5baa9ac","components/core/Chip.jsx":"359518dfc53a","components/core/Field.jsx":"8eafce5b1b78","components/core/Toggle.jsx":"be1a150a80f5","components/feedback/Dialog.jsx":"61bea75a0363","components/feedback/Toast.jsx":"16ff32005c13","components/navigation/Tabs.jsx":"cbc18460d175","components/underwriting/DecisionDot.jsx":"6ad5a5ce2274","components/underwriting/StatusPill.jsx":"10b01bb11517","components/underwriting/TrustBadge.jsx":"7ec0b1007119","components/underwriting/VerdictBadge.jsx":"5bc753c31945","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/dashboard/Analytics.jsx":"4c03f8d9abf4","ui_kits/dashboard/AppBar.jsx":"89e6887ab5ef","ui_kits/dashboard/AuditLog.jsx":"b9fab5fbe227","ui_kits/dashboard/DecisionDetail.jsx":"f49689f57e3e","ui_kits/dashboard/DemoControls.jsx":"195bbab1a4d0","ui_kits/dashboard/Disputes.jsx":"4319b67f5ded","ui_kits/dashboard/Ledger.jsx":"b4b4bf68fec3","ui_kits/dashboard/Rules.jsx":"ea5d537a4b91","ui_kits/dashboard/analytics-data.js":"ae1172291850","ui_kits/dashboard/audit-data.js":"a28f95d19155","ui_kits/dashboard/data.js":"630a866e9904","ui_kits/dashboard/disputes-rules-data.js":"fc605d8abbb7","ui_kits/dashboard/settings-data.js":"fb16cc6586b7","ui_kits/dashboard/theme.js":"0283350799ed","ui_kits/decision/ResultPage.jsx":"7e46acde3961","ui_kits/website/adoption-terminal.js":"e5fcc5cd6799","ui_kits/website/nav.js":"b2439434c459"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PaybotsDesignSystem_e75ed6 = window.PaybotsDesignSystem_e75ed6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PaymentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PaymentCard — a saved card chip with brand, masked PAN, and a status.
 * `selected` draws the blue tinted/selected treatment; `status` shows freeze/etc.
 */
const BRAND_LABEL = {
  visa: "VISA",
  mastercard: "Mastercard",
  amex: "AMEX",
  generic: "Card"
};
function PaymentCard({
  brand = "visa",
  last4 = "0000",
  label = "",
  exp = "",
  status = "active",
  selected = false,
  onSelect,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const frozen = status === "frozen" || status === "revoked";
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 16px",
    borderRadius: "var(--pb-radius-sm)",
    border: "1px solid " + (selected ? "var(--pb-primary)" : "var(--pb-border)"),
    background: selected ? "var(--pb-accent-soft)" : "var(--pb-surface)",
    cursor: onSelect ? "pointer" : "default",
    fontFamily: "var(--pb-font-sans)",
    opacity: frozen ? 0.7 : 1,
    outline: "none",
    boxShadow: focus && onSelect ? "var(--pb-ring)" : "none",
    transition: "border-color var(--pb-dur) var(--pb-ease), background var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    ...style
  };
  const chip = {
    width: 44,
    height: 30,
    borderRadius: 5,
    flex: "none",
    background: "linear-gradient(135deg, var(--pb-ink) 0%, var(--pb-ink-2) 100%)",
    color: "#fff",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onSelect,
    role: onSelect ? "button" : undefined,
    tabIndex: onSelect ? 0 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: chip
  }, BRAND_LABEL[brand] || BRAND_LABEL.generic), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--pb-text)"
    }
  }, label || BRAND_LABEL[brand] || "Card"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-text-muted)"
    }
  }, "\xB7\xB7\xB7\xB7 ", last4)), exp && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--pb-ink-faint)",
      marginTop: 2
    }
  }, "Exp ", exp)), frozen && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--pb-amber)",
      background: "var(--pb-amber-bg)",
      border: "1px solid var(--pb-amber)",
      borderRadius: "var(--pb-radius-pill)",
      padding: "2px 9px"
    }
  }, "Frozen"), selected && !frozen && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pb-primary)",
      fontSize: 16
    }
  }, "\u2713"));
}
Object.assign(__ds_scope, { PaymentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PaymentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Paybots primary action button. Pill-radius, DM Sans Medium, quiet hover.
 * Variants map to the product's button roles; `approve`/`reject` are the
 * operator decision actions and borrow the semantic decision colors.
 */
function Button({
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      minHeight: 32,
      padding: "0 16px",
      fontSize: 13
    },
    md: {
      minHeight: 40,
      padding: "0 24px",
      fontSize: 14
    },
    lg: {
      minHeight: 48,
      padding: "0 28px",
      fontSize: 15
    }
  };
  const variants = {
    primary: {
      background: "var(--pb-primary)",
      color: "#fff",
      borderColor: "var(--pb-primary)"
    },
    ghost: {
      background: "var(--pb-surface)",
      color: "var(--pb-text)",
      borderColor: "var(--pb-border-strong)"
    },
    neutral: {
      background: "var(--pb-surface-hover)",
      color: "var(--pb-text)",
      borderColor: "transparent"
    },
    approve: {
      background: "var(--pb-decision-approve)",
      color: "#fff",
      borderColor: "var(--pb-decision-approve)"
    },
    reject: {
      background: "var(--pb-surface)",
      color: "var(--pb-decision-reject)",
      borderColor: "var(--pb-decision-reject)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontFamily: "var(--pb-font-sans)",
    fontWeight: "var(--pb-weight-medium)",
    borderRadius: "var(--pb-radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--pb-dur) var(--pb-ease), border-color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    whiteSpace: "nowrap",
    outline: "none",
    boxShadow: focus && !disabled ? "var(--pb-ring)" : "none",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flat white container — the default Paybots surface. 1px border, 12px radius,
 * no shadow. Optional padding and an optional header (title + actions).
 */
function Card({
  title = null,
  actions = null,
  padded = true,
  style = {},
  bodyStyle = {},
  children,
  ...rest
}) {
  const card = {
    background: "var(--pb-surface-card)",
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius)",
    overflow: "hidden",
    ...style
  };
  const head = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--pb-space-3)",
    padding: "14px 16px",
    borderBottom: "1px solid var(--pb-border)"
  };
  const titleStyle = {
    margin: 0,
    fontFamily: "var(--pb-font-sans)",
    fontSize: "var(--pb-text-h3)",
    fontWeight: "var(--pb-weight-medium)",
    color: "var(--pb-text)",
    whiteSpace: "nowrap"
  };
  const body = {
    padding: padded ? "16px" : 0,
    ...bodyStyle
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: card
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: head
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title) : /*#__PURE__*/React.createElement("span", null), actions), /*#__PURE__*/React.createElement("div", {
    style: body
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter chip — pill, used in the dashboard's decision filter row. Active state
 * uses the soft blue tint with link-blue text. Shares the system `size` scale
 * (sm/md) and the uniform focus ring.
 */
const CHIP_SIZE = {
  sm: {
    minHeight: 28,
    padding: "4px 12px",
    fontSize: 12
  },
  md: {
    minHeight: 32,
    padding: "6px 14px",
    fontSize: 13
  }
};
function Chip({
  active = false,
  size = "md",
  onClick,
  style = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--pb-space-1)",
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    fontWeight: "var(--pb-weight-medium)",
    cursor: "pointer",
    outline: "none",
    transition: "background var(--pb-dur) var(--pb-ease), color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    background: active ? "var(--pb-accent-soft)" : "var(--pb-surface)",
    border: active ? "1px solid transparent" : "1px solid var(--pb-border)",
    color: active ? "var(--pb-link)" : "var(--pb-text-muted)",
    boxShadow: focus ? "var(--pb-ring)" : "none",
    ...(CHIP_SIZE[size] || CHIP_SIZE.md),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    style: base,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bordered text field with a small uppercase label sitting above the input —
 * the Paybots / Google-style "filled field" pattern. Focus draws a blue ring.
 * Shares the system `size` scale (sm/md/lg).
 */
const FIELD_SIZE = {
  sm: {
    padding: "6px 10px",
    fontSize: 14
  },
  md: {
    padding: "8px 12px",
    fontSize: 15
  },
  lg: {
    padding: "10px 14px",
    fontSize: 16
  }
};
function Field({
  label = "",
  hint = "",
  prefix = null,
  type = "text",
  size = "md",
  value,
  onChange,
  placeholder = "",
  style = {},
  ...rest
}) {
  const sz = FIELD_SIZE[size] || FIELD_SIZE.md;
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: sz.padding,
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius-sm)",
    background: "var(--pb-surface)",
    transition: "border-color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    ...style
  };
  const labelStyle = {
    fontSize: "var(--pb-text-eyebrow)",
    fontWeight: "var(--pb-weight-medium)",
    letterSpacing: "var(--pb-tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--pb-text-muted)"
  };
  const inputRow = {
    display: "flex",
    alignItems: "center",
    gap: 6
  };
  const input = {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "var(--pb-text)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: sz.fontSize,
    padding: 0
  };
  const [focused, setFocused] = React.useState(false);
  const focusStyle = focused ? {
    borderColor: "var(--pb-focus-ring)",
    boxShadow: "var(--pb-shadow-focus)"
  } : null;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      ...wrap,
      ...focusStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: inputRow
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pb-text-muted)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: input
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--pb-text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off switch (toggle). Track fills brand blue when on. Shares the system
 * `size` scale (sm/md) and the uniform focus ring. Used for demo flags and
 * spending-rule enables.
 */
const TOGGLE_SIZE = {
  sm: {
    w: 32,
    h: 18,
    knob: 14,
    travel: 14
  },
  md: {
    w: 36,
    h: 20,
    knob: 16,
    travel: 18
  }
};
function Toggle({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  label = "",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = TOGGLE_SIZE[size] || TOGGLE_SIZE.md;
  const track = {
    position: "relative",
    width: s.w,
    height: s.h,
    borderRadius: "var(--pb-radius-pill)",
    background: checked ? "var(--pb-primary)" : "var(--pb-border-strong)",
    transition: "background var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)",
    flex: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    outline: "none",
    boxShadow: focus && !disabled ? "var(--pb-ring)" : "none"
  };
  const knob = {
    position: "absolute",
    top: 2,
    left: checked ? s.travel : 2,
    width: s.knob,
    height: s.knob,
    borderRadius: "50%",
    background: "var(--pb-surface)",
    boxShadow: "var(--pb-shadow-sm)",
    transition: "left var(--pb-dur) var(--pb-ease)"
  };
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--pb-space-3)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: "var(--pb-text-body)",
    color: "var(--pb-text)",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    ...style
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: e => {
      if (!disabled && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dialog — a centered modal over a scrim. Floats (shadow + radius). Optional
 * title, footer actions, and backdrop/Escape close. Render conditionally on `open`.
 */
function Dialog({
  open = true,
  title = "",
  onClose,
  footer = null,
  width = 460,
  children,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const scrim = {
    position: "fixed",
    inset: 0,
    background: "rgba(32,33,36,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 1000
  };
  const panel = {
    width,
    maxWidth: "100%",
    maxHeight: "calc(100vh - 48px)",
    overflow: "auto",
    background: "var(--pb-surface)",
    borderRadius: "var(--pb-radius)",
    boxShadow: "var(--pb-elevate-float)",
    fontFamily: "var(--pb-font-sans)",
    display: "flex",
    flexDirection: "column"
  };
  const head = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "16px 20px",
    borderBottom: "1px solid var(--pb-border)"
  };
  const foot = {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    padding: "14px 20px",
    borderTop: "1px solid var(--pb-border)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: scrim,
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: panel
  }, rest), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: head
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--pb-text-h2)",
      fontWeight: "var(--pb-weight-medium)",
      color: "var(--pb-text)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: "none",
      color: "var(--pb-ink-faint)",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      padding: 2
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      fontSize: "var(--pb-text-body)",
      color: "var(--pb-text)",
      lineHeight: 1.5
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: foot
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — a transient confirmation that floats above the UI. Flat hairline border
 * + float shadow; the colored circular badge carries the tone (no left-border
 * accent). Use for "Payment captured", "Rule saved", etc.
 */
const TONE = {
  success: {
    accent: "var(--pb-decision-approve)",
    glyph: "✓"
  },
  error: {
    accent: "var(--pb-decision-reject)",
    glyph: "✕"
  },
  info: {
    accent: "var(--pb-primary)",
    glyph: "i"
  }
};
function Toast({
  tone = "success",
  title = "",
  message = "",
  onClose,
  style = {},
  ...rest
}) {
  const t = TONE[tone] || TONE.info;
  const wrap = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    minWidth: 280,
    maxWidth: 420,
    padding: "12px 14px",
    background: "var(--pb-surface)",
    border: "1px solid var(--pb-border)",
    borderRadius: "var(--pb-radius)",
    boxShadow: "var(--pb-elevate-float)",
    fontFamily: "var(--pb-font-sans)",
    ...style
  };
  const badge = {
    width: 20,
    height: 20,
    borderRadius: "50%",
    flex: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: t.accent,
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    marginTop: 1
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: badge
  }, t.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--pb-text)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-text-muted)",
      marginTop: title ? 2 : 0,
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: "none",
      color: "var(--pb-ink-faint)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1,
      padding: 2,
      marginTop: -1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — the underlined segmented nav used in the app bar and section headers.
 * Active tab gets link-blue text + a 2px underline; quiet hover otherwise.
 * Controlled: pass `value` and `onChange`.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [focusKey, setFocusKey] = React.useState(null);
  const bar = {
    display: "flex",
    gap: 24,
    borderBottom: "1px solid var(--pb-border)",
    fontFamily: "var(--pb-font-sans)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: bar
  }, rest), tabs.map(t => {
    const key = typeof t === "string" ? t : t.id;
    const label = typeof t === "string" ? t : t.label;
    const badge = typeof t === "string" ? null : t.badge;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      onFocus: () => setFocusKey(key),
      onBlur: () => setFocusKey(null),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        border: 0,
        background: "none",
        cursor: "pointer",
        padding: "12px 4px",
        fontSize: 14,
        fontWeight: "var(--pb-weight-medium)",
        fontFamily: "inherit",
        color: active ? "var(--pb-link)" : "var(--pb-text-muted)",
        outline: "none",
        whiteSpace: "nowrap",
        borderRadius: "var(--pb-radius-sm)",
        boxShadow: focusKey === key ? "var(--pb-ring)" : "none",
        transition: "color var(--pb-dur) var(--pb-ease), box-shadow var(--pb-dur) var(--pb-ease)"
      }
    }, label, badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 16,
        height: 16,
        background: "var(--pb-decision-reject)",
        color: "#fff",
        fontSize: 10,
        fontWeight: 600,
        borderRadius: 999,
        padding: "0 5px",
        lineHeight: 1
      }
    }, badge), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: "var(--pb-link)",
        borderRadius: "1px 1px 0 0"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/underwriting/DecisionDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The decision atom: a small filled dot colored by underwriting decision.
 * `decision` accepts the canonical values and common synonyms.
 */
const DECISION_COLOR = {
  approve: "var(--pb-decision-approve)",
  approved: "var(--pb-decision-approve)",
  auto_approve: "var(--pb-decision-approve)",
  reject: "var(--pb-decision-reject)",
  rejected: "var(--pb-decision-reject)",
  denied: "var(--pb-decision-reject)",
  working: "var(--pb-status-working)",
  offline: "var(--pb-ink-faint)"
};
function DecisionDot({
  decision = "approve",
  size = 9,
  pulse = false,
  style = {},
  ...rest
}) {
  const dot = {
    display: "inline-block",
    width: size,
    height: size,
    borderRadius: "50%",
    flex: "none",
    background: DECISION_COLOR[String(decision).toLowerCase()] || "var(--pb-ink-faint)",
    animation: pulse ? "pb-pulse 1.2s ease-in-out infinite" : "none",
    ...style
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@keyframes pb-pulse{0%,100%{opacity:1}50%{opacity:.35}}"), /*#__PURE__*/React.createElement("span", _extends({
    style: dot
  }, rest)));
}
Object.assign(__ds_scope, { DecisionDot, DECISION_COLOR });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/underwriting/DecisionDot.jsx", error: String((e && e.message) || e) }); }

// components/underwriting/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status pill — a tinted, rounded label for a decision/status. Soft background
 * + saturated text + matching border. The dashboard's ledger & detail use these.
 */
const PILL = {
  approve: {
    bg: "var(--pb-green-bg)",
    fg: "var(--pb-green)",
    bd: "var(--pb-green)",
    label: "Approved"
  },
  reject: {
    bg: "var(--pb-red-bg)",
    fg: "var(--pb-red)",
    bd: "var(--pb-red)",
    label: "Rejected"
  },
  working: {
    bg: "var(--pb-amber-bg)",
    fg: "var(--pb-amber)",
    bd: "var(--pb-amber)",
    label: "Working"
  },
  neutral: {
    bg: "var(--pb-surface-muted)",
    fg: "var(--pb-text-muted)",
    bd: "var(--pb-border)",
    label: ""
  }
};
const ALIAS = {
  approved: "approve",
  auto_approve: "approve",
  captured: "approve",
  denied: "reject",
  rejected: "reject",
  failed: "reject",
  pending: "working",
  in_progress: "working"
};
function StatusPill({
  status = "neutral",
  dot = true,
  size = "md",
  children,
  style = {},
  ...rest
}) {
  const key = ALIAS[String(status).toLowerCase()] || String(status).toLowerCase();
  const t = PILL[key] || PILL.neutral;
  const sz = size === "sm" ? {
    padding: "2px 8px",
    fontSize: 11,
    dotSize: 6
  } : {
    padding: "3px 10px",
    fontSize: 12,
    dotSize: 7
  };
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: sz.padding,
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    fontSize: sz.fontSize,
    fontWeight: 600,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    background: t.bg,
    color: t.fg,
    border: `1px solid ${t.bd}`,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: pill
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.dotSize,
      height: sz.dotSize,
      borderRadius: "50%",
      background: t.fg,
      flex: "none"
    }
  }), children || t.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/underwriting/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/underwriting/TrustBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Underwritten by Paybots" — the consumer-facing trust badge a partner shows
 * its own end users. Ten variants, one prop. The badge is the acquisition lever
 * ("your users never carry the risk") turned into a visible product feature.
 *
 * All variants reference design-system tokens; the bullet ("P") mark is drawn
 * inline so the badge is fully self-contained (no asset dependency).
 */

function PMark({
  size = 16,
  bg = "var(--pb-brand-deep)",
  fg = "#fff",
  radius = 4
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: radius,
      background: bg,
      color: fg,
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "var(--pb-font-sans)",
      fontSize: Math.round(size * 0.66),
      lineHeight: 1,
      textIndent: "-0.07em",
      flex: "none"
    }
  }, "P");
}
const LABEL = "Underwritten by Paybots";
function TrustBadge({
  variant = "pill-soft",
  label = LABEL,
  subline = "You never carry the risk.",
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: "var(--pb-font-sans)",
    boxSizing: "border-box"
  };

  // 1 — Soft pill (system pill language: tinted fill, thin brand border)
  if (variant === "pill-soft") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 14px 6px 8px",
        borderRadius: "var(--pb-radius-pill)",
        background: "var(--pb-accent-soft)",
        border: "1px solid var(--pb-primary)",
        color: "var(--pb-blue-link)",
        fontSize: 13,
        fontWeight: 600,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 18
    }), " ", label);
  }

  // 2 — Solid bar (deep brand blue, reversed)
  if (variant === "solid") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "8px 16px 8px 10px",
        borderRadius: "var(--pb-radius-pill)",
        background: "var(--pb-brand-deep)",
        color: "#fff",
        fontSize: 13,
        fontWeight: 600,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 18,
      bg: "rgba(255,255,255,0.18)",
      fg: "#fff"
    }), " ", label);
  }

  // 3 — Outline pill (transparent, brand border)
  if (variant === "outline") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 14px 6px 8px",
        borderRadius: "var(--pb-radius-pill)",
        background: "transparent",
        border: "1.5px solid var(--pb-primary)",
        color: "var(--pb-primary)",
        fontSize: 13,
        fontWeight: 600,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 18
    }), " ", label);
  }

  // 4 — Ghost / footer (no container, muted)
  if (variant === "ghost") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        color: "var(--pb-text-muted)",
        fontSize: 12.5,
        fontWeight: 500,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 15,
      radius: 3
    }), " ", label);
  }

  // 5 — Stamp / seal (circular certification mark)
  if (variant === "seal") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 92,
        height: 92,
        borderRadius: "50%",
        background: "var(--pb-surface)",
        border: "2px solid var(--pb-brand-deep)",
        color: "var(--pb-brand-deep)",
        textAlign: "center",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 11,
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase"
      }
    }, "Underwritten"), /*#__PURE__*/React.createElement(PMark, {
      size: 30,
      radius: 7
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 12,
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase"
      }
    }, "by Paybots"));
  }

  // 6 — Shield (protection metaphor)
  if (variant === "shield") {
    const shield = "polygon(50% 0, 100% 16%, 100% 60%, 50% 100%, 0 60%, 0 16%)";
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        padding: "8px 16px 8px 10px",
        borderRadius: "var(--pb-radius)",
        background: "var(--pb-surface)",
        border: "1px solid var(--pb-border)",
        boxShadow: "var(--pb-elevate-raised)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 26,
        height: 28,
        clipPath: shield,
        background: "var(--pb-brand-deep)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontStyle: "italic",
        fontSize: 14,
        flex: "none"
      }
    }, "P"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--pb-text)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "var(--pb-text-muted)"
      }
    }, subline)));
  }

  // 7 — Lock / secured
  if (variant === "lock") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 14px",
        borderRadius: "var(--pb-radius-pill)",
        background: "var(--pb-surface-muted)",
        border: "1px solid var(--pb-border)",
        color: "var(--pb-text-muted)",
        fontSize: 12.5,
        fontWeight: 600,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 13,
        color: "var(--pb-brand-deep)"
      }
    }, "\uD83D\uDD12"), "Purchases protected by ", /*#__PURE__*/React.createElement(PMark, {
      size: 14,
      radius: 3
    }), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pb-text)"
      }
    }, "Paybots"));
  }

  // 8 — Verified check (green guarantee)
  if (variant === "verified") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 14px 6px 8px",
        borderRadius: "var(--pb-radius-pill)",
        background: "var(--pb-decision-approve-bg)",
        border: "1px solid var(--pb-decision-approve)",
        color: "var(--pb-decision-approve)",
        fontSize: 13,
        fontWeight: 600,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "var(--pb-decision-approve)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        flex: "none"
      }
    }, "\u2713"), "Every purchase verified by Paybots");
  }

  // 9 — Mono certification tag
  if (variant === "mono") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 12px",
        borderRadius: "var(--pb-radius-sm)",
        background: "var(--pb-surface)",
        border: "1px dashed var(--pb-border-strong)",
        color: "var(--pb-text-muted)",
        fontFamily: "var(--pb-font-mono)",
        fontSize: 11.5,
        letterSpacing: "0.02em",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 14,
      radius: 3
    }), " underwritten \xB7 paybots.com");
  }

  // 10 — Stacked card (headline + benefit subline + mark)
  if (variant === "card") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 18px",
        borderRadius: "var(--pb-radius)",
        background: "var(--pb-surface)",
        border: "1px solid var(--pb-border)",
        maxWidth: 320,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(PMark, {
      size: 32,
      radius: 8
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--pb-text)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--pb-text-muted)"
      }
    }, subline)));
  }
  return null;
}
Object.assign(__ds_scope, { TrustBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/underwriting/TrustBadge.jsx", error: String((e && e.message) || e) }); }

// components/underwriting/VerdictBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VerdictBadge — the decision verdict for the result page / decision-detail
 * header. Shares the StatusPill family look (soft tinted fill, decision-color
 * text, thin colored outline, dot) but bigger and louder, with an optional mono
 * subtitle (a percentage or reason code). `variant` switches to solid/outline.
 */
const V = {
  approve: {
    fg: "var(--pb-decision-approve)",
    bg: "var(--pb-decision-approve-bg)",
    label: "Approved"
  },
  reject: {
    fg: "var(--pb-decision-reject)",
    bg: "var(--pb-decision-reject-bg)",
    label: "Rejected"
  }
};
const ALIAS = {
  approved: "approve",
  auto_approve: "approve",
  denied: "reject",
  rejected: "reject"
};
function VerdictBadge({
  decision = "approve",
  subtitle = "",
  variant = "soft",
  style = {},
  ...rest
}) {
  const key = ALIAS[String(decision).toLowerCase()] || String(decision).toLowerCase();
  const t = V[key] || V.approve;
  let skin;
  if (variant === "solid") skin = {
    background: t.fg,
    color: "#fff",
    border: "1px solid " + t.fg,
    dot: "#fff"
  };else if (variant === "outline") skin = {
    background: "transparent",
    color: t.fg,
    border: "1.5px solid " + t.fg,
    dot: t.fg
  };else skin = {
    background: t.bg,
    color: t.fg,
    border: "1px solid " + t.fg,
    dot: t.fg
  }; // soft (default)

  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "8px 16px",
    borderRadius: "var(--pb-radius-pill)",
    fontFamily: "var(--pb-font-sans)",
    background: skin.background,
    color: skin.color,
    border: skin.border,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: skin.dot,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, t.label), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: variant === "solid" ? 0.9 : 0.75,
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13
    }
  }, "\xB7 ", subtitle));
}
Object.assign(__ds_scope, { VerdictBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/underwriting/VerdictBadge.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Analytics.jsx
try { (() => {
/* Analytics screen — KPI tiles, decisions over time, approve/reject mix,
   by-business breakdown, top rejection reasons, score distribution.
   Charts are plain CSS/SVG (data viz, no images). */
const {
  Card
} = window.PaybotsDesignSystem_e75ed6;
function dailySeries() {
  const out = [];
  let seed = 42;
  const rnd = () => {
    seed = seed * 1103515245 + 12345 & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let i = 0; i < 30; i++) {
    const total = 110 + Math.round(rnd() * 90);
    const reject = Math.round(total * (0.09 + rnd() * 0.11));
    out.push({
      total,
      approve: total - reject,
      reject
    });
  }
  return out;
}
function KpiTile({
  k
}) {
  const valColor = k.tone === "reject" ? "var(--pb-red)" : k.tone === "approve" ? "var(--pb-green)" : "var(--pb-text)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pb-surface)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.PB_STYLE.eyebrow,
      margin: 0,
      marginBottom: 8
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      color: valColor,
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "-0.01em"
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      marginTop: 4
    }
  }, k.sub));
}
function DecisionsOverTime() {
  const data = dailySeries();
  const max = Math.max(...data.map(d => d.total));
  const H = 150;
  return /*#__PURE__*/React.createElement(Card, {
    title: "Decisions over time",
    actions: /*#__PURE__*/React.createElement(Legend, null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 3,
      height: H
    }
  }, data.map((d, i) => {
    const aH = d.approve / max * H;
    const dH = d.reject / max * H;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      title: `${d.total} decisions · ${d.reject} rejected`,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: H
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: dH,
        background: "var(--pb-red)",
        borderRadius: "2px 2px 0 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: aH,
        background: "var(--pb-green)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--pb-ink-faint)",
      marginTop: 8,
      fontFamily: "var(--pb-font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "30 days ago"), /*#__PURE__*/React.createElement("span", null, "today")));
}
function Legend() {
  const dot = c => ({
    width: 8,
    height: 8,
    borderRadius: 2,
    background: c,
    display: "inline-block",
    marginRight: 5
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      fontSize: 12,
      color: "var(--pb-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: dot("var(--pb-green)")
  }), "Approved"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: dot("var(--pb-red)")
  }), "Rejected"));
}
function DecisionMix() {
  const approve = 86;
  const ring = `conic-gradient(var(--pb-green) 0 ${approve}%, var(--pb-red) ${approve}% 100%)`;
  return /*#__PURE__*/React.createElement(Card, {
    title: "Decision mix"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 130,
      height: 130,
      borderRadius: "50%",
      background: ring,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 22,
      background: "var(--pb-surface)",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500
    }
  }, "86%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--pb-ink-2)"
    }
  }, "approved"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MixRow, {
    color: "var(--pb-green)",
    label: "Approved",
    value: "4,143",
    pct: "86.0%"
  }), /*#__PURE__*/React.createElement(MixRow, {
    color: "var(--pb-red)",
    label: "Rejected",
    value: "677",
    pct: "14.0%"
  }))));
}
function MixRow({
  color,
  label,
  value,
  pct
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: color,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      minWidth: 76
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, " \xB7 ", pct));
}
function ByBusiness({
  rows
}) {
  const th = {
    ...window.PB_STYLE.th,
    padding: "10px 14px"
  };
  const td = {
    ...window.PB_STYLE.td,
    padding: "12px 14px",
    verticalAlign: "middle"
  };
  const num = {
    ...td,
    textAlign: "right",
    fontFamily: "var(--pb-font-mono)",
    fontVariantNumeric: "tabular-nums"
  };
  return /*#__PURE__*/React.createElement(Card, {
    title: "By business",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Business"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Decisions"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Approve rate"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Sealed GMV"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Loss ratio"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Fee"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.name
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.name, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pb-ink-2)",
      marginLeft: 6,
      fontSize: 13
    }
  }, "\xB7 ", r.vertical)), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r.decisions.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: num
  }, Math.round(r.approve * 100), "%"), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r.gmv), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r.loss), /*#__PURE__*/React.createElement("td", {
    style: num
  }, r.fee))))));
}
function RejectionReasons({
  reasons
}) {
  const max = Math.max(...reasons.map(r => r.pct));
  return /*#__PURE__*/React.createElement(Card, {
    title: "Top rejection reasons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, reasons.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.code,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 12,
      color: "var(--pb-ink-2)",
      width: 130,
      flex: "none"
    }
  }, r.code), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 10,
      background: "var(--pb-surface-muted)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.pct / max * 100 + "%",
      height: "100%",
      background: "var(--pb-red)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      width: 34,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.pct, "%")))));
}
function Analytics() {
  const a = window.PB_ANALYTICS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Analytics"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)"
    }
  }, "Underwriting performance across the agent businesses \xB7 ", a.window, ". Read-only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14,
      marginBottom: 16
    }
  }, a.kpis.map(k => /*#__PURE__*/React.createElement(KpiTile, {
    key: k.label,
    k: k
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(DecisionsOverTime, null), /*#__PURE__*/React.createElement(DecisionMix, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(ByBusiness, {
    rows: a.byBusiness
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RejectionReasons, {
    reasons: a.reasons
  })));
}
Object.assign(window, {
  Analytics
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Analytics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppBar.jsx
try { (() => {
/* Paybots dashboard app bar — wordmark + nav + business selector + backend status. */
const {
  DecisionDot,
  Tabs
} = window.PaybotsDesignSystem_e75ed6;
const dashStyles = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 90,
    background: "var(--pb-surface)",
    borderBottom: "1px solid var(--pb-border)"
  },
  inner: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    maxWidth: "var(--pb-page-max)",
    margin: "0 auto",
    minHeight: 64,
    padding: "0 24px"
  },
  word: {
    fontFamily: "var(--pb-font-display)",
    fontSize: 21,
    fontWeight: 700,
    letterSpacing: "-0.4px",
    color: "var(--pb-ink)",
    textDecoration: "none",
    flexShrink: 0
  },
  nav: {
    flex: "1 1 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  actions: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    flexShrink: 0
  }
};
const NAV_TABS = [{
  id: "ledger",
  label: "Ledger"
}, {
  id: "analytics",
  label: "Analytics"
}, {
  id: "audit",
  label: "Audit"
}, {
  id: "disputes",
  label: "Disputes",
  badge: 2
}, {
  id: "rules",
  label: "Settings"
}, {
  id: "demo",
  label: "Demo"
}];
function AppBar({
  page,
  onNav,
  business,
  businesses,
  onBusiness,
  online = true
}) {
  const active = page === "detail" ? "ledger" : page;
  return /*#__PURE__*/React.createElement("header", {
    style: dashStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.inner
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("ledger");
    },
    style: dashStyles.word
  }, "Pay", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pb-blue)"
    }
  }, "bots")), /*#__PURE__*/React.createElement("nav", {
    style: dashStyles.nav
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: active,
    onChange: onNav,
    tabs: NAV_TABS,
    style: {
      border: "none",
      gap: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.actions
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      color: "var(--pb-ink-2)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(DecisionDot, {
    decision: online ? "approve" : "offline"
  }), " ", online ? "Backend online" : "Backend offline"))));
}
Object.assign(window, {
  AppBar,
  dashStyles
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AuditLog.jsx
try { (() => {
/* Audit log screen — append-only event stream. Every decision logged as a
   discrete event the moment it happens. Read-only. */
const {
  Card,
  DecisionDot
} = window.PaybotsDesignSystem_e75ed6;
const EVENT_LABEL = {
  "decision.issued": "Decision issued",
  "seal.signed": "Seal signed",
  "checkout.received": "Checkout received",
  "intent.checked": "Intent checked",
  "rules.loaded": "Rules loaded",
  "dispute.opened": "Dispute opened",
  "jwks.rotated": "Signing key rotated"
};
function AuditLog() {
  const rows = window.PB_AUDIT;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Audit log"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)"
    }
  }, "Every underwriting decision, logged as a discrete event the moment it happens. Append-only \xB7 read-only.")), /*#__PURE__*/React.createElement(Card, {
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.seq,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      padding: "12px 16px",
      borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 12,
      color: "var(--pb-ink-faint)",
      width: 52,
      flex: "none",
      paddingTop: 2
    }
  }, "#", r.seq), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      width: 150,
      flex: "none",
      paddingTop: 2,
      whiteSpace: "nowrap"
    }
  }, r.ts), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      flex: "none",
      display: "flex",
      justifyContent: "center",
      paddingTop: 6
    }
  }, r.decision ? /*#__PURE__*/React.createElement(DecisionDot, {
    decision: r.decision
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--pb-border-strong)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, EVENT_LABEL[r.event] || r.event, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 12,
      color: "var(--pb-ink-faint)",
      marginLeft: 8
    }
  }, r.event)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      marginTop: 2
    }
  }, r.detail)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-link)",
      flex: "none",
      paddingTop: 2
    }
  }, r.purchase), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--pb-ink-faint)",
      width: 76,
      flex: "none",
      textAlign: "right",
      paddingTop: 2
    }
  }, r.actor))))));
}
Object.assign(window, {
  AuditLog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AuditLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DecisionDetail.jsx
try { (() => {
/* Decision detail — verdict header, score, evidence (transcript + line items),
   reason codes, and the signed seal. Mirrors the dashboard's detail view. */
const {
  VerdictBadge,
  StatusPill,
  Card,
  Button
} = window.PaybotsDesignSystem_e75ed6;
function DecisionDetail({
  r,
  onBack
}) {
  const eyebrow = window.PB_STYLE.eyebrow;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      color: "var(--pb-link)",
      fontSize: 14,
      cursor: "pointer",
      padding: 0,
      marginBottom: 16,
      fontFamily: "var(--pb-font-sans)"
    }
  }, "\u2190 Ledger"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16,
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(VerdictBadge, {
    decision: r.decision,
    subtitle: Math.round(r.score * 100) + "%"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 500
    }
  }, window.money(r.amount)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)"
    }
  }, r.businessLabel, " \u2192 ", r.merchant, " \xB7 ", r.rail)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", null, r.id), /*#__PURE__*/React.createElement("div", null, r.ts))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Automated decision logic"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, r.reason), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Reason codes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, r.reasonCodes.map(c => /*#__PURE__*/React.createElement("code", {
    key: c,
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 12,
      background: "var(--pb-surface-muted)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius-sm)",
      padding: "2px 7px",
      color: "var(--pb-ink-2)"
    }
  }, c))))), /*#__PURE__*/React.createElement(Card, {
    title: "Line items"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, r.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      padding: "9px 0",
      borderBottom: i < r.items.length - 1 ? "1px solid var(--pb-surface-muted)" : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, it.qty > 1 ? it.qty + "× " : "", it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      fontVariantNumeric: "tabular-nums",
      color: "var(--pb-ink-2)",
      whiteSpace: "nowrap"
    }
  }, window.money(it.price)))))), /*#__PURE__*/React.createElement(Card, {
    title: "Conversation evidence",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, r.transcript.map((m, i) => {
    const isUser = m.role === "user";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: isUser ? "flex-end" : "flex-start",
        maxWidth: "82%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "var(--pb-ink-faint)",
        marginBottom: 3,
        textAlign: isUser ? "right" : "left"
      }
    }, isUser ? "User" : "Agent"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "9px 13px",
        borderRadius: 16,
        fontSize: 14,
        lineHeight: 1.45,
        background: isUser ? "var(--pb-primary)" : "var(--pb-surface)",
        color: isUser ? "#fff" : "var(--pb-text)",
        border: isUser ? "none" : "1px solid var(--pb-border)"
      }
    }, m.content));
  }))), /*#__PURE__*/React.createElement(Seal, {
    r: r
  })));
}
function Seal({
  r
}) {
  const approved = r.decision === "approve";
  return /*#__PURE__*/React.createElement(Card, {
    title: "Underwriting seal"
  }, approved ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "approve"
  }, "Sealed \xB7 backed")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      lineHeight: 1.5
    }
  }, "A signed ES256 attestation rides along with the order. Any party verifies it offline against Paybots' published JWKS \u2014 no call to us in the loop."), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      background: "var(--pb-surface-muted)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius-sm)",
      padding: "12px 14px",
      fontFamily: "var(--pb-font-mono)",
      fontSize: 12,
      lineHeight: 1.6,
      color: "var(--pb-ink-2)",
      overflowX: "auto"
    }
  }, `{
  "underwriter": "paybots.com",
  "version": "v0",
  "purchase_hash": "sha256:9c1f…",
  "decision": "approve",
  "issued_at": "${r.ts.replace(" ", "T")}Z",
  "signature": "eyJhbGci…"
}`)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusPill, {
    status: r.decision
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      lineHeight: 1.5
    }
  }, "No seal issued. Returned as reject \u2014 the business blocks the purchase and explains. No seal, no coverage.")));
}
Object.assign(window, {
  DecisionDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DecisionDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DemoControls.jsx
try { (() => {
/* Demo controls — the operator panel that toggles what each storefront demo
   shows. Mirrors paybots/surfaces/ui/demo.html (demo-flags-ui). Local state. */
const {
  Card,
  Toggle,
  StatusPill
} = window.PaybotsDesignSystem_e75ed6;
const FLAG_GROUPS = [{
  group: "Storefront surfaces",
  flags: [{
    key: "showTryOn",
    label: "Virtual try-on (Studio)",
    sub: "Show the avatar try-on entry on product pages.",
    on: true
  }, {
    key: "showRecs",
    label: "Recommendations",
    sub: "Show 'you may also like' rails.",
    on: true
  }, {
    key: "showExternalCheckout",
    label: "External Stripe checkout",
    sub: "Open a Stripe tab per item instead of in-storefront.",
    on: false
  }]
}, {
  group: "Underwriting behavior",
  flags: [{
    key: "forceReject",
    label: "Force reject next checkout",
    sub: "Demo a rejection regardless of cart.",
    on: false
  }, {
    key: "slowMode",
    label: "Slow-motion underwriting",
    sub: "Stretch the check animation for presentations.",
    on: false
  }, {
    key: "showSeal",
    label: "Show signed seal",
    sub: "Reveal the ES256 attestation on approve.",
    on: true
  }]
}, {
  group: "Operator dashboard",
  flags: [{
    key: "showAnalytics",
    label: "Analytics tab",
    sub: "Expose the analytics screen in the nav.",
    on: true
  }, {
    key: "showDisputes",
    label: "Disputes tab",
    sub: "Expose the disputes screen in the nav.",
    on: true
  }]
}];
function DemoControls() {
  const [state, setState] = React.useState(() => {
    const o = {};
    FLAG_GROUPS.forEach(g => g.flags.forEach(f => o[f.key] = f.on));
    return o;
  });
  const onCount = Object.values(state).filter(Boolean).length;
  const total = Object.keys(state).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Demo controls"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)"
    }
  }, "Toggle what each page shows in the storefront demos. Internal tooling.")), /*#__PURE__*/React.createElement(StatusPill, {
    status: "neutral"
  }, onCount, " / ", total, " on")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, FLAG_GROUPS.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.group,
    title: g.group
  }, g.flags.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.key,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      padding: "13px 0",
      borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 2
    }
  }, f.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      lineHeight: 1.45
    }
  }, f.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: state[f.key],
    onChange: v => setState(p => ({
      ...p,
      [f.key]: v
    }))
  }))))))));
}
Object.assign(window, {
  DemoControls
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DemoControls.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Disputes.jsx
try { (() => {
/* Disputes screen — sealed purchases a buyer later contested. Paybots stands
   behind approved (sealed) transactions; this is where coverage plays out. */
const {
  Card,
  StatusPill
} = window.PaybotsDesignSystem_e75ed6;
const DISPUTE_STATUS = {
  open: {
    tone: "working",
    label: "Open"
  },
  covered: {
    tone: "approve",
    label: "Covered & paid"
  },
  recovered: {
    tone: "approve",
    label: "Recovered"
  },
  upheld: {
    tone: "neutral",
    label: "Upheld — no fault"
  }
};
function Disputes() {
  const d = window.PB_DISPUTES;
  const th = window.PB_STYLE.th;
  const td = {
    ...window.PB_STYLE.td,
    verticalAlign: "top"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Disputes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)"
    }
  }, "Sealed purchases a buyer contested. Paybots stands behind approved transactions \u2014 ", /*#__PURE__*/React.createElement("em", null, "no seal, no coverage"), ". Read-only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14,
      marginBottom: 16
    }
  }, d.summary.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: "var(--pb-surface)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.PB_STYLE.eyebrow,
      margin: 0,
      marginBottom: 8
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums",
      color: s.tone === "danger" ? "var(--pb-decision-reject)" : "var(--pb-text)"
    }
  }, s.value), s.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      marginTop: 4
    }
  }, s.sub)))), /*#__PURE__*/React.createElement(Card, {
    title: "Open & recent disputes",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "When"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Business"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Merchant"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Seal"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, d.rows.map(r => {
    const s = DISPUTE_STATUS[r.status] || DISPUTE_STATUS.open;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: "var(--pb-font-mono)",
        fontSize: 13,
        color: "var(--pb-ink-2)",
        whiteSpace: "nowrap"
      }
    }, r.ts), /*#__PURE__*/React.createElement("td", {
      style: td
    }, r.business, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--pb-ink-2)",
        marginTop: 3,
        maxWidth: 280
      }
    }, r.reason)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        color: "var(--pb-ink-2)"
      }
    }, r.merchant), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: "right",
        fontFamily: "var(--pb-font-mono)",
        fontVariantNumeric: "tabular-nums"
      }
    }, window.money(r.amount)), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        fontFamily: "var(--pb-font-mono)",
        fontSize: 13,
        color: "var(--pb-link)"
      }
    }, r.seal), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(StatusPill, {
      status: s.tone
    }, s.label)));
  })))));
}
Object.assign(window, {
  Disputes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Disputes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Ledger.jsx
try { (() => {
/* Ledger screen — filter chips + the underwriting decisions table. */
const {
  Chip,
  StatusPill
} = window.PaybotsDesignSystem_e75ed6;
const FILTERS = [{
  id: "",
  label: "All"
}, {
  id: "approve",
  label: "Approved"
}, {
  id: "reject",
  label: "Rejected"
}];
function money(n) {
  return "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function Ledger({
  records,
  business,
  onOpen
}) {
  const [filter, setFilter] = React.useState("");
  const rows = records.filter(r => (!business || r.business === business) && (!filter || r.decision === filter));
  const th = window.PB_STYLE.th;
  const td = window.PB_STYLE.td;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Underwriting ledger"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)",
      maxWidth: 640
    }
  }, "Every decision Paybots stood behind \u2014 approved or rejected \u2014 across the agent businesses. Read-only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      margin: "20px 0 16px"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f.id,
    active: filter === f.id,
    onClick: () => setFilter(f.id)
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pb-surface)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "When"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Business"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Merchant"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Amount"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Decision"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement(Row, {
    key: r.id,
    r: r,
    td: td,
    onOpen: onOpen
  })), rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "center",
      color: "var(--pb-ink-2)",
      padding: 32
    },
    colSpan: 6
  }, "No decisions match this filter."))))));
}
function Row({
  r,
  td,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onClick: () => onOpen(r.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: "pointer",
      background: hover ? "var(--pb-surface-muted)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13,
      color: "var(--pb-ink-2)",
      whiteSpace: "nowrap"
    }
  }, r.ts), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.businessLabel), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: "var(--pb-ink-2)"
    }
  }, r.merchant), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--pb-font-mono)",
      fontVariantNumeric: "tabular-nums"
    }
  }, money(r.amount)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: r.decision
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "right",
      color: "var(--pb-ink-faint)"
    }
  }, "\u2192"));
}
Object.assign(window, {
  Ledger,
  money
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Ledger.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Rules.jsx
try { (() => {
/* Checkout settings + spending rules — the consumer-facing controls Paybots
   underwrites against, shown read-only to the operator. Mirrors the storefront
   CheckoutPrefs model: purchase preferences, site policies, notifications, and
   the per-card authorization rules. Uses Card + Toggle + the chip language. */
const {
  Card,
  Toggle,
  PaymentCard,
  Dialog,
  Button
} = window.PaybotsDesignSystem_e75ed6;
const chipBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 11px",
  borderRadius: "var(--pb-radius-pill)",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1.3,
  whiteSpace: "nowrap"
};
const TAG = {
  ...chipBase,
  background: "var(--pb-blue-soft)",
  color: "var(--pb-blue-link)",
  border: "1px solid var(--pb-blue)"
};
const DANGER = {
  ...chipBase,
  background: "var(--pb-red-bg)",
  color: "var(--pb-red)",
  border: "1px solid var(--pb-red)"
};
const CAP = {
  ...chipBase,
  background: "var(--pb-surface-muted)",
  color: "var(--pb-ink)",
  border: "1px solid var(--pb-border)"
};
const TONE = {
  approve: {
    fg: "var(--pb-green)",
    bg: "var(--pb-green-bg)"
  },
  working: {
    fg: "var(--pb-amber)",
    bg: "var(--pb-amber-bg)"
  },
  reject: {
    fg: "var(--pb-red)",
    bg: "var(--pb-red-bg)"
  }
};
function eyebrow(label) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...window.PB_STYLE.eyebrow,
      margin: 0,
      marginBottom: 7
    }
  }, label);
}
function statusChip(status) {
  const map = {
    active: {
      tone: "approve",
      label: "Active"
    },
    frozen: {
      tone: "working",
      label: "Frozen"
    },
    revoked: {
      tone: "reject",
      label: "Revoked"
    }
  };
  const m = map[status] || map.active;
  const t = TONE[m.tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...chipBase,
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      background: t.bg,
      color: t.fg,
      border: "1px solid " + t.fg
    }
  }, m.label);
}

/* ---- Purchase preferences (real toggles, demo-local state) ---- */
function PurchasePrefs({
  toggles
}) {
  const [state, setState] = React.useState(() => Object.fromEntries(toggles.map(t => [t.key, t.on])));
  return /*#__PURE__*/React.createElement(Card, {
    title: "Purchase preferences"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 13,
      color: "var(--pb-ink-2)"
    }
  }, "How Paybots handles repeat orders during chat checkout."), toggles.map((t, i) => {
    const on = state[t.key];
    return /*#__PURE__*/React.createElement("div", {
      key: t.key,
      style: {
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "14px 0",
        borderTop: i === 0 ? "none" : "1px solid var(--pb-surface-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 2
      }
    }, t.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--pb-ink-2)",
        lineHeight: 1.45
      }
    }, t.sub), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: on ? "var(--pb-green)" : "var(--pb-ink-faint)",
        marginTop: 6
      }
    }, on ? t.onText : t.offText)), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(Toggle, {
      checked: on,
      onChange: v => setState(p => ({
        ...p,
        [t.key]: v
      }))
    })));
  }));
}

/* ---- Site policies (always / greylist / blacklist) ---- */
function SitePolicies({
  policies
}) {
  return /*#__PURE__*/React.createElement(Card, {
    title: "Site policies"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13,
      color: "var(--pb-ink-2)"
    }
  }, "Where Paybots searches, which merchants need extra approval, and which are blocked."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, policies.map(p => {
    const t = TONE[p.tone];
    return /*#__PURE__*/React.createElement("div", {
      key: p.list,
      style: {
        border: "1px solid var(--pb-border)",
        borderRadius: "var(--pb-radius)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: t.bg,
        color: t.fg,
        borderBottom: "1px solid " + t.fg,
        padding: "8px 12px",
        fontSize: 13,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: t.fg
      }
    }), p.list), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--pb-ink-2)",
        lineHeight: 1.4,
        marginBottom: 10
      }
    }, p.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, p.sites.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.domain,
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--pb-font-mono)",
        fontSize: 12,
        color: "var(--pb-ink-faint)"
      }
    }, s.domain))))));
  })));
}

/* ---- Notifications ---- */
function Notifications({
  items
}) {
  const [state, setState] = React.useState(() => Object.fromEntries(items.map(n => [n.key, n.on])));
  return /*#__PURE__*/React.createElement(Card, {
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 13,
      color: "var(--pb-ink-2)"
    }
  }, "Which alerts Paybots sends during checkout."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(n => /*#__PURE__*/React.createElement("label", {
    key: n.key,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "9px 0",
      borderTop: "1px solid var(--pb-surface-muted)",
      fontSize: 14,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, n.label), /*#__PURE__*/React.createElement(Toggle, {
    checked: state[n.key],
    onChange: v => setState(p => ({
      ...p,
      [n.key]: v
    }))
  })))));
}

/* ---- Card controls (freeze/unfreeze + allowed categories) ---- */
function CardControls({
  cards
}) {
  const [state, setState] = React.useState(() => Object.fromEntries(cards.map(c => [c.id, c.frozen])));
  const [confirm, setConfirm] = React.useState(null); // card pending freeze

  const doFreeze = () => {
    setState(p => ({
      ...p,
      [confirm.id]: true
    }));
    setConfirm(null);
  };
  return /*#__PURE__*/React.createElement(Card, {
    title: "Card controls"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13,
      color: "var(--pb-ink-2)"
    }
  }, "Freeze or unfreeze your Paybots card, and choose the merchant categories it's allowed to be charged at. Changes take effect at checkout right away."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, cards.map(c => {
    const frozen = state[c.id];
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        border: "1px solid var(--pb-border)",
        borderRadius: "var(--pb-radius)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(PaymentCard, {
      brand: c.brand,
      label: c.label,
      last4: c.last4,
      exp: c.exp,
      status: frozen ? "frozen" : "active"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--pb-ink-2)",
        flex: "none"
      }
    }, frozen ? "Frozen" : "Active", /*#__PURE__*/React.createElement(Toggle, {
      checked: !frozen,
      onChange: v => {
        if (v) setState(p => ({
          ...p,
          [c.id]: false
        }));else setConfirm(c);
      }
    }))), /*#__PURE__*/React.createElement("div", null, eyebrow("Allowed at"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        opacity: frozen ? 0.5 : 1
      }
    }, c.categories.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: TAG
    }, t)))));
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: !!confirm,
    title: "Freeze this card?",
    onClose: () => setConfirm(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "reject",
      onClick: doFreeze
    }, "Freeze card"))
  }, confirm && /*#__PURE__*/React.createElement(React.Fragment, null, "Paybots will reject new purchases on ", /*#__PURE__*/React.createElement("strong", null, confirm.label), " (\xB7\xB7\xB7\xB7 ", confirm.last4, ") until you unfreeze it. In-flight orders are unaffected.")));
}

/* ---- Per-card authorization rules ---- */
function RuleCard({
  c
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      fontFamily: "var(--pb-font-mono)"
    }
  }, c.scope)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, statusChip(c.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--pb-ink-faint)",
      fontFamily: "var(--pb-font-mono)"
    }
  }, "v", c.version))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, eyebrow("Caps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: CAP
  }, "Per purchase\xA0", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--pb-font-mono)"
    }
  }, c.perPurchase)), /*#__PURE__*/React.createElement("span", {
    style: CAP
  }, "Daily\xA0", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--pb-font-mono)"
    }
  }, c.daily)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, eyebrow("Allowed categories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, c.categories.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: TAG
  }, t)))), c.blocked.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, eyebrow("Blocked"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, c.blocked.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: DANGER
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, eyebrow("Substitution policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--pb-text)"
    }
  }, c.substitution)));
}
function Rules() {
  const s = window.PB_SETTINGS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 24,
      fontWeight: 500
    }
  }, "Checkout settings"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--pb-ink-2)"
    }
  }, "The preferences and rules Paybots underwrites against for ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "var(--pb-font-mono)",
      fontSize: 13
    }
  }, s.user), ". This mirrors the consumer's storefront settings \u2014 card controls below are interactive.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PurchasePrefs, {
    toggles: s.toggles
  }), /*#__PURE__*/React.createElement(CardControls, {
    cards: s.cardControls
  }), /*#__PURE__*/React.createElement(SitePolicies, {
    policies: s.sitePolicies
  }), /*#__PURE__*/React.createElement(Notifications, {
    items: s.notifications
  }), /*#__PURE__*/React.createElement("div", null, eyebrow("Per-card authorization rules"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, s.cards.map(c => /*#__PURE__*/React.createElement(RuleCard, {
    key: c.label,
    c: c
  }))))));
}
Object.assign(window, {
  Rules
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Rules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/analytics-data.js
try { (() => {
/* Aggregate metrics for the Paybots analytics screen.
   Numbers are illustrative and consistent with the loss-model framing
   (16–25% loss ratios vs the 40–60% insurance norm, ~3% fee). */
window.PB_ANALYTICS = {
  window: "Last 30 days",
  kpis: [{
    label: "Decisions",
    value: "4,820",
    sub: "+12% vs prior 30 days"
  }, {
    label: "Approve rate",
    value: "86.0%",
    sub: "4,143 approved",
    tone: "approve"
  }, {
    label: "Reject rate",
    value: "14.0%",
    sub: "677 rejected",
    tone: "reject"
  }, {
    label: "Sealed GMV",
    value: "$1.24M",
    sub: "underwritten volume"
  }, {
    label: "Covered loss ratio",
    value: "18%",
    sub: "vs 40–60% norm"
  }],
  byBusiness: [{
    name: "Magnum Opus",
    vertical: "clothing",
    decisions: 3120,
    approve: 0.88,
    gmv: "$612K",
    loss: "16%",
    fee: "3.0%"
  }, {
    name: "bpjl",
    vertical: "procurement",
    decisions: 1700,
    approve: 0.82,
    gmv: "$628K",
    loss: "21%",
    fee: "2.2%"
  }],
  reasons: [{
    code: "item_mismatch",
    pct: 41
  }, {
    code: "bad_substitution",
    pct: 22
  }, {
    code: "out_of_policy",
    pct: 15
  }, {
    code: "duplicate_order",
    pct: 13
  }, {
    code: "price_drift",
    pct: 9
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/analytics-data.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/audit-data.js
try { (() => {
/* Append-only audit log — every underwriting decision logged as a discrete event
   the moment it happens. Mirrors paybots/surfaces/ui/audit.html. */
window.PB_AUDIT = [{
  seq: 1042,
  ts: "2026-06-09 14:22:07",
  event: "decision.issued",
  decision: "approve",
  actor: "evaluator",
  purchase: "uw_8f3a2c91",
  detail: "auto_approve · seal issued"
}, {
  seq: 1041,
  ts: "2026-06-09 14:22:06",
  event: "seal.signed",
  decision: null,
  actor: "signer",
  purchase: "uw_8f3a2c91",
  detail: "ES256 · kid pb_2026_06 · sha256:9c1f…"
}, {
  seq: 1040,
  ts: "2026-06-09 14:22:05",
  event: "checkout.received",
  decision: null,
  actor: "gateway",
  purchase: "uw_8f3a2c91",
  detail: "Magnum Opus → Threadline · $1,284.00 · UCP"
}, {
  seq: 1039,
  ts: "2026-06-09 13:31:55",
  event: "decision.issued",
  decision: "reject",
  actor: "evaluator",
  purchase: "uw_2c9a6f13",
  detail: "reject · item_mismatch"
}, {
  seq: 1038,
  ts: "2026-06-09 13:31:54",
  event: "intent.checked",
  decision: null,
  actor: "evaluator",
  purchase: "uw_2c9a6f13",
  detail: "48-port requested, 24-port in cart"
}, {
  seq: 1037,
  ts: "2026-06-09 13:31:53",
  event: "checkout.received",
  decision: null,
  actor: "gateway",
  purchase: "uw_2c9a6f13",
  detail: "bpjl → Boltworth · $4,920.00 · Stripe"
}, {
  seq: 1036,
  ts: "2026-06-09 12:58:20",
  event: "decision.issued",
  decision: "reject",
  actor: "evaluator",
  purchase: "uw_9b2e7c55",
  detail: "reject · bad_substitution"
}, {
  seq: 1035,
  ts: "2026-06-09 12:05:11",
  event: "decision.issued",
  decision: "approve",
  actor: "evaluator",
  purchase: "uw_a14d8e22",
  detail: "auto_approve · seal issued"
}, {
  seq: 1034,
  ts: "2026-06-09 12:05:10",
  event: "rules.loaded",
  decision: null,
  actor: "system",
  purchase: "uw_a14d8e22",
  detail: "Default card · v7 · per-purchase $500"
}, {
  seq: 1033,
  ts: "2026-06-09 11:39:02",
  event: "decision.issued",
  decision: "approve",
  actor: "evaluator",
  purchase: "uw_3d5f9a08",
  detail: "auto_approve · seal issued"
}, {
  seq: 1032,
  ts: "2026-06-09 10:58:44",
  event: "decision.issued",
  decision: "reject",
  actor: "evaluator",
  purchase: "uw_7f1c0d62",
  detail: "reject · duplicate_order"
}, {
  seq: 1031,
  ts: "2026-06-09 10:58:43",
  event: "dispute.opened",
  decision: null,
  actor: "buyer",
  purchase: "uw_7f1c0d62",
  detail: "dsp_4468 · duplicate delivery claimed"
}, {
  seq: 1030,
  ts: "2026-06-09 09:14:00",
  event: "jwks.rotated",
  decision: null,
  actor: "system",
  purchase: "—",
  detail: "Signing key rotated · kid pb_2026_06"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/audit-data.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.js
try { (() => {
/* Seed underwriting records for the Paybots audit dashboard UI kit.
   Two agent businesses → their merchants. Two decisions: approve / reject. */
window.PB_DATA = {
  businesses: [{
    id: "",
    label: "All businesses"
  }, {
    id: "magnum",
    label: "Magnum Opus · clothing"
  }, {
    id: "bpjl",
    label: "bpjl · procurement"
  }],
  records: [{
    id: "uw_6e0b4471",
    ts: "2026-06-09 14:22",
    business: "magnum",
    businessLabel: "Magnum Opus",
    merchant: "Threadline",
    rail: "UCP",
    amount: 96.0,
    decision: "approve",
    score: 0.93,
    reason: "Single item, matches the request and sits within the spending rules.",
    reasonCodes: ["formation_ok", "execution_ok"],
    items: [{
      name: "Selvedge denim — Indigo, 32",
      qty: 1,
      price: 96.0
    }],
    transcript: [{
      role: "user",
      content: "Get me the indigo selvedge jeans in a 32."
    }, {
      role: "agent",
      content: "Indigo selvedge, 32. $96. Done."
    }]
  }, {
    id: "uw_2c9a6f13",
    ts: "2026-06-09 13:31",
    business: "bpjl",
    businessLabel: "bpjl",
    merchant: "Boltworth",
    rail: "Stripe",
    amount: 4920.0,
    decision: "reject",
    score: 0.18,
    reason: "Agent selected a 24-port switch; the user explicitly asked for 48-port. Wrong item.",
    reasonCodes: ["item_mismatch"],
    items: [{
      name: "Boltworth BX-24 managed switch (24-port)",
      qty: 4,
      price: 1230.0
    }],
    transcript: [{
      role: "user",
      content: "Order four 48-port managed switches for the new rack."
    }, {
      role: "agent",
      content: "Ordering 4× Boltworth BX-24 managed switches, $1,230 each."
    }]
  }, {
    id: "uw_9b2e7c55",
    ts: "2026-06-09 12:58",
    business: "magnum",
    businessLabel: "Magnum Opus",
    merchant: "Threadline",
    rail: "UCP",
    amount: 312.0,
    decision: "reject",
    score: 0.21,
    reason: "Agent substituted a different color and cut after the chosen item sold out — outside the user's stated policy.",
    reasonCodes: ["item_mismatch", "bad_substitution"],
    items: [{
      name: "Wool topcoat — Camel, L",
      qty: 1,
      price: 312.0
    }],
    transcript: [{
      role: "user",
      content: "The charcoal wool topcoat in medium — only that one."
    }, {
      role: "agent",
      content: "Charcoal medium sold out; ordered the camel in large instead."
    }]
  }, {
    id: "uw_a14d8e22",
    ts: "2026-06-09 12:05",
    business: "magnum",
    businessLabel: "Magnum Opus",
    merchant: "Threadline",
    rail: "UCP",
    amount: 148.0,
    decision: "approve",
    score: 0.95,
    reason: "Exact item requested, in stock, within budget.",
    reasonCodes: ["formation_ok", "execution_ok"],
    items: [{
      name: "Merino crew sweater — Slate, M",
      qty: 1,
      price: 148.0
    }],
    transcript: [{
      role: "user",
      content: "Slate merino crew, medium."
    }, {
      role: "agent",
      content: "Slate merino crew, M, $148. Booking it."
    }]
  }, {
    id: "uw_3d5f9a08",
    ts: "2026-06-09 11:39",
    business: "bpjl",
    businessLabel: "bpjl",
    merchant: "Boltworth",
    rail: "Stripe",
    amount: 1035.0,
    decision: "approve",
    score: 0.88,
    reason: "Reorder matches the prior approved SKU and quantity, price unchanged.",
    reasonCodes: ["formation_ok", "execution_ok"],
    items: [{
      name: "Standing desk frame — Black",
      qty: 5,
      price: 207.0
    }],
    transcript: [{
      role: "user",
      content: "Reorder 5 of the black standing desk frames."
    }, {
      role: "agent",
      content: "5× black standing desk frame at $207. Total $1,035."
    }]
  }, {
    id: "uw_7f1c0d62",
    ts: "2026-06-09 10:58",
    business: "bpjl",
    businessLabel: "bpjl",
    merchant: "Boltworth",
    rail: "Stripe",
    amount: 880.0,
    decision: "reject",
    score: 0.24,
    reason: "Duplicate of an order placed 6 minutes earlier for the same SKU and quantity.",
    reasonCodes: ["duplicate_order"],
    items: [{
      name: "USB-C dock — 11-port",
      qty: 8,
      price: 110.0
    }],
    transcript: [{
      role: "user",
      content: "Did the dock order go through? Order them if not."
    }, {
      role: "agent",
      content: "Placing 8× USB-C dock at $110."
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/disputes-rules-data.js
try { (() => {
/* Disputes data for the dashboard kit.
   Disputes apply only to SEALED (approved) purchases — Paybots stands behind those. */
window.PB_DISPUTES = {
  summary: [{
    label: "Open disputes",
    value: "2",
    tone: "danger"
  }, {
    label: "Disputed amount",
    value: "$1,360"
  }, {
    label: "Disputable txns",
    value: "8"
  }, {
    label: "Resolved",
    value: "0"
  }],
  rows: [{
    id: "dsp_4471",
    ts: "2026-06-08",
    business: "Magnum Opus",
    merchant: "Threadline",
    amount: 312.0,
    seal: "uw_a14d8e22",
    status: "open",
    reason: "Buyer says the substituted coat is the wrong color."
  }, {
    id: "dsp_4468",
    ts: "2026-06-07",
    business: "bpjl",
    merchant: "Boltworth",
    amount: 1180.0,
    seal: "uw_3d5f9a08",
    status: "open",
    reason: "Duplicate delivery claimed."
  }, {
    id: "dsp_4455",
    ts: "2026-06-05",
    business: "Magnum Opus",
    merchant: "Threadline",
    amount: 148.0,
    seal: "uw_5b7e1d40",
    status: "covered",
    reason: "Item not as described — covered, buyer made whole."
  }, {
    id: "dsp_4441",
    ts: "2026-06-03",
    business: "bpjl",
    merchant: "Boltworth",
    amount: 880.0,
    seal: "uw_7f1c0d62",
    status: "recovered",
    reason: "Returned to merchant; loss recovered."
  }, {
    id: "dsp_4430",
    ts: "2026-06-01",
    business: "Magnum Opus",
    merchant: "Threadline",
    amount: 96.0,
    seal: "uw_6e0b4471",
    status: "upheld",
    reason: "Seal verified against chat — no fault, dispute closed."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/disputes-rules-data.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/settings-data.js
try { (() => {
/* Checkout settings + spending rules data — mirrors the storefront's real
   CheckoutPrefs model (site lists, notifications, purchase-preference toggles)
   plus the per-card authorization rules Paybots underwrites against. */
window.PB_SETTINGS = {
  user: "usr_demo_alice",
  toggles: [{
    key: "autoApproveSimilar",
    on: true,
    title: "Auto-approve similar purchases",
    sub: "When Paybots recognizes a repeat order you've approved before, skip the confirmation step and check out automatically.",
    onText: "Auto-approve is on — similar repeat orders go straight to Paybots checkout.",
    offText: "Auto-approve is off — you'll be asked before repeat orders are approved."
  }, {
    key: "enrichEnabled",
    on: false,
    title: "Enrich",
    sub: "When Paybots denies a checkout, automatically apply backend guidance and retry once with the corrected cart (best on orders under $500).",
    onText: "Enrich is on — rejected checkouts self-correct and retry once.",
    offText: "Enrich is off — rejections stop at the first Paybots decision."
  }, {
    key: "externalCheckoutEnabled",
    on: true,
    title: "External checkout",
    sub: "When off, paying outside Paybots checks out on the storefront merchant in one page instead of opening separate Stripe tabs per item.",
    onText: "External checkout is on — each item opens its own Stripe tab.",
    offText: "External checkout is off — checkout stays on the storefront merchant."
  }],
  sitePolicies: [{
    list: "Always search",
    tone: "approve",
    desc: "Paybots prioritizes these merchants and may purchase without extra checks.",
    sites: [{
      domain: "magnumopus.com",
      label: "Magnum Opus"
    }, {
      domain: "bpjla.com",
      label: "BPJLA Procurement"
    }, {
      domain: "nordstrom.com",
      label: "Nordstrom"
    }, {
      domain: "mcmaster.com",
      label: "McMaster-Carr"
    }]
  }, {
    list: "Greylist",
    tone: "working",
    desc: "Paybots can buy here but always asks before checkout.",
    sites: [{
      domain: "amazon.com",
      label: "Amazon"
    }, {
      domain: "kayak.com",
      label: "Kayak"
    }]
  }, {
    list: "Blacklist",
    tone: "reject",
    desc: "Paybots will never purchase from these sites. Blocked attempts trigger an alert.",
    sites: [{
      domain: "unverified-deals.example",
      label: "Unverified Deals"
    }]
  }],
  notifications: [{
    key: "purchaseApproved",
    label: "Purchase approved",
    on: true
  }, {
    key: "purchaseRejected",
    label: "Purchase rejected",
    on: true
  }, {
    key: "reviewRequired",
    label: "Ask User holds",
    on: true
  }, {
    key: "similarPurchase",
    label: "Similar purchase prompts",
    on: true
  }, {
    key: "coverageReminder",
    label: "Coverage reminders",
    on: false
  }],
  cardControls: [{
    id: "4921",
    brand: "visa",
    label: "Travel card",
    last4: "4921",
    exp: "08/27",
    frozen: false,
    categories: ["flights", "hotels", "cars", "experiences"]
  }, {
    id: "2045",
    brand: "mastercard",
    label: "Default",
    last4: "2045",
    exp: "03/28",
    frozen: false,
    categories: ["apparel", "travel", "office"]
  }, {
    id: "8810",
    brand: "amex",
    label: "Procurement card",
    last4: "8810",
    exp: "11/26",
    frozen: true,
    categories: ["networking", "furniture", "supplies"]
  }],
  cards: [{
    label: "Default",
    scope: "(user, business) default",
    status: "active",
    perPurchase: "$500",
    daily: "$1,500",
    categories: ["apparel", "travel", "office"],
    blocked: ["electronics > $1,000"],
    substitution: "Same color family, else ask",
    version: 7
  }, {
    label: "Travel card",
    scope: "card ···· 4921",
    status: "active",
    perPurchase: "$3,000",
    daily: "$5,000",
    categories: ["flights", "hotels", "experiences"],
    blocked: [],
    substitution: "Ask before any change",
    version: 3
  }, {
    label: "Procurement card",
    scope: "card ···· 8810",
    status: "frozen",
    perPurchase: "$10,000",
    daily: "$25,000",
    categories: ["networking", "furniture", "supplies"],
    blocked: ["duplicate orders"],
    substitution: "Never substitute",
    version: 12
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/settings-data.js", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/theme.js
try { (() => {
/* Shared dashboard style atoms — defined once, used by every screen.
   Keeps the eyebrow label and table cells on one voice (RISD: define once). */
window.PB_STYLE = {
  // Eyebrow / section label — single source of truth (matches --pb-text-eyebrow / --pb-tracking-eyebrow).
  eyebrow: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--pb-ink-2)",
    fontWeight: 500,
    margin: "0 0 8px"
  },
  // Table header cell.
  th: {
    textAlign: "left",
    padding: "12px 16px",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--pb-ink-2)",
    fontWeight: 500,
    background: "var(--pb-surface-muted)",
    borderBottom: "1px solid var(--pb-border)"
  },
  // Table body cell.
  td: {
    padding: "12px 16px",
    fontSize: 14,
    borderBottom: "1px solid var(--pb-border)",
    verticalAlign: "middle"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/theme.js", error: String((e && e.message) || e) }); }

// ui_kits/decision/ResultPage.jsx
try { (() => {
/* Consumer-facing underwriting result, redesigned per the approved mock, with a
   live "checkout with Paybots" sequence: the three checks resolve one-by-one
   (Price -> Catalog -> Intent), then the verdict, item and receipt fade up.
   Motion stays quiet per the system: fades + the working pulse, no bounce. */
const {
  StatusPill
} = window.PaybotsDesignSystem_e75ed6;
const PAPER = "var(--pb-surface)";
const PAPER_BORDER = "var(--pb-border)";
const SCENARIOS = {
  approve: {
    pill: "approve",
    verdict: "Approved",
    verdictColor: "var(--pb-green)",
    badge: {
      label: "Purchased",
      tone: "approve"
    },
    decisionBody: "Paybots approved the purchase — your agent completed the order.",
    callout: {
      kind: "info",
      title: "Substitution verified by Paybots",
      text: "Rodeo Champ Socks (Navy) wasn’t available, so your agent substituted Rodeo Champ Socks (Black) within the flexibility you gave it — Paybots verified the swap against your chat and approved."
    },
    request: {
      time: "11:15 AM",
      text: "Order a pair of Rodeo Champ socks in navy — if navy’s out, any dark color works."
    },
    checks: [{
      n: 1,
      title: "Price",
      desc: "Checked 5 rules — within your transaction limits.",
      link: "5 rules",
      pass: true
    }, {
      n: 2,
      title: "Catalog",
      desc: "Double-checked the product exists and is in inventory.",
      pass: true
    }, {
      n: 3,
      title: "Intent",
      desc: "Triple-checked the swap matches what you asked for.",
      pass: true
    }],
    banner: {
      label: "Approved"
    },
    product: {
      eyebrow: "Rodeo Champ Socks (Black)",
      name: "Rodeo Champ Socks",
      meta: "Accessories · Size ONE SIZE",
      match: "Matched your search for rodeo, champ, socks · size ONE SIZE."
    },
    summary: {
      rows: [["Subtotal", "$25"], ["Taxes & fees", "Included"]],
      total: "$25"
    }
  },
  reject: {
    pill: "reject",
    verdict: "Rejected",
    verdictColor: "var(--pb-red)",
    badge: {
      label: "Not charged",
      tone: "reject"
    },
    decisionBody: "Paybots blocked the purchase — your agent picked the wrong item. Nothing was charged.",
    callout: {
      kind: "reject",
      title: "Why Paybots rejected this",
      text: "You asked for 48-port switches; the agent selected the 24-port model. That’s the wrong item, so Paybots rejected it before any charge."
    },
    request: {
      time: "11:15 AM",
      text: "Order four 48-port managed switches for the new rack."
    },
    checks: [{
      n: 1,
      title: "Price",
      desc: "Checked 5 rules — within your transaction limits.",
      link: "5 rules",
      pass: true
    }, {
      n: 2,
      title: "Catalog",
      desc: "Double-checked the product exists and is in inventory.",
      pass: true
    }, {
      n: 3,
      title: "Intent",
      desc: "The agent ordered a 24-port switch — you asked for 48-port.",
      pass: false
    }],
    banner: {
      label: "Rejected"
    },
    product: {
      eyebrow: "Boltworth BX-24 (24-port)",
      name: "Boltworth BX-24 managed switch",
      meta: "Networking · Qty 4",
      match: "Does not match your request for 48-port switches.",
      blocked: true
    },
    summary: {
      rows: [["Subtotal", "$4,920"], ["Status", "Blocked — not charged"]],
      total: "$0.00"
    }
  }
};
const KEYFRAMES = `
@keyframes pb-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes pb-pulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
@keyframes pb-pop { 0% { transform: scale(.6); opacity: .4; } 100% { transform: scale(1); opacity: 1; } }
@keyframes pb-spin { to { transform: rotate(360deg); } }
.pb-reveal { animation: pb-rise .4s var(--pb-ease, cubic-bezier(.2,0,0,1)) both; }
`;
function rise(delay) {
  return {
    animation: `pb-rise .4s var(--pb-ease, cubic-bezier(.2,0,0,1)) both`,
    animationDelay: (delay || 0) + "ms"
  };
}
function PaybotsDecisionCard({
  s,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: PAPER,
      border: "1px solid " + PAPER_BORDER,
      borderRadius: "var(--pb-radius)",
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--pb-ink-2)",
      marginBottom: 4,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/paybots-mark.svg",
    width: "13",
    height: "13",
    alt: "",
    style: {
      borderRadius: 3
    }
  }), " Paybots decision"), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: s.verdictColor,
      letterSpacing: "-0.01em"
    }
  }, s.verdict) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: "var(--pb-amber)",
      letterSpacing: "-0.01em",
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "var(--pb-amber)",
      animation: "pb-pulse 1.1s ease-in-out infinite"
    }
  }), "Underwriting\u2026")), done && /*#__PURE__*/React.createElement("span", {
    style: {
      ...rise(0)
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: s.badge.tone
  }, s.badge.label))), done && /*#__PURE__*/React.createElement("div", {
    className: "pb-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--pb-text)"
    }
  }, s.decisionBody), /*#__PURE__*/React.createElement(Callout, {
    c: s.callout
  })));
}
function Callout({
  c
}) {
  const info = c.kind === "info";
  const bg = info ? "var(--pb-blue-soft)" : "var(--pb-red-bg)";
  const accent = info ? "var(--pb-blue-hover)" : "var(--pb-red)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: bg,
      border: "1px solid " + accent,
      borderRadius: "var(--pb-radius-sm)",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: accent,
      marginBottom: 4
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--pb-text)"
    }
  }, c.text));
}
function RequestCard({
  r
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pb-surface-hover)",
      borderRadius: "var(--pb-radius)",
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "Requested ", r.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontStyle: "italic",
      lineHeight: 1.45,
      color: "var(--pb-text)"
    }
  }, r.text));
}
function CheckRow({
  c,
  status
}) {
  const dim = status === "pending";
  const working = status === "working";
  const fail = status === "fail";
  const pass = status === "pass";
  // Speak the decision-color language: passed = soft green + thin green outline,
  // failed = soft red + thin red outline, working = amber, pending = neutral.
  const circleBg = fail ? "var(--pb-red-bg)" : working ? "var(--pb-amber-bg)" : pass ? "var(--pb-green-bg)" : "var(--pb-surface-muted)";
  const circleBorder = fail ? "1px solid var(--pb-red)" : pass ? "1px solid var(--pb-green)" : "1px solid transparent";
  const numColor = fail ? "var(--pb-red)" : pass ? "var(--pb-green)" : "var(--pb-ink)";
  let glyph;
  if (working) glyph = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--pb-amber)",
      animation: "pb-pulse 1.1s ease-in-out infinite"
    }
  });else if (fail) glyph = /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "pb-pop .25s var(--pb-ease) both"
    }
  }, "\u2715");else if (pass) glyph = /*#__PURE__*/React.createElement("span", {
    style: {
      animation: "pb-pop .25s var(--pb-ease) both"
    }
  }, "\u2713");else glyph = c.n;
  const descColor = working ? "var(--pb-amber)" : fail ? "var(--pb-red)" : "var(--pb-ink-2)";
  const descText = working ? "Checking…" : c.desc;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: "var(--pb-surface)",
      border: "1px solid var(--pb-border)",
      borderRadius: "var(--pb-radius)",
      padding: "16px 18px",
      opacity: dim ? 0.45 : 1,
      transition: "opacity .3s var(--pb-ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: circleBg,
      border: circleBorder,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontSize: 17,
      fontWeight: 600,
      color: numColor,
      transition: "background .3s var(--pb-ease), border-color .3s var(--pb-ease)"
    }
  }, glyph), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 2
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: descColor,
      lineHeight: 1.4,
      transition: "color .3s var(--pb-ease)"
    }
  }, !working && c.link ? /*#__PURE__*/React.createElement(React.Fragment, null, "Checked ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "underline"
    }
  }, c.link), c.desc.replace("Checked " + c.link, "")) : descText)));
}
function ApprovedProduct({
  s
}) {
  const isApprove = s.pill === "approve";
  const bannerBg = isApprove ? "var(--pb-green-bg)" : "var(--pb-red-bg)";
  const bannerFg = isApprove ? "var(--pb-green)" : "var(--pb-red)";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bannerBg,
      color: bannerFg,
      border: "1px solid " + bannerFg,
      borderBottom: "none",
      borderRadius: "var(--pb-radius) var(--pb-radius) 0 0",
      padding: "14px 20px",
      fontSize: 18,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, isApprove ? "✓" : "✕"), " ", s.banner.label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: PAPER,
      border: "1px solid " + PAPER_BORDER,
      borderTop: "none",
      borderRadius: "0 0 var(--pb-radius) var(--pb-radius)",
      padding: 18,
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "var(--pb-radius-sm)",
      background: "var(--pb-surface-muted)",
      border: "1px solid " + PAPER_BORDER,
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#b9a987",
      fontSize: 10,
      textAlign: "center",
      opacity: s.product.blocked ? 0.55 : 1
    }
  }, "photo"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--pb-ink-2)",
      marginBottom: 3
    }
  }, s.product.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 2
    }
  }, s.product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--pb-ink-2)",
      marginBottom: 6
    }
  }, s.product.meta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: s.product.blocked ? "var(--pb-red)" : "var(--pb-ink-2)",
      lineHeight: 1.4
    }
  }, s.product.match))));
}
function SummaryCard({
  sm
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: PAPER,
      border: "1px solid " + PAPER_BORDER,
      borderRadius: "var(--pb-radius)",
      padding: "18px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "Summary"), sm.rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      padding: "6px 0",
      color: "var(--pb-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, r[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 16,
      fontWeight: 600,
      padding: "12px 0 0",
      marginTop: 6,
      borderTop: "1px solid " + PAPER_BORDER
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, sm.total)));
}
function ResultPage({
  which,
  onPick
}) {
  const s = SCENARIOS[which];
  const [statuses, setStatuses] = React.useState(s.checks.map(() => "pending"));
  const [done, setDone] = React.useState(false);
  const [runKey, setRunKey] = React.useState(0);
  React.useEffect(() => {
    const checks = s.checks;
    const firstFail = checks.findIndex(c => !c.pass);
    const lastIdx = firstFail === -1 ? checks.length - 1 : firstFail;
    setStatuses(checks.map(() => "pending"));
    setDone(false);
    const timers = [];
    const base = 450,
      per = 820,
      work = 620;
    for (let i = 0; i <= lastIdx; i++) {
      timers.push(setTimeout(() => setStatuses(p => p.map((st, j) => j === i ? "working" : st)), base + i * per));
      timers.push(setTimeout(() => setStatuses(p => p.map((st, j) => j === i ? checks[i].pass ? "pass" : "fail" : st)), base + i * per + work));
    }
    timers.push(setTimeout(() => setDone(true), base + lastIdx * per + work + 480));
    return () => timers.forEach(clearTimeout);
  }, [which, runKey]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      margin: "0 auto",
      padding: "0 24px 80px"
    }
  }, /*#__PURE__*/React.createElement("style", null, KEYFRAMES), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RequestCard, {
    r: s.request
  }), /*#__PURE__*/React.createElement(PaybotsDecisionCard, {
    s: s,
    done: done
  }), s.checks.map((c, i) => /*#__PURE__*/React.createElement(CheckRow, {
    key: c.n,
    c: c,
    status: statuses[i]
  })), done && /*#__PURE__*/React.createElement("div", {
    className: "pb-reveal",
    style: rise(60)
  }, /*#__PURE__*/React.createElement(ApprovedProduct, {
    s: s
  })), done && /*#__PURE__*/React.createElement("div", {
    style: rise(160)
  }, /*#__PURE__*/React.createElement(SummaryCard, {
    sm: s.summary
  }))));
}
Object.assign(window, {
  ResultPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/decision/ResultPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/adoption-terminal.js
try { (() => {
(function () {
  const terminal = document.getElementById('adoption-terminal');
  const output = document.getElementById('terminal-output');
  const cursor = document.getElementById('terminal-cursor');
  if (!terminal || !output || !cursor) return;
  const STEPS = [{
    cmd: 'paybots mode confirm',
    lines: ['mode: confirm', 'every purchase → user tap required']
  }, {
    cmd: 'paybots rules set --cap=500 --category=travel',
    lines: ['rules: active', 'caps · merchants · categories enforced']
  }, {
    cmd: 'paybots mode autonomous',
    lines: ['mode: autonomous', 'intent-only purchases · checked & backed']
  }, {
    cmd: '',
    lines: ['status: ready', 'agent cleared for production traffic'],
    success: true
  }];
  const TYPE_MS = 42;
  const LINE_PAUSE_MS = 520;
  const STEP_PAUSE_MS = 900;
  const LOOP_PAUSE_MS = 2400;
  let running = false;
  let started = false;
  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function appendLine(className, text) {
    const line = document.createElement('div');
    line.className = 'terminal-line ' + className;
    line.textContent = text;
    output.appendChild(line);
    return line;
  }
  function renderStatic() {
    output.innerHTML = '';
    STEPS.forEach(function (step) {
      if (step.cmd) {
        appendLine('terminal-line--cmd', '$ ' + step.cmd);
      }
      step.lines.forEach(function (text) {
        appendLine(step.success ? 'terminal-line--success' : 'terminal-line--out', step.success ? '✓ ' + text : '  ' + text);
      });
      appendLine('terminal-line--spacer', '');
    });
    cursor.hidden = true;
  }
  async function typeText(lineEl, text, ms) {
    for (let i = 0; i < text.length; i++) {
      lineEl.textContent += text[i];
      await sleep(ms);
    }
  }
  async function runSequence() {
    if (running) return;
    running = true;
    cursor.hidden = false;
    while (true) {
      output.innerHTML = '';
      for (let s = 0; s < STEPS.length; s++) {
        const step = STEPS[s];
        if (step.cmd) {
          const cmdLine = appendLine('terminal-line--cmd', '$ ');
          await typeText(cmdLine, step.cmd, TYPE_MS);
          await sleep(LINE_PAUSE_MS);
        }
        for (let l = 0; l < step.lines.length; l++) {
          const prefix = step.success ? '✓ ' : '  ';
          const outLine = appendLine(step.success ? 'terminal-line--success' : 'terminal-line--out', '');
          await typeText(outLine, prefix + step.lines[l], TYPE_MS);
          await sleep(LINE_PAUSE_MS);
        }
        if (s < STEPS.length - 1) {
          appendLine('terminal-line--spacer', '');
        }
        await sleep(STEP_PAUSE_MS);
      }
      await sleep(LOOP_PAUSE_MS);
    }
  }
  function start() {
    if (started) return;
    started = true;
    if (prefersReducedMotion()) {
      renderStatic();
      return;
    }
    runSequence();
  }
  if (prefersReducedMotion()) {
    renderStatic();
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    if (entries.some(function (e) {
      return e.isIntersecting;
    })) {
      start();
      observer.disconnect();
    }
  }, {
    threshold: 0.35
  });
  observer.observe(terminal);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/adoption-terminal.js", error: String((e && e.message) || e) }); }

// ui_kits/website/nav.js
try { (() => {
/* Nav uses static light grey styling from styles.css */
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/nav.js", error: String((e && e.message) || e) }); }

__ds_ns.PaymentCard = __ds_scope.PaymentCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.DecisionDot = __ds_scope.DecisionDot;

__ds_ns.DECISION_COLOR = __ds_scope.DECISION_COLOR;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.TrustBadge = __ds_scope.TrustBadge;

__ds_ns.VerdictBadge = __ds_scope.VerdictBadge;

})();
