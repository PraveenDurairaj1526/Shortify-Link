import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Switch, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@material-tailwind/react";
import { doc, updateDoc } from 'firebase/firestore';
import { useLinkData } from '@/context/LinkDataProvider';
import { DB_COLLECTION } from '@/site-config';
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
            const docRef = doc(db, DB_COLLECTION, id);

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
            <div className="p-3 border border-gray-300 bg-white rounded-md shadow-sm">
                <div className='flex justify-between gap-3'>
                    <div className='flex gap-3 items-start'>
                        <div className='bg-gray-100 rounded-md p-2'>
                        <Image src={staticData?.icon} width={20} height={20} />
                        </div>
                        <div>
                            <label className="text-sm font-medium  text-secondary-light">{staticData?.title}</label>
                            <p className="text-gray-600 text-xs">{staticData?.description}</p>
                        </div>
                    </div>
                    <Switch color="blue" checked={isOn} onChange={handleToggle} disabled={emailToggle || email} />
                </div>

                {email && (
                    <div className="mt-3 rounded-md bg-gray-200 px-3 py-3">
                        <p className="text-xs text-gray-700">
                            You will receive an email notification at
                        </p>
                        <div className="mt-1 flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold text-blue-700">
                                {email.replace(/(.{2}).+(@.+)/, "$1*****$2")}
                            </span>

                            <span className="text-xs rounded-full bg-green-100 text-green-600 px-2 py-1">
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