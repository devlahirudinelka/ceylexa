"use client";

import { useCallback } from "react";

// Tracks pointer position within an element and writes it to local
// --mx / --my CSS custom properties, driving the .bento-card and
// .btn-mercury radial-gradient hover glow defined in globals.css.
export function useMercuryGlow<T extends HTMLElement>() {
  return useCallback((e: React.MouseEvent<T>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${x}%`);
    e.currentTarget.style.setProperty("--my", `${y}%`);
  }, []);
}
