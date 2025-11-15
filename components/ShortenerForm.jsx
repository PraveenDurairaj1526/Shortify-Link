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
        <div className="bg-[url(/banner-background.webp)] min-h-[600px] bg-cover">
            <div className="p-[60px_15px] sm:p-[100px_15px] grid justify-center items-center">
                <h1 className="text-[32px] sm:text-[46px] font-semibold text-center mb-4"> Free URL Shortener with Click Tracking</h1>
                <p className='sm:max-w-[80%] text-center mx-auto'>Shortify Link is a free and reliable URL shortener that instantly creates clean, shareable short links while allowing you to <span className='font-semibold'>track URL clicks in real time.</span> Simplify long URLs, generate <span className='font-semibold'>LinkedIn short URLs, Instagram short URLs, Amazon short URLs, Google Maps short URLs,</span> and more. Share branded short links across social media, emails, websites, or marketing campaigns effortlessly.</p>
                <div className='flex gap-4 items-center mt-5 justify-center'>
                    <Link href={'#howItWorks'} className="gap-2 flex items-center justify-center shrink-0 text-[#3e8be8] font-medium p-[11px_24px] rounded-full border border-[#3e8be8]">How it works</Link>
                    <Link href={'/track/search'} className="bg-[#066AE5] gap-2 flex items-center justify-center shrink-0 text-white font-medium p-[12px_24px] rounded-full transition-all duration-300">Track URL</Link>
                </div>
                <div className="flex justify-between gap-2 bg-white rounded-[30px] p-[2px] mt-[30px] sm:max-w-[80%] mx-auto w-full border-2 border-[#3e8be8]">
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
                {inputError && <p className='text-red-600 text-base sm:max-w-[80%] mx-auto mt-1'>{inputError}</p>}
            </div>
        </div>
    );
}

export default ShortenerForm;
