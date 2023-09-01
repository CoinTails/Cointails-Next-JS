import React from 'react'
import mainlogo from "../public/images/mainlogo.svg"
import userAvatar from "../public/images/userAvatar.svg"
import Multisteps from './createAccountApp/multisteps'
import Image from 'next/image'
const AccountPalanceNav = () => {
  return (
    <div>

      <div className='flex m-4 justify-between '>
        <div className='flex items-center justify-center'>
        <Image className='h-16 w-16 mr-4' src={mainlogo} alt="mainlogo"/>
        <header className='text-2xl font-bold'><span className='text- text-first-color ' >Coin</span>
                   <span className='text-secondary-color-theme'>Tails</span>
          
          </header>
        </div>
        {/* user  */}
        <div className='flex items-center justify-center'>
        <Image className='h-16 w-14 mr-4' src={userAvatar} alt="mainlogo"/>
        <div className='text-xl font-bold'><span className='text-first-color ' >Coin</span>
                   <span className='text-first-color'>Tails</span>
          </div>
  
        </div>
        </div>
        <div className='flex flex-col items-center justify-center my-20'>
          <h1 className='text-3xl my-4 font-bold text-secondary-color-theme'>Create Your Account</h1>
          <Multisteps/>
        </div>
    </div>
  )
}

export default AccountPalanceNav
