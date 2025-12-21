"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase.config';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import {  Loader } from '@/SvgIcons/getSvgIcons';
import { useForm } from "react-hook-form";

const ShortenerForm = ({ title, specialText, description }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            url: "",
            linkType: "auto",
            customAlias: "",
        },
    });
    const linkType = watch("linkType");

    const onSubmit = async (data) => {
        console.log(data, 'https://www.shortifylink.in/https://www.shortifylink.in/')
        const trimUrl = data.url.trim();

        if (!trimUrl.startsWith("http://") && !trimUrl.startsWith("https://")) {
            setError("url", {
                type: "manual",
                message: "URL must start with http:// or https://",
            });
            return;
        }

        const alias = data.linkType === "custom" ? data.customAlias.trim().toLowerCase() : "";

        const id = alias ? alias : uuid4().slice(0, 5);

        try {
            setLoading(true);

            if (alias) {
                if (!/^[a-z0-9-]{3,30}$/.test(alias)) {
                    setError("customAlias", {
                        type: "manual",
                        message: "Only lowercase letters, numbers & hyphen allowed",
                    });
                    setLoading(false);
                    return;
                }

                const q = query(
                    collection(db, "manage_url"),
                    where("id", "==", alias)
                );
                const snap = await getDocs(q);

                if (!snap.empty) {
                    setError("customAlias", {
                        type: "manual",
                        message: "This custom link is already taken",
                    });
                    setLoading(false);
                    return;
                }
            }

            await addDoc(collection(db, "manage_url"), {
                id,
                originalUrl: trimUrl,
                shortUrl: `${window.location.origin}/${id}`,
                trackingUrl: `${window.location.origin}/track/${id}`,
                clickCount: 0,
                createAt: serverTimestamp(),
            });

            reset();
            router.push(`/track/${id}`);

        } catch (err) {
            console.log(err, 'yy')
            setError("url", {
                type: "manual",
                message: "Something went wrong. Try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-[url(/banner-background.webp)] bg-cover bg-center py-16 sm:py-24 min-h-[600px] px-4 flex gap-5 flex-col-reverse md:flex-col ">
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 grid grid-cols-1  gap-4 items-center ">
                <div className="text-black space-y-6 order-2 md:order-1 text-center ">
                    <h1 className="text-[30px] sm:text-[44px] font-bold leading-tight">
                        {title}{" "}
                        <span className="bg-gradient-to-r from-[#066AE5] to-[#3da0ff] bg-clip-text text-transparent">
                            {specialText}
                        </span>
                    </h1>
                    <p className="text-black text-base sm:text-lg leading-relaxed">{description}</p>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 space-y-5 shadow-md"
            >
                <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Link type</p>

                    <div className="flex flex-wrap gap-3">
                        <label className="bg-white flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 cursor-pointer text-sm">
                            <input
                                type="radio"
                                value="auto"
                                {...register("linkType")}
                                className="accent-blue-600 w-4 h-4"
                            />
                            Auto generate
                        </label>

                        <label className="bg-white flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 cursor-pointer text-sm">
                            <input
                                type="radio"
                                value="custom"
                                {...register("linkType")}
                                className="accent-blue-600 w-4 h-4"
                            />
                            Custom link
                        </label>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">
                        Shorten Your URL
                    </label>

                    <input
                        type="url"
                        placeholder="Paste your long URL here"
                        {...register("url", {
                            required: "URL is required",
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:border-blue-500"
                    />

                    {errors.url && (
                        <p className="text-red-600 text-sm mt-1">{errors.url.message}</p>
                    )}
                </div>

                {linkType === "custom" && (
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1 block">
                            Custom link
                        </label>

                        <div className="flex items-center rounded-xl border border-blue-200 overflow-hidden">
                            <span className="px-3 py-3 text-blue-600 bg-blue-50 whitespace-nowrap">
                                shortifylink.in/
                            </span>

                            <input
                                type="text"
                                placeholder="custom-name"
                                {...register("customAlias")}
                                className="flex-1 px-3 py-3 focus:outline-none"
                            />
                        </div>

                        {errors.customAlias && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.customAlias.message}
                            </p>
                        )}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className=" flex justify-center gap-3 w-full bg-blue-600 text-white py-3 rounded-full font-medium transition disabled:opacity-60"
                >
                    Shorten URL
                    {loading && <Loader /> }
                </button>
            </form>

        </div>

    );
}

export default ShortenerForm;
