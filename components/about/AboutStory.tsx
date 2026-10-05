import { Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";

export default function AboutStory() {
  return (
    <section className="relative">
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>About Us</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              A forward-thinking <GoldWord>digital marketing</GoldWord> company.
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="mb-0 font-sans text-[1.375rem] font-medium leading-[1.4em] text-black max-md:text-[1.125rem]">
              Ceylexa Digital is a forward-thinking digital marketing company
              built on a foundation of creativity, technology, strategy, and
              measurable results. We believe digital marketing is more than
              simply reaching an audience. It is about creating meaningful
              connections, building memorable brands, and turning digital
              opportunities into sustainable business growth.
            </p>
            <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              We provide comprehensive digital solutions designed to help
              businesses establish, strengthen, and grow their presence in an
              increasingly competitive digital world. Our services include
              Digital Marketing, Social Media Management, Content Creation, Paid
              Media Marketing, SEO, Branding, Website Design &amp; Development,
              Influencer Marketing, and Analytics &amp; Reporting. From startups
              and emerging businesses to established brands, we work closely
              with our clients to understand their unique goals, challenges,
              audiences, and market opportunities, creating tailored strategies
              that deliver real value.
            </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              At Ceylexa Digital, we understand that no two brands are the same.
              That&rsquo;s why we take a personalised approach to every project,
              combining strategic thinking, creative ideas, technology, and
              data-driven insights to develop solutions that are built around
              each client&rsquo;s objectives. The digital landscape is
              constantly evolving, and staying relevant requires more than
              following trends. We continuously explore new technologies,
              platforms, tools, creative approaches, and industry developments
              to help our clients stay competitive. By combining creativity with
              analytics, we create digital campaigns and experiences that not
              only capture attention but also generate measurable outcomes.
            </p>
            <div className="mt-8 border-t border-light-transparent-black pt-10">
              <div className="flex items-start gap-3">
                <Sparkle className="mt-2 w-5 shrink-0 text-[#d7ba5e]" />
                <h3 className="font-sans text-[2.25rem] font-medium leading-[1.15em] tracking-tight max-md:text-[1.75rem]">More Than a Digital Marketing Company</h3>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              From building a powerful brand identity and creating engaging
              content to developing high-performing websites and running
              targeted digital campaigns, we bring different areas of digital
              marketing together under one strategic approach. Whether your goal
              is to increase brand awareness, grow your social media presence,
              generate leads, drive website traffic, improve search visibility,
              engage your audience, or increase conversions, our team works to
              create solutions that support your wider business objectives.
            </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              We take the time to understand your industry, audience,
              competitors, and market environment before developing a strategy.
              This allows us to create digital solutions that are not only
              visually engaging but also purposeful, relevant, and aligned with
              your business goals.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
