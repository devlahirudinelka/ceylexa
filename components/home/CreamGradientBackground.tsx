"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

/**
 * Lightweight gate in front of CreamGradientCanvas.tsx (Three.js / Shader).
 * Code-split lazily and deferred to prevent render blocking.
 */
const CreamGradientCanvas = dynamic(() => import("./CreamGradientCanvas"), {
  ssr: false,
});

function subscribeMediaChanges(callback: () => void) {
  const reduceMql = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduceMql.addEventListener("change", callback);
  return () => {
    reduceMql.removeEventListener("change", callback);
  };
}

let cachedHasWebGL: boolean | null = null;
function detectWebGL() {
  if (cachedHasWebGL !== null) return cachedHasWebGL;
  try {
    const canvas = document.createElement("canvas");
    cachedHasWebGL = !!(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    cachedHasWebGL = false;
  }
  return cachedHasWebGL;
}

function getReadySnapshot() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion) return false;
  return detectWebGL();
}

function getReadyServerSnapshot() {
  return false;
}

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    opts?: { timeout: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function CreamGradientBackground({
  className = "",
}: {
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ready = useSyncExternalStore(
    subscribeMediaChanges,
    getReadySnapshot,
    getReadyServerSnapshot,
  );
  const [mount, setMount] = useState(false);
  const [inView, setInView] = useState(true);

  // Defer mounting until the main thread is idle
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    const win = window as IdleWindow;

    if (win.requestIdleCallback) {
      const handle = win.requestIdleCallback(
        () => {
          if (!cancelled) setMount(true);
        },
        { timeout: 500 },
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

  // Pause render loop when scrolled out of view
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none absolute inset-0 bg-[#FAF8F5] overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #FAF8F5 0%, #F5EFE6 50%, #ECE3D4 100%)",
      }}
    >
      {ready && mount && <CreamGradientCanvas inView={inView} />}
    </div>
  );
}
