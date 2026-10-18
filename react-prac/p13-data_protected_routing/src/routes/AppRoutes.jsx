import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from '../routes/ProtectedRoute';


const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
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
        },
        {
            path: '/main',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,

                },
            ]
        }
    ])
    return <RouterProvider router={router} />
};

export default AppRoutes;

