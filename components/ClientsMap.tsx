"use client";

import { useEffect, useRef, useState } from "react";

const REGIONS = [
  {
    name: "United States of America",
    blurb: "Reaching brands and audiences across the United States.",
    ids: ["US", "USA"],
    classes: ["United States", "United States of America"],
  },
  {
    name: "West Indies",
    // blurb: "Growing creative footprint across the West Indies.",
    ids: [
      "AI",
      "AW",
      "BB",
      "BL",
      "BS",
      "CU",
      "CW",
      "DM",
      "DO",
      "GD",
      "GP",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "PR",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG",
      "VI",
      "BQBO",
      "BQSA",
      "BQSE",
    ],
    classes: [
      "Antigua and Barbuda",
      "Bahamas",
      "Barbados",
      "Cayman Islands",
      "Cuba",
      "Dominica",
      "Dominican Republic",
      "Grenada",
      "Guadeloupe",
      "Haiti",
      "Jamaica",
      "Martinique",
      "Puerto Rico",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Trinidad and Tobago",
      "Turks and Caicos Islands",
      "Virgin Islands, British",
      "Virgin Islands, U.S.",
      "United States Virgin Islands",
    ],
  },
  {
    name: "UAE",
    blurb: "Supporting brands expanding across the United Arab Emirates.",
    ids: ["AE", "ARE"],
    classes: ["United Arab Emirates", "UAE"],
  },
  {
    name: "India",
    blurb: "Delivering campaigns and design across India.",
    ids: ["IN", "IND"],
    classes: ["India"],
  },
  {
    name: "Maldives",
    blurb: "Serving brands across the Maldives.",
    ids: ["MV", "MDV"],
    classes: ["Maldives"],
  },
  {
    name: "Sri Lanka",
    blurb: "Our home base — proudly rooted in Sri Lanka.",
    ids: ["LK", "LKA"],
    classes: ["Sri Lanka"],
  },
  {
    name: "Malaysia",
    blurb: "Designing digital solutions for Malaysia.",
    ids: ["MY", "MYS"],
    classes: ["Malaysia"],
  },
  {
    name: "Singapore",
    blurb: "Serving brands across Singapore.",
    ids: ["SG", "SGP"],
    classes: ["Singapore"],
  },
  {
    name: "Japan",
    blurb: "Fostering strategic partnerships across Japan.",
    ids: ["JP", "JPN"],
    classes: ["Japan"],
  },
  {
    name: "Australia",
    blurb: "Extending impactful campaigns across Australia.",
    ids: ["AU", "AUS"],
    classes: ["Australia"],
  },
  {
    name: "United Kingdom",
    blurb: "Partnering with brands in the United Kingdom.",
    ids: ["GB", "GBR"],
    classes: ["United Kingdom"],
  },
  {
    name: "New Zealand",
    blurb: "Partnering with brands in New Zealand.",
    ids: ["NZ", "NZL"],
    classes: ["New Zealand"],
  },
];

