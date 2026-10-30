import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('loggedUser')))


    return <Auth.Provider value={{ registeredUsers, loggedUser, setRegisteredUsers, setLoggedUser }} >{children}</Auth.Provider>
}
