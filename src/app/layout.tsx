import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/shared";
import "./globals.css";
import "./motion.css";
import { HomeMotion } from "@/components/home-motion";
import { siteOrigin, allowIndexing } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const satoshi = localFont({
  src: [{ path: "../../public/fonts/satoshi-variable.woff2", weight: "300 900" }],
  variable: "--font-satoshi", display: "swap",
});
const sourceSans = localFont({
  src: [{ path: "../../public/fonts/source-sans-3-variable.woff2", weight: "400 700" }],
  variable: "--font-source-sans", display: "swap",
});
export const metadata: Metadata = {
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  robots: { index: allowIndexing, follow: allowIndexing },
  title: { default: "Barcon Engineering | Engineering a stronger Ethiopia", template: "%s | Barcon Engineering" },
  description: "Ethiopian engineering and construction expertise in water supply, sanitation, irrigation, roads, buildings, electromechanical systems, and solar energy. Established in 2016.",
  openGraph: { type: "website", siteName: "Barcon Engineering", locale: "en_ET", title: "Barcon Engineering", description: "Engineering with purpose. Building for communities across Ethiopia." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${satoshi.variable} ${sourceSans.variable}`}><body><a href="#main-content" className="skip-link">Skip to content</a><HomeMotion><Header /><main id="main-content">{children}</main><Footer /></HomeMotion><Analytics /></body></html>;
}
