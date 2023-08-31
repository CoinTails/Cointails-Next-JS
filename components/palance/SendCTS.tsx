import { Form,
         FormField,
         FormItem,
         FormLabel,
         FormControl,
         FormMessage,
         FormDescription
        } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { Shield } from "lucide-react";

import { Input } from "@/components/ui/input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import BtnsNextBack from "@/components/createAccountApp/btns-next-back";
import { UserIcon ,SendHorizonal} from "lucide-react";
import SendCTSPopOver from "./SendCTSPopOver";
const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const SendCTS = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <>
    <div className="flex justify-center flex-col items-center">
    <ul
      className=' 
       inline-flex list-none justify-center  w-[fit-content]
        gap-2 py-2 h-auto cursor-pointer my-2  pt-2 rounded-xl px-6   
         items-center text-white '
      style={
        {
          background: "linear-gradient(268deg, #CB46CB 0%, #9E4ABC 100%),linear-gradient(284deg, #44DADA 0%, #39BCD1 100%), #D8F9FF",
          boxShadow: "0px 28px 64px 0px rgba(0, 0, 0, 0.05)"
           }
      }>
        <li className='text-xl font-semibold'>
            Your Balance</li>
        <li className='text-2xl font-black'>CTS 5000</li>

      </ul>
    <Form {...form}>
      <form className="my-4 w-full">
    {/* Password */}
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4">
          <FormControl className=" focus-visible:border-none">
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <UserIcon className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <Input
                    type="text"

                    placeholder="Enter Recipient's Unique Username"
                    className="border font-bold text-first-color border-first-color
                         px-10 h-14 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
                
            </div>
                      </FormControl>
                <FormMessage  />

            </FormItem>

        )}
      />

      {/* Password confirm */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4">
          <FormControl className=" focus-visible:border-none">
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <div className="h-4 w-4 text-sm text-gray-500
                   font-extralight pointer-events-none" >CTS</div>
                  </div>
                  <Input
                    type="text"
      
                    placeholder="Enter Amount"
                    className=" border  border-first-color
                        font-bold text-first-color 
                         px-10 h-14 py-4 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
            </div>
                      </FormControl>
                <FormMessage  />

            </FormItem>

        )}
      />   
        <SendCTSPopOver />   
      </form>
    </Form>
    </div>

    </>
  )
}

export default SendCTS
