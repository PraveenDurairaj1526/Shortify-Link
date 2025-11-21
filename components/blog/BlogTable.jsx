import React from 'react';

const BlogTable = ({ content }) => {
    return (
        <section className="bg-white shadow-md p-6 rounded-xl w-full md:w-[400px] shrink-0 md:sticky top-0">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-decimal pl-6 space-y-2">
               {[content?.map((item,key)=>{
                return( <li key={key}><a href={`#heading${++key}`} className="text-blue-600 hover:underline">{item}</a></li>)
               })]}
            </ul>
        </section>
    )
}

export default BlogTable