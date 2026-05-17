import { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
  v_uv = a_pos * 0.5 + 0.5;
}
`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 v_uv;

uniform float u_time;
uniform vec2 u_res;
uniform float u_scrollSpeed;
uniform float u_gooeyness;
uniform vec2 u_mouse;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float metaballField(vec2 p, vec2 center, float radius) {
  return radius / length(p - center);
}

vec3 palette(float t, float hueShift) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557) + vec3(hueShift * 0.1, hueShift * 0.05, -hueShift * 0.05);
  return a + b * cos(6.28318 * (c * t + d));
}

vec4 gooeyLayer(vec2 uv, float t, float scroll, float layerSeed, float scale, float gooeyness) {
  vec2 p = uv * scale;
  p += vec2(noise(p * 0.1 + t * 0.05 + layerSeed), noise(p * 0.1 + t * 0.05 + layerSeed + 50.0)) * 0.3;

  float field = 0.0;
  float md = 100.0;

  vec2 centers[9];
  centers[0] = vec2(0.5 + sin(t * 0.07 + layerSeed) * 0.3, 0.5 + cos(t * 0.09 + layerSeed * 1.3) * 0.3);
  centers[1] = vec2(0.5 + cos(t * 0.06 + layerSeed * 2.1) * 0.35, 0.5 + sin(t * 0.08 + layerSeed * 0.7) * 0.25);
  centers[2] = vec2(0.5 + sin(t * 0.05 + layerSeed * 1.7) * 0.25, 0.5 + cos(t * 0.07 + layerSeed * 2.3) * 0.35);
  centers[3] = vec2(0.3 + sin(t * 0.11 + layerSeed * 0.3) * 0.2, 0.7 + cos(t * 0.13 + layerSeed * 1.1) * 0.2);
  centers[4] = vec2(0.7 + cos(t * 0.12 + layerSeed * 1.9) * 0.2, 0.3 + sin(t * 0.1 + layerSeed * 0.5) * 0.2);
  centers[5] = vec2(0.5 + sin(t * 0.04 + layerSeed * 3.1) * 0.4, 0.5 + cos(t * 0.06 + layerSeed * 2.7) * 0.4);
  centers[6] = vec2(0.2 + cos(t * 0.09 + layerSeed * 0.9) * 0.15, 0.4 + sin(t * 0.07 + layerSeed * 1.5) * 0.15);
  centers[7] = vec2(0.8 + sin(t * 0.08 + layerSeed * 1.2) * 0.15, 0.6 + cos(t * 0.1 + layerSeed * 0.8) * 0.15);
  centers[8] = vec2(0.5 + cos(t * 0.03 + scroll * 0.1) * 0.2, 0.5 + sin(t * 0.035 + scroll * 0.08) * 0.2);

  float radii[9];
  radii[0] = 0.12;
  radii[1] = 0.10;
  radii[2] = 0.09;
  radii[3] = 0.07;
  radii[4] = 0.07;
  radii[5] = 0.14;
  radii[6] = 0.06;
  radii[7] = 0.06;
  radii[8] = 0.08;

  for (int i = 0; i < 9; i++) {
    float bi = float(i);
    vec2 c = centers[i];
    float r = radii[i] * (0.8 + 0.2 * sin(t * 0.15 + bi * 2.0 + layerSeed));
    r *= (1.0 + scroll * 0.3);
    float d = length(p - c);
    md = min(md, d);
    field += metaballField(p, c, r);
  }

  float threshold = mix(1.0, 3.5, gooeyness);
  float edge = 0.1 + gooeyness * 0.3;
  float alpha = smoothstep(threshold + edge, threshold - edge, field);
  float distort = (noise(p * 3.0 + t * 0.2 + layerSeed * 10.0) - 0.5) * 0.1 * gooeyness;
  float colorT = fract(alpha * 2.0 + t * 0.02 + layerSeed + distort);
  vec3 col = palette(colorT, layerSeed + scroll * 0.1);
  col *= (0.7 + 0.3 * alpha);
  return vec4(col, alpha);
}

float slimeEdge(float alpha, vec2 uv, float gooeyness) {
  float n1 = noise(uv * 8.0 + vec2(100.0, 200.0));
  float n2 = noise(uv * 15.0 + vec2(300.0, 400.0));
  float roughness = n1 * 0.06 + n2 * 0.03;
  roughness *= gooeyness;
  float edge1 = smoothstep(0.5 + roughness, 0.0, abs(alpha - 0.3));
  float edge2 = smoothstep(0.3 + roughness * 0.5, 0.0, abs(alpha - 0.1));
  return max(edge1, edge2) * 0.4;
}

void main() {
  vec2 uv = v_uv;
  vec2 aspect = vec2(u_res.x / u_res.y, 1.0);
  uv.x *= aspect.x;

  float t = u_time * 0.3;
  float scroll = u_scrollSpeed * 2.0;
  float gooeyness = u_gooeyness < 0.0 ? 0.6 : u_gooeyness;

  // Layer 1
  vec4 layer1 = gooeyLayer(uv, t, scroll, 0.0, 1.5, gooeyness);
  layer1.rgb *= vec3(1.1, 0.9, 0.85);

  // Layer 2
  vec4 layer2 = gooeyLayer(uv, t * 1.2 + 10.0, scroll * 1.1, 100.0, 2.0, gooeyness * 0.9);
  layer2.rgb *= vec3(0.85, 1.0, 1.1);

  // Composite
  vec3 col = mix(layer1.rgb, layer2.rgb, layer2.a * 0.5);
  float alpha = max(layer1.a, layer2.a * 0.7);

  // Edge highlights
  float edgeHighlight = slimeEdge(alpha, uv, gooeyness);
  vec3 edgeCol = vec3(0.9, 0.85, 0.8) * edgeHighlight;
  col += edgeCol;
  alpha = max(alpha, edgeHighlight * 0.5);

  // Mouse orb
  if (u_mouse.x >= 0.0) {
    vec2 mUV = u_mouse;
    mUV.x *= aspect.x;
    float mDist = length(uv - mUV);
    float mInfluence = smoothstep(0.3, 0.0, mDist);
    float mField = 0.05 / max(mDist, 0.01);
    float mAlpha = smoothstep(2.0, 0.5, mField) * mInfluence;
    col = mix(col, vec3(0.95, 0.9, 0.85), mAlpha * 0.3);
    alpha = max(alpha, mAlpha * 0.2);
  }

  // Inner texture
  float detail = noise(uv * 20.0 + t * 0.5);
  col *= (0.95 + detail * 0.05);

  // Vignette
  float vig = 1.0 - smoothstep(0.5, 1.5, length(v_uv - 0.5) * 2.0);
  col *= (0.7 + vig * 0.3);

  gl_FragColor = vec4(col, alpha * 0.85);
}
`;

