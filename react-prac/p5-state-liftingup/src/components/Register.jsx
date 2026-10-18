import React, { useState } from 'react'

const Register = ({ setUsers, setToggle }) => {
    const [formData, setFormdata] = useState({});
    // console.log(formData)
    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData])
        console.log('hello')
        setFormdata({
            name: '',
            email: '',
            password: ''
        })
    }
    return (
        <div className='bg-white p-6 rounded-xl flex flex-col gap-4'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
                <input onChange={handleChange} value={formData.name} className='p-2 border border-gray-400 rounded w-90 ' type="text" placeholder='Name' name='name' />
                <input onChange={handleChange} value={formData.email} className='p-2 border border-gray-400 rounded w-90 ' type="text" placeholder='Email' name='email' />
                <input onChange={handleChange} value={formData.password} className='p-2 border border-gray-400 rounded w-90' type="password" placeholder='Password' name='password' />
                <button onClick={handleSubmit} className='py-3 px-3 bg-blue-600 text-white rounded cursor-pointer'>Register</button>
            </form>
            <p>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={setToggle}>Login here</span></p>
        </div>

    )
}

export default Register;