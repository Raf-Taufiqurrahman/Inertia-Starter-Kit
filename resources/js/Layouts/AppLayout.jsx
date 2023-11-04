import React from 'react'

export default function AppLayout({children}) {
  return (
    <div className='min-h-screen flex overflow-y-auto'>
        <div className='flex-1 flex-col relative z-0 overflow-y-auto h-screen'>
            <div className='w-full py-8 px-4 md:px-6 min-h-screen overflow-y-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}
