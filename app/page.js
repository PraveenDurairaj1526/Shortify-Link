
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "Shortify Link | Free URL Shortener with Click Tracking & Analytics",
  description: "Shortify Link is a free URL shortener that lets you shorten links instantly, create branded URLs, and track clicks in real time. Monitor link performance and share easily across social media, websites, and marketing campaigns.",
  keywords: "url shortener, free url shortener, short url, short link, custom short links, branded url shortener, url click tracking, link tracking tool, url analytics, free custom url shortener for affiliate marketing, best branded link shortener for bloggers, url shortening site",
  authors: [{ name: "Shortify Link" }],
  openGraph: {
    title: "Shortify Link | Free URL Shortener with Click Tracking",
    description: "Shortify Link is a free URL shortener that lets you shorten links instantly, create branded URLs, and track clicks in real time. Monitor link performance and share easily across social media, websites, and marketing campaigns.",
    url: "https://www.shortifylink.in/",
    siteName: "Shortify Link",
    images: [
      {
        url: "https://www.shortifylink.in/shortifyUrl.png",
        alt: "Shortify Link - Free URL Shortener",
      },
    ],
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
      <About />
      <HowItWorks/>
      <WhyChoose />
    </main>
  );
}
