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

/**
 * Find every SVG element belonging to a region. Multi-word country names
 * ("United Kingdom", "New Zealand") are stored as the whole class attribute,
 * so they must be matched exactly instead of with a class selector.
 */
function findRegionElements(
  svg: Element,
  region: (typeof REGIONS)[number],
): SVGGraphicsElement[] {
  const names = new Set(region.classes);
  const ids = new Set(region.ids);
  return Array.from(svg.querySelectorAll<SVGGraphicsElement>("[class], [id]")).filter(
    (el) => {
      const cls = (el.getAttribute("class") ?? "").replace(/\bis-(selected|client)-country\b/g, "").trim();
      return names.has(cls) || ids.has(el.id);
    },
  );
}

export default function ClientsMap() {
  const [mapSvg, setMapSvg] = useState("");

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

  // Tint every country we have clients in
  useEffect(() => {
    const root = svgWrapRef.current;
    const svg = root?.querySelector("svg");
    if (!svg) return;
    REGIONS.forEach((region) => {
      findRegionElements(svg, region).forEach((el) => el.classList.add("is-client-country"));
    });
  }, [mapSvg]);

  return (
    <section className="relative">
      <div className="block mx-auto px-6 mx-auto container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex gap-4 flex-col justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="flex gap-0.5 justify-start items-center">
              <div className="z-999 font-sans text-[#d7ba5e] text-[0.875rem] leading-[1.5em]">
                {"//"}
              </div>

              <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]">
                Global Reach
              </div>
            </div>

            <h2 className="text-left">
              Sri Lanka at Our Core, Clients Worldwide
            </h2>
            <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />
            <div className="">
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Our clients and projects extend across Sri Lanka and 11+
                international markets, including Sri Lanka, Australia, New
                Zealand, Singapore, Malaysia, United States of America, Japan,
                Maldives, UAE, India, West Indies, and the United Kingdom.
              </p>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Different industries. Different markets. One commitment to
                helping brands grow.
              </p>
            </div>
          </div>

          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[2000/857] w-full">
            {/* World SVG */}
            <div
              ref={svgWrapRef}
              className="absolute inset-0 w-full h-full pointer-events-none [&_svg]:block [&_svg]:w-full [&_svg]:h-full [&_path]:fill-[#efe6d0] [&_path]:stroke-[rgba(36,26,12,0.18)] [&_path.is-client-country]:fill-[#d7ba5e]"
              role="img"
              aria-label="World map highlighting the countries Ceylexa's client work reaches."
              dangerouslySetInnerHTML={{
                __html: mapSvg,
              }}
            />
          </div>
        </div>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
