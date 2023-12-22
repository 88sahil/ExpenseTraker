import React, { useContext } from 'react'
import { expenceContext } from '../context/Expence'
import d from '../assets/Images/bin.png'
import './Cp.css'
const ExList = () => {
    const {expence,setexpence} = useContext(expenceContext)
    const List = expence.map((ele)=>(
        ele
    ))
        const deleteItem=(id)=>{
            const DeletedList = expence.filter((ele)=>{
                return ele.id !== id
            })
            setexpence(DeletedList)
            localStorage.setItem("expence",JSON.stringify(DeletedList))
        }
  return (
    <div className=' px-28'>
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
                <div className='data_div w-full py-4 h-14 flex items-center'>
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