import { UserCircle2 } from "lucide-react"
import mainlogo from "../public/images/mainlogo.svg"
import userAvatar from "../public/images/userAvatar.svg"
import Image from 'next/image'



interface ChildComponentProps{
  component:React.FC,
  }

const AccountPalanceNav:React.FC<ChildComponentProps> = ({
  component:Component,
 }) => {
  return (
    <div>

      <div className='flex m-4 justify-between '>
        <div className='flex items-center justify-center'>
        <Image className=' sm:h-16 h-14 w-14 sm:w-16 mr-4' src={mainlogo} alt="mainlogo"/>
        <header className='text-xl sm:text-2xl font-bold'><span className='text- text-first-color ' >Coin</span>
                   <span className='text-secondary-color-theme'>Tails</span>
          
          </header>
        </div>
        {/* user  */}
        <div className='flex items-center cursor-pointer justify-center'>
          <UserCircle2  className=' text-gray-200 h-14 w-14 mr-4' />
        {/* <Image 
        className='sm:h-14 md:h-16 w-14 md:w-16 sm:w-14 mr-4' 
        src={userAvatar} alt="mainlogo"/> */}
        <div className='text-xl hidden sm:block   font-bold'>
          <span className='text-first-color ' >John </span>
                   <span className='text-first-color'>Doe</span>
          </div>
        </div>
        </div>
        <div className='flex flex-col items-center justify-center my-20'>
          <h1 className='text-3xl my-4 font-bold text-secondary-color-theme'>Create Your Account</h1>
          <Component  />
        </div>
    </div>
  )
}

export default AccountPalanceNav
