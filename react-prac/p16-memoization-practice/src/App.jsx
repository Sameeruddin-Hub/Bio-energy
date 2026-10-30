import React, { useState, useMemo } from 'react'
import Products from './components/Products';
import Home from './components/Home';
import { useCallback } from 'react';


const App = () => {
  console.log('App rendering')
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'raj', id: 789 })

  // let greet = () => {
  //   console.log('hello')
  let calculation = useMemo(() => {
    console.log('calcualtion running')
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }

    return sum
  }, [user])
  // }

  let greet = useCallback(() => {
    console.log('helloo')
  }, [])

  //  to put the function - use useCallback


  return (
    <div className='text-gray-900 p-4'>
      <h1>Memoization</h1>
      <h2>Name is {user.name}</h2>
      <h2>{count}</h2>
      <h2>My calculation is {calculation}</h2>
      <button onClick={() => setUser({ name: 'rajkumar', id: 790 })}>Change name</button>
      <button className='ml-2' onClick={() => setCount(count + 1)}>Increament</button>
      <Home greet={greet} />
      <Products />
    </div>
  )
}
export default App;

// if we pass the function it will rerender, sicne the fucntion is a reference which keep on changes
// if we pass variable will not rerender , since it is a primitive data.
// 1.React.memo for fucntional component memoization
// 2.useCallback for function memoization
//3. useMemo - kisi bhi expensive operation ko hold karna and result retrun karraheho
