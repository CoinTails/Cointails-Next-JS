"use client"
import { UserCircle2 } from "lucide-react"
import mainlogo from "../public/images/mainlogo.svg"
import userAvatar from "../public/images/userAvatar.svg"
import Image from 'next/image'
import { useState,useEffect } from "react"
import HeaderCard from "./cards/HeaderCard"


interface ChildComponentProps{
  title:string,
  component:React.FC,

  }

const AccountPalanceNav:React.FC<ChildComponentProps> = ({
  component:Component,
  title:title
 }) => {
  const [isReady,setIsReady]=useState(false)
  useEffect(()=>{
    setIsReady(true)

  },[])
  return (
    <>
    {isReady && <div>

<div className='flex m-4 justify-between '>
  <HeaderCard/>
  </div>
  <div className='flex flex-col items-center justify-center my-20'>
    <h1 className='text-3xl my-4 font-bold text-secondary-color-theme'>
      {title}</h1>
    <Component  />
  </div>
</div>}
    </>
  )
}

export default AccountPalanceNav
