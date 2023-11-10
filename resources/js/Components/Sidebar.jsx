import LinkItem from './LinkItem'
import hasAnyPermission from '@/Utils/Permissions'
import { IconBrandReact, IconLayout2, IconUserBolt, IconUserCheck, IconUsers } from '@tabler/icons-react'
import { usePage } from '@inertiajs/react'
import React from 'react'
export default function Sidebar({ isSidebarOpen }) {

    // destruct auth from props
    const { auth } = usePage().props;

    // define array links
    const links = [
        {
            title : 'DASHBOARD',
            details : [
                {title: 'Dashboard', href: '/apps/dashboard', icon: <IconLayout2 strokeWidth={'1.5'} size={'20'}/>, permissions: hasAnyPermission(['dashboard-access'])},
            ]
        },
        {
            title: 'USER MANAGEMENT',
            details: [
                {title: 'Users', href: '/apps/users', icon: <IconUsers strokeWidth={'1.5'} size={'20'}/>, permissions: hasAnyPermission(['users-access'])},
                {title: 'Roles', href: '/apps/roles', icon: <IconUserCheck strokeWidth={'1.5'} size={'20'}/>, permissions: hasAnyPermission(['roles-access'])},
                {title: 'Permissions', href: '/apps/permissions', icon: <IconUserBolt strokeWidth={'1.5'} size={'20'}/>, permissions: hasAnyPermission(['permissions-access'])},
            ]
        },
    ]

    return (
        <div className={`${isSidebarOpen ? 'w-[260px]' : 'w-[100px]'} bg-white min-h-screen overflow-y-auto hidden md:block relative z-10 border-r transition-all duration-300`}>
            {isSidebarOpen ?
                <>
                    <div className='flex justify-center items-center px-6 py-3 h-16 border-b'>
                        <div className='text-2xl font-bold text-gray-700 text-center leading-loose tracking-wider'>
                            STARTER
                        </div>
                    </div>
                    <div className='w-full px-6 py-3 flex items-center gap-4 border-b bg-gray-100'>
                        <img src={auth.user.avatar} className='w-12 h-12 rounded-full'/>
                        <div className='flex flex-col gap-0.5'>
                            <div className='text-gray-700 text-sm'>{auth.user.name}</div>
                            <div className='text-gray-400 text-xs'>{auth.user.email}</div>
                        </div>
                    </div>
                    <div className='px-6 py-1 w-full flex flex-col overflow-y-auto'>
                        {links.map((link, i) => (
                            <div className='py-2' key={i}>
                                <div className='uppercase text-xs font-semibold py-2 text-gray-700'>
                                    {link.title}
                                </div>
                                {link.details.map((detail, x) =>  <LinkItem isSidebarOpen={isSidebarOpen} link={detail} key={x}/>)}
                            </div>
                        ))}
                    </div>
                </>
                :
                <>
                   <div className='flex justify-center items-center px-6 py-3 h-16 border-b'>
                        <IconBrandReact size={'20'} strokeWidth={'1.5'} className='text-gray-700'/>
                    </div>
                    <div className='w-full px-6 py-3 flex justify-center items-center gap-4 border-b bg-gray-100'>
                        <img src={auth.user.avatar} className='w-8 h-8 rounded-full'/>
                    </div>
                    <div className='px-6 py-1 w-full flex flex-col overflow-y-auto items-center justify-center gap-2'>
                        {links.map((link, i) => (
                            <div className='py-2 flex flex-col gap-4 border-b border-dashed' key={i}>
                                {link.details.map((detail, x) => <LinkItem isSidebarOpen={isSidebarOpen} link={detail} key={x}/>)}
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}
