import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/faviconChrom.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/faviconmobile.png" />
         <link rel="icon" type="image/png" sizes="32x32" href="/faviconxl.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />      
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
         <Analytics />
        <Footer />
      </body>
    </html>
  );
}
