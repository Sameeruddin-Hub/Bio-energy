import React, { useState, useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    let { loggedUser } = useContext(Auth);

    if (!loggedUser) {
        return <Outlet />

    }
    return <Navigate to={'/home'} />

}

export default PublicRoute