import ClientsCardGrid from "@/components/ClientsCardGrid";
import { CLIENTS } from "@/lib/clients-data";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, PillarStrip } from "@/components/ui/brand";

const STATS = [
  { value: "250+", label: "Brands across Sri Lanka & beyond" },
  { value: "11+", label: "International markets" },
  { value: String(CLIENTS.length).padStart(2, "0"), label: "Featured clients below" },
];

export default function Clients() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]">
          CLIENTS
        </div>
        <div className="mx-auto container px-6 lg:px-8 pt-40 max-md:pt-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Our Clients</Eyebrow>
              <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
                Brands That <GoldWord>Trust</GoldWord> Ceylexa
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <ArrowButton href="/contact">Become a Client</ArrowButton>
              <ArrowButton href="/project" variant="light">
                See our work
              </ArrowButton>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-3 border-t border-light-transparent-black max-mobile:grid-cols-1">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 max-mobile:py-5 ${
                  i > 0 ? "border-l border-light-transparent-black pl-8 max-md:pl-5 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0" : ""
                }`}
              >
                <div className="text-[3.75rem] font-medium leading-none text-black max-tablet:text-[3rem] max-md:text-[2.25rem]">{stat.value}</div>
                <div className="mt-2 font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <PillarStrip items={["Emerging businesses", "Established brands", "Personal brands", "International clients"]} />
      </div>

      <div className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Our Clients</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              250+ Brands Across <GoldWord>Sri Lanka &amp; Beyond</GoldWord>
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="mb-0 font-sans text-[1.375rem] font-medium leading-[1.4em] text-black max-md:text-[1.125rem]">
              At Ceylexa Digital, we are proud to work with 250+ brands across
              Sri Lanka and international markets, helping businesses from
              different industries build stronger brands, connect with their
              audiences, and grow in the digital world.
            </p>
            <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              Our client portfolio spans a diverse range of industries,
              allowing us to bring fresh perspectives, creative strategies,
              and tailored digital solutions to every project. From emerging
              businesses and established brands to personal brands and
              international clients, we work closely with each client to
              understand their goals and deliver strategies that create
              meaningful impact.
            </p>
          </div>
        </div>

        <div className="mt-14 max-md:mt-10">
          <ClientsCardGrid />
        </div>
      </div>
    </section>
  );
}
