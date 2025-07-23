import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import Search from './components/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Clock/> */}
      <Search/>
    </>
  )
}

export default App
