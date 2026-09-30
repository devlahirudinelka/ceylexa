import type { Metadata } from "next";
import Script from "next/script";
import { Questrial } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "Ceylexa",
  description:
    "Ceylexa Digital — a digital marketing company for branding, social media, content, paid media, SEO, web design and influencer marketing.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={questrial.variable} suppressHydrationWarning>
      <body className="antialiased">
        {/* Runs before hydration so first-time visitors never see a flash
            of the fully-built page before the loading screen takes over.
            Returning visitors in the same tab (sessionStorage already set)
            skip this — the class is simply never added, so the page just
            renders normally with no loader and no delay. */}
        <Script id="page-loader-init" strategy="beforeInteractive">
          {`try{if(!sessionStorage.getItem("ceylexa-loaded")){document.documentElement.classList.add("pl-loading")}}catch(e){}`}
        </Script>
        <PageLoader>
          <SmoothScroll>{children}</SmoothScroll>
        </PageLoader>
      </body>
    </html>
  );
}
