
"use client"
import { Search } from "lucide-react"
import TickerStar from "../../public/images/TickerStar.png"
import { Form,FormField,FormControl,FormItem,FormMessage } from "../ui/form"
import { Input } from '../ui/input'
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import Image from "next/image"
const BecomeSallerAndSearch = () => {
  const form = useForm();
  return (
    <div className="w-full flex justify-between items-center ">
      <Form {...form} >
      <form className="my-8 w-1/2" >
    {/* Search field */}
    <FormField
        
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4">
          {/* <FormControl className=" focus-visible:border-none"> */}
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <Search className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <Input
                    type="text"
                    
                    placeholder="Search Store"
                    className="h-14 border-none border-transparent 
                        bg-main-background-color
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
            </div>
                      {/* </FormControl> */}
                <FormMessage  />

            </FormItem>

        )}
      />
      
      </form>
      </Form>
      <Button className="hidden md:block text-primary-second-color bg-main-background-color" variant={"outline"} >
        <span className="hidden lg:block">
          Become a Seller on Coin Tails
          </span>
        <Image src={TickerStar} alt={"TickerStar"} /></Button>
    </div>

  )
}

export default BecomeSallerAndSearch
