import React ,{createContext, useState} from "react"

export const BudgetContext=createContext("")
 const BudgetProvider =(props)=>{
    const[Budget,setBudget] = useState([])
    const value ={setBudget,Budget}
    return(
        <BudgetContext.Provider value={value}>
            {props.children}
        </BudgetContext.Provider>
    )
 }

export default BudgetProvider