interface GooeyCanvasProps {
  scrollSpeedRef: React.MutableRefObject<number>;
}

export default function GooeyCanvas({ scrollSpeedRef }: GooeyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1, y: -1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    // Compile shader
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Fullscreen triangle
    const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uScrollSpeed = gl.getUniformLocation(program, 'u_scrollSpeed');
    const uGooeyness = gl.getUniformLocation(program, 'u_gooeyness');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    gl.uniform1f(uGooeyness, 0.6);
    gl.uniform2f(uMouse, -1.0, -1.0);

    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Resize handler
    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + 'px';
      canvas!.style.height = h + 'px';
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
    }
    resize();
    window.addEventListener('resize', resize);

    // Mouse handlers
    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight;
    }
    function onMouseLeave() {
      mouseRef.current.x = -1;
      mouseRef.current.y = -1;
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // Render loop
    let rafId: number;
    function render() {
      const time = performance.now() * 0.001;
      const speed = Math.max(-2.0, Math.min(2.0, scrollSpeedRef.current));

      gl!.uniform1f(uTime, time);
      gl!.uniform1f(uScrollSpeed, speed);
      gl!.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);

      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      rafId = requestAnimationFrame(render);
    }
    rafId = requestAnimationFrame(render);

    // Canvas opacity based on scroll
    function onScroll() {
      const progress = window.scrollY / window.innerHeight;
      canvas!.style.opacity = String(Math.max(0, 1 - progress));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [scrollSpeedRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
}
