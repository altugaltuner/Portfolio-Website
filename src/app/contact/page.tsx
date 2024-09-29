"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone Number',
        description: '+90 539 583 07 18'
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

const Contact = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Form submission failed');
            }

            const result = await res.json();
            alert('Email successfully sent!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error sending email. Please try again.');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                You can contact me by filling this form</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    placeholder="firstname"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                />
                                <Input
                                    type="text"
                                    placeholder="lastname"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    type="tel"
                                    placeholder="phone number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <Textarea
                                className="h-[200px]"
                                placeholder="type your message here"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <Button size="md" className="max-w-40" type="submit">Send Message</Button>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
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
        </motion.section>
    )
}

export default Contact;
