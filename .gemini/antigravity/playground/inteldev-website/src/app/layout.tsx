import type { Metadata } from "next";
import "./globals.css";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IntelDev - Intelligent Property Feasibility Engine',
  description: 'Advanced algorithmic feasibility, macro-economic forensics, and automated executive reporting for the modern property developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
