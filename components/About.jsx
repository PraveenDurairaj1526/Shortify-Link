import { LinkIcon } from '@/SvgIcons/getSvgIcons'
import React from 'react'

const About = () => {
    return (
        <section className='max-w-[1180px] mx-auto px-4 mt-10 sm:mt-20'>
            <h2 className='text-[28px] sm:text-[36px] font-semibold mb-5'>About Our Url shortener</h2>
            <div className='p-[30px] sm:p-[60px_40px] bg-[#d2e5ff8c] rounded-[20px] sm:rounded-[30px] mb-[10px] grid lg:grid-cols-[auto_400px] relative overflow-hidden isolate'>
                <div className='text-[16px] sm:text-xl'>
                    <p className='mb-6'>
                        Simple and Fast URL Shortener Shortify Link lets you create short URLs in seconds from any website, blog, or social media platform like Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, and TikTok. Just paste your long URL, click the “Shorten URL” button, and instantly get a clean, compact short link.
                    </p>
                    <p>
                        Easily copy and share your short links anywhere—on websites, social media, messaging apps, or emails. Shortify Link is a free URL shortener designed to make sharing links faster, safer, and hassle-free.
                    </p>
                </div>
                <LinkIcon className=' hidden lg:block w-[633px] h-[520px] absolute right-[-100px] top-[-107px] text-[#2563eb] -z-[1]' />
            </div>
        </section>
    )
}

export default About