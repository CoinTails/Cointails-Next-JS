"use client"
import toast, { Toaster } from "react-hot-toast";

const TestPage = () => {
  const notify = () => toast.error('Here is your toast.');
  return (
    <>
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </>
  //   <>

  //   {/* <div className="h-[100vh]  flex  justify-center items-center">
  //  <div className="relative w-25 h-25">
  //    <div className="transform rotate-45">
  //    <div style={{
  //      transform:"rotate3d(6,0,6,67deg)",
  //    }}  className="w-20 h-20 left-[-20px] top-0  absolute  border-2 border-black">
  //  <div>
  //     </div>
  //  {/* <div style={{
  //     transform:"rotate3d(6,0,6,67deg)",
      
  //   }} className="w-20 h-20  absolute right-[-20px]
  //   top-10 
  //      border-2 border-black">
  //   </div> */}
  //  {/* </div>

  //   </div>
  //   <div className="transform rotate-0">
  //    <div style={{
  //      transform:"skew(33deg,-54deg)",
  //    }}  className="w-20 h-20 transition-transform mitr left-[-20px] top-0  absolute  border-2 border-black">
  //  <div>
  //     </div> */}
  //  {/* <div style={{
  //     transform:"rotate3d(6,0,6,67deg)",
      
  //   }} className="w-20 h-20  absolute right-[-20px]
  //   top-10 
  //      border-2 border-black">
  //   </div> */}
  //  {/* </div>

  //   </div>
   
    
  //  </div>

  //   </div> */} */}
  //     {/* <div className=" 
  //     animate__animated animate__bounce">
  //       <div className="fusion-text fusion-text-1 hero-heading">
  //         <h1 className="section-h1">Heading</h1>
  //       </div>
  //       <div className="fusion-text fusion-text-2 hero-subheading1">
  //         <h2 className="section-h2">
  //           Level Two heading goes here
  //         </h2>
  //       </div>
  //       <div className="fusion-text fusion-text-3 hero-subheading2">
  //         <h4 className="section-h4">
  //           Level Three heading goes here
  //         </h4>
  //       </div>
  //       <div className="fusion-text fusion-text-4 hero-paragraph">
  //         <p>
  //           The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
  //         </p>
  //       </div>
  //     </div>
  //     <div className="about"></div> */}
  //   </>
  );
};

export default TestPage;
