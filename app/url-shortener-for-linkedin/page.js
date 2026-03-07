
import About from "@/components/About";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";
import ShortenerForm from "@/components/ShortenerForm";
import WhyChoose from "@/components/WhyChoose";
import { getSiteData } from "@/helpers/getStaticData";

export const metadata = {
    title: "Free LinkedIn Link Shortener | Track Your Profile Clicks – No Login Required",
    description: "Long LinkedIn URLs look cluttered and unprofessional. Create short, clean, shareable LinkedIn links in seconds with our free LinkedIn link shortener — no signup required.",
    keywords: ["how to shorten linkedin url​", "linkedin shorten url​", "shortened linkedin url​", "link shortener for linkedin", "url shortener linkedin", "shorten linkedin profile url", "how do i shorten my linkedin url", "linkedin link shortener"],
    authors: [{ name: "Shortify Link" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Free LinkedIn Link Shortener | Track Your Profile Clicks – No Login Required",
        description: "Long LinkedIn URLs look cluttered and unprofessional. Create short, clean, shareable LinkedIn links in seconds with our free LinkedIn URL shortener — no signup required.",
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
                title={'LinkedIn Link Shortener with '}
                specialText={'Custom URLs, Click Tracking'}
                description={'Create short, clean LinkedIn links in seconds with our LinkedIn link shortener. Shorten your LinkedIn profile URL for resumes, portfolios, and networking — free, easy to use, and trackable in real time.'}
                inputLabel={'Shorten Your LinkedIn URL'}
            />
            <About containerClass={'mt-10 sm:mt-20'} />
            <HowItWorks containerClass={'mt-10 sm:mt-20'} content={linkedInHowItWorksData} />
            <WhyChoose containerClass={'mt-10 sm:mt-20'} content={featuresData} title={'Why Shortify Link Is the Best Platform to Shorten Your LinkedIn URL'} />
            <Faq containerClass={'mt-10 sm:mt-20'} content={faqData} />
        </main>
    );
}
