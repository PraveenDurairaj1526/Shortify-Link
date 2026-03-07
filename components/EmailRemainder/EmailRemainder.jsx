import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Switch, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option } from "@material-tailwind/react";
import { doc, updateDoc } from 'firebase/firestore';
import { useLinkData } from '@/context/LinkDataProvider';
import { DB_COLLECTION } from '@/site-config';
import { db } from '@/lib/firebase.config';
import Image from 'next/image';

const remainderCountSelectOption = [100, 500, 1000, 10000]
const EmailRemainder = ({ id, emailToggle, email, staticData }) => {
    const { updateLinkData } = useLinkData();
    const [open, setOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({ defaultValues: { emailRemainderLimit: 100 } });

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
        handleEmailRemainder(id, data)
        handleCloseModal()
    };

    const handleEmailRemainder = async (id, value) => {
        try {
            const docRef = doc(db, DB_COLLECTION, id);

            await updateDoc(docRef, {
                email: value.email,
                emailRemainder: true,
                emailRemainderCount: value?.emailRemainderLimit
            });
            updateLinkData({ email: value.email });
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
                            <Image src={staticData?.icon} width={20} height={20} alt='email' />
                        </div>
                        <div>
                            <label className="text-sm font-medium  text-secondary-light">{staticData?.title}</label>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <p className="text-gray-600 text-xs">Alert at {watch("emailRemainderLimit")} clicks</p>
                              {!email &&  <Button size='sm' className="normal-case py-1 px-2" onClick={() => setOpen(true)}>Change limit</Button>}
                            </div>
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
                    <p className='text-black mb-3'>If your link reaches {watch("emailRemainderLimit")} clicks, we will send you an email reminder.</p>
                    <Input {...register("email", { required: "required" })} label="Email" value={email} placeholder="Enter Your Email" color='black' />
                    <div className="mt-4">
                        <Controller
                            name="emailRemainderLimit"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Reminder Click Count"
                                    color="black"
                                    className='text-black'
                                    labelProps={{
                                        className: "text-black",
                                    }}
                                    value={String(field.value)}
                                    onChange={(val) => field.onChange(val)}
                                >
                                    {remainderCountSelectOption.map((item) => (
                                        <Option key={item} value={String(item)} color='black' className='text-black'>
                                            {item} Clicks
                                        </Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>
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