import { createContext, react, useState } from 'react'

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const incrementQuantity = (id) => {
        // console.log(id)
        setCartItems((prev) => {
            // console.log(prev)
            return prev.map((val) => {
                // console.log(typeof (val.id), typeof id, id, typeof val.quantity)
                return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
            })
        })
    }
    const decrementQuantity = (id) => {
        // console.log(id)
        setCartItems((prev) => {
            // console.log(prev)
            return prev.map((val) => {
                // console.log(typeof (val.id), typeof id, id, typeof val.quantity)
                return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
            })
        })
    }

    return <MyStore.Provider value={{ isCartOpen, setCartOpen, cartItems, setCartItems, incrementQuantity, decrementQuantity }}>{children}</MyStore.Provider>
}