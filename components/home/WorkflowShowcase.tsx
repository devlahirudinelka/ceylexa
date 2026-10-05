import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { workflowSteps } from "@/lib/home-content";

export default function WorkflowShowcase() {
  return (
    <section id="process" className="relative bg-surface py-28">
      <div className="mx-auto  container px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Badge>How we work</Badge>
            <h2 className="tracking-tight">
              One engagement. A full
              <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text">
                {" "}
                operational system.
              </span>
            </h2>
            <p className="">
              Every project follows the same loop — we find the highest-leverage
              automation, design the agent architecture with your team, ship it
              into your stack, and keep tuning it as you grow.
            </p>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted">
              <div>
                <p className="font-display text-[1.5rem] font-semibold">
                  120M+
                </p>
                <p>Workflow runs completed</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-[1.5rem] font-semibold">
                  99.98%
                </p>
                <p>Uptime SLA</p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent lg:left-[27px]" />
            <div className="space-y-6">
              {workflowSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] border border-border backdrop-blur-[6px] relative flex gap-5 rounded-2xl p-5 pl-4">
                    <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-background font-display text-sm font-semibold text-accent-2 ring-1 ring-border">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-foreground">{step.title}</h3>
                      <p className="text-[0.875rem]">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
