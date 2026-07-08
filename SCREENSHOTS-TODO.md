# Screenshots needed to publish the 4 internal projects

The three public sites (Kings County Water District, Pirata Goods, Refined Stitchery)
are already live in **Recent Work** with real screenshots.

The four internal projects below are **fully written** in
`app/src/components/RecentWork.tsx` but **hidden** — they only need screenshots.
To publish one:

1. Drop its 3 images into `app/public/projects/` using the exact filenames below.
2. Run `npm run optimize:images` (from `app/`) to generate the `.webp` versions.
3. Uncomment the matching slug in the `projectOrder` array in `RecentWork.tsx`.

Recommended shot size: ~1600px wide, PNG (screenshots of app UI). Any browser
window screenshot is fine — the card letterboxes them on a dark frame.

---

## Formulation Batch Builder  → slug `formulation-batch-builder`
- `formulation-builder.png`  — the build screen (products added, targets set)
- `formulation-results.png`  — a completed build / pull sheet
- `formulation-methods.png`  — the build-method options (drain / ClayWAY / PickForMe, etc.)

## Ask JD  → slug `ask-jd-ai-assistant`
- `askjd-chat.png`      — the chat interface
- `askjd-answer.png`    — an answer grounded in real data
- `askjd-dashboard.png` — an admin / audit / status view

## Cmp-Plus (CMMS)  → slug `cmp-plus-cmms`
- `cmpplus-home.png`      — the maintenance dashboard / home
- `cmpplus-workorder.png` — the work-order wizard
- `cmpplus-inventory.png` — parts inventory with bin locations

## Digital Receiving Log  → slug `digital-receiving-log`
- `receiving-entry.png`   — the entry form
- `receiving-records.png` — the searchable records list
- `receiving-pdf.png`     — a generated PDF for the audit binder

---

*If any alt text or copy doesn't match your actual screens, tweak the matching
entry in `RecentWork.tsx` — the `alt`, `built`, and `value` fields.*
