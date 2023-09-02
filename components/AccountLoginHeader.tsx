import mainlogo from "../public/images/mainlogo.svg"
import userAvatar from "../public/images/userAvatar.svg"
import Image from 'next/image'


interface ChildComponentProps{
  component?:React.FC,
  }

const AccountLoginHeader:React.FC<ChildComponentProps> = ({
  component:Component
 }) => {
  return (
    <div className='flex mx-2 my-4 justify-between '>
        <div className='flex items-center justify-center'>
        <Image className='h-16 w-16 mr-4' src={mainlogo} alt="mainlogo"/>
        <header className='text-2xl font-bold'><span className='text- text-first-color ' >Coin</span>
                   <span className='text-secondary-color-theme'>Tails</span>
          
          </header>
        </div>
        {/* user  */}
        <div className='flex items-center justify-center'>
        <Image className='h-16 w-14 mr-4' src={userAvatar} alt="mainlogo"/>
        <div className='text-xl font-bold'><span className='text-first-color ' >Coin</span>
                   <span className='text-first-color'>Tails</span>
          </div>
        </div>
        </div>
  )
}

export default AccountLoginHeader
