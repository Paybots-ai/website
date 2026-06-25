# Marketing site — `paybots.io` (the real brand)

A faithful, self-contained copy of the live Paybots marketing website
(`/Users/chrislee/Desktop/dev/website`). This is the **canonical Paybots brand** —
warmer and more editorial than the operator-UI tokens the rest of this system was first
built on.

## ⚠️ Brand source-of-truth note

This site uses a **different visual language** than the original token set:

| | Token set (operator UI origin) | **Live site (this)** |
|---|---|---|
| Sans | Roboto | **DM Sans** |
| Headings | — | **DM Sans** (one font, no display face) |
| Mono | JetBrains Mono | **IBM Plex Mono** |
| Accent | Blue `#1a73e8` | **Indigo `#4F46E5` / `#4338CA`** |
| Page bg | White | **Warm paper `#F5F3EF`** |
| Decision words | approve / reject | **mandate alignment · aligned · backed** |
| Card radius | 12px | **12px (one value)** |

The live site is the brand customers actually see. See the root `readme.md` "Brand
reconciliation" section for how the token layer is being aligned to it.

## Pages

- `index.html` — homepage: dark-ish hero + agent console, three-guarantee feature rows,
  "for builders" bento, animated **adoption terminal**, CTA band, footer.
- `for-consumers.html` — consumer audience page.
- `for-merchants.html` — merchant audience page.
- `privacy.html`, `terms.html` — legal.

## Files

- `site.css` — the site's own stylesheet (its tokens live in `:root`). Verbatim copy.
- `nav.js`, `adoption-terminal.js` — verbatim site scripts.
- `favicon*.png`, `apple-touch-icon.png` — site icons.

Self-contained: open `index.html` directly. Absolute (`/…`) paths were rewritten to
relative so it runs inside the project.
