"use client";
import React, { useState } from 'react';
import { LinkIcon, OpenWebsiteIcon, SkeletonLoader } from '@/SvgIcons/getSvgIcons';
import LinkTitle from './LinkTitle/LinkTitle';
import EmailRemainder from './EmailRemainder/EmailRemainder';
import { getSiteData } from "@/helpers/getStaticData";
import WhatsappRemainder from './WhatsappRemainder/WhatsappRemainder';


const TrackUrl = ({ data }) => {
    const { emailRemainderData, whatsappRemainderData } = getSiteData
    const [copied, setCopied] = useState({
        shortUrl: false,
        trackingUrl: false
    });
    const formattedDate = data?.createAt
        ? data.createAt?.toDate()?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
        : null;

    const handleCopy = async (copyText, type) => {
        if (!copyText) return;
        try {
            await navigator.clipboard.writeText(copyText);
            setCopied(prev => ({ ...prev, [type]: true }));
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };
    return (
        <div className="bg-white rounded-xl shadow-sm border border-border-light word-break overflow-hidden">
            <div className='flex items-center bg-[#3e8be8] p-3 sm:p-[12px_24px] gap-2 text-white flex-wrap'>
                <label className="text-base font-semibold text-text-secondary-light" >Link Title</label>
                <div>
                    {data?.linkTitle ? <div className='text-base font-semibold p-[5px_12px] bg-white rounded-md text-black inline-block'>{data?.linkTitle}</div> : <LinkTitle id={data?.fb_id} loading={data?.linkTitle} />}</div>
            </div>
            <div className='p-3 sm:p-6'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Short URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Short URL</label>
                        <div className="flex items-center flex-col sm:flex-row bg-white border rounded-xl p-2 shadow-sm hover:shadow transition">
                            {data?.shortUrl ? (
                                <a
                                    href={data.shortUrl}
                                    target="_blank"
                                    className="flex-grow text-blue-600 font-semibold text-[15px] truncate"
                                >
                                    {data.shortUrl}
                                </a>
                            ) : (
                                <SkeletonLoader containerStyle="w-full h-[30px]" />
                            )}

                            <button onClick={() => handleCopy(data?.shortUrl, "shortUrl")}
                                className="flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shrink-0 w-full sm:w-auto "
                            >
                                <LinkIcon />
                                <span>{copied?.shortUrl ? "Copied" : "Copy"}</span>
                            </button>
                        </div>
                    </div>
                    {/* Tracking URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Tracking URL</label>
                        <div className="flex items-center flex-col sm:flex-row bg-white border rounded-xl p-2 shadow-sm hover:shadow transition">
                            {data?.trackingUrl ? (
                                <a
                                    href={data.trackingUrl}
                                    target="_blank"
                                    className="flex-grow text-blue-600 font-semibold text-[15px] truncate"
                                >
                                    {data.trackingUrl}
                                </a>
                            ) : (
                                <SkeletonLoader containerStyle="w-full h-[30px]" />
                            )}

                            <button
                                onClick={() => handleCopy(data?.trackingUrl, "trackingUrl")}
                                className="flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shrink-0 w-full sm:w-auto "
                            >
                                <LinkIcon />
                                <span>{copied?.trackingUrl ? "Copied" : "Copy"}</span>
                            </button>
                        </div>
                    </div>
                    {/* Original URL */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-2">
                        <label className="text-sm font-medium">Original URL</label>

                        {data?.originalUrl ? (
                            <a
                                href={data.originalUrl}
                                target="_blank"
                                className="flex items-center gap-2 p-3 bg-white border rounded-xl shadow-sm hover:shadow transition text-blue-600 font-medium break-all"
                            >
                                <span className="truncate flex-grow">{data.originalUrl}</span>

                                <div className="flex items-center gap-2 text-sm text-blue-600 shrink-0">
                                    <span>Open</span>
                                    <OpenWebsiteIcon />
                                </div>
                            </a>
                        ) : (
                            <SkeletonLoader containerStyle="w-full h-[30px]" />
                        )}
                    </div>
                </div>
                <div className='my-4 border-b border-gray-400' />
                <h2 className="flex items-center gap-2 text-base font-semibold text-text-light mb-2">
                    Notification
                    <span className="relative px-4 py-0.5 text-[10px] font-medium text-red-50 rounded-full bg-[linear-gradient(110deg,#5a0505,#fc0a0a,#5a0505)] bg-[length:200%_100%] animate-redGlow">
                        New
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EmailRemainder id={data?.fb_id} emailToggle={data?.emailRemainder} email={data?.email} staticData={emailRemainderData} />
                    <WhatsappRemainder id={data?.fb_id} whatsappToggle={data?.whatsappRemainder} whatsapp={data?.whatsapp} staticData={whatsappRemainderData} />
                </div>
                <div className='my-4 border-b border-gray-400' />
                <div>
                    <h2 className="text-base font-semibold text-text-light mb-2">Performance</h2>
                    <div className="bg-[#f0f8ff] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="text-sm font-medium text-text-secondary-light">Total Clicks</h3>
                        {data?.clickCount >= 0 ? <p className="text-5xl font-bold text-[#3e8be8] my-3">{data?.clickCount}</p> : <SkeletonLoader containerStyle={' h-[40px] w-[100px] my-3'} />}
                        <div className="text-sm text-text-secondary-light flex flex-wrap gap-3">Created: {formattedDate || <SkeletonLoader containerStyle={'w-[100px]'} />} </ div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackUrl