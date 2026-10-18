import { useState, createContext } from "react";


export let MyShop = createContext();

export const MyshopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartopen, setIsCartopen] = useState(false)

    return <MyShop.Provider value={{ isCartopen, setIsCartopen, cartItems, setCartItems }}>{children}</MyShop.Provider>;
}