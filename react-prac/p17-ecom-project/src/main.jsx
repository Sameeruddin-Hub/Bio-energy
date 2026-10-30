import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <AuthProvider>
      <ToastContainer />
      <AppRoutes />
    </AuthProvider>
  </CartProvider>


)
