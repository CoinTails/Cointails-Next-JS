"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription } from "@/components/ui/form"
  import { Input } from "../ui/input"
 import * as z from "zod"

 import { zodResolver } from "@hookform/resolvers/zod"
 import { useForm } from "react-hook-form"
 import {CheckSquare,Eye,EyeOff,UserIcon} from "lucide-react";

 import axios from "axios";
 import toast from "react-hot-toast"
 const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const SendCTSPopOver = () => {
  const[loading,setLoading]=useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  const onSubmit = async (values:z.infer<typeof formSchema>)=>{
    try {
        setLoading(true);
        const response = await axios.post('/api/stores',values)
        toast.success("created store")
        // window.location.replace(`${response.data.id}`)
    }catch(error){
        toast.error(`${error}`)
        console.log(error)

    }finally {
        setLoading(false)
    }
}
  return (
    <>
  <Form {...form}>
      <form className="my-8 flex flex-col items-center">
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
                    type="password"
      
                    placeholder="Create Password"
                    className="h-14 border border-first-color
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
                  <div className="absolute top-1/2 right-2 transform
                                   -translate-y-1/2
                                   pointer-events-none">
                    <Eye className="h-4 w-4 text-first-color font-extralight" />
                  </div>
            </div>
                      </FormControl>
                <FormMessage  />

            </FormItem>

        )}
      />

          <Button 
          variant={"default"}
          size={"lg"}
          className="bg-first-color flex justify-between"
          >
            Process
            <CheckSquare className={"h-4 w-4 sm:w-5 sm:h-5 font-bold ml-2"}/>



          </Button>

 
       </form>
    </Form>

    </>
  )
}
export default SendCTSPopOver