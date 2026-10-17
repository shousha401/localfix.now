// Theme engine. The inline script in index.html applies the initial theme
// before first paint (so there is never a flash of the wrong palette); this
// module owns every change after hydration. Themes are driven entirely by the
// `data-theme` attribute on <html> — the token sets live in index.css.
//
// Resolution order (keep in sync with the index.html script):
//   1. an explicit stored choice ('light' | 'dark') wins;
//   2. otherwise Haunted Mode during its season (Oct 1 – Nov 2);
//   3. otherwise the OS preference (prefers-color-scheme).
// Only deviations from that default are stored, so a visitor who picks the
// default theme goes back to following the season and their OS.

export type ThemeName = 'light' | 'dark' | 'halloween';

const STORAGE_KEY = 'lf-theme';

// Browser-chrome color per theme (matches each theme's page surface).
const THEME_COLOR: Record<ThemeName, string> = {
  light: '#0F2A44',
  dark: '#0C1826',
  halloween: '#0D0916',
};

const listeners = new Set<(theme: ThemeName) => void>();

/** Haunted Mode season: Oct 1 – Nov 2 (keep in sync with index.html). */
export function seasonActive(now = new Date()): boolean {
  const month = now.getMonth();
  return month === 9 || (month === 10 && now.getDate() <= 2);
}

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readStoredChoice(): 'light' | 'dark' | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function defaultTheme(): ThemeName {
  if (seasonActive()) return 'halloween';
  return systemPrefersDark() ? 'dark' : 'light';
}

export function currentTheme(): ThemeName {
  if (typeof document === 'undefined') return 'light';
  const value = document.documentElement.getAttribute('data-theme');
  return value === 'dark' || value === 'halloween' ? value : 'light';
}

/** Themes the toggle cycles through; Haunted Mode only during its season. */
export function availableThemes(): ThemeName[] {
  return seasonActive() ? ['light', 'dark', 'halloween'] : ['light', 'dark'];
}

export function nextTheme(theme: ThemeName): ThemeName {
  const themes = availableThemes();
  return themes[(themes.indexOf(theme) + 1) % themes.length];
}

export function subscribe(listener: (theme: ThemeName) => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.removeAttribute('data-theme');
    root.style.colorScheme = '';
  } else {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = 'dark';
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme]);

  // Seasonal favicon. Only the SVG icon swaps; raster fallbacks keep the
  // regular brand mark.
  const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]');
  if (icon) {
    icon.href = theme === 'halloween' ? '/favicon-halloween.svg' : '/favicon.svg';
  }

  listeners.forEach((listener) => listener(theme));
}

/**
 * Follow OS light/dark changes live for visitors with no stored choice.
 * Returns an unsubscribe function.
 */
export function startSystemThemeSync(): () => void {
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = () => {
    if (readStoredChoice() !== null) return;
    const theme = defaultTheme();
    if (theme !== currentTheme()) applyTheme(theme);
  };
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

/**
 * Switch themes with a circular reveal expanding from `origin` (the toggle
 * button), via the View Transitions API. Falls back to an instant swap when
 * the API is missing or the visitor prefers reduced motion.
 */
export function setTheme(theme: ThemeName, origin?: { x: number; y: number }) {
  try {
    if (theme === defaultTheme()) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  } catch {
    // Private browsing / blocked storage: the choice just won't persist.
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // lib.dom types startViewTransition unconditionally, but older browsers
  // don't have it at runtime — hence typeof, not a plain truthiness check.
  if (typeof document.startViewTransition !== 'function' || reduceMotion) {
    applyTheme(theme);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = document.startViewTransition(() => applyTheme(theme));
  transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    })
    .catch(() => {
      // Transition was skipped (e.g. another one was running) — theme applied.
    });
}
