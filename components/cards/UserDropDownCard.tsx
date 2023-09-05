"use client"
import { Ticket } from 'lucide-react'

import { useState } from 'react'
TickerStar
import TickerStar from "../../public/images/TickerStar.png"

import UserLogo from "../../public/images/userLogo.svg"
import Image from 'next/image'
const UserDropDownCard = () => {
  const [isHidden,setIsHidden]=useState(true)
  const handleDropDwon=()=>{
      setIsHidden(!isHidden)
  }
  return (

    <>
    <div className="relative">
        <button onClick={handleDropDwon} 
        className="flex gap-x-2 items-center bg-none focus:outline-none">
        <Image className='w-16 h-16' src={UserLogo} alt="user logo" />
        <div className='hidden md:block'>
          <h2 className="text-2xl text-first-dark-color">Alexander Chinonso</h2>
          <p className='flex text-primary-first-color '>@alexander <Image className='ml-4'  src={TickerStar} alt="TickerStar"/></p>
        </div>
        </button>

         {/* User dropdown content  */}
        <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10  
            ${isHidden ?'hidden':'block'}
        `}>
           {/* Dropdown items */}
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</a>
        
        </div>
      
      </div>
      </>
  )

}

export default UserDropDownCard
