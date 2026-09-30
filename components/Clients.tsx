import ClientsCardGrid from "@/components/ClientsCardGrid";
import { CLIENTS } from "@/lib/clients-data";

export default function Clients() {
  return (
    <section className="section">
      <div className="space-29xl" />
      <div className="w-layout-blockcontainer container w-container">
        <h1 className="hero-heading">
          Brands That <span className="highlight-text">Trust</span> Ceylexa
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
              250+ Brands Across Sri Lanka &amp; Beyond
            </h2>
            <div className="spacing-6xl" />
            <div className="clients-intro">
              <p className="font-size-sm">
                At Ceylexa Digital, we are proud to work with 250+ brands across Sri Lanka
                and international markets, helping businesses from different industries build
                stronger brands, connect with their audiences, and grow in the digital world.
              </p>
              <div className="spacing-2xl" />
              <p className="font-size-sm">
                Our client portfolio spans a diverse range of industries, allowing us to bring
                fresh perspectives, creative strategies, and tailored digital solutions to
                every project. From emerging businesses and established brands to personal
                brands and international clients, we work closely with each client to
                understand their goals and deliver strategies that create meaningful impact.
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
