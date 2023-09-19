"use client"
import React from 'react'
import recommendedSeller from "../../public/images/image2.png"
import Image from 'next/image'
import { ShoppingCart,Share2 } from 'lucide-react'
import { Button } from '../ui/button'
import { bruno_ace } from '@/app/fonts'

const RecommendedSeller = () => {
  let Product_text = `Volupta
tibus labor iosam num quam exe rci tationem cum que repellat
   persp iciatis tem pore esse est. Explicabo sed quo voluptas
    rerum asperiores veritatis amet sed ab. Tempore accusamus 
    accusantium at hic ut. Temporibus consequatur qui vero 
    voluptas qui. Pariatur atque autem illo iste quasi.Officiis 
    perspiciatis ratione in odio repellat quia.`

  let product_desc = Product_text.split(" ");
  let lengthcount = 0
  // {product_desc.map((desc,index)=>{
  // })}
  
  return (
    <div>
      <div className='my-2 rounded-xl 
        p-2  bg-white
         mx-2 
         flex  w-screen 
         sm:w-[400px]
         min-w-screen 
         max-w-screen
          sm:min-w-screen
           sm:max-w-screen
            border-1 
            border-gray-500
             h-48
             sm:h-56
              shadow-lg 
              transform 
              transition-all duration-500
              hover:scale-105
              static z-20 
              '>
      <Image className=' rounded-2xl max-w-full h-full min-h-full w-4/12' src={recommendedSeller} alt=""/>
      <div className='flex flex-col  w-8/12 ml-4'>
      <h2 className='text-first-dark-color text-left text-md sm:text-xl mb-2'>Blue Tealish Chair</h2>
      <p className='text-left hidden md:block leading-tight text-xs font-light
       text-gray-600'> 
       {/* large screen */}
       {product_desc.length >= 25?product_desc.slice(0,25).join(" "):product_desc.join(" ")}
      </p>
      {/* small screen  */}
      <p style={{
      }} className='text-left w-full block md:hidden text-xs font-extralight
       text-gray-600'> 
       {product_desc.length >= 20?product_desc.slice(0,20).join(" "):product_desc}
      </p>
      <div className='flex justify-between sm:flex-col'>
      <div className='flex justify-between items-center mt-2 md:mt-4'>
        <Button className='share-icon rounded-full text-center sm:block  bg-gray-200 ' variant={"ghost"} size={"icon"}>
          <Share2 className=' h-4 w-4  text-gray-500'/></Button>
        <Button style={{
          background:'rgba(113, 73, 227, 0.10'
        }}
            variant={"ghost"} className='rounded-3xl text-xs  text-primary-first-color'>
              <ShoppingCart className='h-4 w-4  mr-1 sm:mr-2  text-primary-first-color '/> 
              <span>
                Add to cart
                </span>
                </Button>
      </div>

      <div className='mt-4 mb-4 text-right text-xl md:text-3xl font-bold text-primary-second-color'>
        <span className={bruno_ace.className}>CTS </span>
        <span>4100</span>
      </div>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default RecommendedSeller
