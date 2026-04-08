import { poppins } from "@/app/fonts";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nwadike Philip | epicdevler",
  description: "Nwadike Phiip's Portfolio",
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
    description: "Nwadike Phiip's Portfolio",
    url: "https://epicdevler.vercel.app",
    siteName: "Nwadike's Portfolio",

    // images: [
    //     {
    //         url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //         width: 800,
    //         height: 600,
    //     },
    //     {
    //         url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //         width: 1800,
    //         height: 1600,
    //         alt: 'My custom alt',
    //     },
    // ],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={poppins.variable}
        style={{ overflowX: "hidden", scrollBehavior: "smooth" }}
      >
        <Provider enableSystem={true} storageKey="epd-theme">
          {children}
          <Toaster />
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
