import { RightArrowIcon } from '@/SvgIcons/getSvgIcons'
import Link from 'next/link'
import React from 'react'

const BlogCta = ({ content }) => {
 
    return (
        <div className="rounded-2xl p-8 sm:p-12 shadow-lg mt-10 bg-gradient-to-r from-[#010493] to-[#320c55] text-white">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-4">{content?.title}</h2>
            {content?.description && <p className="text-sm sm:text-base opacity-90 mb-4">{content?.description}</p>}
            {content?.ctaButtonText && <Link className='text-black bg-white p-[12px_24px] rounded-xl inline-flex gap-2 font-semibold leading-normal items-center' href={'/'}>{content?.ctaButtonText}<RightArrowIcon/></Link>}
        </div>
    )
}

export default BlogCta