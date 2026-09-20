import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inteldev.co.za"),
  title: {
    default: "INTELDEV | Property Feasibility & Spatial Intelligence Engine | Cape Town & Western Cape",
    template: "%s | INTELDEV Property Intelligence",
  },
  description:
    "Institutional property feasibility, statutory spatial intelligence, and deterministic underwriting engine for Cape Town, Blouberg, Table View, Sandown, Rivergate, and the N7 Expansion Corridor. Grounded in City of Cape Town LSDF, MSDF, and Western Cape Department of Infrastructure data.",
  applicationName: "INTELDEV Intelligence Engine",
  authors: [{ name: "INTELDEV Research & Engineering", url: "https://www.inteldev.co.za" }],
  generator: "Next.js",
  keywords: [
    "Cape Town property feasibility",
    "Western Cape property intelligence",
    "Blaauwberg Road Corridor LSDF",
    "N7 expansion Van Schoorsdrift",
    "Diep River Bridge structural engineering",
    "Table View property development",
    "Bloubergstrand real estate underwriting",
    "Sandown property development Cape Town",
    "Rivergate industrial property",
    "Potsdam WWTW upgrade capacity",
    "Koeberg UPZ zoning evacuation model",
    "SACPVP property valuation Cape Town",
    "General Residential GR3 GR4 zoning",
    "General Business GB1 floor factor",
    "Afrimat Construction Index",
    "Western Cape building cost per square metre",
    "SARB repo rate property yield",
    "MyCiTi TOD Rivergate station",
  ],
  referrer: "origin-when-cross-origin",
  creator: "INTELDEV",
  publisher: "INTELDEV Property Intelligence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.inteldev.co.za",
    languages: {
      "en-ZA": "https://www.inteldev.co.za",
    },
  },
  openGraph: {
    title: "INTELDEV | Property Feasibility & Spatial Intelligence Engine | Cape Town",
    description:
      "Authoritative statutory spatial intelligence, live financial metrics, and deterministic underwriting for Cape Town, Blouberg, Table View, Sandown, Rivergate, and the N7 corridor.",
    url: "https://www.inteldev.co.za",
    siteName: "INTELDEV Property Intelligence Engine",
    images: [
      {
        url: "/inteldev-logo.jpg",
        width: 1200,
        height: 630,
        alt: "INTELDEV Property Intelligence Engine - Cape Town & N7 Corridor",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INTELDEV | Property Feasibility & Spatial Intelligence Engine",
    description:
      "Statutory spatial intelligence, live financial tickers, and deterministic underwriting for Cape Town, Blouberg, Table View, Sandown, and the N7 expansion corridor.",
    images: ["/inteldev-logo.jpg"],
    creator: "@inteldev_za",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/inteldev-logo.jpg",
    apple: "/inteldev-logo.jpg",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Cape Town, Table View, Blouberg, Sandown, Rivergate, Western Cape",
    "geo.position": "-33.8242;18.4914",
    ICBM: "-33.8242, 18.4914",
    "language": "English",
    "coverage": "Cape Town Metropolitan Area & Western Cape Province",
    "distribution": "Global",
    "rating": "General",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GoogleAnalytics />
        <div className="ambient-bg" />
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}
