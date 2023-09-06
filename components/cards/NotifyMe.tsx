
import OurLogo from "../../public/images/indexLogo.svg";

import Coin from "../../public/images/Coin.svg";
import Tail from "../../public/images/Tails.svg"

import { bruno_ace } from '@/app/fonts'
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
const NotifyMe = () => {
  return (
    <div
     className={cn(bruno_ace.className,' h-[100vh] relative max-w-xl')}
    >
            <div style={{
              top:"-100vh",
              background: "radial-gradient(circle at left, #eee 60%, #A049E3 40%, #7149E3 80%)"
            }} className='w-[100vw] h-[100vh] overflow-hidden z-10 '>
            <div className="flex flex-col justify-between w-[60%] 
            max-w-[60%] h-[100vh] px-11 py-11">
            <div className="flex flex-col items-center justify-between  ">
              <div className="flex flex-col justify-center items-center">
              <Image src={OurLogo} className="w-32 h-32 lg:w-40 md:h-40  mb-8" alt=" mainlogo" />
              <div className="flex mb-4">        
                <Image className="w-52" src={Coin} alt=" Coin Logo" /> &nbsp; &nbsp;
                <Image className="w-52" src={Tail} alt=" Tail Logo" />
                </div>
                <p className="text-sm font-bold sm:text-md text-primary-second-color">REVOLUTIONISING E-COMMERCE USING WEB 3</p>
            
            </div>
            </div>
            <div className="my-10 flex flex-col justify-center items-center ">
              <h2 className="text-md text-first-dark-color font-bold">ENTER YOUR MAIL TO GET NOTIFIED WHEN ARE LIVE</h2>
              <div className="relative w-full my-8">
                <div className="absolute left-[-5px] rounded-full bg-primary-second-color  h-full w-20 ">
                  <div className="h-full w-full  flex justify-center items-center  text-white">
                        <Mail className="text-center w-8 h-8"/>
                  </div>
                </div>
                <Input 
                
                className=" rounded-full text-primary-second-color border-2 px-20 py-8
                     border-primary-second-color focus:outline-none
                     focus:border-none
                      hover:outline-primary-second-color"  placeholder="YOURMAIL@GMAIL.COM" />
              </div>
              <Button style={{
                background: "radial-gradient(circle at right, #A049E3 40%, #7149E3 80%)"
              }} className="rounded-full  py-8 px-12 text-center" >NOTIFY ME !</Button>
            </div>
              </div>
      </div>
    </div>
  )
}

export default NotifyMe
