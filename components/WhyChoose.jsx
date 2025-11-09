import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4 } from '@/SvgIcons/getSvgIcons';
import React from 'react';
const features = [
    {
        title: "Easy and Fast URL Shortener",
        description:
            "Create short URLs and short links in seconds with Shortify Link. Just paste your long URL, and our free URL shortener will generate a clean, compact link instantly, ready to share anywhere.",
        Icon: FeatureIcon1
    },
    {
        title: "Shorten Any URL",
        description:
            "No matter the length of your link, Shortify Link can efficiently shorten it. Perfect for social media, email, marketing campaigns, or messaging apps. Use our short URL service to make your links concise and easy to share.",
        Icon: FeatureIcon2
    },
    {
        title: "Safe and Reliable Links",
        description:
            "All links are checked for spam, viruses, or malware. Unsafe links are automatically removed, so your short links are always safe for your audience.",
        Icon: FeatureIcon3
    },
    {
        title: "Cross-Device Compatible",
        description:
            "Shortify Link works seamlessly on smartphones, tablets, and desktops, letting you create and manage your short URLs anytime, anywhere.",
        Icon: FeatureIcon4
    }
];




const WhyChoose = () => {
    return (
        <section className='max-w-[1180px] mx-auto px-4 mt-10 sm:mt-20 mb-10 sm:mb-20' id='service'>
            <h2 className='text-[28px] sm:text-[36px] font-semibold mb-9 text-center'>Why Choose our url shortener</h2>
            <div className="grid lg:grid-cols-2 gap-6 w-full justify-center">
                {
                    features?.map((item, key) => {
                        const FeatureIcon = item?.Icon
                        return (
                            <div key={key} className="w-full rounded-xl border-none p-6  bg-gradient-to-br from-[#c1d3ebf0] to-white">
                                    <FeatureIcon className={'w-9 h-9 mb-3'} />
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[20px] font-semibold mb-2">{item?.title}</h3>
                                    <p className="text-[18px]">{item?.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default WhyChoose