"use client"

import { Form,
         FormField,
         FormItem,
         FormLabel,
         FormControl,
         FormMessage,
         FormDescription
        } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { AlertCircle,User as UserIcon ,MailMinus } from "lucide-react";

import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import BtnsNextBack from "./btns-next-back";
import React from "react";
import { CreateProgramOptions } from "typescript";

interface CreateAccountProps {
  isEmail?:boolean,
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const CreateAccountForm:React.FC<CreateAccountProps> = ({
  isEmail
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
      <form className="my-8">
        
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
          <FormControl className=" focus-visible:border-none">
          <div className="relative focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  {!isEmail?
                   <UserIcon className="h-4 w-4 text-gray-500 font-extralight pointer-events-none" />
                  :

                  <MailMinus className="h-4 w-4 text-gray-500 font-extralight pointer-events-none" />
                  }

                  </div>
                  <Input
                    type={isEmail?"email":"text"}
                    placeholder={isEmail?"enter your email":"Enter your text"}
                    className="border border-first-color
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                    {...field}
                  />
                  <div className="absolute top-1/2 right-2 transform
                                   -translate-y-1/2
                                   pointer-events-none">
                    <AlertCircle className="h-4 w-4 text-first-color font-extralight" />
                  </div>
            </div>
                      </FormControl>
                <FormMessage  />

            </FormItem>

        )}
      />
      <BtnsNextBack nextText="Next" />   
      </form>
    </Form>
    </>
  )
}

export default CreateAccountForm
