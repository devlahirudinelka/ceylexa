import { Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";

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
    <section className="relative bg-ghost-white">
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <Eyebrow>Our Core Values</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              Our Core <GoldWord>Values</GoldWord>
            </h2>
          </div>
          <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black max-w-[26rem]">
              We&rsquo;re with you every step of the way, pushing you ever
              closer towards the summit of your success.
            </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 max-md:mt-10">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-[1.875rem] border border-light-transparent-black bg-white p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#d7ba5e] hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] max-md:p-6 max-mobile:rounded-2xl"
            >
              <span aria-hidden className="absolute -right-2 -top-5 select-none text-[8rem] font-medium leading-none tracking-tighter text-black/[0.05] transition-colors duration-300 group-hover:text-[#d7ba5e]/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <span className="text-[0.8125rem] font-medium tabular-nums text-[#d7ba5e]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-sans text-[1.75rem] font-medium leading-[1.2em] text-black max-md:text-[1.375rem]">{value.title}</h3>
                <p className="mb-0 mt-3 font-sans text-[0.9375rem] leading-[1.6em] text-dim-gray">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
