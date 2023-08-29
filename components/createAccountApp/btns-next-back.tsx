import React from 'react'
import { Button } from '@/components/ui/button'
interface BtnsNextBackProps {
  nextText?:string,
  backText?:string,
  mainColor?:string,
  secondColor?:string
}
const BtnsNextBack:React.FC<BtnsNextBackProps> = ({
  nextText,
  backText,
  mainColor,
  secondColor
}) => {
  return (
    <div className={`flex  justify-between max-w-[100%] my-4
            ${nextText?'flex-row-reverse':'flex-row'} mt-4 `}>
             <Button 
                  type="submit"
                  className={`ml ${nextText?'':'hidden'}   px-6 sm:px-10  bg-secondary-color-theme `}
                  >
                  {nextText}
          </Button>
          <Button 
                  variant={"outline"}
                  type="submit"
                  className={`ml ${backText?'':'hidden'}   px-6 sm:px-10 
                   border-secondary-color-theme text-secondary-color-theme `}
                  >
                  {backText}
          </Button>
        </div>
  )
}

export default BtnsNextBack
