import React, { useState, useContext } from 'react';
import { MyStore } from '../context/MyContext';


const Navbar = () => {
    const { setCartOpen } = useContext(MyStore);

    function cartOpen() {
        setCartOpen(true)
    }
    return <div className='p-4 bg-gray-700 flex justify-between items-center '>
        <p className="text-lg text-white cursor-pointer">Logo</p>
        <div className='flex gap-3'>
            <p className='text-small text-white hover:text-blue-500 cursor-pointer' onClick={() => { setCartOpen(false) }}>Home</p>
            <p className='text-small text-white hover:text-blue-500 cursor-pointer' onClick={cartOpen}>Cart</p>

        </div>
        <button className='bg-blue-500 rounded px-3 py-2 font-md text-white cursor-pointer'>Login</button>
    </div>
}

export default Navbar;