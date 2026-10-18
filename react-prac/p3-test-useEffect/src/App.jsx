import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormdata] = useState({})
  function handleInput(e) {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(formData)
  useEffect(() => {
    console.log('useEffect loading')
  }, []
  )


  return (
    <>
      <div className='bg-slate-900 h-screen flex p-6  gap-12' >
        <div>
          <button className='px-5 py-3 rounded-md font-bold bg-blue-500 text-[14px] text-white' onClick={function () {
            setCount(count + 1)
          }}>
            count
          </button>
          <span className='text-white'>
            {count}
          </span>
        </div>

        <div className='flex flex-col gap-4 w-50 '>
          <input type="text" name='name' onChange={handleInput} className='border-2 border-white  text-white px-2' placeholder='name' value={formData.name} />
          <input name='age' onChange={handleInput} className='border-2 border-white  text-white px-2' placeholder='age' value={formData.age} type="text" />
          <input onChange={handleInput} name='password' className='border-2 border-white  text-white px-2' placeholder='password' value={formData.password} type="text" />

        </div>
      </div >

    </>
  )
}

export default App

{/* <div className='flex flex-col gap-4 w-50 '>
          <input type="text" onChange={(e) => {
            setFormdata((prev) => ({ ...prev, name: e.target.value }))
          }} className='border-2 border-white  text-white px-2' placeholder='name' value={formData.name} />
          <input onChange={(e) => {
            setFormdata((prev) => ({ ...prev, age: e.target.value }))
          }} className='border-2 border-white  text-white px-2' placeholder='age' value={formData.age} type="text" />
          <input onChange={(e) => {
            setFormdata((prev) => ({ ...prev, password: e.target.value }))
          }} className='border-2 border-white  text-white px-2' placeholder='password' value={formData.password} type="text" />

        </div> */}