import Link from "next/link";
import { Sparkles } from "lucide-react";
import { footerLinks } from "@/lib/home-content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#b45309] to-[#ea580c] text-white">
                <Sparkles size={16} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Ceylexa
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              An AI agency for operations teams who want their time back.
            </p>
          </div>

          <FooterColumn title="Services" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} Ceylexa, Inc. All rights reserved.</p>
          <p>An AI agency for automation &amp; agentic systems.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
