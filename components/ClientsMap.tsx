"use client";

import { useEffect, useRef, useState } from "react";

// Percentage positions over public/images/world.svg's 2000x857 viewBox
// (a standard equirectangular Simplemaps world outline) — approximate
// centroids for each labelled region, not exact geocoding.
//
// `ids` are the SVG's own `id="XX"` country codes (single-polygon
// countries); `classes` are its `class="Country Name"` values, used
// instead of id for multi-polygon countries (islands, exclaves — Canada,
// the US, Indonesia, etc.). Selecting a region colors every matching
// path in the inlined map with the site's gold accent.
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
      "AI", "AW", "BB", "BL", "CU", "CW", "DM", "DO", "GD", "HT", "JM", "LC",
      "MF", "MQ", "MS", "SX", "VC", "VG", "BQBO", "BQSA", "BQSE",
    ],
    classes: [
      "Antigua and Barbuda", "Bahamas", "Cayman Islands", "Guadeloupe",
      "Puerto Rico", "Saint Kitts and Nevis", "Trinidad and Tobago",
      "Turks and Caicos Islands", "United States Virgin Islands",
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
      "AL", "AT", "BA", "BE", "BG", "BY", "CH", "CZ", "DE", "EE", "ES", "FI",
      "HR", "HU", "IE", "IS", "LT", "LU", "LV", "MD", "ME", "MK", "NL", "PL",
      "PT", "RO", "RS", "SI", "SK", "UA", "XK",
    ],
    classes: [
      "Cyprus", "Denmark", "Faeroe Islands", "France", "Greece", "Italy",
      "Malta", "Norway", "Russian Federation", "United Kingdom",
      "Canary Islands (Spain)",
    ],
  },
  {
    name: "Middle East",
    left: 58,
    top: 43,
    blurb: "Supporting brands expanding across the Middle East.",
    ids: ["AE", "BH", "IL", "IQ", "IR", "JO", "KW", "LB", "PS", "QA", "SA", "SY", "YE"],
    classes: ["Oman", "Turkey"],
  },
  {
    name: "Africa",
    left: 53,
    top: 60,
    blurb: "Partnering with growing brands across Africa.",
    ids: [
      "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "DJ", "DZ", "EG",
      "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS",
      "LY", "MA", "MG", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RE", "RW",
      "SD", "SL", "SN", "SO", "SS", "SZ", "TD", "TG", "TN", "TZ", "UG", "YT",
      "ZA", "ZM", "ZW",
    ],
    classes: ["Angola", "Cape Verde", "Comoros", "Mauritius", "São Tomé and Principe", "Seychelles"],
  },
  {
    name: "Asia",
    left: 71,
    top: 38,
    blurb: "Sri Lanka is home base — with reach across Asia.",
    ids: [
      "AF", "AM", "BD", "BT", "GE", "IN", "KG", "KH", "KP", "KR", "KZ", "LA",
      "BN", "LK", "MM", "MN", "MV", "NP", "PK", "TH", "TJ", "TL", "TM", "TW", "UZ", "VN",
    ],
    classes: ["Azerbaijan", "China", "Indonesia", "Japan", "Malaysia", "Philippines"],
  },
  {
    name: "Pacific",
    left: 86,
    top: 63,
    blurb: "Extending campaigns out across the Pacific.",
    ids: ["GU", "MH", "NR", "PW", "TV"],
    classes: [
      "American Samoa", "Australia", "Federated States of Micronesia", "Fiji",
      "French Polynesia", "New Caledonia", "New Zealand",
      "Northern Mariana Islands", "Papua New Guinea", "Samoa",
      "Solomon Islands", "Tonga", "Vanuatu",
    ],
  },
];

export default function ClientsMap() {
  const [active, setActive] = useState<string | null>(null);
  const [mapSvg, setMapSvg] = useState("");
  const svgWrapRef = useRef<HTMLDivElement>(null);

  // The map is fetched and inlined (rather than rendered as an <img>) so
  // individual country <path> elements can be targeted and recolored —
  // an <img>'s SVG content is opaque to the page and can't be styled.
  useEffect(() => {
    let cancelled = false;
    fetch("/images/world.svg")
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setMapSvg(text);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Recolor the selected region's countries to the theme's gold accent
  // whenever the active pin changes (or once the map finishes loading).
  useEffect(() => {
    const root = svgWrapRef.current;
    if (!root) return;

    root.querySelectorAll(".is-selected-country").forEach((el) => {
      el.classList.remove("is-selected-country");
    });

    if (!active) return;
    const region = REGIONS.find((r) => r.name === active);
    if (!region) return;

    const selector = [
      ...region.ids.map((id) => `#${id}`),
      ...region.classes.map((name) => `[class="${name}"]`),
    ].join(",");
    if (!selector) return;

    root.querySelectorAll(selector).forEach((el) => {
      el.classList.add("is-selected-country");
    });
  }, [active, mapSvg]);

  return (
    <section className="section">
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="blog-top-contant">
            <div className="title-wrapar">
              <div className="font-size-xsm brand">{"//"}</div>
              <div className="font-size-xsm">Global Reach</div>
            </div>
            <h2 className="heading-style-h2 center-mobile">Sri Lanka at Our Core, Clients Worldwide</h2>
          </div>

          <div className="spaching-20-xl" />

          <div className="world-map-wrap" onMouseLeave={() => setActive(null)}>
            <div
              ref={svgWrapRef}
              className="world-map-svg"
              role="img"
              aria-label="World map highlighting the regions Ceylexa's client work reaches."
              dangerouslySetInnerHTML={{ __html: mapSvg }}
            />

            {REGIONS.map((region) => (
              <button
                key={region.name}
                type="button"
                className={`map-pin${active === region.name ? " is-active" : ""}`}
                style={{ left: `${region.left}%`, top: `${region.top}%` }}
                onMouseEnter={() => setActive(region.name)}
                onFocus={() => setActive(region.name)}
                onClick={() =>
                  setActive((current) => (current === region.name ? null : region.name))
                }
                aria-pressed={active === region.name}
              >
                <span className="map-pin-dot" aria-hidden="true">
                  +
                </span>
                <span className="map-pin-label">{region.name}</span>
                <span className="map-pin-tooltip" role="tooltip">
                  {region.blurb}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
