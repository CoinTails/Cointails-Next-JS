"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    setIsComplete(true)
  }, [])

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      {isComplete && <>
      <div className="container flex flex-col mx-auto bg-white">
            <div className="relative flex flex-wrap items-center
             justify-between w-full bg-white group py-7 shrink-0">
                <div>
                    {/* <Image className="h-8" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-nav-0.png"> */}
              </div>
                <div className="items-center justify-between hidden gap-12 text-black md:flex">
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
                     href="javascript:void(0)">Product</Link>
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
                     href="javascript:void(0)">Features</Link>
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900"
                     href="javascript:void(0)">Pricing</Link>
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" 
                    href="javascript:void(0)">Company</Link>
                </div>
                <div className="items-center hidden gap-8 md:flex">
                    <button className="flex items-center text-sm font-normal text-gray-800 hover:text-gray-900 transition duration-300">Log In</button>
                    <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                        Sign Up
                    </button>
                </div>
                <button onClick={toggleLinks}>
                    <AlignJustify/>
                </button>
                <div className="absolute 
                 flex  md:hidden transition-all duration-300 ease-in-out
                 flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden
                  bg-white py-4 px-4 rounded-2xl 
                   top-full">
                    <Link className="text-sm font-normal text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Product</Link>
                    <Link className="text-sm font-normal
                     text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Features</Link>
                    <Link className="text-sm font-normal 
                    text-dark-grey-700 hover:text-dark-grey-900" href="javascript:void(0)">Pricing</Link>
                    <Link className="text-sm font-normal text-dark-grey-700
                     hover:text-dark-grey-900" href="javascript:void(0)">Company</Link>
                    <button className="flex items-center text-sm font-normal text-black">Log In</button>
                    <button className="flex items-center px-4 py-2 text-sm font-bold 
                    rounded-xl bg-purple-blue-100 text-purple-blue-600 
                    hover:bg-purple-blue-600 hover:text-white transition duration-300">Sign Up</button>
                </div>
            </div>
        </div>
    </>}
    </>
  )
}

export default Navbar