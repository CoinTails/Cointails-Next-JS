import React from 'react'
import { ShoppingBag,Home,BadgePercent, GalleryHorizontal} from 'lucide-react'
const HorizonalScrollNav = () => {
  return (
    <div className='px-2 overflow-x-scroll  sm:px-4 flex font-normal items-center 
     justify-between w-full h-20 bg bg-opacity-first-color' 
    style={{ scrollbarColor: 'none' }}>
        
        <div className=' flex justify-center items-center text-first-dark-color
      '>
           <Home className=' text-main-paragraph-color mr-2'/>
          Home
          </div>
          <div className=' flex justify-center items-center mx-8
                     text-first-dark-color  '>
           <BadgePercent className=' text-main-paragraph-color mr-2'/>
          Offers
          </div>

        <div className=' flex justify-center items-center text-first-dark-color mx-8  '>
           <ShoppingBag className=' text-main-paragraph-color mr-2'/>
          Popular
          </div>
        <div className=' flex justify-center items-center text-first-dark-color mx-8  '>
           <GalleryHorizontal className=' text-main-paragraph-color mr-2'/>
           Categories
          </div>
        </div>
        
  )
}

export default HorizonalScrollNav

