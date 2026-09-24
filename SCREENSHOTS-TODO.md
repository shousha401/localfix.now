# Screenshots — status

**Projects with real screenshots:**
Kings County Water District, Avila Infrastructure & Contracting (captured
2026-09-11 from avilainfrastructure.com), Pirata Goods, Refined Stitchery (public sites),
plus **Formulation Batch Builder**, **Digital Receiving Log**,
**Cmp-Plus (CMMS)**, **The Meat Up — Staff App**, **The Meat Up — Online
Ordering**, **Breadcrumb**, **SnapBox**, and **Shousha-Hub** (internal/client,
captured with no company-identifying information; the last five run entirely
on fictional demo data; see notes below).

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
- **The Meat Up — Staff App** — the owner OK'd naming the client on
  2026-09-24, so the 2026-09-11 "Riverbend Butcher Co." captures were replaced
  with `meatup-staff-*.png`, taken from a throwaway copy that keeps the real
  brand and store names but has 18 invented people (`@demo.example`,
  555-01xx). The repo's seed people were never loaded. The rendered pages and
  built app were audited against every name, email, and phone in the repo's
  seed, migrations, tests, and docs → 0. Email, backups, and Railway were all
  off.
- **The Meat Up — Online Ordering** — captured 2026-09-24 from a throwaway copy
  on a temporary local Postgres, with Square in stub mode (no charge possible),
  email off, and the browser blocking all outbound traffic. It has 8 invented
  customers (559-555-01xx, `@demo.example`) placed by our own script. The
  repo's demo customers were not used, and seeded staff were renamed to
  invented people. Prices are the app's test catalog, not the shop's real
  prices. The live link stays off until order.themeatup.com leaves Square
  stub mode.
- **Shousha-Hub** — captured 2026-09-24 from a throwaway copy with a fictional
  8-tool list on `floor.local` / `tools.local`, answered by local dummy
  servers. A network guard blocked every connection except those local ports,
  and alerts were off. Company wording in the UI was replaced with "Operations
  Hub", and the inbox and incident history are invented. The rendered pages,
  API responses, data files, and canvas text were audited → 0. Only the
  developer's own name and avatar appear.
- **SnapBox** — captured 2026-09-24 from a throwaway copy with the production
  areas renamed to generic ones (Grinding / Portioning / Ready-to-Eat / Pack
  Off) in both labels and internal keys. It holds 30 invented QC posts across
  two days (the second day is for the History shot), and every "photo" is a
  synthetic render made locally (invented labels, zeroed barcodes,
  "EST. 0000"); no real photos were used. The database, uploads,
  served code, and rendered pages were audited for company and brand strings
  → 0.
- **Breadcrumb** (internal field-sales app, pre-pilot) — captured 2026-09-11
  from a throwaway copy on a fully synthetic dataset: 194 invented accounts
  (made-up names, 555-01xx phone numbers), invented reps, generic products, and
  24 months of generated orders, with every integration and cron disabled and
  a separate port from the live app. The database was audited against the
  employer's name, data-source names, and every person/business name in the
  repo's fixtures → 0. Only signed-in screens were captured — the logged-out
  landing page and the sign-in page carry the employer's name and were skipped.
