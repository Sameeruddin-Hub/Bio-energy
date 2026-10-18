import React from 'react'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'

const RHF = () => {
    let { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const formRef = useRef({})
    return (
        <div>
            <div className='flex w-80  flex-col bg-white p-4 rounded-md'>
                <p className='text-lg font-semibold text-gray-700 mb-4'>Product Name</p>

                <form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col gap-2'>
                    <input {...register('productName')} type='text' placeholder='Product Name' className='border p-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input {...register('category')} type='text' placeholder='Category' className='border p-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input {...register('description')} type='text' placeholder='Description' className='border p-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input {...register('price')} type='text' placeholder='Price' className='border p-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RHF