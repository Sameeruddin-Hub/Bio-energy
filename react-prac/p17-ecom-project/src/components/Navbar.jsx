import React from 'react'
import { Link, NavLink } from 'react-router'
import { ShoppingBag } from 'lucide-react'

const Navbar = () => {
    let navClass = ({ isActive }) => `
    
    ${isActive
            ? "text-slate-900 after:scale-x-100 font-semibold"
            : "text-slate-700 after:scale-x-0 hover:text-slate-900 hover:font-semibold hover:after:scale-x-100"
        } ;
    `
    return (
        <div className='p-6 flex justify-between items-center max-w-7xl m-auto'>
            <Link className="font-instrument text-3xl font-medium" to={'/'}>Melon Mart</Link>
            {/* <h1 className='font-instrumental text-3xl'>Melon Mart</h1> */}
            <nav className='flex gap-6'>
                <NavLink className={navClass} end to='/home'>Home</NavLink>
                <NavLink className={navClass} to='/home/shop'>shop</NavLink>
                <NavLink className={navClass} to='/home/cart'>Cart</NavLink>
            </nav>
            <div className='gap-10 flex items-center'>
                <div>
                    <ShoppingBag />
                </div>
                <button className='py-2 px-5 bg-slate-900 rounded-full text-white cursor-pointer'>Logout</button>
            </div>
        </div >
    )
}

export default Navbar