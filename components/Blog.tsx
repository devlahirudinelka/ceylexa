import { BLOG_POSTS } from "@/lib/blog";

export default function Blog() {
  return (
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
              {BLOG_POSTS.map((post) => (
                <div key={post.href} role="listitem" className="blog-item w-dyn-item">
                  <a
                    href={post.href}
                    style={{ backgroundImage: `url("${post.image}")` }}
                    className="blog-card w-inline-block"
                  >
                    <div className="bottom-content">
                      <div className="font-size-xsm black">{post.category} · {post.readingTime}</div>
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
