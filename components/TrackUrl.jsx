"use client";
import React, { useState } from 'react';
import { LinkIcon, OpenWebsiteIcon, SkeletonLoader } from '@/SvgIcons/getSvgIcons';

const TrackUrl = ({ data }) => {
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
        <div className="bg-white rounded-xl shadow-sm border border-border-light  p-6 sm:p-8 word-break">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-text-light mb-4">Link Details</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="text-sm font-medium text-text-secondary-light" >Short URL</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-4 bg-slate-50 rounded-lg p-3">
                                {data?.shortUrl ? <a className="flex-grow text-lg font-medium text-[#3e8be8] bg-transparent border-0 p-0 focus:ring-0" href={data?.shortUrl} >{data?.shortUrl}</a> : <SkeletonLoader containerStyle={'w-full'} />}
                                <button onClick={() => handleCopy(data?.shortUrl, 'shortUrl')}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-[#3e8be8] text-white rounded-md transition-colors shrink-0">
                                    <LinkIcon />
                                    <span>{copied?.shortUrl ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-text-secondary-light" >Tracing URL</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-4 bg-slate-50 rounded-lg p-3">
                                {data?.trackingUrl ? <a className="flex-grow text-lg font-medium text-[#3e8be8] bg-transparent border-0 p-0 focus:ring-0" href={data?.trackingUrl} >{data?.trackingUrl}</a> : <SkeletonLoader containerStyle={'w-full'} />}
                                <button onClick={() => handleCopy(data?.trackingUrl, 'trackingUrl')}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-md bg-[#3e8be8]  shrink-0">
                                    <LinkIcon />
                                    <span>{copied?.trackingUrl ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-text-secondary-light mb-2 inline-block">Original URL</label>
                            {data?.originalUrl ?
                                <a className="text-[#3e8be8] hover:underline truncate flex items-center flex-wrap gap-1 " href={data?.originalUrl} target="_blank">
                                    {data?.originalUrl}
                                    <div className='flex gap-2 items-center'>
                                        <span>open</span>
                                        <OpenWebsiteIcon />
                                    </div>
                                </a>
                                : <SkeletonLoader />}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-text-light mb-4">Performance</h2>
                    <div className="bg-slate-50  rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-sm font-medium text-text-secondary-light">Total Clicks</h3>
                        {data?.clickCount >= 0  ? <p className="text-5xl font-bold text-[#3e8be8] my-3">{data?.clickCount}</p> : <SkeletonLoader containerStyle={' h-[40px] w-[100px] my-3'} />}
                        <div className="text-sm text-text-secondary-light flex flex-wrap gap-3">Created: {formattedDate||<SkeletonLoader containerStyle={'w-[100px]'} />} </ div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackUrl