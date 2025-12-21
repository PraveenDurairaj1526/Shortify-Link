import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clickTrackingImage from '/public/clickTrackingImage.png';
import BlogBanner from '@/components/blog/BlogBanner';
import BlogTable from '@/components/blog/BlogTable';

export const metadata = {
    title: "Amazon Link Shortener – Custom Links, Tracking & Notifications",
    description:
        "Use Shortify Link to shorten Amazon affiliate links, create custom short URLs, add link titles, track clicks, and receive email & WhatsApp notifications in real time.",
    keywords: [
        "amazon link shortener",
        "amazon affiliate link shortener",
        "custom amazon short link",
        "amazon link title",
        "amazon click notification",
        "whatsapp amazon affiliate notification",
        "shorten amazon affiliate links"
    ],
    authors: [{ name: "Shortify Link Blogs" }],
    robots: { index: true, follow: true },
    openGraph: {
        title: "Free Amazon Link Shortener for Affiliate Marketing",
        description:
            "Use our free Amazon link shortener to create clean, professional, and trackable short links. Boost click-through rates, build trust, and monitor performance with real-time click tracking for Amazon affiliate links.",
        url: "https://www.shortifylink.in/blog/amazon-affiliate-link-shortener",
        images: [
            {
                url: "https://www.shortifylink.in/blogAmazonAffliateOgImage.png",
                alt: "Shortify Link - Amazon Link Shortener",
            },
        ],
    },

};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

