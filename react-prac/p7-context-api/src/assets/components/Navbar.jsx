import React, { useContext } from 'react';
import { MyShop } from '../context/MyWebsite';


function Navbar() {

    let { setIsCartopen } = useContext(MyShop)

    return (
        <div className='flex justify-between items-center p-4 bg-gray-700 text-white  mx-auto'>
            <div className='text-xl font-bold cursor-pointer'>Logo</div>
            <div className='flex gap-3'>
                <p className='hover:text-blue-300 cursor-pointer' onClick={() => setIsCartopen(true)}>Home</p>
                <p className='hover:text-blue-300 cursor-pointer' onClick={() => setIsCartopen(false)}>Cart</p>
            </div>
            <button className='bg-blue-500 px-4 py-2 rounded text-white cursor-pointer'>Login</button>
        </div>
    )
}

export default Navbar