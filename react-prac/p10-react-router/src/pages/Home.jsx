import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
    return (
        <div className='text-white'>
            <p>Home page is ready</p>
            <Outlet />
        </div>
    )
}
export default Home;