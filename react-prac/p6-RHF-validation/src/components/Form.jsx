import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const Form = ({ setUsers, setToggle, users, updatedData }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange', defaultValues: updatedData })

    const formHandle = (data) => {
        // console.log(data, "data is here")
        if (updatedData) {
            setUsers((prev) => {
                return prev.map((val) => {
                    return val.id === updatedData.id ? { ...data } : val;
                })
            })
        } else {
            let dataWithId = { ...data, id: nanoid() }
            // console.log(dataWithId)
            let arr = [...users, dataWithId]
            setUsers(arr)
            localStorage.setItem('users', JSON.stringify(arr))
        }

        setToggle((prev) => !prev)
        reset()
    }

    return (
        <div className='flex justify-center pt-20  items-start h-full'>
            <div className='flex flex-col p-6 items-start bg-gray-700 rounded-lg w-1/4'>
                <h2 className='text-xl font-bold text-white mb-4'>User Form</h2>
                <form onSubmit={handleSubmit(formHandle)} className='flex flex-col gap-4 w-full'>
                    <input {...register('name', {
                        required: "Name is required",
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Name should be in alphabets only",
                        }
                    })} type="text" className='w-full p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-500 ' placeholder='Name' />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <input {...register('email', {
                        required: "Email is required", pattern: {
                            message: 'Email should be valid format'
                        }
                    })} type="text" className='w-full p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-500 ' placeholder='Email' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <input {...register('mobile', {
                        required: "Mobile is required",
                        minLength: {
                            value: 10,
                            message: 'Mobile number should be 10 digits'
                        },
                        maxLength: {
                            value: 10,
                            message: "mobile number should be 10 digits"
                        }
                    })} type="text" className='w-full p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-500 ' placeholder='Mobile' />
                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}

                    <input {...register('imageUrl', { required: "Image URL is required" })} type="text" className='w-full p-2 rounded-md text-white placeholder:text-gray-400 border border-gray-500 ' placeholder='Image Url' />
                    {errors.imageUrl && <p className='text-red-500'>{errors.imageUrl.message}</p>}

                    <button className='bg-blue-600 text-white p-2 rounded-md cursor-pointer hover:bg-blue-700'>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default Form