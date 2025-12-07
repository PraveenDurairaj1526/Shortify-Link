"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from '@material-tailwind/react';
import { doc, updateDoc } from 'firebase/firestore';
import { useLinkData } from '@/context/LinkDataProvider';
import { db } from '@/lib/firebase.config';



const LinkTitle = ({ id }) => {
    const { updateLinkData } = useLinkData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const onSubmit = (data) => {
        handleAddTitle(id, data?.linkTitle)
        handleOpen()
    };


    const handleAddTitle = async (id, value) => {
        try {
            const docRef = doc(db, "manage_url", id);

            await updateDoc(docRef, {
                linkTitle: value,
            });
            updateLinkData({ linkTitle: value });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    return (
        <>
            <button onClick={handleOpen} className="text-[#066AE5] bg-gray-100 gap-2 flex items-center justify-center shrink-0  font-medium  p-[6px_18px] rounded-full transition-all duration-300 text-[14px]">Add Title <span className='inline-block text-[20px] leading-[20px]'>+</span></button>
            <Dialog open={open} handler={handleOpen} size={'xs'}>
                <DialogHeader className='bg-gray-200 rounded-t-xl text-[16px] p-3'>Add Title</DialogHeader>
                <DialogBody>
                    <p className='text-black mb-3'>Adding a title helps you remember the purpose of this link and improves link management.</p>
                    <Input      {...register("linkTitle", { required: "required" })} label="Link Title" placeholder="Enter Link Title" color='black' />
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" onClick={() => handleOpen(null)} className="mr-1">Cancel</Button>
                    <Button variant="gradient" onClick={handleSubmit(onSubmit)}>Confirm</Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default LinkTitle