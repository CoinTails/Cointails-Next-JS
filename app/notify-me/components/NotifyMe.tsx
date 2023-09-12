import React from 'react';
import { bruno_ace } from '@/app/fonts';
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import OurLogo from "@/public/images/indexLogo.svg";
import Coin from "@/public/images/Coin.svg";
import Tail from "@/public/images/Tails.svg";
import CenterCoinTail from '@/components/cards/CenterCoinTail';
const NotifyMe = () => {
  return (
    <div className={cn(bruno_ace.className, '')}>
      <div className="bg-gradient-radial-circle-left rounded-3xl 
      w-[100vw] mx-auto h-[100vh] overflow-hidden z-10">
        <div className="flex flex-col lg:px-40
         md:justify-between w-full md:w-[60%] md:max-w-[60%] h-[100vh] px-4 md:py-10 py-11">
          {/* Large screen */}
          <div className='hidden md:block'>
            <CenterCoinTail ourLogoSrc={OurLogo} coinLogoSrc={Coin} tailLogoSrc={Tail} />
          </div>
          {/* Small screen */}
          <div className='block mb-16 md:mb-4 md:hidden'>
            <CenterCoinTail ourLogoSrc={OurLogo} coinLogoSrc={Coin} tailLogoSrc={Tail} />
          </div>
          <div className="rounded-xl mt-4 px-4 py-4 flex flex-col justify-center items-center">
            <h2 className="text-first-dark-color text-md text-center sm:text-md  text-black md:text-first-dark-color font-bold">
              ENTER YOUR MAIL TO GET NOTIFIED WHEN WE ARE LIVE
            </h2>
            <div className="relative w-full my-8">
              <div className="absolute left-[-5px] rounded-full bg-primary-second-color h-full w-20">
                <div className="h-full w-full flex justify-center items-center text-white">
                  <Mail className="cursor-pointer md:cursor-auto text-center w-8 h-8" />
                </div>
              </div>
              <Input
                className="rounded-full text-primary-second-color focus:ring-primary-second-color border-2 focus:border-3 hover:border-3 px-20 py-6 md:py-8 border-primary-second-color focus:outline-none hover:outline-primary-second-color"
                placeholder="YOURMAIL@GMAIL.COM"
              />
            </div>
            <Button
              style={{
                background: "radial-gradient(circle at right, #A049E3 40%, #7149E3 80%)"
              }}
              className="block rounded-full leading-[0.25rem]  text-center py-8 px-12 "
            >
              NOTIFY ME!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyMe;