# SEO Baseline — 2026-08-16 (app-development positioning, Phase A)

This is the 3-month comparison artifact for the app-development rollout. It records
every prerendered route's head data **before** Phase A, the Phase A acceptance
results, and the production Lighthouse numbers to re-measure against (target
re-check: ~2026-11-16). Baseline captured from `npm run build` output at commit
`6000c4e` (clean tree), which matches the deployed production site.

**Comparison protocol:** after any future change, rebuild and compare each route's
`<title>`, `meta[name=description]`, `link[rel=canonical]`, `meta[name=robots]`,
and first `<h1>` in `dist/**/index.html` against the tables below. Body text may
change (project counts, new cards); head data of pre-existing routes may not,
except where a phase explicitly says so.

---

## 1. Baseline head data (pre-change, all prerendered routes)

### `/`
- **Title:** Fresno Web Designer, Automation & AI | LocalFix
- **Description:** Fresno web designer & automation shop for small businesses. Custom one-page websites with domain, business email, hosting & local SEO included. Flat pricing.
- **Canonical:** https://localfix.now/
- **Robots:** index, follow, max-image-preview:large
- **H1:** Better websites for Fresno businesses. Less busywork.

### `/work`
- **Title:** My Work — Web Design & Software Portfolio | LocalFix
- **Description:** Browse the LocalFix portfolio — business websites, e-commerce stores, internal dashboards, mobile apps & AI tools built in Fresno, with real screenshots from production.
- **Canonical:** https://localfix.now/work
- **Robots:** index, follow, max-image-preview:large
- **H1:** Every project here runs a real business.

### `/fresno-web-design`
- **Title:** Fresno Web Designer & Website Developer | LocalFix
- **Description:** Fresno web designer building fast, mobile-friendly custom websites for Central Valley small businesses. One-page sites $595 flat. Built in 1–2 weeks.
- **Canonical:** https://localfix.now/fresno-web-design
- **Robots:** index, follow, max-image-preview:large
- **H1:** Custom websites for Fresno businesses.

### `/workflow-automation`
- **Title:** Workflow Automation for Fresno Small Business | LocalFix
- **Description:** Custom workflow automation for Fresno & Central Valley small businesses — booking, inquiry routing, dashboards & integrations. Save 5–15 hours a week.
- **Canonical:** https://localfix.now/workflow-automation
- **Robots:** index, follow, max-image-preview:large
- **H1:** Workflow automation for Fresno businesses.

### `/ai-chatbot`
- **Title:** AI Chatbot for Fresno Small Business | LocalFix
- **Description:** Custom AI chatbots for Fresno & Central Valley small businesses, trained on your business — answer customers 24/7 and capture leads after hours.
- **Canonical:** https://localfix.now/ai-chatbot
- **Robots:** index, follow, max-image-preview:large
- **H1:** AI chatbots for Fresno businesses.

### `/website-fixes`
- **Title:** Fast Website Fixes for Fresno Businesses | LocalFix
- **Description:** Fast website fixes for Fresno & Central Valley small businesses — broken forms, slow pages, mobile issues & outdated design. Flat pricing, quick turnaround.
- **Canonical:** https://localfix.now/website-fixes
- **Robots:** index, follow, max-image-preview:large
- **H1:** Fast website fixes for Fresno businesses.

### `/about`
- **Title:** About LocalFix — Fresno Web Developer for Small Business
- **Description:** LocalFix is run by one developer in Fresno, California — production-grade websites and automation for small businesses, with no agency overhead.
- **Canonical:** https://localfix.now/about
- **Robots:** index, follow, max-image-preview:large
- **H1:** Built by one developer in Fresno.

### `/thank-you` (noindex)
- **Title:** Thank You | LocalFix
- **Description:** Your LocalFix request was received. I'll be in touch within 24 hours.
- **Canonical:** https://localfix.now/thank-you
- **Robots:** noindex, nofollow
- **H1:** Thanks — your request was sent.

### 404 page (noindex, no canonical)
- **Title:** Page Not Found | LocalFix
- **Description:** The page you're looking for doesn't exist. Head back to LocalFix for Fresno web design, website fixes, workflow automation, and AI.
- **Canonical:** *(none — by design)*
- **Robots:** noindex, nofollow
- **H1:** This page wandered off.

