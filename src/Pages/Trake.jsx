import React, { useContext, useEffect, useId, useState } from 'react'
import { userContext } from '../context/User.Context'
import './Pages.css'
import A from '../assets/Images/add.png'
import { BudgetContext } from '../context/Budget'
import { nanoid } from 'nanoid'
import { expenceContext } from '../context/Expence'
import BudgetCart from '../components/BudgetCart'
const Trake = () => {
    const {Budget,setBudget}= useContext(BudgetContext)
    const {expence,setexpence} = useContext(expenceContext)
    const {user} = useContext(userContext)
    const [GM,setgm]= useState("")
    const [BgName,setBgName] = useState("")
    const Id = nanoid()
    const [BgAm,setBgAm] = useState(0)
    const hh = new Date().getHours()


    useEffect(()=>{
      if(hh>6 && hh<11){
        setgm("Good Morning☀️")
      }else if(hh > 11 && hh<17){
        setgm("Good Afternoon😎")
      }else{
        setgm("Good Evening🌙")
      }
     const localbg = localStorage.getItem("budget")
     if(localbg){
      setBudget(JSON.parse(localbg))
     }
     const exp = localStorage.getItem("expence")
     if(exp){
      setexpence(JSON.parse(exp))
     }
    },[])

   console.log()
    const Addbudget = (e) =>{
      e.preventDefault()
      const Bdg = {
        id:`${Id}`,
        name:`${BgName}`,
        amount:`${BgAm}`,
        date:`${new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()}`
      }
      setBudget([...Budget,Bdg])
      console.log([...Budget,Bdg])
      localStorage.setItem("budget",JSON.stringify([...Budget,Bdg]))
      setBgName("")
      setBgAm(0)
    }
    // Expence
      const [exname,setexname]=useState("")
      const [exAm,setexAm] = useState(0)
      const [exbg,setexbg] = useState("")
      const addExpence = () =>{
        
        const ex ={
          id:`${Id}`,
          name:`${exname}`,
          Budget:`${Budget.length===1 ? `${Budget[0].name}`:exbg}`,
          amount:`${exAm}`,
          date:`${new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()}`
        }
        setexpence([...expence,ex])
        localStorage.setItem("expence",JSON.stringify([...expence,ex]))
        setexAm(0)
        setexname("")
        setexbg("")
        
      }
      console.log(expence)
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
        <label className='text-md font-bold' htmlFor="budget">BudgetName</label>
        <input
            type='text'
            name='budget'
            value={BgName}
            onChange={(e)=>setBgName(e.target.value)}
            placeholder='eg.,Food'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2 mb-4'
        ></input>
        <label className='text-md font-bold' htmlFor="amount">BudgetName</label>
        <input
            type='number'
            name='amount'
            value={BgAm}
            onChange={(e)=>setBgAm(e.target.value)}
            placeholder='eg.,1000'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2'
        ></input>
        <button className="flex bg-black/95 mt-4 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={Addbudget}>Add budget<img src={A} className='h-4 mt-1.5 w-4 ml-1.5' alt="add"></img></button>
       </div>
       {/* Expences div */}
       <div className='w-1/4 shadow-black p-6  border-black rounded-lg outline-dashed  ring-2 ring-gray-300 shadow-lg ring-offset-2'>
        <p className='font-bold text-lg pb-4'>Add Expence</p>
        <label className='text-md font-bold' htmlFor="budget">Expence Name</label>
        <input
            type='text'
            name='budget'
            value={exname}
            onChange={(e)=>setexname(e.target.value)}
            placeholder='eg.,Food'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2 mb-4'
        ></input>
        <label className='text-md font-bold' htmlFor="amount">BudgetName</label>
        <input
            type='number'
            name='amount'
            value={exAm}
            onChange={(e)=>setexAm(e.target.value)}
            placeholder='eg.,1000'
            className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2'
        ></input>
        {/* Options Add */}
        {
          Budget.length > 1 && 
          <div className='mt-2'>
            <label htmlFor="Budget" className='font-bold'>Budget</label>
             <select id='Budget' onChange={(e)=>setexbg(e.target.value)} className='py-2 shadow-sm bg-gray-400 rounded-lg text-black placeholder:text-black px-2'>
                  {
                    Budget.map((ele)=>(
                      <option value={ele.name} key={ele.id}>{ele.name}</option>
                    ))
                  }
              </select>
          </div>
         
        }
        <button className="flex bg-black/95 mt-4 w-7/12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={addExpence}>Add Expence<img src={A} className='h-4 mt-1.5 w-4 ml-1.5' alt="add"></img></button>
       </div>
        </div>
        <div className=' border-l-[10px] border-solid border-red-600 ml-48 mt-16'>
          <a className='font-extrabold text-[20px] ml-[3px]'>Existing Budget</a>
        </div>
        <div className='flex flex-wrap justify-center mt-2 p-8 gap-5 overflow-scroll'>
          {/* budget block */}
          {
            Budget.map((ele)=>(
              <BudgetCart 
                amount={ele.amount}
                name={ele.name}
                id={ele.id}
              />
            ))
          }
        </div>

    </div>
  )
}

export default Trake