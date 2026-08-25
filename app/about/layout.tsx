// This nested layout used to link a standalone `/css/uxoral.css` stylesheet
// so the ported Webflow component tree (components/*.tsx at the repo root)
// had its styles without loading them globally on every route — see the
// git history for the original cascade-layers rationale. That file was
// never actually added to /public, so the <link> 404'd on every /about
// request and did nothing; the ported styles it was meant to scope now live
// directly in app/globals.css (loaded once, globally, via the root layout),
// so nothing needs scoping here anymore. Kept as a plain passthrough in
// case /about grows route-specific chrome later.
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
