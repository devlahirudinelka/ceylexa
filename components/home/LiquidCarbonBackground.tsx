"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

/**
 * Lightweight gate in front of LiquidCarbonCanvas.tsx (the actual
 * three.js / @react-three/fiber shader). Kept free of any three.js
 * import so that:
 *
 *  - Users who don't get the shader (reduced-motion, no WebGL, or a
 *    coarse-pointer/mobile device) never download that chunk at all —
 *    next/dynamic below code-splits it into its own lazily-fetched file.
 *  - The chunk that IS fetched is deferred to just after first paint
 *    (see the idle-callback effect), so the heavy WebGL init / shader
 *    compile doesn't compete with the hero's text for the main thread
 *    on first load.
 */

const LiquidCarbonCanvas = dynamic(() => import("./LiquidCarbonCanvas"), {
  ssr: false,
});

// Whether it's worth loading the shader at all. Skipped for:
//  - reduced-motion users (accessibility)
//  - browsers without WebGL
//  - coarse-pointer devices (phones/tablets) — two heavy per-pixel passes
//    (raymarch + a wide depth-of-field blur) aren't worth the battery/heat
//    cost on mobile GPUs, and the plain cream background reads fine there.
// Read via useSyncExternalStore so the SSR/hydration pass always agrees
// with the server (false), then syncs to the real client value right
// after — the React-recommended way to read a browser-only API without
// a setState-in-effect render flash.
function subscribeMediaChanges(callback: () => void) {
  const reduceMql = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerMql = window.matchMedia("(pointer: coarse)");
  reduceMql.addEventListener("change", callback);
  pointerMql.addEventListener("change", callback);
  return () => {
    reduceMql.removeEventListener("change", callback);
    pointerMql.removeEventListener("change", callback);
  };
}

// WebGL support never changes over a page's lifetime, so detect it once
// and cache it rather than creating a throwaway canvas/context on every
// snapshot read (useSyncExternalStore re-invokes the snapshot on renders).
let cachedHasWebGL: boolean | null = null;
function detectWebGL() {
  if (cachedHasWebGL !== null) return cachedHasWebGL;
  try {
    const canvas = document.createElement("canvas");
    cachedHasWebGL = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    cachedHasWebGL = false;
  }
  return cachedHasWebGL;
}

function getReadySnapshot() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (reduceMotion || isCoarsePointer) return false;
  return detectWebGL();
}

function getReadyServerSnapshot() {
  return false;
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function LiquidCarbonBackground({
  className = "",
}: {
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ready = useSyncExternalStore(subscribeMediaChanges, getReadySnapshot, getReadyServerSnapshot);
  const [mount, setMount] = useState(false);
  const [inView, setInView] = useState(true);

  // Defer fetching/mounting the heavy chunk until the browser is idle
  // (or a short timeout on browsers without requestIdleCallback, e.g.
  // Safari) so it doesn't compete with the hero's initial paint.
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    const win = window as IdleWindow;

    if (win.requestIdleCallback) {
      const handle = win.requestIdleCallback(
        () => {
          if (!cancelled) setMount(true);
        },
        { timeout: 500 }
      );
      return () => {
        cancelled = true;
        win.cancelIdleCallback?.(handle);
      };
    }

    const handle = window.setTimeout(() => {
      if (!cancelled) setMount(true);
    }, 150);
    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [ready]);

  // Pause the render loop while the hero is scrolled out of view. The
  // wrapper div is always rendered (even before the shader is ready) so
  // this observer attaches on mount regardless of load timing.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`pointer-events-none absolute inset-0 ${className}`}>
      {ready && mount && <LiquidCarbonCanvas inView={inView} />}
    </div>
  );
}
