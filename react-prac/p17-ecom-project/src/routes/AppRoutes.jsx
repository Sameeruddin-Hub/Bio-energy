import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'

import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'




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
        }
        , {
            path: '/home',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <Home />

                        },
                        {
                            path: 'shop',
                            element: <Shop />
                        },
                        {
                            path: 'cart',
                            element: <Cart />
                        },
                    ]
                }
            ]

        }

    ])
    return <RouterProvider router={router} />
}

export default AppRoutes