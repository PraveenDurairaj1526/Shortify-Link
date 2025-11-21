"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase.config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import { ArrowIcon, Loader } from '@/SvgIcons/getSvgIcons';
import Link from 'next/link';

const ShortenerForm = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState('')
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!url) {
            setInputError('Invalid URL. Please enter a proper URL starting with http:// or https://.')
            return
        };

        const trimUrl = url.trim();

        if (trimUrl && trimUrl.startsWith('https') || trimUrl.startsWith('http')) {
            setLoading(true)
            const id = uuid4().slice(0, 5);
            await addDoc(collection(db, "manage_url"), {
                id,
                originalUrl: trimUrl,
                shortUrl: `${window.location.origin}/${id}`,
                clickCount: 0,
                trackingUrl: `${window.location.origin}/track/${id}`,
                createAt: serverTimestamp()
            });
            setLoading(false)
            setUrl("");
            setInputError('')
            router.push(`/track/${id}`);

        } else {
            setInputError('Invalid URL. Please enter a proper URL starting with http:// or https://.')
        }
    }


    return (
        <div className="relative bg-[url(/banner-background.webp)] bg-cover bg-center py-16 sm:py-24 min-h-[600px]">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 grid grid-cols-1  gap-8 items-center ">
                <div className="text-black space-y-6 order-2 sm:order-1 text-center ">
                    <h1 className="text-[30px] sm:text-[44px] font-bold leading-tight hidden md:block">
                        Free URL Shortener with{" "}
                        <span className="bg-gradient-to-r from-[#066AE5] to-[#3da0ff] bg-clip-text text-transparent">
                            Click Tracking
                        </span>
                    </h1>
                    <p className="text-black text-base sm:text-lg leading-relaxed">
                        <span className="font-semibold">Shortify Link</span> is a free and reliable URL shortener that instantly creates clean,
                        shareable links and allows you to <span className="font-semibold">track URL clicks in real time.</span> Generate
                        <span className="font-semibold"> LinkedIn short URLs, Instagram short URLs, Amazon short URLs, Google Maps short URLs</span>,
                        and more effortlessly.
                    </p>
                </div>
                {/* RIGHT SIDE URL INPUT */}
                <div className='order-1 sm:order-2 '>
                    <h1 className="text-[30px] sm:text-[44px] font-bold leading-tight md:hidden mb-4">
                        Free URL Shortener with{" "}
                        <span className="bg-gradient-to-r from-[#066AE5] to-[#3da0ff] bg-clip-text text-transparent">
                            Click Tracking
                        </span>
                    </h1>
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-7 shadow-lg border border-white/50 w-full md:max-w-[80%] mx-auto">
                        <label className="text-gray-800 font-semibold text-lg mb-3 text-left inline-block">
                            Shorten Your URL
                        </label>
                        <div className="flex justify-between gap-2 bg-white rounded-[30px] p-[2px]  w-full border-2 border-[#3e8be8]">
                            <input
                                type="url"
                                value={url}
                                placeholder="Enter your long URL"
                                className="w-full ps-[20px] focus:outline-none focus:ring-0 rounded-[30px]"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <button
                                aria-label="Shorten link"
                                onClick={handleSubmit}
                                className="bg-[#066AE5] gap-2 flex items-center justify-center shrink-0 text-white font-medium p-[10px] sm:p-[12px_24px] rounded-full transition-all duration-300"
                            >
                                <span className={'hidden sm:block'}>Shorten URL</span>
                                {loading && <Loader />}
                                <ArrowIcon className={'block sm:hidden'} />
                            </button>
                        </div>
                        {inputError && <p className='text-red-600 text-base mt-1'>{inputError}</p>}
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ShortenerForm;
