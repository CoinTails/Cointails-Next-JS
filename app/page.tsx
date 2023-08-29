import Multisteps from "@/components/createAccountApp/multisteps"


const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second"
    
  }
  return (
    <main className=" flex flex-col gap-2    justify-center items-center m-20 text-center " >
      <Multisteps/>
      </main>
  )
}


export default Home