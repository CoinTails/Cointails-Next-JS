"use client";
import * as z from "zod";
import axios from "axios"

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, 
        FormControl,
        FormField,
        FormItem,
        FormLabel,
        FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CheckSquare, Eye, UserIcon } from "lucide-react";


const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  
export const StoreModal = () => {
    const router = useRouter();

    console.log({...router})
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false)

    type ValidationSchema = z.infer<typeof formSchema>;
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
        <Modal 
            title="Enter Password to Proceed"
            description=""
            isOpen ={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="animate__animated animate__fadeIn space-y-4 rounded-xl py-2 pb-4">
                    <Form {...form}>
                    <form className="w-full  my-8 flex flex-col items-center">
    {/* Password */}
    <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          
          <FormItem className="my-4 w-full">
          <FormControl className=" focus-visible:border-none">
          <div className="w-full relative focus-visible:border-none">
                  <div className=" w-full absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <UserIcon className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <Input
                    type="password"
      
                    placeholder="Create Password"
                    className="w-full h-14 border border-first-color
                         px-10 py-2
                         
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
          className="mx-auto  flex min-w-fit  items-center justify-center
          flex-inline rounded-lg
           font-bold text-base text-white sm:text-2xl
         bg-[#3399AA] hover:bg-[#72cada] mt-4 py-8 sm:py-8 px-16 sm:px-24"
          >
            Process
            <CheckSquare className={"h-4 w-4 sm:w-5 sm:h-5 font-bold ml-2"}/>



          </Button>

 
       </form>

                    </Form>
                </div>
            </div>
        </Modal>
    )
}

// what did we do previuos 
// 1 - we create global modal to make modals accessable from entire app
// why we do this ?
// we do this to manage global state in our apps 

// how to add global modal state 
// 1 - we create modal store hook
// we use zod to validate inputs before we send it to data base 
//  we use 
// 
// 
// 
// 


