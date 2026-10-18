
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './assets/context/MyContext.jsx'
import { MyshopContextProvider } from './assets/context/MyWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <MyshopContextProvider>
    <App />

  </MyshopContextProvider>

)
