// Lightweight GA4 integration, gated on the VITE_GA_ID env var. When the var
// is unset (e.g. local dev or before a Measurement ID exists) this is a no-op,
// so no analytics script loads. Set VITE_GA_ID in your Vercel project env to
// enable it. See SEO-SETUP.md.

const GA_ID = import.meta.env.VITE_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Load gtag.js once and configure GA4. Safe to call repeatedly. */
export function initAnalytics() {
  if (!GA_ID || initialized || typeof window === 'undefined') return;
  initialized = true;

  // dataLayer and gtag() are set up immediately so page_view events queue
  // from the first route; the 166KB gtag.js script itself is deferred to
  // idle so it never competes with rendering the page (it drains the queue
  // when it loads).
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // We send page_view manually on each route change (SPA), so turn off the
  // automatic initial one to avoid double-counting.
  window.gtag('config', GA_ID, { send_page_view: false });

  const loadScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadScript, { timeout: 4000 });
  } else {
    setTimeout(loadScript, 2000);
  }
}

/** Send a GA4 page_view for the current SPA route. */
export function trackPageview(path: string) {
  if (!GA_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
