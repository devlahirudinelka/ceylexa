import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-3xl" />

      <Reveal className="mx-auto max-w-4xl">
        <div className="card-border relative rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Your competition is already investing in digital.
            <span className="text-gradient"> Are you?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Book your consultation today. We&apos;ll show you exactly what&apos;s missing
            &mdash; and what it would take to close the gap. No obligation. No credit card.
            No sales pressure. Just strategy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a Consultation
              <ArrowRight size={16} />
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn more about us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
