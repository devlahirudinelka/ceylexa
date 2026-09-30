const BENEFITS = [
  {
    title: "Dedicated support",
    description:
      "We only take on a limited amount of projects at a given time to ensure that adequate attention is provided to our clients.",
  },
  {
    title: "Frequent reporting",
    description:
      "One of our key objectives with our client engagements is to provide them with tangible results and reporting.",
  },
  {
    title: "360 Digital Marketing solutions",
    description:
      "End to end branding and digital marketing solutions which makes it possible to get all of your needs completed in one place.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="title-wrapar">
                <div className="font-size-xsm brand">{"//"}</div>
                <div className="font-size-xsm">Why Choose Us?</div>
              </div>
              <div className="spacing-2xl" />
              <h2 className="heading-style-h2">
                Smarter marketing decisions, real business goals.
              </h2>
              <div className="spacing-6xl" />
              <div className="flex flex-col gap-5">
                <p className="font-size-sm">
                  We help brands, startups, and growing businesses make smarter marketing
                  decisions through research, strategy, and execution that actually align
                  with business goals.
                </p>
                <p className="font-size-sm">
                  At Ceylexa Digital, we bring together creative thinking, industry
                  knowledge, and practical experience to develop solutions that fit where
                  your business is today and where you want it to go. We believe the best
                  work comes from genuine collaboration. By working closely with our
                  clients, we create thoughtful campaigns, engaging content, memorable
                  brand experiences, and digital solutions that feel authentic to each
                  business. Whether you&rsquo;re launching something new or looking to take
                  your brand further, we&rsquo;re here to bring fresh ideas, clear
                  direction, and the right expertise to the table.
                </p>
              </div>
            </div>

            <div>
              <div className="title-wrapar">
                <div className="font-size-xsm brand">{"//"}</div>
                <div className="font-size-xsm">Work With Us</div>
              </div>
              <div className="spacing-2xl" />
              <h2 className="heading-style-h2">Where Great Brands Begin</h2>
              <div className="spacing-6xl" />
              <div className="flex flex-col gap-5">
                <p className="font-size-sm">
                  Whether you have a new idea, a growing business, or a brand ready for its
                  next chapter, we&rsquo;re here to listen, collaborate, and help bring it
                  to life. At Ceylexa Digital, we work closely with our clients to create
                  thoughtful digital experiences that feel true to their brand and connect
                  with the people who matter most. From the first idea to the final
                  execution, we make the process clear, creative, and collaborative.
                </p>
                <p className="font-size-sm">
                  Partner with Ceylexa Digital and let&rsquo;s turn your ideas into digital
                  experiences that create impact, build connections, and drive growth.
                </p>
              </div>
            </div>
          </div>

          <div className="spacing-20xl" />

          <div className="title-wrapar">
            <div className="font-size-xsm brand">{"//"}</div>
            <div className="font-size-xsm">Benefits of working with Ceylexa</div>
          </div>
          <div className="spacing-6xl" />
          <div className="grid gap-5 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="bento-card rounded-2xl p-7">
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {benefit.description}
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
