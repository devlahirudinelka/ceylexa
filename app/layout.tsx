import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Ceylexa",
  description:
    "Ceylexa — an AI agency for operations teams.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
