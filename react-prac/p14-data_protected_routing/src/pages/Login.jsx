import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'



const Login = () => {

    const { registeredUsers, loggedInUser, setLoggedInUser } = useContext(Auth);

    let navigate = useNavigate();

    let { register, handleSubmit, reset, formState: { errors } } = useForm();

    const loginFormSubmit = (data) => {
        let user = registeredUsers.find((val) => val.email === data.email && val.password === data.password)

        if (!user) {
            toast.error('Invalid or user not found')
            return;
        }
        setLoggedInUser(user)
        localStorage.setItem('registeredUsers', JSON.stringify(user))
        toast.success('Successfully logged in!')
        navigate('/main')
        reset();
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
                    <p className="text-gray-500 mt-2">
                        Login to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(loginFormSubmit)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            {...register('Email', {
                                required: 'Email is required',
                                minLength: {
                                    message: 'Give proper Email',
                                }
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />

                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            {...register('Password', {
                                required: 'Password is required',
                                minLength: {
                                    message: 'Give proper password',
                                }
                            })}
                            type="password"
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate('/register')}
                        type="button"
                        className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login