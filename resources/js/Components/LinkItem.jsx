import React from 'react'
import { Link, usePage } from '@inertiajs/react'
export default function LinkItem({ link, isSidebarOpen, ...props }) {

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
                            className={`${url.startsWith(link.href) ? ' border-l-2 border-l-sky-300  text-sky-600 bg-sky-100' : '' } flex items-center font-medium gap-x-3.5 py-2 px-2.5 text-gray-500 hover:border-l-2 hover:border-l-sky-200 hover:text-sky-500 capitalize hover:cursor-pointer text-sm`}
                            {...props}
                        >
                            {link.icon} {link.title}
                        </Link>
                    :
                        <Link
                            href={link.href}
                            className={`px-3 py-1 ${url.startsWith(link.href) ? 'border-l-2 bg-sky-100 border-l-sky-200 text-sky-600' : ''} hover:bg-sky-100 hover:border-l-sky-200 hover:border-l-2 text-gray-500`}
                            {...props}
                        >
                            {link.icon}
                        </Link>
                :
                link.permissions === true ?
                    isSidebarOpen ?
                        <Link
                            href={link.href}
                            className={`${url.startsWith(link.href) ? ' border-l-2 border-l-sky-300  text-sky-600 bg-sky-100' : '' } flex items-center font-medium gap-x-3.5 py-2 px-2.5 text-gray-500 hover:border-l-2 hover:border-l-sky-200 hover:text-sky-500 capitalize hover:cursor-pointer text-sm`}
                            {...props}
                        >
                            {link.icon} {link.title}
                        </Link>
                    :
                    <Link
                        href={link.href}
                        className={`px-3 py-1 ${url.startsWith(link.href) ? 'border-l-2 bg-sky-100 border-l-sky-200 text-sky-600' : ''} hover:bg-sky-100 hover:border-l-sky-200 hover:border-l-2 text-gray-500`}
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
