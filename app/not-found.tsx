import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CreamGradientBackground from "@/components/home/CreamGradientBackground";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-20">
        <CreamGradientBackground />
        <div className="relative max-w-xl text-center">
          <div className="text-gradient text-7xl font-semibold tracking-tight sm:text-9xl">404</div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            This page took a different route.
          </h1>
          <p className="mt-3 text-muted">
            The page you are looking for does not exist or has moved. Let&rsquo;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">Back to home</Button>
            <Link
              href="/project"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-black/5"
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
