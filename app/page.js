
import About from "@/components/About";
import Faq from "@/components/Faq";
import HelpingPlatform from "@/components/HelpingPlatform";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
  title: "Free Link Shortener With Real-Time Click Tracking",
  description: "Shortening a URL with Shortify Link is quick and easy. Copy your long link, paste it into the Shortify Link tool, and click “Shorten URL” Your clean, trackable link will be ready to share instantly.",
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
        title={' Free Link Shortener With Real-Time'}
        specialText={'Click Tracking'}
        description={'Shortening a URL with Shortify Link is quick and easy. Copy your long link, paste it into the Shortify Link tool, and click “Shorten URL” Your clean, trackable link will be ready to share instantly.'}
      />
      <About containerClass={'mt-10 sm:mt-20'} />
      <HowItWorks containerClass={'mt-10 sm:mt-20'} content={howItWorksData} />
      <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} title={'Why Shortify Link Is the Best Link Shortener'} />
      <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />
      <HelpingPlatform containerClass={'mt-10 sm:mt-20'} content={urlShortenerUseCases} />
    </main>
  );
}
