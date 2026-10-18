import React from 'react';
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='bg-blue-500 text-white p-4 flex justify-between items-center'>
            <p>Logo</p>
            <div className='flex gap-3'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/services"}>Services</NavLink>
            </div>
            <button> Login</button>
        </div>
    )
}

export default Navbar;