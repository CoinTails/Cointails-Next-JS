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

const formSchema = z.object({
    name:z.string().min(1,{message:"يجب ان يحتوي الاسم على الاقل حرف واحد"}),
});

export const StoreModal = () => {
    const router = useRouter();
    const {pathname} = router;

    console.log({...router})
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false)

    type ValidationSchema = z.infer<typeof formSchema>;
    const form = useForm<ValidationSchema>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",

        }
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
            title="create store"
            description="add new store to manage product and categories"
            isOpen ={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField 
                                control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading} 
                                                placeholder="Name" {...field}/>
                                        </FormControl>
                                        <FormMessage  />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full" >
                                <Button variant={"outline"}
                                    disabled={loading}
                                     onClick={storeModal.onClose}>Cancle</Button>
                                <Button 
                                        disabled={loading}
                                        type="submit">Continue</Button>

                            </div>
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


