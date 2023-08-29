import MultiStepsRectangles from "@/components/createAccountApp/multi-step-rectangles"



interface ChildComponentProps{
  HeaderComponent:React.FC<{mainText?:string;secondText?:string}>,
  component:React.FC,
  mainText?:string,
  secondText?:string,
  isEmail?:boolean,
}

const CreateAccount:React.FC<ChildComponentProps> = ({
  HeaderComponent:HeaderComponent,
  component:Component,
  mainText,
  secondText,
  isEmail,

}) => {
  return (
    <>
   <div className="rounded-lg max-w-sm mx-4 w-11/12 lg:max-w-lg">
   <div className="rounded-lg  border border-secondary-color-theme ">
      <div className="mx-8 ">
      <HeaderComponent mainText={mainText} secondText={secondText}  />
      <MultiStepsRectangles />
      <Component  />
      </div>
   </div>
 </div>
 
 
 </>

  )
}

export default CreateAccount
