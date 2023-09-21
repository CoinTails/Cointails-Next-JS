import { cn } from "@/lib/utils";
import TooltipComponent from "@/components/TooltipComponent";
const ExploreCategories = () => {
  const expoloreCats=
  ['John Lewis'
  ,'Atlassian'
  ,'ASOS'
  ,'BP'
  ,'AT&T'
  ,'Booking.com'
  ,'ASOS'
  ,'Uber'
  ,'China National Petroleum'
  ,'Airbnb'
  ,'Uber'
  ,'Monzo'
  ,'Boots'
  ,'Starling Bank'
  ,'VSCO'
  ,'Apple'
  ,'Amazon'
  ,'Starling Bank'
  ,'VSCO'
  ,'Apple'
  ,'Amazon'
  ,'Microsoft'
  ,'eBay'
  ,'Costco Wholesale'
  ,'Skyscanner'
  ,'BP'
  ,'Airbnb'
  ,'Formula 1'
  ,'Qantas']
  const filteredCates = expoloreCats.map((cate,index)=>{
    
      const providedCate = cate.length > 15 ?`${cate.substring(0,15)}...`:cate
      return(
        <div key={index} className="mb-2">
          <TooltipComponent tooltipTrigger={providedCate} tooltipContent={cate} />
        </div>
      )
  }
    )
  return (
    <div className={cn('rounded-xl px-4 pt-2 scroll-mb-80  text-left w-full bg-main-background-color ')}>
      <h2 className=' text-2xl my-4 font-bold text-primary-first-color'>Explore Categories</h2>
      <div 
     style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))"
    }}  
    className="text text-xs text-main-paragraph-color"
    >
      

      {filteredCates}
      
    </div>
    </div>
  )
}

export default ExploreCategories
