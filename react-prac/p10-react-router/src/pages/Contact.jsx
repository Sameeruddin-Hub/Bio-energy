import React from 'react'
import { Outlet } from 'react-router'

const Contact = () => {
    return (
        <div className='text-white'>Contact
            <Outlet />
        </div>
    )
}

export default Contact