import NotifyMe from "./components/NotifyMe"
import NotifyMeModal from "./components/notifyme-modal"
const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second",    
  }
  return (
    <main  className="">
      <div className="">
      <NotifyMe/>
      </div>
      {/* <NotifyMeModal/> */}
      <div className="animate__animated animate__slideInDown">Hello, World!</div>
      {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}

      </main>
  )
}


export default Home
