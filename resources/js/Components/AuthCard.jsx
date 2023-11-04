import React from 'react'

export default function AuthCard({children}) {
  return (
    <div className='w-full max-w-lg border'>
        <div className='flex justify-end items-center gap-4 bg-gray-100 rounded-t-2xl px-4 py-5'>
            <div className='flex flex-row gap-4'>
                <div className='w-4 h-4 rounded-full bg-rose-500'></div>
                <div className='w-4 h-4 rounded-full bg-yellow-500'></div>
                <div className='w-4 h-4 rounded-full bg-green-500'></div>
            </div>
        </div>
        <div className='p-8 bg-white rounded-b-2xl'>
            {children}
        </div>
    </div>
  )
}
