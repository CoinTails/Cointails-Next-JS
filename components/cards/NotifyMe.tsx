
import { bruno_ace } from '@/app/fonts'
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import CenterCoinTail from "./CenterCoinTail"

// large screen image
import OurLogo from "../../public/images/indexLogo.svg";
import Coin from "../../public/images/Coin.svg";
import Tail from "../../public/images/Tails.svg"

import whiteLogo from "../../public/images/whiteLogo.svg"
import whiteCoin from "../../public/images/whiteCoin.svg"
import whiteTail from "../../public/images/whiteTail.svg"


const NotifyMe = () => {
  return (
    <div
     className={cn(bruno_ace.className,'')}
    >
            <div
            className=' bg-gradient-radial-circle-left rounded-3xl
             w-[90vw] mx-[2.5vw] h-[90vh] my-[2.5vh]  overflow-hidden z-10 '>
            <div className="flex flex-col justify-center lg:px-40 md:justify-between w-full md:w-[60%] 
            md:max-w-[60%] h-[100vh] px-4 md:py10 py-11">
              {/* large screen */}
              <div className='block md:block'>
              <CenterCoinTail ourLogoSrc={OurLogo} coinLogoSrc={Coin} tailLogoSrc={Tail} />
              </div>
              {/* small screen */}
              <div className='hidden mb-16 md:mb-4 md:hidden '>
              <CenterCoinTail ourLogoSrc={whiteLogo} coinLogoSrc={whiteCoin} tailLogoSrc={whiteTail} />
              </div>
            <div 
              style={{
                boxShadow: `-20px 20px 20px 0px rgb(152 99 192),
                20px 20px 20px 0px rgb(152 99 192),
                20px -20px 20px 0px rgb(152 99 192),-20px -20px 10px 0px rgb(152 99 192)
                
                `
    
              }}
             className="rounded-xl my-20 px-4 py-4 flex flex-col justify-center items-center ">
              <h2 className="text-[0.65rem] sm:text-md w-full
                 md:text-first-dark-color font-bold">
                  ENTER YOUR MAIL TO GET NOTIFIED WHEN ARE LIVE</h2>
              <div className="relative w-full my-8">
                <div className="absolute left-[-5px] rounded-full bg-primary-second-color  h-full w-20 ">
                  <div className="h-full w-full  flex justify-center items-center  text-white">
                        <Mail className="cursor-pointer md:cursor-auto text-center w-8 h-8"/>
                  </div>
          
                </div>
                <Input 
                
                className=" rounded-full text-primary-second-color
                   focus:ring-primary-second-color  border-2 focus:border-3 
                   hover:border-3 px-20 py-6 md:py-8
                     border-primary-second-color focus:outline-none
                     
                      hover:outline-primary-second-color"  placeholder="YOURMAIL@GMAIL.COM" />
              </div>
              <Button style={{
                background: "radial-gradient(circle at right, #A049E3 40%, #7149E3 80%)"
              }} className="hidden md:block rounded-full  py-8 px-12 text-center" >NOTIFY ME !</Button>
            </div>
              </div>
      </div>
    </div>
  )
}

export default NotifyMe
