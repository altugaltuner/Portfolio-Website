"use client";
import CountUp from 'react-countup';

const stats = [
    {
        num: 1,
        text: 'Years of Experience'
    },
    {
        num: 5,
        text: 'Projects Completed'
    },
    {
        num: 8,
        text: 'Technologies Used'
    },
    {
        num: 683,
        text: 'Code Commits'
    },
]

const Stats = () => {
    return (
        <section className='pt-4 pb-4'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap- max-w-[80vw] mx-auto xl:max-w-none gap-5'>
                    {stats.map((item, index) => {
                        return (
                            <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                                <CountUp end={item.num} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold' />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats