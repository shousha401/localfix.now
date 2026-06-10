import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Brand palette (matches the site's design tokens).
const NAVY = 0x0f2a44;
const ORANGE = 0xe5742b;
const ORANGE_DEEP = 0xc76024;
const TAN = 0xd9cfc2;
const SLATE = 0x5f6f80;
const CREAM = 0xf0ebe3;
const CREAM_LIGHT = 0xfaf7f2;

function material(color: number) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.12 });
}

function extrude(shape: THREE.Shape, depth: number, bevel = 0.03) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
  });
  geo.center();
  return geo;
}

function roundedRectShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}

function gearGeometry(teeth: number, outerR: number, rootR: number, holeR: number, depth: number) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pt = (f: number, r: number): [number, number] => [
      Math.cos(a + step * f) * r,
      Math.sin(a + step * f) * r,
    ];
    if (i === 0) shape.moveTo(...pt(0, rootR));
    else shape.lineTo(...pt(0, rootR));
    shape.lineTo(...pt(0.2, rootR));
    shape.lineTo(...pt(0.3, outerR));
    shape.lineTo(...pt(0.65, outerR));
    shape.lineTo(...pt(0.75, rootR));
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, holeR, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return extrude(shape, depth);
}

// Classic arrow-pointer outline, tip at the local origin pointing up-left.
function cursorGeometry(scale: number) {
  const shape = new THREE.Shape();
  const pts: Array<[number, number]> = [
    [0, 0],
    [0, -1.0],
    [0.27, -0.74],
    [0.45, -1.08],
    [0.6, -1.0],
    [0.44, -0.68],
    [0.8, -0.62],
  ];
  shape.moveTo(pts[0][0] * scale, pts[0][1] * scale);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0] * scale, pts[i][1] * scale);
  shape.closePath();
  return extrude(shape, 0.1 * scale, 0.015);
}

// One "<" chevron of the </> code tag; mirror with rotation.y for ">".
function codeChevronGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0.55, 0.75);
  shape.lineTo(-0.5, 0);
  shape.lineTo(0.55, -0.75);
  shape.lineTo(0.55, -0.45);
  shape.lineTo(-0.05, 0);
  shape.lineTo(0.55, 0.45);
  shape.closePath();
  return extrude(shape, 0.3, 0.04);
}

// Flow chevron pointing +x (the workflow "pipeline" arrows).
function flowChevronGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.38, 0);
  shape.lineTo(0.8, 0.45);
  shape.lineTo(0.38, 0.9);
  shape.lineTo(0, 0.9);
  shape.lineTo(0.42, 0.45);
  shape.closePath();
  return extrude(shape, 0.16, 0.02);
}

// --- Object builders. Each returns a Group centered on its own origin; the
// --- layout() pass places the group via viewport fractions.

// Service #1: web design — a tidy browser-window card with a cursor about to
// click its button.
function buildBrowserCard() {
  const group = new THREE.Group();

  const body = new THREE.Mesh(new RoundedBoxGeometry(2.4, 1.7, 0.12, 4, 0.06), material(NAVY));
  group.add(body);

  const header = new THREE.Mesh(new RoundedBoxGeometry(2.4, 0.32, 0.13, 4, 0.06), material(TAN));
  header.position.set(0, 0.69, 0.01);
  group.add(header);

  const dotColors = [ORANGE, ORANGE_DEEP, SLATE];
  dotColors.forEach((color, i) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), material(color));
    dot.position.set(-1.0 + i * 0.16, 0.69, 0.1);
    group.add(dot);
  });

  // Fake text lines (left column).
  const barWidths = [1.3, 1.0, 0.8];
  barWidths.forEach((w, i) => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(w, 0.07, 0.02), material(CREAM));
    bar.position.set(-1.05 + w / 2, 0.32 - i * 0.18, 0.08);
    group.add(bar);
  });

  // Image placeholder with a mountains + sun glyph (right column).
  const placeholder = new THREE.Mesh(new RoundedBoxGeometry(0.7, 0.5, 0.04, 3, 0.04), material(SLATE));
  placeholder.position.set(0.62, 0.18, 0.08);
  group.add(placeholder);

  const mountains = new THREE.Shape();
  mountains.moveTo(-0.26, -0.14);
  mountains.lineTo(-0.08, 0.06);
  mountains.lineTo(0.02, -0.03);
  mountains.lineTo(0.16, 0.1);
  mountains.lineTo(0.28, -0.14);
  mountains.closePath();
  const ridge = new THREE.Mesh(extrude(mountains, 0.02, 0.005), material(CREAM));
  ridge.position.set(0.62, 0.12, 0.12);
  group.add(ridge);

  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), material(ORANGE));
  sun.position.set(0.45, 0.32, 0.12);
  group.add(sun);

  // The card's call-to-action button…
  const button = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.22, 0.06, 3, 0.03), material(ORANGE));
  button.position.set(-0.74, -0.45, 0.08);
  group.add(button);

  // …and a cursor hovering over it, dipping in a soft "click" every ~5s.
  const cursor = new THREE.Mesh(cursorGeometry(0.3), material(CREAM_LIGHT));
  cursor.position.set(-0.62, -0.44, 0.26);
  cursor.rotation.z = -0.3;
  group.add(cursor);

  const cursorBaseZ = cursor.position.z;
  const update = (t: number) => {
    const cyclePos = t % 5;
    const dip = cyclePos < 0.4 ? Math.sin((cyclePos / 0.4) * Math.PI) * 0.1 : 0;
    cursor.position.z = cursorBaseZ - dip;
  };

  return { group, update };
}

