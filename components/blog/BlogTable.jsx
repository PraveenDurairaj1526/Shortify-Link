import React from 'react';
import BlogCta from './BlogCta';
import StickyCTA from './StickyCta';

const BlogTable = ({ content, ctaData, containerStyle,stickyBottomCta }) => {
    return (
        <section className="  w-full md:w-[400px] shrink-0 md:sticky top-0">
            <div className='bg-white shadow-md p-6 rounded-xl'>
                <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                <ul className="list-decimal pl-6 space-y-2">
                    {[content?.map((item, key) => {
                        return (<li key={key}><a href={`#heading${++key}`} className="text-blue-600 hover:underline">{item}</a></li>)
                    })]}
                </ul>
            </div>
            {ctaData && <BlogCta content={ctaData} containerStyle={containerStyle} />}
            {stickyBottomCta && <StickyCTA  content={ctaData}  containerStyle={containerStyle} />}
        </section>
    )
}

export default BlogTable