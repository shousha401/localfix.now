import { useEffect, useRef } from 'react';

/**
 * Haunted Mode atmosphere layer. Lazy-loaded (see App.tsx) only while the
 * halloween theme is active, so it ships zero bytes the rest of the year.
 *
 * A single fixed canvas draws every animated effect — rising embers, ground
 * fog, a fading moon, passing bat flocks, and the "boo" ghost easter egg —
 * from pre-rendered gradient sprites, with the device-pixel ratio capped and
 * the loop paused while the tab is hidden. The flashlight cursor halo is a
 * blended div moved with a lerped rAF transform (hidden on touch devices via
 * CSS). Everything is aria-hidden and pointer-events: none. Visitors who
 * prefer reduced motion get only the static corner cobwebs.
 *
 * Colors here are intentionally hardcoded: this layer only ever renders on
 * the halloween palette, and canvas can't read CSS custom properties.
 */

interface Ember {
  baseX: number;
  y: number;
  size: number;
  speed: number;
  swayAmp: number;
  swayFreq: number;
  phase: number;
  alpha: number;
}

interface FogPuff {
  x: number;
  yFrac: number;
  vx: number;
  scale: number;
  alpha: number;
}

interface Bat {
  offsetX: number;
  offsetY: number;
  phase: number;
  scale: number;
}

interface Flock {
  dir: 1 | -1;
  x: number;
  baseY: number;
  speed: number;
  bats: Bat[];
}

interface GhostSprite {
  baseX: number;
  y: number;
  vy: number;
  wobbleAmp: number;
  wobbleFreq: number;
  phase: number;
  scale: number;
  born: number;
  life: number;
}

function makeRadialSprite(size: number, stops: Array<[number, string]>): HTMLCanvasElement {
  const sprite = document.createElement('canvas');
  sprite.width = size;
  sprite.height = size;
  const g = sprite.getContext('2d');
  if (g) {
    const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    for (const [offset, color] of stops) grad.addColorStop(offset, color);
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
  }
  return sprite;
}

function drawBat(g: CanvasRenderingContext2D, x: number, y: number, scale: number, flap: number) {
  g.save();
  g.translate(x, y);
  g.scale(scale, scale);
  g.beginPath();
  g.moveTo(0, 0);
  g.quadraticCurveTo(-6, -4 - 4 * flap, -14, -2 - 7 * flap);
  g.quadraticCurveTo(-9, 2 - 2 * flap, -16, 4 - 5 * flap);
  g.quadraticCurveTo(-7, 4, 0, 2.5);
  g.quadraticCurveTo(7, 4, 16, 4 - 5 * flap);
  g.quadraticCurveTo(9, 2 - 2 * flap, 14, -2 - 7 * flap);
  g.quadraticCurveTo(6, -4 - 4 * flap, 0, 0);
  g.closePath();
  g.fillStyle = '#1D1133';
  g.fill();
  g.strokeStyle = 'rgba(255, 122, 47, 0.35)';
  g.lineWidth = 0.75;
  g.stroke();
  g.restore();
}

function drawGhost(g: CanvasRenderingContext2D, x: number, y: number, scale: number, alpha: number) {
  g.save();
  g.translate(x, y);
  g.scale(scale, scale);
  g.globalAlpha = alpha;
  g.beginPath();
  g.arc(0, 0, 10, Math.PI, 0);
  g.lineTo(10, 12);
  g.quadraticCurveTo(7.5, 16, 5, 12);
  g.quadraticCurveTo(2.5, 16, 0, 12);
  g.quadraticCurveTo(-2.5, 16, -5, 12);
  g.quadraticCurveTo(-7.5, 16, -10, 12);
  g.closePath();
  g.fillStyle = 'rgba(236, 229, 250, 0.9)';
  g.fill();
  g.fillStyle = 'rgba(13, 9, 22, 0.9)';
  g.beginPath();
  g.arc(-3.5, -1.5, 1.8, 0, Math.PI * 2);
  g.arc(3.5, -1.5, 1.8, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.arc(0, 3.5, 1.6, 0, Math.PI * 2);
  g.fill();
  g.restore();
}

const COBWEB_PATHS = [
  'M0 0 L0 150',
  'M0 0 L58 138',
  'M0 0 L106 106',
  'M0 0 L138 58',
  'M0 0 L150 0',
  'M0 50 Q28 46 35 35 Q46 28 50 0',
  'M0 95 Q52 88 67 67 Q88 52 95 0',
  'M0 140 Q77 130 99 99 Q130 77 140 0',
];

function Cobweb({ side }: { side: 'left' | 'right' }) {
  return (
    <svg
      className="lf-cobweb"
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: side === 'left' ? 0 : undefined,
        right: side === 'right' ? 0 : undefined,
        zIndex: 30,
        pointerEvents: 'none',
        transform: side === 'right' ? 'scaleX(-1)' : undefined,
      }}
    >
      {COBWEB_PATHS.map((d) => (
        <path key={d} d={d} stroke="rgba(239, 232, 219, 0.15)" strokeWidth="1" />
      ))}
    </svg>
  );
}

