/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          warmgray: "var(--lf-muted)",
        },
        // LocalFix theme tokens (see src/index.css for role definitions).
        // Flat keys so `bg-lf-surface`, `hover:text-lf-accent`, etc. work.
        "lf-surface": "var(--lf-surface)",
        "lf-surface-2": "var(--lf-surface-2)",
        "lf-card": "var(--lf-card)",
        "lf-ink": "var(--lf-ink)",
        "lf-ink-2": "var(--lf-ink-2)",
        "lf-ink-3": "var(--lf-ink-3)",
        "lf-ink-surface": "var(--lf-ink-surface)",
        "lf-ink-btn": "var(--lf-ink-btn)",
        "lf-ink-btn-hover": "var(--lf-ink-btn-hover)",
        "lf-ink-line": "var(--lf-ink-line)",
        "lf-body": "var(--lf-body)",
        "lf-body-2": "var(--lf-body-2)",
        "lf-muted": "var(--lf-muted)",
        "lf-line": "var(--lf-line)",
        "lf-accent": "var(--lf-accent)",
        "lf-accent-hover": "var(--lf-accent-hover)",
        "lf-accent-deep": "var(--lf-accent-deep)",
        "lf-on-ink": "var(--lf-on-ink)",
        "lf-on-ink-muted": "var(--lf-on-ink-muted)",
        "lf-on-ink-dim": "var(--lf-on-ink-dim)",
        "lf-slate": "var(--lf-slate)",
        "lf-success": "var(--lf-success)",
        "lf-success-soft": "var(--lf-success-soft)",
        "lf-gold": "var(--lf-gold)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
