import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router"
import { axiosInstance } from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'
import { CartData } from '../context/CartContext'
const Home = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    let { cartItems, setCartItems } = useContext(CartData)
    let getProducts = async () => {
        try {
            let res = await axiosInstance.get('products')
            setProducts(res.data)
            setIsLoading(false)

        } catch (error) {
            console.log(error, 'api error in home page')
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    const addToCart = (item) => {

        setCartItems((prev) => {
            const isAddedAlready = cartItems.some((currentItem) => currentItem.id === item.id)

            if (isAddedAlready) {
                return prev
            }
            return [...prev, { ...item, quantity: 1, isAdded: true }]

        }
        )
    }
    console.log(cartItems, 'added')
    return (
        <>
            <section className='flex-1 p-20 max-w-7xl m-auto'>
                <div className='flex justify-center items-center flex-col '>
                    <h1 className='font-instrument text-[160px]'>Tech Dopamine</h1>
                    <p>Gadgets for fun peoples</p>

                </div>
            </section>

            <section className='p-20 max-w-7xl m-auto'>
                <div>
                    <h2 className='text-xl font-regular'>Trending Products</h2>
                </div>
                <div className='grid grid-cols-4 gap-3 mt-8'>
                    {
                        isLoading ? (<div className='text-amber-800 font-geist text-2xl'>Getting you fun products...</div>) :

                            (
                                products.map((product) => <ProductCard addToCart={addToCart} key={product.id} product={product} />)
                            )

                    }
                </div>
            </section>
        </>

    )
}

export default Home