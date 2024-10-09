import { Roboto_Mono, Roboto } from "next/font/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

const robotoMono = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-robot-mono",
  adjustFontFallback: false,
  display: "swap",
  style: "normal",
  preload: true,
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  adjustFontFallback: false,
  variable: "--font-robot",
  style: "normal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Союз поддержки и развития предпринимательства",
  description: "Archi developed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} ${roboto.className} antialiased`}
      >
        <Suspense fallback>{children}</Suspense>
      </body>
    </html>
  );
}
