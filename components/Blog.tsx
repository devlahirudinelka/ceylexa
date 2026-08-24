const POSTS = [
  {
    href: "/blog/design-blunders-what-startups-often-overlook",
    date: "January 8, 2026",
    title: "Design Blunders: What Startups Often Overlook",
    image: "/images/blog-3.webp",
  },
  {
    href: "/blog/from-vision-to-reality-our-design-journey",
    date: "October 25, 2025",
    title: "From Vision to Reality: Our Design Journey",
    image: "/images/blog-2.webp",
  },
  {
    href: "/blog/common-pitfalls-in-startup-product-design",
    date: "January 11, 2026",
    title: "Common Pitfalls in Startup Product Design",
    image: "/images/blog-1.webp",
  },
];

export default function Blog() {
  return (
    // adada
    <section className="section">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="blog-top-contant">
            <div className="title-wrapar">
              <div className="font-size-xsm brand">{"//"}</div>
              <div className="font-size-xsm">Blog &amp; articles</div>
            </div>
            <h2 className="heading-style-h2 center-mobile">Ideas, Stories &amp; Creative Insight</h2>
          </div>
          <div className="spaching-20-xl" />
          <div className="w-dyn-list">
            <div role="list" className="blog-collection-list w-dyn-items">
              {POSTS.map((post) => (
                <div key={post.href} role="listitem" className="blog-item w-dyn-item">
                  <a
                    href={post.href}
                    style={{ backgroundImage: `url("${post.image}")` }}
                    className="blog-card w-inline-block"
                  >
                    <div className="bottom-content">
                      <div className="font-size-xsm black">{post.date}</div>
                      <div className="font-size-lg">{post.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
