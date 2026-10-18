import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-blue-900 p-6'>

            <h1 className='text-white'>Logo</h1>
            <div className='flex gap-4 items-center'>
                {/* <p className='text-white cursor-pointer'>Home</p>
                <p className='text-white cursor-pointer'>About</p>
                <p className='text-white cursor-pointer'>Contact</p> */}

                <NavLink className={'text-white'} to={"/"}>Home</NavLink >
                <NavLink className={'text-white'} to={"/about"}>About</NavLink >
                <NavLink className={'text-white'} to={"/contact"}>Contact</NavLink >


            </div>
            <button className='text-white'>Login</button>

        </div>
    )
}
export default Navbar;