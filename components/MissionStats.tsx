import CountUp from "./CountUp";
import { ArrowButton, Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";

const STATS = [
  { to: 250, suffix: "+", label: "Brands Served" },
  { to: 11, suffix: "+", label: "International Markets" },
  { to: 6, suffix: "", label: "Core Services" },
];

export default function MissionStats() {
  return (
    <section className="relative">
      <div className="mx-auto container px-6 pt-30 max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>Our Results</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              We Strive for <GoldWord>Success</GoldWord>
            </h2>
            <p className="mt-6 mb-0 max-w-[30rem] font-sans text-[1rem] leading-[1.5em] text-black">
              Ceylexa is a dynamic
              <span className="text-[#d7ba5e]"> Digital Marketing Agency. </span>
              We are dedicated to helping businesses build stronger brands,
              connect with the right audiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href="/contact">Become a Client</ArrowButton>
              <ArrowButton href="/contact" variant="light">
                Let&rsquo;s Work Together
              </ArrowButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.875rem] bg-ghost-white max-mobile:rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/featured.webp"
                loading="lazy"
                alt="Ceylexa creative campaign visual"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-16 max-mobile:p-4 max-mobile:pt-12">
                <div className="flex items-start gap-3 text-[1.125rem] font-medium leading-[1.3em] text-white max-mobile:text-[0.9375rem]">
                  <Sparkle className="mt-1 w-4 shrink-0 text-[#d7ba5e]" />
                  Strategy, creativity, and technology working together — and
                  results that speak louder than words.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 border-t border-light-transparent-black max-md:mt-12 max-mobile:grid-cols-1">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 max-mobile:py-5 ${
                i > 0
                  ? "border-l border-light-transparent-black pl-8 max-md:pl-5 max-mobile:border-l-0 max-mobile:border-t max-mobile:pl-0"
                  : ""
              }`}
            >
              <CountUp
                to={stat.to}
                suffix={stat.suffix}
                className="text-[3.75rem] font-medium leading-none text-black max-tablet:text-[3rem] max-md:text-[2.25rem]"
              />
              <div className="mt-2 font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* <p className="mb-0 border-t border-light-transparent-black pt-6 font-sans text-[1.25rem] font-medium leading-[1.3em] text-black max-md:text-[1rem]">
          <span className="text-[#d7ba5e]">250+</span> brands across Sri Lanka
          and 11+ international markets.
        </p> */}
      </div>
    </section>
  );
}
