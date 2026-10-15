import React, { use } from "react";
import UserContaxt from "./userContaxt";


const UserContaxtProvider=({children})=>{
    const [user, setUser]=React.useState(null)
    return (
        <UserContaxt.Provider value={{user,setUser}}>
            {children}
        </UserContaxt.Provider >
    )
}

export default UserContaxtProvider