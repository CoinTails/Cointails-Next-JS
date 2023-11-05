import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import MiddlePage from './components/LandingPage/MiddlePage'


// For You Image
import Reactangle3 from '../public/images/Rectangle 132 (1).png'
import Reactangle4 from '../public/images/Rectangle 134 (1).png'
import Reactangle5 from '../public/images/Rectangle 136 (1).png'

import Reactangle6 from '../public/images/Rectangle 134 (2).png'
import Reactangle7 from '../public/images/Rectangle 136 (2).png'
import Reactangle8 from '../public/images/Rectangle 136 (2).png'
import PopularPage from './components/LandingPage/PopularPage'
import CardCategories from './components/LandingPage/CardCategories'
import RecommendationCard from './components/LandingPage/RecommendationCard'
import SecondRecommend from './components/LandingPage/SecondRecommend'

const middlePagePropsArray = [
   {
      src1: Reactangle3,
      title1: 'Plant Wallpaper',
      description1:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price1: 400,
      src2: Reactangle4,
      title2: 'White Keyboard',
      description2:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price2: 2200,
      src3: Reactangle5,
      title3: 'Gray Classic Watch',
      description3:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price3: 2200,
   },
   // Add more objects with props as needed
];

const middlePagePropsArray1 = [
   {
      src1: Reactangle6,
      title1: 'Blue Teal Chair',
      subTitle2: 'Popular',
      description1:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price1: 4100,
      src2: Reactangle7,
      title2: 'Hanging Lamps',
      description2:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price2: 2800,
      src3: Reactangle8,
      title3: 'Artifical Plants',
      description3:
         'Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat consequatur qui vero voluptas qui. quia.',
      price3: 400,
   },
   // Add more objects with props as needed
];

const Home: React.FC = () => {
   return (
      <div>
         <LandingPage />
         <div>
            {middlePagePropsArray.map((props, index) => (
               <MiddlePage key={index} {...props} />
            ))}
         </div>
         <div>
            {middlePagePropsArray1.map((props, index) => (
               <PopularPage key={index} {...props} />
            ))}
         </div>
         <CardCategories />
         <div>
            {middlePagePropsArray.map((props, index) => (
               <RecommendationCard key={index} {...props} />
            ))}
         </div>
         <div>
            {middlePagePropsArray.map((props, index) => (
               <SecondRecommend key={index} {...props} />
            ))}
         </div>
      </div>
   );
}
export default Home