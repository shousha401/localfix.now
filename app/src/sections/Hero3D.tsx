import { useEffect, useState } from 'react';

// The Spline web component is a custom element loaded at runtime, so teach
// TypeScript/JSX about the <spline-viewer> tag and its attributes. React 19
// exposes IntrinsicElements under the React.JSX namespace.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { url?: string; 'events-target'?: string };
    }
  }
}

const SCENE_URL = 'https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode';
const VIEWER_SRC = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';

/**
 * Lazy, SSR-safe 3D hero accent.
 *
 * Renders nothing on the server and nothing on phones or for users who prefer
 * reduced motion — so the heavy WebGL viewer (~1MB+) never blocks the headline
 * (our LCP) and never lands on mobile, where it would hurt Core Web Vitals.
 * On capable desktops it loads the viewer script and mounts the scene a beat
 * after the text has painted.
 */
export default function Hero3D() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduced || mobile) return;

    // Load the viewer custom element once.
    if (!document.querySelector(`script[src="${VIEWER_SRC}"]`)) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = VIEWER_SRC;
      document.head.appendChild(script);
    }

    // Let the headline + CTAs paint before we mount WebGL.
    const t = window.setTimeout(() => setShow(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        // Fade the scene out behind the centered text so copy stays readable.
        maskImage: 'radial-gradient(ellipse at center, transparent 0%, transparent 38%, black 78%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, transparent 0%, transparent 38%, black 78%)',
        opacity: 0.9,
      }}
    >
      <spline-viewer url={SCENE_URL} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
