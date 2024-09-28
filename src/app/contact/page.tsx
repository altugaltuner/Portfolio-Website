"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { Description } from "@radix-ui/react-dialog";


const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone Number',
        description: '0539 583 07 18'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email Address',
        description: 'altugaltuner6@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        description: 'Düzce/Turkey'
    }
]

import { motion } from "framer-motion";
import AiChat from "@/components/AiChat";

const Contact = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6" >

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <div className="flex flex-col gap-6 pr-10 pl-10 pb-[80px] pt-[80px] bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                You can contact me directly</p>

                            {/* select */}

                        </div>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">

                        <ul className="flex flex-col gap-6">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* <AiChat /> */}
        </motion.section>
    )
}

export default Contact