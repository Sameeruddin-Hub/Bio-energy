import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Usercard from './components/Usercard'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || []
  });
  const [updatedData, setUpdatedData] = useState(null)
  const deleteUser = (id) => {
    console.log(id)
    let removedUser = users.filter((user) => user.id !== id)
    setUsers(removedUser)
    localStorage.setItem('users', JSON.stringify(removedUser))
  }
  // console.log(users)
  return (
    // <div>App</div>
    <div className='flex flex-col   h-screen bg-gray-900'>
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex flex-wrap gap-4 p-4'>
          {users?.map((user) => <Usercard user={user} deleteUser={deleteUser} setToggle={setToggle} setUpdatedData={setUpdatedData} />)}
        </div>
      ) : <Form setUsers={setUsers} setToggle={setToggle} users={users} updatedData={updatedData} />}


    </div>
  )
}

export default App