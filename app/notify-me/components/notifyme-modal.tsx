"use client"
import Lottie from "lottie-react"
import partyPopper from "@/public/images/partypopper.json"
import { bruno_ace } from '@/app/fonts';
import { cn } from "@/lib/utils";
const NotifyMeModal = () => {

  return (
     <div className={cn(bruno_ace.className,"absolute inset-0 z-40 w-full h-full bg-[#00000082]")}>
          <div className="fixed inset-0 flex  items-center justify-center z-50">
        <div className="bg-white w-3/4 sm:w-2/4 rounded-lg shadow-lg p-8">
          <div className="w-40 h-40">
        <Lottie animationData={partyPopper} loop={true} />
          </div>
        <p className="mb-4">This is a sample pop-up card created using Tailwind CSS.</p>
      </div>
      </div>
      </div> 
      
  );
};

export default NotifyMeModal;