import { usePage, } from '@inertiajs/react'
import { IconAlignLeft, IconBell, IconChevronRight } from '@tabler/icons-react'
import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'

export default function Navbar({ toggleSidebar }) {

    // destruct auth from props
    const { auth } = usePage().props;

    // destruct url from usePage
    const { url } = usePage();

    // define state isMobile
    const [isMobile, setIsMobile] = useState(false);

    // define useEffect
    useEffect(() => {
        // define handle resize window
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };

        // define event listener
        window.addEventListener('resize', handleResize);

        // call handle resize window
        handleResize();

        // remove event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    // define array links
    const links = [
        {
            title : 'Dashboard',
            active: url.startsWith('/apps/dashboard') ? true : false,
            details : [
                { title: 'Data Dashboard', href: '/apps/dashboard', active: url.startsWith('/apps/dashboard') ? true : false },
            ]
        },
        {
            title: 'User Management',
            active: url.startsWith('/apps/users') ? true : false || url.startsWith('/apps/roles') ? true : false || url.startsWith('/apps/permissions') ? true : false,
            details: [
                { title: 'Data Users', href: '/apps/users', active: url.startsWith('/apps/users') ? true : false },
                { title: 'Data Roles', href: '/apps/roles', active: url.startsWith('/apps/roles') ? true : false },
                { title: 'Data Permissions', href: '/apps/permissions', active: url.startsWith('/apps/permissions') ? true : false },
            ]
        },
        {
            title: 'Other',
            active: url.startsWith('/apps/profile') ? true : false,
            details: [
                { title: 'Profile', href: '/apps/profile', active: url.startsWith('/apps/profile') ? true : false },
            ]
        }
    ]

    return (
        <div className='py-8 px-4 md:px-8 h-16 flex justify-between items-center border-b bg-white'>
            <div className='flex items-center gap-4'>
                <button type='button' onClick={toggleSidebar} className='hidden md:block'>
                    <IconAlignLeft size={'20'} strokeWidth={'1.5'}/>
                </button>
                {links.map((link, i) => (
                    link.active === true &&
                    <div className='flex flex-row items-center gap-1 md:border-l-2 md:border-double px-4' key={i}>
                        <span className='text-sm font-semibold text-gray-600'>{link.title}</span>
                        <IconChevronRight size={'15'} strokeWidth={'1.5'}/>
                        {link.details.map((detail, x) => (
                            detail.active === true && <span className='text-sm font-semibold text-sky-500' key={x}>{detail.title}</span>
                        ))}
                    </div>
                ))}
            </div>
            <Dropdown auth={auth} isMobile={isMobile}/>
        </div>
    )
}
