import React from 'react'
import { ShoppingBag,Home,BadgePercent, GalleryHorizontal} from 'lucide-react'
const HorizonalScrollNav = () => {
  return (
    <div className='px-2 overflow-x-scroll  sm:px-4 flex font-normal items-center 
     justify-between min-w-[768px] h-20 bg bg-opacity-first-color' 
    style={{ scrollbarColor: 'none' }}>
        
        <div className=' flex justify-center items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
        
           <Home
            className=' 
             mr-2'/>
          Home
          </div>
          <div className=' flex justify-center items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
           <BadgePercent
            className='   mr-2'/>
          Offers
          </div>

          <div className='flex justify-center items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
          <ShoppingBag 
          className='  mr-2'/>
          Popular
          </div>
          <div className=' flex justify-center items-center text-first-dark-color
        transform transition-all duration-200 hover:scale-105 hover:font-bold hover:text-primary-first-color
      '>
           <GalleryHorizontal className=' mr-2'/>
           Categories
          </div>
        </div>
        
  )
}

export default HorizonalScrollNav

