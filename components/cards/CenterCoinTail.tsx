"use client"
import React, { useEffect, useState } from 'react'

import Image from "next/image";


interface ImageComponentProps {
  ourLogoSrc: string;
  coinLogoSrc: string;
  tailLogoSrc: string;
}
const CenterCoinTail: React.FC<ImageComponentProps> = ({
      ourLogoSrc,
      coinLogoSrc,
      tailLogoSrc
}) => {
  const[screenHeight,setScreenHeight]=useState(0)
  useEffect(()=>{
    const currentScreenHeight = window.innerHeight;
    setScreenHeight(currentScreenHeight)
  },[screenHeight])
  return (
    <>
    <div className= "flex flex-col items-center justify-between  ">
              <div className="w-full flex flex-col  justify-center  items-center">
              <Image src={ourLogoSrc} className={`${screenHeight <600?'w-16'  sm:'h-20'}  sm:w-32 ${screenHeight <600?'h-16'  :'h-28'} lg:w-40 md:h-40 `} alt=" mainlogo" />
              <div className="transform sm:scale-110 rounded-full pt-4 flex bg-transparent bg-[#eee]  sm:mb-4">        
                <Image className={`transform scale-110 ${screenHeight <600?'h-16'  :'h-28'} w-28 sm:w-52`} src={coinLogoSrc} alt=" Coin Logo" /> &nbsp; &nbsp;
                <Image className={`${screenHeight <600?'h-16'  :'h-28'} w-28 sm:w-52`} 
                src={tailLogoSrc} alt=" Tail Logo" />
                </div>
                <p className="transform text-center w-full sm:scale-110 text-[10px] hidden md:block font-light  sm:text-xs 
                text-primary-second-color">REVOLUTIONISING E-COMMERCE USING WEB 3</p>
            
            </div>
            </div>
        </>     
  )
}

export default CenterCoinTail
