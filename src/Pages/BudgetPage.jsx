import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BudgetContext } from '../context/Budget'
import BudgetCart from '../components/BudgetCart'
import { expenceContext } from '../context/Expence'
import d from '../assets/Images/bin.png'
const BudgetPage = () => {
    const BgId = useParams()
    const navigate = useNavigate()
    const {Budget,setBudget} = useContext(BudgetContext)
    const {expence,setexpence} = useContext(expenceContext)
    useEffect(()=>{
        const bg = localStorage.getItem("budget")
        if(bg){
            setBudget(JSON.parse(bg))
        }
        const ex = localStorage.getItem("expence")
        if(ex){
            setexpence(JSON.parse(ex))
        }
    },[])
    const deleteItem=(id)=>{
        const DeletedList = expence.filter((ele)=>{
            return ele.id !== id
        })
        setexpence(DeletedList)
        localStorage.setItem("expence",JSON.stringify(DeletedList))
    }
    const Currbg = Budget.filter((ele)=>ele.id===BgId.id)
    const currEx = expence.filter((ele)=>ele.Budget === Currbg[0].name)

    const BudgetDelete =()=>{
        const newbg = Budget.filter((ele)=>ele.id !== BgId.id )
        setBudget(newbg)
        localStorage.setItem("budget",JSON.stringify(newbg))
        const newEx = expence.filter((ele)=>ele.Budget !== Currbg[0].name)
        setexpence(newEx)
        localStorage.setItem("expence",JSON.stringify(newEx))

        navigate("/Home")
    }
  return (
    <div>
        <div className='flex w-full justify-center mt-8 border-b-8 border-red-600 pb-4 max-sm:px-3'>
            {
                Currbg.map((ele)=>(
                    <BudgetCart id={ele.id} amount={ele.amount} name={ele.name}/>
                ))
            }
        </div>
        <div>
                { 
                currEx.length >0? (
                    <div className=' px-28 max-sm:px-2'>
                    <div className='h_div w-full shadow-sm sticky'>
                     <a>Name</a>
                     <a>Amount</a>
                     <a>Date</a>
                     <a>Type</a>
                     <a>❌</a>
                    </div>
                    <div className='Data_main '>
                     {
                         currEx.map((ele)=>(
                             <div className='data_div w-full py-4 h-14 flex items-center' key={ele.id}>
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
                ):(
                    <a className='w-full flex mt-16 font-extrabold text-[3rem] justify-center max-sm:text-[1rem]'>No record Found😟</a>
                )
                    
                }
        </div>
        <div className='flex justify-center w-full mt-10'>
            <button className='w-1/12 bg-red-500 px-2 justify-center py-2 rounded-md shadow-md shadow-slate-600 duration-200 active:scale-x-125 active:scale-y-75 active:skew-x-12 active:skew-y-6  text-white flex max-sm:w-1/2' onClick={BudgetDelete}>Delete Budget<img src={d} alt='delete' className='w-6 h-6' /></button>
        </div>
    </div>
  )
}

export default BudgetPage