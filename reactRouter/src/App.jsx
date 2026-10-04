import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1 className='bg-green-300 '>Hello</h1>
    </>
  )
}

export default App
