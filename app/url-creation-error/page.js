import React from 'react'

function page() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-3 text-red-600">
                ⚠️ Oops! We couldn’t shorten your URL
            </h1>
            <p className="text-gray-700 mb-4">
                Something went wrong while creating your short link. Please check the following:
            </p>

            <ul className="list-disc text-left text-gray-700 space-y-1 mb-6 ml-6">
                <li>Make sure the website address is correct.</li>
                <li>Ensure the site is live and accessible.</li>
                <li>Double-check for typos or missing characters.</li>
                <li>The link might be flagged or blocked for security reasons.</li>
                <li>Some URLs may not be allowed for shortening.</li>
            </ul>

            <a
                href="/"
                className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                🔙 Go Back & Try Again
            </a>

        </>)

}

export default page