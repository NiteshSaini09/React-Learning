import { useState } from 'react'
import './App.css'
import UserContaxtProvider from './contaxt/UserContaxtProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContaxtProvider>
    <h1>Hello</h1>
   </UserContaxtProvider>
  )
}

export default App
