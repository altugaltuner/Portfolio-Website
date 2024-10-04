"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const about = {
    title: 'About Me',
    description: "I'm a front end developer with a passion for creating beautiful and functional web applications.",
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Altuğ Altuner',
        },
        {
            fieldName: 'Phone',
            fieldValue: '+90 539 583 07 18',
        },
        {
            fieldName: 'Experience',
            fieldValue: '1 Year',
        },
        {
            fieldName: 'Linkedin',
            fieldValue: '/altug-altuner',
        },
        {
            fieldName: 'Email',
            fieldValue: 'altugaltuner6@gmail.com',
        },
        {
            fieldName: 'Fulltime/Parttime',
            fieldValue: 'Available',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Turkish, English',
        },
    ]
}

const experience = {
    icon: "",
    title: 'Experience',
    description: "I worked at various companies and gained experience in different areas.",
    items: [
        {
            company: "Radius Inc.",
            position: "Front End Developer",
            duration: "2024-Present",
        },
        {
            company: "Archi's Academy",
            position: "Trainee",
            duration: "2023 - 2024",
        },
        {
            company: "Optimal PMO",
            position: "Architect",
            duration: "2022 - 2023",
        },
        {
            company: "DOME Partners",
            position: "Architect",
            duration: "2021 - 2022",
        }
    ]
}

const education = {
    icon: "",
    title: 'My education',
    description: "I have a background in computer science and architecture.",
    items: [
        {
            institution: "Ege University",
            position: "Computer Science",
            duration: "2015-2017",
        },
        {
            institution: "Kocaeli University",
            position: "Architecture",
            duration: "2017-2021",
        },
    ]
}

const skills = {
    title: 'Skills',
    description: "I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Next.js and more.",
    skillist: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
            className='min-h-[80vh] flex items-center justify-center pb-8 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[20px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-1 md:gap-6'>
                        <TabsTrigger className='p-1 md:p-3' value="experience">Experience</TabsTrigger>
                        <TabsTrigger className='p-1 md:p-3' value="education">Education</TabsTrigger>
                        <TabsTrigger className='p-1 md:p-3' value="skills">Skills</TabsTrigger>
                        <TabsTrigger className='p-1 md:p-3' value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>

                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[5px] md:gap-[30px] text-center xl:text-left'>
                                <h3 className='text-[24px] md:text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 md:gap-[30px] gap-2'>
                                        {experience.items.map((item) => {
                                            return (
                                                <li key={item.position} className='bg-[#232329] py-2 px-4 md:py-6 md:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] font-bold min-h-[40px] text-center lg:text-left'>{item.position}</h3>

                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[5px] md:gap-[30px] text-center xl:text-left'>
                                <h3 className='text-[24px] md:text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 md:gap-[30px] gap-2'>
                                        {education.items.map((item) => {
                                            return (
                                                <li key={item.position} className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] font-bold min-h-[30px] text-center lg:text-left'>{item.position}</h3>

                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className='w-full h-full'>
                            <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                                    <h3 className='text-[24px] md:text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillist.map((skill) => {
                                        return (
                                            <li key={skill.name}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full md:h-[150px] h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[5px] md:gap-[30px]'>
                                <h3 className='text-[24px] md:text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[800px] text-white/60 mx-auto xl:mx-0 '>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 md:gap-y-6 gap-y-2 max-w-[860px] mx-auto xl:mx-0'>
                                    {about.info.map((item) => {
                                        return (
                                            <li key={item.fieldName} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='tex-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume