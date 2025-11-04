"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase.config';
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import { ArrowIcon, LinkIcon, Loader } from '@/SvgIcons/getSvgIcons';

const ShortenerForm = () => {
    const [url, setUrl] = useState("");
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [inputError, setInputError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!url) {
            setInputError('Invalid URL. Please enter a proper URL starting with http:// or https://.')
            return
        };

        const trimUrl = url.trim();

        if (trimUrl && trimUrl.startsWith('https')) {
            setLoading(true)
            const id = uuid4().slice(0, 5);
            await addDoc(collection(db, "manage_url"), {
                id,
                originalUrl: trimUrl,
            });
            setLoading(false)
            setOriginalUrl(trimUrl);
            setShortUrl(`${window.location.origin}/${id}`);
            setUrl("");
            setInputError('')
        } else {
            // router.push("/url-creation-error");
            setInputError('Invalid URL. Please enter a proper URL starting with http:// or https://.')
        }
    }

    const handleCopy = async () => {
        if (!shortUrl) return;
        await navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[url(/banner-background.webp)] min-h-[600px] bg-cover">
            <div className="p-[60px_15px] sm:p-[100px_15px] grid justify-center items-center">
                <h1 className="text-[32px] sm:text-[46px] font-semibold text-center mb-3">
                    Free URL Shortener to Simplify Your Links
                </h1>
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
                        className="bg-[#3e8be8] gap-2 flex items-center justify-center shrink-0 text-white font-medium p-[10px] sm:p-[12px_24px] rounded-full transition-all duration-300"
                    >
                        <span className={'hidden sm:block'}>Shorten URL</span>
                        {loading && <Loader loaderStyle='border-white ' />}
                        <ArrowIcon className={'block sm:hidden'} />
                    </button>
                </div>
                {inputError && <p className='text-red-600 text-base sm:max-w-[80%] mx-auto mt-1'>{inputError}</p>}

                {shortUrl &&
                    <div className="border break-all border-[#2d7be3] bg-white p-3 min-h-[100px] shadow-[1px_4px_16px_7px_#dcebfd] my-[20px] mx-auto w-full sm:max-w-[70%] rounded-[12px]">
                        {originalUrl && <div className='mb-2'>
                            <p className='font-semibold mb-1'>Original URL</p>
                            <p>{originalUrl}</p>
                        </div>}
                        {shortUrl && <>
                            <p className='font-semibold mb-1'>Short URL</p>
                            <div className='flex gap-2 items-start'>
                                <a href={shortUrl} target="_blank" rel="noreferrer" className='text-blue-500' >{shortUrl}</a>
                                <button
                                    onClick={handleCopy}
                                    className="bg-blue-600 text-white text-sm  p-1 rounded-full group  top-[-4px]
                                     relative  hover:bg-blue-700 transition flex items-center shrink-0"
                                >
                                    <p className="text-[12px] break-normal px-3 py-1 rounded-[24px] bg-black text-white absolute top-[calc(-100%-2px)] left-1/2 -translate-x-1/2 hidden group-hover:flex">
                                        {copied ? "Copied!" : "Copy"}
                                    </p>
                                    <LinkIcon />
                                </button>
                            </div>


                        </>}
                    </div>
                }
            </div>
        </div>
    );
}

export default ShortenerForm;
