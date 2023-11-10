import React from 'react'

export default function Input({label, type, className, errors, ...props}) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-gray-600 text-sm'>{label}</label>
            <input
                type={type}
                className={`w-full px-3 py-1.5 border bg-white text-sm rounded-md focus:outline-none focus:ring-0 text-gray-700 focus:border-sky-500 border-gray-200 ${className}`}
                {...props}
            />
            {errors && (
                <small className='text-xs text-red-500'>{errors}</small>
            )}
        </div>
    )
}
