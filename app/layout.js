import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
         <Analytics />
        <Footer />
      </body>
    </html>
  );
}
