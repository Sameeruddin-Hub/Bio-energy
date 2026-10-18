import React from 'react'
import { useState, useRef } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({})
    const formRef = useRef({})

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <div className='flex w-80  flex-col bg-white p-4 rounded-md'>
            <p className='text-lg font-semibold text-gray-700'>Product Details</p>

            <form className='flex flex-col gap-4'>
                <input onChange={handleChange} ref={(e) => formRef.current.productName = e} type='text' placeholder='Product Name' name='prouductName' className='border p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <input className='border border-gray-300 p-2' type='text' placeholder='Product Name' />
                <input className='border border-gray-300 p-2' type='text' placeholder='Price' />
                <span>Select category</span>
                <select>
                    <option value='MENS'>Mens</option>
                    <option value='WOMEN'>Womens</option>
                    <option value='KIDS'>Kids</option>

                </select>
                <input className='border border-gray-300 p-2' type="text" placeholder='image' />
                <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Submit</button>
            </form>
        </div>
    )
}

export default Form