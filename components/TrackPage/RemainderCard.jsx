import React from 'react';
import EmailRemainder from '../EmailRemainder/EmailRemainder';
import WhatsappRemainder from '../WhatsappRemainder/WhatsappRemainder';
import { getSiteData } from "@/helpers/getStaticData";

const RemainderCard = ({ linkData }) => {
    const { emailRemainderData, whatsappRemainderData } = getSiteData
    return (
        <div className='border border-gray-300 bg-white rounded-md'>
            <div className='flex gap-2 items-center p-5 border-b border-gray-300'>
                <h3 className='text-md font-semibold'>Alters & Remainders</h3>
                <span className="relative px-4 py-1 text-[10px] font-medium text-red-50 rounded-md bg-[linear-gradient(110deg,#5a0505,#fc0a0a,#5a0505)] bg-[length:200%_100%] animate-redGlow"> New</span>
            </div>
            <div className="grid gap-4 p-5">
                <EmailRemainder id={linkData?.fb_id} emailToggle={linkData?.emailRemainder} email={linkData?.email} staticData={emailRemainderData} />
                <WhatsappRemainder id={linkData?.fb_id} whatsappToggle={linkData?.whatsappRemainder} whatsapp={linkData?.whatsapp} staticData={whatsappRemainderData} />
            </div>
        </div>
    )
}

export default RemainderCard