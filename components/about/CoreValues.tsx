const VALUES = [
  {
    title: "Finding Balance",
    description:
      "At our company, we value finding balance in work and life. We believe that a harmonious equilibrium leads to enhanced well-being, productivity, and overall satisfaction. We support our team in achieving personal growth and maintaining a healthy work-life balance.",
  },
  {
    title: "Being Sincere",
    description:
      "Sincerity is at the heart of our company. We believe in conducting ourselves with authenticity, honesty, and integrity. We build trust through genuine and ethical practices in our interactions with colleagues, clients, and stakeholders. Our commitment to sincerity forms the foundation of strong relationships and long-lasting partnerships.",
  },
  {
    title: "Openness",
    description:
      "Openness is a core value we uphold. We foster a culture of transparency, embracing diverse perspectives and feedback. We encourage collaboration, continuous learning, and innovation. By promoting openness, we create an inclusive environment where everyone's voice is valued and ideas flourish.",
  },
  {
    title: "Loving Our Planet",
    description:
      "We are passionate about loving our planet. Sustainability is deeply ingrained in our values. We actively strive to minimize our ecological footprint, implement environmentally friendly practices, and support initiatives that protect and preserve our environment.",
  },
];

export default function CoreValues() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="title-wrapar">
            <div className="font-size-xsm brand">{"//"}</div>
            <div className="font-size-xsm">Our Core Values</div>
          </div>
          <div className="spacing-2xl" />
          <h2 className="heading-style-h2">
            Our Core <span className="highlight-text">Values</span>
          </h2>
          <div className="spacing-2xl" />
          <div className="max-width-29">
            <p className="font-size-sm">
              We&rsquo;re with you every step of the way, pushing you ever closer towards the
              summit of your success.
            </p>
          </div>
          <div className="spacing-20xl" />
          <div className="grid gap-5 md:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="bento-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
