import React from 'react'

const Navbar = ({ setToggle }) => {
    return (
        <div className='flex bg-gray-700 justify-between items-center  p-4 '>
            <div>
                {/* <img src="" alt="" /> */}
                <h1 className='text-white text-[32] font-bold'>Hello</h1>
            </div>

            <div className='flex gap-4 text-white'>
                <span className='cursor-pointer'>Home</span>
                <span className='cursor-pointer'>About</span>
                <span className='cursor-pointer'>Contact</span>
            </div>
            <button onClick={() => setToggle((prev) => !prev)} className='bg-blue-600 p-2 cursor-pointer text-white rounded-lg'>Create User</button>
        </div>
    )
}

export default Navbar