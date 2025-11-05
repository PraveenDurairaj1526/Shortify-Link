"use client";

import { LinkIcon } from "@/SvgIcons/getSvgIcons";
import React from "react";

const campaignData = {
    breadcrumbs: ["Dashboard", "Links", "Track Clicks"],
    title: "Track Clicks & Performance",
    stats: {
        totalClicks: 1250,
    },
    campaign: {
        name: "Affiliate Blog Campaign - October",
        createdAt: "Oct 10, 2025",
        shortLink: "https://shortifylink.in/abc123",
        originalUrl: "https://www.verylongurl.com/with/lots-of-details-to-track-campaigns",
    },
};

export default function TrackClicksPage() {
    const { breadcrumbs, title, stats, campaign } = campaignData;

    return (
        <main className="flex-1 px-[15px] py-8 md:py-12 bg-[#f2f7fb] min-h-[600px]">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
                <div className="flex justify-between items-center gap-[18px] flex-wrap">
                    <h1 className='text-[24px] sm:text-[28px] font-semibold'>Track your clicks</h1>
                    <input className="sm:w-[320px] p-1 px-3 h-10 border border-gray-200 rounded-lg" placeholder="Enter tracking URL" />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Stats Section */}
                    <section className="p-6 rounded-xl bg-card-light border border-border-light md:col-span-1 bg-white">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div>
                                <h3 className="text-[20px] sm:text-xl font-bold text-text-light mb-3">
                                    Total Clicks
                                </h3>
                                <p className="text-lg  font-semibold text-[#3e8be8]">
                                    {stats.totalClicks.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Campaign Details Section */}
                    <section className="p-6 rounded-xl bg-card-light border border-border-light md:col-span-3 bg-white">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h2 className="text-[20px] sm:text-xl font-bold text-text-light mb-3">
                                        {campaign.name}
                                    </h2>
                                    <p className="text-text-secondary-light text-sm">
                                        Created: {campaign.createdAt}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Short Link */}
                                <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#f2f7fb]">
                                    <label className="text-sm font-semibold text-text-secondary-light">
                                        Short Link
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <p className="text-primary truncate text-[#3e8be8]">
                                            {campaign.shortLink}
                                        </p>
                                        <button className="ml-auto p-2 rounded-full hover:bg-primary/20 text-text-secondary-light hover:text-primary">
                                            <LinkIcon />
                                        </button>
                                    </div>
                                </div>

                                {/* Original URL */}
                                <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#f2f7fb]">
                                    <label className="text-sm font-semibold text-text-secondary-light">
                                        Original URL
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <p className="text-text-light truncate">
                                            {campaign.originalUrl}
                                        </p>
                                        <button className="ml-auto p-2 rounded-full hover:bg-primary/20 text-text-secondary-light hover:text-primary">
                                            open
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
