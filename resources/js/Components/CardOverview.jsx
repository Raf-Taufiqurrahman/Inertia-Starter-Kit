import React from 'react'

export default function CardOverview({title, icon, subtitle, className, children, color}) {
    return (
        <div className={`${className} bg-white p-4 rounded-lg shadow`}>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex items-center gap-3'>
                    <div className={`p-2 rounded-lg ${color}`}>
                        {icon}
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>{title}</div>
                        <div className='text-xs text-gray-500'>{subtitle}</div>
                    </div>
                </div>
                <div className='font-semibold text-lg font-mono p-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}
