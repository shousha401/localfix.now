# SEO & Analytics Setup

One-time setup so search engines and analytics can see the site. None of this
is required for the site to build or deploy — it's about *measuring* and
*reporting* SEO.

## 1. Google Analytics 4 (traffic + conversions)

1. Create a GA4 property at <https://analytics.google.com> → Admin → Create Property.
2. Add a **Web** data stream for `https://localfix.now`. Copy the Measurement ID
   (looks like `G-XXXXXXXXXX`).
3. In Vercel → Project → Settings → **Environment Variables**, add:

   ```
   VITE_GA_ID = G-XVTBCH36V7
   ```

   (`G-XVTBCH36V7` is this site's existing GA4 Measurement ID — it used to be
   hardcoded in `index.html` and now lives only in this env var.)

   (Production + Preview.) Redeploy. That's it — `src/lib/analytics.ts` loads
   gtag only when this var is set, and sends a page_view on every SPA route
   change. With the var unset, no analytics script loads.

> The `/thank-you` page already has a marked spot for a **Google Ads** conversion
> tag (`src/pages/ThankYou.tsx`) if you later run ads.

## 2. Google Search Console (indexing + search queries)

This is where you confirm Google can index the site, submit the sitemap, and
see which queries you rank for.

1. Go to <https://search.google.com/search-console> → Add property →
   **Domain** property → `localfix.now`.
2. Verify ownership. Easiest options:
   - **DNS (recommended):** add the TXT record Google gives you at your domain
     registrar. Verifies the whole domain, no code.
   - **HTML file:** download the `googleXXXXXXXX.html` file Google provides and
     drop it into `app/public/`. Vite copies it to the site root on build, so it
     will be served at `https://localfix.now/googleXXXXXXXX.html`. Commit + deploy,
     then click Verify.
3. Once verified: **Sitemaps** → submit `https://localfix.now/sitemap.xml`.
4. Use **URL Inspection** to request indexing for the homepage and each service
   page.

## 3. Post-deploy checklist

- [ ] `https://localfix.now/sitemap.xml` lists all 6 indexable routes with a
      current `<lastmod>` (auto-generated each build).
- [ ] `https://localfix.now/robots.txt` returns 200 and points to the sitemap.
- [ ] A nonsense URL (e.g. `/nope`) returns **HTTP 404** (not a 200 homepage).
- [ ] View source on each route → unique `<title>`, description, and canonical.
- [ ] Run the homepage + a service page through
      [PageSpeed Insights](https://pagespeed.web.dev/) and check mobile LCP/INP/CLS.
- [ ] Validate structured data with the
      [Rich Results Test](https://search.google.com/test/rich-results)
      (LocalBusiness, FAQPage, WebSite).
- [ ] Confirm the Google Business Profile is linked and its NAP (name, address,
      phone) matches the site's LocalBusiness schema.
