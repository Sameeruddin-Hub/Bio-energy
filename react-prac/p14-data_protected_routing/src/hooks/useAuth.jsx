import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'


export const useAuth = () => {
    const { registeredUsers, setRegisteredUsers, } = useContext(Auth);
    let navigate = useNavigate();
    let { register, handleSubmit, reset, formState: { errors } } = useForm();

    const registeredFormSubmit = (data) => {
        let arr = [...registeredUsers, data];
        setRegisteredUsers(arr)
        localStorage.setItem('registeredUsers', JSON.stringify(arr))
        toast.success('User signiup is successfull!')
        reset();
    }

    return {
        navigate, register, handleSubmit, reset, errors, registeredFormSubmit
    }
}