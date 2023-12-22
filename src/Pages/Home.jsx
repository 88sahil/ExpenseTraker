import React, { useContext, useEffect, useState } from 'react'
import './Pages.css'
import H1 from '../assets/Images/Hero.jpg'
import { userContext } from '../context/User.Context'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const {user,setuser} = useContext(userContext)
    const Saveuser=()=>{
        localStorage.setItem("user",user)
        setuser("")
        navigate("/Home")
    }
    useEffect(()=>{
        const name= localStorage.getItem("user")
        if(name){
            setuser(name)
            navigate("/Home")
        }
    },[])
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-wrap w-full p-10 my-[50px] max-sm:p-0'>
        <div className='w-1/2 flex flex-col items-center py-4 justify-center gap-5 max-sm:w-full max-sm:order-2 max-sm:gap-3'>
            <a id='homep1' className='flex text-center'>Take Control on</a>
            <a id='homep2' className='flex text-center'>Your money</a>
            <input 
                type="text"
                value={user}
                onChange={(e)=>setuser(e.target.value)}
                placeholder='Enter your name'
                id="Home_Ip"
                className='coolinput w-[300px] block mt-5'
            ></input>
            <button className='mt-4' id='homeBtn' onClick={Saveuser}>Start</button>
        </div>
        <div className='w-1/2 flex justify-start max-sm:w-full max-sm:mt-10 max-sm:order-1 max-sm:justify-center'>
            <img src={H1} alt="hero img" className='w-[400px] h-[467px] max-sm:w-[300px] max-sm:h-[400px]' />
        </div>
    </div>
    </div>
  )
}

export default Home