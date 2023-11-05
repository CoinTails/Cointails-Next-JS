import Image from 'next/image'
import React from 'react'
import fullLogo from '../../../public/images/fullLogo.png'
import userAvater from '../../../public/images/Ellipse 25@2x.png'
import TicketStar from '../../../public/images/TickerStar.png'
import Rectangle from '../../../public/images/Rectangle 132.png'
import Reactangle1 from '../../../public/images/Rectangle 134.png'
import Reactangle2 from '../../../public/images/Rectangle 136.png'




const LandingPage = () => {
   return (
      <div className='w-full'>
         {/* Header */}
         <div className='flex justify-between'>
            <div className='mt-7 ml-7'>
               <Image src={fullLogo} alt='fulllogo' width={300} height={200} />
            </div>
            <div className='mt-7 mr-7 flex '>
               <div className=''>
                  <Image src={userAvater} alt='fulllogo' width={50} height={50} />
               </div>
               <div className='ml-7 pt-[5px] text-3xl'>
                  <div className=" [font-family:'Mona_Sans-Regular',Helvetica] font-normal text-[#3e3e3e] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                     Alexander Chinonso
                  </div>
                  <div className='flex '>
                     <div className='text-purple'>@alexander</div>
                     <div className='flex justify-center ml-1'>
                        <Image src={TicketStar} alt='fulllogo' width={15} height={8} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Header ends */}

         {/* search start */}
         <div className='flex justify-between'>
            <form>
               <div className="mt-7 ml-7 w-[600px] relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <path opacity="0.5" d="M27.0843 14.8749C27.0843 21.6176 21.6182 27.0837 14.8755 27.0837C8.13271 27.0837 2.66663 21.6176 2.66663 14.8749C2.66663 8.1321 8.13271 2.66602 14.8755 2.66602C21.6182 2.66602 27.0843 8.1321 27.0843 14.8749Z" fill="#7149E3" />
                        <path d="M22.8001 24.1639L27.6885 29.0523C28.0649 29.4287 28.6752 29.4287 29.0516 29.0523C29.428 28.6759 29.428 28.0656 29.0516 27.6892L24.1632 22.8008C23.7453 23.2901 23.2894 23.746 22.8001 24.1639Z" fill="#7149E3" />
                     </svg>
                  </div>
                  <input type="search" id="default-search" className=" block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-[#F1F1F1]" placeholder="Search store" required />
               </div>
            </form>
            <div className='flex mt-7 mr-10 w-[260px] h-[50px] bg-[#F1F1F1] rounded items-center justify-center'>
               <div className='text-[#A049E3] text-xs'>Become a Seller on Coin Tails</div>
               <div className='flex justify-center ml-[20px]'>
                  <Image src={TicketStar} alt='fulllogo' width={25} height={25} />
               </div>
            </div>
         </div>
         {/* search ends */}

         {/* category section start*/}
         <div className='flex  justify-between mt-7 ml-7 mr-10 bg-[#EEE9FC] rounded h-[80px]'>
            <div className='flex items-center ml-10 mr-10 h-full'>
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                  <path opacity="0.5" d="M21.8434 36.6673H18.1565C12.4123 36.6673 9.54013 36.6673 7.58169 34.981C5.62325 33.2946 5.21707 30.4717 4.40471 24.826L3.9401 21.5971C3.30769 17.202 2.99149 15.0045 3.89226 13.1256C4.79302 11.2467 6.71029 10.1045 10.5448 7.82033L12.8529 6.44544C16.3351 4.37113 18.0761 3.33398 20 3.33398C21.9238 3.33398 23.6649 4.37113 27.1471 6.44543L29.4551 7.82033C33.2897 10.1045 35.2069 11.2467 36.1077 13.1256C37.0085 15.0045 36.6923 17.202 36.0599 21.5971L35.5952 24.826C34.7829 30.4717 34.3767 33.2946 32.4183 34.981C30.4598 36.6673 27.5877 36.6673 21.8434 36.6673Z" fill="#7149E3" />
                  <path d="M13.75 30C13.75 29.3096 14.3096 28.75 15 28.75H25C25.6904 28.75 26.25 29.3096 26.25 30C26.25 30.6904 25.6904 31.25 25 31.25H15C14.3096 31.25 13.75 30.6904 13.75 30Z" fill="#7149E3" />
               </svg>
               <div className='ml-[10px] text-purple'>
                  Home
               </div>
            </div>
            <div className='flex items-center ml-10 mr-10 h-full'>
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                  <path opacity="0.5" d="M15.9874 5.33375C15.5816 5.67961 15.3787 5.85255 15.1619 5.99782C14.6651 6.33082 14.1071 6.56194 13.5203 6.67779C13.2643 6.72833 12.9986 6.74954 12.467 6.79196L12.4669 6.79196C11.1313 6.89855 10.4635 6.95184 9.90634 7.14863C8.61768 7.6038 7.60405 8.61743 7.14888 9.9061C6.95208 10.4633 6.89879 11.1311 6.79221 12.4667L6.7922 12.4667C6.74978 12.9983 6.72857 13.2641 6.67803 13.5201C6.56219 14.1069 6.33107 14.6648 5.99806 15.1617C5.85279 15.3784 5.67984 15.5814 5.33395 15.9873C4.46489 17.0071 4.03034 17.517 3.77552 18.0501C3.18615 19.2832 3.18615 20.7167 3.77552 21.9497C4.03034 22.4829 4.46488 22.9928 5.33395 24.0126L5.33401 24.0126C5.67982 24.4184 5.85281 24.6214 5.99806 24.8382C6.33107 25.335 6.56219 25.893 6.67803 26.4797C6.72857 26.7357 6.74978 27.0015 6.7922 27.5331L6.79221 27.5332C6.89879 28.8688 6.95208 29.5366 7.14888 30.0937C7.60405 31.3824 8.61768 32.396 9.90634 32.8512C10.4635 33.048 11.1313 33.1013 12.4669 33.2079L12.467 33.2079C12.9986 33.2503 13.2643 33.2715 13.5203 33.322C14.1071 33.4379 14.6651 33.669 15.1619 34.002C15.3787 34.1473 15.5816 34.3202 15.9875 34.6661C17.0073 35.5352 17.5172 35.9697 18.0503 36.2246C19.2834 36.8139 20.7169 36.8139 21.95 36.2246C22.4831 35.9697 22.993 35.5352 24.0128 34.6661C24.4187 34.3202 24.6217 34.1473 24.8384 34.002C25.3352 33.669 25.8932 33.4379 26.48 33.322C26.736 33.2715 27.0018 33.2503 27.5334 33.2079L27.5334 33.2079C28.869 33.1013 29.5368 33.048 30.094 32.8512C31.3826 32.396 32.3963 31.3824 32.8514 30.0937C33.0482 29.5366 33.1015 28.8688 33.2081 27.5332L33.2081 27.5331C33.2505 27.0015 33.2718 26.7357 33.3223 26.4797C33.4381 25.893 33.6693 25.335 34.0023 24.8382C34.1475 24.6214 34.3205 24.4185 34.6664 24.0126C35.5354 22.9928 35.97 22.4829 36.2248 21.9497C36.8142 20.7167 36.8142 19.2832 36.2248 18.0501C35.97 17.517 35.5354 17.0071 34.6664 15.9873C34.3205 15.5814 34.1475 15.3784 34.0023 15.1617C33.6693 14.6648 33.4381 14.1069 33.3223 13.5201C33.2718 13.2641 33.2505 12.9983 33.2081 12.4667L33.2081 12.4666C33.1015 11.1311 33.0482 10.4632 32.8514 9.9061C32.3963 8.61743 31.3826 7.6038 30.094 7.14863C29.5368 6.95184 28.869 6.89855 27.5334 6.79196L27.5334 6.79196C27.0018 6.74954 26.736 6.72833 26.48 6.67779C25.8932 6.56194 25.3352 6.33082 24.8384 5.99782C24.6217 5.85255 24.4187 5.6796 24.0128 5.3337C22.993 4.46463 22.4831 4.03009 21.95 3.77528C20.7169 3.18591 19.2834 3.18591 18.0503 3.77528C17.5172 4.03009 17.0073 4.46464 15.9875 5.3337L15.9874 5.33375Z" fill="#3E3E3E" />
                  <path d="M26.3848 13.6168C26.9145 14.1465 26.9145 15.0053 26.3848 15.5351L15.5334 26.3865C15.0036 26.9162 14.1448 26.9162 13.6151 26.3865C13.0853 25.8568 13.0853 24.998 13.6151 24.4682L24.4665 13.6168C24.9963 13.0871 25.8551 13.0871 26.3848 13.6168Z" fill="#3E3E3E" />
                  <path d="M26.33 24.5231C26.33 25.5219 25.5202 26.3317 24.5214 26.3317C23.5225 26.3317 22.7128 25.5219 22.7128 24.5231C22.7128 23.5242 23.5225 22.7145 24.5214 22.7145C25.5202 22.7145 26.33 23.5242 26.33 24.5231Z" fill="#3E3E3E" />
                  <path d="M15.4785 17.2888C16.4773 17.2888 17.2871 16.4791 17.2871 15.4802C17.2871 14.4814 16.4773 13.6716 15.4785 13.6716C14.4796 13.6716 13.6699 14.4814 13.6699 15.4802C13.6699 16.4791 14.4796 17.2888 15.4785 17.2888Z" fill="#3E3E3E" />
               </svg>
               <div className='ml-[10px]'>
                  Offers
               </div>
            </div>
            <div className='flex items-center ml-10 mr-10 h-full'>
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                  <path opacity="0.5" d="M6.80458 18.1571C7.53611 14.2556 7.90187 12.3049 9.29049 11.1525C10.6791 10 12.6638 10 16.6333 10H23.3681C27.3376 10 29.3223 10 30.7109 11.1525C32.0995 12.3049 32.4653 14.2556 33.1968 18.1571L34.4468 24.8238C35.4755 30.3099 35.9898 33.053 34.4903 34.8598C32.9908 36.6667 30.1999 36.6667 24.6181 36.6667H15.3833C9.80154 36.6667 7.01065 36.6667 5.51112 34.8598C4.0116 33.053 4.52592 30.3099 5.55458 24.8238L6.80458 18.1571Z" fill="#3E3E3E" />
                  <path d="M16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C24.6934 10.0002 25.5198 10.0028 26.2498 10.0247C26.2499 10.0165 26.25 10.0082 26.25 9.99992V8.33325C26.25 4.88147 23.4518 2.08325 20 2.08325C16.5482 2.08325 13.75 4.88147 13.75 8.33325V9.99992C13.75 10.0082 13.7501 10.0165 13.7502 10.0248C14.4802 10.0028 15.3066 10.0003 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325Z" fill="#3E3E3E" />
                  <path d="M18.4048 26.4427C16.9414 25.369 15 23.6353 15 21.9946C15 19.2059 17.7501 18.1647 20 20.319C22.2499 18.1647 25 19.2059 25 21.9946C25 23.6354 23.0586 25.369 21.5952 26.4427C20.8957 26.956 20.5459 27.2127 20 27.2127C19.4541 27.2127 19.1044 26.956 18.4048 26.4427Z" fill="#3E3E3E" />
               </svg>
               <div className='ml-[10px]'>
                  Poppuler
               </div>
            </div>
            <div className='flex items-center ml-10 mr-10 h-full'>
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M9.74219 13.3359C9.74219 8.62189 9.74219 6.26487 11.2442 4.8004C12.7462 3.33594 15.1637 3.33594 19.9986 3.33594C24.8335 3.33594 27.251 3.33594 28.753 4.8004C30.255 6.26487 30.255 8.62189 30.255 13.3359V26.6693C30.255 31.3833 30.255 33.7403 28.753 35.2048C27.251 36.6693 24.8335 36.6693 19.9986 36.6693C15.1637 36.6693 12.7462 36.6693 11.2442 35.2048C9.74219 33.7403 9.74219 31.3833 9.74219 26.6693V13.3359Z" fill="#3E3E3E" />
                  <g opacity="0.5">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M4.61604 6.25C5.32409 6.25 5.89809 6.80964 5.89809 7.5V32.5C5.89809 33.1904 5.32409 33.75 4.61604 33.75C3.90798 33.75 3.33398 33.1904 3.33398 32.5V7.5C3.33398 6.80964 3.90798 6.25 4.61604 6.25ZM35.3853 6.25C36.0933 6.25 36.6673 6.80964 36.6673 7.5V32.5C36.6673 33.1904 36.0933 33.75 35.3853 33.75C34.6772 33.75 34.1032 33.1904 34.1032 32.5V7.5C34.1032 6.80964 34.6772 6.25 35.3853 6.25Z" fill="#3E3E3E" />
                  </g>
               </svg>
               <div className='ml-[10px]'>
                  Categories
               </div>
            </div>
         </div>
         {/* category section end*/}


         {/* card image secsion one on offer*/}
         <div className='mt-7 ml-7 mr-10'>
            <div className='flex justify-between'>
               <div>
                  On Offer
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
                     <Image src={Rectangle} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        Vintage Camera
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat  consequatur qui vero voluptas qui. quia.</div>
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
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>4000</div>
                     </div>
                  </div>
               </div>
               {/* card image in*/}
               {/* card image in*/}
               <div className='flex rounded-lg bg-white shadow-md p-4 w-1/3'>
                  <div className='mt-7'>
                     <Image src={Reactangle1} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        White Keyboard
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat  consequatur qui vero voluptas qui. quia.</div>
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
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>1200</div>
                     </div>
                  </div>
               </div>
               {/* card image in*/}

               {/* card image in*/}
               <div className='flex rounded-lg bg-white shadow-md p-4 w-1/3'>
                  <div className='mt-7'>
                     <Image src={Reactangle2} className='rounded-[12px]' alt='fulllogo' width={150} height={300} />
                  </div>
                  <div className='w-[200px] flex flex-col justify-center mt-[30px] ml-[20px]'>
                     <div className='text-[20px] text-[#3E3E3E] font-[400]'>
                        Gray Desk Mac
                     </div>
                     <div>
                        <div className='text-[11px] text-[#5E5E5E]'>Temporibus at hic ut. consequatur qui vero voluptas qui. Pariatur atque autem illo iste quasi. Officiis perspiciatis ratione in odio repellat  consequatur qui vero voluptas qui. quia.</div>
                     </div>
                     <div className='flex justify-between mt-[20px]'>
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
                        <div className='ml-[10px] font-mona-sans text-[#A049E3]'>500</div>
                     </div>
                  </div>
               </div>
               {/* card image in*/}
            </div>
         </div>







         {/* card image */}


      </div>
   )
}

export default LandingPage