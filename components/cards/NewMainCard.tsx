import React from 'react'
import recommendedSeller from "../../public/images/image2.png"
import Image from 'next/image'
import { ShoppingCart,Share2 } from 'lucide-react'
import { Button } from '../ui/button'
import { bruno_ace } from '@/app/fonts'

const RecommendedSeller = () => {
  return (
    <div className='rounded-xl 
       p-4  bg-white
         mx-2 
         flex 
          min-w-[500px]
           max-w-[500px]
            border-1 
            border-gray-500 h-72 shadow-lg '>
      <Image className='r rounded-2xl max-w-full h-full min-h-full w-4/12' src={recommendedSeller} alt=""/>
      <div className=' w-8/12 ml-4'>
      <h2 className='text-first-dark-color text-left text-xl mb-2'>Blue Tealish Chair</h2>
      <p className='text-left leading-tight text-xs font-light
       text-gray-600'> 
      Voluptatibus laboriosam numquam exercitationem cumque repellat perspiciatis tempore esse est. Explicabo sed quo voluptas rerum asperiores veritatis amet sed ab. Tempore accusamus accusantium at hic ut. Temporibus consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi.
       Officiis perspiciatis ratione in odio repellat quia.
      </p>
      <div className='flex justify-between items-center mt-4'>
        <Button className=' rounded-full bg-gray-200 ' variant={"ghost"} size={"icon"}>
          <Share2 className='text-gray-500'/></Button>
        <Button style={{
          background:'rgba(113, 73, 227, 0.10'
        }}
            variant={"ghost"} className='rounded-3xl text-primary-first-color'><ShoppingCart className='mr-2 text-primary-first-color'/> Add to cart</Button>
      </div>
      <div className='mt-4 mb-4 text-right text-3xl font-bold text-primary-second-color'>
        <span className={bruno_ace.className}>CTS </span>
        <span>4100</span>
      </div>
      </div>
    </div>
  )
}

export default RecommendedSeller
