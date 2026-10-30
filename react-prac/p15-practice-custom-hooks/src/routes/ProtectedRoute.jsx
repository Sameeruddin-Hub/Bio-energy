import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContext';
import { Outlet, Navigate } from 'react-router'

const ProtectedRoute = () => {

    let { loggedInUser, registeredUsers, setLoggedInUser } = useContext(Auth);
    console.log(loggedInUser)

    if (!loggedInUser) {
        return <Navigate to={'/'} />;
    }
    return <Outlet />;
}
export default ProtectedRoute;
