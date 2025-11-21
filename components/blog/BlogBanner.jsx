import Link from 'next/link';
import React from 'react';
import aboutBgImage from '/public/aboutBgImage.webp';
import { RightArrowIcon } from '@/SvgIcons/getSvgIcons';



const BlogBanner = ({ content }) => {
    return (
        <div className='bg-[#a3e7d6] py-20 px-4 rounded-b-3xl' style={{ backgroundImage: `url(${aboutBgImage.src})` }}>
            <div className="max-w-[1280px] mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-normal">{content?.title}</h1>
                {content?.description && <p className="text-lg text-gray-600">{content?.description}</p>}
                {content?.ctaButtonText && <Link className='text-white bg-black p-[12px_24px] rounded-xl mt-6 inline-flex gap-2 items-center' href={content?.ctaLink}>{content?.ctaButtonText}<RightArrowIcon/></Link>}
            </div>
        </div>
    )
}

export default BlogBanner