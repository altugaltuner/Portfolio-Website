"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Wargame LLM ",
        description: "This is a war simulation game that I work on at Radius Inc. It is a web-based game that is developed with Next.js, Tailwind CSS, and Typescript.",
        stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Typescript" }],
        image: "/work/wargame.png",
        live: "",
        github: "https://github.com/bronixEngineering",
    },
    {
        num: "02",
        category: "frontend",
        title: "Placemaking AI",
        description: "This project is a cost-effective, revenue-boosting, and market-aligned decision-making for sustainable and future-proof growth website.",
        stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Typescript" }],
        image: "/work/placemaking.png",
        live: "https://www.placemaking.ai/",
        github: "https://github.com/bronixEngineering",
    },
    {
        num: "03",
        category: "frontend",
        title: "Ofisim",
        description: "Ofisim is a comprehensive platform designed to optimize daily operations and improve efficiency for businesses.",
        stack: [{ name: "React" }, { name: "SASS" }, { name: "Javascript" }],
        image: "/work/ofisim.png",
        live: "",
        github: "https://github.com/altugaltuner/arch-website",
    },
    {
        num: "04",
        category: "frontend",
        title: "E-Commerce Website",
        description: "This is a simple e-commerce website that we built with React, SASS, and Javascript at Archi's Academy.",
        stack: [{ name: "React" }, { name: "SASS" }, { name: "Javascript" }],
        image: "/work/e-commerce.png",
        live: "",
        github: "https://github.com/archis-academy/coral-buy-feb-2024",
    },
    {
        num: "05",
        category: "frontend",
        title: "Food Order Website",
        description: "This is a simple food order website that I developed with Html 5, Css 3, and Javascript.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/work/foodorder.png",
        live: "",
        github: "https://github.com/altugaltuner/food-order-altug",
    },
];

const Work = () => {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[100vh] flex flex-col justify-center md:py-12 xl:px-0 py-2"
        >
            <div className="container mx-auto w-full">
                <div className="flex flex-col-reverse xl:flex-row xl:gap-[30px]">
                    {/* Left Content */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] min-h-[400px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col md:gap-[30px] gap-[15px] h-[50%] min-h-[400px]">
                            <div className="md:text-8xl text-4xl leading-none font-extrabold text-transparent text-outline">
                                {selectedProject.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {selectedProject.title}
                            </h2>
                            <p className="text-white/60 md:text-base text-sm">{selectedProject.description}</p>
                            <ul className="md:flex gap-4 flex-col">
                                {selectedProject.stack.map((item, index) => (
                                    <li key={item.name} className="text-accent md:text-large text-sm">
                                        {item.name}
                                        {index !== selectedProject.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4 pb-2">
                                {selectedProject.live && (
                                    <Link href={selectedProject.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group w-[30px] h-[30px]">
                                                    <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}

                                {selectedProject.github && (
                                    <Link href={selectedProject.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group w-[30px] h-[30px]">
                                                    <BsGithub className="text-3xl text-white group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Simplified Slider */}
                    <div className="w-full xl:w-[50%] mt-8 xl:mt-0">
                        <div className=" h-[300px] sm:h-[350px] md:h-[400px] xl:h-[460px] xl:w-[700px]  relative group flex justify-center items-center bg-pink-50/20">
                            <Image src={selectedProject.image} fill className="object-cover" alt={selectedProject.title} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 text-white bg-accent ${selectedProject.num === project.num ? "opacity-100" : "opacity-50"}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            {project.num}
                        </button>
                    ))}
                </div>
            </div>
        </motion.section >
    );
};

export default Work;
