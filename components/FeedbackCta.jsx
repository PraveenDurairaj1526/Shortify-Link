import React from 'react'

const FeedbackCta = () => {
    return (
        <div className="relative mt-6 rounded-md border border-gray-300 bg-white p-6 
                shadow-sm  transition-all duration-300">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-600 rounded-l-xl"></div>
            <div className="pl-4">
                <h3 className="text-lg font-semibold text-gray-800">We value your feedback</h3>
                <p className="text-sm text-gray-500 mt-1">Tell us what’s working and what we can improve.
                </p>
                <button className="mt-5
                       bg-blue-600 hover:bg-blue-700 
                       text-white text-sm font-medium 
                       px-4 py-2.5 rounded-lg 
                       transition-all duration-200 
                       hover:scale-[1.03] active:scale-95">
                    Send Feedback
                </button>
            </div>
        </div>
    )
}

export default FeedbackCta