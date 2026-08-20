import { ShieldCheck, Star, Users, ArrowRight, Compass } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CreamGradientBackground from "./CreamGradientBackground";
import { heroStats } from "@/lib/home-content";

const icons: Record<string, React.ReactNode> = {
  shield: <ShieldCheck size={14} />,
  star: <Star size={14} />,
  users: <Users size={14} />,
};

export default function Hero() {
  return (
    <section className="relative  overflow-hidden bg-background">
      <CreamGradientBackground />
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" /> */}
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6  text-center">
          <div className="animate-fade-up">
            <Badge
              tone="light"
              icon={<span className="h-1.5 w-1.5 rounded-full bg-accent-2" />}
            >
              Digital Marketing Agency
            </Badge>
          </div>

          <h1
            className="animate-fade-up mt-8 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Your Partner in 
            <br /> 
            <span className="text-gradient">Digital Excellence.</span>
          </h1>

          <p
            className="animate-fade-up mt-10 max-w-2xl text-balance text-base text-muted sm:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            <br />
            We are helping businesses build powerful brands, 
            connect with their audiences, and grow in the digital world. 
            We mix big ideas with bold execution to craft campaigns that 
            create meaningful digital experiences.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <Button href="mailto:hello@ceylexa.com" size="lg">
              Start a Project
              <ArrowRight size={16} />
            </Button>
            <Button href="/#process" variant="secondary" tone="light" size="lg">
              <Compass size={18} />
              See our process
            </Button>
          </div>

          <div
            className="animate-fade-up mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted sm:text-sm"
            style={{ animationDelay: "0.32s" }}
          >
            {heroStats.map((stat, i) => (
              <span key={stat.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
                )}
                {icons[stat.icon]}
                {stat.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