function LocationIcon({
  size = 24,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 13.4295C13.7231 13.4295 15.12 12.0326 15.12 10.3095C15.12 8.58633 13.7231 7.18945 12 7.18945C10.2769 7.18945 8.88 8.58633 8.88 10.3095C8.88 12.0326 10.2769 13.4295 12 13.4295Z"
        stroke={color}
        strokeWidth="1.5"
      />

      <path
        d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

type PinPosition = {
  left: number;
  top: number;
};

export default function ClientsMap() {
  const [active, setActive] = useState<string | null>(null);
  const [mapSvg, setMapSvg] = useState("");
  const [pinPositions, setPinPositions] = useState<Record<string, PinPosition>>(
    {},
  );

  const svgWrapRef = useRef<HTMLDivElement>(null);

  // Load SVG
  useEffect(() => {
    let cancelled = false;

    fetch("/images/world.svg")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load world map: ${res.status}`);
        }

        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setMapSvg(text);
        }
      })
      .catch((error) => {
        console.error("Failed to load world.svg:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /**
   * Find the top-center position of each country.
   *
   * The pin is positioned slightly ABOVE the country's top edge.
   */
  useEffect(() => {
    if (!mapSvg || !svgWrapRef.current) return;

    const calculatePositions = () => {
      const root = svgWrapRef.current;

      if (!root) return;

      const svg = root.querySelector("svg");

      if (!svg) return;

      const positions: Record<string, PinPosition> = {};

      const svgRect = svg.getBoundingClientRect();

      if (!svgRect.width || !svgRect.height) return;

      REGIONS.forEach((region) => {
        const selectors: string[] = [];

        // IDs
        region.ids.forEach((id) => {
          selectors.push(`#${CSS.escape(id)}`);
        });

        // Classes
        region.classes.forEach((name) => {
          selectors.push(`[class~="${CSS.escape(name)}"]`);
        });

        if (!selectors.length) return;

        const elements = Array.from(
          svg.querySelectorAll<SVGGraphicsElement>(selectors.join(",")),
        );

        if (!elements.length) return;

        /**
         * For regions containing multiple islands/countries
         * such as West Indies, combine all bounding boxes.
         */
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        elements.forEach((element) => {
          try {
            const rect = element.getBoundingClientRect();

            minX = Math.min(minX, rect.left);
            minY = Math.min(minY, rect.top);
            maxX = Math.max(maxX, rect.right);
            maxY = Math.max(maxY, rect.bottom);
          } catch {
            // Ignore elements that cannot provide a bounding box.
          }
        });

        if (
          !Number.isFinite(minX) ||
          !Number.isFinite(minY) ||
          !Number.isFinite(maxX) ||
          !Number.isFinite(maxY)
        ) {
          return;
        }

        /**
         * TOP CENTER
         *
         * X = center of country
         * Y = top edge of country
         */
        const centerX = (minX + maxX) / 2;

        /**
         * Move the pin slightly above the country.
         *
         * Change 8 to increase/decrease the gap.
         */
        const pinY = minY - 8;

        const left = ((centerX - svgRect.left) / svgRect.width) * 100;

        const top = ((pinY - svgRect.top) / svgRect.height) * 100;

        positions[region.name] = {
          left,
          top,
        };
      });

      setPinPositions(positions);
    };

    // Wait for SVG to render
    requestAnimationFrame(calculatePositions);

    window.addEventListener("resize", calculatePositions);

    return () => {
      window.removeEventListener("resize", calculatePositions);
    };
  }, [mapSvg]);

  // Highlight selected country
  useEffect(() => {
    const root = svgWrapRef.current;

    if (!root) return;

    root.querySelectorAll(".is-selected-country").forEach((element) => {
      element.classList.remove("is-selected-country");
    });

    if (!active) return;

    const region = REGIONS.find((item) => item.name === active);

    if (!region) return;

    const selectors: string[] = [];

    region.ids.forEach((id) => {
      selectors.push(`#${CSS.escape(id)}`);
    });

    region.classes.forEach((name) => {
      selectors.push(`[class~="${CSS.escape(name)}"]`);
    });

    if (!selectors.length) return;

    root.querySelectorAll(selectors.join(",")).forEach((element) => {
      element.classList.add("is-selected-country");
    });
  }, [active, mapSvg]);

  const handleRegionClick = (regionName: string) => {
    setActive((current) => (current === regionName ? null : regionName));
  };

  return (
    <section className="relative">
      <div className="block mx-auto px-6 max-w-[84rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-4 flex-col justify-center items-center max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="flex gap-0.5 justify-start items-center">
              <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">{"//"}</div>

              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">Global Reach</div>
            </div>

            <h2 className="font-sans text-[3.75rem] leading-[1.2em] font-medium text-left max-tablet:text-[3rem] max-md:text-[2.5rem] max-md:text-center max-mobile:text-[2.25rem]">
              Sri Lanka at Our Core, Clients Worldwide
            </h2>
            <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
            <div className="max-w-[34rem]">
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Our clients and projects extend across Sri Lanka and 11+ international
                markets, including Sri Lanka, Australia, New Zealand, Singapore, Malaysia,
                United States of America, Japan, Maldives, UAE, India, West Indies, and the
                United Kingdom.
              </p>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Different industries. Different markets. One commitment to helping brands
                grow.
              </p>
            </div>
          </div>

          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
        </div>

        <div className="relative w-full" onMouseLeave={() => setActive(null)}>
          <div className="relative aspect-[2000/857] w-full">
            {/* World SVG */}
            <div
              ref={svgWrapRef}
              className="absolute inset-0 w-full h-full pointer-events-none [&_svg]:block [&_svg]:w-full [&_svg]:h-full [&_path]:fill-[#efe6d0] [&_path]:stroke-[rgba(36,26,12,0.18)] [&_path]:[transition:fill_0.35s_ease] [&_path.is-selected-country]:fill-[#c79d00]"
              role="img"
              aria-label="World map highlighting the countries Ceylexa's client work reaches."
              dangerouslySetInnerHTML={{
                __html: mapSvg,
              }}
            />

            {/* Region pins */}
            {REGIONS.map((region) => {
              const isActive = active === region.name;

              const position = pinPositions[region.name];

              // Don't render until position has been calculated
              if (!position) return null;

              return (
                <button
                  key={region.name}
                  type="button"
                  className={`absolute flex gap-[0.4rem] flex-col items-center p-0 bg-none border-0 transform-[translate(-50%,-50%)] cursor-pointer${isActive ? " is-active" : ""}`}
                  style={{
                    left: `${position.left}%`,
                    top: `${position.top}%`,
                  }}
                  onMouseEnter={() => setActive(region.name)}
                  onFocus={() => setActive(region.name)}
                  onClick={() => handleRegionClick(region.name)}
                  aria-pressed={isActive}
                  aria-label={`View ${region.name} client reach`}
                >
                  <span className="relative flex items-center justify-center w-4 h-4 text-black text-[0.95rem] leading-[1] bg-white border border-light-transparent-black rounded-full [transition:transform_0.25s_ease,background-color_0.25s_ease,color_0.25s_ease,box-shadow_0.25s_ease] before:absolute before:-inset-1.5 before:content-[''] before:border before:border-[#d7ba5e] before:rounded-full before:opacity-0 before:transform-[scale(0.8)] before:[transition:opacity_0.3s_ease,transform_0.3s_ease] max-md:w-[1.4rem] max-md:h-[1.4rem] max-md:text-[0.8rem] group-hover/pin:border-transparent group-focus-visible/pin:border-transparent group-aria-pressed/pin:border-transparent group-hover/pin:transform-[scale(1.15)] group-focus-visible/pin:transform-[scale(1.15)] group-aria-pressed/pin:transform-[scale(1.15)] group-hover/pin:bg-[linear-gradient(135deg,#c79d00,#e5d38e)] group-focus-visible/pin:bg-[linear-gradient(135deg,#c79d00,#e5d38e)] group-aria-pressed/pin:bg-[linear-gradient(135deg,#c79d00,#e5d38e)] group-hover/pin:text-white group-focus-visible/pin:text-white group-aria-pressed/pin:text-white group-hover/pin:shadow-[0_8px_20px_-6px_rgba(199,157,0,0.6)] group-focus-visible/pin:shadow-[0_8px_20px_-6px_rgba(199,157,0,0.6)] group-aria-pressed/pin:shadow-[0_8px_20px_-6px_rgba(199,157,0,0.6)] group-hover/pin:before:opacity-100 group-focus-visible/pin:before:opacity-100 group-aria-pressed/pin:before:opacity-100 group-hover/pin:before:transform-[scale(1.3)] group-focus-visible/pin:before:transform-[scale(1.3)] group-aria-pressed/pin:before:transform-[scale(1.3)]" aria-hidden="true">
                    {/* <LocationIcon size={24} color="currentColor" /> */}
                  </span>

                  <span className="font-sans text-[0.875rem] text-dim-gray whitespace-nowrap [transition:color_0.25s_ease] max-md:text-[0.6rem] max-mobile:hidden group-hover/pin:text-black group-focus-visible/pin:text-black group-aria-pressed/pin:text-black group-hover/pin:font-medium group-focus-visible/pin:font-medium group-aria-pressed/pin:font-medium">{region.name}</span>

                  {/* <span className="map-pin-tooltip" role="tooltip">
                    {region.blurb}
                  </span> */}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
