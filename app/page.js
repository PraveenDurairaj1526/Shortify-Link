
import About from "@/components/About";
import Faq from "@/components/Faq";
import HelpingPlatform from "@/components/HelpingPlatform";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
  title: "Free URL Shortener | Free URL Shortener with Click Tracking & Analytics",
  description: "Shortify Link is a free URL shortener that lets you shorten links instantly, create branded URLs, and track clicks in real time. Monitor link performance and share easily across social media, websites, and marketing campaigns.",
  keywords: ["short link url","shorter link","linkedin short url", "instagram short url", "amazon short url", "short url for google maps", "google maps short url", "canva shorten url", "dropbox short url", "Shortify Link", 'best url shortener', 'free url shortener', 'url shortener', 'url shortener generator'],
  authors: [{ name: "Shortify Link" }],
  robots: {
    index: true,
    follow: true,
  },
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

  const { howItWorksData, featuresData, faqData, urlShortenerUseCases } = getSiteData
  return (
    <main>
      <ShortenerForm />
      <About containerClass={'mt-10 sm:mt-20'} />
      <HowItWorks containerClass={'mt-10 sm:mt-20'} content={howItWorksData} />
      <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} />
      <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />
      <HelpingPlatform containerClass={'mt-10 sm:mt-20'} content={urlShortenerUseCases}  />
    </main>
  );
}
