import AppProvider from "@/app/providers/app-provider";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/toaster";
import { geistMono, geistSans } from "@/app/theme/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nwadike Philip | epicdevler",
  description: "Nwadike Philip's Portfolio",
  keywords: [
    "Nwadike Philip",
    "epicdevler",
    "Portfolio",
    "devler",
    "cedars",
    "android developer",
    "android",
  ],
  creator: "Nwadike Philip (epicdevler)",
  category: "portfolio",
  openGraph: {
    title: "Nwadike Philip | epicdevler",
    description: "Nwadike Philip's Portfolio",
    url: "https://epicdevler.vercel.app",
    siteName: "Nwadike's Portfolio",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <AppProvider>
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
