"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { db } from "@/lib/firebase.config";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { SearchIcon } from "@/SvgIcons/getSvgIcons";
import TrackUrl from "@/components/TrackUrl";
import { useLinkData } from "@/context/LinkDataProvider";



export default function TrackClicksPage({ params }) {
    const [isSearchPage, setSearchPage] = useState(false);
    const [isSearchValue, setSearchValue] = useState('');
    const [noResults, setNoResults] = useState(false)
    const router = useRouter();
    const { linkData, setLinkData } = useLinkData();



    const handleSearchTrackingUrl = () => {
        if (params.id == "search") {
            setSearchPage(true)
        }
    }
    const handleSearch = (e) => {
        e.preventDefault();
        let trimSearchUrl = isSearchValue.trim()

        if (trimSearchUrl && trimSearchUrl.startsWith('https') || trimSearchUrl.startsWith('http')) {
            const shortUrlId = trimSearchUrl.slice(-5)
            router.push(`/track/${shortUrlId}`);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "manage_url"), where("id", "==", params.id));
            try {
                const snapshot = await getDocs(q);
                if (!snapshot.empty) {
                    const document = snapshot.docs[0];
                    setLinkData({
                        ...document.data(),
                        fb_id: document.id,
                    });
                } else {
                    setNoResults(true);
                    console.log("No results found, state updated asynchronously");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setNoResults(true);
            }
        };

        fetchData();
        handleSearchTrackingUrl()
    }, [params.id, noResults]);


    return (
            <main className="flex-1 px-[15px] py-8 md:py-12  bg-[#F0F8FF] min-h-[600px]">
                <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
                    <h1 className='text-[24px] sm:text-[28px] font-semibold'>Track your clicks</h1>
                    <div className="flex justify-between items-center gap-[18px] flex-wrap">
                        <div>
                            <div className=" w-full sm:w-[340px] p-[4px_4px_4px_18px] h-11 border border-gray-200 rounded-[30px] flex justify-between bg-white">
                                <input
                                    value={isSearchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="flex-grow bg-white focus:outline-none focus:ring-0" placeholder="Enter short URL"
                                />
                                <button className="bg-[#066AE5] flex items-center justify-center shrink-0 rounded-full p-4 text-white cursor-pointer" onClick={handleSearch}><SearchIcon /></button>
                            </div>
                            <div><span className="font-semibold inline-block mt-2">Note: </span> To search, enter a valid short URL.<span className="font-semibold inline-block">Example: https://www.shortifylink.in/abc123</span></div>
                        </div>
                        <Link href={'/'} className="bg-[#066AE5] gap-2 flex items-center justify-center shrink-0 text-white font-medium p-[10px_18px] sm:p-[10px_24px] rounded-full transition-all duration-300">Create New short Url</Link>
                    </div>
                    {!isSearchPage && !noResults && <TrackUrl data={linkData} />}
                    {noResults && !isSearchPage && <div className="text-center  bg-white border border-gray-200 rounded-[12px] p-[50px_15px] ">
                        <h2 className="text-xl font-semibold mb-3">We can’t find that link 😔</h2>
                        <p>
                            It looks like the short URL you entered doesn’t exist.
                            Maybe it was typed incorrectly or has been deleted.
                        </p>
                    </div>}
                </div>
            </main>
    );
}
