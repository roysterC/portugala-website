<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Skills

- New UI/visual work: use `high-end-visual-design` for the concrete ruleset (fonts, spacing, shadows, motion). Use `frontend-design` for process/critique (brief inference, self-critique pass) — not as a competing aesthetic.
- After UI exists: audit with `web-design-guidelines` (fetches live rules over the network each run — expect it to need WebFetch).
- `next-cache-components-adoption`, `next-cache-components-optimizer`, and `next-partial-prefetching-adoption` all require Next.js 16.3+. This project is on 16.2.12 — don't invoke them until the app is upgraded.
