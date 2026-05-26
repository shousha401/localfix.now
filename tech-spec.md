# Tech Spec — LocalFix (localfix.now)

**Launch Date:** May 21, 2026
**Domain:** localfix.now
**Deployment:** Vercel
**Location:** Fresno, CA — serves Fresno, Central Valley, and remote clients across California

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vite + React 19 |
| Language | TypeScript 5 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Animation | GSAP 3.15 + Lenis 1.3 (smooth scroll) |
| WebGL | Three.js 0.184 (gooey hero shader) |
| Forms | react-hook-form + zod |
| Email | Resend |
| Build | Vite (client) + Vite SSR (prerender) |
| Prerender | Custom `scripts/prerender.mjs` — runs after build |

Fonts: Fraunces (display), Inter (body), Space Mono (labels).

---

## Routes

| Path | Page | Indexed |
|------|------|---------|
| `/` | Home | Yes |
| `/fresno-web-design` | Fresno Web Design | Yes |
| `/workflow-automation` | Workflow Automation | Yes |
| `/ai-chatbot` | AI Chatbot | Yes |
| `/website-fixes` | Website Fixes | Yes |
| `/about` | About | Yes |
| `/thank-you` | Thank You (form confirmation) | No (noindex) |

---

## Page Structure — Home (`/`)

Sections rendered in order:

1. **HeroSection** — Full-viewport hero with GSAP entrance animation. GooeyCanvas WebGL shader runs behind it (home page only). CTAs: "Get a Free Website Review" (scrolls to contact) and "Text us" (sms: link).
2. **RecentWork** — Portfolio / recent projects showcase.
3. **Testimonials** — Client reviews.
4. **HowItWorks** — Step-by-step process explanation.
5. **AboutBlock** — Short about section embedded in the home page.
6. **ContactFooterSection** — Contact form + footer.

---

## Component Inventory

### Layout

| Component | Notes |
|-----------|-------|
| `Navbar` | Fixed top nav. Transparent → frosted on scroll. Logo, nav links (Services, Packages, Contact), CTA button, mobile hamburger menu. |
| `AppShell` | Wraps all routes. Manages Lenis smooth scroll, scroll-to-top on route change, hash-anchor scrolling. Renders GooeyCanvas only on `/`. |

### Sections

| Component | Notes |
|-----------|-------|
| `HeroSection` | Full-viewport. GSAP staggered entrance on 5 elements. Receives `onScrollTo` from AppShell via Outlet context. |
| `RecentWork` | Portfolio grid. |
| `Testimonials` | Client review cards. |
| `HowItWorks` | Process steps. |
| `AboutBlock` | Short about / trust content. |
| `ContactFooterSection` | 2-col: contact info left, form right, bottom bar. |

### Service Pages

| Component | Notes |
|-----------|-------|
| `ServiceHero` | Reusable hero used by service-specific pages. |
| `FresnoWebDesign` | `/fresno-web-design` page. |
| `WorkflowAutomation` | `/workflow-automation` page. |
| `AiChatbot` | `/ai-chatbot` page. |
| `WebsiteFixes` | `/website-fixes` page. |
| `About` | `/about` page. |
| `ThankYou` | `/thank-you` — post-form submission confirmation. |

### Reusable

| Component | Notes |
|-----------|-------|
| `GooeyCanvas` | Raw WebGL shader. Lazy-loaded (`Suspense`), home page only. Receives `scrollSpeedRef` to drive `u_scrollSpeed` uniform. |
| `RouteSeo` | Per-route SEO component. Updates `<head>` in browser; writes to `SeoCollector` context during prerender. Renders nothing in the DOM. |

---

## Hooks

| Hook | Purpose |
|------|---------|
| `useGooeyShader` | WebGL lifecycle: shader compile, uniform updates, RAF loop, resize, cleanup. |
| `useScrollReveal` | GSAP ScrollTrigger fade+slide entrance. Returns a ref to attach to the container. |
| `use-mobile` | Breakpoint detection hook. |

---

## SEO & Prerendering

### How it works

1. `vite build` compiles the client bundle.
2. `vite build --ssr src/entry-server.tsx` compiles a server entry.
3. `node scripts/prerender.mjs` imports the server entry and renders each route to static HTML, injecting a fully-populated `<head>` (title, description, canonical, OG tags, Twitter cards, geo tags) into the output HTML files.

### RouteSeo

- **During prerender (SSR):** writes `{ title, description, canonical, robots }` into the `SeoCollector` context so `prerender.mjs` can build the `<head>` string.
- **In the browser:** imperatively updates existing `<head>` tags on mount and route change — mutates in place to avoid duplicates.

### Head tags injected per route

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta property="og:*">` (type, title, description, url, image)
- `<meta name="twitter:*">` (card, title, description, image)
- `<meta name="robots">`
- `<meta name="geo.region" content="US-CA">`
- `<meta name="geo.placename" content="Fresno, California">`

OG image: `https://localfix.now/og-image.png`

---

## Animation

| Animation | Library | Notes |
|-----------|---------|-------|
| Gooey hero shader | Three.js (raw WebGL) | 9 SDF metaballs, 2 layers, noise distortion, scroll-driven warping, mouse orb. Fullscreen triangle render. |
| Hero entrance | GSAP timeline | Staggered fade+translateY on 5 elements (0.2s increments). Runs once on mount. |
| Section scroll reveals | GSAP + ScrollTrigger | `useScrollReveal` hook. Default: opacity 0→1, y 30→0, 0.7s, power3.out. |
| Nav background | CSS class toggle | ScrollTrigger at 100vh adds `nav--scrolled`. CSS transitions handle background/border (0.3s ease). |
| Canvas opacity fade | Inline style | `opacity = max(0, 1 - scrollY/innerHeight)`. Updated per Lenis scroll frame. |
| Card hovers | CSS transitions | Service cards: translateY(-4px) + shadow. Package cards: CTA color change. |
| Mobile menu | CSS transition | Slide-down panel (height + opacity). |

---

## Lenis ↔ Shader Bridge

Lenis lives in `AppShell`. Its `onScroll` callback writes normalized velocity into `scrollSpeedRef` (a plain ref — not state, to avoid re-renders). `GooeyCanvas` reads this ref in its RAF loop and writes it to the `u_scrollSpeed` WebGL uniform each frame.

Lenis is skipped entirely when the user has `prefers-reduced-motion: reduce` set.

---

## Forms

Two forms — hero QuickStart and ContactFooterSection:

- Built with `react-hook-form` + `zod` validation.
- Submissions sent via `Resend`.
- On success, user is redirected to `/thank-you`.

---

## Key Decisions

### Raw WebGL over R3F
Single fullscreen fragment shader with no 3D scene. `@react-three/fiber` would add unnecessary overhead. Three.js `WebGLRenderer` with `ShaderMaterial` on a `BufferGeometry` triangle is sufficient.

### GooeyCanvas lazy-loaded
`React.lazy` + `Suspense` with `ssr: false` equivalent — prevents SSR hydration mismatches and defers the large shader bundle until needed.

### GooeyCanvas home-only
`AppShell` renders `GooeyCanvas` only when `location.pathname === '/'` to avoid the heavy WebGL context on service/about pages.

### React Router over Next.js
Vite + React Router gives full control over the build pipeline. Prerendering is handled by a custom script rather than a framework-level abstraction.