export default function HalloweenFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.info(
      '%c🎃 Haunted Mode is on — type "boo" for a scare.',
      'color:#FF7A2F;background:#0D0916;padding:4px 10px;border-radius:6px;font-family:monospace',
    );

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const emberSprite = makeRadialSprite(32, [
      [0, 'rgba(255, 176, 92, 0.95)'],
      [0.3, 'rgba(255, 122, 47, 0.5)'],
      [1, 'rgba(255, 122, 47, 0)'],
    ]);
    const fogSprite = makeRadialSprite(480, [
      [0, 'rgba(126, 104, 190, 0.16)'],
      [1, 'rgba(126, 104, 190, 0)'],
    ]);
    const moonHalo = makeRadialSprite(320, [
      [0, 'rgba(232, 225, 245, 0.3)'],
      [0.4, 'rgba(232, 225, 245, 0.08)'],
      [1, 'rgba(232, 225, 245, 0)'],
    ]);

    const embers: Ember[] = [];
    const fog: FogPuff[] = [];
    const flocks: Flock[] = [];
    const ghosts: GhostSprite[] = [];
    let nextFlockAt = performance.now() + 2500;

    const seedEmbers = () => {
      embers.length = 0;
      const count = Math.round(Math.min(Math.max(w / 34, 22), 54));
      for (let i = 0; i < count; i++) {
        embers.push({
          baseX: Math.random() * w,
          y: Math.random() * h,
          size: 3 + Math.random() * 6,
          speed: 10 + Math.random() * 16,
          swayAmp: 10 + Math.random() * 20,
          swayFreq: 0.0004 + Math.random() * 0.0007,
          phase: Math.random() * Math.PI * 2,
          alpha: 0.2 + Math.random() * 0.45,
        });
      }
    };

    const seedFog = () => {
      fog.length = 0;
      for (let i = 0; i < 4; i++) {
        fog.push({
          x: Math.random() * w,
          yFrac: Math.random(),
          vx: (Math.random() < 0.5 ? -1 : 1) * (4 + Math.random() * 7),
          scale: 1.4 + Math.random(),
          alpha: 0.35 + Math.random() * 0.2,
        });
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (embers.length === 0) seedEmbers();
      if (fog.length === 0) seedFog();
      for (const e of embers) e.baseX = Math.min(e.baseX, w);
    };
    resize();

    const spawnFlock = () => {
      const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
      const count = 3 + Math.floor(Math.random() * 3);
      const bats: Bat[] = [];
      for (let i = 0; i < count; i++) {
        bats.push({
          offsetX: -(i * 30 + Math.random() * 20) * dir,
          offsetY: (Math.random() - 0.5) * 70,
          phase: Math.random() * Math.PI * 2,
          scale: 0.85 + Math.random() * 0.5,
        });
      }
      flocks.push({
        dir,
        x: dir === 1 ? -120 : w + 120,
        baseY: h * (0.1 + Math.random() * 0.22),
        speed: 150 + Math.random() * 70,
        bats,
      });
    };

    const spawnGhosts = (count: number) => {
      const now = performance.now();
      for (let i = 0; i < count; i++) {
        ghosts.push({
          baseX: Math.random() * w,
          y: h + 30 + Math.random() * 140,
          vy: 50 + Math.random() * 45,
          wobbleAmp: 14 + Math.random() * 18,
          wobbleFreq: 0.002 + Math.random() * 0.002,
          phase: Math.random() * Math.PI * 2,
          scale: 0.8 + Math.random() * 0.7,
          born: now,
          life: 4500 + Math.random() * 2000,
        });
      }
    };

    // Flashlight cursor halo.
    let gx = -600;
    let gy = -600;
    let targetX = -600;
    let targetY = -600;
    let glowSeen = false;
    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!glowSeen && glow) {
        glow.style.opacity = '1';
        glowSeen = true;
      }
    };

    // "boo" easter egg (ignores keystrokes inside form fields).
    let buffer = '';
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        buffer = '';
        return;
      }
      if (event.key.length === 1) {
        buffer = (buffer + event.key.toLowerCase()).slice(-3);
        if (buffer === 'boo') {
          buffer = '';
          spawnGhosts(14);
        }
      }
    };

    let raf = 0;
    let last = performance.now();
    let elapsed = 0;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      elapsed += dt * 1000;
      ctx.clearRect(0, 0, w, h);

      // Moon (fades away as the visitor scrolls past the hero).
      const moonOpacity = Math.max(0, 1 - window.scrollY / (h * 1.1));
      if (moonOpacity > 0.01) {
        const mx = w * 0.82;
        const my = Math.min(170, h * 0.22);
        ctx.globalAlpha = moonOpacity;
        ctx.drawImage(moonHalo, mx - 160, my - 160, 320, 320);
        ctx.globalAlpha = 0.92 * moonOpacity;
        ctx.fillStyle = '#E6DFF2';
        ctx.beginPath();
        ctx.arc(mx, my, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.12 * moonOpacity;
        ctx.fillStyle = '#0D0916';
        ctx.beginPath();
        ctx.arc(mx - 9, my - 6, 6, 0, Math.PI * 2);
        ctx.arc(mx + 8, my + 9, 4.5, 0, Math.PI * 2);
        ctx.arc(mx + 4, my - 12, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Embers.
      for (const e of embers) {
        e.y -= e.speed * dt;
        if (e.y < -24) {
          e.y = h + 24;
          e.baseX = Math.random() * w;
        }
        const x = e.baseX + Math.sin(elapsed * e.swayFreq + e.phase) * e.swayAmp;
        ctx.globalAlpha = e.alpha * (0.75 + 0.25 * Math.sin(elapsed * 0.003 + e.phase * 7));
        ctx.drawImage(emberSprite, x - e.size / 2, e.y - e.size / 2, e.size, e.size);
      }

      // Ground fog.
      for (const p of fog) {
        p.x += p.vx * dt;
        const span = 480 * p.scale;
        if (p.vx > 0 && p.x - span / 2 > w) p.x = -span / 2;
        if (p.vx < 0 && p.x + span / 2 < 0) p.x = w + span / 2;
        const y = h - 40 - p.yFrac * 80;
        ctx.globalAlpha = p.alpha;
        ctx.drawImage(fogSprite, p.x - span / 2, y - span * 0.3, span, span * 0.6);
      }

      // Bat flocks.
      ctx.globalAlpha = 1;
      if (now >= nextFlockAt) {
        spawnFlock();
        nextFlockAt = now + 14000 + Math.random() * 14000;
      }
      for (let i = flocks.length - 1; i >= 0; i--) {
        const flock = flocks[i];
        flock.x += flock.dir * flock.speed * dt;
        if ((flock.dir === 1 && flock.x - 260 > w) || (flock.dir === -1 && flock.x + 260 < 0)) {
          flocks.splice(i, 1);
          continue;
        }
        for (const bat of flock.bats) {
          const bx = flock.x + bat.offsetX;
          const by = flock.baseY + bat.offsetY + Math.sin(now * 0.004 + bat.phase) * 9;
          drawBat(ctx, bx, by, bat.scale, Math.sin(now * 0.02 + bat.phase));
        }
      }

      // Easter-egg ghosts.
      for (let i = ghosts.length - 1; i >= 0; i--) {
        const ghost = ghosts[i];
        const age = now - ghost.born;
        if (age > ghost.life) {
          ghosts.splice(i, 1);
          continue;
        }
        ghost.y -= ghost.vy * dt;
        const x = ghost.baseX + Math.sin(now * ghost.wobbleFreq + ghost.phase) * ghost.wobbleAmp;
        drawGhost(ctx, x, ghost.y, ghost.scale, 0.85 * (1 - age / ghost.life));
      }
      ctx.globalAlpha = 1;

      // Cursor halo follows with a soft lag.
      if (glowSeen && glow) {
        gx += (targetX - gx) * 0.14;
        gy += (targetY - gy) * 0.14;
        glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 35 }}
      />
      <div ref={glowRef} className="lf-cursor-glow" style={{ opacity: 0 }} />
      <Cobweb side="left" />
      <Cobweb side="right" />
    </div>
  );
}
