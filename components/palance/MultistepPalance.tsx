"use client"
import React from 'react'
import AccountPalance from './AccountPalance'
import PalanceBtns from './palanceBtns'
import CreateAccountHeader from '../createAccountApp/CreateAccountHeader'
import CreateAccount from '../ReuseableCard1'
import ReusableCard1 from '../ReuseableCard1'
import Image from 'next/image'

import Cryptograpy from "../../public/images/cryptocurrency.svg"
import face1 from "../../public/images/face1.svg"
import SendCTS from './SendCTS'
const MultistepPalance = ({
}) => {
  const headerValues = {
    secondText:"Your Idintity"
    }
  return (
   <>
   
   <ReusableCard1 
            HeaderComponent={CreateAccountHeader} 
            component={PalanceBtns}
            isMultistep={false}
            />

            <hr/>
             <ReusableCard1 
            HeaderComponent={CreateAccountHeader} 
            component={SendCTS}
            isMultistep={false}
            />
            <div className='flex gap-x-4 mt-8 text-sm justify-center text-gray-500 '>
          <div className='flex justify-center items-center '>
          <Image src={face1} className='mx-1 w-4 h-4' alt="cryptogray icon"/>
          Secured
          </div>
          <div className='flex justify-center items-center '>
          <Image src={Cryptograpy} className='mx-1 w-4 h-4' alt="cryptogray icon"/>
            Encrypted
          </div>
        </div>
   </>
  )
}

export default MultistepPalance
