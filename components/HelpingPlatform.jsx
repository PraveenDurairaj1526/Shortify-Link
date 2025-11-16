import React from 'react'

const HelpingPlatform = ({ containerClass, content }) => {

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-100" >
            <div className="max-w-[1100px] mx-auto px-4">
                <h2 className='text-[28px] sm:text-[36px] font-semibold  text-center'>{content?.title}</h2>
                <p className="text-gray-500 text-lg mt-2 mb-9 text-center">{content?.subTitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content?.urlShortenerUseCasesCard?.map((item) => (
                        <div key={item.id} className="group bg-white shadow-sm hover:shadow-xl border border-gray-100 p-8 rounded-2xl text-center transition-all duration-300">
                            <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-gradient-to-br from-[#066ae5] to-[#3da0ff] text-white text-2xl font-bold mb-4 
                          transform group-hover:scale-110 transition-all duration-300 shadow-md">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HelpingPlatform