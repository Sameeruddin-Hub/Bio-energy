import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col '>
            <div className='sticky top-0'>
                <Navbar />

            </div>
            <main className='flex-1'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout