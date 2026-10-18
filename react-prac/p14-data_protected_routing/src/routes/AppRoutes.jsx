import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout'
import ProtectedRoutes from '../routes/ProtectedRoutes';
import PublicRoute from './PublicRoute';
import Homepage from '../pages/Home'
import { ProductPage } from '../pages/ProductPage';
import { UsersPage } from '../pages/UsersPage';


const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <Login />
                        }
                        ,
                        {
                            path: 'register',
                            element: <Register />
                        }

                    ]
                }
            ]
        },
        {
            path: '/main',
            element: <ProtectedRoutes />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <Homepage />
                        },
                        {
                            path: 'users',
                            element: <UsersPage />
                        },
                        {
                            path: 'products',
                            element: <ProductPage />
                        }
                    ]

                },
            ]
        }
    ])
    return <RouterProvider router={router} />
};

export default AppRoutes;

