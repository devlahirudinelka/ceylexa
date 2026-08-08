import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Uxoral - Webflow HTML Website Template",
  description:
    "Welcome to Uxoral, a premium Webflow template designed for creative studios. Showcase your work with impact through a modern, minimal, and conversion-focused layout",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link href="/css/uxoral.css" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
