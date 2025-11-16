import React from 'react';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

 const page = () => {
    return (
        <main className="max-w-3xl mx-auto p-6  text-gray-800">
            <h1 className="text-2xl font-semibold mb-3">Shortify Link — Privacy Policy</h1>

            <h2 className="text-lg font-medium mt-4">1. Overview</h2>
            <p className="text-sm mt-2">Shortify Link respects your privacy. This policy explains what information we collect, how we use it, and how we protect it.</p>

            <h2 className="text-lg font-medium mt-4">2. Information We Collect</h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-2 space-y-1">
                <li>Contact details you provide (e.g., email via contact form)</li>
                <li>Technical data such as IP address, browser type, and device information</li>
            </ul>

            <h2 className="text-lg font-medium mt-4">3. How We Use Data</h2>
            <ul className="list-disc list-inside text-sm ml-4 mt-2 space-y-1">
                <li>Provide and improve the Shortify Link service</li>
                <li>Respond to inquiries and support requests</li>
                <li>Maintain security and prevent misuse</li>
            </ul>

            <h2 className="text-lg font-medium mt-4">4. Information Sharing</h2>
            <p className="text-sm mt-2">We do not sell or share your personal data with third parties, except when required by law or necessary to operate the service.</p>

            <h2 className="text-lg font-medium mt-4">5. Security</h2>
            <p className="text-sm mt-2">We take reasonable steps to protect your data from unauthorized access or loss, but no online service can guarantee absolute security.</p>

            <h2 className="text-lg font-medium mt-4">6. Updates & Changes</h2>
            <p className="text-sm mt-2">We may update this policy occasionally. Changes take effect once posted on this page.</p>

            <h2 className="text-lg font-medium mt-4">7. Contact</h2>
            <p className="text-sm mt-2">For questions or data update requests, please contact us via our contact form.</p>
        </main>

    )
}

export default page