import { useEffect, useState } from "react"

function Github(){
    let [followers,setFollowers]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data=> setFollowers(data))
    },[])
 return (
    <div className="bg-gray-500 text-white m-4 p-4 text-3xl flex gap-10 items-center sm:mx-50">
       <img src={followers.avatar_url} alt="Git Pic" width={100} className="rounded-full"/>
        <div className="text-9xl}">
            <p>Username : {followers.login}</p>
            <p>Username : {followers.bio}</p>
            <p>Followers : {followers.followers}</p>
        </div>
    </div>
 )
}
export default Github 