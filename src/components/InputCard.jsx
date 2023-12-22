import React from 'react'
import A from '../assets/Images/add.png'
const InputCard = () => {
  return (
    <form className='flex w-full justify-center items-center min-h-screen'>
       <div className='w-1/4 shadow-black p-6  border-black rounded-lg outline-dashed  ring-2 ring-gray-300 shadow-lg ring-offset-2'>
        <p className='font-bold text-lg pb-4'>Add Budget</p>
        <label className='text-md font-bold' for="budget">BudgetName</label>
        <input
            type='text'
            name='budget'
            value=""
            placeholder='eg.,Food'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2 mb-4'
        ></input>
        <label className='text-md font-bold' for="amount">BudgetName</label>
        <input
            type='number'
            name='amount'
            value=""
            placeholder='eg.,1000'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2'
        ></input>
        <button className="flex bg-black/95 mt-4 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Add budget<img src={A} className='h-4 mt-1.5 w-4 ml-1.5' alt="add"></img></button>
       </div>
        

    </form>
  )
}

export default InputCard