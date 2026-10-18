import React, { useEffect, } from 'react'
// import Home from './components/Home';
import About from './components/About';
import Home from './components/Home'
import Contact from './components/Contact'
import { MyStore } from './context/MyContext'

const App = () => {

  const { count, setCount } = useContext(MyStore);
  let interval = setInterval(() => {
    console.log('Hey iam in about')
  }, 1000)
  useEffect(() => {
    console.log('hey im in about');

    // only use when your components leaks some memory
    return () => {
      clearInterval(interval)
      console.log('I m triggered about')
    }
  }, []);

  return (
    <div>
      <About />
      <Home />
      <Contact />
    </div>

  )
}

export default App