
import About from "@/components/About";
import Faq from "@/components/Faq";
import HelpingPlatform from "@/components/HelpingPlatform";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
  title: "Free Link Shortener with Custom URLs & Click Tracking",
  description: "Shortening a URL with Shortify Link is fast and flexible. Paste your long link, choose an auto-generated short URL or create your own custom link, and click “Shorten URL.” Your branded, trackable link is ready instantly, with real-time click tracking to help you monitor performance as it happens.",
  keywords: ["short link url​", "shorter link​", "short link generator​", "free link shortener", "youtube short link", "how to shorten linkedin url", "how to shorten amazon links", "url link shortener", "best url shortener", "website url shortener"],
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
      <ShortenerForm
        title={'Free Link Shortener with'}
        specialText={'Custom URLs & Click Tracking'}
        description={"Shortening a URL with Shortify Link is fast and flexible. Paste your long link, choose an auto-generated short URL or create your own custom link, and click “Shorten URL.” Your branded, trackable link is ready instantly, with real-time click tracking to help you monitor performance as it happens."}
      />
      <About containerClass={'mt-10 sm:mt-20'} />
      <HowItWorks containerClass={'mt-10 sm:mt-20'} content={howItWorksData} />
      <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} title={'Why Shortify Link Is the Best Link Shortener'} />
      <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />
      <HelpingPlatform containerClass={'mt-10 sm:mt-20'} content={urlShortenerUseCases} />
    </main>
  );
}
