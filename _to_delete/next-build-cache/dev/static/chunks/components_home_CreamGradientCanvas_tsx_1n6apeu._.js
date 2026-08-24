(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/CreamGradientCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreamGradientCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8_three$40$0$2e$185$2e$1$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.7.0_@types+react@19.2.18_react-dom@19.2.8_react@19.2.8__react@19.2.8_three@0.185.1/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8_three$40$0$2e$185$2e$1$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@react-three+fiber@9.7.0_@types+react@19.2.18_react-dom@19.2.8_react@19.2.8__react@19.2.8_three@0.185.1/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * "Cream Ribbons" — a lightweight, single-pass gradient shader: two soft,
 * slowly-rotating banded-gradient rectangles drifting over a cream base.
 * Ported from a Shadertoy-style vanilla three.js sketch (see the
 * reference in app/hero-cream-gradient (1).html) into this project's
 * react-three-fiber conventions.
 *
 * Colors are pulled from the site palette (app/globals.css) instead of
 * the reference's literal values, so the canvas blends into the page
 * background (--background) at rest and only warms toward gold where the
 * bands cross.
 *
 * Much cheaper than LiquidCarbonCanvas.tsx (no raymarching, no offscreen
 * render-target pass) — a handful of mix()/branch ops per pixel — so it
 * renders at the Canvas's default framerate/dpr without that shader's
 * frame-capping or portal-scene machinery. See CreamGradientBackground.tsx
 * for the lightweight wrapper that decides whether to load this chunk at
 * all (reduced-motion / WebGL / coarse-pointer gating, idle-time mount).
 */ const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;
// Note: the reference sketch computed `uv = (vUv * iResolution) / iResolution`
// before using it — a no-op round trip through the canvas resolution that
// cancels out. The gradient math below is resolution-independent, so we
// use vUv directly and skip carrying an iResolution uniform at all.
const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float iTime;
  varying vec2 vUv;

  #define PI 3.14159265359

  // Site palette (app/globals.css): --background (#faf8f2) <-> a soft
  // warm gold in the --accent family, so the effect reads as an ambient
  // extension of the page rather than a separate "canvas".
  const vec3 cCream = vec3(0.9804, 0.9725, 0.9490); // --background #faf8f2
  const vec3 cGold   = vec3(0.9255, 0.8745, 0.6863); // warm gold

  // 12-stop piecewise gradient alternating cream/gold, at the reference
  // sketch's hand-tuned stop positions (denser near the middle so the
  // bands read as soft ribbons rather than a hard-edged stripe).
  vec3 bandedGradient(float t) {
    if (t < 0.184058) return mix(cCream, cGold, t / 0.184058);
    if (t < 0.225)    return mix(cGold, cCream, (t - 0.184058) / (0.225 - 0.184058));
    if (t < 0.26)     return mix(cCream, cGold, (t - 0.225) / (0.26 - 0.225));
    if (t < 0.29)     return mix(cGold, cCream, (t - 0.26) / (0.29 - 0.26));
    if (t < 0.31)     return mix(cCream, cGold, (t - 0.29) / (0.31 - 0.29));
    if (t < 0.349108) return mix(cGold, cCream, (t - 0.31) / (0.349108 - 0.31));
    if (t < 0.494224) return mix(cCream, cGold, (t - 0.349108) / (0.494224 - 0.349108));
    if (t < 0.619507) return mix(cGold, cCream, (t - 0.494224) / (0.619507 - 0.494224));
    if (t < 0.759898) return mix(cCream, cGold, (t - 0.619507) / (0.759898 - 0.619507));
    if (t < 0.911597) return mix(cGold, cCream, (t - 0.759898) / (0.911597 - 0.759898));
    return mix(cCream, cGold, (t - 0.911597) / (0.975 - 0.911597));
  }

  vec3 rectangleGradient(vec2 uv, float angle) {
    float t = cos(angle) * uv.x + sin(angle) * uv.y;
    return bandedGradient(t);
  }

  void main() {
    vec2 uv = vUv;
    vec3 bg = bandedGradient(uv.x + uv.y);

    float angle1 = -59.3288 * PI / 180.0 + sin(iTime * 0.05) * 0.2;
    vec2 uv1 = uv - vec2(sin(iTime * 0.07) * 0.3, cos(iTime * 0.5) * 0.2 + 0.1);
    vec3 rect1 = rectangleGradient(uv1, angle1);

    float angle2 = -101.773 * PI / 180.0 + cos(iTime * 0.04) * 0.9;
    vec2 uv2 = uv - vec2(cos(iTime * 0.06) * 0.4 + 0.5, sin(iTime * 0.08) * 0.3 + 1.0);
    vec3 rect2 = rectangleGradient(uv2, angle2);

    vec3 color = bg;
    color = mix(color, rect1, 0.5);
    color = mix(color, rect2, 0.5);

    gl_FragColor = vec4(color, 1.0);
  }
`;
function CreamGradientPlane() {
    _s();
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8_three$40$0$2e$185$2e$1$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CreamGradientPlane.useFrame": (state)=>{
            if (materialRef.current) {
                materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
            }
        }
    }["CreamGradientPlane.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        frustumCulled: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    2,
                    2
                ]
            }, void 0, false, {
                fileName: "[project]/components/home/CreamGradientCanvas.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                ref: materialRef,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    iTime: {
                        value: 0
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/home/CreamGradientCanvas.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CreamGradientCanvas.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(CreamGradientPlane, "QcOYtlUIqds7PvSzNOz2iSyWO9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8_three$40$0$2e$185$2e$1$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CreamGradientPlane;
function CreamGradientCanvas({ inView }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$7$2e$0_$40$types$2b$react$40$19$2e$2$2e$18_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8_three$40$0$2e$185$2e$1$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        gl: {
            antialias: false,
            powerPreference: "low-power",
            alpha: false
        },
        dpr: [
            1,
            1.5
        ],
        frameloop: inView ? "always" : "never",
        orthographic: true,
        camera: {
            position: [
                0,
                0,
                1
            ]
        },
        // Safety net: paint cream the instant the context exists, before the
        // first real shader frame runs, so a slow first draw never flashes
        // opaque black (alpha is false above).
        onCreated: ({ gl })=>{
            gl.setClearColor(0xfaf8f2, 1);
            gl.clear();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreamGradientPlane, {}, void 0, false, {
            fileName: "[project]/components/home/CreamGradientCanvas.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/CreamGradientCanvas.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c1 = CreamGradientCanvas;
var _c, _c1;
__turbopack_context__.k.register(_c, "CreamGradientPlane");
__turbopack_context__.k.register(_c1, "CreamGradientCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CreamGradientCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/home/CreamGradientCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_home_CreamGradientCanvas_tsx_1n6apeu._.js.map