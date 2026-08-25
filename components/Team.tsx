// Team photos are the source template's stock portraits, hotlinked from
// Webflow's asset CDN (same approach already used for the .about-image-wrap
// background in globals.css) — this environment has no network access to
// fetch and re-host them locally. Swap `src` for real team photos in
// /public/images before launch, same as the placeholder names/roles below.
const TEAM = [
  {
    name: "Ella Johnson",
    role: "Creative Director",
    src: "https://cdn.prod.website-files.com/696b260b2c87366dbac9f403/696f739e84eb02409fd76e2a_Frame%2094.webp",
    alt: "Portrait of a fair-skinned woman with short platinum blonde hair wearing a light gray coat and beige turtleneck.",
  },
  {
    name: "Carter Davis",
    role: "Operations Head",
    src: "https://cdn.prod.website-files.com/696b260b2c87366dbac9f403/696f73c272e0d78b35e7a434_Frame%2095.webp",
    alt: "Young man with styled brown hair wearing a light gray button-up shirt against a plain background.",
  },
  {
    name: "Marcus Lane",
    role: "Creative Director",
    src: "https://cdn.prod.website-files.com/696b260b2c87366dbac9f403/696f73d9603cb9b8bfa3fbfe_Frame%2097.webp",
    alt: "Young man with platinum blonde hair wearing a light gray turtleneck sweater against a neutral background.",
  },
  {
    name: "Brian Lee",
    role: "Procurement Director",
    src: "https://cdn.prod.website-files.com/696b260b2c87366dbac9f403/696f74176585e3bfacdca691_Frame%2096.webp",
    alt: "Portrait of a woman with long, wavy blonde hair wearing a white coat against a gray background.",
  },
];

export default function Team() {
  return (
    <section className="section">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container w-container">
        <div className="team-header">
          <div className="font-size-xsm process">
            <span className="highlight-text orrenge">{"//"}</span>
            <span> OUR TEAM</span>
          </div>
          <h2 className="team-heading center-tablet">Team of Engineers &amp; Innovators</h2>
        </div>

        <div className="spacing-20xl" />

        <div className="w-layout-grid team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.src} loading="lazy" alt={member.alt} className="team-img" />
              <div className="team-info-block">
                <div className="font-size-base semi-bold">{member.name}</div>
                <div className="font-size-xsm">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
