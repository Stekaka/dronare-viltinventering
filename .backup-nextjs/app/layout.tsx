import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageViewTracker from "./components/PageViewTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viltinventering med Drönare | Drönarkompaniet",
  description:
    "Modern drönarteknologi för effektiv och noggrann viltinventering. Upptäck hur vi kan hjälpa dig med professionell viltförvaltning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PageViewTracker />
      </body>
    </html>
  );
}
