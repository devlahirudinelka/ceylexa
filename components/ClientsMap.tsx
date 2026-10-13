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
 * Find every SVG element belonging to a region.
 */
function findRegionElements(
  svg: Element,
  region: (typeof REGIONS)[number],
): SVGGraphicsElement[] {
  const names = new Set(region.classes);
  const ids = new Set(region.ids);

  return Array.from(
    svg.querySelectorAll<SVGGraphicsElement>("[class], [id]"),
  ).filter((el) => {
    const cls = (el.getAttribute("class") ?? "")
      .replace(/\bis-(selected|client)-country\b/g, "")
      .trim();

    return names.has(cls) || ids.has(el.id);
  });
}

/**
 * Find the matching region from a country shape or its ancestors.
 */
function getRegionFromElement(
  el: Element,
): (typeof REGIONS)[number] | undefined {
  let current: Element | null = el;

  while (current && current.tagName.toLowerCase() !== "svg") {
    const isClientCountry = current.classList.contains("is-client-country");

    if (isClientCountry) {
      const cls = (current.getAttribute("class") ?? "")
        .replace(/\bis-(selected|client)-country\b/g, "")
        .trim();

      const id = current.id;

      const region = REGIONS.find(
        (item) => item.classes.includes(cls) || item.ids.includes(id),
      );

      if (region) return region;
    }

    current = current.parentElement;
  }

  return undefined;
}

export default function ClientsMap() {
  const [mapSvg, setMapSvg] = useState("");
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  });

  const svgWrapRef = useRef<HTMLDivElement>(null);

  // Load the world SVG.
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

  // Highlight all configured client regions.
  useEffect(() => {
    const root = svgWrapRef.current;
    const svg = root?.querySelector("svg");

    if (!svg) return;

    REGIONS.forEach((region) => {
      findRegionElements(svg, region).forEach((el) => {
        el.classList.add("is-client-country");
      });
    });
  }, [mapSvg]);

  // Track the hovered country and update the tooltip position.
  useEffect(() => {
    const root = svgWrapRef.current;
    const svg = root?.querySelector("svg");

    if (!root || !svg) return;

    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const region = getRegionFromElement(target);

      if (!region) {
        setHoveredCountry(null);
        return;
      }

      setHoveredCountry(region.name);

      const bounds = root.getBoundingClientRect();

      setTooltipPosition({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });
    };

    const handleMouseLeave = () => {
      setHoveredCountry(null);
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mapSvg]);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto block w-full px-6 before:table before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] after:clear-both after:table after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex flex-col items-start justify-start gap-4 max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="flex items-center justify-start gap-0.5">
              <div className="z-999 font-sans text-[0.875rem] leading-[1.5em] text-[#d7ba5e]">
                {"//"}
              </div>

              <div className="font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">
                Global Reach
              </div>
            </div>

            <h2 className="text-left">
              Sri Lanka at Our Core, Clients Worldwide
            </h2>

            <div className="w-full pt-6 max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

            <div>
              <p className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black">
                Our clients and projects extend across Sri Lanka and 11+
                international markets, including Sri Lanka, Australia, New
                Zealand, Singapore, Malaysia, United States of America, Japan,
                Maldives, UAE, India, West Indies, and the United Kingdom.
              </p>

              <div className="w-full pt-4 max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

              <p className="mb-0 font-sans text-[1rem] font-normal leading-[1.5em] text-black">
                Different industries. Different markets. One commitment to
                helping brands grow.
              </p>
            </div>
          </div>

          <div className="pt-15 max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
        </div>

        {/* Interactive world map */}
        <div className="relative w-full">
          <div className="relative aspect-[2000/857] w-full">
            <div
              ref={svgWrapRef}
              className="absolute inset-0 h-full w-full
                pointer-events-auto
                [&_svg]:block [&_svg]:h-full [&_svg]:w-full
                [&_path]:fill-[#efe6d0]
                [&_path]:stroke-[rgba(36,26,12,0.18)]
                [&_path.is-client-country]:fill-[#d7ba5e]
                [&_.is-client-country]:cursor-pointer"
              role="img"
              aria-label="World map highlighting client countries."
              dangerouslySetInnerHTML={{
                __html: mapSvg,
              }}
            />

            {/* Country name tooltip */}
            {hoveredCountry && (
              <div
                className="pointer-events-none absolute z-50
                  -translate-x-1/2 -translate-y-[calc(100%+12px)]
                  whitespace-nowrap rounded-lg
                  border border-white/10 bg-[#021F59]
                  px-4 py-2 text-sm font-medium text-white
                  shadow-xl"
                style={{
                  left: tooltipPosition.x,
                  top: tooltipPosition.y,
                }}
              >
                {hoveredCountry}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full pt-30 max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
