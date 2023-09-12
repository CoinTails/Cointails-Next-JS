"use client"
import { cn } from "@/lib/utils";
import { Form,
         FormField,
         FormItem,
         FormLabel,
         FormControl,
         FormMessage,
         FormDescription
        } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { Eye,EyeOff,Shield } from "lucide-react";

import { Input } from "@/components/ui/input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import BtnsNextBack from "@/components/createAccountApp/btns-next-back";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

interface LoginAccountFormProps {
    className?:string,
    isEmail?:boolean
}
const LoginAccountForm:React.FC<LoginAccountFormProps> = ({
  
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <>
    <Form {...form}>
      <form className={cn("my-8 animate__animated animate__fadeIn")}>
    {/* Password */}
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4">
          <FormControl className=" focus-visible:border-none">
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <Shield className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
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

      {/* Password confirm */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4">
          <FormControl className=" focus-visible:border-none">
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <Shield className="h-4 w-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <Input
                    type="password"
      
                    placeholder="Confirm Password"
                    className="h-14 border border-first-color
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
                  <div className="absolute top-1/2 right-2 transform
                                   -translate-y-1/2
                                   pointer-events-none">
                    <EyeOff className="h-4 w-4 text-first-color font-extralight" />
                  </div>
            </div>
                      </FormControl>
                <FormMessage  />

            </FormItem>

        )}
      />
      <BtnsNextBack nextText={"Next"} backText={"Back"}/>
      </form>
    </Form>

    </>
  )
}

export default LoginAccountForm
