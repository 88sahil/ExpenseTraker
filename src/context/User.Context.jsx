import React, { createContext, useState } from "react";

export const userContext = createContext("")

const UserContexProvider = (props)=>{
    const [user,setuser] = useState("")
    const value={user,setuser}
    return(
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContexProvider