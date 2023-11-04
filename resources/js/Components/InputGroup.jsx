import React from 'react'

export default function InputGroup({label, icon, type, placeholder, errors, ...props}) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-500 font-medium'>
                {label}
            </label>
            <div className='flex'>
                <span className='flex items-center px-3 sm:text-sm rounded-l-md bg-gray-100 border border-r-0'>
                    {icon}
                </span>
                <input
                    type={type}
                    className='w-full border  border-gray-200 bg-gray-100 rounded-r-md sm:text-sm py-2 px-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-teal-500'
                    placeholder={placeholder}
                    {...props}
                    />
            </div>
            {errors &&
                <small className='text-rose-500 text-sm'>{errors}</small>
            }
        </div>
    )
}
