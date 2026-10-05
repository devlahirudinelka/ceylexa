import { Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";

// Recognition copy is from the "About Us" document (Awards section). The
// only named award in the source material is the Popular Awards 2024 win
// (see about/NewsEvents.tsx), so that's the one list entry — add more here
// as they're confirmed.
const AWARDS = [
  {
    org: "Popular Awards",
    category: "Most Popular Social Media Agency",
    date: "2024",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-ghost-white">
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Awards</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              <GoldWord>Awards</GoldWord>
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                Our legacy is built on a foundation of creativity, innovation,
                and unwavering commitment to design excellence.
              </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                As a premier creative design agency, our passion lies in
                sculpting profound brand narratives through innovative design
                and crystal-clear communication. Our dedicated team masterfully
                integrates artistic flair with strategic business acumen,
                ensuring every design is both visually captivating and
                remarkably effective.
              </p>
            </div>
          </div>
          <div className="border-t border-light-transparent-black lg:col-span-7">
            {AWARDS.map((award, i) => (
              <div key={`${award.org}-${award.date}`} className="group relative grid grid-cols-[auto_1fr] gap-x-6 border-b border-light-transparent-black py-8 max-md:gap-x-4 max-md:py-6 !grid-cols-[auto_1fr_auto] items-center">
                <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[#d7ba5e] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pt-1.5 text-[0.8125rem] font-medium tabular-nums text-dim-gray transition-colors duration-300 group-hover:text-[#d7ba5e] !pt-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-sans text-[1.75rem] font-medium leading-[1.2em] text-black max-md:text-[1.25rem]">{award.org}</div>
                  <div className="mt-1 font-sans text-[0.9375rem] leading-[1.5em] text-dim-gray">{award.category}</div>
                </div>
                <span className="rounded-full bg-[#d7ba5e] px-4 py-1.5 text-[0.875rem] font-semibold text-black">{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
