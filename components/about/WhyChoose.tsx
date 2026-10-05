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
    <section className="relative">
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="grid gap-16 lg:grid-cols-1">
            <div>
              <div className="flex gap-0.5 justify-start items-center">
              
                <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                  Why Choose Us?
                </div>
              </div>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <h2 className="text-left">
                Smarter marketing decisions, real business goals.
              </h2>
              <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
              <div className="flex flex-col gap-5">
                <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                  We help brands, startups, and growing businesses make smarter
                  marketing decisions through research, strategy, and execution
                  that actually align with business goals.
                </p>
                <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                  At Ceylexa Digital, we bring together creative thinking,
                  industry knowledge, and practical experience to develop
                  solutions that fit where your business is today and where you
                  want it to go. We believe the best work comes from genuine
                  collaboration. By working closely with our clients, we create
                  thoughtful campaigns, engaging content, memorable brand
                  experiences, and digital solutions that feel authentic to each
                  business. Whether you&rsquo;re launching something new or
                  looking to take your brand further, we&rsquo;re here to bring
                  fresh ideas, clear direction, and the right expertise to the
                  table.
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-0.5 justify-start items-center">
              
                <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                  Work With Us
                </div>
              </div>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <h2 className="text-left">
                Where Great Brands Begin
              </h2>
              <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
              <div className="flex flex-col gap-5">
                <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                  Whether you have a new idea, a growing business, or a brand
                  ready for its next chapter, we&rsquo;re here to listen,
                  collaborate, and help bring it to life. At Ceylexa Digital, we
                  work closely with our clients to create thoughtful digital
                  experiences that feel true to their brand and connect with the
                  people who matter most. From the first idea to the final
                  execution, we make the process clear, creative, and
                  collaborative.
                </p>
                <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                  Partner with Ceylexa Digital and let&rsquo;s turn your ideas
                  into digital experiences that create impact, build
                  connections, and drive growth.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <div className="flex gap-0.5 justify-start items-center">
         
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
              Benefits of working with Ceylexa
            </div>
          </div>
          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
          <div className="grid gap-5 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 bento-card rounded-2xl p-7"
              >
                <h3 className="text-foreground">{benefit.title}</h3>
                <p className="text-[0.875rem]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
