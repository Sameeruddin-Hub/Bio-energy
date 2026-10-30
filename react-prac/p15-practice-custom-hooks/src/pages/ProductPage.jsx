import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductPage = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    let getProducts = async () => {
        try {
            let response = await axiosInstance.get('/products')
            setProductsData(response.data)
            setIsLoading(false)
            console.log(productsData, "data")
        } catch (error) {

        }

    }
    useEffect(() => {
        getProducts()
    }, [])
    if (isLoading) return <h2>Loading data...</h2>

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                productsData.map((val) => <ProductCard key={val.id} product={val} />)
            }
        </div>
    )
}

export default ProductPage