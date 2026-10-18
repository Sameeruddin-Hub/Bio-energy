import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='h-screen bg-slate-900'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App