import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/User.Context'
import './Pages.css'
import A from '../assets/Images/add.png'
const Trake = () => {
    const {user} = useContext(userContext)
    const [GM,setgm]= useState("")
    const [BgName,setBgName] = useState("")
    const [BgAm,setBgAm] = useState(0)
    const hh = new Date().getHours()
    console.log(hh)
    useEffect(()=>{
      if(hh>6 && hh<11){
        setgm("Good Morning☀️")
      }else if(hh > 11 && hh<17){
        setgm("Good Afternoon😎")
      }else{
        setgm("Good Evening🌙")
      }

    },[])

    
  return (
    <div className='bg-[#fffbefee] w-full'>

        <div className='w-full flex justify-between border items-center p-2'>
          {/* greet header */}
            <p id="greet" className='mt-4'>Hello<span className='ml-[3px] text-[#16BAEE]'>{user || "name"}👋</span></p>
            <p className='flex justify-end mr-4 text-[#1B66D6] float-right text-[30px]'>{GM}</p>
        </div>
        <div className='px-6'>
          {/* line */}
          <div className='linediv '></div>
        </div>
        <div className='w-full flex gap-10 justify-center mt-10'>
          {/* input boxes */}
          <div className='w-1/4  shadow-black p-6  border-black rounded-lg outline-dashed  ring-2 ring-gray-300 shadow-lg ring-offset-2'>
        {/* Budget div  */}
        <p className='font-bold text-lg pb-4'>Add Budget</p>
        <label className='text-md font-bold' for="budget">BudgetName</label>
        <input
            type='text'
            name='budget'
            value={BgName}
            onChange={(e)=>setBgName(e.target.value)}
            placeholder='eg.,Food'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2 mb-4'
        ></input>
        <label className='text-md font-bold' for="amount">BudgetName</label>
        <input
            type='number'
            name='amount'
            value={BgAm}
            onChange={(e)=>setBgAm(e.target.value)}
            placeholder='eg.,1000'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2'
        ></input>
        <button className="flex bg-black/95 mt-4 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Add budget<img src={A} className='h-4 mt-1.5 w-4 ml-1.5' alt="add"></img></button>
       </div>
       {/* Expences div */}
       <div className='w-1/4 shadow-black p-6  border-black rounded-lg outline-dashed  ring-2 ring-gray-300 shadow-lg ring-offset-2'>
        <p className='font-bold text-lg pb-4'>Add Expence</p>
        <label className='text-md font-bold' for="budget">Expence Name</label>
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
        {/* Options Add */}
        <button className="flex bg-black/95 mt-4 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Add Expence<img src={A} className='h-4 mt-1.5 w-4 ml-1.5' alt="add"></img></button>
       </div>
        </div>


    </div>
  )
}

export default Trake