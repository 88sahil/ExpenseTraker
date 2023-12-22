import React, { useContext } from 'react'
import './Cp.css'
import { expenceContext } from '../context/Expence'
import { useNavigate } from 'react-router-dom'
const BudgetCart = ({name,amount,id}) => {
    const a=50;
    const {expence} = useContext(expenceContext)
        const bgex = expence.filter((ele)=>(
            ele.Budget === name
        ))
    let dd=0;
    const total = bgex.map((a)=>{
        dd = dd + parseInt(a.amount)
        return dd;
    })
    console.log(total)
    const b = (total/(parseInt(amount)))*100
    const c = parseInt(amount) - total
  return (
    <div className='BGDIV p-5 border border-red-500' key={id}>
        <div className='w-full flex justify-between'>
            <a className='atag'>{name}</a>
            <a className="atag flex justify-end mr-2 ">{amount}&#8377;</a>
        </div>
        <div className='w-full bg-[#A9A9A9] h-6 rounded-lg mt-4 shadow-md shadow-gray-600'>
            <div className='bg-[#FF0000] h-full rounded-lg ml-[1px]' style={{width:`${b}%`}}></div>
        </div>
        <div className='flex justify-between mt-3'>
            <a className='ml-2 text-[#938282]'>{total} Spend</a>
            <a className='flex justify-end mr-3 text-[#938282]'>{c}left</a>
        </div>
        <div className='w-full flex justify-center mt-8'>
            <button className='bg-[#FF0000] w-1/3 text-white px-4 py-1.5 rounded-lg hover:bg-transparent hover:text-black duration-200'>
                View Budget
            </button>
        </div>
    </div>
  )
}

export default BudgetCart