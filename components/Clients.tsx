import ClientsCardGrid from "@/components/ClientsCardGrid";
import { CLIENTS } from "@/lib/clients-data";

export default function Clients() {
  return (
    <section className="relative">
      <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <h1 className="text-left">
          Brands That Trust Ceylexa
        </h1>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />

      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-4 flex-col justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="flex gap-0.5 justify-start items-center">
              <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">
                {"//"}
              </div>
              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                Our Clients
              </div>
            </div>
            <h2 className="text-left">
              250+ Brands Across Sri Lanka &amp; Beyond
            </h2>
            <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
            <div className="">
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                At Ceylexa Digital, we are proud to work with 250+ brands across
                Sri Lanka and international markets, helping businesses from
                different industries build stronger brands, connect with their
                audiences, and grow in the digital world.
              </p>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
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

          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <ClientsCardGrid />
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
