# Screenshots — status

**Live now (11 projects with real screenshots):**
Kings County Water District, Avila Infrastructure & Contracting (captured
2026-09-11 from avilainfrastructure.com), Pirata Goods, Refined Stitchery (public sites),
plus **Formulation Batch Builder**, **Digital Receiving Log**,
**Cmp-Plus (CMMS)**, **Staff Scheduling & Tips App**, and **Breadcrumb**
(internal/client — captured with no company-identifying information; the last
two run entirely on fictional demo data; see notes below).

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
- **Staff Scheduling & Tips App** (private client) — captured 2026-09-11 from a
  throwaway copy rebranded as the fictional "Riverbend Butcher Co.": invented
  store names (Northside / Old Town), 17 invented staff on `@demo.example`, a
  placeholder SVG logo, and the migrations that write the client's real store
  names neutralized. Built app, served pages, and SQLite audited for the
  client's name, stores, and people → 0. The client stays unnamed on the site
  (no name, logo, or filenames) until the owner OKs it.
- **Breadcrumb** (internal field-sales app, pre-pilot) — captured 2026-09-11
  from a throwaway copy on a fully synthetic dataset: 194 invented accounts
  (made-up names, 555-01xx phone numbers), invented reps, generic products, and
  24 months of generated orders, with every integration and cron disabled and
  a separate port from the live app. The database was audited against the
  employer's name, data-source names, and every person/business name in the
  repo's fixtures → 0. Only signed-in screens were captured — the logged-out
  landing page and the sign-in page carry the employer's name and were skipped.
