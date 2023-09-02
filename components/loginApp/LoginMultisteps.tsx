"use client"
import React, { useState } from 'react'
import CreateAccountHeader from "@/components/createAccountApp/CreateAccountHeader";
import EmailWalletbutton from "@/components/createAccountApp/EmailWalletbutton";
import CreateAccount from "@/components/ReuseableCard1"
import CreateAccountForm from "@/components/createAccountApp/create-account-form";
import EmailVerify from "@/components/createAccountApp/email-verify";
import LoginAccountForm from "@/components/createAccountApp/login-component";

import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
import LoginForm from './loginUser';
import LoginUniqueName from './LoginUniqueUsername';
import Wallets from './Wallets';
import ReusableCard1 from '@/components/ReuseableCard1';


const LoginMultisteps = () => {
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
    <ReusableCard1 
    HeaderComponent={CreateAccountHeader}
    component={LoginUniqueName}
    mainText={headerValues.mainText}
    secondText={headerValues.secondText}
    isMultistep={false}
    isEmail={false}

    />
      }
      
      {step===2 &&
       <ReusableCard1 
       component={LoginForm}
       HeaderComponent={CreateAccountHeader}
       mainText={headerValues.mainText}
       secondText={headerValues.secondText}
       isMultistep={false}
       />
      }
      <hr/>
      {step===3 &&
       <ReusableCard1 
       component={Wallets}
       mainText={headerValues.mainText}
       secondText={headerValues.secondText}
       isMultistep={false}

       />
      }
    
      </>
  )
}

export default LoginMultisteps