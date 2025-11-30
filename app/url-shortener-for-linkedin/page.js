
import About from "@/components/About";
import Faq from "@/components/Faq";
import HelpingPlatform from "@/components/HelpingPlatform";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
    title: "Shorten LinkedIn URL",
    description: "Long LinkedIn URLs look cluttered and unprofessional. Create a short, clean, and shareable LinkedIn link in seconds with our free LinkedIn URL shortener—no signup needed.",
    keywords: ["how to shorten linkedin url​", "linkedin shorten url​", "shortened linkedin url​", "link shortener for linkedin", "url shortener linkedin", "shorten linkedin profile url", "how do i shorten my linkedin url", "linkedin link shortener"],
    authors: [{ name: "Shortify Link" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Shorten LinkedIn URL",
        description: "Long LinkedIn URLs look cluttered and unprofessional. Create a short, clean, and shareable LinkedIn link in seconds with our free LinkedIn URL shortener—no signup needed.",
        url: "https://www.shortifylink.in/url-shortener-for-linkedin",
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

    const { linkedInHowItWorksData, featuresData, faqData } = getSiteData
    return (
        <main>
            <ShortenerForm
                title={'Shorten LinkedIn URL Free with Real-Time'}
                specialText={'Click Tracking'}
                description={'Generate a shorter LinkedIn URL in seconds using Shortify Link. Instantly shorten your LinkedIn profile link for resumes, portfolios, and networking. Easy to use, free, and trackable.'}
                inputLabel={'Shorten Your LinkedIn URL'}
            />
            <About containerClass={'mt-10 sm:mt-20'} />
            <HowItWorks containerClass={'mt-10 sm:mt-20'} content={linkedInHowItWorksData} />
            <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} title={'Why Shortify Link Is the Best Platform to Shorten Your LinkedIn URL'}/>
            <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />
        </main>
    );
}
