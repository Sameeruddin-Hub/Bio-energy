import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import AuthLayout from '../layouts/AuthLayout'
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { MainLayout } from '../layouts/MainLayout'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Home from '../pages/Home'
import UsersPage from '../pages/UsersPage'
import ProductPage from '../pages/ProductPage'





const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <Login />
                        },
                        {
                            path: '/register',
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: '/main',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <Home />
                        }
                        ,
                        {
                            path: 'products',
                            element: <ProductPage />
                        },
                        {
                            path: 'users',
                            element: <UsersPage />
                        }
                    ]

                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes;