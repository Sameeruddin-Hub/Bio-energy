import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router'

export const MainLayout = () => {
    return (
        <div className='h-screen p-4 flex grid grid-cols-[1fr_7fr]'>
            <Navbar />
            <div className='h-screen overful-auto' >
                <Outlet />

            </div>
        </div>
    )
}
