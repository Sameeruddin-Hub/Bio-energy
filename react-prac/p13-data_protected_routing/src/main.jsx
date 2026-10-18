import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
// import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { ToastContainer, toast } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <AppRoutes />
    <ToastContainer />
  </AuthProvider>
)
