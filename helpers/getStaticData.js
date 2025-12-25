import React from 'react';
import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4, FeatureIcon5 } from '@/SvgIcons/getSvgIcons';
import emailImage from '/public/gmail.png';
import whatsappImage from '/public/whatsapp.png';

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

    gstNavData: [
        {
            text: 'How to use',
            link: '/gst-calculator/#howToUseGst'
        },
        {
            text: 'Reverse GST',
            link: '/gst-calculator/#reverseGST'
        },
        {
            text: 'Why use GSt',
            link: '/gst-calculator/#whyUseGst'
        },
        {
            text: 'Privacy Policy',
            link: '/privacy-policy'
        }
    ],

    howItWorksData: {
        title: 'How It Works - Free Link Shortener',
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
                    "Share your short URL anywhere  on social media, in emails, on your website, or in ads. Monitor click counts in real time.",
                icon: "📊",
            },
        ]
    },
    featuresData: {
        featuresData: [
            {
                title: "Easy & Fast Short Link Generator",
                description:
                    "Create a short link URL in seconds using our free link shortener. Just paste your long URL and instantly get a clean, shorter link ready to share anywhere.",
                Icon: FeatureIcon1
            },
            {
                title: "Shorten Any Long URL",
                description:
                    "Shortify Link lets you turn any long link into a shorter link that’s easy to share on social media, email, or messages. Perfect for users who need a reliable short link generator.",
                Icon: FeatureIcon2
            },
            {
                title: "Safe & Secure Short URLs",
                description:
                    "Every short link URL is checked for spam and unsafe pages. Our free link shortener keeps your shortened links safe, trusted, and reliable for your audience.",
                Icon: FeatureIcon3
            },
            {
                title: "Works on All Devices",
                description:
                    "Use Shortify Link on mobile, tablet, or desktop. Create, copy, and manage your shorter links anywhere using our smooth and fast short link generator.",
                Icon: FeatureIcon4
            },
            {
                title: "Real-Time Click Tracking",
                description:
                    "Track every click on your short link URL with real-time analytics. See performance instantly and use insights to improve your sharing and campaigns.",
                Icon: FeatureIcon5
            }
        ]
    }
    ,
    faqData: {
        title: 'FAQ',
        subTitle: 'Everything you need to know about Shortify Link.',
        faqQuestions: [
            {
                question: "What makes up a good tiny URL?",
                answer:
                    "A good tiny URL should be short, clean, and easy to share across any platform. The best tiny links load fast, look professional, and work smoothly on all devices. With Shortify Link, you can instantly create a LinkedIn short URL, Instagram short URL, Amazon short URL, or a short URL for Google Maps. Whether you’re sharing files, products, maps, or social profiles, a quality short link keeps everything simple and reliable."
            },
            {
                question: "How many tiny URLs can I create?",
                answer:
                    "You can create unlimited tiny URLs for free using Shortify Link. As a free URL shortener, it lets you generate as many links as you need—whether it's a Google Maps short URL, Canva shorten URL, Dropbox short URL, or multiple marketing links. Theres no limit, making it perfect for creators, businesses, and everyday users."
            },
            {
                question: "How does the tiny URL website work?",
                answer:
                    "Shortify Link works as a fast and simple URL shortener generator. Just paste your long link—whether its from Amazon, Instagram, LinkedIn, Dropbox, Canva, or Google Maps and the tool instantly creates a compact, shareable short URL. Every link you generate is stored securely, and you can track total clicks to measure engagement and performance."
            },
            {
                question: "Is the Link Shortener tool free?",
                answer:
                    "Yes! Shortify Link is 100% free, making it one of the best URL shorteners available. You can create unlimited short URLs at no cost, including Instagram short URLs, LinkedIn short URLs, Amazon short URLs, Canva shortened URLs, Dropbox short URLs, and more. No subscriptions, no hidden fees—just a fast, free URL shortener you can trust."
            },
            {
                question: "Shorten, share and track",
                answer:
                    "With Shortify Link, you can shorten any long URL instantly, share it anywhere, and track how many clicks your link receives. It’s perfect for creating clean, professional short links like Google Maps short URLs, Dropbox short URLs, and Amazon short URLs, making it easier to share links across all platforms."
            },
            {
                question: "Simple and fast URL shortener!",
                answer:
                    "Shortify Link is built for speed and ease of use. Paste your long link, click shorten, and your tiny URL is ready instantly. As one of the best tools for creating a LinkedIn short URL, Instagram short URL, Amazon short URL, or any short URL for Google Maps, it’s the ideal free URL shortener for everyday use and professional sharing."
            }
        ]
    },
    urlShortenerUseCases: {
        title: 'Short Links That Work Everywhere',
        subTitle: 'Shortify Link creates fast, reliable short URLs for Instagram, TikTok, Shopify, Google Maps, Figma, PDFs, and any other link you need to share.',
        urlShortenerUseCasesCard: [
            {
                id: 1,
                title: "LinkedIn Short URL",
                icon: "🔗",
                description: "Share professional profiles, posts, and articles with clean, trackable links."
            },
            {
                id: 2,
                title: "Instagram Short URL",
                icon: "📸",
                description: "Make bio links, posts, and stories clean, clickable, and trackable."
            },
            {
                id: 3,
                title: "Amazon Short URL",
                icon: "🛒",
                description: "Share products, affiliate links, and wishlists quickly and efficiently."
            },
            {
                id: 4,
                title: "Google Maps Short URL",
                icon: "🗺️",
                description: "Share locations, directions, and places with easy-to-copy links."
            },
            {
                id: 5,
                title: "Canva Shorten URL",
                icon: "🎨",
                description: "Share designs, presentations, or templates in a neat, professional way."
            },
            {
                id: 6,
                title: "Dropbox Short URL",
                icon: "📂",
                description: "Send files, folders, or documents with simple, trackable links."
            }
        ]
    },
    linkedInHowItWorksData: {
        title: 'How to shorten LinkedIn URL',
        subTitle: 'Follow these 3 simple steps to turn your long LinkedIn URLs into clean, shareable shortened LinkedIn URL',
        stepsData: [
            {
                id: 1,
                label: "Step 1",
                title: "Paste Your LinkedIn URL",
                description:
                    "Copy your long profile or post link and paste it into the box to start the process to shorten LinkedIn URL instantly.",
                icon: "🔗",
            },
            {
                id: 2,
                label: "Step 2",
                title: "Shorten Your LinkedIn URL",
                description:
                    "Click the “Shorten URL” button to quickly shorten LinkedIn URL and get a clean, professional short link.",
                icon: "⚡",
            },
            {
                id: 3,
                label: "Step 3",
                title: "Share Your Shortened LinkedIn Link",
                description:
                    "Use your new short LinkedIn URL in posts, messages, resumes, or job applications. Track every click in real time.",
                icon: "📊",
            },
        ]
    },
    emailRemainderData: {
        title: 'Email Remainder',
        description: 'Receive an email alert once your link hits 50 clicks',
        icon: emailImage
    },
    whatsappRemainderData: {
        title: 'WhatsApp Reminder',
        description: 'Get a WhatsApp notification when your link reaches 50 clicks.',
        icon: whatsappImage
    }

}

