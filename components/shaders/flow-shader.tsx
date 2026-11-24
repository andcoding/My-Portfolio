"use client";

import { Mesh, Program, Renderer, Transform, Triangle } from "ogl";
import { useEffect, useRef, type ReactNode } from "react";

type FlowShaderProps = {
  className?: string;
  speed?: [number, number];
  iterations?: number;
  scale?: number;
  brightness?: number;
  fadeRx?: number;
  fadeRy?: number;
  fadeCx?: number;
  fadeCy?: number;
};

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uSpeed;
uniform float uScale;
uniform float uBrightness;
uniform int uIterations;
uniform vec3 uBackground;
uniform vec4 uFade;

float noise(vec2 p) {
  return sin(p.x + sin(p.y + uTime * uSpeed.x))
    * sin(p.y * p.x * 0.1 + uTime * uSpeed.y);
}

float fadeAlpha(float d) {
  float t = clamp(1.0 - d, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = uv - 0.5;
  p.x *= uResolution.x / uResolution.y;
  p *= uScale;

  vec2 drift = vec2(sin(uTime * 0.025), cos(uTime * 0.025)) * 0.08;
  vec2 result = vec2(0.0);

  for (int i = 0; i < 24; i++) {
    if (i >= uIterations) break;
    float a = noise(p);
    float b = noise(p + vec2(0.05, 0.0));
    float c = noise(p + vec2(0.0, 0.05));
    vec2 gradient = vec2(b - a, c - a) * 20.0;
    p += vec2(-gradient.y, gradient.x) * 0.25 + gradient * 0.005 + drift;
    result = gradient;
  }

  float energy = clamp(length(result) * 0.18, 0.0, 1.0);
  vec3 low = vec3(0.055, 0.055, 0.06);
  vec3 high = vec3(0.42, 0.42, 0.44);
  vec3 flow = mix(low, high, energy) * uBrightness;

  vec2 fadeUv = vec2(uv.x, 1.0 - uv.y);
  float aspect = uResolution.x / uResolution.y;
  float dx = ((fadeUv.x - uFade.x) * aspect) / uFade.z;
  float dy = (fadeUv.y - uFade.y) / uFade.w;
  float alpha = fadeAlpha(sqrt(dx * dx + dy * dy));

  vec3 color = mix(uBackground, flow, alpha);
  gl_FragColor = vec4(color, 1.0);
}
`;

export function FlowShader({
  className,
  speed = [0.0, 0.08],
  iterations = 10,
  scale = 6,
  brightness = 0.72,
  fadeRx = 1.35,
  fadeRy = 0.58,
  fadeCx = 0.5,
  fadeCy = 0.0,
}: FlowShaderProps): ReactNode {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const initialPropsRef = useRef({
    speed,
    iterations,
    scale,
    brightness,
    fadeRx,
    fadeRy,
    fadeCx,
    fadeCy,
  });

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const initialProps = initialPropsRef.current;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio || 1, 1.25),
        alpha: false,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      host.classList.add("portfolio-backdrop-fallback");
      return;
    }

    const gl = renderer.gl;
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";
    host.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uResolution: { value: [1, 1] },
        uTime: { value: 0 },
        uSpeed: { value: [...initialProps.speed] },
        uScale: { value: initialProps.scale },
        uBrightness: { value: initialProps.brightness },
        uIterations: { value: initialProps.iterations },
        uBackground: { value: [0.0196, 0.0196, 0.0196] },
        uFade: {
          value: [
            initialProps.fadeCx,
            initialProps.fadeCy,
            initialProps.fadeRx,
            initialProps.fadeRy,
          ],
        },
      },
    });

    const syncBackground = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const value = rootStyles.getPropertyValue("--background").trim();
      const hex = value.startsWith("#") ? value.slice(1) : "";
      if (/^[0-9a-f]{6}$/i.test(hex)) {
        program.uniforms.uBackground.value = [
          parseInt(hex.slice(0, 2), 16) / 255,
          parseInt(hex.slice(2, 4), 16) / 255,
          parseInt(hex.slice(4, 6), 16) / 255,
        ];
      }
    };
    syncBackground();

    const themeObserver = new MutationObserver(syncBackground);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
      ];
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let frame = 0;
    let onScreen = true;
    let documentVisible = true;
    const start = performance.now();

    const intersectionObserver = new IntersectionObserver((entries) => {
      onScreen = entries[0]?.isIntersecting ?? false;
    });
    intersectionObserver.observe(host);

    const handleVisibility = () => {
      documentVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const tick = () => {
      if (onScreen && documentVisible) {
        program.uniforms.uTime.value = (performance.now() - start) / 1000;
        renderer.render({ scene });
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      if (gl.canvas.parentElement === host) host.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={className ?? "absolute inset-0"}
    />
  );
}
