import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Brand palette (matches the site's design tokens).
const NAVY = 0x0f2a44;
const ORANGE = 0xe5742b;
const ORANGE_DEEP = 0xc76024;
const TAN = 0xd9cfc2;
const SLATE = 0x5f6f80;
const CREAM = 0xf0ebe3;

type ShapeKind = 'torusKnot' | 'icosahedron' | 'torus' | 'capsule' | 'octahedron' | 'sphere';

interface ShapeDef {
  kind: ShapeKind;
  color: number;
  // Position as fractions of the visible half-width/half-height at this depth,
  // so the composition holds across screen sizes and the centered headline
  // stays clear of the shapes.
  xFrac: number;
  yFrac: number;
  z: number;
  scale: number;
  rotX: number; // rad/s
  rotY: number; // rad/s
  bobAmp: number;
  bobSpeed: number;
  phase: number;
  flat?: boolean;
}

const SHAPES: ShapeDef[] = [
  { kind: 'torusKnot', color: ORANGE, xFrac: 0.68, yFrac: 0.32, z: 0, scale: 0.8, rotX: 0.12, rotY: 0.2, bobAmp: 0.22, bobSpeed: 0.5, phase: 0 },
  { kind: 'icosahedron', color: NAVY, xFrac: -0.66, yFrac: 0.42, z: -1, scale: 0.95, rotX: 0.18, rotY: 0.12, bobAmp: 0.18, bobSpeed: 0.42, phase: 1.7, flat: true },
  { kind: 'torus', color: TAN, xFrac: -0.6, yFrac: -0.42, z: -0.5, scale: 0.9, rotX: 0.22, rotY: 0.1, bobAmp: 0.2, bobSpeed: 0.36, phase: 3.1 },
  { kind: 'capsule', color: ORANGE_DEEP, xFrac: 0.62, yFrac: -0.46, z: -1, scale: 0.75, rotX: 0.1, rotY: 0.16, bobAmp: 0.24, bobSpeed: 0.46, phase: 4.4 },
  { kind: 'sphere', color: ORANGE, xFrac: -0.3, yFrac: 0.66, z: -3, scale: 0.4, rotX: 0, rotY: 0.05, bobAmp: 0.28, bobSpeed: 0.3, phase: 2.2 },
  { kind: 'icosahedron', color: SLATE, xFrac: 0.34, yFrac: 0.64, z: -3.5, scale: 0.5, rotX: 0.14, rotY: 0.2, bobAmp: 0.25, bobSpeed: 0.34, phase: 5.3, flat: true },
  { kind: 'octahedron', color: NAVY, xFrac: 0.1, yFrac: -0.72, z: -2, scale: 0.45, rotX: 0.16, rotY: 0.22, bobAmp: 0.2, bobSpeed: 0.4, phase: 0.9, flat: true },
];

function createGeometry(kind: ShapeKind): THREE.BufferGeometry {
  switch (kind) {
    case 'torusKnot':
      return new THREE.TorusKnotGeometry(0.9, 0.3, 140, 20);
    case 'icosahedron':
      return new THREE.IcosahedronGeometry(1, 0);
    case 'torus':
      return new THREE.TorusGeometry(0.85, 0.34, 22, 56);
    case 'capsule':
      return new THREE.CapsuleGeometry(0.55, 0.9, 6, 18);
    case 'octahedron':
      return new THREE.OctahedronGeometry(1, 0);
    case 'sphere':
      return new THREE.SphereGeometry(0.9, 28, 28);
  }
}

const CAMERA_Z = 10;
const HALF_FOV_TAN = Math.tan(THREE.MathUtils.degToRad(22.5));

/**
 * Decorative 3D scene rendered behind the hero copy. Mounted desktop-only
 * (see HeroSection) and lazy-loaded, so mobile and crawlers never pay for
 * three.js. Renders only while the hero is on screen.
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
    scene.fog = new THREE.Fog(CREAM, 9, 18);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0, CAMERA_Z);

    scene.add(new THREE.HemisphereLight(0xffffff, TAN, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.8);
    key.position.set(4, 6, 8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(ORANGE, 0.6);
    rim.position.set(-6, -3, 2);
    scene.add(rim);

    const meshes = SHAPES.map((def) => {
      const mesh = new THREE.Mesh(
        createGeometry(def.kind),
        new THREE.MeshStandardMaterial({
          color: def.color,
          roughness: 0.45,
          metalness: 0.12,
          flatShading: def.flat ?? false,
        }),
      );
      mesh.scale.setScalar(def.scale);
      mesh.rotation.set(def.phase, def.phase * 0.7, 0);
      scene.add(mesh);
      return { def, mesh, baseY: 0 };
    });

    function layout() {
      const w = host!.clientWidth || 1;
      const h = host!.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      for (const item of meshes) {
        const dist = CAMERA_Z - item.def.z;
        const halfH = HALF_FOV_TAN * dist;
        const halfW = halfH * camera.aspect;
        item.mesh.position.x = item.def.xFrac * halfW;
        item.baseY = item.def.yFrac * halfH;
        item.mesh.position.z = item.def.z;
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

      for (const { def, mesh, baseY } of meshes) {
        mesh.rotation.x += def.rotX * dt;
        mesh.rotation.y += def.rotY * dt;
        mesh.position.y = baseY + Math.sin(elapsed * def.bobSpeed + def.phase) * def.bobAmp;
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
      for (const { mesh } of meshes) {
        mesh.geometry.dispose();
        mesh.material.dispose();
      }
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
