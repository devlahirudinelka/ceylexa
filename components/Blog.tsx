import { ArrowButton, Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";
import { BLOG_POSTS } from "@/lib/blog";

export default function Blog() {
  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <div>
              <Eyebrow>Blog &amp; articles</Eyebrow>
              <h2 className={`mt-4 ${H2_CLASS}`}>
                Ideas, Stories &amp; <GoldWord>Creative Insight</GoldWord>
              </h2>
            </div>
            <ArrowButton href="/blog" variant="outline">
              All articles
            </ArrowButton>
          </div>
          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
          <div className="w-dyn-list">
            <div
              role="list"
              className="grid gap-y-15 gap-x-4 grid-rows-[auto] grid-cols-[repeat(3,1fr)] auto-cols-[1fr] max-tablet:gap-y-12 max-tablet:gap-x-[0.8rem] max-tablet:grid-cols-[repeat(2,1fr)] max-md:gap-y-7 max-md:gap-x-[0.7rem] max-mobile:gap-y-6 max-mobile:gap-x-[0.6rem] max-mobile:grid-cols-[repeat(1,1fr)] w-dyn-items"
            >
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.href}
                  role="listitem"
                  className="perspective-[1000px] w-dyn-item"
                >
                  <a
                    href={post.href}
                    style={{ backgroundImage: `url("${post.image}")` }}
                    className="flex justify-center items-end max-w-full h-[36.625rem] text-black bg-[url(https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg)] bg-position-[50%_0] bg-no-repeat bg-cover rounded-[1rem_1rem_0rem_0rem] origin-[50%_100%] max-tablet:h-[30rem] max-md:h-84"
                  >
                    <div className="flex gap-2 flex-col p-4 w-full bg-white rounded-tl-2xl rounded-tr-2xl max-tablet:gap-[0.4rem] max-tablet:p-[0.8rem] max-md:gap-[0.35rem] max-md:p-[0.7rem] max-mobile:gap-[0.3rem] max-mobile:p-[0.6rem]">
                      <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">
                        {post.category} · {post.readingTime}
                      </div>
                      <div className="font-sans text-[1.5rem] leading-[1.2em] font-medium max-tablet:text-[1.4rem] max-md:text-[1.3rem]">
                        {post.title}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
