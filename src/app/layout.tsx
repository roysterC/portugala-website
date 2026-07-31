import type { Metadata, Viewport } from "next";
import { preconnect } from "react-dom";
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

preconnect("https://www.facebook.com");
preconnect("https://www.instagram.com");

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"], // enable optical sizing (weight axis is included by default)
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portugala | Luxury Villas in the Algarve",
    template: "%s | Portugala",
  },
  description:
    "Hand-picked private villas with pools in Albufeira, Vilamoura, and across the Algarve. Personally arranged by our London and Portugal team.",
  keywords: ["Algarve villas", "Albufeira villa rental", "Portugal holiday villa", "private pool villa"],
  openGraph: {
    siteName: "Portugala",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${fraunces.variable} ${plusJakarta.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
