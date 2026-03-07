import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option, Textarea } from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase.config';

const FeedbackCta = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false);
    };
    const onSubmit = async (data) => {
        await addDoc(collection(db, 'user_feedback'), {
            name: data?.name,
            email: data?.email,
            message: data?.message,
            createAt: serverTimestamp(),
        });
        handleCloseModal()
        reset()

    };

    return (
        <>
            <div className="relative mt-6 rounded-md border bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] p-6 
                shadow-md  transition-all duration-300">
                <div className="">
                    <h3 className="text-lg font-semibold text-black">We value your feedback</h3>
                    <p className="text-sm  mt-1">Tell us what’s working and what we can improve.
                    </p>
                    <button className="mt-5
                       bg-black
                       text-white text-sm font-medium 
                       px-4 py-2.5 rounded-lg 
                       transition-all duration-200 
                       hover:scale-[1.03] active:scale-95" onClick={() => setOpen(true)}>
                        Send Feedback
                    </button>
                </div>
            </div>
            <Dialog open={open} handler={handleCloseModal} size="xs">
                <DialogHeader className="bg-gray-200 rounded-t-xl text-[16px] p-3">
                    Send Message
                </DialogHeader>

                <DialogBody className="space-y-4">
                    <p className="text-black text-sm">
                        Please fill the details below and submit your message.
                    </p>

                    {/* Name - Required */}
                    <div>
                        <Input
                            {...register("name", { required: "Name is required" })}
                            label="Name"
                            placeholder="Enter your name"
                            color="black"
                            className="text-black"
                        />
                        {errors.name && (<p className="text-red-500 text-xs">{errors.name.message}</p>)}
                    </div>
                    <Input
                        {...register("email")}
                        label="Email (Optional)"
                        placeholder="Enter your email"
                        color="black"
                        className="text-black"
                    />
                    <div>
                        <Textarea
                            {...register("message", { required: "Message is required" })}
                            placeholder="Write your message..."
                            color="black"
                            labelProps={{ className: "before:content-none after:content-none" }}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs">{errors.message.message}</p>
                        )}
                    </div>
                </DialogBody>

                <DialogFooter className='flex gap-2'>
                    <Button variant="text" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="gradient"
                        color="black"
                        onClick={handleSubmit(onSubmit)}
                        className="px-6"
                    >
                        Submit
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default FeedbackCta