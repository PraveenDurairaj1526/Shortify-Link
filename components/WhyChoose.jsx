import clsx from 'clsx';
import React from 'react';

const WhyChoose = ({ containerClass, content,title }) => {
  return (
    <section className={clsx('max-w-[1180px] mx-auto px-4', containerClass)} id='service'>
      <h2 className='text-[28px] sm:text-[36px] font-semibold mb-9 text-center'>{title}</h2>
      <div className="grid lg:grid-cols-3 gap-8 w-full">
        {content?.featuresData?.map((item, key) => {
          const FeatureIcon = item?.Icon;
          return (
            <div key={key} className="group relative w-full rounded-2xl p-[1px] bg-gradient-to-br from-[#066ae5]/40 via-white to-[#066ae5]/20 hover:from-[#066ae5]/60 hover:via-white hover:to-[#066ae5]/40transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)]">
              <div className="bg-white rounded-2xl p-6 h-full transition-all duration-300">
                <div className="inline-flex justify-center mb-4 bg-[#066ae5]/10 text-[#066ae5] p-4 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                  <FeatureIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#066ae5] transition-all duration-300">{item?.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{item?.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>



    </section>
  )
}

export default WhyChoose