import React from 'react'

const LinkClickCountCard = ({ linkData }) => {

    const formattedDate = linkData?.createAt
        ? linkData.createAt?.toDate()?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
        : null;
    return (
        <div className='border border-gray-300 bg-white rounded-md'>
            <div
             className='flex gap-2 items-center p-5 border-b border-gray-300 '
             >
                <h3 className='text-md font-semibold'>Performance</h3>
            </div>
            <div className="p-5">
                <p className="text-sm font-medium  text-secondary-light text-center mb-2">Total Clicks</p>
                <p className='text-5xl font-bold text-blue-600 text-center mb-2'>{linkData?.clickCount}</p>
                <div className="text-sm text-text-secondary-light flex flex-wrap gap-3 justify-center">Created: {formattedDate} </ div>
            </div>
        </div>
    )
}

export default LinkClickCountCard