import React from 'react';
import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4, FeatureIcon5 } from '@/SvgIcons/getSvgIcons';

export const getSiteData = {
    navData: [
        {
            text: 'Track URL',
            link: '/track/search'
        },
        {
            text: 'About',
            link: '/#about'
        },
        {
            text: 'Service',
            link: '/#service'
        },
        {
            text: 'Terms of Service',
            link: '/terms-of-service'
        },
        {
            text: 'Privacy Policy',
            link: '/privacy-policy'
        }
    ],
    howItWorksData: {
        title: 'How It Works - Free URL Shortener',
        subTitle: 'Follow these 3 simple steps to turn your long URLs into clean, shareable short links for free.',
        stepsData: [
            {
                id: 1,
                label: "Step 1",
                title: "Paste Your Long URL",
                description:
                    "Copy your long web link and paste it into the input box. Our free URL shortener instantly prepares it for conversion.",
                icon: "🔗",
            },
            {
                id: 2,
                label: "Step 2",
                title: "Generate Your Short Link",
                description:
                    "Click the “Shorten URL” button to instantly receive a fast, trackable, and secure short link.",
                icon: "⚡",
            },
            {
                id: 3,
                label: "Step 3",
                title: "Share & Track Performance",
                description:
                    "Share your short URL anywhere  on social media, in emails, on your website, or in ads. Monitor click counts, devices, locations, and traffic sources in real time.",
                icon: "📊",
            },
        ]
    },
    featuresData: {
        title: 'Why Shortify Link Is the Best URL Shortener',
        featuresData: [
            {
                title: "Easy and Fast URL Shortener",
                description:
                    "Create short URLs and short links in seconds with Shortify Link, the best URL shortener online. Just paste your long link, and our free URL shortener instantly generates a clean, compact, and shareable link. Whether you need a LinkedIn short URL, Instagram short URL, or Amazon short URL, Shortify Link makes it easy to share anywhere.",
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
                    "Your audience’s safety is our priority. All links created with Shortify Link are checked for spam, malware, and viruses. Unsafe links are automatically blocked, ensuring your short URLs are always safe and reliable.",
                Icon: FeatureIcon3
            },
            {
                title: "Cross-Device Compatible",
                description:
                    "Shortify Link works seamlessly on smartphones, tablets, and desktops. Create, copy, and manage your short URLs anytime, anywhere. Whether it’s a LinkedIn short URL on your desktop or an Instagram short URL on your phone, Shortify Link ensures smooth performance across all devices.",
                Icon: FeatureIcon4
            },
            {
                title: "URL Click Tracking & Analytics",
                description:
                    "Track every click on your short links in real time with Shortify Link. Whether it’s a LinkedIn short URL, Instagram short URL, or Amazon short URL, our free URL shortener records each visit and provides detailed analytics. Monitor engagement instantly and see how many times your short URLs are clicked. Make informed decisions for social media posts, marketing campaigns, or personal projects using accurate click tracking and performance insights.",
                Icon: FeatureIcon5
            }
        ]

    },
    faqData: {
        title: 'FAQ',
        subTitle: 'Everything you need to know about Shortify Link.',
        faqQuestions: [
            {
                question: "What makes up a good tiny URL?",
                answer:
                    "A good tiny URL is short, clean, and easy to share across any platform. With Shortify Link, your links stay readable and reliable whether you need a LinkedIn short URL, Instagram short URL, Amazon short URL, or a short URL for Google Maps. A quality tiny link should load fast, look professional, and work smoothly on all devices."
            },
            {
                question: "How many tiny URLs can I create?",
                answer:
                    "You can create unlimited tiny URLs with Shortify Link—completely free. Whether you're making a Google Maps short URL, a Canva shortened URL, a Dropbox short URL, or multiple links for marketing and social media, there is no limit to how many links you can generate."
            },
            {
                question: "How does the tiny URL website work?",
                answer:
                    "Shortify Link converts your long URL into a compact, shareable link instantly. Just paste your original link—whether it's from Amazon, Instagram, Dropbox, Canva, or Google Maps—and the tool generates a short, reliable version. Each link is stored securely, and you can view the total click count to measure engagement."
            },
            {
                question: "Is the Link Shortener tool free?",
                answer:
                    "Yes! Shortify Link is 100% free—no surprises. You can create unlimited short URLs, including LinkedIn short URLs, Instagram short URLs, Amazon short links, Canva shortened URLs, and more without paying anything."
            },
            {
                question: "Shorten, share and track",
                answer:
                    "With Shortify Link, you can shorten any long URL instantly, share it anywhere, and track the total clicks your link receives. It’s perfect for creating professional-looking short links like Google Maps short URLs, Dropbox short URLs, and more."
            },
            {
                question: "Simple and fast URL shortener!",
                answer:
                    "Shortify Link is built for speed and simplicity. Paste your long link, click shorten, and your tiny URL is ready. It works seamlessly for all platforms—whether you need a LinkedIn short URL, Instagram short URL, Amazon short link, or any custom URL for everyday use."
            }
        ]

    }

}

