import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
import React from 'react'


const MultiStepsRectangles = () => {
  const {step
  }=useMultiStepsForm();

  return (
    <ul className="my-2  list-none flex gap-2 justify-center">
        <li className={`border-2 ${step==1?"bg-secondary-color-theme":"bg-transparent"}  rounded 
         border-secondary-color-theme 
         h-3 w-24 lg:w-28`}></li>
        <li className={`border-2 ${step==2?"bg-secondary-color-theme":"bg-transparent"} 
          rounded 
         border-secondary-color-theme 
         h-3 w-24 lg:w-28`}></li>
        <li className={` ${step==3?"bg-secondary-color-theme":"bg-transparent"} 
            border-2 rounded 
         border-secondary-color-theme 
         h-3 w-24 lg:w-28`}></li>
      </ul>
  )
}

export default MultiStepsRectangles
