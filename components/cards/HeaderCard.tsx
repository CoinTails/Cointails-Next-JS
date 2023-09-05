import Image from "next/image"
import fullLogo from "../../public/images/fullLogo.png"
import UserDropDownCard from "./UserDropDownCard"
import BecomeSallerAndSearch from "./BecomeSallerAndSearch"
const HeaderCard = () => {
  return (
    <>
    <div className="mt-2 w-full flex justify-between items-center">
      <Image className="w-52  md:w-80" src={fullLogo} alt="index Image"/>
      <UserDropDownCard />
    </div>
    <BecomeSallerAndSearch />
    </>
  )
}

export default HeaderCard
