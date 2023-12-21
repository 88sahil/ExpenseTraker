import React ,{createContext, useState} from "react"

export const BudgetContext=createContext("")
 const BudgetProvider =(props)=>{
    const[Budget,setBudget] = useState([])
    const Addbudget=({bget})=>{
        setBudget((prev)=>[...prev,bget])
    }
    const deleteBudget =(id)=>{
        Budget.filter((ele)=>(
            ele.id !== id
        ))
    }
    const value ={Addbudget,deleteBudget,setBudget,Budget}
    return(
        <BudgetContext.Provider value={value}>
            {props.children}
        </BudgetContext.Provider>
    )
 }

