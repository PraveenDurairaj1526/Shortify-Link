
import About from "@/components/About";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
    title: "Amazon Link Shortener – Track & Boost Product Reach | No Login Required",
    description: "Free Amazon link shortener to track clicks and better reach your product link. Create clean, branded Amazon URLs instantly — no login required.",
    keywords: ["amazon link shortener​",'how to shorten amazon links​',"amazon link shortener amzn.eu​","amzn.eu link shortener amazon​","amzn.eu link shortener amazon​","amzn.eu link shortener amazon​","amzn.eu link shortener","how to make amazon link shortener​","make amazon link shortener​","amazon affiliate link shortener​","amazon shortened link​"],
    authors: [{ name: "Shortify Link" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Amazon Link Shortener – Track & Boost Product Reach | No Login Required",
        description: "Free Amazon link shortener to track clicks and better reach your product link. Create clean, branded Amazon URLs instantly — no login required.",
        url: "https://www.shortifylink.in/amazon-link-shortener",
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

    const { featuresData, amazonHowItWorksData, amazonFaqData } = getSiteData
    return (
        <main>
            <ShortenerForm
                title={'Amazon Link Shortener '}
                specialText={'Track & Boost Product Reach'}
                description={"Free Amazon link shortener to track clicks and maximize your product link reach. Create clean, branded Amazon URLs instantly and turn every product link into measurable growth."}
            />
            <About containerClass={'mt-10 sm:mt-20'} />
            <HowItWorks containerClass={'mt-10 sm:mt-20'} content={amazonHowItWorksData} />
            <WhyChoose
                containerClass={'mt-10 sm:mt-20'}
                content={featuresData}
                title={'Why Shortify Link Is the Best Platform to Shorten Your Amazon Link'} />
            <Faq containerClass={'mt-10 sm:mt-20'} content={amazonFaqData} />
        </main>
    );
}
