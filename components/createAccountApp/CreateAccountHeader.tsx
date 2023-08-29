import { ChildProps } from 'postcss'
import React from 'react'
interface HeaderProps {
  mainText?:string,
  secondText?:string
}
const CreateAccountHeader:React.FC<HeaderProps> = ({
  mainText='',secondText=''}) => {
  return (
    <h2 className="mt-4 md:inline-flex  mb-4 font-mono-sans
               text-lg  lg:text-xl">
                {mainText} 
              <i className="list list-none text-first-color">&nbsp;  {secondText}
              </i>
              
      </h2>
      
  )
}

export default CreateAccountHeader
