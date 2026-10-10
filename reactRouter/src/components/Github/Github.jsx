import { useEffect, useState } from "react"

function Github(){
    let [followers,setFollowers]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/NiteshSaini09')
        .then(res => res.json())
        .then(data=> setFollowers(data))
    },[])
 return (
    <div className="bg-amber-200 text-white m-4 p-4 flex gap-10 rounded-2xl items-center sm:mx-50">
       <img src={followers.avatar_url} alt="Git Pic" width={100} className="rounded-full"/>
        <div className="text-gray-500 bg-amber-100 px-5 py-2 rounded-2xl">
            <p>Username : {followers.login}</p>
            <p>bio : {followers.bio}</p>
            <p>Followers : {followers.followers}</p>
        </div>
    </div>
 )
}
export default Github 