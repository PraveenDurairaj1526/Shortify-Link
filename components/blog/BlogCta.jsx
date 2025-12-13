import { RightArrowIcon } from '@/SvgIcons/getSvgIcons'
import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'

const BlogCta = ({ content,containerStyle }) => {
 
    return (
        <div className={clsx("rounded-2xl p-4 sm:p-6 shadow-lg mt-10 bg-gradient-to-r text-white",containerStyle ?? 'from-[#010493] to-[#320c55]')}>
            <h2 className="text-2xl sm:text-2xl font-semibold leading-relaxed mb-4">{content?.title}</h2>
            {content?.description && <p className="text-sm sm:text-sm leading-relaxed opacity-90 mb-4">{content?.description}</p>}
            {content?.ctaButtonText && <Link className='text-black bg-white p-[12px_24px] rounded-xl inline-flex gap-2 font-semibold leading-normal items-center' href={'/'}>{content?.ctaButtonText}<RightArrowIcon/></Link>}
        </div>
    )
}

export default BlogCta