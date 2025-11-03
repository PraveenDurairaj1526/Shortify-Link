
import About from "@/components/About";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";

export const metadata = {
  title: "Free URL Shortener | Shortify Link – Create, Shorten & Share Short URL",
  description: "Shortify Link is a free and fast URL shortener to shorten long links instantly. Generate simple, clean short URL for websites, social media, and marketing use. Share short links easily and boost your online visibility.",
  keywords: "url shortener, free url shortener, short url, short link, free custom URL shortener for affiliate marketing, best branded link shortener for bloggers",
  authors: [{ name: "Shortify Link" }],
  openGraph: {
    title: "Shortify Link | Free URL Shortener",
    description: "Shorten long URLs instantly with Shortify Link",
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
      <WhyChoose />
    </main>
  );
}
