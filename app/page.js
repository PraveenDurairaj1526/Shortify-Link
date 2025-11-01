
import About from "@/components/About";
import Footer from "@/components/Footer";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "Shortify Link | Free URL Shortener to Create and Share Short Links",
  description: "Shorten long URLs instantly with Shortify Link a fast and free URL shortener. Create clean, easy-to-share short links for your website, social media, and marketing campaigns.",
  keywords: "url shortener, free url shortener, short url, short link",
  authors: [{ name: "Shortify Link" }],
  openGraph: {
    title: "Shortify Link | Free URL Shortener",
    description: "Shorten long URLs instantly with Shortify Link",
    url: "https://yourdomain.com",
    siteName: "Shortify Link",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {

  return (
      <main>
        <ShortenerForm />
        <About/>
        <WhyChoose />
      </main>
  );
}
