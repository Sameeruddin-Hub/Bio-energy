import { createContext } from "react";

const MyStore = createContext();


export const ContextProvider = ({ children }) => {
    const [centralValue, setCentralValue] = useState('me context se hu')
    return <MyStore.Provider value={centralValue}>{children}</MyStore.Provider>
}