const page = () => {
    const bannerData = {
        title: 'Amazon Link Shortener for Affiliate Marketing',
        description:
            'Shorten Amazon affiliate links, create clean amzn.eu-style URLs, add custom links, track clicks, and receive instant notifications using Shortify Link.',
        ctaButtonText: 'Shorten Amazon Link',
        ctaLink: '/',
    };

    const ctaData = {
        title: 'Boost Your Amazon Affiliate Earnings',
        description:
            'Custom links, link titles, real-time click tracking, and email & WhatsApp notifications — all in one tool.',
        ctaButtonText: 'Shorten Amazon Link',
        ctaLink: '/',
    };

    const tableData = [
        'What Is an Amazon Link Shortener?',
        'Benefits of Using an Amazon Affiliate Link Shortener',
        'How Shortify Link Helps You Shorten Amazon Link for Free',
        'Advanced Features in Shortify Link',
        'Conclusion',
    ];

    return (
        <>
            <BlogBanner content={bannerData} />

            <div className="max-w-[1280px] mx-auto py-10 px-5">
                <div className="flex gap-8 relative items-start flex-wrap-reverse md:flex-nowrap">
                    <div className="content">

                        {/* Section 1 */}
                        <section id="heading1" className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">
                                What Is an Amazon Link Shortener?
                            </h2>
                            <p className="leading-relaxed mb-2">A free Amazon link shortener is an online tool that helps you convert a long Amazon URL into a short amazon link.</p>
                            <p className="leading-relaxed mb-3 font-semibold">For example:</p>
                            <div className="bg-[#f5f5f5] rounded-2xl shadow p-6 space-y-4 text-gray-800 mb-4">
                                <p className="font-medium break-all">
                                    <span className="text-black font-bold">Long Amazon URL:</span><br />
                                    https://www.example.com/products/marketing-tools/new-updates-2025-launch?ref=linkedin_campaign
                                </p>

                                <p className="font-medium break-all">
                                    <span className="text-black font-bold">Short Amazon Link:</span><br />
                                    https://shortify.link/abc1
                                </p>
                            </div>
                            <p className="leading-relaxed mb-2">The short version is clean, simple, and user-friendly. People understand it easily, and it looks much better when shared anywhere online.</p>
                        </section>

                        {/* Section 2 */}
                        <section id="heading2" className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Benefits of Using an Amazon Affiliate Link Shortener</h2>
                            <p className="leading-relaxed mb-2 font-bold text-[18px]">Short and Professional Links</p>
                            <p className="leading-relaxed mb-4">
                                Amazon URLs are usually long, messy, and full of random characters that look confusing.
                                A short amazon link instantly makes your content look clean and professional.
                                People trust simple links more because they look safer and easier to understand.
                                Short links also make your message appear more organized and well-designed.
                                Whether you&apos;re sharing products or affiliate links, clean URLs help build credibility.
                            </p>
                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Better for Social Media</p>
                            <p className="leading-relaxed mb-4">
                                Social platforms like Instagram, Facebook, Twitter, and LinkedIn work best with short content.
                                Amazon short links fit neatly in captions, bios, comments, and descriptions.
                                Long URLs can break the layout or make your post look cluttered and unprofessional.
                                Short links help your content look more attractive and easier to read.
                                They also make your posts feel more organized and user-friendly for your audience.
                            </p>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Higher Click Rates</p>
                            <p className="leading-relaxed mb-4">
                                People are more likely to click a short amazon link because it looks simple and safe.
                                Long URLs often look suspicious, which can reduce clicks and engagement.
                                Short links grab more attention and encourage users to explore your product.
                                For Amazon affiliates, even a small increase in clicks can boost earnings.
                                Clean, short links help you get better performance from every post or message.
                            </p>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Easy to Share Anywhere</p>
                            <p className="leading-relaxed mb-3"> A short link url works smoothly on:</p>
                            <ol className="list-decimal pl-6 space-y-2 mb-4">
                                <li>WhatsApp chats</li>
                                <li>Telegram channels</li>
                                <li>Emails</li>
                                <li>Instagram Stories</li>
                                <li>Facebook Marketplace</li>
                                <li>Pinterest posts</li>
                            </ol>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Looks Better on Mobile</p>
                            <p className="leading-relaxed mb-4">
                                Most Amazon shoppers use mobile devices, where screen space is limited.
                                A short amazon link fits perfectly and doesn’t get cut off or wrapped across lines.
                                Short links are easier for users to tap, copy, and share on mobile screens.
                                They help make your content look cleaner and easier to navigate.
                                This leads to a smoother browsing experience for mobile users.
                            </p>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Helps Amazon Affiliates Earn More</p>
                            <p className="leading-relaxed mb-4">
                                Short links help improve your click-through rate by making links more inviting.
                                More clicks mean more chances for users to buy through your affiliate link.
                                Clean, simple URLs also make your affiliate content look more professional.
                                This builds trust with your audience and increases conversion rates.
                                In the long run, using short links can significantly boost your affiliate earnings.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section id="heading3" className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">How Shortify Link Helps You Shorten Amazon Link for Free</h2>
                            <p className="leading-relaxed mb-2">
                                Shortify Link is a fast, simple, and completely free tool that lets you create clean amazon short links in seconds.
                                It is perfect for creators, affiliate marketers, sellers, reviewers, and anyone who shares Amazon products online.
                            </p>
                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Fast & Easy to Use</p>
                            <p className="leading-relaxed mb-4">
                                Shortify Link is designed to be quick and beginner-friendly, even for first-time users.
                                You don&apos;t need an account, login, or any technical skills to use it.
                                Just paste your long Amazon URL into the input box and click the shorten button.
                                Your short amazon link appears instantly, ready to share anywhere.
                                This makes it perfect for people who want a simple, no-hassle experience.
                            </p>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">100% Free - No hidden Fee</p>
                            <p className="leading-relaxed mb-4">
                                shortify Link does not charge you for creating short links its completely free.
                                You can shorten unlimited Amazon URLs without worrying about subscriptions or hidden fees.
                                It’s a great option for Amazon affiliates, small businesses, and creators who want free tools.
                                You get all the essential features without paying anything.
                                This makes Shortify Link accessible for everyone, including beginners.
                            </p>

                            <p className="leading-relaxed mb-3 font-bold text-[18px]">Clean and Trustworthy Links</p>
                            <p className="leading-relaxed mb-4">
                                Shortify Link generates short, neat URLs that look safe and professional.
                                People are more likely to click a clean short link url compared to a long, confusing Amazon link.
                                Short links help you build trust with your audience and improve your content’s appearance.
                                They also make your posts look organized on social media and websites.
                                A clean link creates a better first impression and increases user confidence.
                            </p>

                            <p className="leading-relaxed mb-4 font-bold text-[18px]">Click Tracking Available</p>
                            <Image src={clickTrackingImage} width={500} height={500} className='w-auto mx-auto mb-8 ' alt='linkedIn click count' />
                            <p className="leading-relaxed mb-4">
                                Shortify Link allows you to see how many people clicked your Amazon short links.
                                This simple tracking helps you understand which products get the most attention.
                                You can identify high-performing posts and improve your marketing strategy.
                                It helps affiliates know which content brings more income.
                                Even basic click data can help you make smarter decisions.
                            </p>
                        </section>

                        {/* Section 5 – New Features */}
                        <section id="heading4" className="mb-14">
                            <h2 className="text-3xl font-semibold mb-3">
                                Advanced Features in Shortify Link
                            </h2>

                            <p className="text-gray-600 mb-10 max-w-3xl">
                                Shortify Link offers advanced features designed specifically for Amazon
                                affiliates and digital marketers who want more control, visibility, and
                                performance from their links.
                            </p>

                            <div className="grid gap-6 sm:grid-cols-2">

                                {/* Custom Short Links */}
                                <div className="rounded-2xl bg-blue-50 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                                            🔗
                                        </div>
                                        <h3 className="text-lg font-semibold">Custom Short Links</h3>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        Create meaningful and branded short URLs instead of random strings.
                                        Custom links are easier to remember and help improve brand recognition
                                        across platforms.
                                    </p>
                                </div>

                                {/* Link Title Feature */}
                                <div className="rounded-2xl bg-blue-50 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                                            🏷️
                                        </div>
                                        <h3 className="text-lg font-semibold">Link Title Feature</h3>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        Assign titles to your Amazon short links so you can easily identify
                                        which product or campaign each link belongs to.
                                    </p>
                                </div>

                                {/* Email Notifications */}
                                <div className="rounded-2xl bg-blue-50 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
                                            📧
                                        </div>
                                        <h3 className="text-lg font-semibold">Email Notifications</h3>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        Receive instant email notifications whenever someone clicks your Amazon
                                        affiliate link, keeping you informed in real time.
                                    </p>
                                </div>

                                {/* WhatsApp Notifications */}
                                <div className="rounded-2xl bg-blue-50 p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold">
                                            💬
                                        </div>
                                        <h3 className="text-lg font-semibold">WhatsApp Notifications</h3>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        Get click alerts directly on WhatsApp, making it easy to monitor
                                        performance without opening a dashboard.
                                    </p>
                                </div>

                            </div>
                        </section>


                        {/* Section 6 */}
                        <section id="heading5" className="mt-12">
                            <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
                            <p className="leading-relaxed mb-4">
                                Using an Amazon link shortener is essential for modern affiliate
                                marketing. Short links improve trust, increase clicks, and make
                                sharing easier across all platforms.
                            </p>
                            <p className="leading-relaxed">
                                With Shortify Link, you get more than just shortened URLs.
                                Custom links, link titles, click tracking, and instant email &
                                WhatsApp notifications give you complete control over your
                                affiliate marketing efforts.
                            </p>
                        </section>

                    </div>
                    <BlogTable
                        content={tableData}
                        ctaData={ctaData}
                        containerStyle="from-[#ff9900] to-[#ff6600]"
                        stickyBottomCta
                    />
                </div>
            </div>
        </>
    );
};

export default page;
