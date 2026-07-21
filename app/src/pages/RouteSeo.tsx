import { useContext, useEffect } from 'react';
import { SeoContext } from '../seo-context';

type Props = {
  title: string;
  description: string;
  /** Omit on noindex pages whose URL is not a real, fetchable location
   *  (e.g. the 404 page) — a canonical pointing at a URL that 404s is
   *  worse than none. */
  canonical?: string;
  /** Set on pages that should not be indexed (e.g. the thank-you page). */
  noindex?: boolean;
};

const INDEXABLE = 'index, follow, max-image-preview:large';
const NOINDEX = 'noindex, nofollow';

/**
 * Per-route SEO tags.
 *
 * - During prerendering (server): records this route's data into the SEO
 *   collector so scripts/prerender.mjs can inject a complete <head>. Renders
 *   nothing into the body.
 * - In the browser: updates the existing (prerendered) head tags in place on
 *   mount and on every route change. Mutating tags rather than adding new
 *   ones keeps exactly one of each — no duplicates.
 */
export default function RouteSeo({ title, description, canonical, noindex = false }: Props) {
  const collectorRef = useContext(SeoContext);
  const robots = noindex ? NOINDEX : INDEXABLE;

  if (collectorRef) {
    // SSR only: the prerender renders each route once, synchronously, so
    // recording this route's SEO for scripts/prerender.mjs is safe here.
    // eslint-disable-next-line react-hooks/refs
    collectorRef.current = { title, description, canonical, robots };
  }

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', robots);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (canonical) {
      setMeta('property', 'og:url', canonical);
      setLink('canonical', canonical);
    } else {
      // SPA navigation onto a canonical-less page (e.g. 404) must clear the
      // previous route's tags, or they'd claim this content lives there.
      removeMeta('property', 'og:url');
      removeLink('canonical');
    }
  }, [title, description, canonical, robots]);

  return null;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function removeLink(rel: string) {
  document.head.querySelector(`link[rel="${rel}"]`)?.remove();
}
