import React from 'react'
import AccountPalanceNav from '@/components/AccountPalanceNav';
import Multisteps from '@/components/createAccountApp/multisteps';
import LoginMultisteps from '@/components/loginApp/LoginMultisteps';

const LoginPage = () => {
  return (
    <div>
      <AccountPalanceNav  component={LoginMultisteps} />
    </div>
  )
}

export default LoginPage