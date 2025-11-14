import React from 'react';
import aboutImage from '../public/aboutImage.png';
import aboutBgImage from '../public/aboutBgImage.webp';
import Image from 'next/image';

const About = () => {
    return (
        <section className='max-w-[1180px] mx-auto px-4 mt-10 sm:mt-20' id='about' >
            <h2 className='text-[28px] sm:text-[36px] font-semibold mb-5'>About Our Url shortener</h2>
            <div className='p-[30px] sm:p-[60px_40px] bg-[#066AE5] rounded-[20px] sm:rounded-[30px] mb-[10px] grid grid-cols-1 md:grid-cols-[auto_300px] relative overflow-hidden isolate gap-5' style={{backgroundImage: `url(${aboutBgImage.src})`}}>
                <div className='text-[18px] sm:text-xl text-white font-medium'>
                    <p className='mb-6'>
                        Simple and Fast URL Shortener Shortify Link lets you create short URLs in seconds from any website, blog, or social media platform like Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, and TikTok. Just paste your long URL, click the “Shorten URL” button, and instantly get a clean, compact short link.
                    </p>
                    <p>
                        Easily copy and share your short links anywhere on websites, social media, messaging apps, or emails. Shortify Link is a free URL shortener designed to make sharing links faster, safer, and hassle-free.
                    </p>
                </div>
                <div className='h-[350px] mx-auto  sm:h-auto sm:absolute right-[20px] top-[20px] '>
                    <Image src={aboutImage} width={300} alt='free url shortener' />
                </div>
               
            </div>
        </section>
    )
}

export default About