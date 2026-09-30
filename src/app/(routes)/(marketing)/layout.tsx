import AppProvider from "@/app/providers/app-provider";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Toaster } from "@/components/toaster";
import { fontVariables } from "@/app/theme/fonts";
import { SiteConfig } from "@/site-config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

const siteTitle = `${SiteConfig.name} — ${SiteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SiteConfig.siteUrl),
  title: siteTitle,
  description: SiteConfig.description,
  keywords: [
    "Philip Nwadike",
    "Nwadike Philip",
    "epicdevler",
    "Portfolio",
    "Software Engineer",
    "Product Builder",
    "Frontend Engineer",
    "Next.js",
    "React",
  ],
  creator: `${SiteConfig.name} (${SiteConfig.handle})`,
  category: "portfolio",
  openGraph: {
    title: siteTitle,
    description: SiteConfig.description,
    url: SiteConfig.siteUrl,
    siteName: SiteConfig.name,
    locale: SiteConfig.locale,
    type: "website",
    images: [{ url: SiteConfig.profile.src, alt: SiteConfig.profile.alt }],
  },
  robots: {
    index: false,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["dev.epicdevler@gmail.com", "mailto:dev.epicdevler@gmail.com"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fontVariables}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </AppProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
