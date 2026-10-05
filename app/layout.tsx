import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://abushtour.com"),
  title: "Arba Minch Tour Guide | Abush Local Tours, Ethiopia",
  applicationName: "Abush Tour",
  description:
    "Explore Arba Minch and Southern Ethiopia with Abush, a local tour guide. Discover Lake Chamo crocodiles, Dorze Village, local culture, wildlife, and private tours.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abush Tour | Arba Minch Local Tour Guide",
    description:
      "Explore Arba Minch and Southern Ethiopia with Abush. Discover Lake Chamo wildlife, Dorze Village, local culture, and private tours.",
    url: "https://abushtour.com",
    siteName: "Abush Tour",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
