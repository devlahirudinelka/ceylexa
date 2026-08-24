"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";

/**
 * Site-wide first-load experience: a branded loading screen (logo mark +
 * progress bar) that plays once per browser session, followed by a GSAP
 * entrance animation on the page content once it's ready.
 *
 * How the "once per session, no flash" part works:
 *  - `app/layout.tsx` inlines a tiny synchronous script (next/script
 *    strategy="beforeInteractive") that adds a `pl-loading` class to
 *    <html> BEFORE first paint, but only if sessionStorage doesn't already
 *    have the "seen it" flag. `app/globals.css` hides #page-content while
 *    that class is present — that's what prevents a flash of the fully
 *    built page before this component has a chance to react.
 *  - `phase` below is read with useSyncExternalStore (the same technique
 *    CreamGradientBackground.tsx uses) instead of an effect + setState, so
 *    the hydration render always agrees with the server ("pending", loader
 *    not shown yet) and only resolves to "skip" or "show" right after —
 *    no synchronous setState-in-effect, no extra flash-then-hide render.
 *  - "skip" (session already flagged, or prefers-reduced-motion) means the
 *    loader never renders at all and the content is simply revealed.
 *    "show" runs the loader + progress bar, then fades/slides the content
 *    in and flags the session so later pages in the same tab go straight
 *    to "skip".
 *
 * The progress bar isn't wired to a real asset-loading percentage (there
 * isn't a meaningful one on a mostly-static marketing site) — it fills
 * over a capped duration, but genuinely waits for `window.load` (up to a
 * ceiling) so slower first loads don't reveal a half-ready page early.
 */

const SESSION_KEY = "ceylexa-loaded";
const MIN_VISIBLE_MS = 900;
const MAX_WAIT_MS = 2400;

function subscribeNever() {
  return () => {};
}

function getPhaseSnapshot(): "skip" | "show" {
  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    // sessionStorage unavailable (private mode, etc.) — treat as unseen.
  }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return alreadySeen || reduceMotion ? "skip" : "show";
}

function getPhaseServerSnapshot(): "pending" {
  return "pending";
}

export default function PageLoader({ children }: { children: ReactNode }) {
  const phase = useSyncExternalStore(subscribeNever, getPhaseSnapshot, getPhaseServerSnapshot);
  const [loaderDone, setLoaderDone] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "pending") return;

    if (phase === "skip") {
      document.documentElement.classList.remove("pl-loading");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
      return;
    }

    // phase === "show"
    const start = performance.now();
    let settled = false;
    let revealTimeout: number | undefined;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 24 });
      gsap.set(barRef.current, { scaleX: 0 });
      gsap.to(barRef.current, {
        scaleX: 0.92,
        duration: MAX_WAIT_MS / 1000,
        ease: "power1.inOut",
      });
    });

    const revealNow = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("pl-loading");
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            // ignore
          }
          setLoaderDone(true);
        },
      });
      tl.to(barRef.current, { scaleX: 1, duration: 0.3, ease: "power2.out" })
        .to(loaderRef.current, { opacity: 0, duration: 0.45, ease: "power2.out" }, "+=0.1")
        .to(
          contentRef.current,
          { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
          "<"
        );
    };

    const finish = () => {
      if (settled) return;
      settled = true;
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      revealTimeout = window.setTimeout(revealNow, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
    const hardCap = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      ctx.revert();
      window.removeEventListener("load", finish);
      window.clearTimeout(hardCap);
      if (revealTimeout) window.clearTimeout(revealTimeout);
    };
  }, [phase]);

  const showLoaderEl = phase === "show" && !loaderDone;

  return (
    <>
      {showLoaderEl && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-[#b45309] to-[#ea580c] text-white shadow-lg shadow-[#b45309]/20">
            <Sparkles size={26} />
          </div>
          <div className="mt-7 h-px w-40 overflow-hidden rounded-full bg-border">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#b45309] to-[#ea580c]"
            />
          </div>
        </div>
      )}
      <div id="page-content" ref={contentRef}>
        {children}
      </div>
    </>
  );
}
