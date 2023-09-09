import React from 'react'
import AccountPalanceNav from '@/components/AccountPalanceNav'
import Multisteps from '@/components/createAccountApp/multisteps'
const createAccountPage = () => {
  return (
    <>
    <div className='mx-4'>

    <AccountPalanceNav title={"create Your Account"}  component={Multisteps}/>
    </div>
    </>
  )
}

export default createAccountPage
