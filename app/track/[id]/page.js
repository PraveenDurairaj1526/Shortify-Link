"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import TrackUrl from "@/components/TrackUrl";
import Link from "next/link";
import { SearchIcon } from "@/SvgIcons/getSvgIcons";

export default function TrackClicksPage({ params }) {
    const [linkData, setLinkData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "manage__test_url"), where("id", "==", params.id));
            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                setLinkData(snapshot.docs[0].data());
            }
        };

        fetchData();
    }, [params.id]);

    return (
        <>
            <main className="flex-1 px-[15px] py-8 md:py-12  bg-[#F0F8FF] min-h-[600px]">
                <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
                    <h1 className='text-[24px] sm:text-[28px] font-semibold'>Track your clicks</h1>
                    <div className="flex justify-between items-center gap-[18px] flex-wrap">
                        <div className=" w-full sm:w-[340px] p-[4px_4px_4px_18px] h-11 border border-gray-200 rounded-[30px] flex justify-between bg-white">
                            <input className="flex-grow bg-white focus:outline-none focus:ring-0" placeholder="Enter tracking URL" />
                            <div className="bg-[#066AE5] flex items-center justify-center shrink-0 rounded-full p-4 text-white cursor-pointer"><SearchIcon /></div>
                        </div>
                        <Link href={'/'} className="bg-[#066AE5] gap-2 flex items-center justify-center shrink-0 text-white font-medium p-[10px_18px] sm:p-[10px_24px] rounded-full transition-all duration-300">Create New short Url</Link>
                    </div>
                    <TrackUrl data={linkData} />
                </div>
            </main>

        </>

    );
}
