import CountUp from "./CountUp";

const REVIEWER_ICONS = [
  "/images/Work-1.webp",
  "/images/Work-2.webp",
  "/images/Work-3.webp",
];

function ArrowIcon({ className = "button-arrow-main" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MissionStats() {
  return (
    <section className="section">
      <div className="space-xxxl" />
      <div className="w-layout-blockcontainer container w-container">
        <div className="inner-wrappar">
          <div className="misson-top-wrappar">
            <div className="services-header-left">
              <div className="font-size-xsm">
                <span className="highlight-text orrenge">{"// "}</span>Featured Work
              </div>
              <div className="spacing-2xl" />
              <h2 className="heading-style-h2">We Strive for Success</h2>
              <div className="spacing-6xl" />
              <div className="max-width-29">
                <div className="spacing-md hide-mobile" />
                <p className="font-size-sm">
                  Ceylexa is a dynamic 
                  <span className="text-span-2"> Digital Marketing Agency. </span> 
                  We are dedicated to helping businesses build stronger brands, connect with the right audiences.
                </p>
              </div>
            </div>
            <div className="misson-right">
              <div className="services-p-block">
                <a href="/contact" className="btn-primary w-inline-block">
                  <div className="btn-text-pill">
                    <div className="button-text">+ Become a Client</div>
                    <div className="button-text">+ Become a Client</div>
                  </div>
                  <ArrowIcon />
                  <div className="hover-color-block" />
                </a>
              </div>
            </div>
          </div>

          <div className="spacing-20xl" />

          <div className="w-layout-grid mission-grid">
            <div className="mission-contain-card">
              <div className="mission-top-card">
                <div className="top-card-item">
                  <div className="image-wrapper">
                    {REVIEWER_ICONS.map((src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={src} src={src} loading="lazy" alt="Reviewer portrait." className="reviewer-img" />
                    ))}
                  </div>
                  <div className="top-content">
                    <div className="font-size-xsm pure-black">100+ Brands Worldwide</div>
                  </div>
                </div>
              </div>
              <div className="contain-bottom-card">
                <div className="font-size-base">
                  Our services feels faster, smoother, and just works better and Strategically.
                  Our results speak louder than words. 
                </div>
              </div>
              <div className="mission-top-card">
                <div className="counter-item">
                  <div className="counter-text">
                    <CountUp to={98} suffix="%" className="counter-value" />
                  </div>
                </div>
                <div className="font-size-sm lemon-grass">Client Satisfaction</div>
              </div>
            </div>

            <div className="mission-contain-card">
              <div className="robot-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured.webp"
                  loading="lazy"
                  alt="Close-up of a person wearing a white helmet with large orange visor and a high-collared white jacket."
                  className="robot-image"
                />
              </div>
              <div className="counter-main">
                <div className="counter-wrapper-main">
                  <div className="counter-item">
                    <div className="counter-text">
                      <CountUp to={10} suffix="+" className="counter-value is-white" />
                    </div>
                  </div>
                  <div className="font-size-xsm white">Awards &amp; Features</div>
                </div>
              </div>
            </div>

            <div className="mission-contain-card">
              <div className="contain-bottom-card">
                <div className="bottom-top-contant">
                  <div className="font-size-base">
                    <span className="highlight-text">100+</span> testimonial from a Global Client Network Across 10 Countries.
                  </div>
                </div>
                <div className="satisfication-percentise">
                  <div className="counter-item">
                    <div className="counter-text">
                      <CountUp to={2} suffix="K+" className="counter-value" />
                    </div>
                  </div>
                  <div className="font-size-sm lemon-grass">Global Projects</div>
                </div>
              </div>
              <a href="/contact" className="mission-top-card aroww-button-stye w-inline-block">
                <div className="top-content nest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 29 29" fill="none" className="svg-3">
                    <circle opacity="0.1" cx="14.4492" cy="14.4492" r="14.4492" fill="currentColor" />
                    <circle cx="14.4492" cy="14.4492" r="6.55078" fill="currentColor" />
                  </svg>
                  <div className="font-size-xsm black">Available For Work</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
