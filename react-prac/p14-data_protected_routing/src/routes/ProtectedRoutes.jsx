import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Auth } from '../context/AuthContext'
import AppRoutes from './AppRoutes'

const ProtectedRoutes = () => {
    const { loggedInuser } = useContext(Auth)

    if (!loggedInuser) {
        return <Navigate to={'/'} />
    }
    return <Outlet />
}
export default ProtectedRoutes;