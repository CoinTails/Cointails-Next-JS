import React from 'react'
import Image, { StaticImageData } from 'next/image'


// Porpular
import Reactangle6 from '../../../public/images/Rectangle 132 (2).png'
import Reactangle7 from '../../../public/images/Rectangle 134 (2).png'
import Reactangle8 from '../../../public/images/Rectangle 136 (2).png'


interface CardSectionProps {
   src1: StaticImageData;
   title1: string;
   description1: string;
   price1: number;
   src2: StaticImageData;
   title2: string;
   description2: string;
   price2: number;
   src3: StaticImageData;
   title3: string;
   description3: string;
   price3: number;
}




const PopularPage: React.FC<CardSectionProps> = ({ ...prop }) => {

   const { src1, title1, description1, src2, price1, title2, description2, price2, src3, title3, description3, price3, } = prop

   return (
      <>
         {/* card image secsion two for You*/}
         <div className='mt-7 ml-7 mr-10' >
            <div className='flex justify-between'>
               <div>
                  Popular
               </div>
               <div className='flex'>
                  <div>
                     View All
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62177 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62177 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z" fill="#5E5E5E" />
                  </svg>
               </div>
            </div>

            {/* card image for offer */}
            <div className='flex gap-3'>
               <div className='flex rounded-lg bg-white shadow-md p-4  w-1/3'>
                  <div className='mt-7'>
                     <Image src={src1} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        {title1}
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>{description1}</div>
                     </div>
                     <div className='flex justify-between mt-[20px] '>
                        <div className='bg-[#F1F1F1] rounded-[50%] flex items-center justify-center p-3 text-[10px]'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3523 4C10.3523 2.61929 11.4766 1.5 12.8636 1.5C14.2506 1.5 15.375 2.61929 15.375 4C15.375 5.38071 14.2506 6.5 12.8636 6.5C12.1633 6.5 11.5303 6.21447 11.0753 5.7551L7.59875 8.12216C7.63089 8.28186 7.64773 8.44684 7.64773 8.61539C7.64773 8.94916 7.58178 9.26818 7.46219 9.55977L11.2743 12.0644C11.7069 11.712 12.2605 11.5 12.8636 11.5C14.2506 11.5 15.375 12.6193 15.375 14C15.375 15.3807 14.2506 16.5 12.8636 16.5C11.4766 16.5 10.3523 15.3807 10.3523 14C10.3523 13.6384 10.4297 13.2941 10.5688 12.9834L6.78755 10.499C6.34647 10.8824 5.7687 11.1154 5.13636 11.1154C3.74938 11.1154 2.625 9.9961 2.625 8.61539C2.625 7.23467 3.74938 6.11539 5.13636 6.11539C5.93393 6.11539 6.64389 6.48544 7.10359 7.06138L10.4729 4.76732C10.3946 4.5252 10.3523 4.2672 10.3523 4Z" fill="#A1A1A1" />
                           </svg>
                        </div>
                        <div className='flex bg-[#F1F1F1] rounded-[20px] w-[150px] h-[40px] p-4 ml-2'>
                           <div className='rounded-[50%] text-[15px] flex items-center justify-center p-2 '>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53315 1.91055C2.20751 1.79606 1.85072 1.96723 1.73623 2.29287C1.62175 2.61851 1.79292 2.9753 2.11856 3.08979L2.33623 3.16632C2.89257 3.36192 3.2582 3.49154 3.52723 3.62355C3.77992 3.74754 3.89131 3.8479 3.9647 3.95528C4.03991 4.06535 4.098 4.21654 4.13077 4.51933C4.16507 4.83617 4.16592 5.24885 4.16592 5.86547L4.16592 8.03354H17.2694C17.5449 6.65225 17.6741 5.95056 17.3129 5.48111C16.943 5.0002 15.679 5.0002 14.2749 5.0002H5.40971C5.40413 4.77493 5.39356 4.56998 5.37352 4.38481C5.32874 3.97116 5.23173 3.5939 4.99674 3.25003C4.75992 2.90348 4.44505 2.68153 4.07786 2.50136C3.73445 2.33286 3.29809 2.17946 2.78432 1.99885L2.53315 1.91055Z" fill="#A049E3" />
                                 <path opacity="0.5" d="M16.8331 10.1568L17.2496 8.13623L17.27 8.03394H4.1665C4.1665 10.4852 4.2192 11.2942 4.9412 12.0557C5.6632 12.8173 6.82525 12.8173 9.14933 12.8173H13.5684C14.8693 12.8173 15.5197 12.8173 15.9795 12.4426C16.4392 12.0679 16.5705 11.4309 16.8331 10.1568Z" fill="#A049E3" />
                                 <path d="M6.25 15C6.94036 15 7.5 15.5596 7.5 16.25C7.5 16.9404 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9404 5 16.25C5 15.5596 5.55964 15 6.25 15Z" fill="#A049E3" />
                                 <path d="M13.75 15.0001C14.4404 15.0001 15 15.5597 15 16.2501C15 16.9404 14.4404 17.5001 13.75 17.5001C13.0596 17.5001 12.5 16.9404 12.5 16.2501C12.5 15.5597 13.0596 15.0001 13.75 15.0001Z" fill="#A049E3" />
                              </svg>
                           </div>
                           <div className='text-[#7149E3] text-[12px] flex items-center justify-center'>Add to Cart</div>
                        </div>
                     </div>
                     <div className='flex justify-end text-[30px] font-bold'>
                        <div className='font-bruno-ace text-[#A049E3]'>CTS</div>
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>{price1}</div>
                     </div>
                  </div>
               </div>

               {/* card image in*/}

               {/* card image for offer */}
               <div className='flex rounded-lg bg-white shadow-md p-4  w-1/3'>
                  <div className='mt-7'>
                     <Image src={src2} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        {title1}
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>{description2}</div>
                     </div>
                     <div className='flex justify-between mt-[20px] '>
                        <div className='bg-[#F1F1F1] rounded-[50%] flex items-center justify-center p-3 text-[10px]'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3523 4C10.3523 2.61929 11.4766 1.5 12.8636 1.5C14.2506 1.5 15.375 2.61929 15.375 4C15.375 5.38071 14.2506 6.5 12.8636 6.5C12.1633 6.5 11.5303 6.21447 11.0753 5.7551L7.59875 8.12216C7.63089 8.28186 7.64773 8.44684 7.64773 8.61539C7.64773 8.94916 7.58178 9.26818 7.46219 9.55977L11.2743 12.0644C11.7069 11.712 12.2605 11.5 12.8636 11.5C14.2506 11.5 15.375 12.6193 15.375 14C15.375 15.3807 14.2506 16.5 12.8636 16.5C11.4766 16.5 10.3523 15.3807 10.3523 14C10.3523 13.6384 10.4297 13.2941 10.5688 12.9834L6.78755 10.499C6.34647 10.8824 5.7687 11.1154 5.13636 11.1154C3.74938 11.1154 2.625 9.9961 2.625 8.61539C2.625 7.23467 3.74938 6.11539 5.13636 6.11539C5.93393 6.11539 6.64389 6.48544 7.10359 7.06138L10.4729 4.76732C10.3946 4.5252 10.3523 4.2672 10.3523 4Z" fill="#A1A1A1" />
                           </svg>
                        </div>
                        <div className='flex bg-[#F1F1F1] rounded-[20px] w-[150px] h-[40px] p-4 ml-2'>
                           <div className='rounded-[50%] text-[15px] flex items-center justify-center p-2 '>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53315 1.91055C2.20751 1.79606 1.85072 1.96723 1.73623 2.29287C1.62175 2.61851 1.79292 2.9753 2.11856 3.08979L2.33623 3.16632C2.89257 3.36192 3.2582 3.49154 3.52723 3.62355C3.77992 3.74754 3.89131 3.8479 3.9647 3.95528C4.03991 4.06535 4.098 4.21654 4.13077 4.51933C4.16507 4.83617 4.16592 5.24885 4.16592 5.86547L4.16592 8.03354H17.2694C17.5449 6.65225 17.6741 5.95056 17.3129 5.48111C16.943 5.0002 15.679 5.0002 14.2749 5.0002H5.40971C5.40413 4.77493 5.39356 4.56998 5.37352 4.38481C5.32874 3.97116 5.23173 3.5939 4.99674 3.25003C4.75992 2.90348 4.44505 2.68153 4.07786 2.50136C3.73445 2.33286 3.29809 2.17946 2.78432 1.99885L2.53315 1.91055Z" fill="#A049E3" />
                                 <path opacity="0.5" d="M16.8331 10.1568L17.2496 8.13623L17.27 8.03394H4.1665C4.1665 10.4852 4.2192 11.2942 4.9412 12.0557C5.6632 12.8173 6.82525 12.8173 9.14933 12.8173H13.5684C14.8693 12.8173 15.5197 12.8173 15.9795 12.4426C16.4392 12.0679 16.5705 11.4309 16.8331 10.1568Z" fill="#A049E3" />
                                 <path d="M6.25 15C6.94036 15 7.5 15.5596 7.5 16.25C7.5 16.9404 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9404 5 16.25C5 15.5596 5.55964 15 6.25 15Z" fill="#A049E3" />
                                 <path d="M13.75 15.0001C14.4404 15.0001 15 15.5597 15 16.2501C15 16.9404 14.4404 17.5001 13.75 17.5001C13.0596 17.5001 12.5 16.9404 12.5 16.2501C12.5 15.5597 13.0596 15.0001 13.75 15.0001Z" fill="#A049E3" />
                              </svg>
                           </div>
                           <div className='text-[#7149E3] text-[12px] flex items-center justify-center'>Add to Cart</div>
                        </div>
                     </div>
                     <div className='flex justify-end text-[30px] font-bold'>
                        <div className='font-bruno-ace text-[#A049E3]'>CTS</div>
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>{price2}</div>
                     </div>
                  </div>
               </div>


               <div className='flex rounded-lg bg-white shadow-md p-4  w-1/3'>
                  <div className='mt-7'>
                     <Image src={src3} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        {title3}
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>{description3}</div>
                     </div>
                     <div className='flex justify-between mt-[20px] '>
                        <div className='bg-[#F1F1F1] rounded-[50%] flex items-center justify-center p-3 text-[10px]'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3523 4C10.3523 2.61929 11.4766 1.5 12.8636 1.5C14.2506 1.5 15.375 2.61929 15.375 4C15.375 5.38071 14.2506 6.5 12.8636 6.5C12.1633 6.5 11.5303 6.21447 11.0753 5.7551L7.59875 8.12216C7.63089 8.28186 7.64773 8.44684 7.64773 8.61539C7.64773 8.94916 7.58178 9.26818 7.46219 9.55977L11.2743 12.0644C11.7069 11.712 12.2605 11.5 12.8636 11.5C14.2506 11.5 15.375 12.6193 15.375 14C15.375 15.3807 14.2506 16.5 12.8636 16.5C11.4766 16.5 10.3523 15.3807 10.3523 14C10.3523 13.6384 10.4297 13.2941 10.5688 12.9834L6.78755 10.499C6.34647 10.8824 5.7687 11.1154 5.13636 11.1154C3.74938 11.1154 2.625 9.9961 2.625 8.61539C2.625 7.23467 3.74938 6.11539 5.13636 6.11539C5.93393 6.11539 6.64389 6.48544 7.10359 7.06138L10.4729 4.76732C10.3946 4.5252 10.3523 4.2672 10.3523 4Z" fill="#A1A1A1" />
                           </svg>
                        </div>
                        <div className='flex bg-[#F1F1F1] rounded-[20px] w-[150px] h-[40px] p-4 ml-2'>
                           <div className='rounded-[50%] text-[15px] flex items-center justify-center p-2 '>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53315 1.91055C2.20751 1.79606 1.85072 1.96723 1.73623 2.29287C1.62175 2.61851 1.79292 2.9753 2.11856 3.08979L2.33623 3.16632C2.89257 3.36192 3.2582 3.49154 3.52723 3.62355C3.77992 3.74754 3.89131 3.8479 3.9647 3.95528C4.03991 4.06535 4.098 4.21654 4.13077 4.51933C4.16507 4.83617 4.16592 5.24885 4.16592 5.86547L4.16592 8.03354H17.2694C17.5449 6.65225 17.6741 5.95056 17.3129 5.48111C16.943 5.0002 15.679 5.0002 14.2749 5.0002H5.40971C5.40413 4.77493 5.39356 4.56998 5.37352 4.38481C5.32874 3.97116 5.23173 3.5939 4.99674 3.25003C4.75992 2.90348 4.44505 2.68153 4.07786 2.50136C3.73445 2.33286 3.29809 2.17946 2.78432 1.99885L2.53315 1.91055Z" fill="#A049E3" />
                                 <path opacity="0.5" d="M16.8331 10.1568L17.2496 8.13623L17.27 8.03394H4.1665C4.1665 10.4852 4.2192 11.2942 4.9412 12.0557C5.6632 12.8173 6.82525 12.8173 9.14933 12.8173H13.5684C14.8693 12.8173 15.5197 12.8173 15.9795 12.4426C16.4392 12.0679 16.5705 11.4309 16.8331 10.1568Z" fill="#A049E3" />
                                 <path d="M6.25 15C6.94036 15 7.5 15.5596 7.5 16.25C7.5 16.9404 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9404 5 16.25C5 15.5596 5.55964 15 6.25 15Z" fill="#A049E3" />
                                 <path d="M13.75 15.0001C14.4404 15.0001 15 15.5597 15 16.2501C15 16.9404 14.4404 17.5001 13.75 17.5001C13.0596 17.5001 12.5 16.9404 12.5 16.2501C12.5 15.5597 13.0596 15.0001 13.75 15.0001Z" fill="#A049E3" />
                              </svg>
                           </div>
                           <div className='text-[#7149E3] text-[12px] flex items-center justify-center'>Add to Cart</div>
                        </div>
                     </div>
                     <div className='flex justify-end text-[30px] font-bold'>
                        <div className='font-bruno-ace text-[#A049E3]'>CTS</div>
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>{price3}</div>
                     </div>
                  </div>
               </div>


            </div>



         </div>
      </>
   )
}

export default PopularPage