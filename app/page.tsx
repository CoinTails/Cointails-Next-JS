import CreateAccountHeader from "@/components/createAccountApp/CreateAccountHeader";
import EmailWalletbutton from "@/components/createAccountApp/EmailWalletbutton";
import CreateAccount from "@/components/createAccountApp/create-account"
import CreateAccountForm from "@/components/createAccountApp/create-account-form";
import LoginAccountForm from "@/components/createAccountApp/login-component";



const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second"
    
  }
  return (
    <main className=" flex flex-col gap-2   justify-center items-center mt-20 text-center " >
      <CreateAccount 
      component={LoginAccountForm}
      HeaderComponent={CreateAccountHeader}
      mainText={headerValues.mainText}
      secondText={headerValues.secondText}
      />
       <CreateAccount 
      component={EmailWalletbutton}
      HeaderComponent={CreateAccountHeader}
      mainText={headerValues.mainText}
      secondText={headerValues.secondText}
      />
      <hr/>
      <CreateAccount 
      component={CreateAccountForm}
      HeaderComponent={CreateAccountHeader}
      mainText={headerValues.mainText}
      secondText={headerValues.secondText}
      />
      
      </main>
  )
}


export default Home