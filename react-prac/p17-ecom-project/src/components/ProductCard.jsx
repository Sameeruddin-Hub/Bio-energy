import React, { useContext } from 'react'
import { CartData } from '../context/CartContext'



const ProductCard = ({ product, addToCart }) => {
    // console.log(product)
    let { cartItems, setCartItems } = useContext(CartData)
    const isAdded = cartItems.some((item) => item.id === product.id)

    return (
        <div className='group cursor-pointer rounded-xl border border-white hover:border-slate-600'>
            <div className='h-80 overflow-hidden p-4'>
                <img src={product.image} alt="" className='h-full w-full object-contain' />
            </div>
            <div className='p-6 flex-col flex gap-4'>
                <p className='text-sm  uppercase'>{product.category}</p>
                <h4 className='text-2xl font-regualr line-clamp-2'> {product.title}</h4>
                <span className='text-xl '>${product.price}</span>
                <div>
                    <button onClick={() => { addToCart(product) }} className='px-4 w-full cursor-pointer py-2 rounded-full border-1 border-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white '>{isAdded ? 'Added to cart' : 'Add to cart'}</button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard