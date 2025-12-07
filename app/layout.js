'use client'
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@material-tailwind/react";
import { LinkDataProvider } from "@/context/LinkDataProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/faviconChrom.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/faviconmobile.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/faviconxl.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta name="google-adsense-account" content="ca-pub-7619194920212341"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7619194920212341"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <LinkDataProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </LinkDataProvider>
      </body>
    </html>
  );
}
