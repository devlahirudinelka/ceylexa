import ClientsCardGrid from "@/components/ClientsCardGrid";
import { CLIENTS } from "@/lib/clients-data";

export default function Clients() {
  return (
    <section className="section">
      <div className="space-29xl" />
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="hero-heading">
          Brands We&rsquo;re Proud to <span className="highlight-text">Partner</span> With
        </h1>
      </div>

      <div className="space-xxxl" />

      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="blog-top-contant">
            <div className="title-wrapar">
              <div className="font-size-xsm brand">{"//"}</div>
              <div className="font-size-xsm">Our Clients</div>
            </div>
            <h2 className="heading-style-h2 center-mobile">
              {CLIENTS.length}+ Brands Across Sri Lanka &amp; Beyond
            </h2>
            <div className="spacing-6xl" />
            <div className="clients-intro">
              <p className="font-size-sm">
                From neighbourhood cafés to island-wide names, we&rsquo;ve partnered with brands
                across food &amp; beverage, beauty, events, retail and more — building the
                strategy, design, and campaigns behind their growth. Hover a card for more.
              </p>
            </div>
          </div>

          <div className="spaching-20-xl" />

          <ClientsCardGrid />
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
