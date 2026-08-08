import Link from "next/link";

function SocialIcon({ path }: { path: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="social-icon">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M14.5 7.99925C14.4979 9.58788 13.9151 11.1209 12.8612 12.3097C11.8072 13.4984 10.355 14.2607 8.7781 14.453C8.74298 14.457 8.70743 14.4535 8.67377 14.4427C8.64011 14.4319 8.60912 14.4141 8.58284 14.3905C8.55656 14.3669 8.53559 14.338 8.5213 14.3056C8.50702 14.2733 8.49975 14.2383 8.49997 14.203V9.49925H9.99997C10.0685 9.4994 10.1364 9.48546 10.1993 9.45828C10.2622 9.43111 10.3189 9.39129 10.3658 9.34129C10.4127 9.2913 10.4488 9.2322 10.4719 9.16766C10.4949 9.10312 10.5045 9.03452 10.5 8.96613C10.4889 8.83755 10.4296 8.71793 10.3339 8.63131C10.2383 8.5447 10.1134 8.49751 9.98435 8.49925H8.49997V6.99925C8.49997 6.73404 8.60533 6.47968 8.79286 6.29215C8.9804 6.10461 9.23476 5.99925 9.49997 5.99925H10.5C10.5685 5.9994 10.6364 5.98546 10.6993 5.95829C10.7622 5.93111 10.8189 5.89129 10.8658 5.84129C10.9127 5.7913 10.9488 5.7322 10.9719 5.66766C10.9949 5.60312 11.0045 5.53452 11 5.46613C10.9889 5.33734 10.9294 5.21753 10.8335 5.13088C10.7376 5.04424 10.6123 4.9972 10.4831 4.99925H9.49997C8.96954 4.99925 8.46083 5.20997 8.08576 5.58504C7.71069 5.96011 7.49997 6.46882 7.49997 6.99925V8.49925H5.99997C5.93143 8.4991 5.86358 8.51305 5.80066 8.54022C5.73773 8.56739 5.68106 8.60721 5.63417 8.65721C5.58728 8.70721 5.55117 8.76631 5.52809 8.83085C5.505 8.89539 5.49543 8.96398 5.49997 9.03238C5.51103 9.16117 5.57052 9.28097 5.66645 9.36762C5.76238 9.45427 5.8876 9.50131 6.01685 9.49925H7.49997V14.2043C7.50019 14.2395 7.49293 14.2745 7.47868 14.3067C7.46444 14.339 7.44352 14.3679 7.41731 14.3915C7.3911 14.4151 7.36019 14.4329 7.32661 14.4437C7.29303 14.4545 7.25754 14.4581 7.22247 14.4543C5.60332 14.2571 4.1172 13.4592 3.05827 12.2185C1.99934 10.9779 1.44477 9.3849 1.50435 7.75488C1.62935 4.37988 4.3631 1.63613 7.7406 1.50488C8.61503 1.47101 9.48731 1.61385 10.3053 1.92485C11.1232 2.23586 11.87 2.70865 12.5011 3.31494C13.1321 3.92122 13.6344 4.64855 13.9778 5.45342C14.3213 6.25829 14.4989 7.12417 14.5 7.99925Z",
  },
  {
    label: "Instagram",
    href: "https://www.facebook.com/",
    path: "M11 1.5H5C4.07205 1.50099 3.18238 1.87006 2.52622 2.52622C1.87006 3.18238 1.50099 4.07205 1.5 5V11C1.50099 11.928 1.87006 12.8176 2.52622 13.4738C3.18238 14.1299 4.07205 14.499 5 14.5H11C11.928 14.499 12.8176 14.1299 13.4738 13.4738C14.1299 12.8176 14.499 11.928 14.5 11V5C14.499 4.07205 14.1299 3.18238 13.4738 2.52622C12.8176 1.87006 11.928 1.50099 11 1.5ZM8 11C7.40666 11 6.82664 10.8241 6.33329 10.4944C5.83994 10.1648 5.45542 9.69623 5.22836 9.14805C5.0013 8.59987 4.94189 7.99667 5.05764 7.41473C5.1734 6.83279 5.45912 6.29824 5.87868 5.87868C6.29824 5.45912 6.83279 5.1734 7.41473 5.05764C7.99667 4.94189 8.59987 5.0013 9.14805 5.22836C9.69623 5.45542 10.1648 5.83994 10.4944 6.33329C10.8241 6.82664 11 7.40666 11 8C10.9992 8.7954 10.6828 9.55798 10.1204 10.1204C9.55798 10.6828 8.7954 10.9992 8 11ZM11.75 5C11.6017 5 11.4567 4.95601 11.3333 4.8736C11.21 4.79119 11.1139 4.67406 11.0571 4.53701C11.0003 4.39997 10.9855 4.24917 11.0144 4.10368C11.0434 3.9582 11.1148 3.82456 11.2197 3.71967C11.3246 3.61478 11.4582 3.54335 11.6037 3.51441C11.7492 3.48547 11.9 3.50032 12.037 3.55709C12.1741 3.61386 12.2912 3.70999 12.3736 3.83332C12.456 3.95666 12.5 4.10166 12.5 4.25C12.5 4.44891 12.421 4.63968 12.2803 4.78033C12.1397 4.92098 11.9489 5 11.75 5ZM10 8C10 8.39556 9.8827 8.78224 9.66294 9.11114C9.44318 9.44004 9.13082 9.69638 8.76537 9.84776C8.39991 9.99913 7.99778 10.0387 7.60982 9.96157C7.22186 9.8844 6.86549 9.69392 6.58579 9.41421C6.30608 9.13451 6.1156 8.77814 6.03843 8.39018C5.96126 8.00222 6.00087 7.60009 6.15224 7.23463C6.30362 6.86918 6.55996 6.55682 6.88886 6.33706C7.21776 6.1173 7.60444 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M15.3545 4.85403L13.4858 6.72278C13.1083 11.099 9.41764 14.5003 5.00076 14.5003C4.09326 14.5003 3.34514 14.3565 2.77701 14.0728C2.31889 13.8434 2.13139 13.5978 2.08451 13.5278C2.04272 13.4651 2.01562 13.3938 2.00526 13.3192C1.9949 13.2445 2.00154 13.1685 2.02468 13.0968C2.04782 13.0251 2.08686 12.9596 2.13889 12.9051C2.19091 12.8506 2.25458 12.8086 2.32514 12.7822C2.34139 12.7759 3.84014 12.2003 4.79201 11.1047C4.26413 10.6706 3.80331 10.161 3.42451 9.59216C2.64951 8.44153 1.78201 6.44278 2.04951 3.45591C2.05799 3.361 2.09341 3.27049 2.15161 3.19504C2.2098 3.11958 2.28835 3.06233 2.37799 3.03002C2.46763 2.99771 2.56464 2.99169 2.65759 3.01266C2.75054 3.03364 2.83556 3.08073 2.90264 3.14841C2.92451 3.17028 4.98264 5.21716 7.49889 5.88091V5.50028C7.49793 5.10115 7.57684 4.70587 7.73098 4.3377C7.88512 3.96954 8.11136 3.63593 8.39639 3.35653C8.6732 3.08011 9.00257 2.86193 9.36507 2.71487C9.72757 2.56781 10.1159 2.49485 10.507 2.50028C11.0317 2.50546 11.5462 2.64632 12.0004 2.90916C12.4545 3.17201 12.833 3.54789 13.0989 4.00028H15.0008C15.0997 4.00021 15.1965 4.02949 15.2788 4.08442C15.3611 4.13936 15.4252 4.21748 15.4631 4.30889C15.501 4.4003 15.5109 4.50089 15.4915 4.59794C15.4722 4.69498 15.4245 4.78411 15.3545 4.85403Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M14.6456 4.345C14.5867 4.11459 14.4739 3.90149 14.3164 3.72327C14.159 3.54505 13.9614 3.40683 13.74 3.32C11.5975 2.4925 8.1875 2.5 8 2.5C7.8125 2.5 4.4025 2.4925 2.26 3.32C2.0386 3.40683 1.84102 3.54505 1.68356 3.72327C1.5261 3.90149 1.41327 4.11459 1.35438 4.345C1.1925 4.96875 1 6.10875 1 8C1 9.89125 1.1925 11.0313 1.35438 11.655C1.41318 11.8855 1.52597 12.0988 1.68344 12.2771C1.8409 12.4554 2.03853 12.5937 2.26 12.6806C4.3125 13.4725 7.525 13.5 7.95875 13.5H8.04125C8.475 13.5 11.6894 13.4725 13.74 12.6806C13.9615 12.5937 14.1591 12.4554 14.3166 12.2771C14.474 12.0988 14.5868 11.8855 14.6456 11.655C14.8075 11.03 15 9.89125 15 8C15 6.10875 14.8075 4.96875 14.6456 4.345ZM10.1388 8.20813L7.13875 10.2081C7.10109 10.2333 7.05732 10.2477 7.0121 10.2499C6.96688 10.2521 6.92192 10.2419 6.882 10.2206C6.84209 10.1992 6.80873 10.1674 6.78548 10.1285C6.76223 10.0897 6.74997 10.0453 6.75 10V6C6.74997 5.95473 6.76223 5.9103 6.78548 5.87146C6.80873 5.83261 6.84209 5.80081 6.882 5.77944C6.92192 5.75807 6.96688 5.74794 7.0121 5.75013C7.05732 5.75232 7.10109 5.76675 7.13875 5.79188L10.1388 7.79188C10.173 7.8147 10.2012 7.84564 10.2206 7.88195C10.2401 7.91826 10.2502 7.95881 10.2502 8C10.2502 8.04119 10.2401 8.08175 10.2206 8.11806C10.2012 8.15437 10.173 8.18531 10.1388 8.20813Z",
  },
];

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="space-28-xl" />
      <div className="w-layout-blockcontainer container is-small w-container">
        <div className="inner-wrappar">
          <div className="w-layout-grid footer-grid">
            <div className="fotter-inner-table">
              <div className="fotter-title-name">
                <div className="font-size-base medium">Pages</div>
                <div className="fotter-menu-link">
                  <Link href="/" aria-current="page" className="footer-link w--current">
                    Home
                  </Link>
                  <a href="/about" className="footer-link">
                    About
                  </a>
                  <a href="/project" className="footer-link">
                    Works
                  </a>
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="fotter-inner-table second">
              <div className="fotter-title-name middle">
                <div className="font-size-base medium middle">Follow Us</div>
                <div className="fotter-menu-link inner">
                  <a href="mailto:mail@uxoradesign.com" className="mail">
                    mail@uxoradesign.com
                  </a>
                  <a href="tel:+910123456789" className="mail">
                    +91 0123456789
                  </a>
                </div>
              </div>
              <div className="fotter-socal-media">
                {SOCIAL_ICONS.map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.label}
                    className="social-ichon w-inline-block"
                  >
                    <SocialIcon path={icon.path} />
                  </a>
                ))}
              </div>
            </div>

            <div className="fotter-inner-table second">
              <div className="fotter-title-name middle">
                <div className="font-size-base medium middle">Address</div>
                <div className="fotter-menu-link inner right">
                  <div className="font-size-sm align-middle">#21. North Street</div>
                  <div className="font-size-sm">Velachery</div>
                  <div className="font-size-sm">Chennai, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapapr">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.prod.website-files.com/696b260b2c87366dbac9f403/696dda865441d224de431e30_Container.webp"
          loading="lazy"
          alt="Circular logo with a black U shape, an orange dot in the center, and three smaller black squares arranged diagonally at the top right of the U."
          className="footer-logo"
        />
        <div className="footer-dark-wrappar">
          <div className="container is-small">
            <div className="pill-wraapr">
              <div className="pill-devider">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                  <div className="font-size-sm white">Twitter</div>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                  <div className="font-size-sm white">Instagram</div>
                </a>
              </div>
              <div className="pill-devider">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                  <div className="font-size-sm white">Facebook</div>
                </a>
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="social-link w-inline-block">
                  <div className="font-size-sm white">Behance</div>
                </a>
              </div>
            </div>
            <div className="footer-desplay-wrapper">
              <div className="footer-text-wrap">
                <div className="display">UXORA</div>
              </div>
              <div className="fotter-copy-right">
                <div className="font-size-sm white">Designed by Wroney</div>
                <div className="copy-right-left">
                  <a href="/privacy" className="font-size-sm white">
                    License
                  </a>
                  <a href="/styleguide" className="font-size-sm white">
                    Styleguide
                  </a>
                  <a href="/changelog" className="font-size-sm white">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
