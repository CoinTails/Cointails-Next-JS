import React, { useState, useEffect, useRef } from 'react';
import CoinBase from "../../public/images/coinBase.png";
import Exodus from "../../public/images/Exodus.png";
import MetaMask from "../../public/images/metaMask.png";
import Pitpay from "../../public/images/pitpay.png";
import Image from 'next/image';
import { Wallet, Link } from 'lucide-react';
import BtnsNextBack from '../createAccountApp/btns-next-back';

const Wallets = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const toggleActive = (action: boolean) => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
      setActiveItem(null);
    }
  };

  const handleActiveItem = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='text-center  bg-[rgba(251,247,247,0.86)]'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='flex justify-center font-bold text-3xl text-secondary-color-theme'>
          <Wallet className='h-8 w-8 mr-4 text-secondary-color-theme' />
          Connect Wallet
        </h2>
        <h3 className='my-8 font-normal text-2xl'>Select Wallet</h3>
      </div>
      <div  
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))"
            }}
        ref={componentRef}
        className='relative   gap-2 bg-[rgba(251,247,247,0.86) ]  justify-center mb-8'
      >
        <div
          onClick={() => {
            handleActiveItem('CoinBase');
          }}
          className={`relative w-fit 
          flex flex-col justify-center items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='CoinBase' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={CoinBase} alt='coinBase' />
          <h3 className={`${activeItem =='CoinBase' && 'transition-all  text-first-color' }`}>CoinBase</h3>
          {activeItem !== 'CoinBase' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-70`}
            ></div>
          )}
        </div>


        <div
          onClick={() => {
            handleActiveItem('Exodus');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='Exodus' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={Exodus} alt='Exodus' />
          <h3 className={`${activeItem =='Exodus' && 'transition-all  text-first-color' }`}>Exodus</h3>
          {activeItem !== 'Exodus' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>

        
        <div
          onClick={() => {
            handleActiveItem('MetaMask');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='MetaMask' && 
              ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={MetaMask} alt='MetaMask' />
          <h3 className={`${activeItem =='MetaMask' && 'transition-all  text-first-color' }`}>MetaMask</h3>
          {activeItem !== 'MetaMask' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>

        
        <div
          onClick={() => {
            handleActiveItem('Pitpay');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`rounded-lg mb-3  w-[120px] h-[120px] 
            ${activeItem =='Pitpay' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={Pitpay} alt='coinBase' />
          <h3 className={`${activeItem =='Pitpay' && 'transition-all  text-first-color' }`}>Pitpay</h3>
          {activeItem !== 'Pitpay' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>

        <div
          onClick={() => {
            handleActiveItem('coinBase1');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='CoinBase1' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={CoinBase} alt='coinBase1' />
          <h3 className={`${activeItem =='coinBase1' && 'transition-all  text-first-color' }`}>CoinBase</h3>
          {activeItem !== 'coinBase1' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>


        <div
          onClick={() => {
            handleActiveItem('Exodus1');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='Exodus1' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={Exodus} alt='Exodus1' />
          <h3 className={`${activeItem =='Exodus1' && 'transition-all  text-first-color' }`}>Exodus</h3>
          {activeItem !== 'Exodus1' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>

        
        <div
          onClick={() => {
            handleActiveItem('MetaMask1');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`mb-3
            ${activeItem =='MetaMask1' && 
              ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={MetaMask} alt='MetaMask1' />
          <h3 className={`${activeItem =='MetaMask' && 'transition-all  text-first-color' }`}>MetaMask</h3>
          {activeItem !== 'MetaMask1' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>

        
        <div
          onClick={() => {
            handleActiveItem('Pitpay1');
          }}
          className={`relative w-fit flex flex-col items-center cursor-pointer 
          `}
        >
          <Image className={`rounded-lg mb-3  w-[120px] h-[120px]
            ${activeItem =='Pitpay1' && ' transition-all border-4 rounded-xl border-first-color transform scale-110'}
          `} 
          src={Pitpay} alt='Pitpay1' />
          <h3 className={`${activeItem =='Pitpay' && 'transition-all  text-first-color' }`}>Pitpay</h3>
          {activeItem !== 'Pitpay1' && (
            <div
              className={`${
                activeItem !== null && 'absolute'
              } z-20 transition-all top-0 left-0 w-full h-full bg-[rgba(251,247,247,0.86)] opacity-50`}
            ></div>
          )}
        </div>


        
      
        
       
       
         </div>
    <BtnsNextBack backText='Back' isDisabled={false} nextIcon={<Link className='h-4 w-4' />} nextText='connect' />
  </div>
);
};

export default Wallets;