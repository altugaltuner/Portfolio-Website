// page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import EmailJS

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone Number",
        description: "+90 539 583 07 18",
    },
    {
        icon: <FaEnvelope />,
        title: "Email Address",
        description: "altugaltuner6@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Düzce/Turkey",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [modal, setModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Send the initial message to you with all form data
        emailjs
            .send(
                "service_lqzmw4t", // Replace with your service ID
                "template_oaspjnr", // Replace with your template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                "g0zP0OYZ1rQp9mIRD" // Replace with your public key
            )
            .then(
                (response) => {

                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
            );

        setModal(true); // Open the modal after the form is submitted
    };

    const toggleModal = () => {
        setModal(false); // Modalı kapatmak için
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
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">You can contact me by filling this form</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Button size="md" className="max-w-40 hover:bg-green-600" type="submit">
                                Send Message
                            </Button>
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
                {/* Modal */}
                {modal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md mx-auto text-center">
                            <h2 className="text-2xl mb-4 text-black">Mesajınız Gönderildi!</h2>
                            <p className="text-black">En kısa sürede sizinle iletişime geçeceğim.</p>
                            <Button size="md" className="mt-4 hover:bg-green-600" onClick={toggleModal}>
                                Kapat
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default Contact;
