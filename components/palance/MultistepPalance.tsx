"use client"
import React,{useState,useEffect,useRef} from 'react'
import AccountPalance from './AccountPalance'
import PalanceBtns from './palanceBtns'
import CreateAccountHeader from '../createAccountApp/CreateAccountHeader'
import ReusableCard1 from '../ReuseableCard1'
import Image from 'next/image'

import Cryptograpy from "../../public/images/cryptocurrency.svg"
import face1 from "../../public/images/face1.svg"
import SendCTS from './SendCTS'

import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';

const MultistepPalance = ({}) => {

  const [isReady,setIsReady]=useState(false)
  const [cardHeight,setCardHeight] = useState<number>(0)
  const cardRef = useRef<HTMLDivElement>(null);

    const {step,setStep,next,setNext,previous,setPrevious
      }=useMultiStepsForm();
    
      const handleNext=()=>{
        setNext();

      }
      
      const handlePrevious=()=>{
        setPrevious();
        
      }
      
      
      useEffect(()=>{
        if(cardRef.current){
          setCardHeight(cardRef.current.offsetHeight)
        }
      },[step])
      
    

  return (
    <>
   
   { step === 2 && <>
     <ReusableCard1 
             HeaderComponent={CreateAccountHeader} 
             component={PalanceBtns}
             isMultistep={false}
             className={`animate-card transition-all duration-100 ease-in-out
             opacity-${step==2?0:1} ${step === 2 ? 'active' : ''}`}
               />
   </>
   }
   { step === 1&& <>
 
              <ReusableCard1 
             HeaderComponent={CreateAccountHeader} 
             component={SendCTS}
             isMultistep={false}
             className={`animate-card transition-all duration-100 ease-in-out
             opacity-${step==1?0:1} ${step === 1  ? 'active' : ''}`}
             />
   </>
   }
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
