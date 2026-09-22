import { useState} from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  let words=text.split(" ").length
  return (
  <>
    <textarea 
    name="textarea" 
    id="text" 
    className='outline rounded-lg px-20 mt-20 text-green-500'
    onChange={(e)=>setText(e.target.value)}
    ></textarea>
    <h5>Your Text : {text}</h5>
    <h5>Your Text Length:{text.length}</h5>
    <h5>Words: {words}</h5>

  </>
  )
}

export default App
