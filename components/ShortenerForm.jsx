"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase.config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import { ArrowIcon, Loader } from '@/SvgIcons/getSvgIcons';

const ShortenerForm = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState('')
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(url, 'step1')

        if (!url) {
            setInputError('Invalid URL. Please enter a proper URL starting with http:// or https://.')
            return
            console.log('step2')
        };

        const trimUrl = url.trim();

        if (trimUrl && trimUrl.startsWith('https') || trimUrl.startsWith('http')) {
            console.log(url, 'step3')
            setLoading(true)
            const id = uuid4().slice(0, 5);
            await addDoc(collection(db, "manage__test_url"), {
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
            console.log('step4')
        }
    }


    return (
        <div className="bg-[url(/banner-background.webp)] min-h-[600px] bg-cover">
            <div className="p-[60px_15px] sm:p-[100px_15px] grid justify-center items-center">
                <h1 className="text-[32px] sm:text-[46px] font-semibold text-center mb-3">
                    Free URL Shortener to Simplify Your Links
                </h1>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <p className='sm:max-w-[80%] text-center mx-auto'>Shortify Link is a free URL shortener that creates short URLs and short links instantly. Make long links concise and easy to share across social media, emails, and websites.</p>
                <div className="flex justify-between gap-2 bg-white rounded-[30px] p-[2px] mt-[30px] sm:max-w-[80%] mx-auto w-full border-2 border-[#3e8be8]">
                    <input
                        type="url"
                        value={url}
                        placeholder="Enter your long URL"
                        className="w-full ps-[20px] focus:outline-none focus:ring-0 rounded-[30px]"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
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