## 2. Baseline sitemap.xml (7 URLs)

| URL | lastmod | priority |
| --- | --- | --- |
| https://localfix.now/ | 2026-08-03 | 1.0 |
| https://localfix.now/work | 2026-08-03 | 0.9 |
| https://localfix.now/fresno-web-design | 2026-07-19 | 0.9 |
| https://localfix.now/workflow-automation | 2026-07-19 | 0.9 |
| https://localfix.now/ai-chatbot | 2026-07-19 | 0.9 |
| https://localfix.now/website-fixes | 2026-07-19 | 0.9 |
| https://localfix.now/about | 2026-08-03 | 0.7 |

## 3. Baseline Lighthouse (production, mobile) — 2026-08-16

The PageSpeed Insights web/API quota was exhausted on capture day, so these were
run locally against the **live production URLs**: Lighthouse 12.8.2, headless
Chrome, mobile emulation with default throttling. **Re-run the same way for a
like-for-like comparison** (absolute numbers vary by machine; deltas are what
matter):

```bash
npx --yes lighthouse https://localfix.now/ --quiet --chrome-flags="--headless=new" --only-categories=performance,seo --form-factor=mobile --screenEmulation.mobile --output=json --output-path=lh.json
```

| Route | Performance | SEO | LCP | CLS |
| --- | --- | --- | --- | --- |
| `/` | 71 | 100 | 5.9 s | 0 |
| `/work` | 92 | 100 | 2.9 s | 0 |
| `/fresno-web-design` | 95 | 100 | 2.7 s | 0 |

---

## 4. Phase A acceptance results (2026-08-16, post-change build)

Phase A added `/app-development` + nav + sitemap + schema offer + staged
ShoushaTV. Verified against the baseline above:

- **Every pre-existing route:** title, meta description, canonical, robots,
  og:title, and H1 **byte-identical** to Section 1. ✅
- **New route `/app-development`** (prerendered, indexable):
  - Title: Fresno App Developer — Android, iOS & TV Apps | LocalFix
  - Description: Fresno app developer building cross-platform Android, iOS & TV apps for small businesses. Built end-to-end, tested on real hardware, flat project pricing.
  - Canonical: https://localfix.now/app-development
  - Robots: index, follow, max-image-preview:large
  - H1: App Development in Fresno — Android, iOS & TV Apps
  - Carries Service + BreadcrumbList schema (ServiceSchema) and FAQPage schema (Faq), like the other service pages. Hero and proof section ship visible (no animation on this page's above-fold content).
- **Sitemap:** 7 → 8 URLs. Added `/app-development` (lastmod 2026-08-16,
  priority 0.9); bumped lastmod for `/` and `/work` to 2026-08-16 (their body
  content changed); all other lastmods untouched. ✅
- **Expected body-only deltas (not regressions):** "See all 16 projects"
  (was 15) on `/` and `/about`; "16 systems shipped" chip and the ShoushaTV
  "Private beta" text card on `/work`; "App Development" first in the Services
  nav on every page; fifth Offer ("App Development") in the shared
  `hasOfferCatalog` JSON-LD. ✅
- **Forbidden strings:** case-insensitive grep of the full diff *and* the built
  dist for "app store", "play store", "6780735596" — zero matches ("TestFlight"
  intentionally present). ✅
- **Build:** 9 routes prerendered, drift check + image check green; eslint clean. ✅
- **Deliberately NOT in Phase A:** homepage title/description/H1/subhead (Phase
  B), ShoushaTV full portfolio card with screenshots (staged — see
  `SCREENSHOTS-TODO.md` for the 3 filenames and demo-content capture rules).

## 5. Phase B watchlist (when it happens)

Phase B is the homepage-only edit: title, meta description, H1, hero subhead.
Before shipping it, pull GSC data on (a) queries containing "ai" landing on `/`
(the draft title drops "AI") and (b) "fresno web designer" phrasing (keep the
exact phrase in the hero subhead). After shipping, diff every OTHER route
against Section 1 — they must remain identical — and re-run Section 3's
Lighthouse command.
