import clsx from 'clsx';
import React from 'react';

const Faq = ({ containerClass,content }) => {
  return (
    <div className={clsx('bg-[#f9fbff]', containerClass)}>
      <section className='max-w-[1180px] mx-auto px-4  pt-14 sm:pt-20 pb-14 sm:pb-20'>
        <h2 className='text-[28px] sm:text-[36px] font-semibold  text-center'>{content?.title}</h2>
        <p className="text-gray-500 text-lg mt-2 mb-9 text-center">{content?.subTitle}</p>
        <div className="space-y-8">
          {content?.faqQuestions?.map((faq, index) => (
            <div key={index} className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute left-0 top-0 w-1 h-full rounded-l-xl bg-gradient-to-b from-[#066ae5] to-[#3b8df5] opacity-80"></div>
              <h3 className="text-[20px] font-semibold text-gray-900 ">{faq.question}</h3>
              <p className="text-gray-600 mt-3 text-[18px]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Faq