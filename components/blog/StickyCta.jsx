"use client"
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { RightArrowIcon } from '@/SvgIcons/getSvgIcons'

const StickyCTA = ({ content, containerStyle }) => {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div
            className={clsx(
                "fixed bottom-4 left-4 right-4 z-50 rounded-lg p-4 sm:p-5 bg-gradient-to-r text-white shadow-lg grid sm:hidden  gap-2",
                containerStyle ?? "from-[#010493] to-[#320c55]"
            )}
        >
            <div className="flex-1">
                <h3 className="text-lg leading-snug text-center">
                    {content?.title}
                </h3>
            </div>

            {content?.ctaButtonText && (
                <Link
                    href="/"
                    className="shrink-0 bg-white text-black px-4 py-2 rounded-lg flex justify-center items-center gap-2 text-sm font-semibold"
                >
                    {content?.ctaButtonText}
                    <RightArrowIcon />
                </Link>
            )}

            <button
                onClick={() => setShow(false)}
                className="absolute -top-2 -right-2 bg-black text-white rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center"
                aria-label="Close CTA"
            >
                ✕
            </button>
        </div>
    );
};

export default StickyCTA;