// Service #2: workflow automation — two gears meshing at the correct tooth
// ratio, turning each other with no hand on them.
function buildGearworks() {
  const group = new THREE.Group();

  const big = new THREE.Mesh(gearGeometry(10, 1.0, 0.82, 0.32, 0.28), material(ORANGE));
  group.add(big);

  const small = new THREE.Mesh(gearGeometry(7, 0.55, 0.42, 0.18, 0.28), material(NAVY));
  small.position.set(1.16, 0.72, 0);
  // Phase offset so the teeth interleave instead of colliding.
  small.rotation.z = Math.PI / 7;
  group.add(small);

  group.scale.setScalar(0.85);

  const update = (_t: number, dt: number) => {
    big.rotation.z += 0.15 * dt;
    small.rotation.z -= 0.15 * (10 / 7) * dt;
  };

  return { group, update };
}

// Service #3: AI chatbot — a speech bubble with the "assistant is typing…"
// dot pulse.
function buildChatBubble() {
  const group = new THREE.Group();

  const bubble = new THREE.Mesh(extrude(roundedRectShape(1.6, 1.1, 0.28), 0.25), material(ORANGE_DEEP));
  group.add(bubble);

  const tailShape = new THREE.Shape();
  tailShape.moveTo(0, 0);
  tailShape.lineTo(0.36, 0);
  tailShape.lineTo(0.02, -0.38);
  tailShape.closePath();
  const tail = new THREE.Mesh(extrude(tailShape, 0.22, 0.02), material(ORANGE_DEEP));
  tail.position.set(-0.45, -0.62, 0);
  group.add(tail);

  const dots = [-0.35, 0, 0.35].map((x) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), material(CREAM));
    dot.position.set(x, 0, 0.18);
    group.add(dot);
    return dot;
  });

  const update = (t: number) => {
    dots.forEach((dot, i) => {
      const pulse = Math.max(0, Math.sin(t * 2.2 - i * 0.7));
      dot.scale.setScalar(1 + pulse * 0.3);
    });
  };

  return { group, update };
}

// The developer badge: </> in navy with an orange slash.
function buildCodeTag() {
  const group = new THREE.Group();

  const chevronGeo = codeChevronGeometry();
  const left = new THREE.Mesh(chevronGeo, material(NAVY));
  left.position.x = -0.78;
  group.add(left);

  const right = new THREE.Mesh(chevronGeo, material(NAVY));
  right.rotation.y = Math.PI;
  right.position.x = 0.78;
  group.add(right);

  const slash = new THREE.Mesh(new RoundedBoxGeometry(0.18, 1.5, 0.3, 3, 0.04), material(ORANGE));
  slash.rotation.z = -0.32;
  group.add(slash);

  group.scale.setScalar(0.8);
  return { group };
}

// Work flowing through the system: three chevrons rippling left to right.
function buildPipeline() {
  const group = new THREE.Group();

  const geo = flowChevronGeometry();
  const colors = [TAN, SLATE, ORANGE];
  const chevrons = colors.map((color, i) => {
    const mesh = new THREE.Mesh(geo, material(color));
    mesh.position.x = (i - 1) * 0.62;
    group.add(mesh);
    return mesh;
  });

  group.scale.setScalar(0.8);

  const update = (t: number) => {
    chevrons.forEach((mesh, i) => {
      mesh.position.y = Math.sin(t * 1.1 - i * 0.55) * 0.09;
    });
  };

  return { group, update };
}

interface PlacedObject {
  build: () => { group: THREE.Group; update?: (t: number, dt: number) => void };
  // Position as fractions of the visible half-width/half-height at this depth,
  // so the composition holds across screen sizes and the centered headline
  // stays clear.
  xFrac: number;
  yFrac: number;
  z: number;
  baseRot: [number, number, number];
  bobAmp: number;
  bobSpeed: number;
  phase: number;
  swayAmp?: number; // gentle rotation.y oscillation
  swaySpeed?: number;
}

