import React from 'react'
import { createContext, useState } from 'react'

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
    let [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])
    let [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedUser')))

    return <Auth.Provider value={{ registeredUsers, setLoggedInUser, loggedInUser, setRegisteredUsers }}>{children}</Auth.Provider>
}

