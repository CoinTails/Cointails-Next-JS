import React from 'react'
import CoinBase from "../../public/images/coinBase.png"
import Exodus from "../../public/images/Exodus.png"
import MetaMask from "../../public/images/metaMask.png"
import RainBow from "../../public/images/rainbow.png"
import Image from 'next/image'
import { Wallet,Link } from 'lucide-react'
import BtnsNextBack from '../createAccountApp/btns-next-back'
const Wallets = () => {
  return (

    <div className='text-center'>
      <div className='flex flex-col justify-center'>
      <h2 className='flex  justify-center font-bold text-3xl text-secondary-color-theme'>
        <Wallet className='h-8 w-8 mr-4 text-secondary-color-theme'/> 
        Connect Wallet
        </h2>
      <h3 className='my-8 font-normal text-2xl'>Select Wallet</h3>
      </div>
    <div className='grid grid-cols-4 justify-center mb-8'>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={CoinBase} alt="coinBase" />
        <h3>CoinBase</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={Exodus} alt="coinBase" />
        <h3>Exodus</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={MetaMask} alt="MetaMask" />
        <h3>MetaMask</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={RainBow} alt="Rainbow" />
        <h3>RainBow</h3>
      </div>
    </div>
    <div className='grid grid-cols-4 justify-center mt-4'>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={CoinBase} alt="coinBase" />
        <h3>CoinBase</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={Exodus} alt="coinBase" />
        <h3>Exodus</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={MetaMask} alt="MetaMask" />
        <h3>MetaMask</h3>
      </div>
      <div className='flex flex-col items-center'>
        <Image className='mb-3' src={RainBow} alt="Rainbow" />
        <h3>RainBow</h3>
      </div>
    </div>
    <BtnsNextBack backText='Back' isDisabled={false} nextIcon={<Link className='h-4 w-4'/>} nextText='connect'  />

  </div>
);
}

export default Wallets
