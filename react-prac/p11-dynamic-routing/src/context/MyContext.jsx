import { createContext, useState } from "react";
export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productsData, setProductsData] = useState([]);
    return <MyStore.Provider value={{ cartItems, setCartItems, productsData, setProductsData }}> {children} </MyStore.Provider>
}