"use client";
import React, { useState } from "react";
import { bruno_ace } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import OurLogo from "@/public/images/indexLogo.svg";
import Coin from "@/public/images/Coin.svg";
import Tail from "@/public/images/Tails.svg";
import CenterCoinTail from "@/components/cards/CenterCoinTail";
import NotifyMeModal from "./notifyme-modal";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from 'react-hot-toast';

// configure form schema
const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),});

const NotifyMe = () => {
  const [isPopper, setisPopper] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  type ValidateionSchema = z.infer<typeof formSchema>;

  const form = useForm<ValidateionSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onsubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://cointails.onrender.com/waitlist",
        values
      );
      console.log(response.status)
      if(response.status === 200){
        setisPopper(true)
      }else if( response.status === 302){
        toast.error(response.data)

      } else if(response.status === 400){
        toast.error('Faild to read body')
      }else if(response.status === 500){
        toast.error('an error occurred')
      }
      else{
        toast.error("email already exist")
      }
    } catch (error) {
      toast.error(`${error}`)

      console.log(error);
    }
  };

  return (
    <div className={cn(bruno_ace.className, "http://localhost:8000/api/auth/verifyme/")}>
      <div
        className="bg-gradient-radial-circle-left  
      w-[100vw] mx-auto h-[100vh] overflow-hidden z-10"
      >
        <div
          className="flex flex-col justify-start  lg:px-40
         md:justify-between w-full md:w-[60%] md:max-w-[60%] h-[100vh] px-4 py-4 md:py-10"
        >
          {/* Large screen */}
          <div className="hidden md:block">
            <CenterCoinTail
              ourLogoSrc={OurLogo}
              coinLogoSrc={Coin}
              tailLogoSrc={Tail}
            />
          </div>
          {/* Small screen */}
          <div className="block  md:hidden mb-4 transform  sm:scale-110 md:mb-4">
            <CenterCoinTail
              ourLogoSrc={OurLogo}
              coinLogoSrc={Coin}
              tailLogoSrc={Tail}
            />
          </div>
          <div className="rounded-xl mt-4 mx-0  sm:px-8 py-4 sm:p-4 flex flex-col justify-center items-center">
            <h2 className="text-main-paragraph-color text-[10px] text-center sm:text-md  font-bold">
              ENTER YOUR MAIL TO GET NOTIFIED WHEN WE ARE LIVE
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onsubmit)}
                className="flex flex-col items-center justify-center"
              >
                <div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className="relative w-full transform sm:scale-105  my-4 sm:my-8">
                       <div>
                       <div className="absolute left-[-5px] rounded-full bg-primary-second-color h-full w-20">
                          <div className="h-full w-full flex justify-center items-center text-white">
                            <Mail className="cursor-pointer md:cursor-auto text-center w-8 h-8" />
                          </div>   
                        </div>
                        <Input
                            {...field}
                            className="rounded-full text-primary-second-color 
                      focus:ring-primary-second-color border-2 focus:border-3 
                      hover:border-3 ps-20 py-6 md:py-8 border-primary-second-color
                       focus:outline-none hover:outline-primary-second-color"
                            placeholder="YOURMAIL@GMAIL.COM"
                          />
                       </div>
                        </FormControl>
                          <FormMessage className="text-center"/>
                        <div>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  // onClick={()=>{setisPopper(true)}}
                  style={{
                    background:
                      "radial-gradient(circle at right, #A049E3 40%, #7149E3 80%)",
                  }}
                  className="w-fit block rounded-full leading-[0.25rem]  text-center py-6 sm:py-8 px-8 sm:px-12"
                >
                  NOTIFY ME !
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-100    ${
          isPopper ? "block" : "hidden"
        }`}
      >
        <NotifyMeModal />
      </div>
    </div>
  );
};

export default NotifyMe;
