import React, { useContext, useState } from 'react'
import './Cp.css'
import { expenceContext } from '../context/Expence'
import { useNavigate } from 'react-router-dom'
import v from '../assets/Images/view.png'
const BudgetCart = ({name,amount,id,active=true}) => {
    const navigate = useNavigate()
    const a=50;
    const {expence} = useContext(expenceContext)
        const bgex = expence.filter((ele)=>(
            ele.Budget === name
        ))
    let total =0
    for(let i of bgex){
       total += parseInt(i.amount)
    }
    const b = (total/(parseInt(amount)))*100
    const c = parseInt(amount) - total
    const view =()=>{
        navigate(`/Home/${id}`)
    }
  return (
    <div className='BGDIV p-5 border border-red-500' key={id}>
        <div className='w-full flex justify-between'>
            <a className='atag'>{name}</a>
            <a className="atag flex justify-end mr-2 ">{amount}&#8377;</a>
        </div>
        {/* progress bar */}
        <div className='w-full bg-[#A9A9A9] h-6 rounded-lg mt-4 shadow-md shadow-gray-600 py-[0.5px] flex items-center justify-start'>
            <div className='bg-[#FF0000] h-full rounded-lg  max-w-full' style={{width:`${b}%`}}></div>
        </div>
        <div className='flex justify-between mt-3'>
            <a className='ml-2 text-[#938282]'>{total} Spend</a>
            <a className='flex justify-end mr-3 text-[#938282]'>{c}left</a>
        </div>
        <div className='w-full flex justify-center mt-8'>
            {
                active && <button className='flex bg-[#FF0000] w-1/2 justify-center gap-2 text-white px-4 py-1.5 rounded-lg hover:bg-gray-500 hover:text-black duration-200 max-sm:w-10/12' onClick={view}>
                View Budget <img src={v} alt="nona" className='w-5 h-5' />
            </button>
            }
        </div>
    </div>
  )
}

export default BudgetCart