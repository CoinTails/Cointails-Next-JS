"use client"

import LoginAccountForm from "../createAccountApp/login-component";
import CreateAccountHeader from "../createAccountApp/CreateAccountHeader";
import PalanceBtns from "./palanceBtns";

import Image from 'next/image'
import Cryptograpy from "../../public/images/cryptocurrency.svg"
import face1 from "../../public/images/face1.svg"
import CreateAccountForm from "../createAccountApp/create-account-form";
import Multisteps from "../createAccountApp/multisteps";
import MultistepPalance from "./MultistepPalance";

interface ChildComponentProps{
  HeaderComponent:React.FC<{mainText?:string;secondText?:string}>,
  MyComponent:React.FC,
  mainText?:string,
  secondText?:string,
  isEmail?:boolean,
}



const AccountPalance:React.FC<ChildComponentProps> = ({
  HeaderComponent:HeaderComponent,
  MyComponent,

}) => {
  const headerValues = {
    mainText:"header 1",
    secondText:"header second"
  
}
  
  return (
    <>
   <div className="">
   <div className="rounded-lg  border sm:py-auto pt-5 pb-2 px-0 sm:px-auto 
           border-secondary-color-theme ">
      <div className="mx-4 sm:mx-8 ">
        <MyComponent/>
        <HeaderComponent />
      </div>
   </div>
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
 </div>
 </>

  )
}

export default AccountPalance
