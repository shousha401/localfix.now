# Screenshots — status

**Live now (8 projects with real screenshots):**
Kings County Water District, Pirata Goods, Refined Stitchery (public sites),
plus **Formulation Batch Builder**, **Digital Receiving Log**, and
**Cmp-Plus (CMMS)** (internal — captured from the real apps with no
company-identifying information; see notes below).

Only one project remains hidden (commented out of `projectOrder`):

## Ask JD (AI assistant)  → slug `ask-jd-ai-assistant`

Needs the on-prem LLM + RAG stack running, which isn't available on this
machine — so it can't be captured here. Drop screenshots when you can run it:
- `askjd-chat.png`      — the chat interface
- `askjd-answer.png`    — an answer grounded in real data
- `askjd-dashboard.png` — an admin / audit / status view

**To publish it:** add its 3 images with the exact filenames above, run
`npm run optimize:images` (from `app/`), then uncomment its slug in
`projectOrder` in `RecentWork.tsx`.

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
