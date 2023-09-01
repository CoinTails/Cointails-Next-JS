"use client"
import React, { useState } from 'react'
import CreateAccountHeader from "@/components/createAccountApp/CreateAccountHeader";
import EmailWalletbutton from "@/components/createAccountApp/EmailWalletbutton";
import CreateAccount from "@/components/ReuseableCard1"
import CreateAccountForm from "@/components/createAccountApp/create-account-form";
import EmailVerify from "@/components/createAccountApp/email-verify";
import LoginAccountForm from "@/components/createAccountApp/login-component";

import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
const Multisteps = () => {
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

      
  
  return (
    <>
    {step===1&&
    <CreateAccount 
    HeaderComponent={CreateAccountHeader}
    component={CreateAccountForm}
    mainText={headerValues.mainText}
    secondText={headerValues.secondText}
    />
      }
      {step===2 &&
       <CreateAccount 
       component={LoginAccountForm}
       HeaderComponent={CreateAccountHeader}
       mainText={headerValues.mainText}
       secondText={headerValues.secondText}
       />
      }
      <hr/>
      {step=== 3&&
      <>
      <CreateAccount 
      component={CreateAccountForm}
      HeaderComponent={CreateAccountHeader}
      mainText={headerValues.mainText}
      secondText={headerValues.secondText}
      />
        {/* This after you will get code
      <CreateAccount 
      component={EmailVerify}
      HeaderComponent={CreateAccountHeader}
      mainText={headerValues.mainText}
      secondText={headerValues.secondText}
      /> */}
      </>
    }
    
      </>
  )
}

export default Multisteps
