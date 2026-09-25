import { useState } from "react"

function Counter(){
    let [count,setCount]=useState(0)
    return(
        <>
            <h1>{count}</h1>
            <button className="border px-3 py-1 ml-2 rounded bg-green-500 font-bold hover:bg-green-700 " onClick={()=>setCount(count+1)}>Count ++</button>
            <button className="border px-3 py-1 ml-2 rounded bg-red-500 font-bold hover:bg-red-700 " onClick={()=>setCount(count-1)}>Count --</button>
        </>
    )
}
export default Counter