
import About from "@/components/About";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";
const urlShortenerUseCases = [
  {
    id: 1,
    title: "LinkedIn Short URLs",
    icon: "🔗",
    description: "Share professional profiles, posts, and articles with clean, trackable links."
  },
  {
    id: 2,
    title: "Instagram Short URLs",
    icon: "📸",
    description: "Make bio links, posts, and stories clean, clickable, and trackable."
  },
  {
    id: 3,
    title: "Amazon Short URLs",
    icon: "🛒",
    description: "Share products, affiliate links, and wishlists quickly and efficiently."
  },
  {
    id: 4,
    title: "Google Maps Short URLs",
    icon: "🗺️",
    description: "Share locations, directions, and places with easy-to-copy links."
  },
  {
    id: 5,
    title: "Canva Shorten URLs",
    icon: "🎨",
    description: "Share designs, presentations, or templates in a neat, professional way."
  },
  {
    id: 6,
    title: "Dropbox Short URLs",
    icon: "📂",
    description: "Send files, folders, or documents with simple, trackable links."
  }
];



export const metadata = {
  title: "Free URL Shortener | Free URL Shortener with Click Tracking & Analytics",
  description: "Shortify Link is a free URL shortener that lets you shorten links instantly, create branded URLs, and track clicks in real time. Monitor link performance and share easily across social media, websites, and marketing campaigns.",
  keywords: ["linkedin short url", "instagram short url", "amazon short url", "short url for google maps", "google maps short url", "canva shorten url", "dropbox short url", "Shortify Link", 'best url shortener', 'free url shortener', 'url shortener','url shortener generator'],
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

  const { howItWorksData, featuresData, faqData } = getSiteData
  return (
    <main>
      <ShortenerForm />
      <About containerClass={'mt-10 sm:mt-20'} />
      <HowItWorks containerClass={'mt-10 sm:mt-20'} content={howItWorksData} />
      <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} />
      <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />

      <section className="py-12 bg-gray-50" id="useCases">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066ae5] text-center mb-8">
            Perfect for Any URL
          </h2>
          <p className="text-base sm:text-lg text-gray-700 text-center mb-12">
            Shortify Link works for social media, e-commerce, maps, design, files, and more — instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-4">
            {urlShortenerUseCases.map((item) => (
              <div
                key={item.id}
                className="flex-1 py-6 px-4 rounded-xl bg-gradient-to-r from-[#066ae5]/20 to-[#3da0ff]/20 flex flex-col items-center text-center transition transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#066ae5] to-[#3da0ff] text-white text-xl font-bold mb-3">
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
