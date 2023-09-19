"use client";
import React,{useState,useEffect} from 'react'
import { ShoppingBag,Home,BadgePercent, GalleryHorizontal, AlignJustify} from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button';
const HorizonalScrollNav = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    setIsComplete(true)
  }, [])

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <div className="container relative flex flex-col mx-auto bg-white">
          <div className={`relative hidden md:flex  flex-wrap items-center
           justify-between w-full  bg-opacity-first-color group py-7 shrink-0`}>
        <div className=' flex mx-2 justify-center
         items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105
         hover:font-bold hover:text-primary-first-color bg-opacity-first-color
      '>
        
           <Home
            className=' w-4 h-4 
             mr-2'/>
          Home
          </div>
          <div className=' flex justify-center mx-2 items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
           <BadgePercent
            className='w-4 h-4    mr-2'/>
          Offers
          </div>

          <div className='flex justify-center mx-2  items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
          <ShoppingBag 
          className='w-4 h-4   mr-2'/>
          Popular
          </div>
          <div className=' flex justify-center mx-2 items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
           <GalleryHorizontal className='w-4 h-4  mr-2'/>
           Categories
          </div>
        </div>
    <Button variant={"outline"}  className='block sm:hidden transition-all w-fit duration-300 ease-in-out' onClick={toggleLinks}>
                    <AlignJustify/>
                </Button>
        <div className={`selection:absolute w-full min-w-[100vw] z-20   ${showLinks?'flex':'hidden'}
                 flex   transition-all duration-300 ease-in-out
                 flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden
                  bg-white py-4 px-4 rounded-2xl s
                   top-full`}>
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" 
                    href="javascript:void(0)"><div className=' flex mx-2 justify-center
                    items-center text-first-dark-color
                   transform transition-all duration-200 hover:scale-105
                    hover:font-bold hover:text-primary-first-color
                 '>
                   
                      <Home
                       className=' w-4 h-4 
                        mr-2'/>
                     Home
                     </div>
                   </Link>
                    <Link className="text-sm font-normal
                          text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">
                            <div className='flex justify-center mx-2  items-center text-first-dark-color
                              transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
                            '>
                                                <ShoppingBag 
                          className='w-4 h-4   mr-2'/>
                          Popular
                          </div>
                     </Link>
                    <Link className="text-sm font-normal 
                    text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">
                      <div className=' flex justify-center mx-2 items-center text-first-dark-color
                        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
                      '>
                          <BadgePercent
                            className='w-4 h-4    mr-2'/>
                        Offers
                        </div>
                     </Link>
                    <Link className="text-sm font-normal text-dark-grey-700
                     hover:text-dark-grey-900" href="javascript:void(0)">Company</Link>
                    <button className="flex items-center text-sm font-normal text-black">Log In</button>
                    <button className="flex items-center px-4 py-2 text-sm font-bold 
                    rounded-xl bg-purple-blue-100 text-purple-blue-600 
                    hover:bg-purple-blue-600 hover:text-white transition duration-300">Sign Up</button>
                </div>

    </div>
        
  )
}

export default HorizonalScrollNav

