import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedinUser')));

    return <Auth.Provider value={{ registeredUsers, setRegisteredUsers, setLoggedInUser, loggedInUser }}>{children}</Auth.Provider>
}