import React from 'react'
import Navbar from './components/Navbar'
import { NavLink, } from 'react-router';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => {
  return (

    <div className='bg-white min-h-screen'>
      <Navbar />
      <AppRoutes />

    </div>

  )
}

export default App