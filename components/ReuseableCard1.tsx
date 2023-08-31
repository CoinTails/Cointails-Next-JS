import MultiStepsRectangles from "@/components/createAccountApp/multi-step-rectangles"



interface ChildComponentProps{
  HeaderComponent:React.FC<{mainText?:string;secondText?:string}>,
  component:React.FC,
  mainText?:string,
  secondText?:string,
  isEmail?:boolean,
  isMultistep?:boolean,
}

const ReusableCard1:React.FC<ChildComponentProps> = ({
  HeaderComponent:HeaderComponent,
  component:Component,
  mainText,
  secondText,
  isEmail,
  isMultistep=true

}) => {
  return (
    <>

   <div className="rounded-lg  border sm:py-auto pb-2 px-0 sm:px-auto 
           border-secondary-color-theme ">
      <div className="mx-4 sm:mx-8 ">
   <div className="rounded-lg max-w-sm mx-4 w-11/12 lg:max-w-lg">
   <div className="rounded-lg  border border-secondary-color-theme ">
      <div className="px-4">
      <HeaderComponent mainText={mainText} secondText={secondText}  />
      {isMultistep?<MultiStepsRectangles />:null}
      <Component  />
      </div>
 </div>
 
 
 </>

  )
}

export default ReusableCard1