// The source document ("About Us" → Team) only contains copy — no team
// member names, roles, or photos — so this section is text-only. Add a
// portrait grid back here once real team details are supplied.
export default function Team() {
  return (
    <section className="section">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar" style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div className="team-header">
            <div className="font-size-xsm process">
              <span className="highlight-text orrenge">{"//"}</span>
              <span> TEAM</span>
            </div>
            <h2 className="team-heading center-tablet">
              Get to know the masterminds that make the magic happen.
            </h2>
          </div>

          <div className="spacing-6xl" />

          <div className="flex flex-col gap-5">
            <p className="font-size-sm">
              We are a team of passionate innovators dedicated to building modern solutions
              for businesses that want to grow, adapt, and thrive. Our mission is to combine
              creativity, technology, and strategy to deliver meaningful results for our
              clients. With a focus on collaboration and transparency, we bring fresh ideas
              and practical expertise to every project. From concept to execution, we are
              committed to excellence, ensuring that each solution is tailored to meet the
              unique needs of those we serve. Together, we transform challenges into
              opportunities and visions into reality.
            </p>
            <p className="font-size-sm">
              Our team of specialists is passionate about transforming ideas into compelling
              digital experiences. From sophisticated website designs and engaging social
              media campaigns to impactful branding and performance-driven advertising, we
              focus on delivering quality and consistency across every touchpoint. We believe
              successful digital marketing is built on strong partnerships. By working
              closely with our Team and clients, we become an extension of their team
              understanding their vision, solving their challenges, and continuously looking
              for opportunities to help them move forward.
            </p>
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
