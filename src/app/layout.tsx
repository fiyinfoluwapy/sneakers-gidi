import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { WhyWeExist } from "./components/why";
import { ProductShowcase } from "./components/productshowcase";
import { TrustSection } from "./components/trust";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneakers Gidi",
  description: "Original sneakers from UK, US, CANADA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <WhyWeExist />
        <ProductShowcase />
        <TrustSection />
        {children}
      </body>
    </html>
  );
}
