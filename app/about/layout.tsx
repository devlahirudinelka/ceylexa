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
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/css/uxoral.css" />
      {children}
    </>
  );
}
