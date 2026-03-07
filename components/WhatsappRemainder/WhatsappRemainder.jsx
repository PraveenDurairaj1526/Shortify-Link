import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Switch, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option } from "@material-tailwind/react";
import { doc, updateDoc } from 'firebase/firestore';
import { useLinkData } from '@/context/LinkDataProvider';
import { db } from '@/lib/firebase.config';
import { DB_COLLECTION } from '@/site-config';
import Image from 'next/image';

const remainderCountSelectOption = [100, 500, 1000, 10000]

const WhatsappRemainder = ({ id, whatsappToggle, whatsapp, staticData }) => {
    const { updateLinkData } = useLinkData();
    const [open, setOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({ defaultValues: { whatsappRemainderLimit: 100 } });

    useEffect(() => {
        setIsOn(whatsappToggle)
    }, [id, whatsappToggle])

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
        handleWhatsappRemainder(id, data)
        handleCloseModal()
    };

    const handleWhatsappRemainder = async (id, value) => {
        try {
            const docRef = doc(db, DB_COLLECTION, id);

            await updateDoc(docRef, {
                whatsapp: value?.whatsapp,
                whatsappRemainder: true,
                whatsappRemainderCount: value?.whatsappRemainderLimit
            });
            updateLinkData({ whatsapp: value?.whatsapp });
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
                            <Image src={staticData?.icon} width={25} height={25} alt='whatsapp' />
                        </div>
                        <div>
                            <label className="text-sm font-medium  text-secondary-light">{staticData?.title}</label>
                            <div className='flex flex-wrap gap-2 items-center'>
                                <p className="text-gray-600 text-xs">Alert at {watch("whatsappRemainderLimit")} clicks</p>
                                {!whatsapp && <Button size='sm' className="normal-case py-1 px-2" onClick={() => setOpen(true)}>Change limit</Button>}
                            </div>

                        </div>
                    </div>
                    <Switch color="blue" checked={isOn} onChange={handleToggle} disabled={whatsappToggle || whatsapp} />
                </div>
                {whatsapp && (
                    <div className="mt-3 rounded-md bg-gray-200 px-3 py-3">
                        <p className="text-xs text-gray-700">You will receive a WhatsApp message on</p>
                        <div className="mt-1 flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold text-green-700 tracking-wider">
                                ****{whatsapp?.slice(-5)}
                            </span>
                            <span className="text-xs rounded-full bg-green-100 text-green-600 px-2 py-0.5"> Active</span>
                        </div>
                    </div>
                )}

            </div>
            <Dialog open={open} handler={handleCloseModal} size='xs'>
                <DialogHeader className='bg-gray-200 rounded-t-xl text-[16px] p-3'>Whatsapp Reminder </DialogHeader>
                <DialogBody>
                    <p className='text-black mb-3'>When your link reaches {watch("whatsappRemainderLimit")} clicks, a WhatsApp notification will be sent to you automatically.</p>
                    <Input {...register("whatsapp", { required: "required" })} label="whatsapp No" value={whatsapp} placeholder="Enter Your whatsapp" color='black' />
                    <div className="mt-4">
                        <Controller
                            name="whatsappRemainderLimit"
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
                    <Button variant="gradient" onClick={handleSubmit(onSubmit)}>{whatsappToggle ? 'update' : 'Confirm'}</Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default WhatsappRemainder