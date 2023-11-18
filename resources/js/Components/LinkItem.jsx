import React from 'react'
import { Link, usePage } from '@inertiajs/react'
export default function LinkItem({ link, isSidebarOpen, logout, ...props }) {

    // destruct url from usepage
    const { url } = usePage();

    // destruct auth from usepage props
    const { auth } = usePage().props;

    return (
        <>
            {
                auth.super === true ?
                    isSidebarOpen ?
                        <Link
                            href={link.href}
                            className={`${url.startsWith(link.href) ? ' border-r-2 border-r-sky-300  text-sky-600 bg-sky-100' : '' } flex items-center font-medium gap-x-3.5 p-3 text-gray-500 hover:border-r-2 hover:border-r-sky-300 hover:text-sky-500 capitalize hover:cursor-pointer text-sm`}
                            {...props}
                        >
                            {link.icon} {link.title}
                        </Link>
                    :
                        <Link
                            href={link.href}
                            className={` ${url.startsWith(link.href) ? 'border-sky-300 border-r-2 bg-sky-50 text-sky-600' : ''}  text-gray-500 min-w-full flex justify-center py-3 hover:border-r-2 hover:border-r-sky-300 hover:text-sky-500 hover:cursor-pointer`}
                            {...props}
                        >
                            {link.icon}
                        </Link>
                :
                link.permissions === true ?
                    isSidebarOpen ?
                        <Link
                            href={link.href}
                            className={`${url.startsWith(link.href) ? ' border-r-2 border-r-sky-300  text-sky-600 bg-sky-100' : '' } flex items-center font-medium gap-x-3.5 p-3 text-gray-500 hover:border-r-2 hover:border-r-sky-300 hover:text-sky-500 capitalize hover:cursor-pointer text-sm`}
                            {...props}
                        >
                            {link.icon} {link.title}
                        </Link>
                    :
                        <Link
                            href={link.href}
                            className={` ${url.startsWith(link.href) ? 'border-sky-300 border-r-2 bg-sky-50 text-sky-600' : ''}  text-gray-500 min-w-full flex justify-center py-3 hover:border-r-2 hover:border-r-sky-300 hover:text-sky-500 hover:cursor-pointer`}
                            {...props}
                        >
                            {link.icon}
                        </Link>
                :
                null
            }
        </>

    )
}
