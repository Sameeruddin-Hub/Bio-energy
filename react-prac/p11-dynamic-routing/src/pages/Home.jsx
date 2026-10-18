import React, { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router';
import { MyStore } from '../context/MyContext.jsx'
import ProductCard from '../components/ProductCart.jsx'
import axios from 'axios'

const Home = () => {

    let { setProductsData, productsData } = useContext(MyStore);
    let getData = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products')
            setProductsData(res.data.products)

        } catch (error) {
            console.log(error, "api error")
        }
    }
    console.log(productsData, "productsData")

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='grid grid-cols-5 gap-4 p-6'>

            {productsData.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
            <Outlet />

        </div>
    )
}

export default Home