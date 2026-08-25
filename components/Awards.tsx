// Placeholder award/recognition entries from the source template — swap in
// Ceylexa's real accolades (or remove the section) before launch.
const AWARDS = [
  { org: "Designdly", category: "Designdly", date: "Apr 2025" },
  { org: "CodeCanvas", category: "Best UX, UI & Innovation", date: "Mar 2025" },
  { org: "Sitezy", category: "Best Visual Design", date: "Oct 2024" },
  { org: "Mocksy", category: "Best Portfolio Website", date: "Aug 2024" },
  { org: "Uivora", category: "People’s Choice Gold", date: "May 2024" },
  { org: "DesignDock", category: "Web Excellence", date: "Feb 2024" },
  { org: "VisualCraft", category: "Web Excellence", date: "Oct 2023" },
  { org: "Pigmenta", category: "Honorable Mention", date: "Oct 2023" },
  { org: "Rankora", category: "Gold for Branding", date: "Nov 2023" },
];

export default function Awards() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid award-grid">
          <div className="award-left">
            <div className="font-size-xsm process">
              <span className="highlight-text orrenge">{"//"}</span>
              <span> RECOGNITION</span>
            </div>
            <h2 className="team-heading center-mobile">Awards &amp; Recognitions.</h2>
          </div>

          <div className="award-right">
            {AWARDS.map((award) => (
              <div key={`${award.org}-${award.date}`} className="award-item-blaock">
                <div className="award-left-item">
                  <div className="font-size-lg normal">{award.org}</div>
                </div>
                <div className="award-right-item">
                  <div className="font-size-xsm">{award.category}</div>
                  <div className="font-size-xsm">{award.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
