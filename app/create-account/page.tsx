import React from 'react'
import AccountPalanceNav from '@/components/AccountPalanceNav'
import Multisteps from '@/components/createAccountApp/multisteps'
const createAccountPage = () => {
  return (
    <>
    <div className=' w-full mx-auto text-center max-w-[992px]'>

    <AccountPalanceNav title={"create Your Account"}  component={Multisteps}/>
    </div>
    </>
  )
}

export default createAccountPage
