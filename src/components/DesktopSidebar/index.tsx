"use client"
import React, { useState } from 'react'
import useRoutes from '@/app/hooks/useRoutes';
import DesktopItem from '@/components/DesktopItem'; // Assuming you have a component named DesktopItem
import Avatara from '../Avatara';

const DesktopSidebar = () => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='hidden pt-44 lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between'> 
            <nav className='mt-4 flex flex-col justify-between'>
                <ul role='list' className='flex flex-col items-center space-y-3'>
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onclick}
                        />
                    ))}
                </ul>
            </nav>
            <nav className='mt-4 flex flex-col justify-between items-center'>
                 <div  onClick={() => setIsOpen(true)} className='cursor-pointer hover:opacity-75 transition'>
                   <Avatara />
                 </div>
            </nav>
        </div>
    );
}

export default DesktopSidebar;
