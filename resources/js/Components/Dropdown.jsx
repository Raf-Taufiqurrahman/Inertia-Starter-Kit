import React, { useState } from 'react'
import LinkItem from './LinkItem'
import hasAnyPermission from '@/Utils/Permissions'
import { Menu, Transition  } from '@headlessui/react'
import { Link } from '@inertiajs/react'
import { IconLogout, IconX, IconLayout2, IconUserBolt, IconUserCheck, IconUsers, IconUserCog  } from '@tabler/icons-react'
import { useForm } from '@inertiajs/react'
export default function Dropdown({ auth, isMobile }) {

    // define useform helper inertia
    const { post } = useForm();

    // define state isToggle
    const [isToggle, setIsToggle] = useState(false);

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

     // define method logout
    const logout = async (e) => {
        e.preventDefault();

        post(route('logout'));
    }

    return (
        <>
            {isMobile === false ?
                <Menu className='relative z-50' as="div">
                    <Menu.Button className='flex items-center rounded-full'>
                        <img src={auth.user.avatar} alt={auth.user.name} className='w-10 h-10 rounded-full border border-sky-500'/>
                    </Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className='absolute bg-white rounded-lg w-48 border border-gray-100 mt-2 py-2 right-0 z-50'>
                            <div className='flex flex-col gap-1.5 divide-y'>
                                <Menu.Item>
                                    <Link href="/apps/profile" className='px-3 py-1.5 text-sm text-gray-700 flex items-center gap-2 hover:text-sky-700'>
                                        <IconUserCog strokeWidth={'1.5'} size={'20'}/> Profile
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <button onClick={logout} className='px-3 py-1.5 text-sm text-gray-700 flex items-center gap-2 hover:text-sky-700'>
                                        <IconLogout strokeWidth={'1.5'} size={'20'}/>
                                        Logout
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                :
                <>
                    <button className="flex items-center" onClick={() => setIsToggle(!isToggle)}>
                        <img src={auth.user.avatar} alt={auth.user.name} className='w-8 h-8 rounded-full border border-sky-500'/>
                    </button>
                    {isToggle &&
                        <div className='fixed top-0 right-0 z-50 w-[300px] h-full ease-in-out transition-all duration-1000 transform bg-white border-l'>
                            <div className='py-2 px-4 h-16 border-b flex items-center justify-between'>
                                <div className="flex items-center gap-2">
                                    <img src={auth.user.avatar} alt={auth.user.name} className='w-10 h-10 rounded-full border border-sky-500'/>
                                    <div>
                                        <div className='text-sm font-semibold'>
                                            {auth.user.name}
                                        </div>
                                        <div className='text-xs text-gray-500'>{auth.user.email}</div>
                                    </div>
                                </div>
                                <div>
                                    <button className='flex items-center' onClick={() => setIsToggle(!isToggle)}>
                                        <IconX size={'20'} strokeWidth={'1.5'}/>
                                    </button>
                                </div>
                            </div>
                            <div className='py-1 w-full flex flex-col overflow-y-auto'>
                                {links.map((link, i) => (
                                    <div className='py-2' key={i}>
                                        <div className='uppercase text-sm font-bold px-2 mb-3 text-gray-700'>
                                            {link.title}
                                        </div>
                                        {link.details.map((detail, x) =>  (
                                            <LinkItem isSidebarOpen={true} link={detail} key={x} onClick={() => setIsToggle(!isToggle)}/>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}
