# Tech Spec — LocalFix (localfix.now)

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14 | Framework (App Router) |
| react | ^18 | UI library |
| react-dom | ^18 | React DOM renderer |
| typescript | ^5 | Type safety |
| tailwindcss | ^3 | Utility CSS |
| @types/react | ^18 | React type definitions |
| @types/react-dom | ^18 | ReactDOM type definitions |
| @types/three | ^0.160 | Three.js type definitions |
| three | ^0.160 | WebGL rendering for gooey shader |
| gsap | ^3.12 | Animation engine + ScrollTrigger plugin |
| lenis | ^1.1 | Smooth scroll with velocity tracking |
| lucide-react | ^0.400 | Icons (Monitor, MapPin, Search, CalendarCheck, Zap, RefreshCw, Check, Menu, X, Phone, Mail, Clock) |

Fonts loaded via `next/font/google`: Fraunces (display), Inter (body), Space Mono (labels).

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| Navbar | Custom | Fixed top nav with transparent→frosted scroll transition. Contains: logo link (scrolls to top), horizontal nav links (Services, Packages, Contact), CTA button, mobile hamburger menu. |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Full-viewport hero. Contains: overline, headline with accent span, subheadline, dual CTA row, trust line. Background is the GooeyCanvas. |
| QuickStartForm | Custom | Overlapping card at bottom of hero. Contains 5 form fields + submit. |
| ProblemSection | Custom | Centered text section with stat highlight card. |
| ServicesSection | Custom | 3-col grid of 6 ServiceCard components. |
| PackagesSection | Custom | Dark background section with 3-col grid of 3 PackageCard components. |
| ContactFooterSection | Custom | 2-column layout: contact info left + condensed form right + bottom bar. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| GooeyCanvas | Custom (raw WebGL) | HeroSection (background, fixed position, z-0). Isolated in its own component for dynamic import. |
| ServiceCard | Custom | ServicesSection (×6). Receives: icon component, title, description. |
| PackageCard | Custom | PackagesSection (×3). Receives: name, price, description, bullets[], featured boolean. |
| ScrollReveal | Custom (GSAP hook) | All sections. Wraps children with GSAP ScrollTrigger fade+slide entrance. Configurable direction, stagger, delay. |

### Hooks

| Hook | Purpose |
|------|---------|
| useGooeyShader | Manages WebGL lifecycle: shader compilation, uniform updates, resize, RAF loop, cleanup. |
| useScrollReveal | GSAP ScrollTrigger setup for section entrance animations. Returns a ref to attach to the animated container. |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Gooey slime metaball shader | Three.js (raw WebGL) | Custom fragment shader with 9 SDF metaballs, 2 layers, noise distortion, scroll-driven warping, mouse orb. Fullscreen triangle render. Uniforms updated per frame from Lenis velocity and mouse position. | **High** 🔒 |
| Hero entrance sequence | GSAP (timeline) | Staggered fade+translateY on 5 elements (overline → headline → subheadline → CTAs → trust line) with 0.2s delay increments. Single timeline on mount. | Low |
| Section scroll reveals | GSAP + ScrollTrigger | Reusable ScrollReveal component. Default: opacity 0→1, y 30→0, 0.7s, power3.out. Configurable direction (y/x), stagger, trigger position. All sections below hero. | Medium |
| Nav background transition | CSS class toggle + transition | ScrollTrigger at 100vh toggles `nav--scrolled` class. CSS handles background/border fade (0.3s ease). | Low |
| Hero canvas opacity fade | Inline style | scrollProgress = scrollY / innerHeight. Canvas opacity = max(0, 1 - scrollProgress). Updated per scroll frame via Lenis callback. | Low |
| Service card hover | CSS transition | translateY(-4px), box-shadow, border-color change. 0.25s ease. Pure CSS. | Low |
| Package card hover | CSS transition | CTA background/border change. 0.2s ease. Pure CSS. | Low |
| Mobile menu | CSS transition | Slide-down panel with height/opacity transition. | Low |

## State & Logic

### Lenis ↔ Shader Bridge
Lenis is initialized at the app root level. Its `onScroll` callback feeds normalized velocity to the GooeyCanvas component via a shared ref (not React state — to avoid re-renders). The GooeyCanvas RAF loop reads this ref value and writes it to the `u_scrollSpeed` uniform each frame.

### Form Submission (×2 forms)
Both forms (QuickStartForm and ContactFooterSection form) are uncontrolled with simple onSubmit handlers. No API integration — on submit, log form data to console and display a success message (replace form content with confirmation text).

### Shader Lifecycle
The GooeyCanvas initializes WebGL in a useEffect with `[]` dependency. It compiles shaders, creates the fullscreen triangle buffer, and starts the RAF loop. Cleanup cancels RAF and deletes WebGL resources. The canvas uses `next/dynamic` with `ssr: false` to avoid Next.js hydration mismatches (WebGL is client-only).

## Other Key Decisions

### Raw WebGL over R3F
The gooey effect is a single fullscreen fragment shader — no 3D scene, no objects, no camera, no renderer features beyond a basic triangle draw. Using @react-three/fiber would add unnecessary abstraction overhead. Instead, use Three.js `WebGLRenderer` directly with a `ShaderMaterial` on a `BufferGeometry` triangle, or even plain WebGL2 without Three.js. Three.js is chosen for its cross-browser WebGL compatibility and cleanup helpers.

### Dynamic Import for GooeyCanvas
The WebGL canvas component must be lazy-loaded via `next/dynamic` with `ssr: false` to prevent server-side rendering issues. This also improves initial page load time since the shader is below-the-fold critical path only for the hero.
