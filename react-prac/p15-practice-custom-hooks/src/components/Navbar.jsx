import React, { useContext } from 'react'
import { Outlet, NavLink, useLocation, Navigate } from 'react-router';
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify';

const Navbar = () => {
    // let data = useLocation()
    const { setLoggedInUser } = useContext(Auth)
    return (
        <div className='border-r  h-screen border-gray-500 flex flex-col  justify-between'>
            <div className='flex flex-col gap-10'>
                <h1 className='font-medium'>Logo</h1>
                <div className='flex flex-col gap-4 ml-5'>
                    <NavLink className={({ isActive }) => {
                        return isActive ? 'text-semibold text-red-500' : 'text-black border-b border-gray-300'
                    }} to={'/main'} end>Home</NavLink>
                    <NavLink className={({ isActive }) => {
                        return isActive ? 'text-semibold text-red-500' : 'text-black border-b border-gray-300'
                    }} to={'/main/users'}>Users</NavLink>
                    <NavLink className={({ isActive }) => {
                        return isActive ? 'text-semibold text-red-500' : 'text-black border-b border-gray-300'
                    }} to={'/main/products'}>Products</NavLink>

                </div>
            </div>
            <button onClick={() => {
                localStorage.removeItem('loggedUser');
                // return <Navigate to={'/'} />;
                toast.success('Logout successfully')
                setLoggedInUser(null)

            }
            } className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer '>Logout</button>
        </div >
    )
}
export default Navbar;
