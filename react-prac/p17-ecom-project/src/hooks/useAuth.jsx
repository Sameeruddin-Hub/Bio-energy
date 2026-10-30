import React, { useState, useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'


const useAuth = () => {
    let navigate = useNavigate();
    let { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({ mode: 'onChange' });
    let { setLoggedUser, registeredUsers, loggedUser, setRegisteredUsers } = useContext(Auth);
    // console.log(registeredUsers)
    const loginFormData = (data) => {
        // console.log(data)
        let arr = data;
        let user = registeredUsers.find((val) => {
            return val.email === arr.email && val.password === arr.password;
        })
        console.log(user)
        if (!user) {
            toast.error('invalid credentials or user not found')

            reset()
            return
        }
        setLoggedUser(user)
        localStorage.setItem('loggedUser', JSON.stringify(user))
        toast.success('logged in successfully')
        reset();
        navigate('/main')


    }
    const registerFormData = (data) => {
        let user = registeredUsers.find((val) => data.email === val.email)

        if (user) {
            toast.error('User already registered')
            return
        }

        let arr = [...registeredUsers, data];

        setRegisteredUsers(arr)
        setLoggedUser(data)
        localStorage.setItem('loggedUser', JSON.stringify(data))
        localStorage.setItem('registeredUsers', JSON.stringify(arr))

        reset()
        navigate('/main')
        toast.success('successfully user registerd')

    }
    return { navigate, register, handleSubmit, getValues, reset, errors, loginFormData, registerFormData }
}

export default useAuth;