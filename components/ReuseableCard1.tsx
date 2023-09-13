"use client"
import MultiStepsRectangles from "@/components/createAccountApp/multi-step-rectangles"
import { cn } from "@/lib/utils";
import { Rotate3d } from "lucide-react";
import { boolean } from "zod";


interface ChildComponentProps{
  HeaderComponent?:React.FC<{mainText?:string;secondText?:string}>,
  component:React.FC<{isEmail?:boolean}>,
  mainText?:string,
  secondText?:string,
  isEmail?:boolean,
  className?:string,
  isMultistep?:boolean,
  cardRef?:React.RefObject<HTMLDivElement>,
  cardHeight?:number,
  isActive?:boolean,
}

const ReusableCard1:React.FC<ChildComponentProps> = ({
  HeaderComponent:HeaderComponent,
  component:Component,
  mainText,
  secondText,
  isEmail=false,
  className,
  isMultistep=true,
  cardRef,
  cardHeight,
  isActive,

}) => {
  
  return (
    <>

<div
  ref={cardRef}
  className={cn(
    `rounded-lg border sm:py-auto w-full mx-8   my-10 sm:my-28
     md:w-10/12 lg:w-3/4 pt-5 pb-2 px-0 sm:px-auto
      border-secondary-color-theme   ${
      className && className
    }`,
    { active: isActive }
  )}
  style={{
    height: cardHeight ? `${cardHeight}px`:`fit-content`,
    opacity: cardHeight ? '1' : '1',
    transition:"1s "
  }}
>
 
  <div  className="mx-4 sm:mx-8 text-center">
    {HeaderComponent && <HeaderComponent mainText={mainText} secondText={secondText} />}
    {isMultistep && <MultiStepsRectangles />}
    <Component isEmail={isEmail}  />
  </div>
</div>

 
 </>

  )
}

export default ReusableCard1
