"use client"
import React, { useState,useRef, useEffect } from 'react'
import CreateAccountHeader from "@/components/createAccountApp/CreateAccountHeader";
import ReusableCard1 from "@/components/ReuseableCard1"
import CreateAccountForm from "@/components/createAccountApp/create-account-form";
import EmailVerify from "@/components/createAccountApp/email-verify";
import LoginAccountForm from "@/components/createAccountApp/login-component";

import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
import EmailWalletbutton from './EmailWalletbutton';
const Multisteps = () => {
  const [isReady,setIsReady]=useState(false)
  const [cardHeight,setCardHeight] = useState<number>(0)
  const cardRef = useRef<HTMLDivElement>(null);

  const headerValues = {
    mainText:"First lets create",
    secondText:"Your Idintity"
    }

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

      useEffect(()=>{
        setIsReady(true)

      },[])
      
      console.log(cardHeight)
  
  return (
  <>
    {isReady && <>
    {step === 1 && (
  <ReusableCard1
  cardRef={cardRef}
  HeaderComponent={CreateAccountHeader}
  component={CreateAccountForm}
  mainText={"first let's create "}
  secondText={"Your Unique Identity"}
  className={`animate-card transition-all duration-100 ease-in-out
   opacity-${step==1?0:1} ${step === 1 ? 'active' : ''}`}
/>
)}

{step === 2 && (
  <ReusableCard1
    cardRef={cardRef}
    component={LoginAccountForm}
    HeaderComponent={CreateAccountHeader}
    mainText={"Let Make Account"}
    secondText={"Secure"}
    className={`opacity-${step==2?0:1} ${step === 2 ? 'active' : ''} main-heading transition-all 
    duration-75 ease-in-out  ${
      step === 2 ? `h-${cardHeight}` : 'h-0'
    }`}
    isActive={step==2?true:false}
  />
)}

<hr />

{step === 3 && (
  <>
    <ReusableCard1
      cardRef={cardRef}
      component={EmailWalletbutton}
      HeaderComponent={CreateAccountHeader}
      mainText={"these are Optional Steps"}
      className={`opacity-${step==3?0:1} ${step === 3 ? 'active' : ''} opacity-100
       transition-opacity main-heading duration-300 ease-in-out ${
        step === 3 ? `h-${cardHeight}` : 'h-0 opacity-0'
      }`}
      isActive={step==3?true:false}

    />
    {/* This after you will get code
    <CreateAccount 
    component={EmailVerify}
    HeaderComponent={CreateAccountHeader}
    mainText={headerValues.mainText}
    secondText={headerValues.secondText}
  /> */}
  </>
)}
</> 
}
  </>
  )
}

export default Multisteps
