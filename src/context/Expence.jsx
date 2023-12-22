import React, { createContext, useState } from "react";

export const expenceContext = createContext("")

const ExpenceProvider =(props)=>{
    const [expence,setexpence] = useState([])
    const value = {expence,setexpence}
    return (
        <expenceContext.Provider value={value}>
            {props.children}
        </expenceContext.Provider>
    )
}
export default ExpenceProvider