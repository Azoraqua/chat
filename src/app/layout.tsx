import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azoraqua's Chat",
  description: "An open-source chat app.",
  openGraph: {
    siteName: "Azoraqua's Chat",
    title: "Azoraqua's Chat",
    description: "An open-source chat app.",
    url: 'https://chat.azoraqua.dev',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://chat.azoraqua.dev/logo.png',
        alt: 'https://beta-chat.azoraqua.dev/logo.png',
        width: 128,
        height: 128
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
