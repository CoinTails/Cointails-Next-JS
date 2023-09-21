import React from "react";
import RecommendedSeller from "@/components/cards/RecommendedSeller"
import HeaderCard from "@/components/cards/HeaderCard"
import HorizonalScrollNav from "@/components/cards/HorizonalScrollNav";
import NewMainCard from "@/components/cards/NewMainCard"
import { ChevronRightSquare } from "lucide-react";
import ExploreCategories from "@/components/cards/ExploreCategories";
import BecomeSallerAndSearch from "@/components/cards/BecomeSallerAndSearch";
const Home=(
)=> {
  const headerValues = {
      mainText:"header 1",
      secondText:"header second",    
  }
  const cards = Array.from({length:3}).map((_,index)=>
                        (
                          <React.Fragment key={index}>
                                        <NewMainCard />

                          </React.Fragment>
                        )

                      )
  return (
    <main  className="mx-auto 
      w-full md:px-8 max-w-full sm:max-w-7xl flex flex-col
         gap-4   justify-center items-center mb-20 text-center overflow-hidden " >

      <div className="w-full wrelative z-40">
      <HeaderCard />
        </div>       
      <div className="my-4 w-full left-0 z-30 top-16 bg-opacity-first-color">
      <HorizonalScrollNav/>
    </div>
    <div className="hidden min-w-full sm:block">
        <BecomeSallerAndSearch />
        </div>
        <hr/>
      {/* on offer */}
      <div className="w-full mb-8 mt-16 ">
        <div className="flex justify-between w-full text-first-dark-color px-2 sm:px-4">
          <p>On Offer</p>
          <p className="flex cursor-pointer">see All <ChevronRightSquare className="mx-2 text-first-dark-color"/></p>
        </div>

      <div className="w-full flex overflow-x-scroll  ">
      {cards}
   
      </div>
      </div>

    {/*For You  */}
      <div className="w-full my-8">
        <div className="flex justify-between w-full text-first-dark-color px-2 sm:px-4">
          <p>For You</p>
          <p className="flex cursor-pointer">see All <ChevronRightSquare className="mx-2 text-first-dark-color"/></p>
        </div>

      <div className="w-full flex overflow-x-scroll ">
      {cards}
      </div>
      </div>

      {/* popular */}
      <div className="w-full my-8 ">
        <div className="flex justify-between w-full text-first-dark-color px-2 sm:px-4">
          <p>Popular</p>
          <p className="flex cursor-pointer">see All <ChevronRightSquare className="mx-2 text-first-dark-color"/></p>
        </div>

      <div className="w-full flex overflow-x-scroll ">
      <NewMainCard />
      <NewMainCard />
      <NewMainCard />
      <NewMainCard />
      <NewMainCard />
      </div>
      </div>
      {/* Explore Categories */}  
      
      <ExploreCategories/>
      <div className="w-full my-8 ">
          <p className="text-left">Recommendations</p>
      <div className="w-full flex overflow-x-scroll ">
      {cards}
      </div>
      <div className="w-full flex overflow-x-scroll ">
      {cards}
      </div>
      </div>

      </main>
  )
}


export default Home
