"use client";
import { useEffect, useState } from "react";


import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { AlertCircle, User as UserIcon, MailMinus, HelpCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BtnsNextBack from "../createAccountApp/btns-next-back";
import React from "react";
import TooltipProviderComponent from "../TooltipProvider";
import Link from "next/link";

interface CreateAccountProps {
  isEmail?:  boolean;
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
// component
const LoginUniqueName: React.FC<CreateAccountProps> = ({ isEmail }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const[toggleMail,setToggleMail]=useState(false)
  const HandleToggle =()=>{
    console.log(toggleMail)
    setToggleMail(!toggleMail)
  }
  // useEffect(()=>{
  //   setToggleMail(!toggleMail)
  // },[isEmail])
  const handleMouseEnter = () => {
    setIsTooltipOpen(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipOpen(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }
  return (
    <>
      {toggleMail?
      (
        <Form {...form}>
        <form onSubmit={handleSubmit} className="my-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl className=" focus-visible:border-none">
                  <div className="relative focus-visible:border-none">
                    <div className="absolute z-50 top-1/2 left-2 transform w-auto -translate-y-1/2 ">
                    
                        <UserIcon className="h-4 w-4  text-gray-500 font-extralight pointer-events-none" />
                     
                    </div>
                    <Input
                      type= "text"
                      placeholder= "Enter your Unique name"
                      
                      className="h-14  border relative -z-1 border-first-color
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                      {...field}
                    />
                   <div className="absolute z-50 top-1/2 right-2 transform w-auto -translate-y-1/2 ">
                      
                        <TooltipProviderComponent 
                                  tooltipTrigger={<HelpCircle className="h-4 w-4  text-first-color font-extralight pointer-events-none" />}
                                  tooltipContent={" Ex:johndoe@gmail.com"} />
                        
                       
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center mt-4">
          <div onClick={HandleToggle} className="text-secondary-color-theme hover:text-primary-second-color cursor-pointer">
            Login with Email</div>
          <BtnsNextBack  nextText="Next"/>         
          </div>
        </form>
      </Form>
      ):
      (

      <Form {...form}>
      <form onSubmit={handleSubmit} className="my-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className=" focus-visible:border-none">
                <div className="relative focus-visible:border-none">
                  <div className="absolute z-50 top-1/2 left-2 transform w-auto -translate-y-1/2 ">
                   
                      <MailMinus className="h-4 w-4 text-gray-500 font-extralight pointer-events-none" />
                  
                  </div>
                  <Input
                    type={"email"}
                    placeholder= "enter your email Address" 
                    
                    className="h-14  border relative -z-1 border-first-color
                       px-10 py-2 focus:outline-none
                       focus:border-none
                   pr-10 rounded-md "
                    {...field}
                  />
                 <div className="absolute z-50 top-1/2 right-2 transform w-auto -translate-y-1/2 ">
                   
                 <TooltipProviderComponent 
                                tooltipTrigger={<HelpCircle className="h-4 w-4  text-first-color font-extralight pointer-events-none" />}
                                tooltipContent={" Ex:johndoe@gmail.com"} />
                                         
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center mt-4">
        <button onClick={HandleToggle}  className="text-secondary-color-theme hover:text-primary-second-color cursor-pointer">
            {"Login With Username"}</button>
        <BtnsNextBack  nextText="Next"/>         
        </div>
      </form>
    </Form>

      )
       }
     

    </>
  );
};


export default LoginUniqueName;