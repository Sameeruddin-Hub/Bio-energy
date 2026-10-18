import React, { useState } from 'react'

const Login = ({ settoggle }) => {

    const [formData, setFromdata] = useState({})

    return (
        <div className='bg-white p-6 rounded-xl flex flex-col gap-4'>
            <h1>Login</h1>
            <form action="" className='flex flex-col gap-4'>
                <input className='p-2 border border-gray-400 rounded w-90 ' type="text" placeholder='Email' name='email' />
                <input className='p-2 border border-gray-400 rounded w-90' type="text" placeholder='Password' name='password' />
                <button className='py-3 px-3 bg-blue-600 text-white rounded'>Login</button>
            </form>
            <p>Don't have an Account? <span className='text-blue-600 cursor-pointer' onClick={settoggle}>Register here</span></p>
        </div>

    )
}

export default Login;