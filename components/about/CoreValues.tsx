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
    <section className="relative">
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-0.5 justify-start items-center">
            <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">
              {"//"}
            </div>
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
              Our Core Values
            </div>
          </div>
          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
          <h2 className="text-left">
            Our Core Values
          </h2>
          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
          <div className="max-w-[30rem] max-tablet:max-w-none">
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              We&rsquo;re with you every step of the way, pushing you ever
              closer towards the summit of your success.
            </p>
          </div>
          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
          <div className="grid gap-5 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] border border-border backdrop-blur-[6px] [--mx:50%] [--my:50%] [&>*]:relative [&>*]:z-1 after:absolute after:-inset-0.25 after:z-0 after:content-[''] after:bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),rgba(215,186,94,0.14),transparent_45%)] after:rounded-[inherit] after:opacity-0 after:[transition:opacity_0.4s_ease] after:pointer-events-none hover:after:opacity-100 bento-card rounded-2xl p-8"
              >
                <h3 className="text-foreground">{value.title}</h3>
                <p className="text-[0.875rem]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
