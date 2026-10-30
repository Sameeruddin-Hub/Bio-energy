import { createContext, useState } from 'react'

export const CartData = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    return <CartData.Provider value={{ cartItems, setCartItems }}>{children}</CartData.Provider>
}