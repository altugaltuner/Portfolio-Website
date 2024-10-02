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

    const [project, setProject] = useState(projects[0]);


    const handleSlideChange = (swiper: SwiperClass) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] min-h-[400px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%] min-h-[400px]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={item.name} className="text-xl text-accent">{item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                {project.live && (<Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                )}

                                {project.github && (
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[625px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project) => (
                                <SwiperSlide key={project.title}>
                                    <div className="w-[112%] h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt={project.title} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* button */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyles="" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work