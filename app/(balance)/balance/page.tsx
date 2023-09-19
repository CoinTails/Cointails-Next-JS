
import AccountPalanceNav from "@/components/AccountPalanceNav"
import MultistepPalance from "@/components/palance/MultistepPalance"
const Home=(
)=> {
  
  return (    
    <div className=' w-full mx-auto text-center max-w-[992px]'>
      <AccountPalanceNav title={"create Your Palance"}  
      component={MultistepPalance}/>

      </div>
  )
}


export default Home
