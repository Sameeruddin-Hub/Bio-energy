import { useState } from 'react';
import Login from "./components/Login";
import Register from './components/Register';

import './App.css'

function App() {
  const [toggle, setToggle] = useState(true)
  const [users, setUsers] = useState([])


  function handleToggle() {
    setToggle((prev) => !prev)
  }

  return (
    <>
      <div className='h-screen bg-gray-900 flex justify-center  items-center'>

        {toggle ? <Login settoggle={handleToggle} /> : <Register setUsers={setUsers} setToggle={handleToggle} />}

      </div>
    </>
  )
}

export default App
