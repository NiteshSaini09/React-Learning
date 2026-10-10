import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data=useLoaderData()
    // let [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/NiteshSaini09')
    //     .then(res => res.json())
    //     .then(data=> setData(data))
    // },[])
 return (
    <div className="bg-amber-200 text-white m-4 p-4 flex gap-10 rounded-2xl items-center sm:mx-50">
       <img src={data?.avatar_url} alt="Git Pic" width={100} className="rounded-full"/>
        <div className="text-gray-500 bg-amber-100 px-5 py-2 rounded-2xl">
            <p>Username : {data.login}</p>
            <p>bio : {data.bio}</p>
            <p>Followers : {data.followers}</p>
        </div>
    </div>
 )
}
export default Github 

export const gitInfoLoader=async ()=>{
    const responce= await fetch(`https://api.github.com/users/NiteshSaini09`)
    return responce.json()

}