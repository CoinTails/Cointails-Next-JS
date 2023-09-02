import React, { ReactElement } from 'react'
import { Button } from '@/components/ui/button'
interface BtnsNextBackProps {
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
  isDisabled=false
}) => {
  const {step,setStep,next,setNext,previous,setPrevious
  }=useMultiStepsForm();
  const handleNext=()=>{
    setNext();
    console.log(step)

  }
  const handlePrevious=()=>{
    console.log(step)
    setPrevious();
    
  }

  return (
    <div className={`flex  justify-between max-w-[100%] my-4
            ${nextText?'flex-row-reverse':'flex-row'} mt-4 `}>
             <Button

                  disabled={step===3 && isDisabled}
                  onClick={handleNext}
                  type="submit"
                  className={`ml ${nextText?'':'hidden'}   px-6 sm:px-10  bg-secondary-color-theme `}
                  >
                  {nextText} <span className='ml-4'>{nextIcon && nextIcon}</span>
          </Button>
          <Button 
                
                  disabled={step===1}

                  variant={"outline"}
                  type="submit"
                  onClick={handlePrevious}
                  className={`ml ${backText?'':'hidden'}   px-6 sm:px-10 
                   border-secondary-color-theme text-secondary-color-theme `}
                  >
                  {backText} {backIcon && backIcon }
          </Button>

        </div>
  )
}

export default BtnsNextBack
