"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div";
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 blur-[6px] transform-[translateY(28px)] [transition:opacity_0.8s_cubic-bezier(0.16,1,0.3,1),transform_0.8s_cubic-bezier(0.16,1,0.3,1),filter_0.8s_cubic-bezier(0.16,1,0.3,1)] [&.is-visible]:opacity-100 [&.is-visible]:blur-[0] [&.is-visible]:transform-[translateY(0)] motion-reduce:opacity-100 motion-reduce:filter-none motion-reduce:transform-none motion-reduce:transition-none scroll-reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
