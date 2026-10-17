import { useState } from 'react'
import './App.css'
import UserContaxtProvider from './contaxt/UserContaxtProvider'
 import CreditCard from '@/components/shared-assets/credit-card/credit-card';
 
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Hello</h1>
   
<CreditCard
    type="brand-dark"
    company="Untitled."
    cardNumber="1234 1234 1234 1234"
    cardHolder="OLIVIA RHYE"
    cardExpiration="06/28"
/>
   </>
  )
}

export default App
