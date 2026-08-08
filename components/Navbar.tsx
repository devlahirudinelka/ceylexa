"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (open) {
      el.style.display = "flex";
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        el.querySelectorAll(".nav-link-wrapper > *"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.1 }
      );
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="nav-menu-button"
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="menu-button-item-wrap">
            <div className="menu-link-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 20"
                fill="none"
                className="menu-link-ichon"
              >
                <path d="M0 6.66602H20M0 14.166H20" stroke="currentColor" strokeWidth="3.5" />
              </svg>
            </div>
            <div className="font-size-lg is-white">{open ? "Close" : "Menu"}</div>
          </div>
        </div>

        <Link href="/" aria-current="page" className="brand-logo-wrapper w-nav-brand w--current">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 28 28"
            fill="none"
            className="barand-logo"
          >
            <g clipPath="url(#clip0_59248_1321)">
              <path
                d="M24.8543 2.76367H23.4188V4.19914H24.8543V2.76367ZM19.8329 12.8138V9.93914H22.702V12.8101H25.5711C25.6196 15.4701 25.418 17.7903 24.0665 20.1125C20.154 26.9967 10.4884 27.9245 5.36067 21.8839C4.16414 20.4933 3.3036 18.8021 2.9004 16.997C2.69507 16.017 2.60547 14.7719 2.60547 13.721V2.94287H8.34547L8.35667 13.8759C8.38467 15.2909 8.6404 16.745 9.486 17.8538C11.9201 21.1503 17.0721 20.8517 19.0676 17.2602C19.7844 16.0618 19.8497 14.1597 19.8311 12.8138H19.8329ZM20.5497 4.91594H22.702V7.06821H25.5729V9.93914H22.702V7.07007H20.5497V4.91781V4.91594Z"
                fill="currentColor"
              />
              <circle cx="14.0898" cy="13.0234" r="2.29297" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_59248_1321">
                <rect width="28" height="28" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
          <div className="font-size-2xl">Uxoral</div>
        </Link>

        <div className="nav-button-wrap">
          <a href="/contact" className="nav-button w-button">
            Contact
          </a>
        </div>

        <div className="nav-menu-overlay" ref={overlayRef} style={{ display: "none" }}>
          <div className="container large">
            <div className="w-layout-grid nav-grid">
              <div className="nav-right">
                <div className="nav-link-wrapper">
                  {[
                    { href: "/", label: "HOME", current: true },
                    { href: "/about", label: "ABOUT" },
                    { href: "/project", label: "Project" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contact" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-current={link.current ? "page" : undefined}
                      className={`nav-link-block w-inline-block${link.current ? " w--current" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      <div className="nav-link-text">{link.label}</div>
                      <div className="nav-link-text">{link.label}</div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="nav-image-wrap" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
