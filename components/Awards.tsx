// Recognition copy is from the "About Us" document (Awards section). The
// only named award in the source material is the Popular Awards 2024 win
// (see about/NewsEvents.tsx), so that's the one list entry — add more here
// as they're confirmed.
const AWARDS = [
  {
    org: "Popular Awards",
    category: "Most Popular Social Media Agency",
    date: "2024",
  },
];

export default function Awards() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid award-grid">
          <div className="award-left">
            <div className="font-size-xsm process">
              <span className="highlight-text orrenge">{"//"}</span>
              <span> AWARDS</span>
            </div>
            <h2 className="team-heading center-mobile">Awards</h2>
            <div className="spacing-2xl" />
            <div className="flex flex-col gap-4">
              <p className="font-size-sm">
                Our legacy is built on a foundation of creativity, innovation, and
                unwavering commitment to design excellence.
              </p>
              <p className="font-size-sm">
                As a premier creative design agency, our passion lies in sculpting profound
                brand narratives through innovative design and crystal-clear communication.
                Our dedicated team masterfully integrates artistic flair with strategic
                business acumen, ensuring every design is both visually captivating and
                remarkably effective.
              </p>
            </div>
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
