import React, { useContext } from 'react'
import { Plus, Minus, Trash, ArrowRight } from 'lucide-react'
import { CartData } from '../context/CartContext'

const Cart = () => {
    let { cartItems, setCartItems } = useContext(CartData)

    const deleteItemFromCart = (id) => {
        setCartItems((prev) => {
            return prev.filter((item) => item.id !== id
            )
        })
    }
    const incQuant = (id) => {
        setCartItems((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity || 1) + 1 }
                }
                return item
            }
            )
        })
    }
    const decQuan = (id) => {
        setCartItems((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity ?? 1) - 1 }
                }
                return item
            })
                .filter((item) => item.quantity > 0);
        })
    }

    const subTotal = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)

    // console.log(cartItems)
    return (
        <section className='flex-1 '>
            <div className='px-40 pt-20 pb-20'>
                <div>
                    <p className='font-geist text-lg text-gray-800 uppercase'>Your bag </p>
                    <h3 className='text-5xl font-instrument '>{cartItems.length} Itmes. </h3>
                </div>

                <div className='flex gap-6'>
                    <div className='grid grid-col-1 mt-20 w-2/3 '>
                        {cartItems.map((cartItem) => (
                            <div key={cartItem.id} className='flex  border-b border-gray-400'>
                                <div className='h-60 p-6 overflow-hidden'>
                                    <img className='w-full h-full object-contain' src={cartItem.image} alt="" />
                                </div>
                                <div className='p-6 flex-col flex gap-4'>
                                    <p className='text-sm  uppercase'>{cartItem.category}</p>
                                    <h4 className='text-2xl font-regualr tracking-widest'> {cartItem.title}</h4>
                                    <span className='text-xl '>${cartItem.price}</span>

                                </div>
                                <div className='flex flex-col p-6 items-end gap-8'>
                                    <div className='cursor-pointer' onClick={() => { deleteItemFromCart(cartItem.id) }}>
                                        <Trash />
                                    </div>
                                    <div className='flex rounded-full border border-gray-400 px-4 py-2 gap-3'>
                                        <button className='cursor-pointer' onClick={() => { decQuan(cartItem.id) }}><Minus /></button> <div>{cartItem.quantity || 1}</div>   <button className='cursor-pointer' onClick={() => { incQuant(cartItem.id) }}><Plus /></button>
                                    </div>
                                    <span>
                                        $ {(cartItem.quantity ? cartItem.quantity * cartItem.price : cartItem.price)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='p-4 bg-gray-950 rounded-2xl w-1/3  text-white flex flex-col h-max gap-6'>
                        <h3 className='text-2xl font-geist'>Order Summary</h3>
                        <div className='flex justify-between'>
                            <p className='text-gray-200'>Subtotal</p>
                            <span className='text-lg'>${subTotal}</span>
                        </div>
                        <div className='flex justify-between border-b border-white'>
                            <p className='text-gray-200'>Shipping</p>
                            <span className='text-lg'>Free</span>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-geist text-3xl'>Total</p>
                            <span className='text-3xl'>
                                ${subTotal}
                            </span>
                        </div>
                        <button className='text-lg gap-2 py-2.5 px-4 flex items-center justify-center rounded-full bg-white text-gray-950'>Checkout<ArrowRight /> </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Cart