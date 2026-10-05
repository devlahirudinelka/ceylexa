import CountUp from "./CountUp";

const REVIEWER_ICONS = [
  "/images/Work-1.webp",
  "/images/Work-2.webp",
  "/images/Work-3.webp",
];

function ArrowIcon({
  className = "relative z-2 flex-none w-5 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MissionStats() {
  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="grid gap-4 grid-rows-[auto] grid-cols-[1fr_0.75fr] auto-cols-[1fr] justify-between items-start max-tablet:grid-cols-[1fr_0.5fr] max-md:gap-7 max-md:grid-cols-[repeat(1,1fr)] max-md:justify-end max-md:flex-col max-mobile:gap-6">
            <div className="gap-4 justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:flex max-mobile:gap-[0.224rem] max-mobile:flex-col">
              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                <span className="text-[#d7ba5e] orrenge">{"// "}</span>Our
                Results
              </div>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2.25rem]">
                We Strive for Success
              </h2>
              <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
              <div className="max-w-[30rem] max-tablet:max-w-none">
                <div className="pt-2 w-full max-tablet:hidden max-tablet:pt-[0.4rem] max-md:pt-[0.35rem] max-mobile:pt-[0.3rem]" />
                <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                  Ceylexa is a dynamic
                  <span className="text-[#d7ba5e]">
                    {" "}
                    Digital Marketing Agency.{" "}
                  </span>
                  We are dedicated to helping businesses build stronger brands,
                  connect with the right audiences.
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center w-full h-full max-tablet:items-end max-md:justify-start max-md:items-center">
              <div className="services-p-block">
                <a
                  href="/contact"
                  className="flex relative overflow-hidden gap-2 justify-center items-center py-3 px-6 max-w-full text-white bg-[#d7ba5e] rounded-[6.25rem] max-tablet:gap-[0.4rem] max-tablet:py-[0.8rem] max-tablet:px-[1.2rem] max-md:gap-[0.35rem] max-md:py-[0.7875rem] max-md:px-[1.0499rem] max-mobile:gap-[0.3rem] max-mobile:py-[0.825rem] max-mobile:px-[0.899rem]"
                >
                  <div className="overflow-hidden h-6">
                    <div className="relative z-2 leading-[1.5em] font-semibold">
                      + Become a Client
                    </div>
                    <div className="relative z-2 leading-[1.5em] font-semibold">
                      + Become a Client
                    </div>
                  </div>
                  <ArrowIcon />
                  <div className="absolute top-auto -bottom-4 right-auto left-[0%] w-4 h-4 bg-black rounded-full" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <div className="grid gap-3 grid-rows-[auto] grid-cols-[repeat(3,1fr)] auto-cols-[1fr] perspective-[1000px] max-tablet:gap-[0.6rem] max-tablet:grid-cols-[repeat(2,1fr)] max-md:gap-[1.0499rem] max-md:grid-cols-[repeat(1,1fr)] max-mobile:gap-[0.899rem]">
            <div className="flex gap-3 flex-col justify-center items-start origin-[50%_100%] max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
              <div className="py-4 px-5 w-full border border-light-transparent-black rounded-2xl max-tablet:py-[0.8rem] max-tablet:px-4 max-tablet:rounded-[0.8rem] max-md:py-[0.7rem] max-md:px-3.5 max-md:rounded-[0.7rem] max-mobile:flex max-mobile:justify-center max-mobile:items-center max-mobile:py-[0.6rem] max-mobile:px-3 max-mobile:rounded-[0.6rem]">
                <div className="flex gap-4 grid-rows-[auto] grid-cols-[repeat(2,1fr)] auto-cols-[1fr] justify-between items-start max-mobile:items-center">
                  <div className="flex overflow-visible justify-start items-start pl-4 max-tablet:pl-[0.8rem] max-md:pl-[0.7rem] max-mobile:pl-[0.6rem]">
                    {REVIEWER_ICONS.map((src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        loading="lazy"
                        alt="Ceylexa client"
                        className="overflow-visible -ml-4 w-15 max-tablet:w-12 max-mobile:w-10"
                      />
                    ))}
                  </div>
                  <div className="">
                    <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">
                      250+ Brands Worldwide
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-56 flex-col justify-center items-start py-6 pr-10 pl-6 h-full border border-light-transparent-black rounded-2xl max-tablet:gap-44 max-tablet:py-[1.2rem] max-tablet:pr-8 max-tablet:pl-[1.2rem] max-tablet:rounded-[0.8rem] max-md:gap-32 max-md:py-[1.0499rem] max-md:pr-7 max-md:pl-[1.0499rem] max-md:rounded-[0.7rem] max-mobile:gap-20 max-mobile:py-[0.899rem] max-mobile:pr-6 max-mobile:pl-[0.899rem] max-mobile:rounded-[0.6rem]">
                <div className="font-sans text-black text-[1.25rem] leading-[1.2em] font-medium max-tablet:text-[1.125rem] max-md:text-[1rem] max-mobile:text-[0.875rem]">
                  Strategy, creativity, and technology working together — and
                  results that speak louder than words.
                </div>
              </div>
              <div className="flex gap-3 flex-col justify-center items-start py-4 px-5 w-full border border-light-transparent-black rounded-2xl max-tablet:gap-[0.6rem] max-tablet:py-[0.8rem] max-tablet:px-4 max-tablet:rounded-[0.8rem] max-md:gap-[0.5249rem] max-md:py-[0.7rem] max-md:px-3.5 max-md:rounded-[0.7rem] max-mobile:gap-[0.449rem] max-mobile:items-center max-mobile:py-[0.6rem] max-mobile:px-3 max-mobile:rounded-[0.6rem]">
                <div className="flex relative z-1 gap-2 flex-col justify-start items-start max-mobile:gap-[0.6rem]">
                  <div className="flex justify-center items-center">
                    <CountUp
                      to={250}
                      suffix="+"
                      className="text-black text-[3.25rem] leading-[1.2em] font-semibold tracking-[-.135rem] max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2rem]"
                    />
                  </div>
                </div>
                <div className="mb-0 font-sans text-spanish-gray text-[1rem] leading-[1.5em] font-normal">
                  Brands Served
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-col justify-center items-start origin-[50%_100%] max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
              <div className="h-full bg-ghost-white border border-light-transparent-black rounded-2xl max-tablet:w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured.webp"
                  loading="lazy"
                  alt="Ceylexa creative campaign visual"
                  className="object-cover w-full h-full rounded-[15px] max-tablet:object-contain max-tablet:object-[50%_0%]"
                />
              </div>
              <div className="flex justify-between items-center py-6 px-5 w-full bg-[#d7ba5e] border border-light-transparent-black rounded-2xl max-tablet:py-[1.2rem] max-tablet:px-4 max-md:py-[1.0499rem] max-md:px-3.5 max-mobile:py-[0.899rem] max-mobile:px-3">
                <div className="block justify-between items-center">
                  <div className="flex relative z-1 gap-2 flex-col justify-start items-start max-mobile:gap-[0.6rem]">
                    <div className="flex justify-center items-center">
                      <CountUp
                        to={11}
                        suffix="+"
                        className="text-white text-[2.25rem] leading-[1.2em] font-semibold tracking-[-.135rem] max-tablet:text-[2rem] max-md:text-[1.75rem] max-mobile:text-[1.5rem]"
                      />
                    </div>
                  </div>
                  <div className="font-sans text-white text-[0.875rem] leading-[1.5em]">
                    International Markets
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-col justify-center items-start origin-[50%_100%] max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
              <div className="flex gap-56 flex-col justify-center items-start py-6 pr-10 pl-6 h-full border border-light-transparent-black rounded-2xl max-tablet:gap-44 max-tablet:py-[1.2rem] max-tablet:pr-8 max-tablet:pl-[1.2rem] max-tablet:rounded-[0.8rem] max-md:gap-32 max-md:py-[1.0499rem] max-md:pr-7 max-md:pl-[1.0499rem] max-md:rounded-[0.7rem] max-mobile:gap-20 max-mobile:py-[0.899rem] max-mobile:pr-6 max-mobile:pl-[0.899rem] max-mobile:rounded-[0.6rem]">
                <div className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  <div className="font-sans text-black text-[1.25rem] leading-[1.2em] font-medium max-tablet:text-[1.125rem] max-md:text-[1rem] max-mobile:text-[0.875rem]">
                    <span className="text-[#d7ba5e]">250+</span> brands across
                    Sri Lanka and 11+ international markets.
                  </div>
                </div>
                <div className="flex gap-3 flex-col justify-center items-start max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
                  <div className="flex relative z-1 gap-2 flex-col justify-start items-start max-mobile:gap-[0.6rem]">
                    <div className="flex justify-center items-center">
                      <CountUp
                        to={6}
                        className="text-black text-[3.25rem] leading-[1.2em] font-semibold tracking-[-.135rem] max-tablet:text-[3rem] max-md:text-[2.5rem] max-mobile:text-[2rem]"
                      />
                    </div>
                  </div>
                  <div className="mb-0 font-sans text-spanish-gray text-[1rem] leading-[1.5em] font-normal">
                    Core Services
                  </div>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-block py-6 px-5 max-w-full w-full border border-light-transparent-black rounded-2xl [transition:all_0.2s] hover:transform-[scale(0.9)] max-tablet:py-[1.2rem] max-tablet:px-4 max-tablet:rounded-[0.8rem] max-md:py-[1.0499rem] max-md:px-3.5 max-md:rounded-[0.7rem] max-mobile:flex max-mobile:justify-center max-mobile:items-center max-mobile:py-[0.899rem] max-mobile:px-3 max-mobile:rounded-[0.6rem]"
              >
                <div className="flex gap-2 justify-start items-center max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 29 29"
                    fill="none"
                    className="w-[1.8rem] h-[1.8rem] text-[#d7ba5e]"
                  >
                    <circle
                      opacity="0.1"
                      cx="14.4492"
                      cy="14.4492"
                      r="14.4492"
                      fill="currentColor"
                    />
                    <circle
                      cx="14.4492"
                      cy="14.4492"
                      r="6.55078"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">
                    Let&rsquo;s Work Together
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
