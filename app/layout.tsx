import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const font = localFont({
  src: "../public/Söhne-Buch.ttf",
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "United Intelligence",
  description: "AI Agents for OSINT and Geospatial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
