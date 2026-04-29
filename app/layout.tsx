import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "coffret à bijoux",
  description: "FF14 RP Jewel Show",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${noto.variable} h-full antialiased`}
    >
      <body className={`${noto.className} min-h-full`}>
        {children}
      </body>
    </html>
  );
}