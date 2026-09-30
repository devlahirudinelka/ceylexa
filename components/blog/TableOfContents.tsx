"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <div className="mb-4 text-xs font-semibold tracking-wider text-muted uppercase">
        Table of contents
      </div>
      <ol className="max-h-[70vh] space-y-1 overflow-y-auto border-l border-border pr-2">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ml-px block border-l-2 py-1.5 pl-4 leading-snug transition-colors ${
                  isActive
                    ? "border-accent-2 font-medium text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
