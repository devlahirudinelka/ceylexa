import { Quote } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/home-content";

export default function Testimonials() {
  return (
    <section className="relative bg-surface py-28">
      <div className="mx-auto  container px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>What clients say</Badge>
          <h2 className="tracking-tight">
            Teams that run on
            <span className="text-transparent bg-[linear-gradient(90deg,#b8993f_0%,#d7ba5e_45%,#e6cf85_100%)] bg-clip-text">
              {" "}
              autonomous workflows.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] flex h-full flex-col justify-between rounded-2xl p-6">
                <Quote className="text-accent-2/70" size={22} />
                <p className="text-[0.875rem]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-[0.875rem] font-medium">{t.name}</p>
                  <p className="text-[0.75rem]">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
