# Screenshots — status

**Live now (8 projects with real screenshots):**
Kings County Water District, Pirata Goods, Refined Stitchery (public sites),
plus **Formulation Batch Builder**, **Digital Receiving Log**, and
**Cmp-Plus (CMMS)** (internal — captured from the real apps with no
company-identifying information; see notes below).

Two projects remain hidden (commented out of `projectOrder`):

## ShoushaTV (TV & mobile app)  → slug `shoushatv`

Staged 2026-08-16 as part of the app-development positioning work. Its full
project entry is written in `projects.ts`, and it currently appears on /work as
a screenshot-less "Private beta" text card. It publishes as the FIRST portfolio
card once captures land.

Capture on real hardware (or emulator at TV resolution) with **demo/placeholder
credentials only** — no real channel names, logos, or stream content. The copy's
core claim is that the app ships empty and bundles no content; screenshots
showing recognizable channels or programming would contradict that claim and
create rights problems. Same spirit as the company-safe internal captures below.

- `shoushatv-home.png`   — home screen, D-pad focus visible on a content rail
- `shoushatv-guide.png`  — the EPG/XMLTV program guide grid
- `shoushatv-player.png` — the player UI (controls overlay or recovery state)

**To publish it:** add its 3 images with the exact filenames above, run
`npm run optimize:images` (from `app/`), then in `app/src/content/projects.ts`
uncomment `'shoushatv'` at the top of `projectOrder`, remove its text card from
`shippedTools`, change the `totalShippedCount` adjustment from `- 2` back to
`- 1`, and bump the `/work` lastmod in `app/scripts/prerender.mjs`.

## Ask JD (AI assistant)  → slug `ask-jd-ai-assistant`

Needs the on-prem LLM + RAG stack running, which isn't available on this
machine — so it can't be captured here. Drop screenshots when you can run it:
- `askjd-chat.png`      — the chat interface
- `askjd-answer.png`    — an answer grounded in real data
- `askjd-dashboard.png` — an admin / audit / status view

**To publish it:** add its 3 images with the exact filenames above, run
`npm run optimize:images` (from `app/`), then in `app/src/content/projects.ts`
uncomment its slug in `projectOrder` and remove its text card from
`shippedTools` (it currently appears on /work as a screenshot-less card).

---

## How the internal screenshots were kept company-safe

- **Formulation Batch Builder** — ran a throwaway copy with a synthetic Swarmbox
  mock (generic beef-trim products, made-up codes/vendors).
- **Digital Receiving Log** — ran a fresh instance on the repo's demo seed with
  `SITE_NAME="Riverbend Foods Co."` (replaces the hardcoded company name).
- **Cmp-Plus (CMMS)** — captured from the live app, but every screenshot ran a
  DOM scrub first that rewrites the building names `JD Main → Main Plant` and
  `JD Dry → Dry Store` (verified 0 "JD" left). Views with real vendor names
  (Purchase Orders) were deliberately not captured.
