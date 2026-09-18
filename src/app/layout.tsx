import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'INTELDEV | Intelligence Engine - Soon to be the new home',
  description: 'Soon to be the new home of INTELDEV Intelligence Engine. Next generation intelligence architecture undergoing scheduled platform overhaul.',
  icons: {
    icon: '/inteldev-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-bg" />
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}
