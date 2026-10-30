import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'


export const useAuth = () => {
    let { registeredUsers, setRegisteredUsers, setLoggedInUser } = useContext(Auth)

    let { register, handleSubmit, reset, getValues, formState: { errors } } = useForm();
    let navigate = useNavigate();


    //login logic
    const loginFormData = (data) => {
        // console.log(data, errors, "loginform")
        let user = registeredUsers.find((val) => val.email === data.email && val.password === data.password)
        if (!user) {
            toast.error('user not found, check credentials')
            return;
        }
        setLoggedInUser(user);
        localStorage.setItem('loggedUser', JSON.stringify(user))
        toast.success('Successfully loggedin')
        reset();
        navigate('/main')


    }
    //rgeisterd logic
    const registerFormData = (data) => {
        let arr = [...registeredUsers, data];
        setRegisteredUsers(arr);
        localStorage.setItem('registeredUsers', JSON.stringify(arr))
        reset()
        navigate('/main')
        toast.success('user registered successfully')
        setLoggedInUser(data);
        localStorage.setItem('loggedUser', JSON.stringify(data));


    }

    return {
        navigate, register, reset, getValues, handleSubmit, errors, loginFormData, registerFormData
    }
}