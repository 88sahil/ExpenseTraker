import React, { useContext, useState } from 'react'
import { expenceContext } from '../context/Expence'
import d from '../assets/Images/bin.png'
import './Cp.css'
const ExList = () => {
    const {expence,setexpence} = useContext(expenceContext)
    const [search,setsearch] = useState('')
    const [sortValue,setsortValue] = useState("")
    console.log(sortValue)
        const deleteItem=(id)=>{
            const DeletedList = expence.filter((ele)=>{
                return ele.id !== id
            })
            setexpence(DeletedList)
            localStorage.setItem("expence",JSON.stringify(DeletedList))
        }
        const HandleSearch =(e)=>{
            setsearch(e.target.value)
        }
        let List = expence.filter((ele)=>ele.name.toLowerCase().includes(search.toLowerCase()))
        if(sortValue === "amount"){
            List =expence.sort((a,b)=>{
                return a.amount - b.amount
            })
        }else if(sortValue === "date"){
            List = expence.sort((a,b)=>{
                return a.date - b.date
            })
        }
  return (
    <div className=' px-28  max-sm:px-0'>
        <div className='flex'>
            <input type='text' placeholder='🔎search items here' value={search} className='px-2 py-4 border-l-[15px] border-yellow-500 mb-4 focus:outline-none font-extrabold text-16 bg-transparent' onChange={(e)=>{
                HandleSearch(e)
            }}/>
            <select className='bg-gray-200 mb-2 px-3' onChange={(e)=>{
                setsortValue(e.target.value)
            }} >
                <option value="">Sort</option>
                <option value="amount">By amount</option>
                <option value="date">By date</option>
            </select>
        </div>
       <div className='h_div w-full shadow-sm sticky'>
        <a>Name</a>
        <a>Amount</a>
        <a>Date</a>
        <a>Type</a>
        <a>❌</a>
       </div>
       <div className='Data_main '>
        {
            List.map((ele)=>(
                <div className='data_div w-full py-4 h-14 flex items-center border-b-1'>
                    <a>{ele.name}</a>
                    <a>{ele.amount}</a>
                    <a>{ele.date}</a>
                    <a>{ele.Budget}</a>
                    <a className='flex'><span className='w-full flex justify-center items-center'><img src={d} alt="delete" className='w-[25px] h-[25px] cursor-pointer' onClick={()=>{
                        deleteItem(ele.id)
                    }}/></span></a>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default ExList