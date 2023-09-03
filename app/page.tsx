import Multisteps from "@/components/createAccountApp/multisteps"
import AccountPalance from "@/components/palance/AccountPalance"
import MainCard from "@/components/cards/MainCard"
import RecommendedSeller from "@/components/cards/RecommendedSeller"
const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second"
    
  }
  return (
    <main className=" flex flex-col gap-2    justify-center items-center my-20 text-center " >
      Top Products card
      <MainCard />

      Recommended Sellers card
      <RecommendedSeller />
      </main>
  )
}


export default Home
