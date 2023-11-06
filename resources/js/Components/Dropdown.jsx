import React from 'react'
import { Menu } from '@headlessui/react'
import { Link } from '@inertiajs/react'
import { IconLogout } from '@tabler/icons-react'
import { useForm } from '@inertiajs/react'
export default function Dropdown({auth}) {

    // define useform helper inertia
    const { post } = useForm();

     // define method logout
    const logout = async (e) => {
        e.preventDefault();

        post(route('logout'));
    }

    return (
        <Menu className='relative z-50' as='div'>
            <Menu.Button className='flex items-center rounded-full'>
                <img src={auth.user.avatar} alt={auth.user.name} className='w-8 h-8 rounded-full border border-sky-500'/>
            </Menu.Button>
            <Menu.Items className='absolute bg-white rounded-lg w-48 border border-gray-100 mt-2 py-1 right-0 z-50'>
                <Menu.Item>
                    <button onClick={logout} className='px-3 py-1.5 rounded-lg text-sm text-gray-700 flex items-center gap-2 hover:text-sky-700'>
                        <IconLogout className='w-5 h-5' strokeWidth={'1.2'}/>
                        <span>Logout</span>
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
