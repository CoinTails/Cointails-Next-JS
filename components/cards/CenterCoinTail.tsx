
import React from 'react'

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
  return (
    <>
    <div className= "flex flex-col items-center justify-between  ">
              <div className="w-full flex flex-col  justify-center  items-center">
              <Image src={ourLogoSrc} className="w-28   sm:w-32 h-32 lg:w-40 md:h-40  mb-4" alt=" mainlogo" />
              <div className="transform scale-110 rounded-full p-4 flex bg-transparent bg-[#eee]  mb-4">        
                <Image className="transform scale-110 w-32 sm:w-52" src={coinLogoSrc} alt=" Coin Logo" /> &nbsp; &nbsp;
                <Image className="w-32 sm:w-52" src={tailLogoSrc} alt=" Tail Logo" />
                </div>
                <p className="transform scale-110 text-sm hidden md:block font-bold sm:text-md 
                text-primary-second-color">REVOLUTIONISING E-COMMERCE USING WEB 3</p>
            
            </div>
            </div>
        </>     
  )
}

export default CenterCoinTail
