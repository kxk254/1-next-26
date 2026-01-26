import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blue Millefeuille | きらめくハンドメイドアクセサリー",
  description:
    "Blue Millefeuilleは、日常にそっときらめきを添えるハンドメイドアクセサリーショップ。",
  keywords:
    "ハンドメイド,イヤリング,アクセサリー,シャビーシック,バロックストーン,パール,ギフト,ナチュラル,Blue Millefeuille",
  author: "Blue Millefeuille",

  // Open Graph (OG) metadata for social media sharing
  openGraph: {
    title: "Blue Millefeuille | きらめくハンドメイドアクセサリー",
    description:
      "耳元に小さな幸せを。ストーンフラワーシリーズのイヤリングで、あなたの“いつも”にさりげない特別を。",
    url: "https://blmf.jp/",
    images: [
      {
        url: "/0921-1.png",
        width: 1200,
        height: 630,
        alt: "Blue Millefeuille - ハンドメイドイヤリング",
      },
    ],
    siteName: "Blue Millefeuille",
    locale: "ja_JP",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Blue Millefeuille | きらめくハンドメイドアクセサリー",
    description: "耳元に小さな幸せを。日常にそっと輝きを添えるイヤリング。",
    image: "/0921-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon-v.ico" />

        {/* Add Google Tag or other third-party scripts here */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z775PKZ8XR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z775PKZ8XR');
            `,
          }}
        ></script>
      </head>

      <body>{children}</body>
    </html>
  );
}
