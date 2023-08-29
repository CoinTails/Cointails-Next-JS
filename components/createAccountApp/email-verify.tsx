"use client"
import React, { useState } from 'react'
import {Input} from "@/components/ui/input"
import BtnsNextBack from '@/components/createAccountApp/btns-next-back'
const EmailVerify = () => {
  const [codeInputs,setCodeINputs] = useState(['','','',''])
  const newCodeInputs = [...codeInputs]
  
  return (
    <>
    <div className="flex justify-center w-full my-8 gap-2">
      {codeInputs.map((input,index)=>(
        < Input key={index} 
              className='border border-first-color focus:border-none rounded px-2 py1 w-12 text-center'
              />
      ))}
    </div>
    <BtnsNextBack nextText={"Next"} isDisabled={true} backText='back' />
    </>
  )
}

export default EmailVerify
