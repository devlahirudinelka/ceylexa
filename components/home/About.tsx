import { ArrowRight, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/lib/home-content";

export default function About() {
  return (
    <section id="about" className="relative bg-background py-28">
      <div className="mx-auto  container px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <Badge>{about.badge}</Badge>
            <h2 className="tracking-tight">{about.heading}</h2>
            <div className="mt-4 text-muted">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary" tone="light" size="lg">
                Learn more about us
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] relative rounded-3xl p-6 sm:p-8">
              <ul className="space-y-6">
                {about.highlights.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent/15 to-accent-2/15 text-accent-2">
                      <CheckCircle2 size={16} />
                    </span>
                    <div>
                      <h3 className="text-foreground">{item.title}</h3>
                      <p className="text-[0.875rem]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
