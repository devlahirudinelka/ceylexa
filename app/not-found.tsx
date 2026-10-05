import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[80vh] items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-20">
        <CreamGradientBackground />
        <div className="relative max-w-xl text-center">
          <div className="text-transparent bg-[linear-gradient(90deg,#92400e_0%,#b45309_45%,#ea580c_100%)] bg-clip-text text-7xl font-semibold tracking-tight sm:text-9xl">404</div>
          <h1 className="tracking-tight text-foreground">
            This page took a different route.
          </h1>
          <p className="">
            The page you are looking for does not exist or has moved. Let&rsquo;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">Back to home</Button>
            <Link
              href="/project"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground"
            >
              View our projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
