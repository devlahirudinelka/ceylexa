import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import { NEWS } from "@/lib/news";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 20 20"
      fill="none"
      className="relative z-2 flex-none w-5 text-white"
    >
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function NewsEvents() {
  return (
    <section className="relative">
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-0.5 justify-start items-center">
            <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">
              {"//"}
            </div>
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
              Latest News &amp; Events
            </div>
          </div>
          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
          <h2 className="text-left">Latest News &amp; Events</h2>
          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
          <div className="flex  container flex-col gap-5">
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              <strong>Stay connected with Ceylexa journey.</strong>
            </p>
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              At Ceylexa, we take pride in our journey of excellence, having
              participated in and won multiple industry awards while
              representing Sri Lanka on prestigious international stages. Our
              work has been recognized for its creativity, innovation, and
              measurable impact earning us accolades across Digital Marketing,
              Web Design and Technology Innovation.
            </p>
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              Beyond awards, our projects have been showcased in global forums,
              positioning Ceylexa as a trusted name in delivering world-class
              digital solutions. These achievements reflect our commitment to
              pushing boundaries, setting benchmarks, and making Sri Lanka proud
              in the international digital arena.
            </p>
          </div>

          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <div className="grid gap-5 md:grid-cols-2">
            {NEWS.slice(0, 4).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>

          {/* <div className="pt-10">
            <Link
              href="/news"
              className="inline-flex relative overflow-hidden gap-2 justify-center items-center py-3 px-6 max-w-full text-white bg-[#d7ba5e] rounded-[6.25rem] max-tablet:gap-[0.4rem] max-tablet:py-[0.8rem] max-tablet:px-[1.2rem] max-md:gap-[0.35rem] max-md:py-[0.7875rem] max-md:px-[1.0499rem] max-mobile:gap-[0.3rem] max-mobile:py-[0.825rem] max-mobile:px-[0.899rem]"
            >
              <div className="overflow-hidden h-6">
                <div className="relative z-2 leading-[1.5em] font-semibold">
                  View all news
                </div>
                <div className="relative z-2 leading-[1.5em] font-semibold">
                  View all news
                </div>
              </div>
              <div className="flex overflow-hidden justify-start items-center max-w-[1.2rem]">
                <ArrowIcon />
                <ArrowIcon />
              </div>
              <div className="absolute top-auto -bottom-4 right-auto left-[0%] w-4 h-4 bg-black rounded-full" />
            </Link>
          </div> */}
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
