module.exports = [
"[project]/app/about/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// uxoral.css (the ported Webflow template's stylesheet) is only needed by
// the /about page's component tree (components/*.tsx at the repo root —
// see app/about/page.tsx). It used to be linked in the ROOT layout
// (app/layout.tsx), which loaded it globally on every route, including the
// Tailwind-only home page.
//
// That was more than just extra bytes: uxoral.css is a plain <link>
// stylesheet, so its rules sit outside any CSS @layer, while Tailwind v4's
// own utilities are generated inside `@layer utilities`. Per the CSS
// cascade-layers spec, ANY unlayered rule beats a layered one on a
// matching selector, regardless of source order or specificity. uxoral.css
// ships a normalize reset with a bare `nav { display: block; }` rule —
// with the stylesheet global, that silently beat every `md:flex` /
// `flex` utility on every `<nav>` on every page (e.g. the home page's
// Navbar), turning flex containers back into block boxes and making
// `gap-*` utilities on them do nothing, since gap only applies inside a
// flex/grid container.
//
// Scoping the stylesheet to this nested layout means it's only present in
// <head> while a route under /about is being rendered, so the home page
// (and any other Tailwind-only route) gets Tailwind's cascade back intact.
__turbopack_context__.s([
    "default",
    ()=>AboutLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.0_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function AboutLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$0_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "/css/uxoral.css"
            }, void 0, false, {
                fileName: "[project]/app/about/layout.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/about/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/about/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=app_about_layout_tsx_1xq361z._.js.map