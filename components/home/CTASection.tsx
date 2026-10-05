import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background py-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))]"
    >
   

      <Reveal className="mx-auto  container">
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.55))] relative rounded-3xl px-8 py-16 text-center">
          <h2 className="tracking-tight">
            Your competition is already investing in digital.
            <span className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text">
              {" "}
              Are you?
            </span>
          </h2>
          <p className="mx-auto max-w-xl">
            Book your consultation today. We&apos;ll show you exactly
            what&apos;s missing &mdash; and what it would take to close the gap.
            No obligation. No credit card. No sales pressure. Just strategy.
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
