import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-0'>
        {children}
    </div>
  )
}
