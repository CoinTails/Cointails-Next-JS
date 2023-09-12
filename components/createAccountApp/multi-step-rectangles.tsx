import { useMultiStepsForm } from '@/hooks/useMultiStepsForm';
import React from 'react'


const MultiStepsRectangles = () => {
  const {step
  }=useMultiStepsForm();

  return (
    <ul className=" my-4   list-none flex gap-2 justify-center">
        <li className={`border-2 ${step==1?"flash-color":"bg-transparent"} 
         rounded-xl h-5 w-28 lg:w-28
         border-secondary-color-theme 
         `}></li>
        <li className={`border-2 ${step==2?"bg-secondary-color-theme":"bg-transparent"} 
         border-secondary-color-theme 
         rounded-xl h-5 w-28 lg:w-28
         `}></li>
        <li className={` ${step==3?"bg-secondary-color-theme":"bg-transparent"} 
          border-2 rounded-xl h-5 w-28 lg:w-28
         border-secondary-color-theme 
         `}></li>
      </ul>
  )
}

export default MultiStepsRectangles
