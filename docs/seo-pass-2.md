# seo-pass-2 — homepage owns "web design Fresno"

Follow-up to `docs/seo-audit-2026-11.md` (findings 2, 4 and 6, task cards 2–4).
Branch `seo-pass-2`, based on `main` @ `3ae83ed`.

**Merge commit:** `db978ff` (PR #13), merged 2026-11-11. Production deploy confirmed the same day. Re-check date: about 2027-02-09 (90 days).

## What changed

1. **Homepage and `/fresno-web-design` stop competing.**
   - `/` title, description and H1 now lead with "Fresno web design" / "Web design for Fresno businesses". Hero subhead unchanged.
   - `/` has a new Services section (`ServicesBlock.tsx`) linking to all five service pages.
   - `/fresno-web-design` title, description and H1 now cover what a small business website includes. The Recent Work and About blocks are gone, replaced by a link to `/work` and an in-body link to `/` with the anchor text "Fresno web design".
   - Sitemap `lastmod` for `/` and `/fresno-web-design` set to 2026-11-11.
2. **Footer matches the header and uses one business name.** Work and App Development added to the footer nav; copyright line reads "LocalFix Web Design"; phone prints "(559) 389-8850".
3. **App Development stepped back.** Last under Services in the nav (was first); removed from the sitewide `hasOfferCatalog`. `/app-development` keeps its own Service schema.

## Head data before → after

| Route | Field | Before | After |
| --- | --- | --- | --- |
| `/` | Title | Fresno Web Designer, Automation & AI \| LocalFix | Fresno Web Design for Small Businesses \| LocalFix |
| `/` | Description | Fresno web designer & automation shop for small businesses. Custom one-page websites with domain, business email, hosting & local SEO included. Flat pricing. | Web design in Fresno for small businesses. Custom websites, fixes and automation from one local developer. Flat pricing, built in 1-2 weeks, free review first. |
| `/` | H1 | Better websites for Fresno businesses. Less busywork. | Web design for Fresno businesses. Less busywork. |
| `/fresno-web-design` | Title | Fresno Web Designer & Website Developer \| LocalFix | Small Business Websites in Fresno: What's Included \| LocalFix |
| `/fresno-web-design` | Description | Fresno web designer building fast, mobile-friendly websites for Central Valley small businesses. Flat pricing, free review first. Built in 1–2 weeks. | What a LocalFix website includes: custom design, domain, business email, hosting and local SEO setup. One flat price, quoted after a free review. Live in 1-2 weeks. |
| `/fresno-web-design` | H1 | Custom websites for Fresno businesses. | What's included in a Fresno small business website. |

Every other route's head data is meant to stay identical to `docs/seo-baseline-2026-08-16.md` section 1 (and to production as of `3ae83ed` for the `/work/*` case studies, which postdate the baseline).

## Before values (Search Console, Aug 10 – Nov 9 2026)

| Metric | Before |
| --- | --- |
| "web design fresno", mobile | position 33.3, 79 impressions |
| US clicks | 12 |
| `/fresno-web-design` on queries containing "fresno" | position 42.7 |
| "mobile app development" impressions on `/` | 3,933 |

Other reference points from the audit (same window): 31 clicks total, 10.9K impressions, CTR 0.3%; "web design fresno" all devices 868 impressions at 12.7; "fresno web design" 361 at 15.9; 5-word-phrase overlap between `/` and `/fresno-web-design` 44%.

Re-pull the same four rows about 90 days after the merge date, over a window of equal length.
