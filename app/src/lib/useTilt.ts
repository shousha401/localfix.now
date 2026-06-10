import { useEffect, useRef } from 'react';

/**
 * Subtle pointer-follow 3D tilt for cards. Inert on touch screens and for
 * users who prefer reduced motion — the element's CSS hover styles remain
 * the fallback there.
 */
export function useTilt<T extends HTMLElement>(maxTiltDeg = 4) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    if (!mq.matches) return;

    let rafId = 0;

    function onPointerMove(event: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el!.style.transform = `perspective(900px) rotateX(${(-y * maxTiltDeg).toFixed(2)}deg) rotateY(${(x * maxTiltDeg).toFixed(2)}deg) translateY(-4px)`;
      });
    }

    function onPointerLeave() {
      cancelAnimationFrame(rafId);
      el!.style.transform = '';
    }

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onPointerLeave);
      el.style.transform = '';
    };
  }, [maxTiltDeg]);

  return ref;
}
