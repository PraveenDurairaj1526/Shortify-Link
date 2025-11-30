import React from 'react';
import clsx from 'clsx';
import aboutImage from '../public/aboutImage.png';
import aboutBgImage from '../public/aboutBgImage.webp';
import Image from 'next/image';

const About = ({containerClass}) => {
    return (
        <section className={clsx('max-w-[1180px] mx-auto px-4',containerClass)} id='about' >
            <h2 className='text-[28px] sm:text-[36px] font-semibold mb-5'>About Shortify Link – Fast & Free Link Shortener</h2>
            <div className='p-[30px] sm:p-[60px_40px] bg-[#066AE5] rounded-[20px] sm:rounded-[30px] mb-[10px] grid grid-cols-1 md:grid-cols-[auto_300px] relative overflow-hidden isolate gap-5' style={{backgroundImage: `url(${aboutBgImage.src})`}}>
                <div className='text-[18px] sm:text-xl text-white font-medium'>
                    <p className='mb-6'>Shortify Link is a simple, fast, and free URL shortener that lets you create short, shareable links in seconds. Whether it’s a website, blog, or social media platform like Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, or TikTok, just paste your long URL, click the “Shorten URL” button, and get a clean, compact link instantly.</p>
                    <p>Easily copy and share your short URLs anywhere  on websites, social media, messaging apps, or emails. Designed as the best URL shortener, Shortify Link makes link sharing faster, safer, and hassle-free. You can also track clicks and monitor engagement, making it perfect for personal use, marketing campaigns, or social media management. Creating and sharing free short URLs has never been easier.</p>
                </div>
                <div className='h-[350px] mx-auto  sm:h-auto sm:absolute right-[20px] top-[20px] '>
                    <Image src={aboutImage} width={300} alt='free url shortener' />
                </div>
            </div>
        </section>
    )
}

export default About