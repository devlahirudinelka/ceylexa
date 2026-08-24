/**
 * "Abstract System" — a flat, vector abstract-geometry hero background:
 * a fine dot grid plus a small scatter of outlined circles/squares and a
 * node-and-connector cluster (nodes = agents, edges = workflows), in the
 * site's amber palette (app/globals.css).
 *
 * Pure SVG + CSS (see the "Abstract System" block in globals.css for the
 * keyframes/utility classes) — no canvas, no WebGL, no client JS at all,
 * so unlike the earlier shader backgrounds (LiquidCarbonCanvas /
 * CreamGradientCanvas, still in the tree but unused here) this needs
 * none of their lazy-load / WebGL-detection / reduced-motion gating
 * machinery. Reduced motion is handled entirely by the CSS side (the
 * animations are simply disabled via @media (prefers-reduced-motion)).
 */

export default function AbstractSystemBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`abstract-system-bg pointer-events-none absolute inset-0 ${className}`}>
      <div className="abstract-system-grid" />
      <svg
        className="abstract-system-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* faint corner-to-corner grounding line */}
        <line
          x1="0" y1="900" x2="1600" y2="0"
          style={{ stroke: "var(--border)" }}
          strokeWidth={1}
          opacity={0.35}
        />

        {/* large outline circle, top right */}
        <g className="abstract-shape-spin-slow">
          <circle
            cx="1370" cy="140" r="230"
            fill="none"
            style={{ stroke: "var(--accent-3)" }}
            strokeWidth={1.5}
            opacity={0.22}
          />
        </g>

        {/* smaller concentric ring, same anchor, spins the other way */}
        <g className="abstract-shape-spin-slow-reverse">
          <circle
            cx="1370" cy="140" r="150"
            fill="none"
            style={{ stroke: "var(--accent-2)" }}
            strokeWidth={1}
            opacity={0.18}
          />
        </g>

        {/* rotated square, bottom left */}
        <g className="abstract-shape-spin-slow-reverse">
          <rect
            x="70" y="600" width="230" height="230" rx="24"
            transform="rotate(14 185 715)"
            fill="none"
            style={{ stroke: "var(--accent)" }}
            strokeWidth={1.5}
            opacity={0.2}
          />
        </g>

        {/* small drifting ring, upper left */}
        <g className="abstract-shape-drift">
          <circle
            cx="210" cy="150" r="80"
            fill="none"
            style={{ stroke: "var(--accent-2)" }}
            strokeWidth={1.5}
            opacity={0.24}
          />
        </g>

        {/* node-and-connector cluster, left-middle — "agents" reading */}
        <g style={{ stroke: "var(--border)" }} strokeWidth={1} opacity={0.5}>
          <line x1="190" y1="260" x2="470" y2="410" />
          <line x1="470" y1="410" x2="360" y2="560" />
        </g>
        <circle cx="190" cy="260" r="4.5" style={{ fill: "var(--accent-2)" }} className="abstract-node-pulse" />
        <circle
          cx="470" cy="410" r="4.5"
          style={{ fill: "var(--accent-2)", animationDelay: "1.6s" }}
          className="abstract-node-pulse"
        />
        <circle
          cx="360" cy="560" r="4.5"
          style={{ fill: "var(--accent-2)", animationDelay: "3.2s" }}
          className="abstract-node-pulse"
        />

        {/* node-and-connector cluster, bottom right */}
        <g style={{ stroke: "var(--border)" }} strokeWidth={1} opacity={0.5}>
          <line x1="1190" y1="700" x2="1360" y2="760" />
          <line x1="1360" y1="760" x2="1290" y2="630" />
          <line x1="1290" y1="630" x2="1190" y2="700" />
        </g>
        <circle cx="1190" cy="700" r="4" style={{ fill: "var(--accent-3)" }} className="abstract-node-pulse" />
        <circle
          cx="1360" cy="760" r="4"
          style={{ fill: "var(--accent-3)", animationDelay: "2s" }}
          className="abstract-node-pulse"
        />
        <circle
          cx="1290" cy="630" r="4"
          style={{ fill: "var(--accent-3)", animationDelay: "0.8s" }}
          className="abstract-node-pulse"
        />
      </svg>
    </div>
  );
}
