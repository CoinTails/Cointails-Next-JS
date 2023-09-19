import { Button } from '../ui/button'
import { SendHorizonal,Share } from 'lucide-react'
import Image from 'next/image'
import Cryptograpy from "../../public/images/cryptocurrency.svg"
import face1 from "../../public/images/face1.svg"
import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
const PalanceBtns = ({

}) => {
  const {step,setStep,next,setNext,previous,setPrevious
  }=useMultiStepsForm();

  const handleNext=()=>{
    setNext();

  }
  
  const handlePrevious=()=>{
    setPrevious();
    
  }
  
  




  return (
    <>
    <div className="flex items-center flex-col  gap-2">
      <div 
      className=' 
       flex h-auto cursor-pointer my-4  pt-2 rounded-xl px-6 w-auto  flex-col
         items-center text-white '
      style={
        {
          background: "linear-gradient(268deg, #CB46CB 0%, #9E4ABC 100%),linear-gradient(284deg, #44DADA 0%, #39BCD1 100%), #D8F9FF",
          boxShadow: "0px 28px 64px 0px rgba(0, 0, 0, 0.05)"
           }
      }>
        <div className='text-xl font-semibold'>
            Your Balance</div>
        <div className='text-5xl leading-relaxed  font-black'>CTS 5000</div>

      </div>
    <div
    className='grid text-2xl cursor-pointer w-full grid-cols-2 gap-2'>
      <Button
        onClick={handleNext}
        type={'button'}
       variant={"default"}
       className={" font-bold text-base sm:text-2xl bg-[#3399AA] hover:bg-[#72cada] py-6 sm:py-8 px-auto sm:px-24"}
       >
        Send
        <SendHorizonal className={"h-4 w-4 sm:w-6 sm:h-6 font-bold ml-2"}/>
        
      </Button>
      <Button 
       onClick={handleNext}
       variant={"default"}
       className={" font-bold text-base sm:text-2xl  bg-[#9B619B]  hover:bg-[#e5c4e5]  py-6 sm:py-8 px-auto sm:px-22"}
       >
        Receive
        <Share className={"h-4 w-4 sm:w-6 sm:h-6 font-bold transform -rotate-180 text mx-2"}/>
        
      </Button>
      <Button 
       variant={"outline"}
       className=" font-bold text-base tracking-tighter sm:tracking-normal sm:text-xl text-[#3399AA]
         border-2 border-[#3399AA]  hover:border-[#72cada]  hover:bg-transparent hover:text-[#72cada]   py-6 sm:py-8 px-auto sm:px-24"
       >
        Send Ext. Wallet
        
      </Button>
      <Button 
       variant={"outline"}
       className="font-bold text-base tracking-tighter sm:tracking-normal  md:text-lg text-[#9B619B]
        hover:border-[#e5c4e5] hover:bg-transparent hover:text-[#e5c4e5]  border-2  border-[#9B619B]   py-6 sm:py-8 px-auto 
        sm:px-24"
       >
        Receive Ext. Wallet

        
      </Button>
    </div>

        <div className='flex mt-8 gap-x-4 text-sm justify-center text-gray-500 '>
          <div className='flex justify-center items-center '>
          <Image src={face1} className='mx-1 w-4 h-4' alt="cryptogray icon"/>
          Secured
          </div>
          <div className='flex justify-center items-center '>
          <Image src={Cryptograpy} className='mx-1 w-4 h-4' alt="cryptogray icon"/>
            Encrypted
          </div>
        </div>
    </div>
    
    </>
  )
}

export default PalanceBtns

