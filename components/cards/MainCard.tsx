import Image from 'next/image'
import { Star,ShoppingCart } from 'lucide-react'
import CardImage from "../../public/images/cardImg.png"
import { Button } from '../ui/button'
const MainCard = () => {
  return (
    <div className="bg-white w-[250px]  rounded-lg shadow-lg ">
    <div className="flex w-full justify-center flex-col bg-white items-center ">
    <Image src={CardImage}  alt="Product Image"
     className="w-full  rounded-md" />
    <div className='rounded-xl w-full border-2 border-gray-100 shadow-lg'>
      <h2 className="text-lg ">Product Title</h2>
      <div className="flex items-center justify-center">
        <div className="flex items-center mr-2">
        <Star className=" text-yellow-500 "/>
        <Star className=" text-yellow-500 " />
        <Star className=" text-yellow-500 "/>
        <Star className=" text-yellow-500 "/>
        <Star className=" text-gray-400 "/>
        </div>
        <span>(559)</span>
      </div>
    <p className='font-bold items-center mt-2'>Ether 70.00</p>
  <Button className="bg-first-color font-bold text-white rounded-lg px-4 pt-2 my-4">
          Add to Cart 
        <ShoppingCart className='mx-2' />
  </Button>
    </div>
  </div>

  </div>
  )
}

export default MainCard
