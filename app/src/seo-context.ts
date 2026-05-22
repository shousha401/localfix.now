import { createContext } from 'react';

export type SeoData = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
};

export type SeoCollector = { current: SeoData | null };

/**
 * During build-time prerendering, entry-server.tsx provides a collector
 * through this context. RouteSeo writes the active route's SEO data into it
 * so the prerender script can build a complete <head>.
 *
 * In the browser the provider is absent (value stays null) and RouteSeo
 * updates the document head imperatively instead.
 */
export const SeoContext = createContext<SeoCollector | null>(null);
