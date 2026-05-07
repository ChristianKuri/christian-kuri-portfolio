import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Christian Kuri | Senior Full Stack Engineer",
    template: "%s | Christian Kuri",
  },
  description: siteConfig.description,
  keywords: [
    "Christian Kuri",
    "Senior Full Stack Engineer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "AI integrations",
    "automation workflows",
    "backend systems",
    "Web3",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Christian Kuri | Senior Full Stack Engineer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Christian Kuri",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Kuri | Senior Full Stack Engineer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
