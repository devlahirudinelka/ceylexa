"use client";

import { useEffect, useRef, useState } from "react";

// Percentage positions over public/images/world.svg's 2000x857 viewBox
// Approximate centroids for each labelled region.
const REGIONS = [
  {
    name: "North America",
    left: 19,
    top: 34,
    blurb: "Reaching brands and audiences across the US and Canada.",
    ids: ["GL", "MX", "BM"],
    classes: ["Canada", "United States"],
  },
  {
    name: "Central America",
    left: 23,
    top: 53,
    blurb: "Campaigns that travel from Colombo to Central America.",
    ids: ["BZ", "CR", "GT", "HN", "NI", "PA", "SV"],
    classes: [],
  },
  {
    name: "Caribbean",
    left: 28,
    top: 48,
    blurb: "A growing footprint across the Caribbean islands.",
    ids: [
      "AI",
      "AW",
      "BB",
      "BL",
      "CU",
      "CW",
      "DM",
      "DO",
      "GD",
      "HT",
      "JM",
      "LC",
      "MF",
      "MQ",
      "MS",
      "SX",
      "VC",
      "VG",
      "BQBO",
      "BQSA",
      "BQSE",
    ],
    classes: [
      "Antigua and Barbuda",
      "Bahamas",
      "Cayman Islands",
      "Guadeloupe",
      "Puerto Rico",
      "Saint Kitts and Nevis",
      "Trinidad and Tobago",
      "Turks and Caicos Islands",
      "United States Virgin Islands",
    ],
  },
  {
    name: "South America",
    left: 31,
    top: 70,
    blurb: "Building brand presence for partners across South America.",
    ids: ["BO", "BR", "CO", "EC", "GF", "GY", "PE", "PY", "SR", "UY", "VE"],
    classes: ["Argentina", "Chile", "Falkland Islands"],
  },
  {
    name: "Europe",
    left: 49,
    top: 27,
    blurb: "Design and digital campaigns for clients across Europe.",
    ids: [
      "AL",
      "AT",
      "BA",
      "BE",
      "BG",
      "BY",
      "CH",
      "CZ",
      "DE",
      "EE",
      "ES",
      "FI",
      "HR",
      "HU",
      "IE",
      "IS",
      "LT",
      "LU",
      "LV",
      "MD",
      "ME",
      "MK",
      "NL",
      "PL",
      "PT",
      "RO",
      "RS",
      "SI",
      "SK",
      "UA",
      "XK",
    ],
    classes: [
      "Cyprus",
      "Denmark",
      "Faeroe Islands",
      "France",
      "Greece",
      "Italy",
      "Malta",
      "Norway",
      "Russian Federation",
      "United Kingdom",
      "Canary Islands (Spain)",
    ],
  },
  {
    name: "Middle East",
    left: 58,
    top: 43,
    blurb: "Supporting brands expanding across the Middle East.",
    ids: [
      "AE",
      "BH",
      "IL",
      "IQ",
      "IR",
      "JO",
      "KW",
      "LB",
      "PS",
      "QA",
      "SA",
      "SY",
      "YE",
    ],
    classes: ["Oman", "Turkey"],
  },
  {
    name: "Africa",
    left: 53,
    top: 60,
    blurb: "Partnering with growing brands across Africa.",
    ids: [
      "BF",
      "BI",
      "BJ",
      "BW",
      "CD",
      "CF",
      "CG",
      "CI",
      "CM",
      "DJ",
      "DZ",
      "EG",
      "EH",
      "ER",
      "ET",
      "GA",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GW",
      "KE",
      "LR",
      "LS",
      "LY",
      "MA",
      "MG",
      "ML",
      "MR",
      "MW",
      "MZ",
      "NA",
      "NE",
      "NG",
      "RE",
      "RW",
      "SD",
      "SL",
      "SN",
      "SO",
      "SS",
      "SZ",
      "TD",
      "TG",
      "TN",
      "TZ",
      "UG",
      "YT",
      "ZA",
      "ZM",
      "ZW",
    ],
    classes: [
      "Angola",
      "Cape Verde",
      "Comoros",
      "Mauritius",
      "São Tomé and Principe",
      "Seychelles",
    ],
  },
  {
    name: "Asia",
    left: 71,
    top: 38,
    blurb: "Sri Lanka is home base — with reach across Asia.",
    ids: [
      "AF",
      "AM",
      "BD",
      "BT",
      "GE",
      "IN",
      "KG",
      "KH",
      "KP",
      "KR",
      "KZ",
      "LA",
      "BN",
      "LK",
      "MM",
      "MN",
      "MV",
      "NP",
      "PK",
      "TH",
      "TJ",
      "TL",
      "TM",
      "TW",
      "UZ",
      "VN",
    ],
    classes: [
      "Azerbaijan",
      "China",
      "Indonesia",
      "Japan",
      "Malaysia",
      "Philippines",
    ],
  },
  {
    name: "Pacific",
    left: 86,
    top: 63,
    blurb: "Extending campaigns out across the Pacific.",
    ids: ["GU", "MH", "NR", "PW", "TV"],
    classes: [
      "American Samoa",
      "Australia",
      "Federated States of Micronesia",
      "Fiji",
      "French Polynesia",
      "New Caledonia",
      "New Zealand",
      "Northern Mariana Islands",
      "Papua New Guinea",
      "Samoa",
      "Solomon Islands",
      "Tonga",
      "Vanuatu",
    ],
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

export default function ClientsMap() {
  const [active, setActive] = useState<string | null>(null);
  const [mapSvg, setMapSvg] = useState("");

  const svgWrapRef = useRef<HTMLDivElement>(null);

  // Load and inline the SVG so individual country paths
  // can be selected and recolored.
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

  // Highlight countries belonging to the selected region.
  useEffect(() => {
    const root = svgWrapRef.current;

    if (!root) return;

    // Remove previous selection.
    root.querySelectorAll(".is-selected-country").forEach((element) => {
      element.classList.remove("is-selected-country");
    });

    if (!active) return;

    const region = REGIONS.find((item) => item.name === active);

    if (!region) return;

    const selectors: string[] = [];

    // Country IDs.
    region.ids.forEach((id) => {
      selectors.push(`#${CSS.escape(id)}`);
    });

    // Country classes.
    region.classes.forEach((name) => {
      selectors.push(`[class~="${CSS.escape(name)}"]`);
    });

    if (selectors.length === 0) return;

    const selector = selectors.join(",");

    root.querySelectorAll(selector).forEach((element) => {
      element.classList.add("is-selected-country");
    });
  }, [active, mapSvg]);

  const handleRegionClick = (regionName: string) => {
    setActive((current) => (current === regionName ? null : regionName));
  };

  return (
    <section className="section">
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="blog-top-contant">
            <div className="title-wrapar">
              <div className="font-size-xsm brand">{"//"}</div>

              <div className="font-size-xsm">Global Reach</div>
            </div>

            <h2 className="heading-style-h2 center-mobile">
              Sri Lanka at Our Core, Clients Worldwide
            </h2>
          </div>

          <div className="spaching-20-xl" />
        </div>

        <div className="world-map-wrap" onMouseLeave={() => setActive(null)}>
          <div className="world-map-frame">
            {/* World SVG */}
            <div
              ref={svgWrapRef}
              className="world-map-svg"
              role="img"
              aria-label="World map highlighting the regions Ceylexa's client work reaches."
              dangerouslySetInnerHTML={{
                __html: mapSvg,
              }}
            />

            {/* Region pins */}
            {REGIONS.map((region) => {
              const isActive = active === region.name;

              return (
                <button
                  key={region.name}
                  type="button"
                  className={`map-pin${isActive ? " is-active" : ""}`}
                  style={{
                    left: `${region.left}%`,
                    top: `${region.top}%`,
                  }}
                  onMouseEnter={() => setActive(region.name)}
                  onFocus={() => setActive(region.name)}
                  onClick={() => handleRegionClick(region.name)}
                  aria-pressed={isActive}
                  aria-label={`View ${region.name} client reach`}
                >
                  <span className="map-pin-dot" aria-hidden="true">
                    <LocationIcon size={24} color="currentColor" />
                  </span>

                  <span className="map-pin-label">{region.name}</span>

                  <span className="map-pin-tooltip" role="tooltip">
                    {region.blurb}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-xxxl" />
    </section>
  );
}
