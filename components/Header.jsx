"use client"
import React, { useState } from 'react';
import { getSiteData } from '@/helpers/getStaticData';
import Link from 'next/link';
import { CloseIcon, MenuIcon } from '@/SvgIcons/getSvgIcons';

const Header = () => {
    const { navData } = getSiteData
    const [show, setShow] = useState(false)
    return (
        <header className='text-center p-[14px] bg-gray-900 flex justify-between'>
            <Link className="text-2xl font-semibold text-white" href="/" > <span className="text-[#3e8be8]">Shortify</span> Link</Link>
            <nav className='items-center gap-8 hidden lg:flex'>
                {navData?.map((item,key ) => {
                    return (
                        <Link key={key} href={item?.link} className='text-gray-400 hover:text-white'>{item?.text}</Link>
                    )
                })}
            </nav>
            <div onClick={() => setShow(!show)} className='block lg:hidden'>
                <MenuIcon className={'text-white'} />
            </div>

            {/* mobile menu */}
            {show && <div
                className={`flex flex-col '-left-[100%] opacity-0' gap-4 max-w-[280px] items-start justify-start w-full fixed top-0 h-screen bg-black p-5 lg:hidden transition-all duration-500 ease-in-out  ${show && 'left-0 opacity-100' 
                    }`} 
            >
                <div className='flex justify-end w-full' onClick={() => setShow(!show)}>
                    <CloseIcon className={'text-white w-6 h-6'} />
                </div>
                {navData?.map((item,key) => {
                    return (
                        <Link key={key} href={item?.link} className='text-gray-400 hover:text-white' onClick={() => setShow(!show)}>{item?.text}</Link>
                    )
                })}
            </div>}


        </header>
    )
}

export default Header