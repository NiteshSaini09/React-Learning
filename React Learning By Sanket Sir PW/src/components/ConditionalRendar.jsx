import { useState } from "react"

function Edit(){
    let [edit,setEdit]=useState(false)
    return (
        <>
            {(edit)?<input/>:<p>nice</p>}
            <button onClick={setEdit(!edit)} className="border px-3 py-1 ml-2 rounded  font-bold hover:bg-blue-400">Edit</button>
        </>
    )
}
export default Edit