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
    <section className="relative">
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="grid gap-32 grid-rows-[auto] grid-cols-[1fr_3fr] auto-cols-[1fr] max-tablet:gap-12 max-md:gap-10 max-md:grid-cols-[repeat(1,1fr)]">
          <div className="flex gap-4 flex-col max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-md:justify-start max-md:items-start max-mobile:gap-[0.6rem] max-mobile:items-center">
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em] process">
              <span className="text-[#d7ba5e] orrenge">{"//"}</span>
              <span> AWARDS</span>
            </div>
            <h2 className="text-[3.25rem] leading-[1.2em] max-tablet:text-[2.9rem] max-tablet:text-left max-md:text-[2.75rem] max-mobile:text-[2.25rem] max-mobile:text-center">
              Awards
            </h2>
            <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
            <div className="flex flex-col gap-4">
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Our legacy is built on a foundation of creativity, innovation,
                and unwavering commitment to design excellence.
              </p>
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                As a premier creative design agency, our passion lies in
                sculpting profound brand narratives through innovative design
                and crystal-clear communication. Our dedicated team masterfully
                integrates artistic flair with strategic business acumen,
                ensuring every design is both visually captivating and
                remarkably effective.
              </p>
            </div>
          </div>

          <div className="flex gap-4 flex-col max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-3">
            {AWARDS.map((award) => (
              <div
                key={`${award.org}-${award.date}`}
                className="flex justify-between items-center pb-4 border-b border-b-light-transparent-black max-tablet:pb-[0.8rem] max-md:pb-[0.7rem] max-mobile:items-start max-mobile:pb-3"
              >
                <div className="award-left-item">
                  <div className="font-sans text-[1.5rem] leading-[1.2em] font-normal max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                    {award.org}
                  </div>
                </div>
                <div className="flex gap-10 justify-end items-center max-tablet:gap-8 max-md:gap-7 max-mobile:gap-[0.899rem] max-mobile:items-end max-mobile:flex-col">
                  <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                    {award.category}
                  </div>
                  <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                    {award.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
