import NotifyMe from "./components/NotifyMe";

const sendEmail = async (email:string)=>{
  try {
    const response = await fetch("https://cointails.onrender.com/waitlist",{
      method:"POST",
      body:JSON.stringify({
        "email":email,
        created_at:""
      })
    })
    const data = await response.json()
    console.log(data)
  }catch(err){
    console.log(err)
  }
}
const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second",    
  }
  return (
    <main  className="min-h-screen overflow-x-hidden bg-gradient-radial-circle-left ">
      <div className="min-[100vh] ">
      <NotifyMe />
      </div>
      {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}

      </main>
  )
}


export default Home
