import React, { ReactElement } from 'react'
import { Button } from '@/components/ui/button'
interface BtnsNextBackProps {
  className?:string,
  nextText?:string,
  backText?:string,
  isDisabled?:boolean,
  mainColor?:string,
  secondColor?:string,
  nextIcon?:ReactElement,
  backIcon?:ReactElement

}

import { useMultiStepsForm } from '@/hooks/useMultiStepsForm'
const BtnsNextBack:React.FC<BtnsNextBackProps> = ({
  nextText,
  backText,
  nextIcon,
  backIcon,
  mainColor,
  secondColor,
  className,
  isDisabled=false
}) => {
  const {step,setStep,next,setNext,previous,setPrevious
  }=useMultiStepsForm();
  const handleNext=()=>{
    {next !== 3?setNext():null}

    console.log(step)

  }
  const handlePrevious=()=>{
    console.log(step)
    setPrevious();
    {previous !== 0?setNext():null}

    
  }

  return (
    <div className={`flex  justify-between max-w-[100%] my-8
            ${nextText?'flex-row-reverse':'flex-row'}`}>
             <Button
                  type={step===3 ?"submit": "button"}
                  disabled={step===3 }
                  onClick={handleNext}
                  className={` transition-all duration-75   ml ${nextText?'':'hidden'} 
                   hover:text-white 
                    px-4 py-6 text-xl
                     font-bold sm:px-20 bg-secondary-color-theme hover:bg-secondary-color-theme `}
                  >
                  {nextText} <span className='ml-4 hidden sm:block'>{nextIcon && nextIcon}</span>
        </Button>
          <Button
                  disabled={step===1}
                  variant={"outline"}
                  onClick={handlePrevious}
                  className={`ml ${backText?'':'hidden'} hover:border-primary-second-color
                   hover:text-primary-second-color  py-6 text-xl font-bold  sm:px-20 
                   border-secondary-color-theme text-secondary-color-theme `}
                  >
                  {backText} <span className='hidden sm:block'> {backIcon && backIcon }</span>
          </Button>

        </div>
  )
}

export default BtnsNextBack
