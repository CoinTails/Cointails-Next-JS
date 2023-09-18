"use client"
import Lottie from "lottie-react"
import React from "react";
import partyPopper from "@/public/images/partypopper.json"
import { bruno_ace } from '@/app/fonts';
import { cn } from "@/lib/utils";
interface NotifyMeModalPros{
  modalRef:React.RefObject<HTMLDivElement>
}
const NotifyMeModal:React.FC<NotifyMeModalPros> = ({modalRef}) => {

  return (
     <div  className={cn(bruno_ace.className,`absolute inset-0 z-40  bg-[#00000082] ${modalRef} `)}>
        <div className="fixed  inset-0 mx-4 flex  items-center justify-center z-50">
        <div ref={modalRef} className="bg-white w-full flex
         flex-col items-center justify-center sm:w-2/4 text-end rounded-lg shadow-lg p-8">
          <div className="w-40 h-40 me-12">
        <Lottie className="flex justify-end items-end" animationData={partyPopper} loop={true} />
          </div>
          <h2 
          
          className="text-center my-12 text-primary-second-color font-bold text-5xl"><span className="opacity-50">W</span>
          <span className="o opacity-60">o</span>
          <span className="o opacity-75">h</span>oo</h2>
        <p className="mb-4  text-center text-main-paragraph-color font-bold">Your email was successfully added to our waiting list</p>
      </div>
      </div>
      </div> 
      
  );
};

export default NotifyMeModal;