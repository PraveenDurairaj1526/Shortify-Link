"use client";
import React, { useState } from 'react';
import { CopyIcon, OpenWebsiteIcon } from '@/SvgIcons/getSvgIcons';
import whatsappIcon from '/public/whatsappIcon.png';
import linkedInIcon from '/public/linkedinIcon.png';
import facebookIcon from '/public/facebookIcon.png';
import editIcon from '/public/edit.png';
import Image from 'next/image';
import LinkTitle from '../LinkTitle/LinkTitle';

const BasicInfoCard = ({ linkData }) => {

    const [copied, setCopied] = useState({
        shortUrl: false,
        trackingUrl: false
    });

    const handleCopy = async (copyText, type) => {
        if (!copyText) return;

        try {
            await navigator.clipboard.writeText(copyText);

            setCopied(prev => ({ ...prev, [type]: true }));

            setTimeout(() => {
                setCopied(prev => ({ ...prev, [type]: false }));
            }, 2000);

        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };
    const shareOnWhatsApp = (link) => {
        const url = `https://wa.me/?text=${encodeURIComponent(link)}`;
        window.open(url, "_blank");
        console.log('is')
    };

    const shareOnFacebook = (link) => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        window.open(url, "_blank");
    };

    const shareOnLinkedIn = (link) => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        window.open(url, "_blank");
    };

    const linkShareData = [
        {
            icon: facebookIcon,
            label: 'Facebook',
            handleShare: shareOnFacebook,
        },
        {
            icon: linkedInIcon,
            label: 'LinkedIn',
            handleShare: shareOnLinkedIn
        },
        {
            icon: whatsappIcon,
            label: 'Whatsapp',
            handleShare: shareOnWhatsApp
        },
    ]
    return (
        <div className='border border-gray-300 bg-white rounded-md mb-6'>
            <div className='flex gap-6 items-center justify-between p-5 border-b border-gray-300'>
                <div className='flex gap-2 items-center justify-between'>
                    <span className='text-md font-medium'>{linkData?.linkTitle ? linkData?.linkTitle : 'Title' }</span>
                    <span className='px-3 py-1 rounded-3xl bg-green-50 text-green-700 text-center text-xs font-medium'>Active</span>
                </div>
               {!linkData?.linkTitle && <LinkTitle id={linkData?.fb_id} loading={linkData?.linkTitle} />}
            </div>
            <div className='p-5 border-b border-gray-300'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5'>
                    <div>
                        <label className='text-gray-500 mb-2 text-sm font-medium inline-block'>Short link</label>
                        <div className='border border-gray-300 rounded-md bg-gray-50 flex gap-3 justify-between '>
                            <a href={linkData?.shortUrl} target='_blank' className='py-2.5 px-2 text-sm text-blue-600 overflow-hidden'>{linkData?.shortUrl}</a>
                            <button className='bg-white py-1 px-3 border-s border-gray-300 flex items-center justify-center flex-shrink-0 relative rounded-[inherit]' onClick={() => handleCopy(linkData?.shortUrl, "shortUrl")}><CopyIcon className='w-4 h-4' />
                                {(copied?.shortUrl) && <span className='bg-black text-white py-1 px-3 rounded-3xl absolute bottom-[36px] text-xs'>{copied?.shortUrl ? "Copied" : "Copy"}</span>}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className='text-gray-500 mb-2 text-sm font-medium inline-block'>Analytics link</label>
                        <div className='border border-gray-300 rounded-md bg-gray-50 flex gap-3 justify-between'>
                            <a href={linkData?.trackingUrl} target='_blank' className='py-2.5 px-2 text-sm text-blue-600 overflow-hidden'>{linkData?.trackingUrl}</a>
                            <button className='bg-white flex-shrink-0 py-1 px-3 border-s border-gray-300 flex items-center justify-center relative rounded-[inherit]' onClick={() => handleCopy(linkData?.trackingUrl, "trackingUrl")}>
                                <CopyIcon className='w-4 h-4' />
                                {(copied?.trackingUrl) && <span className='bg-black text-white py-1 px-3 rounded-3xl absolute bottom-[36px] text-xs'>{copied?.trackingUrl ? "Copied" : "Copy"}</span>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-full'>
                    <label className='text-gray-500 mb-2 text-sm font-medium inline-block'>Distinction link</label>
                    <div className='border border-gray-300 rounded-md bg-gray-50 flex gap-3 justify-between'>
                        <a href={linkData?.originalUrl} target='_blank' className='py-2.5 px-2 text-sm text-blue-600 truncate min-w-0'>{linkData?.originalUrl}</a>
                        <a href={linkData?.originalUrl} target='_blank' className='bg-white flex-shrink-0 py-1 px-3 border-s border-gray-300 flex items-center justify-center rounded-[inherit]'><OpenWebsiteIcon className='w-4 h-4 text-blue-600' /></a>
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <label className='text-gray-500 mb-4 text-sm font-medium inline-block'>Share your link</label>
                <div className='flex gap-3 flex-wrap'>
                    {linkShareData?.map((item,key) => {
                        return (
                            <button key={key} className='px-3 py-2 border border-gray-300 bg-white rounded-lg flex gap-2 items-center justify-center text-sm cursor-pointer hover:shadow-md' onClick={()=>{item?.handleShare(linkData?.shortUrl)}}>
                                <Image width={20} height={20} src={item?.icon} alt='share option'/>
                                <span>{item?.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BasicInfoCard