import { useSyncExternalStore } from 'react';
import { Ghost, Moon, Sun } from 'lucide-react';
import { currentTheme, nextTheme, setTheme, subscribe, type ThemeName } from '../lib/theme';

// The server/prerender snapshot is a sentinel: the build-time prerender can't
// know the visitor's theme, so the prerendered markup (and hydration) shows an
// invisible same-size placeholder, then the real icon once the theme is read.
const getServerSnapshot = (): ThemeName | null => null;
const getSnapshot = (): ThemeName | null => currentTheme();

const ICONS = { light: Sun, dark: Moon, halloween: Ghost } as const;
const LABELS: Record<ThemeName, string> = {
  light: 'light mode',
  dark: 'dark mode',
  halloween: 'Haunted Mode',
};

/**
 * Theme switch: cycles light → dark (→ Haunted Mode during its season).
 * The icon shows the active theme.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const classes = `lf-theme-toggle ${className}`.trim();

  if (theme === null) {
    return <span className={classes} style={{ visibility: 'hidden' }} aria-hidden="true" />;
  }

  const next = nextTheme(theme);
  const Icon = ICONS[theme];

  return (
    <button
      type="button"
      className={classes}
      aria-label={`Switch to ${LABELS[next]}`}
      title={`Switch to ${LABELS[next]}`}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTheme(next, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
    >
      <Icon key={theme} className="lf-theme-icon" size={18} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
