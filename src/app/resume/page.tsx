"use client";

import { title } from 'process';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const about = {
    title: 'About Me',
    description: "I'm a front end developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Next.js and more. I'm always looking to learn new things and improve my skills, and I'm excited to take on new challenges and projects.",
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Altuğ Altuner',
        },
        {
            fieldName: 'Phone',
            fieldValue: '05395830718',
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
    description: "",
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
    description: "lorem ipsum dolor sit amet",
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
    description: "lorem ipsum dolor sit amet",
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
            icon: <FaJs />,
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
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className='w-full'>experience</TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default Resume