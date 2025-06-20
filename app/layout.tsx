import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, chewy } from "@/font";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "PathBlaze | Learn Anything, Step by Step",
  description:
    "Master web development, design, and more through guided roadmaps, curated videos, and progress tracking. Join the learning movement on PathBlaze.",
  metadataBase: new URL("https://pathblaze.in"),

  openGraph: {
    title: "PathBlaze | Learn Anything, Step by Step",
    description:
      "Curated roadmaps, AI-powered guidance, and shareable certificates. Build skills faster.",
    url: "https://pathblaze.in",
    siteName: "PathBlaze",
    images: [
      {
        url: "https://pathblaze.in/banner.png",
        width: 1200,
        height: 630,
        alt: "PathBlaze | Learning Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PathBlaze | Learn Anything, Step by Step",
    description:
      "Track your learning journey across web dev, design, AI, and more. Visual progress. Real rewards.",
    site: "@vipulsc1",
    creator: "@vipulsc1",
    images: ["https://pathblaze.in/banner.png"],
  },

  icons: {
    icon: "/icon2.svg",
    shortcut: "/icon2.svg",
  },

  manifest: "/site.webmanifest",
  keywords: [
    "PathBlaze",
    "learning roadmap",
    "web development course",
    "html css js",
    "frontend learning",
    "fullstack roadmap",
    "react roadmap",
    "step-by-step learning",
    "youtube learning app",
    "developer certificate",
  ],

  appleWebApp: {
    title: "PathBlaze | Learn Anything, Step by Step",
    statusBarStyle: "default",
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f0628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${chewy.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
