"use client";
import React from 'react';
import BasicInfoCard from './TrackPage/BasicInfoCard';
import RemainderCard from './TrackPage/RemainderCard';
import LinkClickCountCard from './TrackPage/LinkClickCountCard';
import FeedbackCta from './FeedbackCta';


const TrackUrl = ({ data }) => {

    return (
            <div className='grid grid-cols-[2fr_1fr] gap-6 items-start'>
                <div>
                    <BasicInfoCard linkData={data} />
                    <FeedbackCta />
                </div>
                <div className='grid gap-6'>
                    <RemainderCard linkData={data} />
                    <LinkClickCountCard linkData={data} />
                </div>
            </div>
    )
}

export default TrackUrl