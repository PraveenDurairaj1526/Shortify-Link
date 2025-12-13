import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Switch, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@material-tailwind/react";
import { doc, updateDoc } from 'firebase/firestore';
import { useLinkData } from '@/context/LinkDataProvider';
import { db } from '@/lib/firebase.config';
import Image from 'next/image';

const EmailRemainder = ({ id, emailToggle, email, staticData }) => {
    const { updateLinkData } = useLinkData();
    const [open, setOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setIsOn(emailToggle)
    }, [id, emailToggle])

    const handleToggle = (e) => {
        const checked = e.target.checked;
        setIsOn(checked);
        if (checked) { setOpen(true); }
    };

    const handleCloseModal = () => {
        setOpen(false);
        setIsOn(false);
    };

    const onSubmit = (data) => {
        handleEmailRemainder(id, data?.email)
        handleCloseModal()
    };

    const handleEmailRemainder = async (id, value) => {
        try {
            const docRef = doc(db, "manage_url", id);

            await updateDoc(docRef, {
                email: value,
                emailRemainder: true
            });
            updateLinkData({ email: value });
            setIsOn(true);
            setOpen(false);

        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <>
            <div className="p-5 bg-[#f0f8ff] rounded-md">
                <div className='flex gap-3 items-center mb-2'>
                    <Image src={staticData?.icon} width={30} height={30} />
                    <div className='flex gap-3 items-center'>
                        <label className="text-base font-medium text-text-secondary-light">{staticData?.title}</label>
                        <Switch color="blue" checked={isOn} onChange={handleToggle} disabled={emailToggle || email} />
                    </div>
                </div>
                <p className="text-gray-600 text-sm">{staticData?.description}</p>
                {email && (
                    <div className="mt-3 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-100 px-4 py-3">
                        <p className="text-sm text-gray-700">
                            You will receive an email notification at
                        </p>

                        <div className="mt-1 flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-blue-700">
                                {email.replace(/(.{2}).+(@.+)/, "$1*****$2")}
                            </span>

                            <span className="text-xs rounded-full bg-blue-200/60 px-2 py-0.5 text-blue-800">
                                Active
                            </span>
                        </div>
                    </div>
                )}

            </div>
            <Dialog open={open} handler={handleCloseModal} size='xs'>
                <DialogHeader className='bg-gray-200 rounded-t-xl text-[16px] p-3'>Email Reminder </DialogHeader>
                <DialogBody>
                    <p className='text-black mb-3'>If your link reaches 50 clicks, we will send you an email reminder.</p>
                    <Input {...register("email", { required: "required" })} label="Email" value={email} placeholder="Enter Your Email" color='black' />
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" onClick={handleCloseModal}>Close</Button>
                    <Button variant="gradient" onClick={handleSubmit(onSubmit)}>{emailToggle ? 'update' : 'Confirm'}</Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default EmailRemainder