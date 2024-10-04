import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";

import GoogleAnalytics from "@/components/GoogleAnalytics";


const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "800"], variable: "--font-jetbrainsMono" });

export const metadata: Metadata = {
  title: "Altug Altuner",
  description: "altugaltuner.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics />
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
