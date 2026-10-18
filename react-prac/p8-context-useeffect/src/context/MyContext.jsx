import { createContext, useState } from "react";

//consumer
export const MyStore = createContext();

// provider
export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>;
};