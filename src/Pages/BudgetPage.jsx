import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BudgetContext } from '../context/Budget'
import BudgetCart from '../components/BudgetCart'
import { expenceContext } from '../context/Expence'

const BudgetPage = () => {
    const BgId = useParams()
    const {Budget} = useContext(BudgetContext)
    const {expence,setexpence} = useContext(expenceContext)
    const Currbg = Budget.filter((ele)=>ele.id===BgId.id)
    const currEx = expence.filter((ele)=>ele.Budget === Currbg[0].name)
  return (
    <div>
        <div className='flex w-full justify-center mt-8 border-b-8 border-red-600 pb-4'>
            {
                Currbg.map((ele)=>(
                    <BudgetCart id={ele.id} amount={ele.amount} name={ele.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default BudgetPage