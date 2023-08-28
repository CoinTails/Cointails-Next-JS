import React from 'react'
import { Wallet,MailMinus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BtnsNextBack from './btns-next-back'

const EmailWalletbutton = () => {
  return (
    <>
      <div className='flex my-4 justify-center gap-1'>
      <Button 
      variant={"outline"}
      className='flex justify-center border-2 flex-col h-auto max-w-[50%]'
      >
      <MailMinus className="w-4 h-4  text-secondary-color-theme my-2" />
      <h2 className='text-secondary-color-theme inline-flex mb-2
       text-[1rem] tracking-tight font-mono font-semibold text'
       
       >
        <span style={{'wordSpacing':"-4px"}}>Link Your Email account</span>
         </h2>
      <p className=' text-gray-400
       tracking-tight text-[0.60rem] leading-tight '
        style={{ }}>
          <span style={{'wordSpacing':"0.3px"}}>
          Helps in Signing In <br/>
        Incase you forgot your Password
          </span>
        </p>

      </Button>
      <Button 
      variant={"outline"}
      className='flex justify-center border-2 flex-col h-auto max-w-[50%]'
      >
      <Wallet className="w-4 h-4  text-secondary-color-theme my-2" />
      <h2 className='text-secondary-color-theme inline-flex mb-2
       text-[1rem] tracking-tight font-mono font-semibold text'
       
       >
        <span style={{'wordSpacing':"-4px"}}>Link Your Email account</span>
         </h2>
      <p className=' text-gray-400
       tracking-tight text-[0.60rem] leading-tight '
        style={{ }}>
          <span style={{'wordSpacing':"0.3px"}}>
          Helps in Signing In <br/>
        Incase you forgot your Password
          </span>
        </p>

      </Button>
      </div>
      <BtnsNextBack nextText={'next'} backText={"back "}  />

    </>
  )
}

export default EmailWalletbutton
