import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { SendHorizonal } from "lucide-react"
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
 import BtnsNextBack from "@/components/createAccountApp/btns-next-back";
 import {CheckSquare,Eye,EyeOff,UserIcon} from "lucide-react";
 


 const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const SendCTSPopOver = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  return (
    <>
      <Popover>
  <PopoverTrigger>

  <li 
       className="flex min-w-fit items-center justify-center
         flex-inline rounded-lg
          font-bold text-base text-white sm:text-2xl
        bg-[#3399AA] hover:bg-[#72cada] mt-4 py-2 sm:py-2 px-16 sm:px-24"
       >
        Send
        <SendHorizonal className={"h-4 w-4 sm:w-5 sm:h-5 font-bold ml-2"}/>
      </li>
  </PopoverTrigger>
  <PopoverContent>
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
    </PopoverContent>
</Popover>
    </>
  )
}
export default SendCTSPopOver