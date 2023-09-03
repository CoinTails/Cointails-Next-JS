import React from 'react'
import recommendedSeller from "../../public/images/recommendedImg.png"
import Image from 'next/image'
import { UserCircle,Octagon } from 'lucide-react'
import { Button } from '../ui/button'
const RecommendedSeller = () => {
  return (
    <div className='rounded-xl  bg-white mx-2 flex w-11/12 sm:w-8/12 max-w-[800px]  border-1 border-gray-500 shadow-lg '>
      <Image className='w-3/12' src={recommendedSeller} alt=""/>
      <div className='w-9/12'>
      <div className='flex justify-between'>
        <div className='flex mx-2 items-center justify-center'>
        <UserCircle className='h-14 w-14 mr-2 text-gray-400'/>
        <div className='l leading-4 font-bold '>
          Jamal 
          <p className='text-first-color font-normal'>Jewelry</p>
        </div>
          </div>
        <Button className='text-white mx-4 my-4 bg-first-color px-4 sm:px-8' >Follow</Button>
      </div>
      <p className='text-left text-md  font-light'>Lorem ipsum dolor sit amet consectetur. Nunc id donec justo dolor fermentum nulla. Aenean sed vel viverra tortor nunc morbi. Purus ornare fermentum ut massa.</p>
      <div>
        <p><Octagon/> 150 PRODUCTS</p>
        <p>View Products</p>
      </div>
      </div>
    </div>
  )
}

export default RecommendedSeller
