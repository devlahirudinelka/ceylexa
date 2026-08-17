import { Plug2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { integrations } from "@/lib/home-content";

export default function Integrations() {
  return (
    <section id="stack" className="relative bg-background py-28">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <Reveal>
          <Badge>Our stack</Badge>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            We build straight into the stack
            <span className="text-gradient"> you already run.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            600+ integrations with the CRMs, data warehouses, and messaging
            tools your team lives in every day.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 60}>
              <div className="card-border flex items-center justify-center gap-2 rounded-xl px-4 py-5 text-sm font-medium text-foreground/80 transition-colors hover:border-accent-2/50 hover:text-foreground">
                <Plug2 size={15} className="text-accent-2" />
                {name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
