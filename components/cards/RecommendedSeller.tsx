import React from 'react'
import recommendedSeller from "../../public/images/recommendedImg.png"
import Image from 'next/image'
import { UserCircle,Octagon } from 'lucide-react'
import { Button } from '../ui/button'
const RecommendedSeller = () => {
  return (
    <div className='rounded-xl  max-h-500 sm:max-h-none  p-4  bg-white
         mx-2 flex flex-col sm:flex-row w-11/12 sm:w-8/12 max-w-[800px]  border-1 border-gray-500 shadow-lg '>
      <Image className='max-w-full w-full max-h-48  sm:w-4/12' src={recommendedSeller} alt=""/>
      <div className='w-full sm:w-8/12 ml-4'>
      <div className='flex justify-between'>
        <div className='flex  items-center justify-center'>
        <UserCircle className='h-14 w-14 mr-2 text-gray-400'/>
        <div className='l leading-4 font-bold '>
          Jamal 
          <p className='text-first-color font-normal'>Jewelry</p>
        </div>
          </div>
        <Button className='text-white mx-4 my-4 bg-first-color px-4 sm:px-8' >Follow</Button>
      </div>
      <p className='text-left leading-tight text-md  font-light text-gray-600'>Lorem ipsum dolor sit amet consectetur. Nunc id donec justo dolor fermentum nulla. Aenean sed vel viverra tortor nunc morbi. Purus ornare fermentum ut massa.</p>
      <div className='flex justify-between items-center'>
        <p className='flex items-center my-4 text-gray-600 '><Octagon className='mr-2 h-6 w-6'/> 150 PRODUCTS</p>
        <p className=' text-secondary-color-theme underline'>View Products</p>
      </div>
      </div>
    </div>
  )
}

export default RecommendedSeller
