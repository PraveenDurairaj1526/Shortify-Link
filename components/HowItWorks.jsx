import React from 'react'

const HowItWorks = () => {
    return (
        <section className=" px-4 mt-10 sm:mt-20 bg-[#066ae5] py-10" id='howItWorks'>
            <div className="max-w-[1180px] mx-auto  text-center">
                <h2 className="text-[28px] sm:text-[36px] font-semibold mb-2 text-white">
                    How It Works
                </h2>
                <p className="text-[20px] mb-12 text-white font-medium">
                    Shorten, track, and share your links in just a few easy steps.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Step 1 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                            1
                        </div>
                        <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                            Enter Your Long URL
                        </h3>
                        <p className="text-gray-600 text-[16px]">
                            Paste your long link and click the <span className="font-medium text-blue-600 inline-block">Shorten URL</span> button to create an instant, shareable short link.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl font-bold">
                            2
                        </div>
                        <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                            View & Track Your Link
                        </h3>
                        <p className="text-gray-600 text-[16px]">
                            Instantly see your short and long URLs, along with a tracking panel that displays <span className="font-medium text-green-600 inline-block">click counts</span> and performance insights.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xl font-bold">
                            3
                        </div>
                        <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                            Copy & Share
                        </h3>
                        <p className="text-gray-600 text-[16px]">
                            Copy your short link and share it anywhere  on <span className="font-medium text-purple-600 inline-block">social media, emails, or your website</span>. Track every click effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HowItWorks