import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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
