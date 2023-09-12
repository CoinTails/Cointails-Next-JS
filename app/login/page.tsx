import React from 'react'
import AccountPalanceNav from '@/components/AccountPalanceNav';
import Multisteps from '@/components/createAccountApp/multisteps';
import LoginMultisteps from '@/components/loginApp/LoginMultisteps';

const LoginPage = () => {
  return (
    <div className=' w-full mx-auto text-center max-w-[992px]'>
      <AccountPalanceNav title={"Login to Your Account"}  component={LoginMultisteps} />
    </div>
  )
}

export default LoginPage
