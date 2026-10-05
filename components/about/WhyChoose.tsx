import { ArrowButton, Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";

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
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8 !pt-0">
        <div className="grid gap-12 border-t border-light-transparent-black pt-16 lg:grid-cols-2 lg:gap-16 max-md:pt-12">
          <div>
            <Eyebrow>Why Choose Us?</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              Smarter marketing decisions, <GoldWord>real business goals.</GoldWord>
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                  We help brands, startups, and growing businesses make smarter
                  marketing decisions through research, strategy, and execution
                  that actually align with business goals.
                </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
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
            <Eyebrow>Work With Us</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              Where Great Brands <GoldWord>Begin</GoldWord>
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                  Whether you have a new idea, a growing business, or a brand
                  ready for its next chapter, we&rsquo;re here to listen,
                  collaborate, and help bring it to life. At Ceylexa Digital, we
                  work closely with our clients to create thoughtful digital
                  experiences that feel true to their brand and connect with the
                  people who matter most. From the first idea to the final
                  execution, we make the process clear, creative, and
                  collaborative.
                </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                  Partner with Ceylexa Digital and let&rsquo;s turn your ideas
                  into digital experiences that create impact, build
                  connections, and drive growth.
                </p>
            </div>
            <ArrowButton href="/contact" className="mt-8">
              Get in Touch
            </ArrowButton>
          </div>
        </div>

        <div className="mt-16 rounded-[1.875rem] bg-black p-10 text-white max-md:mt-12 max-md:p-6 max-mobile:rounded-2xl">
          <div className="flex items-center gap-1 font-sans text-[0.875rem] uppercase leading-[1.5em]">
            <span className="text-[#d7ba5e]">{"//"}</span>
            <span className="text-white/70">Benefits of working with Ceylexa</span>
          </div>
          <div className="mt-8 grid md:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`py-6 md:py-2 ${
                  i > 0 ? "border-t border-white/15 md:border-l md:border-t-0 md:pl-8" : ""
                } ${i < BENEFITS.length - 1 ? "md:pr-8" : ""}`}
              >
                <span className="text-[3rem] font-medium leading-none text-[#d7ba5e] max-md:text-[2.25rem]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-sans text-[1.5rem] font-medium leading-[1.2em] text-white max-md:text-[1.25rem]">{benefit.title}</h3>
                <p className="mb-0 mt-3 font-sans text-[0.9375rem] leading-[1.6em] text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