const PLACEMENTS: PlacedObject[] = [
  { build: buildBrowserCard, xFrac: -0.66, yFrac: 0.12, z: 0, baseRot: [-0.05, 0.25, 0], bobAmp: 0.2, bobSpeed: 0.4, phase: 0, swayAmp: 0.1, swaySpeed: 0.4 },
  { build: buildGearworks, xFrac: 0.66, yFrac: 0.02, z: -0.5, baseRot: [0, -0.2, 0], bobAmp: 0.18, bobSpeed: 0.35, phase: 2.1 },
  { build: buildChatBubble, xFrac: 0.4, yFrac: 0.62, z: -1.5, baseRot: [0, -0.15, 0], bobAmp: 0.22, bobSpeed: 0.45, phase: 3.7 },
  { build: buildCodeTag, xFrac: -0.4, yFrac: 0.6, z: -1.2, baseRot: [0, 0.15, 0], bobAmp: 0.2, bobSpeed: 0.32, phase: 1.2, swayAmp: 0.18, swaySpeed: 0.25 },
  { build: buildPipeline, xFrac: -0.45, yFrac: -0.72, z: -2, baseRot: [-0.2, 0, 0], bobAmp: 0.12, bobSpeed: 0.3, phase: 4.8 },
];

const CAMERA_Z = 10;
const HALF_FOV_TAN = Math.tan(THREE.MathUtils.degToRad(22.5));

/**
 * Decorative 3D scene rendered behind the hero copy: a browser-window card,
 * meshing gears, a typing chat bubble, a </> tag, and flow chevrons — the
 * LocalFix service menu in silhouette. Mounted desktop-only (see HeroSection)
 * and lazy-loaded, so mobile and crawlers never pay for three.js. Renders
 * only while the hero is on screen.
 */
export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return; // No WebGL — the CSS gradient hero stays as-is.
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    // Fog toward the hero's cream background reads as depth fade.
    scene.fog = new THREE.Fog(CREAM, 10, 20);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0, CAMERA_Z);

    scene.add(new THREE.HemisphereLight(0xffffff, TAN, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.8);
    key.position.set(4, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(ORANGE, 0.6);
    rim.position.set(-6, -3, 2);
    scene.add(rim);

    const objects = PLACEMENTS.map((def) => {
      const { group, update } = def.build();
      group.rotation.set(...def.baseRot);
      scene.add(group);
      return { def, group, update, baseY: 0 };
    });

    function layout() {
      const w = host!.clientWidth || 1;
      const h = host!.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      for (const item of objects) {
        const dist = CAMERA_Z - item.def.z;
        const halfH = HALF_FOV_TAN * dist;
        const halfW = halfH * camera.aspect;
        item.group.position.x = item.def.xFrac * halfW;
        item.baseY = item.def.yFrac * halfH;
        item.group.position.z = item.def.z;
      }
    }
    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(host);

    const mouse = { x: 0, y: 0 };
    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    }
    function onPointerLeave() {
      mouse.x = 0;
      mouse.y = 0;
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);

    let last = performance.now();
    let elapsed = 0;
    let rafId = 0;
    let running = false;

    function frame(now: number) {
      rafId = requestAnimationFrame(frame);
      // Clamp dt so resuming after a pause doesn't jump the animation.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      elapsed += dt;

      // Soft fade-in on first load.
      if (elapsed < 1) {
        canvas!.style.opacity = String(Math.min(1, elapsed / 0.9));
      } else if (canvas!.style.opacity !== '1') {
        canvas!.style.opacity = '1';
      }

      for (const { def, group, update, baseY } of objects) {
        group.position.y = baseY + Math.sin(elapsed * def.bobSpeed + def.phase) * def.bobAmp;
        if (def.swayAmp) {
          group.rotation.y =
            def.baseRot[1] + Math.sin(elapsed * (def.swaySpeed ?? 0.3) + def.phase) * def.swayAmp;
        }
        update?.(elapsed, dt);
      }

      // Gentle camera parallax toward the cursor (frame-rate independent lerp).
      const ease = 1 - Math.exp(-3.5 * dt);
      camera.position.x += (mouse.x * 0.9 - camera.position.x) * ease;
      camera.position.y += (-mouse.y * 0.6 - camera.position.y) * ease;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    function start() {
      if (running) return;
      running = true;
      last = performance.now();
      rafId = requestAnimationFrame(frame);
    }
    function stop() {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
    }

    // Render only while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          (obj.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{ opacity: 0 }}
    />
  );
}
