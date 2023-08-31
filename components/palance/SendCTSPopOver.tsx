import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { SendHorizonal } from "lucide-react"
const SendCTSPopOver = () => {
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
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
    </>
  )
}
export default SendCTSPopOver