# Design tokens (vendored)

`tokens/*.css` are **vendored** from the Paybots Design System project on
claude.ai/design (projectId `e75ed650-7457-4f60-9483-24ee8744cd03`). They are
the source of truth for `--pb-*` custom properties.

This is a manual copy, not a live link. Treat these files as read-only here:
edit the tokens in the design project, then re-export and overwrite
`tokens/*.css` to re-sync. The site stylesheet
(`src/assets/css/styles.css`) `@import`s these and aliases `--pb-*` into the
local `--*` names it uses.
