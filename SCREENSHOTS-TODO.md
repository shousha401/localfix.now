# Screenshots — status

**Live now (7 projects with real screenshots):**
Kings County Water District, Pirata Goods, Refined Stitchery (public sites),
plus **Formulation Batch Builder** and **Digital Receiving Log** (internal —
captured from the real apps running on fully synthetic / demo data, with no
company-identifying information).

The two internal projects below are **fully written** in
`app/src/components/RecentWork.tsx` but **hidden** (commented out of
`projectOrder`) — they still need images.

---

## Cmp-Plus (CMMS)  → slug `cmp-plus-cmms`

Runs locally (React client on :5174 + Node server on :3010), but the seed only
creates an admin login — no demo work orders / parts / vendors — so a fresh
instance shows empty screens. To publish it, either:
- author a demo-data seed (buildings, assets, parts, vendors, a few work
  orders) and screenshot, **or**
- drop your own screenshots (scrub any real vendor / part names first).

Files needed in `app/public/projects/`:
- `cmpplus-home.png`      — the maintenance dashboard / home
- `cmpplus-workorder.png` — the work-order wizard
- `cmpplus-inventory.png` — parts inventory with bin locations

## Ask JD (AI assistant)  → slug `ask-jd-ai-assistant`

Needs the on-prem LLM + RAG stack running, which isn't available on this
machine — so it can't be captured here. Drop screenshots when you can run it:
- `askjd-chat.png`      — the chat interface
- `askjd-answer.png`    — an answer grounded in real data
- `askjd-dashboard.png` — an admin / audit / status view

---

**To publish either one:** add its 3 images with the exact filenames above,
run `npm run optimize:images` (from `app/`), then uncomment its slug in
`projectOrder` in `RecentWork.tsx`. Tweak the `alt` / `built` / `value` text in
that entry if it doesn't match your actual screens.
