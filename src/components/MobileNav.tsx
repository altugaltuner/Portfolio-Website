"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";


const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]
const MobileNav = () => {

    const pathname = usePathname();
    const [visible, setVisible] = useState(false);

    const handleSheet = () => {
        setVisible(false);
    }

    return (
        <Sheet open={visible} onOpenChange={setVisible}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] tet-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <h1 className='text-4xl font-semibold'>
                        <Link href="/" onClick={handleSheet}>
                            <h1>Altuğ <span className='text-accent'>.</span>
                            </h1>
                        </Link>
                    </h1>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.path} onClick={handleSheet}
                                href={link.path} className={` ${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav