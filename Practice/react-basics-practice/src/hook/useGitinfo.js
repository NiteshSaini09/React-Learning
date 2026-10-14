import { useEffect, useState } from "react";

function useGitinfo(accoutName){
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/NiteshSaini09`)
        .then((res)=>res.json())
        // .then((res)=>console.log(res.bio))
        .then((res)=>setData(res))
    },[accoutName]);
    return data
}
export default useGitinfo