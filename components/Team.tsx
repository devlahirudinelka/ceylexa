// The source document ("About Us" → Team) only contains copy — no team
// member names, roles, or photos — so this section is text-only. Add a
// portrait grid back here once real team details are supplied.
export default function Team() {
  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div
          className="inner-wrappar"
          style={{ maxWidth: "56rem", margin: "0 auto" }}
        >
          <div className="flex gap-4 flex-col justify-start items-center max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em] process">
              <span className="text-[#d7ba5e] orrenge">{"//"}</span>
              <span> TEAM</span>
            </div>
            <h2 className="text-[3.25rem] leading-[1.2em] max-tablet:text-[2.9rem] max-tablet:text-center max-md:text-[2.75rem] max-mobile:text-[2.25rem]">
              Get to know the masterminds that make the magic happen.
            </h2>
          </div>

          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          <div className="flex flex-col gap-5">
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              We are a team of passionate innovators dedicated to building
              modern solutions for businesses that want to grow, adapt, and
              thrive. Our mission is to combine creativity, technology, and
              strategy to deliver meaningful results for our clients. With a
              focus on collaboration and transparency, we bring fresh ideas and
              practical expertise to every project. From concept to execution,
              we are committed to excellence, ensuring that each solution is
              tailored to meet the unique needs of those we serve. Together, we
              transform challenges into opportunities and visions into reality.
            </p>
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              Our team of specialists is passionate about transforming ideas
              into compelling digital experiences. From sophisticated website
              designs and engaging social media campaigns to impactful branding
              and performance-driven advertising, we focus on delivering quality
              and consistency across every touchpoint. We believe successful
              digital marketing is built on strong partnerships. By working
              closely with our Team and clients, we become an extension of their
              team understanding their vision, solving their challenges, and
              continuously looking for opportunities to help them move forward.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
