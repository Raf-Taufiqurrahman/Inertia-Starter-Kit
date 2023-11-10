import React from 'react'

export default function Card({title, icon, children}) {
    return (
        <div className='bg-white rounded-lg'>
            <div className='border-b px-6 py-3 rounded-t-lg'>
                <div className='flex items-center gap-2'>
                    {icon}
                    <h1 className='font-semibold text-sm uppercase'>{title}</h1>
                </div>
            </div>
            <div className='px-6 py-4'>
                {children}
            </div>
        </div>
    )
}
