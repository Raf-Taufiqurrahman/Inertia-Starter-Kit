import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'

export default function AppLayout({children}) {

    // define state isSidebarOpen
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // define handle toggleSidebar
    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className='min-h-screen flex overflow-y-auto'>
            <Sidebar isSidebarOpen={isSidebarOpen}/>
            <div className='flex-1 flex-col relative z-10 h-screen overflow-y-auto'>
                <Navbar toggleSidebar={toogleSidebar}/>
                <div className='w-full py-8 px-4 md:px-6 min-h-screen overflow-y-auto mb-14 md:mb-0'>
                    <Toaster position="top-right"/>
                    {children}
                </div>
            </div>
        </div>
    )
}
